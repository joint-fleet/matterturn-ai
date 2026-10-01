import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,rtl} from "@/lib/i18n";

const GITHUB = "https://github.com/joint-fleet/matterturn-ai/blob/main/company";

/**
 * What MatterTurn has already built, stated before the maturity/boundary
 * caveats that follow later on the page: expert workflows exist, a
 * private central capability library exists, cases and failures are
 * preserved, and one founder + agents build and extend these systems.
 * Deliberately no internal ordering, asset classification, or workflow
 * sequencing shown here — that stays off the public hub entirely.
 */
export function EvidenceHub({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  return <section className="evidence-hub shell" dir={direction}>
    <div className="section-heading"><div><p className="overline">{m.opKicker}</p><h2>{m.opTitle}</h2></div></div>
    <p className="evidence-hub-text">{m.opText}</p>
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
        <a className="text-link" href={`${GITHUB}/capability-evolution.md`} target="_blank" rel="noreferrer">{m.clLink} <ArrowIcon/></a>
      </div>
      <div className="evidence-hub-card">
        <p className="overline">{m.cfKicker}</p>
        <h3>{m.cfTitle}</h3>
        <p>{m.cfText}</p>
        <a className="text-link" href={`${GITHUB}/case-and-failure-history.md`} target="_blank" rel="noreferrer">{m.cfLink} <ArrowIcon/></a>
      </div>
    </div>
  </section>;
}
