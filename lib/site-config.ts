import {locales, type Locale} from "./i18n";

/**
 * Single source of brand and site metadata. Pages and layouts should read
 * from here instead of restating brand language inline, so SEO/GEO surfaces
 * (titles, descriptions, JSON-LD, Open Graph) stay consistent with the
 * product copy in lib/i18n.ts and lib/brand-page-i18n.ts.
 */

export const brandName = "MatterTurn Ai";

export const brandDefinition =
  "MatterTurn Ai builds professional judgment systems that connect real-world evidence, expert workflows and changing conditions.";

export const brandDescriptionLong =
  "MatterTurn Ai helps people identify what matters, distinguish verified evidence from claims, make uncertainty and conflicts visible, and know when a conclusion depends on expert review. Systems span real estate investment, international brand and market strategy, and other professional domains, each at its own stage of development.";

export const defaultMetaDescription =
  "Professional AI systems grounded in evidence, expert judgment and the real world.";

/**
 * Production base URL. Falls back to Vercel's own deployment env vars so
 * this never hardcodes a domain that may not be active yet. Set
 * NEXT_PUBLIC_SITE_URL to override once a permanent domain is assigned.
 */
export const siteUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
})();

/**
 * Public indexing — the single on/off switch for whether search engines and
 * AI crawlers (Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot,
 * Google-Extended, PerplexityBot, etc.) can index this site at all. Both
 * app/robots.ts and next.config.ts's X-Robots-Tag header read this flag, so
 * there is exactly one place to flip it.
 *
 * THIS IS AN OWNER DECISION, NOT A ROUTINE CODE CHANGE: flipping this to
 * true is what makes the live production site discoverable by name-blind
 * problem search for the first time, once this PR is merged and deployed.
 * It has been set to true here because the GEO upgrade this PR implements
 * is otherwise inert — but merging this PR with this flag on is the actual
 * go-live decision and should be made deliberately, not inherited by
 * default. Set back to false before merge if indexing should stay off a
 * while longer.
 */
export const isPublicIndexingEnabled = true;

export const social = {
  ogImage: "/clarity-world-poster.jpg",
  ogImageWidth: 1280,
  ogImageHeight: 720,
  twitterCard: "summary_large_image" as const,
};

/** Only facts the repository actually supports — no fabricated org data. */
export const organization = {
  name: brandName,
  url: siteUrl,
  logo: "/favicon.svg",
  contactPhone: "+66 82 991 8402",
  contactEmail: "xiening668@gmail.com",
};

export const hreflangLocales = locales;

export type { Locale };

const defaultTitle = `${brandName} — See the world. Judge with clarity.`;

/**
 * Base Metadata shared by every root layout (the unprefixed English tree
 * and app/[locale]/layout.tsx). Each root layout exports this as-is; pages
 * further down the tree override it via lib/seo.ts's pageMetadata().
 */
export function baseMetadata() {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${brandName}`,
    },
    description: defaultMetaDescription,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "website" as const,
      siteName: brandName,
      title: defaultTitle,
      description: defaultMetaDescription,
      images: [{url: social.ogImage, width: social.ogImageWidth, height: social.ogImageHeight}],
    },
    twitter: {
      card: social.twitterCard,
      title: defaultTitle,
      description: defaultMetaDescription,
      images: [social.ogImage],
    },
  };
}
