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
    <div className="detail-cta"><div><span className="small-label">{m.privateTest}</span><p>{m.testText}</p></div><Link className="button-dark" href={pathFor(locale,"/contact")}>{m.caseCta} <ArrowIcon/></Link></div>
  </main><footer className="footer shell" dir={dir}><span>© MatterTurn Ai</span><span>{m.caseFoot}</span></footer></>;
}
