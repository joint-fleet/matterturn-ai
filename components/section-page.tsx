import {ArrowIcon} from "./arrow-icon";
import {FounderStory} from "./founder-story";
import {MissionStory} from "./mission-story";
import {SiteHeader} from "./site-header";
import {type Locale,pathFor,rtl} from "@/lib/i18n";
import {navigation,type SiteSection} from "@/lib/navigation";

export function SectionPage({locale,section}:{locale:Locale,section:SiteSection}){
  const labels=navigation[locale];
  const contactLabels:Record<Locale,{phone:string,email:string}>={en:{phone:"Phone",email:"Email"},"zh-CN":{phone:"电话",email:"邮箱"},"zh-TW":{phone:"電話",email:"電郵"},fr:{phone:"Téléphone",email:"E-mail"},ar:{phone:"الهاتف",email:"البريد الإلكتروني"},ary:{phone:"التليفون",email:"الإيميل"},es:{phone:"Teléfono",email:"Correo electrónico"},ja:{phone:"電話",email:"メール"},th:{phone:"โทรศัพท์",email:"อีเมล"}};
  return <><SiteHeader locale={locale}/><main className="section-page shell" dir={rtl(locale)?"rtl":"ltr"}>
    <a href={pathFor(locale,"/")} className="back-link">{labels.home} <ArrowIcon direction="up-left"/></a>
    <div className="section-page-title"><span className="overline">MatterTurn Ai</span><h1>{labels[section]}</h1></div>
    {section==="contact"&&<section className="contact-details" aria-label={labels.contact}><h2>Michael Xie</h2><dl><div><dt>{contactLabels[locale].phone}</dt><dd><a href="tel:+66829918402" dir="ltr">+66 82 991 8402</a></dd></div><div><dt>WhatsApp</dt><dd><a href="https://wa.me/66829918402" target="_blank" rel="noopener noreferrer" dir="ltr">+66 82 991 8402 <ArrowIcon/></a></dd></div><div><dt>LINE</dt><dd dir="ltr">+66 82 991 8402</dd></div><div><dt>{contactLabels[locale].email}</dt><dd><a href="mailto:xiening668@gmail.com" dir="ltr">xiening668@gmail.com</a></dd></div></dl></section>}
    {section==="founders"&&<FounderStory locale={locale}/>}
    {section==="mission"&&<MissionStory locale={locale}/>}
    {section==="about"&&<nav className="section-page-links" aria-label={labels.about}>{(["team","founders","mission"] as const).map(item=><a href={pathFor(locale,`/about/${item}`)} key={item}>{labels[item]} <ArrowIcon/></a>)}</nav>}
  </main></>;
}
