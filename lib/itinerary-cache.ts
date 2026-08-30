import type { Itinerary } from "./itinerary-engine";

const memory = new Map<string, Itinerary>();

async function kv(command:(string|number)[]) {
  const url=process.env.KV_REST_API_URL;
  const token=process.env.KV_REST_API_TOKEN;
  if(!url||!token) return null;
  const r=await fetch(url,{
    method:"POST",
    headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},
    body:JSON.stringify(command),
    cache:"no-store"
  });
  if(!r.ok) return null;
  return r.json() as Promise<{result?:unknown}>;
}

export async function getCachedItinerary(key:string):Promise<Itinerary|null> {
  if(memory.has(key)) return memory.get(key)!;
  try{
    const body=await kv(["GET",key]);
    if(!body?.result || typeof body.result!=="string") return null;
    const value=JSON.parse(body.result) as Itinerary;
    memory.set(key,value);
    return value;
  }catch{return null;}
}

export async function setCachedItinerary(key:string,value:Itinerary) {
  memory.set(key,value);
  try{ await kv(["SET",key,JSON.stringify(value),"EX",2592000]); }catch{}
}
