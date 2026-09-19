import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://03-sakshi.github.io",
      lastModified: "2026-09-19",
    },
  ];
}