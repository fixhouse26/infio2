import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InfiO2 Travel",
    short_name: "InfiO2",
    description: "Colorful holidays, thoughtfully planned.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff9ef",
    theme_color: "#082c3a",
  };
}
