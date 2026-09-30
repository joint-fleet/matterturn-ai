"use client";
import {ArrowIcon} from "./arrow-icon";
import {usePathname} from "next/navigation";
import {useEffect} from "react";
import {type Locale,locales,localeNames,messages,pathFor,rtl,validLocale} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
export function LocaleAttributes({locale}:{locale:Locale}){
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=rtl(locale)?"rtl":"ltr";},[locale]);
  return null;
}
export function SiteHeader({locale="en"}:{locale?:Locale}){
  const m=messages(locale),n=navigation[locale],path=usePathname();
  const change=(next:Locale)=>{
    const segments=path.split("/").filter(Boolean);
    if(segments[0]&&validLocale(segments[0]))segments.shift();
    const rest=segments.length?"/"+segments.join("/"):"/";
    const query=window.location.search.slice(1);
    window.location.assign(pathFor(next,rest)+(query?"?"+query:""));
  };
  return <><LocaleAttributes locale={locale}/><header className="site-header" dir={rtl(locale)?"rtl":"ltr"}><a href={pathFor(locale,"/")} className="wordmark" aria-label="MatterTurn Ai"><span className="mark">M.</span><span>MatterTurn Ai</span></a><nav className="nav" aria-label="Main navigation"><a href={pathFor(locale,"/")}>{n.home}</a><a className="nav-systems" href={pathFor(locale,"/systems")}>{n.systems} <ArrowIcon/></a><a href={pathFor(locale,"/projects")}>{n.projects}</a><a href={pathFor(locale,"/contact")}>{n.contact}</a><details className="about-menu"><summary>{n.about} <span aria-hidden="true">⌄</span></summary><div className="about-menu-panel"><a href={pathFor(locale,"/about")}>{n.about}</a><a href={pathFor(locale,"/about/team")}>{n.team}</a><a href={pathFor(locale,"/about/founders")}>{n.founders}</a><a href={pathFor(locale,"/about/mission")}>{n.mission}</a></div></details><label className="language-picker"><span className="visually-hidden">{m.language}</span><select aria-label={m.language} value={locale} onChange={event=>change(event.target.value as Locale)}>{locales.map(code=><option value={code} key={code}>{localeNames[code]}</option>)}</select></label></nav></header></>;
}
