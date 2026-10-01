import type { NextConfig } from "next";
import { isPublicIndexingEnabled } from "./lib/site-config";

/**
 * vercel.json previously set X-Robots-Tag: noindex site-wide, unconditionally
 * — a second, stronger gate than app/robots.ts that would keep the whole
 * site out of search/AI-crawler indexes even once robots.ts allows it. Both
 * gates now read the same isPublicIndexingEnabled flag, so there is exactly
 * one switch for public indexing instead of two that can silently disagree.
 */
const nextConfig: NextConfig = {
  async headers() {
    if (isPublicIndexingEnabled) return [];
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
