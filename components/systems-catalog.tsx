import {ArrowIcon} from "./arrow-icon";
import {type Locale,messages,pathFor} from "@/lib/i18n";
import {translatedProducts} from "@/lib/product-i18n";
import {tierOrder,tierLabel,groupByTier} from "@/lib/system-tiers";
const enterSystem:Record<Locale,string>={en:"Explore system","zh-CN":"进入系统","zh-TW":"進入系統",fr:"Explorer le système",ar:"استكشف النظام",ary:"شوف النظام",es:"Explorar sistema",ja:"システムを見る",th:"ดูระบบ"};

export function SystemsCatalog({locale}:{locale:Locale}){
  const m=messages(locale),products=translatedProducts(locale),tiers=groupByTier(products);
  const firstTier=products.find(p=>p.slug==="real-estate");
  return <section className="systems-section shell" id="systems"><div className="section-heading"><div><p className="overline">{m.systemsKicker}</p><h2>{m.systemsTitle1}<br/><em>{m.systemsTitle2}</em></h2></div><p>{m.systemsIntro}</p></div>
      <div className="tier-map-heading"><span className="overline">{m.tierMapKicker}</span><p>{m.tierMapIntro}</p></div>
      {tierOrder.map(tier=>{
        const items=tiers.get(tier)!;
        if(items.length===0)return null;
        return <div className={`tier-section tier-${tier}`} key={tier}>
          <h3 className="tier-section-title">{tierLabel(locale,tier,m as unknown as Record<string,string>)}</h3>
          {tier==="advanced"
            ? <div className="feature-grid">{items.map(product=><a className="feature-card" href={pathFor(locale,`/systems/${product.slug}`)} key={product.slug} aria-label={`${enterSystem[locale]}: ${product.title}`}><div className="feature-top"><span>{product.number} / {product.domain}</span><span className="status">{product.status}</span></div><div className="product-visual" aria-hidden="true"><div className="visual-kicker">{product.slug===firstTier?.slug?m.investmentReview:m.marketUnderstanding}</div><div className="visual-question">{product.question}</div><div className="visual-bars"><span/><span/><span/></div><div className="visual-caption">{m.decisionContext} <ArrowIcon direction="right"/> {m.evidence} <ArrowIcon direction="right"/> {m.expertReview}</div></div><div className="feature-bottom"><div><h3>{product.title}</h3><p>{product.summary}</p></div><span className="feature-enter">{enterSystem[locale]} <ArrowIcon/></span></div></a>)}</div>
            : <div className="system-list">{items.map(product=><a href={pathFor(locale,`/systems/${product.slug}`)} className="system-row" key={product.slug}><span className="row-number">{product.number}</span><span className="row-title">{product.title}</span><span className="row-domain">{product.domain}</span><span className="row-status">{product.status}</span><span className="row-arrow"><ArrowIcon/></span></a>)}</div>
          }
        </div>;
      })}
    </section>;
}
