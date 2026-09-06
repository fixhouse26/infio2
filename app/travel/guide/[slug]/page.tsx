import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import TripBuilder from "@/components/TripBuilder";
import { breadcrumbSchema, clampDescription, compactTitle } from "@/lib/seo";
import { longTailMap, longTailPages } from "@/lib/long-tail-pages";
import { landingPageMap } from "@/lib/landing-pages";

export function generateStaticParams(){ return longTailPages.map(p=>({slug:p.slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=longTailMap[slug]; if(!p)return {};
  return {title:compactTitle(p.title),description:clampDescription(p.description),alternates:{canonical:`/travel/guide/${p.slug}`},
    openGraph:{title:`${p.title} | InfiO2`,description:clampDescription(p.description),type:"website",url:`/travel/guide/${p.slug}`}};
}

export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=longTailMap[slug]; if(!p)notFound();
 const parent=landingPageMap[p.parentSlug];
 const faq=[
   {q:`Can InfiO2 customize a ${p.title.toLowerCase()}?`,a:"Yes. The page is a starting framework, not a fixed tour. Choose the places, attractions, hotel standard, air cabin, pace and free time you want in the interactive trip builder."},
   {q:"Will the website show a fixed package price?",a:"No. Travel pricing changes with dates, origin airport, hotel inventory, air cabin and supplier availability. InfiO2 prepares a personalized quote after reviewing your trip brief."},
   {q:"Can I leave some days unplanned?",a:"Yes. The trip builder specifically lets you request more free time so the proposed itinerary does not become an exhausting checklist."}
 ];
 const breadcrumbs=breadcrumbSchema([{name:"Home",path:"/"},{name:"Travel",path:"/travel"},{name:parent.title,path:`/travel/${p.parentSlug}`},{name:p.title,path:`/travel/guide/${p.slug}`}]);
 const schema={"@context":"https://schema.org","@type":"Service","name":p.title,"description":p.description,"provider":{"@type":"TravelAgency","name":"InfiO2 Travel","url":"https://www.infio2.com"},"url":`https://www.infio2.com/travel/guide/${p.slug}`};
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(x=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))};
 return <main>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbs)}}/>
   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
   <section className="landingHero guideImageHero"><Image src={parent.heroImage} alt={p.title} fill priority sizes="100vw" style={{objectFit:"cover"}}/><div className="landingShade"/><div className="container landingHeroCopy"><p className="eyebrow">CUSTOM TRIP PLANNING • {p.duration}</p><h1>{p.title}</h1><p>{p.description}</p><div className="heroActions"><a className="btn primary" href="#customize-trip">Customize this trip</a><Link className="btn btnGhost" href={`/travel/${p.parentSlug}`}>Explore {p.destination}</Link></div></div></section>
   <section className="section"><div className="container searchIntentCopy"><div><span className="eyebrow coral">DESIGNED AROUND YOUR PRIORITIES</span><h2>A starting point, not a rigid package.</h2></div><div><p>Use this itinerary idea to tell us what matters. Select only the destinations and major attractions you want, choose your preferred hotel comfort and flight cabin, then decide how much unscheduled time you want to protect.</p><p>InfiO2 reviews the complete brief and can recommend practical routing rather than simply packing more stops into the schedule.</p></div></div></section>
   <TripBuilder pageSlug={p.parentSlug} defaultDestination={p.destination}/>
   <section className="section softSection"><div className="container faqWrap"><p className="eyebrow">PLANNING QUESTIONS</p><h2>Before you request your itinerary</h2>{faq.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div></section>
 </main>;
}
