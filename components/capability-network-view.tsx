import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {navigation} from "@/lib/navigation";
import {capabilityBundles, maturityLabel, type Maturity} from "@/lib/capability-bundles";
import {breadcrumbJsonLd, JsonLdScript} from "@/lib/structured-data";

const maturityOrder: Maturity[] = ["validated", "engineering-validated", "active-engineering", "research", "planned"];

/**
 * "MatterTurn total capability landscape" — every real capability domain
 * across every system, each labeled with its actual maturity. A capability
 * not being case-backed yet is a maturity fact to disclose, not a reason
 * to leave it off the page — the earlier draft of this page narrowed to
 * only the three most mature systems, which was corrected here.
 */
export function CapabilityNetworkView() {
  const n = navigation.en;
  const totalCapabilities = capabilityBundles.reduce((sum, b) => sum + b.capabilities.length, 0);

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
            <p className="overline">MatterTurn Total Capability Landscape</p>
            <h1>Each MatterTurn system you add unlocks another professional capability domain.</h1>
          </div>
        </div>
        <p className="detail-lead">
          Buying more MatterTurn systems is not buying more software next to the same software — it&rsquo;s expanding the range of
          professional capability available to the same real business problem. Every real capability domain across every system
          appears below, each labeled with its actual, current maturity. A capability that isn&rsquo;t case-backed yet is still real
          engineering work — it&rsquo;s labeled accordingly here, not hidden.
        </p>

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
            <strong>Validated / Case-backed</strong> — a published, re-verified public case backs it. <strong>Engineering Validated</strong> — real,
            tested, CI-passing engineering work exists (including synthetic end-to-end validation), no independently reviewed
            real-world case yet. <strong>Active Engineering</strong> — real running code and real-case testing exist, often in open,
            unmerged Draft work, with no completed judgment or formal runtime promotion yet. <strong>Research / Experimental</strong> —
            real design or early experimentation exists, no tested running capability yet. <strong>Planned / Not Yet Available</strong> —
            named in the system&rsquo;s own stated scope, no engineering work started.
          </p>
        </section>

        {capabilityBundles.map((b) => (
          <section className="problem-section capability-network-system" key={b.slug}>
            <span className="small-label">
              <Link href={`/systems/${b.slug}`}>{b.slug.replace(/-/g, " ")}</Link>
            </span>
            <p>{b.oneLiner}</p>
            <div className="case-library-grid">
              {b.capabilities.map((c) => (
                <div className="case-library-card" key={c.name}>
                  <span className={`maturity-badge maturity-${c.maturity}`}>{maturityLabel[c.maturity]}</span>
                  <h3>{c.name}</h3>
                  <p>{c.note}</p>
                </div>
              ))}
            </div>
            <p className="case-note capability-bundle-evidence">{b.evidenceNote}</p>
          </section>
        ))}

        <section className="problem-section problem-limits">
          <span className="small-label">What this page does not claim</span>
          <p>
            A capability labeled Research/Experimental or Active Engineering is not available as a commercial deliverable today.
            Nothing on this page implies production readiness, a completed commercial judgment, or live customer availability for
            anything below Validated / Case-backed. Medical Business is not listed above — it remains at design stage with no
            engineering evidence reviewed for this page; see <Link href="/systems">the systems index</Link> for its status.
          </p>
        </section>

        <div className="detail-cta">
          <div>
            <span className="small-label">Working across systems</span>
            <p>
              {totalCapabilities} capability domains exist across {capabilityBundles.length} systems today, at every stage from
              Research to Validated. Multiple systems can connect around the same real business problem — not as a discount bundle,
              but as a wider set of professional capability available to the same decision.
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
