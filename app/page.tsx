import type { Metadata } from "next";
import Image from "next/image";
import HeroFinder from "@/components/HeroFinder";
import TripPlanner from "@/components/TripPlanner";

export const metadata: Metadata = {
  title: { absolute: "Custom Vacations & Trip Planning | InfiO2" },
  description: "Plan custom vacations, cruises, honeymoons, family trips and international itineraries with InfiO2, plus practical travel visa assistance.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Vacations & Trip Planning | InfiO2",
    description: "Personalized holidays, cruises, international itineraries and practical travel visa assistance from InfiO2 Travel.",
    url: "/",
    type: "website",
  },
};

const destinations = [
  { name: "Japan", title: "Culture, food & cherry blossoms", image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1000&q=82", alt: "Japanese temple and cherry blossom travel scene", tall: true },
  { name: "Maldives", title: "Overwater escape", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=82", alt: "Maldives island resort and clear blue water" },
  { name: "Greece", title: "Aegean sunsets", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=82", alt: "Santorini white buildings overlooking the sea" },
  { name: "Dubai", title: "City luxury & desert", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=82", alt: "Dubai skyline and modern city architecture" },
  { name: "Bali", title: "Wellness & wonder", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=82", alt: "Bali temple and lush tropical scenery" },
];

const styles = [
  ["☀️", "Beach Holidays", "Resorts, islands and easygoing escapes with the right balance of relaxation and activities."],
  ["👨‍👩‍👧‍👦", "Family Trips", "Age-friendly stays, smart pacing, transfers and experiences everyone can enjoy."],
  ["💞", "Honeymoons", "Romantic stays, special moments and thoughtful details for once-in-a-lifetime travel."],
  ["🛳️", "Cruises", "Ocean and river cruise options with ports, cabins and pre/post stays coordinated together."],
  ["✨", "Luxury Travel", "Exceptional hotels, elevated experiences and itineraries designed for comfort."],
  ["🗺️", "Custom Itineraries", "Multi-city and international trips built from scratch to fit your dates and priorities."],
  ["🛂", "Visa Application Assistance", "Practical support with published requirements, document checklists, application steps and international travel preparation."],
];

const ideas = [
  { tag: "TRIP PLANNING", title: "How to plan a multi-city vacation without overpacking the schedule", copy: "Build in breathing room, cluster nearby experiences and plan transfers before filling every day.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=82", alt: "Mountain road scenic travel" },
  { tag: "HOTELS", title: "Resort or city hotel? Pick the stay that matches your trip", copy: "The best hotel is the one that supports how you’ll spend your days—not just the one with the most stars.", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=82", alt: "Luxury hotel pool during a holiday" },
  { tag: "SMART TRAVEL", title: "Long-haul trip checklist: flights, transfers, entry rules and timing", copy: "A simple pre-trip framework to reduce surprises on international journeys.", image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=82", alt: "Airplane wing above clouds" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=88" alt="Turquoise tropical beach and clear ocean" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">CUSTOM TRAVEL • WORLDWIDE</span>
          <h1>Infinite destinations.<br /><span>Personalized for you.</span></h1>
          <p>Custom trips, unforgettable experiences and seamless travel — designed around the way you want to explore.</p>
          <div className="hero-actions"><a className="btn primary" href="/build-my-trip">Build My Trip →</a><a className="btn glass" href="/travel">Explore Destinations</a></div>
        </div>
        <HeroFinder />
      </section>

      <section className="trust-strip branded-trust" aria-label="InfiO2 service highlights"><div><b>◎ Worldwide Destinations</b><span>Handpicked experiences</span></div><div><b>▣ Custom Itineraries</b><span>Designed around you</span></div><div><b>✦ Expert Travel Support</b><span>Before, during & after</span></div><div><b>◇ Visa Assistance</b><span>Practical application support</span></div></section>

      <section className="section" id="destinations">
        <div className="section-head"><div><span className="eyebrow coral">FIND YOUR NEXT ESCAPE</span><h2>Destinations that feel like a holiday</h2></div><p>Start with the mood, not the map. We’ll shape the flights, stays and experiences around the way you want to travel.</p></div>
        <div className="dest-grid">
          {destinations.map((item) => <article className={`dest-card${item.tall ? " tall" : ""}`} key={item.name}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" /><div><span>{item.name}</span><h3>{item.title}</h3><a href={`/build-my-trip?destination=${encodeURIComponent(item.name)}`}>Customize {item.name} →</a></div></article>)}
        </div>
      </section>

      <section className="section visa-feature"><div className="section-head"><div><span className="eyebrow coral">TRAVEL DOCUMENT SUPPORT</span><h2>Need help with a travel visa?</h2></div><p>We can help organize published visa requirements, supporting-document checklists, application steps and appointment preparation alongside your trip plan.</p></div><div className="conversion-band"><div><strong>Visa application assistance for international travel</strong><span>Clearer checklists. Better-prepared applications. One place for travel planning.</span></div><a className="btn primary" href="/visa-assistance">See visa assistance</a></div></section>

      <section className="section alt" id="travel-styles"><div className="section-head"><div><span className="eyebrow aqua">TRAVEL YOUR WAY</span><h2>One agency. Every kind of getaway.</h2></div></div><div className="style-grid">{styles.map(([icon, title, copy]) => <article key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="why" id="why-us">
        <div className="why-image"><Image src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=82" alt="Traveler looking over a scenic destination" width={1200} height={900} sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="why-copy"><span className="eyebrow coral">WHY INFIO2</span><h2>Planning that feels lighter from the first conversation.</h2><p>Travel should feel exciting—not like 42 browser tabs. Tell us what matters most and we’ll organize the moving parts into one clear plan.</p><div className="steps"><div><b>01</b><span><strong>Share your idea</strong><small>Dates, travelers, budget range and your must-haves.</small></span></div><div><b>02</b><span><strong>We shape the trip</strong><small>Flights, stays, routing and experiences aligned to your priorities.</small></span></div><div><b>03</b><span><strong>You travel</strong><small>Your trip details stay organized and easy to follow.</small></span></div></div><div className="home-story-links"><a className="text-link" href="/about">Discover the InfiO2 story →</a><a className="text-link" href="/mission">Read our mission →</a></div></div>
      </section>

      <section className="section" id="ideas"><div className="section-head"><div><span className="eyebrow coral">INSPIRATION</span><h2>Travel ideas worth saving</h2></div><p>Helpful starting points for deciding where to go and how to travel better.</p></div><div className="ideas-grid">{ideas.map((idea) => <article key={idea.title}><Image src={idea.image} alt={idea.alt} width={900} height={600} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" /><div><span>{idea.tag}</span><h3>{idea.title}</h3><p>{idea.copy}</p></div></article>)}</div></section>

      <TripPlanner />

      <section className="faq section"><div className="section-head"><div><span className="eyebrow aqua">FAQ</span><h2>Good to know before we start</h2></div></div><div className="faq-list"><details><summary>What can InfiO2 help book?</summary><p>InfiO2 can help coordinate vacation packages, hotels and resorts, cruises, custom international itineraries and travel experiences. Available booking components can vary by destination and supplier.</p></details><details><summary>Can you plan a trip for families or groups?</summary><p>Yes. Share the ages, room needs, mobility considerations, interests and preferred pace so the itinerary can be designed around the group.</p></details><details><summary>Do you provide live prices on this website?</summary><p>No. Travel pricing and availability change frequently. Any quote should be confirmed for your exact dates, traveler details and supplier availability before purchase.</p></details><details><summary>Can you create a completely custom itinerary?</summary><p>Yes. Multi-city routing, special occasions, cruises with pre/post stays and other complex trips can be planned around your priorities.</p></details></div></section>
    </main>
  );
}
