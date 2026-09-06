import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { creators, stories } from "@/lib/stories";
import { breadcrumbSchema, clampDescription, compactTitle } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(creators).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const creator = creators[slug as keyof typeof creators];
  if (!creator) return {};
  return {
    title: compactTitle(creator.name),
    description: clampDescription(`${creator.role}. ${creator.bio}`),
    alternates: { canonical: `/creators/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = creators[slug as keyof typeof creators];
  if (!creator) notFound();
  const items = stories.filter((story) => story.authorSlug === slug);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Travel Stories", path: "/stories" },
    { name: creator.name, path: `/creators/${slug}` },
  ]);
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": creator.name === "InfiO2 Editorial Team" ? "Organization" : "Person",
    name: creator.name,
    description: creator.bio,
    url: `https://www.infio2.com/creators/${slug}`,
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    <section className="pageHero"><span className="eyebrow">INFiO2 CREATOR</span><h1>{creator.name}</h1><p>{creator.role}</p></section>
    <section className="section narrow"><p className="lead">{creator.bio}</p><h2>Stories & guides</h2>{items.map((story) => <p key={story.slug}><Link href={`/stories/${story.slug}`}>{story.title} →</Link></p>)}<div className="editorialNotice">Creator opinions are their own. Material relationships, sponsorships, complimentary travel or affiliate relationships must be disclosed on applicable content.</div></section>
  </main>;
}
