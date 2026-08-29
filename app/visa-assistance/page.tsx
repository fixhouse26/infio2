import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Visa Application Assistance for International Travel",
  description:
    "Get practical visa application assistance for international travel, including document checklists, application guidance, appointment preparation and travel-entry planning from InfiO2 Travel.",
  alternates: { canonical: "/visa-assistance" },
  openGraph: {
    title: "Visa Application Assistance | InfiO2 Travel",
    description: "Practical help organizing visa applications and international travel requirements.",
    url: "/visa-assistance",
    type: "website",
  },
};

const faq = [
  ["Can InfiO2 help me apply for a travel visa?", "Yes. InfiO2 can assist with the visa-application process by helping you identify published requirements, organize document checklists, prepare application information, and plan for appointments or submission steps. Final eligibility and visa decisions remain with the relevant government authority."],
  ["Do you guarantee visa approval?", "No. No travel agency or application-assistance provider can guarantee a visa. Approval, processing time, interview requirements and entry decisions are controlled by the relevant embassy, consulate, government department or border authority."],
  ["When should I start a visa application?", "Start as early as the destination permits. Processing times, appointment availability and document requirements can change, so early preparation reduces avoidable travel risk."],
  ["Can you help with more than one country on a trip?", "Yes. For multi-country itineraries, InfiO2 can help you build a travel-requirements checklist around the countries on your route and flag where separate visas, transit permissions or other entry documentation may need attention."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Visa Application Assistance",
  serviceType: "Travel visa application assistance",
  provider: { "@type": "TravelAgency", name: "InfiO2 Travel", url: "https://www.infio2.com" },
  areaServed: "Worldwide",
  description: "Travel visa application assistance including requirement research, document checklist support, application guidance, appointment preparation and itinerary coordination.",
};

export default function VisaAssistancePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="story-hero visa-hero">
        <Image
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2000&q=88"
          alt="International traveler preparing passport and travel documents"
          fill
          priority
          sizes="100vw"
        />
        <div className="story-hero-overlay" />
        <div className="story-hero-copy">
          <span className="eyebrow">INTERNATIONAL TRAVEL SUPPORT</span>
          <h1>Visa assistance.<br /><span>Less uncertainty.</span></h1>
          <p>International travel often begins before the airport. InfiO2 helps you organize the visa-application process, understand published requirements and prepare your travel documentation with a clearer plan.</p>
          <div className="hero-actions"><a className="btn primary" href="/#plan">Request visa help</a><a className="btn glass" href="#how-it-works">How it works</a></div>
        </div>
      </section>

      <section className="section">
        <div className="section-head"><div><span className="eyebrow coral">VISA APPLICATION ASSISTANCE</span><h2>Practical help before you submit.</h2></div><p>We help travelers turn a complicated list of requirements into an organized action plan while keeping official government sources and deadlines at the center of the process.</p></div>
        <div className="style-grid visa-services">
          <article><span>📋</span><h3>Requirement checklist</h3><p>We help identify the published visa and entry-document requirements relevant to your destination and travel profile.</p></article>
          <article><span>🗂️</span><h3>Document organization</h3><p>Build a clearer checklist for passports, photographs, forms, itinerary evidence and other commonly requested supporting documents.</p></article>
          <article><span>📝</span><h3>Application guidance</h3><p>Get assistance understanding application steps and preparing the information you need before submitting through the appropriate official channel.</p></article>
          <article><span>📅</span><h3>Appointment preparation</h3><p>Where appointments or interviews are required, we help you organize the timing, documentation and trip-planning dependencies around them.</p></article>
          <article><span>🌍</span><h3>Multi-country planning</h3><p>For complex itineraries, we can help map visa, transit and entry-document considerations across the route.</p></article>
          <article><span>✈️</span><h3>Travel coordination</h3><p>Connect visa preparation with your broader holiday plan so flights, hotels and key dates are considered together.</p></article>
        </div>
      </section>

      <section className="why visa-process" id="how-it-works">
        <div className="why-image"><Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=84" alt="Airplane preparing for international travel" width={1200} height={900} /></div>
        <div className="why-copy"><span className="eyebrow coral">HOW IT WORKS</span><h2>One travel plan. Fewer loose ends.</h2><p>Tell us where you are traveling, your citizenship or passport country, travel dates and the purpose of your trip. We use that information to help organize the application-assistance workflow.</p><div className="steps"><div><b>01</b><span><strong>Share your trip</strong><small>Destination, dates, traveler details and purpose of travel.</small></span></div><div><b>02</b><span><strong>Build the checklist</strong><small>Identify published requirements and organize the documents and timing.</small></span></div><div><b>03</b><span><strong>Prepare and submit</strong><small>Use the appropriate official government process for submission, appointments and fees.</small></span></div></div><a className="btn primary" href="/#plan">Start my travel request</a></div>
      </section>

      <section className="section faq">
        <div className="section-head"><div><span className="eyebrow aqua">VISA ASSISTANCE FAQ</span><h2>Questions travelers ask before applying</h2></div></div>
        <div className="faq-list">{faq.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <section className="story-cta"><div><span className="eyebrow">IMPORTANT</span><h2>Assistance, not government representation.</h2><p>InfiO2 is a travel agency and application-assistance service, not an embassy, consulate, government agency or immigration law firm. Visa requirements can change and approval is never guaranteed. Travelers should rely on the relevant government authority for final requirements and decisions.</p><div className="story-actions"><a className="btn accent" href="/#plan">Request assistance</a><a className="btn glass" href="/about">About InfiO2</a></div></div></section>
    </main>
  );
}
