import { NextResponse } from "next/server";

function clean(value: unknown) {
  if (Array.isArray(value)) return value.map(String).join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value ?? "");
}
function money(n:unknown){ return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number(n)||0); }

function itineraryText(value:unknown){
  if(!value || typeof value!=="object") return "";
  const it=value as Record<string,unknown>;
  const est=(it.estimate||{}) as Record<string,unknown>;
  const days=Array.isArray(it.dayPlans)?it.dayPlans as Array<Record<string,unknown>>:[];
  return [
    "",
    "GENERATED PRELIMINARY ITINERARY",
    `Title: ${clean(it.title)}`,
    `Route: ${clean(it.route)}`,
    `Estimated total: ${money(est.low)}–${money(est.high)}`,
    ...days.map(d=>`Day ${clean(d.day)} — ${clean(d.city)}: ${clean(d.title)} | Morning: ${clean(d.morning)} | Afternoon: ${clean(d.afternoon)} | Evening: ${clean(d.evening)}`),
    "",
    `Planning disclaimer: ${clean(it.disclaimer)}`
  ].join("\n");
}

function summary(data: Record<string, unknown>) {
  const rows: [string,string][] = [
    ["Source page", clean(data.sourcePage)],["Name", clean(data.name)],["Email", clean(data.email)],["Phone", clean(data.phone)],
    ["Destination", clean(data.destination)],["Departure city", clean(data.departureCity)],["Dates", clean(data.dates)],["Trip length", clean(data.tripLength)],["Date flexibility", clean(data.flexibility)],
    ["Travelers", clean(data.travelers)],["Places", clean(data.places)],["Other place", clean(data.otherPlace)],["Attractions", clean(data.attractions)],["Hotels", clean(data.hotels)],["Room needs", clean(data.roomNeeds)],["Hotel location", clean(data.hotelLocation)],
    ["Flight cabin", clean(data.flightCabin)],["Flight preference", clean(data.flightPreference)],["Trip pace", clean(data.pace)],["Free time", clean(data.freeTime)],["Meals", clean(data.meals)],
    ["Extras", clean(data.extras)],["Budget", clean(data.budget)],["Visa help", clean(data.visaHelp)],["Notes", clean(data.notes)]
  ];
  return rows.map(([a,b])=>`${a}: ${b}`).join("\n")+itineraryText(data.generatedItinerary);
}

export async function POST(request: Request) {
  const data = await request.json() as Record<string, unknown>;
  if (data.companyWebsite) return NextResponse.json({ok:true});
  if (!data.name || !data.email) return NextResponse.json({ok:false,error:"Name and email are required."},{status:400});

  const text = summary(data);
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TRAVEL_LEAD_EMAIL || "info@infio2.com";
  const from = process.env.TRAVEL_FROM_EMAIL || "InfiO2 Travel <noreply@infio2.com>";

  if (!apiKey) return NextResponse.json({ok:false,fallback:"mailto",summary:text},{status:503});

  const headers = {"Authorization":`Bearer ${apiKey}`,"Content-Type":"application/json"};
  const response = await fetch("https://api.resend.com/emails",{
    method:"POST",headers,
    body:JSON.stringify({
      from,to:[to],reply_to:String(data.email),
      subject:`InfiO2 final quote request — ${clean(data.destination) || "New inquiry"} — ${clean(data.name)}`,
      text
    })
  });

  if (!response.ok) return NextResponse.json({ok:false,fallback:"mailto",summary:text},{status:502});

  try {
    const it=(data.generatedItinerary||{}) as Record<string,unknown>;
    const est=(it.estimate||{}) as Record<string,unknown>;
    const days=Array.isArray(it.dayPlans)?it.dayPlans as Array<Record<string,unknown>>:[];
    const travelerPlan=days.length?[
      `\nYour preliminary plan: ${clean(it.title)}`,
      `Route: ${clean(it.route)}`,
      `Estimated planning range: ${money(est.low)}–${money(est.high)}`,
      "",
      ...days.map(d=>`Day ${clean(d.day)} — ${clean(d.city)}: ${clean(d.title)}`)
    ].join("\n"):"";

    await fetch("https://api.resend.com/emails",{
      method:"POST",headers,
      body:JSON.stringify({
        from,to:[String(data.email)],reply_to:to,
        subject:"Your InfiO2 preliminary itinerary & quote request",
        text:`Hi ${clean(data.name)},\n\nThank you for building your trip with InfiO2. We received your preferences and your request for a final quote.${travelerPlan}\n\nOur team will review current airfare, hotel availability, routing, taxes and supplier pricing before preparing your personalized quote.\n\nThis preliminary itinerary is planning guidance only and is not a reservation or guaranteed price.\n\nIf you need to add anything, reply to this email or contact info@infio2.com.\n\nInfiO2 Travel\nInfinite Experiences. One Journey.\nhttps://www.infio2.com`
      })
    });
  } catch {}

  return NextResponse.json({ok:true});
}
