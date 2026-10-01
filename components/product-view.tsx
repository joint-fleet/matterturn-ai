import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {notFound} from "next/navigation";
import {SiteHeader} from "./site-header";
import {Walkthrough} from "./walkthrough";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";
import {translatedProduct} from "@/lib/product-i18n";
import {BrandStrategyView} from "./brand-strategy-view";
import {MoroccoLifeView} from "./morocco-life-view";
import {navigation} from "@/lib/navigation";
import {systemJsonLd, breadcrumbJsonLd, JsonLdScript} from "@/lib/structured-data";
export function ProductView({locale,slug}:{locale:Locale;slug:string}){
  const product=translatedProduct(locale,slug),m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  if(!product)notFound();
  const jsonLd=<>
    <JsonLdScript data={systemJsonLd({locale,product,translatedTitle:product.title,translatedSummary:product.summary})}/>
    <JsonLdScript data={breadcrumbJsonLd(locale,[{name:navigation[locale].home,path:"/"},{name:navigation[locale].systems,path:"/systems"},{name:product.title,path:`/systems/${slug}`}])}/>
  </>;
  if(slug==="international-brand")return <>{jsonLd}<BrandStrategyView locale={locale} product={product}/></>;
  if(slug==="morocco-life")return <>{jsonLd}<MoroccoLifeView locale={locale} product={product}/></>;
  return <>{jsonLd}<SiteHeader locale={locale}/><main className="shell detail" dir={direction}><a className="back-link" href={pathFor(locale,"/#systems")}><ArrowIcon direction="left"/> {m.allSystems}</a><div className="detail-intro"><div><p className="overline">{product.number} / {product.domain}</p><h1>{product.title}<span className="detail-dot">.</span></h1></div><span className="status">{product.status}</span></div><p className="detail-lead">{product.summary}</p>
    <div className="detail-main"><div className="detail-question"><span className="small-label">{m.decision}</span><blockquote>“{product.question}”</blockquote><p>{m.decisionText}</p></div><div className="detail-signals"><span className="small-label">{m.inputs}</span>{product.signals.map((s,i)=><div className="signal" key={s}><span>0{i+1}</span>{s}</div>)}</div></div>
    <section className="detail-work"><div><p className="overline">{m.inside}</p><h2>{m.signalTitle1}<br/>{m.signalTitle2}</h2></div><ol>{product.work.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol></section>
    {slug==="real-estate"||slug==="international-brand"?<Walkthrough slug={slug} locale={locale}/>:null}
    <section className="outcome"><div><p className="overline">{m.possibleOutcome}</p><h2>{m.reviewTitle}</h2></div><p>{product.outcome}</p></section><div className="detail-cta"><div><span className="small-label">{m.privateTest}</span><p>{m.testText}</p></div><Link className="button-dark" href={pathFor(locale,`/workspace?system=${slug}`)}>{m.openWorkspaceShort} <ArrowIcon/></Link></div></main><footer className="footer shell" dir={direction}><span>© MatterTurn Ai</span><span>{m.exampleFoot}</span><a href={pathFor(locale,"/#systems")}>{m.allSystems} <ArrowIcon direction="up"/></a></footer></>;
}
