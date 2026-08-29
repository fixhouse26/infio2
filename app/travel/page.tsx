import type { Metadata } from "next";
import Link from "next/link";
import { landingPages } from "@/lib/landing-pages";
import { longTailPages } from "@/lib/long-tail-pages";

export const metadata: Metadata = {
  title:"Vacation Packages & Custom Trip Ideas",
  description:"Explore customizable vacation planning for Europe, Japan, Dubai, Maldives, Hawaii, Mexico, Caribbean, cruises, family travel, honeymoons and visa assistance.",
  alternates:{canonical:"/travel"}
};

export default function TravelIndex(){
 return <main>
   <section className="pageHero simpleHero"><div className="container"><p className="eyebrow">EXPLORE INFIO2</p><h1>Vacation ideas built to become your trip</h1><p>Browse by destination or travel need, then customize places, hotels, flights, attractions and free time.</p><div className="heroActions"><Link className="btn primary" href="/build-my-trip">Build my trip</Link><Link className="btn glass" href="/visa-assistance">Visa assistance</Link></div></div></section>
   <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow coral">DESTINATIONS & SERVICES</span><h2>Start broad</h2></div><p>Choose a region or travel style, then use the interactive builder on the page.</p></div><div className="directoryGrid">{landingPages.map(p=><Link className="directoryCard" href={`/travel/${p.slug}`} key={p.slug}><span>{p.visa?"Visa + travel":"Vacation planning"}</span><h2>{p.title}</h2><p>{p.description}</p><strong>Customize →</strong></Link>)}</div></div></section>
   <section className="section softSection"><div className="container"><div className="section-head"><div><span className="eyebrow aqua">POPULAR TRIP SEARCHES</span><h2>Or start with a more specific idea</h2></div><p>These pages answer narrower planning questions and take you directly into the same customizable trip builder.</p></div><div className="longTailLinks">{longTailPages.map(p=><Link href={`/travel/guide/${p.slug}`} key={p.slug}><strong>{p.title}</strong><span>{p.duration} • Customize itinerary</span></Link>)}</div></div></section>
 </main>;
}
