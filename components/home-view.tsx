import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {BrandFilm} from "./brand-film";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";
import {SystemsCatalog} from "./systems-catalog";
import {TrustFlow} from "./trust-flow";
export function HomeView({locale}:{locale:Locale}){
  const m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  return <><SiteHeader locale={locale}/><main dir={direction}>
    <section className="brand-cover" aria-labelledby="brand-cover-title">
      <img className="brand-cover-image" src="/clarity-world-poster.jpg" alt="" width="1280" height="720" fetchPriority="high" />
      <div className="brand-cover-shade" aria-hidden="true"/>
      <div className="brand-cover-content shell">
        <span className="brand-cover-signature">MatterTurn Ai</span>
        <div className="brand-cover-bottom">
          <h1 id="brand-cover-title">{m.hero1} {m.hero2}<br/>{m.hero3} {m.hero4}</h1>
          <div className="brand-cover-actions"><a href="#systems">{m.explore} <ArrowIcon direction="down-right"/></a><a href="#film">{m.watch} <ArrowIcon direction="down-right"/></a></div>
        </div>
      </div>
    </section>
    <section className="hero shell" id="top"><div className="hero-top"><span className="overline">{m.heroKicker}</span><span className="issue">{m.edition}</span></div>
      <div className="hero-grid"><div><h2>{m.hero1} <em>{m.hero2}</em><br/>{m.hero3}<br/><em>{m.hero4}</em></h2></div><div className="hero-side"><p>{m.heroText}</p><Link className="text-link" href="#systems">{m.explore} <ArrowIcon direction="down-right"/></Link></div></div>
      <div className="hero-rule"><span>{m.reality}</span><span>{m.evidence}</span><span>{m.judgment}</span><span>{m.action}</span></div></section>
    <BrandFilm locale={locale}/>
    <SystemsCatalog locale={locale}/>
    <TrustFlow locale={locale}/>
    <section id="approach" className="approach-section"><div className="shell approach-inner"><p className="overline">{m.approachKicker}</p><h2>{m.approachTitle1}<br/>{m.approachTitle2}</h2><div className="approach-grid"><p>{m.approach1}</p><p>{m.approach2}</p></div><Link className="light-link" href={pathFor(locale,"/workspace")}>{m.startACase} <ArrowIcon/></Link></div></section>
    </main><footer dir={direction} className="footer shell"><span>© MatterTurn Ai</span><span>{m.privateReview}</span><Link href="#top">{m.backTop} <ArrowIcon direction="up"/></Link></footer></>;
}
