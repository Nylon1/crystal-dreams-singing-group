import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://crystaldreamssinginggroup.co.uk";

  const routes = ["", "/about", "/singing-group", "/how-it-helps", "/contact"];

  return routes.map((route) => ({
    url: domain + route,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}