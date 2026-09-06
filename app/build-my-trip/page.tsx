import type { Metadata } from "next";
import TripBuilder from "@/components/TripBuilder";

export const metadata: Metadata = {
  title:"Build My Trip: Smart Itinerary Planner",
  description:"Build a personalized preliminary itinerary by destination, dates, hotel level, interests and budget, then request a final travel quote from InfiO2.",
  alternates:{canonical:"/build-my-trip"}
};

export default async function BuildMyTrip({searchParams}:{searchParams:Promise<{destination?:string}>}){
 const params=await searchParams;
 return <main>
   <section className="simpleHero"><div className="container"><p className="eyebrow">INFINITE POSSIBILITIES. ONE CLEAR BRIEF.</p><h1>Build my trip</h1><p>Tell us how you like to travel. Our smart planner will build a visual preliminary itinerary and planning estimate before you request a final quote.</p></div></section>
   <TripBuilder defaultDestination={params.destination || ""}/>
 </main>;
}
