import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {navigation} from "@/lib/navigation";
import {products} from "@/lib/products";
import {capabilityBundles, maturityLabel, type Maturity} from "@/lib/capability-bundles";
import {breadcrumbJsonLd, JsonLdScript} from "@/lib/structured-data";

const maturityOrder: Maturity[] = ["validated", "engineering-validated", "active-engineering", "research", "planned"];

/**
 * "MatterTurn total capability landscape." What You Get (capability names)
 * is the primary, first-seen layer for every system, split into "demonstrated
 * in real cases" (Case-Backed) and "still in progress" (everything else) —
 * "exercised in a real case" is deliberately not called "available," since
 * that would overclaim commercial readiness. Full maturity detail is a
 * second layer, behind each system's <details> toggle. Every
 * real capability domain across every system still appears; none is
 * hidden for being early-stage.
 */
export function CapabilityNetworkView() {
  const n = navigation.en;
  const totalCapabilities = capabilityBundles.reduce((sum, b) => sum + b.capabilities.length, 0);
  const titleFor = (slug: string) => products.find((p) => p.slug === slug)?.title ?? slug;

  return (
    <>
      <JsonLdScript
        data={breadcrumbJsonLd("en", [
          {name: n.home, path: "/"},
          {name: "Capability Network", path: "/capability-network"},
        ])}
      />
      <SiteHeader locale="en" />
      <main className="shell detail capability-network-page">
        <Link className="back-link" href="/">
          <ArrowIcon direction="left" /> {n.home}
        </Link>
        <div className="detail-intro">
          <div>
            <p className="overline">MatterTurn Capability Network</p>
            <h1>Each MatterTurn system expands the professional capability connected to your real business problem.</h1>
          </div>
        </div>
        <p className="detail-lead">
          Being demonstrated in a real case is not the same claim as being ready for commercial delivery — case-backed means a real
          case exercised it, not that it&rsquo;s a finished, production-ready deliverable (see each capability&rsquo;s own maturity detail for
          what it does and doesn&rsquo;t establish). Most systems below have a mix of what&rsquo;s already demonstrated in a real case and
          what&rsquo;s still in engineering, research, or planned. Each system is split exactly that way: <strong>demonstrated in
          real cases</strong> first, then everything still in progress.
        </p>

        {capabilityBundles.map((b) => {
          const today = b.capabilities.filter((c) => c.maturity === "validated");
          const inProgress = b.capabilities.filter((c) => c.maturity !== "validated");
          return (
            <section className="problem-section capability-network-system" key={b.slug}>
              <span className="small-label">
                <Link href={`/systems/${b.slug}`}>{titleFor(b.slug)}</Link>
              </span>
              <p className="capability-bundle-line">{b.oneLiner}</p>

              <p className="small-label capability-group-label">Demonstrated in real cases</p>
              {today.length ? (
                <div className="capability-chips">
                  {today.map((c) => (
                    <span className="capability-chip" key={c.name}>
                      {c.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="case-note">No capability here has cleared to case-backed yet — everything is still in progress, below.</p>
              )}

              <p className="small-label capability-group-label">Still in progress — Engineering, Research &amp; Planned</p>
              {inProgress.length ? (
                <div className="capability-chips capability-chips-muted">
                  {inProgress.map((c) => (
                    <span className="capability-chip capability-chip-muted" key={c.name}>
                      {c.name}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="case-note">Every capability below has already cleared to case-backed.</p>
              )}

              <details className="capability-detail-toggle">
                <summary>Maturity detail, capability by capability</summary>
                <div className="case-library-grid">
                  {b.capabilities.map((c) => (
                    <div className="case-library-card" key={c.name}>
                      <h3>{c.name}</h3>
                      <span className={`maturity-badge maturity-${c.maturity}`}>{maturityLabel[c.maturity]}</span>
                      <p>{c.note}</p>
                    </div>
                  ))}
                </div>
                <p className="case-note capability-bundle-evidence">{b.evidenceNote}</p>
              </details>
            </section>
          );
        })}

        <section className="problem-section">
          <span className="small-label">How to read the maturity labels</span>
          <div className="maturity-legend">
            {maturityOrder.map((m) => (
              <span className={`maturity-badge maturity-${m}`} key={m}>
                {maturityLabel[m]}
              </span>
            ))}
          </div>
          <p>
            <strong>Case-Backed — Exercised in Real Case</strong> means exactly that: a real case exercised this capability without
            exposing a disclosed defect in its own output. It is deliberately not labeled &ldquo;Validated&rdquo; — a case direction
            coming out right does not by itself prove the reasoning or model behind it was sound (see Real Estate&rsquo;s own Asset
            Valuation capability below for an example where the direction was right and the capability is still labeled one tier
            down, because of a disclosed defect). <strong>Engineering Validated</strong> — real, tested, CI-passing engineering work
            exists, but no clean independent proof point for this specific capability yet. <strong>Active Engineering</strong> — real
            running code and real-case testing exist, often in open, unmerged Draft work, with no completed judgment or runtime
            promotion yet. <strong>Research / Experimental</strong> — real design or documented candidate work exists, produced by real
            case analysis, but no tested running code yet. <strong>Planned / Not Yet Available</strong> — named in the system&rsquo;s own
            stated scope; no real design or engineering work found yet.
          </p>
        </section>

        <section className="problem-section problem-limits">
          <span className="small-label">What this page does not claim</span>
          <p>
            A capability labeled Research/Experimental or Active Engineering is not available as a commercial deliverable today.
            Nothing on this page implies production readiness, a completed commercial judgment, or live customer availability for
            anything below Case-Backed. Medical Business is not listed above — it remains at design stage with no engineering
            evidence reviewed for this page; see <Link href="/systems">the systems index</Link> for its status.
          </p>
        </section>

        <div className="detail-cta">
          <div>
            <span className="small-label">Working across systems</span>
            <p>
              {totalCapabilities} capability domains exist across {capabilityBundles.length} systems today, at every stage from
              Planned to Case-Backed — not all of them available yet. As more of each system&rsquo;s capabilities clear to Case-Backed,
              connecting multiple systems around the same real business problem becomes a wider set of professional capability,
              not a discount bundle of software.
            </p>
          </div>
          <Link className="button-dark" href="/workspace">
            Start a case <ArrowIcon />
          </Link>
        </div>
      </main>
      <footer className="footer shell">
        <span>© MatterTurn Ai</span>
        <Link href="/systems">
          {n.systems} <ArrowIcon direction="up" />
        </Link>
      </footer>
    </>
  );
}
