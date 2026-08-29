"use client";

import { FormEvent, useMemo, useState } from "react";
import { getTripBuilderConfig } from "@/lib/trip-builder-data";

type Props = {
  pageSlug?: string;
  defaultDestination?: string;
  compact?: boolean;
};

const hotelOptions = ["Good-value 3★", "Comfortable 4★", "Luxury 5★", "Boutique / character hotel", "Resort", "Apartment / villa", "Mix by city"];
const cabinOptions = ["Economy", "Premium economy", "Business", "First class", "Show me the best value"];
const paceOptions = ["Relaxed — plenty of free time", "Balanced — highlights + free time", "Active — see as much as possible"];
const mealOptions = ["Breakfast included", "Half board", "All-inclusive where available", "Local dining recommendations", "Vegetarian-friendly", "No meal preference"];

export default function TripBuilder({ pageSlug, defaultDestination = "", compact = false }: Props) {
  const cfg = useMemo(() => getTripBuilderConfig(pageSlug), [pageSlug]);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const fd = new FormData(event.currentTarget);
    const multi = (name: string) => fd.getAll(name).map(String);
    const payload = {
      companyWebsite: String(fd.get("companyWebsite") || ""),
      sourcePage: pageSlug || "general-trip-builder",
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      departureCity: String(fd.get("departureCity") || ""),
      dates: String(fd.get("dates") || ""),
      flexibility: String(fd.get("flexibility") || ""),
      travelers: String(fd.get("travelers") || ""),
      destination: String(fd.get("destination") || defaultDestination),
      places: multi("places"),
      otherPlace: String(fd.get("otherPlace") || ""),
      attractions: multi("attractions"),
      hotels: multi("hotels"),
      roomNeeds: String(fd.get("roomNeeds") || ""),
      hotelLocation: String(fd.get("hotelLocation") || ""),
      flightCabin: String(fd.get("flightCabin") || ""),
      flightPreference: String(fd.get("flightPreference") || ""),
      pace: String(fd.get("pace") || ""),
      freeTime: String(fd.get("freeTime") || ""),
      meals: multi("meals"),
      extras: multi("extras"),
      budget: String(fd.get("budget") || ""),
      visaHelp: fd.get("visaHelp") === "on",
      notes: String(fd.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/trip-request", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok && result.ok) {
        const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
        w.gtag?.("event", "generate_lead", { event_category: "trip_builder", destination: payload.destination || "custom" });
        setStatus("Thank you. Your trip preferences have been sent to InfiO2.");
        event.currentTarget.reset();
      } else if (result.fallback === "mailto") {
        const subject = encodeURIComponent(`Custom trip request — ${payload.destination || "New itinerary"}`);
        const body = encodeURIComponent(result.summary || JSON.stringify(payload, null, 2));
        window.location.href = `mailto:info@infio2.com?subject=${subject}&body=${body}`;
        setStatus("Your email app is opening with the complete trip brief. Send it to finish your request.");
      } else {
        setStatus("We could not send the request. Please email info@infio2.com.");
      }
    } catch {
      setStatus("We could not send the request. Please email info@infio2.com.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className={`customizer ${compact ? "compactCustomizer" : ""}`} id="customize-trip">
      <div className="customizerIntro">
        <span className="eyebrow coral">BUILD YOUR OWN TRIP</span>
        <h2>Choose what you want. Leave the routing to us.</h2>
        <p>Select the places, hotel level, flight cabin, experiences and amount of free time you want. InfiO2 will use your choices to design a practical itinerary and quote.</p>
        <div className="builderSteps">
          <span><b>1</b> Pick places</span><span><b>2</b> Choose experiences</span><span><b>3</b> Set comfort & pace</span><span><b>4</b> Send your brief</span>
        </div>
      </div>

      <form className="tripBuilder" onSubmit={submit}>
        <label className="hpField" aria-hidden="true">Website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
        <fieldset>
          <legend>1. Your trip basics</legend>
          <div className="builderRow">
            <label>Destination / region<input name="destination" defaultValue={defaultDestination} placeholder="e.g. Italy, Japan, Europe" /></label>
            <label>Departure city / airport<input name="departureCity" placeholder="e.g. LAX" /></label>
          </div>
          <div className="builderRow">
            <label>Travel dates<input name="dates" placeholder="e.g. June 8–20, 2027" /></label>
            <label>Date flexibility<select name="flexibility" defaultValue="Flexible by a few days"><option>Exact dates</option><option>Flexible by a few days</option><option>Flexible by 1–2 weeks</option><option>Not sure yet</option></select></label>
          </div>
          <label>Travelers<input name="travelers" placeholder="e.g. 2 adults, 2 children ages 8 and 12" /></label>
        </fieldset>

        <fieldset>
          <legend>2. Places you want to visit</legend>
          <p className="fieldHint">Choose as many as you like. We’ll tell you if the schedule would feel too rushed.</p>
          <div className="choiceGrid">{cfg.places.map(x=><label className="choice" key={x}><input type="checkbox" name="places" value={x}/><span>{x}</span></label>)}</div>
          <label>Other place<input name="otherPlace" placeholder="Add somewhere not listed" /></label>
        </fieldset>

        <fieldset>
          <legend>3. Attractions & experiences</legend>
          <p className="fieldHint">Highlight the experiences that matter most. You do not need to fill every day.</p>
          <div className="choiceGrid">{cfg.attractions.map(x=><label className="choice" key={x}><input type="checkbox" name="attractions" value={x}/><span>{x}</span></label>)}</div>
        </fieldset>

        <fieldset>
          <legend>4. Hotel style</legend>
          <div className="choiceGrid">{hotelOptions.map(x=><label className="choice" key={x}><input type="checkbox" name="hotels" value={x}/><span>{x}</span></label>)}</div>
          <div className="builderRow">
            <label>Room needs<input name="roomNeeds" placeholder="King bed, connecting rooms, 2 rooms, accessible room..." /></label>
            <label>Location preference<select name="hotelLocation" defaultValue="Best balance of location and value"><option>Walkable / central</option><option>Quiet neighborhood</option><option>Beachfront / resort</option><option>Near transit</option><option>Best balance of location and value</option></select></label>
          </div>
        </fieldset>

        <fieldset>
          <legend>5. Flights & transportation</legend>
          <div className="builderRow">
            <label>Air cabin<select name="flightCabin" defaultValue="Show me the best value">{cabinOptions.map(x=><option key={x}>{x}</option>)}</select></label>
            <label>Flight preference<select name="flightPreference" defaultValue="Best balance"><option>Nonstop preferred</option><option>Lowest practical fare</option><option>Best balance</option><option>Specific airline / alliance</option><option>Use points / miles where possible</option></select></label>
          </div>
          <div className="choiceGrid">
            {["Airport transfers","Private transfers","Rail planning","Rental car","Domestic / regional flights","Cruise or ferry"].map(x=><label className="choice" key={x}><input type="checkbox" name="extras" value={x}/><span>{x}</span></label>)}
          </div>
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
          <label>Anything else we should know?<textarea name="notes" maxLength={2500} placeholder="Must-see places, dietary needs, mobility considerations, hotel brands you like, birthdays, points/miles, preferred airlines..." /></label>
        </fieldset>

        <fieldset>
          <legend>8. Where should we send your plan?</legend>
          <div className="builderRow">
            <label>Full name *<input name="name" required autoComplete="name"/></label>
            <label>Email *<input name="email" required type="email" autoComplete="email"/></label>
          </div>
          <label>Phone<input name="phone" type="tel" autoComplete="tel"/></label>
          <label className="builderConsent"><input type="checkbox" required/> <span>I agree that InfiO2 may contact me about this trip request. I understand selections are planning preferences, not reservations or guaranteed availability/prices.</span></label>
          <button className="btn primary wide" disabled={sending} type="submit">{sending ? "Sending..." : "Send my custom trip brief"}</button>
          <p className="form-status" aria-live="polite">{status}</p>
        </fieldset>
      </form>
    </section>
  );
}
