"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { getTripBuilderConfig, getTripBuilderConfigForDestination } from "@/lib/trip-builder-data";

type Props = { pageSlug?: string; defaultDestination?: string; compact?: boolean; };
type DayPlan = { day:number; city:string; title:string; morning:string; afternoon:string; evening:string; estimatedDayLow:number; estimatedDayHigh:number; image:string; };
type Itinerary = {
  id:string; title:string; route:string; summary:string; days:number; travelers:number; aiUsed:boolean; source:string;
  estimate:{ low:number; high:number; flights:[number,number]; hotels:[number,number]; transport:[number,number]; activities:[number,number]; meals:[number,number]; };
  dayPlans:DayPlan[]; planningNotes:string[]; disclaimer:string;
};

const hotelOptions = ["Good-value 3★", "Comfortable 4★", "Luxury 5★", "Boutique / character hotel", "Resort", "Apartment / villa", "Mix by city"];
const cabinOptions = ["Economy", "Premium economy", "Business", "First class", "Show me the best value"];
const paceOptions = ["Relaxed — plenty of free time", "Balanced — highlights + free time", "Active — see as much as possible"];
const mealOptions = ["Breakfast included", "Half board", "All-inclusive where available", "Local dining recommendations", "Vegetarian-friendly", "No meal preference"];
const usd=(n:number)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);

export default function TripBuilder({ pageSlug, defaultDestination = "", compact = false }: Props) {
  const [destinationValue,setDestinationValue]=useState(defaultDestination);
  const cfg = useMemo(() => pageSlug ? getTripBuilderConfig(pageSlug) : getTripBuilderConfigForDestination(destinationValue), [pageSlug,destinationValue]);
  const formRef=useRef<HTMLFormElement>(null);
  const resultRef=useRef<HTMLDivElement>(null);
  const [status,setStatus]=useState("");
  const [generating,setGenerating]=useState(false);
  const [sending,setSending]=useState(false);
  const [itinerary,setItinerary]=useState<Itinerary|null>(null);
  const [savedPayload,setSavedPayload]=useState<Record<string,unknown>|null>(null);

  function payloadFromForm(form:HTMLFormElement){
    const fd=new FormData(form);
    const multi=(name:string)=>fd.getAll(name).map(String);
    return {
      companyWebsite:String(fd.get("companyWebsite")||""), sourcePage:pageSlug||"general-trip-builder",
      name:String(fd.get("name")||""), email:String(fd.get("email")||""), phone:String(fd.get("phone")||""),
      departureCity:String(fd.get("departureCity")||""), dates:String(fd.get("dates")||""), tripLength:Number(fd.get("tripLength")||9),
      flexibility:String(fd.get("flexibility")||""), travelers:String(fd.get("travelers")||""),
      destination:String(fd.get("destination")||defaultDestination), places:multi("places"), otherPlace:String(fd.get("otherPlace")||""),
      attractions:multi("attractions"), hotels:multi("hotels"), roomNeeds:String(fd.get("roomNeeds")||""),
      hotelLocation:String(fd.get("hotelLocation")||""), flightCabin:String(fd.get("flightCabin")||""),
      flightPreference:String(fd.get("flightPreference")||""), pace:String(fd.get("pace")||""), freeTime:String(fd.get("freeTime")||""),
      meals:multi("meals"), extras:multi("extras"), budget:String(fd.get("budget")||""),
      visaHelp:fd.get("visaHelp")==="on", notes:String(fd.get("notes")||""),
    };
  }

  async function generate(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setGenerating(true); setStatus(""); setItinerary(null);
    const payload=payloadFromForm(event.currentTarget);
    setSavedPayload(payload);
    try{
      const res=await fetch("/api/generate-itinerary",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result=await res.json();
      if(res.ok&&result.ok){
        setItinerary(result.itinerary);
        setStatus("Your preliminary InfiO2 itinerary is ready.");
        const w=window as typeof window & {gtag?:(...args:unknown[])=>void};
        w.gtag?.("event","generate_itinerary",{event_category:"trip_builder",destination:payload.destination||"custom"});
        setTimeout(()=>resultRef.current?.scrollIntoView({behavior:"smooth",block:"start"}),100);
      }else setStatus(result.error||"We could not generate the itinerary. Please try again.");
    }catch{ setStatus("We could not generate the itinerary. Please try again."); }
    finally{ setGenerating(false); }
  }

  async function requestQuote(){
    if(!savedPayload||!itinerary)return;
    setSending(true); setStatus("");
    const payload={...savedPayload,generatedItinerary:itinerary};
    try{
      const res=await fetch("/api/trip-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result=await res.json();
      if(res.ok&&result.ok){
        const w=window as typeof window & {gtag?:(...args:unknown[])=>void};
        w.gtag?.("event","generate_lead",{event_category:"ai_trip_builder",destination:savedPayload.destination||"custom"});
        setStatus("Your itinerary and trip preferences were sent to InfiO2. We’ll review current options and prepare your final quote.");
      }else if(result.fallback==="mailto"){
        const subject=encodeURIComponent(`InfiO2 final quote request — ${String(savedPayload.destination||"Custom trip")}`);
        const body=encodeURIComponent(result.summary||JSON.stringify(payload,null,2));
        window.location.href=`mailto:info@infio2.com?subject=${subject}&body=${body}`;
      }else setStatus("We could not send the request. Please email info@infio2.com.");
    }catch{setStatus("We could not send the request. Please email info@infio2.com.");}
    finally{setSending(false);}
  }

  return (
    <section className={`customizer ${compact ? "compactCustomizer" : ""}`} id="customize-trip">
      <div className="customizerIntro">
        <span className="eyebrow coral">INFiO2 SMART TRIP PLANNER</span>
        <h2>Build a preliminary itinerary in seconds.</h2>
        <p>Choose your destinations, hotel level, flight cabin, experiences, pace and free time. Our travel library builds the practical base plan and AI can personalize more complex requests when enabled.</p>
        <div className="builderSteps"><span><b>1</b> Pick places</span><span><b>2</b> Choose your style</span><span><b>3</b> Generate itinerary</span><span><b>4</b> Request final quote</span></div>
      </div>

      <form ref={formRef} className="tripBuilder" onSubmit={generate}>
        <label className="hpField" aria-hidden="true">Website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
        <fieldset>
          <legend>1. Your trip basics</legend>
          <div className="builderRow">
            <label>Destination / region *<input name="destination" required defaultValue={defaultDestination} onChange={e=>setDestinationValue(e.target.value)} placeholder="e.g. Italy, Japan, Europe" /></label>
            <label>Departure city / airport<input name="departureCity" placeholder="e.g. LAX" /></label>
          </div>
          <div className="builderRow">
            <label>Travel dates<input name="dates" placeholder="e.g. Sept 20–29, 2027" /></label>
            <label>Number of days<select name="tripLength" defaultValue="9">{[5,6,7,8,9,10,11,12,13,14,15,18,21].map(n=><option key={n} value={n}>{n} days</option>)}</select></label>
          </div>
          <div className="builderRow">
            <label>Date flexibility<select name="flexibility" defaultValue="Flexible by a few days"><option>Exact dates</option><option>Flexible by a few days</option><option>Flexible by 1–2 weeks</option><option>Not sure yet</option></select></label>
            <label>Travelers<input name="travelers" required placeholder="e.g. 2 adults, 2 children ages 8 and 12" /></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>2. Places you want to visit</legend>
          <p className="fieldHint">Choose as many as you like. The planner will balance routing and free time.</p>
          <div className="choiceGrid">{cfg.places.map(x=><label className="choice" key={x}><input type="checkbox" name="places" value={x}/><span>{x}</span></label>)}</div>
          <label>Other place<input name="otherPlace" placeholder="Add somewhere not listed" /></label>
        </fieldset>

        <fieldset>
          <legend>3. Attractions & experiences</legend>
          <div className="choiceGrid">{cfg.attractions.map(x=><label className="choice" key={x}><input type="checkbox" name="attractions" value={x}/><span>{x}</span></label>)}</div>
        </fieldset>

        <fieldset>
          <legend>4. Hotel style</legend>
          <div className="choiceGrid">{hotelOptions.map(x=><label className="choice" key={x}><input type="checkbox" name="hotels" value={x}/><span>{x}</span></label>)}</div>
          <div className="builderRow">
            <label>Room needs<input name="roomNeeds" placeholder="King bed, connecting rooms, 2 rooms..." /></label>
            <label>Location preference<select name="hotelLocation" defaultValue="Best balance of location and value"><option>Walkable / central</option><option>Quiet neighborhood</option><option>Beachfront / resort</option><option>Near transit</option><option>Best balance of location and value</option></select></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>5. Flights & transportation</legend>
          <div className="builderRow">
            <label>Air cabin<select name="flightCabin" defaultValue="Show me the best value">{cabinOptions.map(x=><option key={x}>{x}</option>)}</select></label>
            <label>Flight preference<select name="flightPreference" defaultValue="Best balance"><option>Nonstop preferred</option><option>Lowest practical fare</option><option>Best balance</option><option>Specific airline / alliance</option><option>Use points / miles where possible</option></select></label>
          </div>
          <div className="choiceGrid">{["Airport transfers","Private transfers","Rail planning","Rental car","Domestic / regional flights","Cruise or ferry"].map(x=><label className="choice" key={x}><input type="checkbox" name="extras" value={x}/><span>{x}</span></label>)}</div>
        </fieldset>

        <fieldset>
          <legend>6. Pace, free time & meals</legend>
          <div className="builderRow">
            <label>Trip pace<select name="pace" defaultValue="Balanced — highlights + free time">{paceOptions.map(x=><option key={x}>{x}</option>)}</select></label>
            <label>Free time<select name="freeTime" defaultValue="About half a day every 2–3 days"><option>Very little — maximize sightseeing</option><option>About half a day every 2–3 days</option><option>One free day every 3–4 days</option><option>Lots of free time / resort time</option></select></label>
          </div>
          <div className="choiceGrid">{mealOptions.map(x=><label className="choice" key={x}><input type="checkbox" name="meals" value={x}/><span>{x}</span></label>)}</div>
        </fieldset>

        <fieldset>
          <legend>7. Services, budget & special requests</legend>
          <div className="choiceGrid">
            {["Guided day tours","Private guide","Small-group experiences","Travel insurance information","Celebration / honeymoon touches","Accessible travel planning"].map(x=><label className="choice" key={x}><input type="checkbox" name="extras" value={x}/><span>{x}</span></label>)}
            <label className="choice"><input type="checkbox" name="visaHelp"/><span>Visa application assistance</span></label>
          </div>
          <label>Approximate total trip budget<select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under $3,000</option><option>$3,000–$6,000</option><option>$6,000–$10,000</option><option>$10,000–$20,000</option><option>$20,000–$35,000</option><option>$35,000+</option></select></label>
          <label>Anything else we should know?<textarea name="notes" maxLength={2500} placeholder="Must-see places, dietary needs, mobility considerations, hotel brands, celebrations, preferred airlines..." /></label>
        </fieldset>

        <fieldset>
          <legend>8. Your details</legend>
          <div className="builderRow">
            <label>Full name *<input name="name" required autoComplete="name"/></label>
            <label>Email *<input name="email" required type="email" autoComplete="email"/></label>
          </div>
          <label>Phone<input name="phone" type="tel" autoComplete="tel"/></label>
          <label className="builderConsent"><input type="checkbox" required/> <span>I understand this is a preliminary planning itinerary and estimate, not a booking, reservation or guaranteed price. I have reviewed the <a href="/ai-disclaimer" target="_blank">AI disclaimer</a>, <a href="/travel-disclaimer" target="_blank">travel/booking disclaimer</a> and <a href="/privacy" target="_blank">Privacy Policy</a>.</span></label>
          <p className="microDisclaimer">Do not enter passport numbers, payment-card information, medical information or other unnecessary sensitive data in the notes field. Visa and entry information must be verified with the applicable government authority.</p>
          <button className="btn primary wide aiGenerateBtn" disabled={generating} type="submit">{generating ? "Building your InfiO2 trip..." : "✨ Generate My Preliminary Trip"}</button>
          {generating&&<div className="generationStatus"><span>Finding the right route</span><span>Balancing sightseeing & free time</span><span>Estimating travel costs</span><span>Building your day-by-day plan</span></div>}
          <p className="form-status" aria-live="polite">{status}</p>
        </fieldset>
      </form>

      {itinerary&&<div className="itineraryResult" ref={resultRef}>
        <div className="itineraryHero">
          <span className="eyebrow">YOUR PRELIMINARY INFiO2 PLAN</span>
          <h2>{itinerary.title}</h2>
          <p className="routeLine">{itinerary.route}</p>
          <p>{itinerary.summary}</p>
          <div className="estimateTotal"><small>Estimated trip range</small><strong>{usd(itinerary.estimate.low)}–{usd(itinerary.estimate.high)}</strong><span>for the trip preferences entered</span></div>
        </div>

        <div className="costBreakdown">
          <div><span>✈️ Flights</span><b>{usd(itinerary.estimate.flights[0])}–{usd(itinerary.estimate.flights[1])}</b></div>
          <div><span>🏨 Hotels</span><b>{usd(itinerary.estimate.hotels[0])}–{usd(itinerary.estimate.hotels[1])}</b></div>
          <div><span>🚆 Transportation</span><b>{usd(itinerary.estimate.transport[0])}–{usd(itinerary.estimate.transport[1])}</b></div>
          <div><span>🎟 Activities</span><b>{usd(itinerary.estimate.activities[0])}–{usd(itinerary.estimate.activities[1])}</b></div>
          <div><span>🍽 Meals & misc.</span><b>{usd(itinerary.estimate.meals[0])}–{usd(itinerary.estimate.meals[1])}</b></div>
        </div>

        <div className="dayTimeline">
          {itinerary.dayPlans.map(day=><article className="itineraryDay" key={day.day}>
            <div className="dayImage"><img src={day.image} alt={`${day.city} travel inspiration`} /></div>
            <div className="dayCopy">
              <span className="dayNumber">DAY {day.day} · {day.city.toUpperCase()}</span>
              <h3>{day.title}</h3>
              <dl><div><dt>Morning</dt><dd>{day.morning}</dd></div><div><dt>Afternoon</dt><dd>{day.afternoon}</dd></div><div><dt>Evening</dt><dd>{day.evening}</dd></div></dl>
              <p className="dayEstimate">Estimated activities: {usd(day.estimatedDayLow)}–{usd(day.estimatedDayHigh)}</p>
            </div>
          </article>)}
        </div>

        <div className="quotePanel">
          <div><span className="eyebrow coral">READY FOR REAL OPTIONS?</span><h3>Let InfiO2 turn this into your final trip.</h3><p>We’ll review current flight and hotel options, refine the routing and prepare a personalized quote.</p></div>
          <button className="btn primary" onClick={requestQuote} disabled={sending}>{sending?"Sending...":"Request My Final Quote →"}</button>
        </div>
        <div className="planningDisclaimer">
          <strong>Important:</strong> {itinerary.disclaimer}
          <ul>{itinerary.planningNotes.map((n,i)=><li key={i}>{n}</li>)}</ul>
        </div>
      </div>}
    </section>
  );
}
