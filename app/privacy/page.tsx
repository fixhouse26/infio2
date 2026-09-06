import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Practices",
  description: "Learn how InfiO2 Travel handles information submitted through trip planning, inquiries, analytics and travel-service workflows, plus your privacy choices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page"><article className="legal">
      <span className="eyebrow coral">INFIO2 TRAVEL</span><h1>Privacy Policy</h1>
      <p className="updated">Last updated: August 30, 2026</p>
      <p>This policy describes categories of information that may be processed through the InfiO2 Travel website. It should be read together with the Cookie Policy and applicable travel-service terms.</p>
      <h2>Information we collect</h2><p>When you contact us or request travel planning, you may provide information such as your name, email address, telephone number, proposed travel dates, departure city, destination and attraction preferences, hotel and room preferences, flight cabin, transportation needs, number of travelers, approximate budget, visa-assistance request and other trip preferences.</p>
      <h2>How information may be used</h2><p>Information may be used to respond to inquiries, prepare or coordinate requested travel services, communicate about your trip, maintain business records, improve website performance, prevent misuse and comply with applicable legal obligations.</p>
      <h2>Travel suppliers</h2><p>If you choose to proceed with a booking, information necessary to arrange travel may need to be shared with airlines, hotels, cruise lines, tour operators, insurance providers, payment processors or other travel suppliers. Their own privacy practices may apply.</p>
      <h2>Cookies and analytics</h2><p>The website can be configured to use analytics such as Google Analytics to understand visits, page performance and successful trip-request submissions. Advertising pixels are not configured by default. Before enabling analytics or other tracking, implement any cookie or consent controls required for the jurisdictions in which you operate and update this policy as appropriate.</p>
      <h2>AI-assisted itinerary processing</h2><p>Information entered into the smart trip planner may be processed by InfiO2 systems and, when AI personalization is enabled, by an AI service provider acting as part of the itinerary-generation workflow. Avoid entering passport numbers, payment-card information, medical details or other unnecessary sensitive information into free-text fields.</p><h2>Retention</h2><p>Trip inquiries, generated itinerary information and related communications may be retained as reasonably necessary to respond to requests, operate and improve the service, maintain records, prevent abuse and meet legal obligations. Retention practices should be aligned with actual production systems.</p><h2>Data security</h2><p>Reasonable administrative and technical measures should be used to safeguard personal information. No internet transmission or electronic storage system can be guaranteed to be completely secure.</p>
      <h2>Your choices</h2><p>You may contact InfiO2 Travel to ask about information you previously submitted or to request correction or deletion where applicable.</p>
      <h2>Contact</h2><p>Email: <a href="mailto:info@infio2.com">info@infio2.com</a></p>
      <p className="legal-note"><strong>Launch note:</strong> Add the company&apos;s legal name, mailing address, applicable state privacy disclosures and any required international privacy language before production use.</p>
    </article></main>
  );
}
