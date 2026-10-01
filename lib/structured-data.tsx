import type {Locale} from "./i18n";
import {prefix} from "./i18n";
import {siteUrl, brandName} from "./site-config";
import type {Product} from "./products";

/**
 * Page-level JSON-LD builders. Conservative on purpose.
 *
 * Every system in lib/products.ts is pre-commercial right now: workspace
 * submission is disabled site-wide (see components/workspace-form.tsx),
 * so none of them is an available, orderable service today, whatever its
 * individual status label (Internal validation / In development /
 * Synthetic testing / Design stage / ...). schema.org's Service and
 * SoftwareApplication types both carry a "this can be used/ordered"
 * connotation that none of them currently earn, so every system uses
 * CreativeWork instead — a description of documented work, not an offer.
 * additionalProperty/PropertyValue (not standard CreativeWork fields)
 * carries the maturity-specific facts: decision question, development
 * status (lib/products.ts's own status string, unchanged) and current
 * limits. No offers, price, AggregateRating, Review, customer counts,
 * awards or usage metrics — none of that is true for any system yet.
 */

const absoluteUrl = (locale: Locale, path: string) => `${siteUrl}${prefix(locale)}${path}` || siteUrl;

export function systemJsonLd({
  locale,
  product,
  translatedTitle,
  translatedSummary,
}: {
  locale: Locale;
  product: Product;
  translatedTitle: string;
  translatedSummary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: translatedTitle,
    description: translatedSummary,
    url: absoluteUrl(locale, `/systems/${product.slug}`),
    inLanguage: locale,
    keywords: product.domain,
    creator: {
      "@type": "Organization",
      name: brandName,
      url: siteUrl,
    },
    additionalProperty: [
      {"@type": "PropertyValue", name: "Decision question", value: product.question},
      {"@type": "PropertyValue", name: "Development status", value: product.status},
      {"@type": "PropertyValue", name: "Current limits", value: product.outcome},
    ],
  };
}

/**
 * Problem-page JSON-LD. Same CreativeWork-not-Service reasoning as
 * systemJsonLd above applies — no claim this is an orderable service.
 * additionalProperty carries the facts a GEO crawler should be able to
 * quote: who it's for, what's analyzed, what's received, and the limits.
 */
export function problemPageJsonLd(
  page: {systemSlug: string; problemSlug: string; title: string; summary: string; who: string; analyzes: string[]; receives: string[]; limits: string},
  systemTitle: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: page.title,
    description: page.summary,
    url: `${siteUrl}/systems/${page.systemSlug}/${page.problemSlug}`,
    inLanguage: "en",
    isPartOf: {"@type": "CreativeWork", name: systemTitle, url: `${siteUrl}/systems/${page.systemSlug}`},
    creator: {"@type": "Organization", name: brandName, url: siteUrl},
    audience: {"@type": "Audience", audienceType: page.who},
    additionalProperty: [
      {"@type": "PropertyValue", name: "What is analyzed", value: page.analyzes.join("; ")},
      {"@type": "PropertyValue", name: "What you receive", value: page.receives.join("; ")},
      {"@type": "PropertyValue", name: "Important limits", value: page.limits},
    ],
  };
}

export function breadcrumbJsonLd(locale: Locale, items: {name: string; path: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function projectsItemListJsonLd(locale: Locale, products: {title: string; slug: string}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: p.title,
      url: absoluteUrl(locale, `/systems/${p.slug}`),
    })),
  };
}

export function JsonLdScript({data}: {data: object}) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}} />;
}
