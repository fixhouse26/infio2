import { NextResponse } from "next/server";
import { addImages, buildLibraryItinerary, itineraryCacheKey, type Itinerary, type TripInput } from "@/lib/itinerary-engine";
import { getCachedItinerary, setCachedItinerary } from "@/lib/itinerary-cache";

const schema = {
  type:"object",
  additionalProperties:false,
  properties:{
    title:{type:"string"},
    route:{type:"string"},
    summary:{type:"string"},
    dayPlans:{
      type:"array",
      items:{
        type:"object",
        additionalProperties:false,
        properties:{
          day:{type:"integer"},
          city:{type:"string"},
          title:{type:"string"},
          morning:{type:"string"},
          afternoon:{type:"string"},
          evening:{type:"string"},
          estimatedDayLow:{type:"number"},
          estimatedDayHigh:{type:"number"},
          image:{type:"string"}
        },
        required:["day","city","title","morning","afternoon","evening","estimatedDayLow","estimatedDayHigh","image"]
      }
    },
    planningNotes:{type:"array",items:{type:"string"}}
  },
  required:["title","route","summary","dayPlans","planningNotes"]
};

function outputText(response:Record<string,unknown>) {
  const direct=response.output_text;
  if(typeof direct==="string" && direct) return direct;
  const output=Array.isArray(response.output)?response.output:[];
  for(const item of output as Array<Record<string,unknown>>) {
    const content=Array.isArray(item.content)?item.content:[];
    for(const c of content as Array<Record<string,unknown>>) {
      if(typeof c.text==="string") return c.text;
    }
  }
  return "";
}

function shouldUseAI(data:TripInput) {
  const mode=(process.env.AI_ITINERARY_MODE || "library").toLowerCase();
  if(mode==="library" || mode==="off") return false;
  if(mode==="always") return true;
  const notes=String(data.notes||"").trim();
  const other=String(data.otherPlace||"").trim();
  const attractions=Array.isArray(data.attractions)?data.attractions.length:0;
  const places=Array.isArray(data.places)?data.places.length:0;
  return Boolean(notes || other || attractions>=2 || places>=2);
}

async function personalizeWithAI(data:TripInput, base:Itinerary):Promise<Itinerary|null> {
  const key=process.env.OPENAI_API_KEY;
  if(!key) return null;
  const model=process.env.OPENAI_ITINERARY_MODEL || "gpt-5.6-luna";
  const prompt = `You are the itinerary personalization engine for InfiO2 Travel.
Use the supplied deterministic base plan and traveler preferences. Improve sequencing, wording, free-time balance and relevance to selected interests.
Do NOT invent live prices, live availability, flight schedules, hotel availability, visa approvals, or guarantees.
Do NOT materially change the provided total cost estimate. Keep each day's estimated activity range close to the base day range.
Return concise, practical day-by-day content. Preserve the same number of days.
Traveler preferences:
${JSON.stringify(data)}
Base plan:
${JSON.stringify(base)}`;

  const r=await fetch("https://api.openai.com/v1/responses",{
    method:"POST",
    headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},
    body:JSON.stringify({
      model,
      input:[
        {role:"developer",content:"Generate a structured preliminary travel itinerary. This is planning guidance only, never a live quote or booking confirmation."},
        {role:"user",content:prompt}
      ],
      text:{format:{type:"json_schema",name:"infio2_itinerary",strict:true,schema}},
      reasoning:{effort:"low"},
      max_output_tokens:6500
    })
  });
  if(!r.ok) return null;
  const body=await r.json() as Record<string,unknown>;
  const raw=outputText(body);
  if(!raw) return null;
  const p=JSON.parse(raw) as Partial<Itinerary>;
  if(!Array.isArray(p.dayPlans) || p.dayPlans.length!==base.dayPlans.length) return null;
  return addImages({
    ...base,
    title:p.title||base.title,
    route:p.route||base.route,
    summary:p.summary||base.summary,
    dayPlans:p.dayPlans.map((d,i)=>({...base.dayPlans[i],...d,image:base.dayPlans[i].image})),
    planningNotes:Array.isArray(p.planningNotes)?p.planningNotes:base.planningNotes,
    source:"ai",
    aiUsed:true
  });
}

export async function POST(request:Request){
  const data=await request.json() as TripInput;
  if(data.companyWebsite) return NextResponse.json({ok:true});
  if(!data.destination) return NextResponse.json({ok:false,error:"Please choose a destination."},{status:400});
  const cacheKey=itineraryCacheKey(data);
  const cached=await getCachedItinerary(cacheKey);
  if(cached) return NextResponse.json({ok:true,itinerary:{...cached,source:"cache"},cacheHit:true});

  let itinerary=buildLibraryItinerary(data);
  if(shouldUseAI(data)) {
    try {
      const ai=await personalizeWithAI(data,itinerary);
      if(ai) itinerary=ai;
    } catch {}
  }
  await setCachedItinerary(cacheKey,itinerary);
  return NextResponse.json({
    ok:true,itinerary,cacheHit:false,
    engine:itinerary.aiUsed?"ai-personalized":"library-smart-plan"
  });
}
