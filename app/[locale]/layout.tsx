import type {Metadata} from "next";
import {notFound} from "next/navigation";
import "../globals.css";
import {RootHtml} from "@/components/root-html";
import {baseMetadata} from "@/lib/site-config";
import {validLocale, rtl} from "@/lib/i18n";

export const metadata: Metadata = baseMetadata();

export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<{children: React.ReactNode; params: Promise<{locale: string}>}>) {
  const {locale} = await params;
  if (!validLocale(locale)) notFound();
  return <RootHtml lang={locale} dir={rtl(locale) ? "rtl" : "ltr"}>{children}</RootHtml>;
}
