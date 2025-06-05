import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://smartpole.ru"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/", "/*.json"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
