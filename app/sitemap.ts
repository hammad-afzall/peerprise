import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peerprise.com";
  const routes = [
    "/",
    "/social-presence-management",
    "/website-care",
    "/digital-operations",
    "/plans",
    "/how-it-works",
    "/health-check",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route === "/health-check" ? 0.9 : 0.8,
  }));
}
