import { findDestination, cityImage } from "./trip-library";

export type TripInput = Record<string, unknown>;
export type DayPlan = { day:number; city:string; title:string; morning:string; afternoon:string; evening:string; estimatedDayLow:number; estimatedDayHigh:number; image:string; };
export type Itinerary = {
  id:string; cacheKey:string; title:string; route:string; summary:string; days:number; travelers:number;
  estimate:{ low:number; high:number; flights:[number,number]; hotels:[number,number]; transport:[number,number]; activities:[number,number]; meals:[number,number]; };
  dayPlans:DayPlan[]; planningNotes:string[]; disclaimer:string; source:"library"|"ai"|"cache"; aiUsed:boolean;
};

const text = (v:unknown) => String(v ?? "").trim();
const list = (v:unknown) => Array.isArray(v) ? v.map(String).filter(Boolean) : [];
const money = (n:number) => Math.max(0, Math.round(n/10)*10);

function countTravelers(raw:string) {
  const nums = raw.match(/\d+/g)?.map(Number) || [];
  if (!nums.length) return 2;
  if (/adult|child|kid|traveler|people|person/i.test(raw)) return Math.max(1, nums.reduce((a,b)=>a+b,0));
  return Math.max(1, nums[0]);
}
function hotelTier(hotels:string[]) {
  const s=hotels.join(" ").toLowerCase();
  if (s.includes("5★") || s.includes("luxury")) return "5star" as const;
  if (s.includes("3★") || s.includes("good-value")) return "3star" as const;
  return "4star" as const;
}
function stableKey(data:TripInput){
  const basis = {
    destination:text(data.destination).toLowerCase(), days:Number(data.tripLength)||9, travelers:text(data.travelers).toLowerCase(),
    places:list(data.places).sort(), attractions:list(data.attractions).sort(), hotels:list(data.hotels).sort(),
    flightCabin:text(data.flightCabin), pace:text(data.pace), freeTime:text(data.freeTime), meals:list(data.meals).sort(),
    budget:text(data.budget), notes:text(data.notes).toLowerCase().slice(0,300)
  };
  let h=2166136261;
  const s=JSON.stringify(basis);
  for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); }
  return `trip-${(h>>>0).toString(36)}`;
}

export function buildLibraryItinerary(data:TripInput):Itinerary {
  const {data:dest}=findDestination(text(data.destination));
  const travelers=countTravelers(text(data.travelers));
  const days=Math.min(21,Math.max(3,Number(data.tripLength)||9));
  const chosenPlaces=list(data.places);
  const selected=chosenPlaces.length
    ? dest.cities.filter(c=>chosenPlaces.some(p=>p.toLowerCase().includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(p.toLowerCase())))
    : dest.cities;
  const cities=(selected.length?selected:dest.cities).slice(0,Math.max(1,Math.min(dest.cities.length,Math.ceil(days/2))));
  const attractions=list(data.attractions);
  const tier=hotelTier(list(data.hotels));
  const hotel=dest.hotelNight[tier];
  const cabin=text(data.flightCabin).toLowerCase();
  const cabinMult=cabin.includes("business")?2.6:cabin.includes("first")?4:cabin.includes("premium")?1.45:1;
  const flight:[number,number]=[money(dest.flightPerPerson[0]*travelers*cabinMult),money(dest.flightPerPerson[1]*travelers*cabinMult)];
  const rooms=Math.max(1,Math.ceil(travelers/2));
  const hotelTotal:[number,number]=[money(hotel[0]*Math.max(1,days-1)*rooms),money(hotel[1]*Math.max(1,days-1)*rooms)];
  const transport:[number,number]=[money(dest.localTransportPerDay[0]*days),money(dest.localTransportPerDay[1]*days)];
  const meals:[number,number]=[money(dest.mealsPerPersonDay[0]*days*travelers),money(dest.mealsPerPersonDay[1]*days*travelers)];

  const dayPlans:DayPlan[]=[];
  let activityLow=0, activityHigh=0;
  for(let d=1;d<=days;d++){
    const city=cities[Math.min(cities.length-1,Math.floor((d-1)*cities.length/days))];
    const custom=attractions.find(a=>city.highlights.some(h=>h.toLowerCase().includes(a.toLowerCase().split(" ")[0])));
    const h1=custom || city.highlights[(d-1)%city.highlights.length];
    const h2=city.highlights[d%city.highlights.length];
    const pace=text(data.pace).toLowerCase();
    const free=pace.includes("relaxed") || text(data.freeTime).toLowerCase().includes("lots");
    const low=money(city.dailyActivityLow*(free ? .72 : 1)*travelers);
    const high=money(city.dailyActivityHigh*(free ? .78 : 1)*travelers);
    activityLow+=low; activityHigh+=high;
    dayPlans.push({
      day:d, city:city.name,
      title:d===1?`Arrive & settle into ${city.name}`:h1,
      morning:d===1?"Arrival, transfer and hotel check-in":h1,
      afternoon:free && d%3===0?"Protected free time to explore at your own pace":h2,
      evening:d===days?"Final evening at leisure and trip wrap-up":"Flexible local dining and an easy neighborhood stroll",
      estimatedDayLow:low, estimatedDayHigh:high, image:city.image
    });
  }
  const activities:[number,number]=[money(activityLow),money(activityHigh)];
  const low=flight[0]+hotelTotal[0]+transport[0]+meals[0]+activities[0];
  const high=flight[1]+hotelTotal[1]+transport[1]+meals[1]+activities[1];
  const route=cities.map(c=>c.name).join(" → ");
  const key=stableKey(data);
  return {
    id:key,cacheKey:key,title:`Your ${days}-Day ${dest.title}`,route,
    summary:`A ${text(data.pace)||"balanced"} preliminary itinerary combining key experiences with practical routing and intentional free time.`,
    days,travelers,
    estimate:{low,high,flights:flight,hotels:hotelTotal,transport,activities,meals},
    dayPlans,planningNotes:[
      "Routing and prices are preliminary planning estimates, not live inventory.",
      "InfiO2 will verify current airfare, hotel availability, taxes and supplier pricing before booking.",
      text(data.visaHelp)==="true"?"Visa-assistance preference noted for advisor review.":"Entry and visa requirements should be confirmed for each traveler before booking."
    ],
    disclaimer:"Preliminary planning estimate only. Actual airfare, lodging, availability, taxes, exchange rates and supplier pricing can change. No reservation is made until you approve a final InfiO2 quote.",
    source:"library",aiUsed:false
  };
}

export function addImages(itinerary:Itinerary) {
  const fallback=itinerary.dayPlans[0]?.image || findDestination("").data.cities[0].image;
  itinerary.dayPlans=itinerary.dayPlans.map(d=>({...d,image:d.image || cityImage(d.city,fallback)}));
  return itinerary;
}

export function itineraryCacheKey(data:TripInput){ return stableKey(data); }
