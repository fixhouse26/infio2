import { stories } from "@/lib/stories";
import { travelUpdates } from "@/lib/travel-news";

const site = "https://www.infio2.com";
const esc = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = [
    ...stories.map((s) => ({ title: s.title, description: s.description, url: `${site}/stories/${s.slug}`, date: s.updated })),
    ...travelUpdates.map((n) => ({ title: n.title, description: n.summary, url: `${site}/travel-news/${n.slug}`, date: n.updated })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>InfiO2 Travel</title><link>${site}</link><description>Travel planning guides, stories and traveler updates from InfiO2.</description><language>en-us</language>${items.map((item) => `<item><title>${esc(item.title)}</title><link>${item.url}</link><guid>${item.url}</guid><pubDate>${new Date(item.date + "T12:00:00Z").toUTCString()}</pubDate><description>${esc(item.description)}</description></item>`).join("")}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
