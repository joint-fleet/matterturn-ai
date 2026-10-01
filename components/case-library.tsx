import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,rtl} from "@/lib/i18n";

const GITHUB_CASES = "https://github.com/joint-fleet/matterturn-ai/tree/main/cases/library";

/**
 * Four representative cards pointing at the GitHub Public Case Library,
 * not the full seven-case library inline. Per the site's division of
 * labor: the homepage carries the 10-second version and the proof lives
 * on GitHub.
 */
export function CaseLibrary({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  const cards=[
    {tag:m.pclC1Tag,title:m.pclC1Title,text:m.pclC1Text,href:`${GITHUB_CASES}/1740-broadway-blind-validation.md`},
    {tag:m.pclC2Tag,title:m.pclC2Title,text:m.pclC2Text,href:`${GITHUB_CASES}/case-002-blocked-judgment.md`},
    {tag:m.pclC3Tag,title:m.pclC3Title,text:m.pclC3Text,href:`${GITHUB_CASES}/a03-failure-decomposition.md`},
    {tag:m.pclC4Tag,title:m.pclC4Title,text:m.pclC4Text,href:`${GITHUB_CASES}/a05-controlled-comparison.md`},
  ];
  return <section className="case-library shell" dir={direction}>
    <div className="section-heading"><div><p className="overline">{m.pclKicker}</p><h2>{m.pclTitle}</h2></div></div>
    <p className="case-library-intro">{m.pclIntro}</p>
    <div className="case-library-grid">
      {cards.map(card=>
        <a className="case-library-card" href={card.href} target="_blank" rel="noreferrer" key={card.title}>
          <span className="small-label">{card.tag}</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <span className="case-library-arrow"><ArrowIcon/></span>
        </a>
      )}
    </div>
    <a className="text-link case-library-link" href={`${GITHUB_CASES}/`} target="_blank" rel="noreferrer">{m.pclLink} <ArrowIcon/></a>
  </section>;
}
