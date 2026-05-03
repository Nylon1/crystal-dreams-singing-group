import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain = "https://crystaldreamssinginggroup.co.uk";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: domain + "/sitemap.xml",
  };
}