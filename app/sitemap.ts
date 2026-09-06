import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";
import { longTailPages } from "@/lib/long-tail-pages";
import { creators, stories } from "@/lib/stories";
import { travelUpdates } from "@/lib/travel-news";

const base = "https://www.infio2.com";
const siteRefresh = new Date("2026-09-05T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/travel", "/build-my-trip", "/about", "/mission", "/visa-assistance", "/stories", "/travel-news", "/contribute", "/editorial-policy", "/privacy", "/cookie-policy", "/terms", "/travel-disclaimer", "/ai-disclaimer", "/visa-disclaimer", "/content-disclaimer"].map((path) => ({
    url: `${base}${path}`,
    lastModified: siteRefresh,
    changeFrequency: path === "" || path === "/travel" || path === "/stories" || path === "/travel-news" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/build-my-trip" ? 0.9 : 0.7,
  }));
  const landings = landingPages.map((p) => ({ url: `${base}/travel/${p.slug}`, lastModified: siteRefresh, changeFrequency: "monthly" as const, priority: 0.88 }));
  const guides = longTailPages.map((p) => ({ url: `${base}/travel/guide/${p.slug}`, lastModified: siteRefresh, changeFrequency: "monthly" as const, priority: 0.82 }));
  const editorial = stories.map((s) => ({ url: `${base}/stories/${s.slug}`, lastModified: new Date(s.updated), changeFrequency: "monthly" as const, priority: 0.78 }));
  const creatorPages = Object.keys(creators).map((slug) => ({ url: `${base}/creators/${slug}`, lastModified: siteRefresh, changeFrequency: "monthly" as const, priority: 0.6 }));
  const news = travelUpdates.map((n) => ({ url: `${base}/travel-news/${n.slug}`, lastModified: new Date(n.updated), changeFrequency: "weekly" as const, priority: 0.8 }));
  return [...core, ...landings, ...guides, ...editorial, ...creatorPages, ...news];
}
