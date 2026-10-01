import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,rtl} from "@/lib/i18n";

/**
 * Judgment continuity flow + selective reopening + business value + a
 * pointer to the GitHub Public Hub's engineering evidence. Per the
 * website/GitHub division of labor, this section states what MatterTurn
 * does and why it matters commercially; it deliberately does not restate
 * the detailed engineering proof, which lives on GitHub.
 */
export function TrustFlow({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  const nodes=[m.reality,m.evidence,m.judgment,m.action,m.result,m.newReality];
  return <section className="trust-section shell" dir={direction}>
    <div className="section-heading"><div><p className="overline">{m.reopenKicker}</p><h2>{m.reopenTitle}</h2></div></div>
    <div className="flow-strip" role="img" aria-label={`${nodes.join(" → ")} → ${m.rejudgment}`}>
      {nodes.map((node,i)=><span key={node} style={{display:"contents"}}><span className="flow-node">{node}</span>{i<nodes.length-1&&<span className="flow-sep" aria-hidden="true"><ArrowIcon direction="right"/></span>}</span>)}
      <span className="flow-sep" aria-hidden="true"><ArrowIcon direction="right"/></span>
      <span className="flow-node is-loop">{m.rejudgment}</span>
    </div>
    <div className="reopen-block"><h3>{m.reopenKicker}</h3><p>{m.reopenText}</p></div>
    <div className="value-block"><h3>{m.valueTitle}</h3><p>{m.valueText}</p></div>
    <div className="proof-block">
      <div><h3>{m.proofTitle}</h3><p>{m.proofText}</p></div>
      <a className="text-link" href="https://github.com/joint-fleet/matterturn-ai" target="_blank" rel="noreferrer">{m.proofLink} <ArrowIcon/></a>
    </div>
  </section>;
}
