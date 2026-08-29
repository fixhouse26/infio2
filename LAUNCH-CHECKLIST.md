# InfiO2 Final Launch Checklist

## 1. Deploy
- Push this project to GitHub.
- Import the repository into Vercel.
- Confirm the production domain is `www.infio2.com` or update the site URL consistently if you use a different canonical host.

## 2. Make trip requests arrive directly by email
In Vercel → Project Settings → Environment Variables, add:
- `RESEND_API_KEY`
- `TRAVEL_LEAD_EMAIL=info@infio2.com
- `TRAVEL_FROM_EMAIL=InfiO2 Travel <noreply@infio2.com>

Verify `infio2.com` as a sending domain in Resend before using `travel@infio2.com`.

If Resend is not configured, the trip builder automatically falls back to a pre-filled email instead of discarding the inquiry.

## 3. Analytics
Optional:
- Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

Successful direct trip-builder submissions fire a GA4 `generate_lead` event.

## 4. Search launch
After the site is live:
- Add the domain to Google Search Console.
- Add the domain to Bing Webmaster Tools.
- Submit `https://www.infio2.com/sitemap.xml`.
- Inspect `/robots.txt`, `/sitemap.xml`, and `/llms.txt` publicly.
- Make sure your CDN/WAF does not block Googlebot, Bingbot, Applebot, OAI-SearchBot or other legitimate crawlers allowed in `robots.txt`.

## 5. Legal/business checks
Before accepting bookings:
- Replace or confirm all business/legal information in Privacy and Terms.
- Confirm seller-of-travel registration/disclosure requirements applicable to your business.
- Do not add accreditation, partnership, price-match or supplier claims unless accurate.
- Visa assistance is described as administrative assistance only; government authorities make all visa decisions.

## Launch footprint
- Homepage
- About InfiO2 / Infinite Oxygen
- Mission
- Visa Assistance
- Interactive Build My Trip page
- Travel directory
- 13 primary destination/service landing pages
- 36 long-tail intent landing pages
- 49 trip-focused SEO pages total
- Dynamic sitemap
- Search/AI crawler-friendly robots rules
- llms.txt
- Service + FAQ structured data
- Server-side lead delivery with email fallback
- GA4 lead-event support


## Final Resend production setup
1. In Resend, add and verify the domain `infio2.com` by adding the DNS records Resend provides.
2. Create a Resend API key.
3. In Vercel → Project → Settings → Environment Variables add:
   - `RESEND_API_KEY` = your Resend API key
   - `TRAVEL_LEAD_EMAIL` = `info@infio2.com`
   - `TRAVEL_FROM_EMAIL` = `InfiO2 Travel <noreply@infio2.com>`
4. Redeploy after adding environment variables.
5. Submit a real test through `/build-my-trip`.
6. Confirm:
   - the full trip brief arrives at `info@infio2.com`;
   - Reply-To is the customer's email;
   - the customer receives the automatic InfiO2 acknowledgement;
   - replying to the acknowledgement goes to `info@infio2.com`.
