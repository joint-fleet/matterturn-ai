import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,pathFor} from "@/lib/i18n";
import {translatedProducts} from "@/lib/product-i18n";
const enterSystem:Record<Locale,string>={en:"Explore system","zh-CN":"进入系统","zh-TW":"進入系統",fr:"Explorer le système",ar:"استكشف النظام",ary:"شوف النظام",es:"Explorar sistema",ja:"システムを見る",th:"ดูระบบ"};
const research:Record<Locale,{label:string;intro:string;link:string}>={
  en:{label:"In research",intro:"Morocco life assistance · A bounded research prototype, open to local expert review.",link:"View the research page"},
  "zh-CN":{label:"研发观察",intro:"摩洛哥生活助理 · 范围明确的研究原型，正在征求当地专家核对。",link:"查看研发介绍"},
  "zh-TW":{label:"研發觀察",intro:"摩洛哥生活助理 · 範圍明確的研究原型，正徵求當地專家核對。",link:"查看研發介紹"},
  fr:{label:"En recherche",intro:"Vie au Maroc · Un prototype de recherche délimité, ouvert à l'examen d'experts locaux.",link:"Voir la page de recherche"},
  ar:{label:"قيد البحث",intro:"المساعدة في الحياة بالمغرب · نموذج بحثي محدود يخضع لمراجعة خبراء محليين.",link:"اطّلع على صفحة البحث"},
  ary:{label:"فمرحلة البحث",intro:"المساعدة فالحياة فالمغرب · نموذج بحثي محدود ومفتوح لمراجعة الخبراء المحليين.",link:"شوف صفحة البحث"},
  es:{label:"En investigación",intro:"Vida en Marruecos · Prototipo de investigación acotado, abierto a revisión de expertos locales.",link:"Ver la investigación"},
  ja:{label:"研究段階",intro:"モロッコ生活支援 · 現地専門家による確認を求めている限定的な研究試作です。",link:"研究ページを見る"},
  th:{label:"ระยะวิจัย",intro:"การใช้ชีวิตในโมร็อกโก · ต้นแบบการวิจัยที่มีขอบเขตจำกัดและเปิดรับการตรวจสอบจากผู้เชี่ยวชาญท้องถิ่น",link:"ดูหน้างานวิจัย"}
};
export function SystemsCatalog({locale}:{locale:Locale}){
  const m=messages(locale),products=translatedProducts(locale),researchProduct=products.find(p=>p.slug==="morocco-life")!,regular=products.filter(p=>p.slug!=="morocco-life");
  return <section className="systems-section shell" id="systems"><div className="section-heading"><div><p className="overline">{m.systemsKicker}</p><h2>{m.systemsTitle1}<br/><em>{m.systemsTitle2}</em></h2></div><p>{m.systemsIntro}</p></div>
      <div className="feature-grid">{regular.slice(0,2).map(product=><a className="feature-card" href={pathFor(locale,`/systems/${product.slug}`)} key={product.slug} aria-label={`${enterSystem[locale]}: ${product.title}`}><div className="feature-top"><span>{product.number} / {product.domain}</span><span className="status">{product.status}</span></div><div className="product-visual" aria-hidden="true"><div className="visual-kicker">{product.slug==="real-estate"?m.investmentReview:m.marketUnderstanding}</div><div className="visual-question">{product.question}</div><div className="visual-bars"><span/><span/><span/></div><div className="visual-caption">{m.decisionContext} <ArrowIcon direction="right"/> {m.evidence} <ArrowIcon direction="right"/> {m.expertReview}</div></div><div className="feature-bottom"><div><h3>{product.title}</h3><p>{product.summary}</p></div><span className="feature-enter">{enterSystem[locale]} <ArrowIcon/></span></div></a>)}</div>
      <div className="system-list">{regular.slice(2).map(product=><a href={pathFor(locale,`/systems/${product.slug}`)} className="system-row" key={product.slug}><span className="row-number">{product.number}</span><span className="row-title">{product.title}</span><span className="row-domain">{product.domain}</span><span className="row-status">{product.status}</span><span className="row-arrow"><ArrowIcon/></span></a>)}</div>
      <aside className="research-entry"><div><span className="small-label">{research[locale].label} / {researchProduct.number}</span><h3>{researchProduct.title}</h3><p>{research[locale].intro}</p></div><a href={pathFor(locale,"/systems/morocco-life")}>{research[locale].link} <ArrowIcon/></a></aside>
    </section>;
}
