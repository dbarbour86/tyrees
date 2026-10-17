import { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/data/serviceAreas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tyreesautodetailing.com";

  const staticRoutes = [
    "",
    "/services",
    "/gallery",
    "/about",
    "/reviews",
    "/contact",
    "/privacy",
    "/terms",
    "/service-area",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const cityRoutes = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/service-area/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...cityRoutes];
}
