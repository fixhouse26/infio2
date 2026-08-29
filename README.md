# InfiO2 Travel — Next.js

Ready-to-edit Next.js App Router project for InfiO2 Travel.

## Stack
- Next.js 16
- React 19
- TypeScript
- App Router
- Next.js Image optimization
- Native Metadata API, sitemap, robots and manifest
- Schema.org TravelAgency JSON-LD

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Unzip this project.
2. Push the project folder to GitHub.
3. In Vercel choose **Add New → Project** and import the repository.
4. Vercel should detect **Next.js** automatically.
5. Click **Deploy**.
6. Add your production domain under **Settings → Domains**.

## Required edits before launch
- Replace `info@infio2.com` with your real inquiry email if different.
- Confirm the production domain. The project currently uses `https://www.infio2.com` in metadata, sitemap and robots.
- Add the actual legal business name and address to the Privacy and Terms pages.
- Review travel-seller registration/disclosure requirements for every state/jurisdiction where you sell travel.
- Add accreditation or association claims only when they are accurate and current.

## Interactive trip builder and lead delivery
The project includes `/build-my-trip` plus an interactive builder embedded directly on destination and SEO landing pages. Travelers can select places, attractions, hotel category, room needs, flight cabin, transportation, trip pace, free time, meals, visa assistance, budget and special requests.

Submissions post to `/api/trip-request`. For direct server-side email delivery, create a Resend account, verify the sending domain, and set the three variables shown in `.env.example` in Vercel. If Resend is not configured or email delivery fails, the website falls back to opening a pre-filled email to `info@infio2.com` so the lead is not silently lost.

## Images
The project uses externally hosted Unsplash images through `next/image`. The hostname is configured in `next.config.ts`. For long-term production reliability, download appropriately licensed final assets, optimize them and place them in `/public/images`.

## SEO / AI discovery
The project includes:
- descriptive metadata
- canonical URLs
- Open Graph/Twitter metadata
- TravelAgency structured data
- semantic headings and content
- crawlable sitemap
- robots configuration
- descriptive image alt text

For stronger organic visibility, add original dedicated pages for destinations, cruises, family travel, honeymoons, luxury travel and travel guides instead of relying only on the homepage.

## Brand story pages

This version includes two new SEO-ready brand pages:

- `/about` — explains **InfiO2 = Infinite Oxygen**, the “Life Oxygen” metaphor, and the Breathe / Explore / Connect / Live philosophy.
- `/mission` — explains the mission of helping people live fuller lives through meaningful travel, while explicitly avoiding unsupported medical or longevity claims.

Both pages are included in the navigation, footer, sitemap and page metadata.

## Search, AI crawler and voice-search readiness

This version includes:
- crawlable semantic HTML and server-rendered Next.js pages
- dynamic `robots.txt` allowing standard crawlers plus Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot/Claude-User and PerplexityBot/Perplexity-User
- `sitemap.xml` with the visa-assistance page included
- `llms.txt` with a concise machine-readable site summary
- TravelAgency, WebSite, Service and FAQPage structured data
- index/follow metadata and large image/snippet permissions for Googlebot
- conversational headings and FAQ answers designed to match natural-language and voice queries
- descriptive page titles, meta descriptions, canonical URLs and internal links

No technical setting can guarantee first-place rankings, inclusion in every AI answer, or automatic indexing by every search company. After launch, verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap, and ensure any CDN/WAF/bot-protection layer does not block legitimate crawlers.

## Visa application assistance

`/visa-assistance` is a dedicated conversion page covering requirement checklists, document organization, application guidance, appointment preparation, multi-country planning and travel coordination. The wording deliberately avoids guaranteeing approvals or presenting InfiO2 as a government or legal authority.


## SEO landing pages added
This build includes 13 intent-focused landing pages under `/travel/[slug]`, plus `/travel`. Pricing is intentionally request-a-quote; third-party supplier prices are not reproduced. Content architecture takes inspiration from common high-converting travel-market patterns such as duration/route clarity, trip ideas, FAQs, trust disclaimers, and quote CTAs, while all InfiO2 copy is original.


## Final launch footprint
- 13 primary destination/service landing pages under `/travel/[slug]`
- 36 long-tail intent pages under `/travel/guide/[slug]`
- 1 searchable/browsable travel directory at `/travel`
- Interactive builder at `/build-my-trip` and embedded on destination/search pages
- 49 trip-focused crawlable landing pages in total, plus homepage, About, Mission, Visa Assistance, Privacy and Terms
- Dynamic sitemap including all primary and long-tail pages
- `robots.txt` explicitly allows major search/AI crawlers while excluding `/api/`
- `llms.txt` machine-readable brand/service summary
- FAQ and Service structured data on trip pages

Before production, set your verified Resend sender and lead email, confirm legal business disclosures, and connect Google Search Console and Bing Webmaster Tools after the domain is live.


## Conversion analytics
Set `NEXT_PUBLIC_GA_ID` in Vercel to enable GA4. Successful server-side trip-builder submissions fire a `generate_lead` event so you can measure which landing pages and campaigns produce real inquiries. Apply any legally required cookie/consent controls before enabling analytics.


## Production inquiry email
This version is configured for Resend. All trip-builder leads are delivered to `info@infio2.com` when `RESEND_API_KEY` is configured. The lead email uses the customer's address as Reply-To. A confirmation email is also sent to the traveler with Reply-To set to `info@infio2.com`.
