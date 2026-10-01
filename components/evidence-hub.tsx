import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,rtl} from "@/lib/i18n";

const GITHUB = "https://github.com/joint-fleet/matterturn-ai/blob/main/company";

/**
 * What MatterTurn has already built, stated before the maturity/boundary
 * caveats that follow later on the page: the operating model (one founder
 * + agents, no in-house team), expert workflows, the central capability
 * library, and the case/failure-preservation discipline. Full depth for
 * each lives on GitHub (company/*.md); this is the 10-second homepage
 * version with a link out.
 */
function Flow({nodes,label}:{nodes:string[];label:string}){
  return <div className="flow-strip" role="img" aria-label={label}>
    {nodes.map((node,i)=><span key={node} style={{display:"contents"}}><span className="flow-node">{node}</span>{i<nodes.length-1&&<span className="flow-sep" aria-hidden="true"><ArrowIcon direction="right"/></span>}</span>)}
  </div>;
}

export function EvidenceHub({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  const opNodes=[m.opNode1,m.opNode2,m.opNode3,m.opNode4,m.opNode5,m.opNode6,m.opNode7,m.opNode8];
  const clNodes=[m.clNode1,m.clNode2,m.clNode3,m.clNode4];
  const cfNodes=[m.cfNode1,m.cfNode2,m.cfNode3,m.cfNode4];
  return <section className="evidence-hub shell" dir={direction}>
    <div className="section-heading"><div><p className="overline">{m.opKicker}</p><h2>{m.opTitle}</h2></div></div>
    <p className="evidence-hub-text">{m.opText}</p>
    <Flow nodes={opNodes} label={opNodes.join(" → ")}/>
    <a className="text-link evidence-hub-link" href={`${GITHUB}/operating-model.md`} target="_blank" rel="noreferrer">{m.opLink} <ArrowIcon/></a>

    <div className="evidence-hub-grid">
      <div className="evidence-hub-card">
        <p className="overline">{m.ewKicker}</p>
        <h3>{m.ewTitle}</h3>
        <p>{m.ewText}</p>
        <a className="text-link" href={`${GITHUB}/expert-workflows.md`} target="_blank" rel="noreferrer">{m.ewLink} <ArrowIcon/></a>
      </div>
      <div className="evidence-hub-card">
        <p className="overline">{m.clKicker}</p>
        <h3>{m.clTitle}</h3>
        <p>{m.clText}</p>
        <Flow nodes={clNodes} label={clNodes.join(" → ")}/>
        <a className="text-link" href={`${GITHUB}/capability-evolution.md`} target="_blank" rel="noreferrer">{m.clLink} <ArrowIcon/></a>
      </div>
      <div className="evidence-hub-card">
        <p className="overline">{m.cfKicker}</p>
        <h3>{m.cfTitle}</h3>
        <p>{m.cfText}</p>
        <Flow nodes={cfNodes} label={cfNodes.join(" → ")}/>
        <a className="text-link" href={`${GITHUB}/case-and-failure-history.md`} target="_blank" rel="noreferrer">{m.cfLink} <ArrowIcon/></a>
      </div>
    </div>
  </section>;
}
