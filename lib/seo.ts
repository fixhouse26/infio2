export const SITE_URL = "https://www.infio2.com";
export const SITE_NAME = "InfiO2 Travel";
export const BRAND_SUFFIX = " | InfiO2";

/** Keep snippets concise without cutting in the middle of a word. */
export function clampDescription(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 110 ? lastSpace : cut.length).replace(/[,:;\-–—]+$/, "")}…`;
}

/**
 * Page titles are intentionally kept compact. Search engines can still rewrite title
 * links, but a clear, descriptive title is the best input we can provide.
 */
export function compactTitle(title: string, maxBeforeBrand = 50): string {
  if (title.length <= maxBeforeBrand) return title;
  const cut = title.slice(0, maxBeforeBrand);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 34 ? lastSpace : cut.length).replace(/[,:;\-–—]+$/, "")}`;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
