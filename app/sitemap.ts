import type {MetadataRoute} from "next";
import {siteUrl} from "@/lib/site-config";
import {locales, prefix} from "@/lib/i18n";
import {products} from "@/lib/products";

/**
 * Enumerates current public-facing routes and their locale variants.
 * Generating this does not make the site indexable — app/robots.ts and the
 * vercel.json X-Robots-Tag header still disallow indexing while the site is
 * in internal / controlled-review mode.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/systems", "/projects", "/about", "/about/team", "/about/founders", "/about/mission", "/contact"];
  const productPaths = products.map((p) => `/systems/${p.slug}`);
  const allPaths = [...staticPaths, ...productPaths];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of allPaths) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}${prefix(locale)}${path || "/"}`,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}${prefix(l)}${path || "/"}`])),
        },
      });
    }
  }
  return entries;
}
