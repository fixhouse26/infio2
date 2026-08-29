import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const siteUrl = "https://www.infio2.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InfiO2 Travel | Holidays, Visa Assistance & Custom Vacations",
    template: "%s | InfiO2 Travel",
  },
  description:
    "Plan memorable holidays with InfiO2 Travel. Custom vacations, cruises, resorts, family trips, honeymoons, international itineraries and travel visa application assistance.",
  keywords: ["travel agency", "holiday travel", "custom vacations", "international travel", "visa application assistance", "family vacations", "honeymoon planning", "cruise planning"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "InfiO2 Travel | Infinite Oxygen. Infinite Experiences.",
    description: "Colorful, personalized holidays, visa assistance, cruises, resorts and custom international itineraries.",
    url: siteUrl,
    siteName: "InfiO2 Travel",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85", width: 1600, height: 900, alt: "Tropical holiday beach" }],
  },
  twitter: { card: "summary_large_image", title: "InfiO2 Travel", description: "Infinite Oxygen. Infinite Experiences. Holidays and visa assistance, thoughtfully planned.", images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"] },
};

const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl}/#travelagency`,
  name: "InfiO2 Travel",
  url: siteUrl,
  email: "info@infio2.com",
  description: "Travel agency specializing in custom holidays, cruises, resorts, family vacations, honeymoons, international itineraries and visa application assistance.",
  areaServed: "Worldwide",
  slogan: "Infinite Oxygen. Infinite Experiences.",
  knowsAbout: ["Holiday packages", "Visa application assistance", "International travel requirements", "Cruises", "Resorts", "Family travel", "Honeymoons", "Custom international itineraries"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "InfiO2 Travel",
  description: "Holiday planning, custom international travel and visa application assistance.",
  publisher: { "@id": `${siteUrl}/#travelagency` },
  inLanguage: "en-US",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
