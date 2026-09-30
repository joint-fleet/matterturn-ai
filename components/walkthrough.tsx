"use client";
import {useState} from "react";
import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages} from "@/lib/i18n";
import {walkthrough} from "@/lib/walk-i18n";
export function Walkthrough({slug,locale}:{slug:"real-estate"|"international-brand";locale:Locale}){
  const [step,setStep]=useState(0),m=messages(locale),current=walkthrough(locale,slug)[step];
  return <section className="walkthrough" aria-label={m.walkAria}>
    <div className="walk-head"><div><p className="overline">{m.walkKicker}</p><h2>{m.walkTitle}</h2></div><span className="status">{m.walkBadge}</span></div>
    <div className="walk-content"><div className="walk-index">0{step+1}<span> / 03</span></div><div><p className="small-label">{current.heading}</p><h3>{current.question}</h3>{current.choices ? <div className="walk-choices">{current.choices.map(([title,detail])=><button type="button" onClick={()=>setStep(step+1)} key={title}><strong>{title}</strong><span>{detail}</span><ArrowIcon/></button>)}</div>:<div className="walk-result"><p>{current.result}</p><button type="button" onClick={()=>setStep(0)}>{m.again} <ArrowIcon direction="restart"/></button></div>}{step>0&&step<2?<button className="walk-back" onClick={()=>setStep(step-1)}><ArrowIcon direction="left"/> {m.previous}</button>:null}</div></div>
    <p className="walk-disclaimer">{m.walkDisclaimer}</p>
  </section>;
}
