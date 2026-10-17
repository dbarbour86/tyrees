import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Staging / Demo guardrail: disallow indexing until client confirms launch
  const isProduction = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production";

  return {
    rules: {
      userAgent: "*",
      disallow: isProduction ? ["/api/"] : ["/"],
      allow: isProduction ? ["/"] : [],
    },
    sitemap: "https://tyreesautodetailing.com/sitemap.xml",
  };
}
