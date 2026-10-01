import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";

/**
 * "Start a Case" lands here. This page is deliberately not a form: nothing
 * on this site can yet accept, store or act on a submission (see
 * app/api/submissions/route.ts, which still returns 503 by design). The
 * only real action available is the contact handoff below — a request
 * submitted here still has to be accepted by a person before any system
 * work, analysis, or report exists.
 */
export function WorkspaceView({locale}:{locale:Locale}){
  const m=messages(locale),dir=rtl(locale)?"rtl":"ltr";
  const steps=[m.caseStep1,m.caseStep2,m.caseStep3,m.caseStep4];
  return <><SiteHeader locale={locale}/><main className="shell workspace-page" dir={dir}>
    <div className="workspace-intro"><div><p className="overline">{m.caseKicker}</p><h1>{m.caseTitle}</h1></div><p>{m.caseIntro}</p></div>
    <section className="case-status">
      <h2>{m.caseStatusTitle}</h2>
      <ol>{steps.map((step,i)=><li key={i} className={i===0?"is-live":"is-pending"}><span>0{i+1}</span>{step}</li>)}</ol>
      <p className="case-note">{m.caseNote}</p>
    </section>
    {locale==="en"?<section className="problem-section example-walkthrough">
      <span className="small-label">Illustrative example — not a live demo</span>
      <h2>One question becomes several capabilities</h2>
      <p>A customer asks a simple question: <em>&ldquo;What&rsquo;s a reasonable rent for this warehouse space?&rdquo;</em> Based on the published Real Estate case record (see the <Link href="/systems/real-estate/rent-analysis">rent analysis</Link> page), answering that question for real draws on several capabilities at once, not one lookup:</p>
      <ol className="example-steps">
        <li><strong>Market evidence</strong> — comparable leases and listings for the asset type and submarket</li>
        <li><strong>Asset characteristics</strong> — the specific property’s condition, size, and configuration</li>
        <li><strong>Location context</strong> — submarket demand and competitive supply</li>
        <li><strong>Operating implications</strong> — how the rent figure interacts with operating-expense assumptions</li>
        <li><strong>Missing-evidence flags</strong> — which comparables are thin, stale, or conflicting</li>
        <li><strong>A rent range, not a point figure</strong> — bound to the comparables actually used</li>
        <li><strong>Confidence and boundary</strong> — stated explicitly where evidence doesn’t support more precision</li>
        <li><strong>Related valuation impact</strong> — how the rent conclusion feeds into a broader acquisition or asset-valuation question, if one is open</li>
      </ol>
      <p className="case-note">This is an illustrative walkthrough built from the structure of the system&rsquo;s published cases — not a live, runnable tool. Nothing on this site can currently accept, store, or act on a real submission; see the status above.</p>
    </section>:null}
    <div className="detail-cta"><div><span className="small-label">{m.privateTest}</span><p>{m.testText}</p></div><Link className="button-dark" href={pathFor(locale,"/contact")}>{m.caseCta} <ArrowIcon/></Link></div>
  </main><footer className="footer shell" dir={dir}><span>© MatterTurn Ai</span><span>{m.caseFoot}</span></footer></>;
}
