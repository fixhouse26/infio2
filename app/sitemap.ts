import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";
import { longTailPages } from "@/lib/long-tail-pages";
import { stories } from "@/lib/stories";
import { travelUpdates } from "@/lib/travel-news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.infio2.com";
  const core = ["", "/travel", "/build-my-trip", "/about", "/mission", "/visa-assistance", "/stories", "/travel-news", "/contribute", "/editorial-policy", "/privacy", "/cookie-policy", "/terms", "/travel-disclaimer", "/ai-disclaimer", "/visa-disclaimer", "/content-disclaimer"].map((path) => ({
    url: `${base}${path}`, lastModified: new Date(),
    changeFrequency: path === "" || path === "/travel" || path==="/stories" || path==="/travel-news" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/build-my-trip" ? .9 : .7
  }));
  const landings = landingPages.map((p) => ({url:`${base}/travel/${p.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.88}));
  const guides = longTailPages.map((p) => ({url:`${base}/travel/guide/${p.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.82}));
  const editorial=stories.map(s=>({url:`${base}/stories/${s.slug}`,lastModified:new Date(s.updated),changeFrequency:"monthly" as const,priority:.78}));
  const news=travelUpdates.map(n=>({url:`${base}/travel-news/${n.slug}`,lastModified:new Date(n.updated),changeFrequency:"daily" as const,priority:.8}));
  return [...core,...landings,...guides,...editorial,...news];
}
