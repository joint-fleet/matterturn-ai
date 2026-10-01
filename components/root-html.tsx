import {organization, brandDefinition, brandName} from "@/lib/site-config";

/**
 * Shared <html>/<body> shell used by every root layout (the unprefixed
 * English tree and app/[locale]/layout.tsx). Next.js requires each parallel
 * root layout to declare its own <html lang dir>, so this component exists
 * to avoid duplicating the JSON-LD and body markup between them.
 */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: organization.name,
  url: organization.url,
  logo: `${organization.url}${organization.logo}`,
  description: brandDefinition,
  email: organization.contactEmail,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brandName,
  url: organization.url,
};

export function RootHtml({lang, dir, children}: {lang: string; dir: "ltr" | "rtl"; children: React.ReactNode}) {
  return (
    <html lang={lang} dir={dir}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}} />
      </body>
    </html>
  );
}
