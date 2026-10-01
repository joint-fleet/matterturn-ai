import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {type Locale,pathFor,rtl} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
import {translatedProducts} from "@/lib/product-i18n";
import {researchActivities} from "@/lib/research-activities";
import {breadcrumbJsonLd, projectsItemListJsonLd, JsonLdScript} from "@/lib/structured-data";

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

const activityLabels: Record<Locale,{heading:string;intro:string;investigated:string;source:string;completed:string;unresolved:string;relatedSystem:string}> = {
  en:{heading:"Validation & research activity",intro:"Specific validation and research work, each tied to one system above and classified by what it actually was — not every system has an entry here yet.",investigated:"What was investigated",source:"Source / data / environment",completed:"What was completed",unresolved:"What remains unresolved",relatedSystem:"Related system"},
  "zh-CN":{heading:"验证与研究活动",intro:"具体的验证与研究工作，分别关联上方某一系统，并如实标注其性质——并非每个系统目前都有对应条目。",investigated:"研究内容",source:"来源 / 数据 / 环境",completed:"已完成的工作",unresolved:"尚未解决的问题",relatedSystem:"关联系统"},
  "zh-TW":{heading:"驗證與研究活動",intro:"具體的驗證與研究工作，分別關聯上方某一系統，並如實標註其性質——並非每個系統目前都有對應條目。",investigated:"研究內容",source:"來源 / 數據 / 環境",completed:"已完成的工作",unresolved:"尚未解決的問題",relatedSystem:"關聯系統"},
  fr:{heading:"Validation et recherche",intro:"Des travaux de validation et de recherche concrets, chacun lié à un système ci-dessus et classé honnêtement selon sa nature réelle — tous les systèmes n'ont pas encore d'entrée ici.",investigated:"Ce qui a été étudié",source:"Source / données / environnement",completed:"Ce qui a été accompli",unresolved:"Ce qui reste non résolu",relatedSystem:"Système concerné"},
  ar:{heading:"أنشطة التحقق والبحث",intro:"أعمال تحقق وبحث محددة، كل واحدة مرتبطة بأحد الأنظمة أعلاه ومصنّفة بصدق حسب طبيعتها الفعلية — لا يوجد لكل نظام إدخال بعد.",investigated:"ما جرت دراسته",source:"المصدر / البيانات / البيئة",completed:"ما تم إنجازه",unresolved:"ما يبقى دون حل",relatedSystem:"النظام المرتبط"},
  ary:{heading:"أنشطة التحقق والبحث",intro:"خدمة تحقق وبحث محددة، كل وحدة مرتبطة بنظام من فوق ومصنّفة بصح حسب طبيعتها — ماشي كل نظام عندو إدخال دابا.",investigated:"شنو تدرس",source:"المصدر / المعطيات / البيئة",completed:"شنو تكمل",unresolved:"شنو باقي ما تحلش",relatedSystem:"النظام المرتبط"},
  es:{heading:"Validación e investigación",intro:"Trabajo concreto de validación e investigación, cada uno vinculado a un sistema anterior y clasificado honestamente según lo que realmente fue — no todos los sistemas tienen aún una entrada aquí.",investigated:"Qué se investigó",source:"Fuente / datos / entorno",completed:"Qué se completó",unresolved:"Qué queda sin resolver",relatedSystem:"Sistema relacionado"},
  ja:{heading:"検証・研究活動",intro:"上記のいずれかのシステムに紐づく具体的な検証・研究活動で、その実態に即して分類しています。まだ項目がないシステムもあります。",investigated:"検証・調査した内容",source:"情報源・データ・環境",completed:"完了した内容",unresolved:"未解決の点",relatedSystem:"関連システム"},
  th:{heading:"กิจกรรมตรวจสอบและวิจัย",intro:"งานตรวจสอบและวิจัยที่เจาะจง แต่ละรายการเชื่อมโยงกับระบบด้านบนหนึ่งระบบ และจัดประเภทตามความเป็นจริง ยังไม่ครบทุกระบบ",investigated:"สิ่งที่ศึกษา",source:"แหล่งที่มา / ข้อมูล / สภาพแวดล้อม",completed:"สิ่งที่ทำเสร็จแล้ว",unresolved:"สิ่งที่ยังไม่คลี่คลาย",relatedSystem:"ระบบที่เกี่ยวข้อง"}
};

export function ProjectsView({locale}:{locale:Locale}){
  const n=navigation[locale],l=labels[locale],al=activityLabels[locale],products=translatedProducts(locale),direction=rtl(locale)?"rtl":"ltr";
  const byStatus=new Map<string,typeof products>();
  for(const p of products){const list=byStatus.get(p.status)??[];list.push(p);byStatus.set(p.status,list);}
  const productTitle=(slug:string)=>products.find(p=>p.slug===slug)?.title??slug;
  return <>
    <JsonLdScript data={breadcrumbJsonLd(locale,[{name:n.home,path:"/"},{name:n.projects,path:"/projects"}])}/>
    <JsonLdScript data={projectsItemListJsonLd(locale,products)}/>
    <SiteHeader locale={locale}/><main className="section-page shell" dir={direction}>
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
    {researchActivities.length>0&&
      <section className="projects-group projects-activity">
        <h2 className="projects-group-title">{al.heading}</h2>
        <p className="projects-activity-intro">{al.intro}</p>
        <div className="projects-group-list">
          {researchActivities.map(activity=>
            <article className="project-card" key={activity.id}>
              <div className="project-card-head"><span className="small-label">{activity.classification} · {al.relatedSystem}: {productTitle(activity.relatedSlug)}</span><h3>{activity.title}</h3></div>
              <dl className="project-card-body">
                <div><dt>{al.investigated}</dt><dd>{activity.investigated}</dd></div>
                <div><dt>{al.source}</dt><dd>{activity.source}</dd></div>
                <div><dt>{al.completed}</dt><dd>{activity.completed}</dd></div>
                <div><dt>{al.unresolved}</dt><dd>{activity.unresolved}</dd></div>
                <div><dt className="small-label">{activity.stage}</dt></div>
              </dl>
              <a href={pathFor(locale,`/systems/${activity.relatedSlug}`)} className="text-link">{l.view} <ArrowIcon/></a>
            </article>
          )}
        </div>
      </section>
    }
  </main></>;
}
