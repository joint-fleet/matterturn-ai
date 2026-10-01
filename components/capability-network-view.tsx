import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {navigation} from "@/lib/navigation";
import {capabilityBundles} from "@/lib/capability-bundles";
import {breadcrumbJsonLd, JsonLdScript} from "@/lib/structured-data";

/**
 * "Your MatterTurn Capability Network" — multi-system capability expansion,
 * framed as capability compounding, not a pricing-discount pitch. English
 * only this round, same reasoning as the problem pages.
 */
export function CapabilityNetworkView() {
  const n = navigation.en;
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
            <p className="overline">Capability Network</p>
            <h1>Each MatterTurn system you add unlocks another professional capability domain.</h1>
          </div>
        </div>
        <p className="detail-lead">
          A single MatterTurn system is never a single output — it’s a bundle of professional capabilities working together (see any
          system’s own page for its specific bundle). Adding a second system doesn’t just add a second tool next to the first: it
          expands the range of professional capability available for the same real business problem, and the systems can work together
          around it.
        </p>

        <section className="problem-section">
          <span className="small-label">What this means in practice</span>
          <p>
            MatterTurn systems are built on a shared, governed capability foundation — they check for an existing, validated
            capability before building a new one, rather than starting from zero each time. In public terms: capabilities are reused
            and adapted across systems where it’s genuinely the same underlying work, and lessons from one system’s failures can
            inform another’s engineering. The exact reuse mechanics, internal identifiers, and routing logic stay private — what’s
            public is the result: a growing, connected capability base, not nine disconnected point tools.
          </p>
        </section>

        <section className="problem-section">
          <span className="small-label">Today’s active capability network</span>
          <p>
            Of MatterTurn’s systems, three currently have real, case-backed capability bundles — see each system’s own page for the
            specific capabilities and supporting cases:
          </p>
          <div className="case-library-grid">
            {capabilityBundles.map((b) => (
              <Link className="case-library-card" href={`/systems/${b.slug}`} key={b.slug}>
                <h3>{b.capabilities.length} capabilities</h3>
                <p>{b.oneLiner}</p>
                <span className="case-library-arrow">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="problem-section problem-limits">
          <span className="small-label">Honest state of the rest of the fleet</span>
          <p>
            MatterTurn’s other systems — international market &amp; brand strategy, sales opportunity judgment, cross-border trade,
            travel decisions, everyday-life assistance, and medical business decisions — are each at an earlier stage: in design, in
            research, or in early engineering. They will extend this network as they reach the same case-backed bar the three systems
            above have already cleared. None of them is being presented here as a live, available capability today — see{" "}
            <Link href="/systems">the systems index</Link> for each one’s actual maturity label.
          </p>
        </section>

        <div className="detail-cta">
          <div>
            <span className="small-label">Working across systems</span>
            <p>Multiple systems can connect around the same real business problem — not as a discount bundle, but as a wider set of professional capability available to the same decision.</p>
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
