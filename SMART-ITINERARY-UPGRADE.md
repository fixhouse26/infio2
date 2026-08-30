# InfiO2 Smart Itinerary Upgrade

Included:
- Destination travel-data library
- Rule-based day-by-day itinerary generator
- Preliminary cost ranges
- Destination imagery
- Optional OpenAI Responses API personalization
- Structured JSON output
- Hybrid / zero-AI-cost modes
- In-memory cache
- Optional persistent REST KV cache
- Visual itinerary results
- Final-quote handoff through Resend
- Traveler acknowledgement with itinerary summary
- Analytics events for itinerary generation and lead conversion

## Recommended Vercel settings

Required for email:
RESEND_API_KEY
TRAVEL_LEAD_EMAIL=info@infio2.com
TRAVEL_FROM_EMAIL=InfiO2 Travel <noreply@infio2.com>

Recommended AI mode:
OPENAI_API_KEY=<your key>
OPENAI_ITINERARY_MODEL=gpt-5.6-luna
AI_ITINERARY_MODE=hybrid

For absolutely zero OpenAI usage:
AI_ITINERARY_MODE=library

Optional persistent cache:
KV_REST_API_URL
KV_REST_API_TOKEN

## Commit commands

cd C:\Users\Gupta\infio2
npm install
npm run build
git add .
git commit -m "Add InfiO2 smart AI itinerary planner and travel data library"
git push origin main
