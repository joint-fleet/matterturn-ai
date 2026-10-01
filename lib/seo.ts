import type {Metadata} from "next";
import {locales, prefix, type Locale} from "./i18n";
import {brandName, defaultMetaDescription, social} from "./site-config";

/**
 * Builds page metadata (title, description, canonical + hreflang
 * alternates, Open Graph, Twitter card) from a single call site, so every
 * route stays consistent without restating the OG/Twitter boilerplate.
 * `path` is the locale-neutral path (e.g. "/about/team", "" for home).
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title?: string;
  description?: string;
}): Metadata {
  const canonicalPath = `${prefix(locale)}${path}` || "/";
  const languages = Object.fromEntries(locales.map((l) => [l, `${prefix(l)}${path}` || "/"]));
  const desc = description ?? defaultMetaDescription;
  // Compose the full title explicitly rather than relying on the root
  // layout's title.template — Next.js does not reliably apply that
  // template to the "/" route, so pages would get inconsistent titles.
  const fullTitle = title ? `${title} | ${brandName}` : undefined;
  return {
    // `absolute` bypasses the root layout's title.template so this
    // explicitly-composed title isn't appended to a second time.
    title: fullTitle ? {absolute: fullTitle} : undefined,
    description: desc,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      title: fullTitle ?? brandName,
      description: desc,
      url: canonicalPath,
      siteName: brandName,
      locale,
      images: [{url: social.ogImage, width: social.ogImageWidth, height: social.ogImageHeight}],
    },
    twitter: {
      card: social.twitterCard,
      title: fullTitle ?? brandName,
      description: desc,
      images: [social.ogImage],
    },
  };
}
