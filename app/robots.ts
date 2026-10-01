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
    rules: [
      {userAgent: "*", allow: "/"},
      // Named explicitly for auditability, even though the wildcard rule
      // above already covers them — these are the major AI/search crawlers
      // GEO visibility depends on.
      {userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Google-Extended", "Bingbot", "PerplexityBot"], allow: "/"},
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
