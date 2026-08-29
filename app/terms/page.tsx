import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Terms",
  description: "Website terms for InfiO2 Travel.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="legal-page"><article className="legal">
      <span className="eyebrow coral">INFIO2 TRAVEL</span><h1>Website Terms</h1>
      <p className="updated">Last updated: August 10, 2026</p>
      <p>These starter terms govern use of the InfiO2 Travel website. They should be reviewed and adapted to your actual business structure, booking process, supplier relationships and jurisdiction before launch.</p>
      <h2>Website information</h2><p>Website content is provided for general informational and trip-planning purposes. Travel availability, prices, schedules, entry requirements, health requirements and supplier terms may change without notice.</p>
      <h2>Quotes and bookings</h2><p>A website inquiry does not create a reservation or guarantee a price. Travel arrangements are only confirmed after the applicable booking requirements, supplier availability, traveler information and payment conditions have been satisfied.</p>
      <h2>Third-party suppliers</h2><p>Travel services may be provided by independent airlines, hotels, cruise lines, tour operators, transportation companies and other suppliers. Their own contracts, cancellation terms, limitations and policies may apply.</p>
      <h2>Traveler responsibility</h2><p>Travelers are responsible for confirming that passports, visas, health documentation, insurance and other travel requirements are appropriate for their itinerary and personal circumstances.</p>
      <h2>Intellectual property</h2><p>InfiO2 branding, original website copy and original design elements may not be reproduced for commercial use without permission. Third-party images and marks remain subject to their respective rights and licenses.</p>
      <h2>Contact</h2><p>Questions about these website terms may be sent to <a href="mailto:info@infio2.com">info@infio2.com</a>.</p>
      <p className="legal-note"><strong>Launch note:</strong> Add your legal entity, address, governing law, booking/cancellation terms and travel-seller disclosures required for your business before production use.</p>
    </article></main>
  );
}
