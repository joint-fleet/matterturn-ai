import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {notFound} from "next/navigation";
import {SiteHeader} from "./site-header";
import {Walkthrough} from "./walkthrough";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";
import {translatedProduct} from "@/lib/product-i18n";
import {BrandStrategyView} from "./brand-strategy-view";
import {MoroccoLifeView} from "./morocco-life-view";
import {RealEstateView} from "./real-estate-view";
import {navigation} from "@/lib/navigation";
import {systemJsonLd, breadcrumbJsonLd, JsonLdScript} from "@/lib/structured-data";
import {capabilityBundleFor, maturityLabel} from "@/lib/capability-bundles";
import {problemPagesFor} from "@/lib/problem-pages";
export function ProductView({locale,slug}:{locale:Locale;slug:string}){
  const product=translatedProduct(locale,slug),m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  if(!product)notFound();
  const jsonLd=<>
    <JsonLdScript data={systemJsonLd({locale,product,translatedTitle:product.title,translatedSummary:product.summary})}/>
    <JsonLdScript data={breadcrumbJsonLd(locale,[{name:navigation[locale].home,path:"/"},{name:navigation[locale].systems,path:"/systems"},{name:product.title,path:`/systems/${slug}`}])}/>
  </>;
  if(slug==="international-brand")return <>{jsonLd}<BrandStrategyView locale={locale} product={product}/></>;
  if(slug==="morocco-life")return <>{jsonLd}<MoroccoLifeView locale={locale} product={product}/></>;
  if(slug==="real-estate"&&["en","zh-CN","zh-TW"].includes(locale))return <>{jsonLd}<RealEstateView locale={locale}/></>;
  const bundle=locale==="en"?capabilityBundleFor(slug):undefined;
  const pages=locale==="en"?problemPagesFor(slug):[];
  return <>{jsonLd}<SiteHeader locale={locale}/><main className="shell detail" dir={direction}><a className="back-link" href={pathFor(locale,"/#systems")}><ArrowIcon direction="left"/> {m.allSystems}</a><div className="detail-intro"><div><p className="overline">{product.number} / {product.domain}</p><h1>{product.title}<span className="detail-dot">.</span></h1></div><span className="status">{product.status}</span></div><p className="detail-lead">{product.summary}</p>
    {pages.length>0?<section className="problem-section problem-nav"><span className="small-label">What can I use this for?</span><div className="case-library-grid">{pages.map(p=><a className="case-library-card" href={`/systems/${slug}/${p.problemSlug}`} key={p.problemSlug}><h3>{p.title}</h3><span className={`maturity-badge maturity-${p.maturity}`}>{maturityLabel[p.maturity]}</span><p>{p.summary}</p><span className="case-library-arrow"><ArrowIcon/></span></a>)}</div></section>:null}
    <div className="detail-main"><div className="detail-question"><span className="small-label">{m.decision}</span><blockquote>“{product.question}”</blockquote><p>{m.decisionText}</p></div><div className="detail-signals"><span className="small-label">{m.inputs}</span>{product.signals.map((s,i)=><div className="signal" key={s}><span>0{i+1}</span>{s}</div>)}</div></div>
    <section className="detail-work"><div><p className="overline">{m.inside}</p><h2>{m.signalTitle1}<br/>{m.signalTitle2}</h2></div><ol>{product.work.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol></section>
    {bundle?<section className="problem-section capability-bundle"><span className="small-label">What You Actually Get</span><p>{bundle.intro}</p><div className="capability-chips">{bundle.capabilities.map(c=><span className="capability-chip" key={c.name}>{c.name}</span>)}</div><p className="capability-bundle-line">{bundle.oneLiner}</p><details className="capability-detail-toggle"><summary>Maturity detail, capability by capability</summary><div className="case-library-grid">{bundle.capabilities.map(c=><div className="case-library-card" key={c.name}><h3>{c.name}</h3><span className={`maturity-badge maturity-${c.maturity}`}>{maturityLabel[c.maturity]}</span><p>{c.note}</p></div>)}</div><p className="case-note capability-bundle-evidence">{bundle.evidenceNote}</p></details></section>:null}
    {slug==="real-estate"||slug==="international-brand"?<Walkthrough slug={slug} locale={locale}/>:null}
    <section className="outcome"><div><p className="overline">{m.possibleOutcome}</p><h2>{m.reviewTitle}</h2></div><p>{product.outcome}</p></section><div className="detail-cta"><div><span className="small-label">{m.privateTest}</span><p>{m.testText}</p></div><Link className="button-dark" href={pathFor(locale,"/workspace")}>{m.startACase} <ArrowIcon/></Link></div></main><footer className="footer shell" dir={direction}><span>© MatterTurn Ai</span><span>{m.exampleFoot}</span><a href={pathFor(locale,"/#systems")}>{m.allSystems} <ArrowIcon direction="up"/></a></footer></>;
}
