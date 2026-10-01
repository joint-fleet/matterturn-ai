import type { Metadata } from "next";
import "./globals.css";
import { brandName, brandDefinition, defaultMetaDescription, siteUrl, organization, social } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} — See the world. Judge with clarity.`,
    template: `%s | ${brandName}`,
  },
  description: defaultMetaDescription,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: brandName,
    title: `${brandName} — See the world. Judge with clarity.`,
    description: defaultMetaDescription,
    images: [{ url: social.ogImage, width: social.ogImageWidth, height: social.ogImageHeight }],
  },
  twitter: {
    card: social.twitterCard,
    title: `${brandName} — See the world. Judge with clarity.`,
    description: defaultMetaDescription,
    images: [social.ogImage],
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
