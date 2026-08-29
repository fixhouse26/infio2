import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InfiO2 Travel",
    short_name: "InfiO2",
    description: "Custom vacations, worldwide travel planning and visa application assistance.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#06255e",
    icons: [
      { src: "/infio2-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/infio2-icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
