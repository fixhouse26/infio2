import Link from "next/link";

export default function TripPlanner() {
  return (
    <section className="planner" id="plan">
      <div className="planner-copy">
        <span className="eyebrow">YOUR TRIP, NOT A TEMPLATE</span>
        <h2>Build the vacation you actually want.</h2>
        <p>Choose destinations, attractions, hotel level, flight cabin, free time and visa help. Send one structured brief and let InfiO2 turn it into a practical itinerary.</p>
        <div className="mini-proof"><span>✓ Choose places</span><span>✓ Select attractions</span><span>✓ Set hotel & flight comfort</span><span>✓ Protect free time</span></div>
      </div>
      <div className="planner-form plannerCtaCard">
        <span className="eyebrow coral">INTERACTIVE TRIP BUILDER</span>
        <h3>About 3 minutes to tell us what matters.</h3>
        <p>No payment and no reservation is created. This gives your travel advisor a much better starting point than a generic contact form.</p>
        <Link className="btn primary wide" href="/build-my-trip">Customize my trip</Link>
        <p className="form-status">Need visa support too? Add it inside the same trip brief.</p>
      </div>
    </section>
  );
}
