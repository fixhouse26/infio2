import type { Metadata } from "next";
import TripBuilder from "@/components/TripBuilder";

export const metadata: Metadata = {
  title:"Build My Custom Trip | Interactive Vacation Planner",
  description:"Create your custom travel brief: choose destinations, attractions, hotel category, flight cabin, pace, free time, meals, transfers and visa assistance.",
  alternates:{canonical:"/build-my-trip"}
};

export default async function BuildMyTrip({searchParams}:{searchParams:Promise<{destination?:string}>}){
 const params=await searchParams;
 return <main>
   <section className="simpleHero"><div className="container"><p className="eyebrow">INFINITE POSSIBILITIES. ONE CLEAR BRIEF.</p><h1>Build my trip</h1><p>Tell us how you like to travel. We’ll turn your selections into a custom itinerary proposal.</p></div></section>
   <TripBuilder defaultDestination={params.destination || ""}/>
 </main>;
}
