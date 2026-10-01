import type {Locale} from "./i18n";
import {prefix} from "./i18n";
import {siteUrl, brandName} from "./site-config";
import type {Product} from "./products";

/**
 * Page-level JSON-LD builders. Conservative on purpose: Service (not
 * SoftwareApplication) so wording never implies a finished commercial
 * product, and only fields with a real schema.org home or that fit in
 * additionalProperty/PropertyValue. No offers, price, AggregateRating,
 * Review, customer counts, awards or usage metrics — those would be
 * fabricated for every system currently described in lib/products.ts.
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
    "@type": "Service",
    name: translatedTitle,
    description: translatedSummary,
    url: absoluteUrl(locale, `/systems/${product.slug}`),
    inLanguage: locale,
    category: product.domain,
    provider: {
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
