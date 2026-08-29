import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About InfiO2 | Infinite Oxygen, Infinite Experiences",
  description:
    "Discover the meaning behind InfiO2 Travel: Infinite Oxygen, Infinite Experiences. We design meaningful travel that creates room to breathe, explore, connect and live more fully.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About InfiO2 | Infinite Oxygen, Infinite Experiences",
    description:
      "Learn how InfiO2 connects the idea of oxygen, possibility and meaningful travel to a fuller, richer life.",
    url: "/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Traveler experiencing a wide open natural landscape",
      },
    ],
  },
};

const pillars = [
  {
    number: "01",
    title: "Breathe",
    copy: "Create distance from routine, deadlines and noise. Travel can give you the space to slow down, reset your perspective and be present.",
  },
  {
    number: "02",
    title: "Explore",
    copy: "Meet new landscapes, cultures, flavors and ideas. Exploration expands the world around you—and often the way you see your own life.",
  },
  {
    number: "03",
    title: "Connect",
    copy: "Make uninterrupted time for family, partners, friends and yourself while building genuine connections with places and people beyond home.",
  },
  {
    number: "04",
    title: "Live",
    copy: "Collect moments worth remembering. We believe a rich life is not measured only by how many years it contains, but by how fully those years are lived.",
  },
];

export default function AboutPage() {
  return (
    <main className="story-page">
      <section className="story-hero">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=88"
          alt="Traveler standing in an expansive natural landscape"
          fill
          priority
          sizes="100vw"
        />
        <div className="story-hero-overlay" />
        <div className="story-hero-copy">
          <span className="eyebrow">THE STORY BEHIND THE NAME</span>
          <h1>Infinite Oxygen.<br /><span>Infinite Experiences.</span></h1>
          <p>
            InfiO2 is built around a simple idea: life needs oxygen, and a meaningful life needs room to breathe, explore, connect and experience more of the world.
          </p>
        </div>
      </section>

      <section className="story-intro section">
        <div className="story-intro-grid">
          <div>
            <span className="eyebrow coral">WHY INFIO2?</span>
            <h2>A name inspired by what keeps life moving.</h2>
          </div>
          <div className="story-copy-large">
            <p>
              <strong>“Infi” represents infinite</strong>—the endless possibilities, destinations, cultures and experiences waiting beyond the familiar.
            </p>
            <p>
              <strong>“O2” represents oxygen</strong>—one of life&apos;s essentials and a symbol of energy, renewal and the freedom to breathe.
            </p>
            <p>
              Together, <strong>InfiO2</strong> expresses our belief that travel should do more than move you from one place to another. It should create space in your life for discovery, joy, perspective and connection.
            </p>
          </div>
        </div>
      </section>

      <section className="life-oxygen-section">
        <div className="life-oxygen-image">
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85"
            alt="Open desert landscape under a dramatic sky"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="life-oxygen-copy">
          <span className="eyebrow aqua">OUR BRAND IDEA</span>
          <h2>Travel as “Life Oxygen.”</h2>
          <p>
            We use <strong>Life Oxygen</strong> as a metaphor for the experiences that make life feel expansive: a sunrise somewhere new, a family story everyone still tells years later, a meal you never expected, or the first deep breath after arriving somewhere beautiful.
          </p>
          <blockquote>
            “We don&apos;t just want to help you go farther. We want to help you live wider.”
          </blockquote>
          <p className="story-disclaimer">
            InfiO2&apos;s longevity language is philosophical, not medical. We do not claim that travel extends biological lifespan; our focus is helping people create fuller, more meaningful experiences within the life they live.
          </p>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="section-head">
          <div>
            <span className="eyebrow coral">THE INFIO2 PHILOSOPHY</span>
            <h2>Breathe. Explore. Connect. Live.</h2>
          </div>
          <p>Four ideas guide how we think about travel and how we want every InfiO2 journey to feel.</p>
        </div>
        <div className="philosophy-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-cta">
        <div>
          <span className="eyebrow">TRAVEL WITH PURPOSE</span>
          <h2>See what our mission looks like in practice.</h2>
          <p>Learn how InfiO2 turns this philosophy into thoughtfully designed holidays and meaningful travel experiences.</p>
          <div className="story-actions">
            <Link className="btn accent" href="/mission">Read our mission</Link>
            <Link className="btn glass" href="/#plan">Plan my trip</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
