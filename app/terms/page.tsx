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
      <p className="updated">Last updated: August 30, 2026</p>
      <p>These terms govern use of the InfiO2 Travel website and should be read with the applicable booking, supplier, privacy, AI, visa and travel-information disclosures.</p>
      <h2>Website information</h2><p>Website content is provided for general informational and trip-planning purposes. Travel availability, prices, schedules, entry requirements, health requirements and supplier terms may change without notice.</p>
      <h2>Quotes and bookings</h2><p>A website inquiry does not create a reservation or guarantee a price. Travel arrangements are only confirmed after the applicable booking requirements, supplier availability, traveler information and payment conditions have been satisfied.</p>
      <h2>Third-party suppliers</h2><p>Travel services may be provided by independent airlines, hotels, cruise lines, tour operators, transportation companies and other suppliers. Their own contracts, cancellation terms, limitations and policies may apply.</p>
      <h2>Traveler responsibility</h2><p>Travelers are responsible for confirming that passports, visas, health documentation, insurance and other travel requirements are appropriate for their itinerary and personal circumstances.</p>
      <h2>Automated and AI-generated planning</h2><p>Automated itinerary output is preliminary and may contain errors or outdated information. It is not a live quote, reservation, visa determination, safety instruction or professional legal, medical or immigration advice. Important details must be verified before booking or travel.</p><h2>User submissions</h2><p>You are responsible for information and materials you submit and for having the right to submit them. Do not use forms to transmit unnecessary sensitive information, unlawful material or content that infringes another person’s rights.</p><h2>Intellectual property</h2><p>InfiO2 branding, original website copy and original design elements may not be reproduced for commercial use without permission. Third-party images and marks remain subject to their respective rights and licenses.</p>
      <h2>Contact</h2><p>Questions about these website terms may be sent to <a href="mailto:info@infio2.com">info@infio2.com</a>.</p>
      <p className="legal-note"><strong>Launch note:</strong> Add your legal entity, address, governing law, booking/cancellation terms and travel-seller disclosures required for your business before production use.</p>
    </article></main>
  );
}
