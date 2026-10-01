import type {Metadata} from "next";
import "../globals.css";
import {RootHtml} from "@/components/root-html";
import {baseMetadata} from "@/lib/site-config";

export const metadata: Metadata = baseMetadata();

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <RootHtml lang="en" dir="ltr">{children}</RootHtml>;
}
