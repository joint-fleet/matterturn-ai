import type {MetadataRoute} from "next";
import {siteUrl, isPublicIndexingEnabled} from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!isPublicIndexingEnabled) {
    return {
      rules: {userAgent: "*", disallow: "/"},
      sitemap: `${siteUrl}/sitemap.xml`,
    };
  }
  return {
    rules: {userAgent: "*", allow: "/"},
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
