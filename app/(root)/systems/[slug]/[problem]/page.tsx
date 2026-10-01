import {notFound} from "next/navigation";
import {ProblemPageView} from "@/components/problem-page-view";
import {problemPages, problemPage} from "@/lib/problem-pages";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";

export function generateStaticParams() {
  return problemPages.map(({systemSlug, problemSlug}) => ({slug: systemSlug, problem: problemSlug}));
}

export async function generateMetadata({params}: {params: Promise<{slug: string; problem: string}>}): Promise<Metadata> {
  const {slug, problem} = await params;
  const page = problemPage(slug, problem);
  if (!page) return {};
  return pageMetadata({locale: "en", path: `/systems/${slug}/${problem}`, title: page.title, description: page.summary});
}

export default async function ProblemRoute({params}: {params: Promise<{slug: string; problem: string}>}) {
  const {slug, problem} = await params;
  const page = problemPage(slug, problem);
  if (!page) notFound();
  return <ProblemPageView page={page} />;
}
