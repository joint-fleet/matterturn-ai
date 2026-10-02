import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";

/**
 * The second axis, placed deliberately between TrustFlow (how the
 * mechanism works) and EvidenceHub/CaseLibrary (the proof). By the time a
 * visitor reaches this section they already know what MatterTurn is and
 * how it works — the next question is "why should I trust you with this,"
 * and this section exists to answer exactly that before the evidence
 * sections let them check it themselves. Deliberately short: the full
 * version lives on the Mission page, linked below.
 */
export function ResponsibilitySection({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  return <section className="responsibility-section shell" dir={direction}>
    <div className="section-heading"><div><p className="overline">{m.respKicker}</p><h2>{m.respTitle}</h2></div></div>
    <div className="responsibility-body">
      <p>{m.respText1}</p>
      <p>{m.respText2}</p>
      <p className="responsibility-line">{m.respText3}</p>
    </div>
    <Link className="text-link" href={pathFor(locale,"/about/mission")}>{m.respLink} <ArrowIcon direction="down-right"/></Link>
  </section>;
}
