import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {type Locale,pathFor,rtl} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
import {translatedProducts} from "@/lib/product-i18n";

/**
 * Evidence / development-activity layer for the Projects page. Pulls
 * directly from lib/products.ts (via translatedProducts) rather than
 * inventing client case studies — every entry here is a system already
 * described on /systems with the same status label.
 */

const labels: Record<Locale,{problem:string;work:string;evidence:string;outcome:string;view:string}> = {
  en:{problem:"Decision under investigation",work:"What is being built / tested",evidence:"Evidence context",outcome:"Current outcome & limits",view:"View system"},
  "zh-CN":{problem:"正在研究的决策问题",work:"正在构建 / 测试的内容",evidence:"证据背景",outcome:"当前成果与限制",view:"查看系统"},
  "zh-TW":{problem:"正在研究的決策問題",work:"正在構建 / 測試的內容",evidence:"證據背景",outcome:"目前成果與限制",view:"查看系統"},
  fr:{problem:"Décision à l'étude",work:"Ce qui est construit / testé",evidence:"Contexte des preuves",outcome:"Résultat actuel et limites",view:"Voir le système"},
  ar:{problem:"القرار قيد الدراسة",work:"ما يجري بناؤه / اختباره",evidence:"سياق الأدلة",outcome:"النتيجة الحالية وحدودها",view:"عرض النظام"},
  ary:{problem:"القرار اللي كيتدرس",work:"شنو كيتبنى / كيتجرب",evidence:"سياق الدلائل",outcome:"النتيجة الحالية والحدود",view:"شوف النظام"},
  es:{problem:"Decisión en estudio",work:"Qué se está construyendo / probando",evidence:"Contexto de las pruebas",outcome:"Resultado actual y límites",view:"Ver sistema"},
  ja:{problem:"検討中の判断事項",work:"構築・検証している内容",evidence:"根拠の背景",outcome:"現在の成果と限界",view:"システムを見る"},
  th:{problem:"การตัดสินใจที่อยู่ระหว่างศึกษา",work:"สิ่งที่กำลังสร้าง / ทดสอบ",evidence:"บริบทหลักฐาน",outcome:"ผลลัพธ์ปัจจุบันและข้อจำกัด",view:"ดูระบบ"}
};

export function ProjectsView({locale}:{locale:Locale}){
  const n=navigation[locale],l=labels[locale],products=translatedProducts(locale),direction=rtl(locale)?"rtl":"ltr";
  const byStatus=new Map<string,typeof products>();
  for(const p of products){const list=byStatus.get(p.status)??[];list.push(p);byStatus.set(p.status,list);}
  return <><SiteHeader locale={locale}/><main className="section-page shell" dir={direction}>
    <a href={pathFor(locale,"/")} className="back-link">{n.home} <ArrowIcon direction="up-left"/></a>
    <div className="section-page-title"><span className="overline">MatterTurn Ai</span><h1>{n.projects}</h1></div>
    {[...byStatus.entries()].map(([status,items])=>
      <section key={status} className="projects-group">
        <h2 className="projects-group-title">{status}</h2>
        <div className="projects-group-list">
          {items.map(product=>
            <article className="project-card" key={product.slug}>
              <div className="project-card-head"><span className="small-label">{product.number} / {product.domain}</span><h3>{product.title}</h3></div>
              <dl className="project-card-body">
                <div><dt>{l.problem}</dt><dd>{product.question}</dd></div>
                <div><dt>{l.work}</dt><dd>{product.work.join(" · ")}</dd></div>
                <div><dt>{l.evidence}</dt><dd>{product.signals.join(" · ")}</dd></div>
                <div><dt>{l.outcome}</dt><dd>{product.outcome}</dd></div>
              </dl>
              <a href={pathFor(locale,`/systems/${product.slug}`)} className="text-link">{l.view} <ArrowIcon/></a>
            </article>
          )}
        </div>
      </section>
    )}
  </main></>;
}
