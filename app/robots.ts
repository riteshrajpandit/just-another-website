/**
 * @file robots.ts
 * @description Generates robots.txt for crawlers
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
    ],
    sitemap: "https://nexacore.io/sitemap.xml",
    host: "https://nexacore.io",
  };
}
