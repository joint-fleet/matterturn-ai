import type {MetadataRoute} from "next";
import {siteUrl} from "@/lib/site-config";
import {locales, prefix} from "@/lib/i18n";
import {products} from "@/lib/products";
import {problemPages} from "@/lib/problem-pages";

/**
 * Enumerates current public-facing routes and their locale variants.
 * Generating this does not make the site indexable — app/robots.ts and
 * next.config.ts's X-Robots-Tag header (both keyed off
 * isPublicIndexingEnabled in lib/site-config.ts) still disallow indexing
 * while that flag is off.
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
  // GEO problem pages are English-only this round — no locale alternates.
  for (const p of problemPages) {
    entries.push({url: `${siteUrl}/systems/${p.systemSlug}/${p.problemSlug}`});
  }
  entries.push({url: `${siteUrl}/capability-network`});
  return entries;
}
