# InfiO2 Search Indexing Checklist

Use this after deploying the updated package to the production `www.infio2.com` domain.

## 1. Verify production URLs
Open these in a private/incognito browser and confirm HTTP 200 responses:
- https://www.infio2.com/
- https://www.infio2.com/robots.txt
- https://www.infio2.com/sitemap.xml
- https://www.infio2.com/llms.txt
- https://www.infio2.com/feed.xml

## 2. Google Search Console
1. Add/verify the `https://www.infio2.com/` property (or Domain property).
2. Put the Google verification token in Vercel as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy if using HTML-tag verification.
3. Submit `https://www.infio2.com/sitemap.xml` in **Sitemaps**.
4. Use **URL Inspection** on the homepage, `/travel`, `/build-my-trip`, `/visa-assistance`, and 3–5 strongest destination pages. Request indexing after confirming the live test is indexable.
5. Review **Page indexing** for `Discovered - currently not indexed`, `Crawled - currently not indexed`, canonical conflicts, redirects, 404s, and server errors.

## 3. Bing Webmaster Tools
1. Import the verified Google Search Console property or verify the domain directly.
2. Put the Bing verification value in Vercel as `NEXT_PUBLIC_BING_SITE_VERIFICATION` if using a meta tag.
3. Submit `https://www.infio2.com/sitemap.xml`.
4. Use URL Submission for the homepage and strongest landing pages.
5. Enable IndexNow from Bing Webmaster Tools when you have the generated IndexNow key; do not publish a made-up key.

## 4. Canonical host
Use one production host consistently. This project declares `https://www.infio2.com` as canonical. Ensure the apex `https://infio2.com` permanently redirects to `https://www.infio2.com` in the hosting/domain settings.

## 5. What this package already does
- Index/follow metadata on public pages.
- Canonical URLs.
- XML sitemap with stable `lastModified` values instead of pretending every page changed on every request.
- Robots rules that allow public content and block `/api/` crawl waste.
- Unique, concise titles and descriptions.
- TravelAgency + WebSite structured data.
- Service, Article/NewsArticle, Breadcrumb and FAQ structured data where the visible page content supports it.
- Large image-preview permission and Open Graph image metadata.
- RSS discovery feed for stories and travel updates.
- `llms.txt` for AI systems that choose to consume it. Google Search does not require `llms.txt`; standard SEO remains the priority.

## 6. Do not do this
- Do not mass-create thin location or destination pages solely for keywords.
- Do not use fake review/rating schema.
- Do not mark AI-generated estimates as live prices.
- Do not change canonical URLs merely to force re-indexing.
- Do not set all sitemap `lastModified` dates to the current time on every request.

## Voice search / AI discovery note
There is no universal "voice-search" meta tag and Google does not require special AI-search markup. The site is optimized instead with concise answer-first copy, natural-language questions, descriptive headings, crawlable HTML, entity/service/article structured data, strong internal linking and indexable destination pages. `llms.txt` is retained for systems that elect to use it, but it is not a substitute for standard SEO.
