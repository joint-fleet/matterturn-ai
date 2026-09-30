"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";
import {brandCopy} from "@/lib/brand-page-i18n";
import {type Product} from "@/lib/products";

export function BrandStrategyView({locale,product}:{locale:Locale;product:Product}){
 const [selected,setSelected]=useState<number|null>(null);
 const c=brandCopy(locale),m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
 return <><SiteHeader locale={locale}/><main className="shell brand-detail" dir={direction}>
  <a className="back-link" href={pathFor(locale,"/#systems")}><ArrowIcon direction="left"/> {m.allSystems}</a>
  <header className="brand-intro"><div className="brand-topline"><p className="overline">02 / {c.eyebrow}</p><span className="status">{product.status}</span></div><h1>{c.hero}</h1><p className="brand-lead">{c.lead}</p></header>
  <section className="brand-value" aria-labelledby="brand-value-title"><div><p className="overline">01 / {c.valueLabel}</p><h2 id="brand-value-title">{c.valueLabel}</h2></div><ol>{c.value.map((v,i)=><li key={v}><span>0{i+1}</span>{v}</li>)}</ol></section>
  <section className="brand-questions" aria-labelledby="brand-question-title"><div><p className="overline">02 / {c.question}</p><h2 id="brand-question-title">{c.question}</h2></div><div className="brand-question-panel"><div className="brand-options">{c.questions.map((q,i)=><button type="button" key={q} className={selected===i?"is-selected":""} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span>0{i+1}</span>{q}<ArrowIcon/></button>)}</div>{selected!==null?<div className="brand-answer" aria-live="polite"><span className="small-label">{c.answer}</span><p>{c.answers[selected]}</p></div>:null}</div></section>
  <section className="brand-experts" aria-labelledby="brand-experts-title"><p className="overline">03 / MatterTurn Ai</p><h2 id="brand-experts-title">{c.experts}</h2><p className="brand-experts-lead">{c.expertLead}</p><div className="brand-expert-grid"><div><span className="brand-column-number">01</span><h3>{c.system}</h3><p>{c.systemText}</p></div><div><span className="brand-column-number">02</span><h3>{c.human}</h3><p>{c.humanText}</p></div></div></section>
  <section className="brand-deliver" aria-labelledby="brand-deliver-title"><div><p className="overline">04 / {c.deliver}</p><h2 id="brand-deliver-title">{c.deliver}</h2><p>{c.deliverText}</p></div><ol>{c.deliverables.map((d,i)=><li key={d}><span>0{i+1}</span>{d}</li>)}</ol></section>
  <section className="brand-measure" aria-labelledby="brand-measure-title"><div><p className="overline">05 / {c.measure}</p><h2 id="brand-measure-title">{c.measure}</h2><p>{c.measureText}</p></div><div className="brand-metrics">{c.metrics.map(x=><p key={x}>{x}</p>)}</div></section>
  <aside className="brand-stage"><p className="small-label">{c.stage}</p><p>{c.stageText}</p><Link className="button-dark" href={pathFor(locale,"/workspace?system=international-brand")}>{c.cta} <ArrowIcon/></Link></aside>
 </main><footer className="footer shell" dir={direction}><span>© MatterTurn Ai</span><span>{m.exampleFoot}</span><a href={pathFor(locale,"/#systems")}>{m.allSystems} <ArrowIcon direction="up"/></a></footer></>;
}
