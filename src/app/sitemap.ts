import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceAnchors = services.map((service) => ({
    url: `${siteConfig.url}/services#${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceAnchors];
}
