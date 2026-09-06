import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission: Travel for a Fuller Life",
  description:
    "Learn how InfiO2 designs meaningful travel around discovery, connection, restoration and memorable experiences instead of rushed, rigid itineraries.",
  alternates: { canonical: "/mission" },
  openGraph: {
    title: "Our Mission | InfiO2 Travel",
    description: "Travel for a fuller life: discovery, connection, restoration and memorable experiences.",
    url: "/mission",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Traveler overlooking a scenic destination",
      },
    ],
  },
};

const commitments = [
  ["Meaning before mileage", "A great trip is not about collecting the most stops. We prioritize experiences that feel worthwhile and give each destination enough room to be enjoyed."],
  ["Connection over consumption", "We encourage travel that creates time together, supports curiosity and helps travelers engage thoughtfully with the places they visit."],
  ["Restoration without guilt", "A holiday can be active, adventurous or deeply restful. We design around the energy and pace you actually want—not an overloaded checklist."],
  ["Plans built around people", "Different travelers need different rhythms. Families, couples, groups and solo travelers should not be forced into the same template."],
  ["More clarity, less friction", "Travel planning can become overwhelming. Our role is to simplify decisions, organize the moving parts and make the path from idea to departure easier to follow."],
  ["Memories with staying power", "The most valuable part of a journey often remains long after the flight home: stories, perspectives, relationships and moments you continue to carry."],
];

export default function MissionPage() {
  return (
    <main className="mission-page">
      <section className="mission-hero">
        <div className="mission-hero-copy">
          <span className="eyebrow coral">OUR MISSION</span>
          <h1>Travel for a <span>fuller life.</span></h1>
          <p>
            To help people live fuller lives through meaningful travel—creating journeys that encourage discovery, connection, restoration and unforgettable experiences.
          </p>
          <Link className="btn primary" href="/#plan">Design my journey</Link>
        </div>
        <div className="mission-hero-image">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=86"
            alt="Traveler looking across a scenic destination"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="mission-statement section">
        <span className="eyebrow aqua">WHAT WE BELIEVE</span>
        <p className="mission-big-copy">
          A longer life is measured not only in years, but also in <strong>how fully those years are lived.</strong>
        </p>
        <p className="mission-supporting-copy">
          Travel cannot promise longevity, and neither do we. What it can offer is time outside routine: opportunities to reconnect, discover, rest, celebrate milestones and build memories that give life greater texture.
        </p>
      </section>

      <section className="mission-collage">
        <div className="mission-collage-main">
          <Image src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=84" alt="Open landscape representing exploration" fill sizes="(max-width: 900px) 100vw, 60vw" />
        </div>
        <div className="mission-collage-side">
          <div><Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=84" alt="Friends sharing meaningful travel time together" fill sizes="(max-width: 900px) 100vw, 40vw" /></div>
          <div><Image src="https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=900&q=84" alt="Quiet mountain travel scene at sunset" fill sizes="(max-width: 900px) 100vw, 40vw" /></div>
        </div>
      </section>

      <section className="section commitment-section">
        <div className="section-head">
          <div>
            <span className="eyebrow coral">HOW WE PUT IT INTO PRACTICE</span>
            <h2>The journeys we want to create.</h2>
          </div>
          <p>Our mission becomes useful only when it changes the way a trip is planned.</p>
        </div>
        <div className="commitment-grid">
          {commitments.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mission-manifesto">
        <div className="manifesto-inner">
          <span className="eyebrow">OUR PROMISE</span>
          <h2>More than a destination.</h2>
          <p>
            We want every InfiO2 trip to leave you with something that does not fit inside a suitcase: a new story, a stronger connection, a restored sense of energy, or a wider view of the world.
          </p>
          <p className="manifesto-line">Infinite possibilities. Essential moments. A life experienced more fully.</p>
          <div className="story-actions">
            <Link className="btn accent" href="/about">Why the name InfiO2?</Link>
            <Link className="btn glass" href="/#destinations">Explore destinations</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
