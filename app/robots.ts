import type { MetadataRoute } from "next";

const publicRule = { allow: "/", disallow: ["/api/"] };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...publicRule },
      { userAgent: "Googlebot", ...publicRule },
      { userAgent: "Bingbot", ...publicRule },
      { userAgent: "Applebot", ...publicRule },
      { userAgent: "Applebot-Extended", ...publicRule },
      { userAgent: "OAI-SearchBot", ...publicRule },
      { userAgent: "GPTBot", ...publicRule },
      { userAgent: "ChatGPT-User", ...publicRule },
      { userAgent: "ClaudeBot", ...publicRule },
      { userAgent: "Claude-User", ...publicRule },
      { userAgent: "PerplexityBot", ...publicRule },
      { userAgent: "Perplexity-User", ...publicRule },
    ],
    sitemap: "https://www.infio2.com/sitemap.xml",
    host: "https://www.infio2.com",
  };
}
