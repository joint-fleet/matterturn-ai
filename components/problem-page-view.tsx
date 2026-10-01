import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {products} from "@/lib/products";
import {type ProblemPage} from "@/lib/problem-pages";
import {breadcrumbJsonLd, problemPageJsonLd, JsonLdScript} from "@/lib/structured-data";
import {navigation} from "@/lib/navigation";

/**
 * Renders one GEO problem page — English-only, unprefixed tree. Dense
 * enough on its own that an AI crawler reading only this page can answer
 * "what does MatterTurn do about this problem."
 */
export function ProblemPageView({page}: {page: ProblemPage}) {
  const system = products.find((p) => p.slug === page.systemSlug);
  const n = navigation.en;
  return (
    <>
      <JsonLdScript data={problemPageJsonLd(page, system?.title ?? page.systemSlug)} />
      <JsonLdScript
        data={breadcrumbJsonLd("en", [
          {name: n.home, path: "/"},
          {name: n.systems, path: "/systems"},
          {name: system?.title ?? page.systemSlug, path: `/systems/${page.systemSlug}`},
          {name: page.title, path: `/systems/${page.systemSlug}/${page.problemSlug}`},
        ])}
      />
      <SiteHeader locale="en" />
      <main className="shell detail problem-page">
        <Link className="back-link" href={`/systems/${page.systemSlug}`}>
          <ArrowIcon direction="left" /> {system?.title ?? "Back to system"}
        </Link>
        <div className="detail-intro">
          <div>
            <p className="overline">{system?.title}</p>
            <h1>{page.title}</h1>
          </div>
        </div>
        <p className="detail-lead">{page.summary}</p>

        <section className="problem-section">
          <span className="small-label">Who this is for</span>
          <p>{page.who}</p>
        </section>

        <div className="detail-main">
          <div className="detail-signals">
            <span className="small-label">What can be used as input</span>
            {page.inputs.map((s, i) => (
              <div className="signal" key={s}>
                <span>0{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
          <div className="detail-signals">
            <span className="small-label">What MatterTurn analyzes</span>
            {page.analyzes.map((s, i) => (
              <div className="signal" key={s}>
                <span>0{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        </div>

        <section className="problem-section">
          <span className="small-label">What you receive</span>
          <ul>
            {page.receives.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="problem-section">
          <span className="small-label">Related capabilities, included</span>
          <p>{page.relatedCapabilities.join(" · ")}</p>
        </section>

        <section className="problem-section problem-limits">
          <span className="small-label">Important limits</span>
          <p>{page.limits}</p>
        </section>

        <section className="problem-section">
          <span className="small-label">Supporting cases</span>
          {page.cases.map((c) => (
            <div className="case-library-card problem-case-card" key={c.title}>
              <a href={c.href} target="_blank" rel="noreferrer">
                <h3>{c.title}</h3>
              </a>
              <p>{c.note}</p>
            </div>
          ))}
        </section>

        <div className="detail-cta">
          <div>
            <span className="small-label">Part of</span>
            <p>
              <Link href={`/systems/${page.systemSlug}`}>{system?.title}</Link> — {system?.summary}
            </p>
          </div>
          <Link className="button-dark" href="/workspace">
            Start a case <ArrowIcon />
          </Link>
        </div>
      </main>
      <footer className="footer shell">
        <span>© MatterTurn Ai</span>
        <Link href="/systems">{n.systems} <ArrowIcon direction="up" /></Link>
      </footer>
    </>
  );
}
