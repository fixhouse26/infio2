import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingPageMap, landingPages } from "@/lib/landing-pages";
import TripBuilder from "@/components/TripBuilder";

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPageMap[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/travel/${page.slug}` },
    openGraph: { title: page.title, description: page.description, images: [page.heroImage], type: "website" },
  };
}

export default async function TravelLanding({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const page = landingPageMap[slug];
  if (!page) notFound();

  const schema = {
    "@context":"https://schema.org",
    "@type":"Service",
    name: page.title,
    description: page.description,
    provider: {"@type":"TravelAgency","name":"InfiO2 Travel","url":"https://www.infio2.com"},
    areaServed:"US",
    url:`https://www.infio2.com/travel/${page.slug}`,
    offers: {"@type":"Offer","description":"Personalized quote based on dates, availability, suppliers and requested inclusions."}
  };
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":page.faqs.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))};

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    <section className="landingHero">
      <Image src={page.heroImage} alt={page.title} fill priority sizes="100vw" style={{objectFit:"cover"}} />
      <div className="landingShade" />
      <div className="container landingHeroCopy">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="heroActions">
          <Link className="btn primary" href="#customize-trip">Request a personalized quote</Link>
          {page.visa && <Link className="btn btnGhost" href="/visa-assistance">How visa assistance works</Link>}
        </div>
        <p className="microcopy">No copied supplier pricing. Your quote is built around current availability, dates and the experience you request.</p>
      </div>
    </section>

    <section className="section">
      <div className="container splitIntro">
        <div><p className="eyebrow">What we can plan</p><h2>A vacation shaped around you</h2><p>{page.description}</p></div>
        <div className="highlightGrid">{page.highlights.map(x=><div className="highlightPill" key={x}>{x}</div>)}</div>
      </div>
    </section>

    <section className="section softSection">
      <div className="container">
        <p className="eyebrow">Trip inspiration</p><h2>Start with an idea. We customize from there.</h2>
        <div className="ideaGrid">{page.tripIdeas.map(i=><article className="ideaCard" key={i.title}><span>{i.days}</span><h3>{i.title}</h3><strong>{i.route}</strong><p>{i.summary}</p><Link href="#customize-trip">Build this trip →</Link></article>)}</div>
        <p className="referenceNote">These are planning frameworks, not copied third-party packages. InfiO2 may compare appropriate escorted-tour, cruise, hotel and vacation-package options from available suppliers when preparing your quote.</p>
      </div>
    </section>

    <section className="section">
      <div className="container faqWrap">
        <p className="eyebrow">People also ask</p><h2>Questions travelers ask before booking</h2>
        {page.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
      </div>
    </section>

    <TripBuilder pageSlug={page.slug} defaultDestination={page.title.replace(" Vacation Packages","").replace(" Holiday Packages","").replace(" Travel Packages","").replace(" Honeymoon Packages","").replace(" Travel & Visa Assistance","").replace(" Visa Assistance","")} />
  </main>;
}
