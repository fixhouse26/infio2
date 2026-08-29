import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/landing-pages";
import { longTailPages } from "@/lib/long-tail-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.infio2.com";
  const core = ["", "/travel", "/build-my-trip", "/about", "/mission", "/visa-assistance", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/travel" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/build-my-trip" ? .9 : .7
  }));
  const landings = landingPages.map((p) => ({
    url: `${base}/travel/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: .88
  }));
  const guides = longTailPages.map((p) => ({
    url: `${base}/travel/guide/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: .82
  }));
  return [...core, ...landings, ...guides];
}
