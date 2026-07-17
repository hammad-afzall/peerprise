import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/blog";
import { services } from "./lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://peerprise.com";
  const staticRoutes = [
    "/",
    ...services.map((service) => service.href),
    "/plans",
    "/how-it-works",
    "/digital-review",
    "/about",
    "/blog",
    "/contact",
    "/work",
  ];

  const pages = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route === "/digital-review" || route === "/blog" ? 0.9 : 0.8,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
