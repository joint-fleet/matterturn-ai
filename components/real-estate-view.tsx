import Link from "next/link";
import {ArrowIcon} from "./arrow-icon";
import {SiteHeader} from "./site-header";
import {Walkthrough} from "./walkthrough";
import {type Locale,messages,pathFor,rtl} from "@/lib/i18n";
import {translatedProduct} from "@/lib/product-i18n";
import {maturityLabel} from "@/lib/capability-bundles";

type Copy={
  status:string; eyebrow:string; lead:string; useTitle:string; useIntro:string;
  capabilityTitle:string; capabilityIntro:string; modelTitle:string; modelIntro:string;
  refuseTitle:string; refuseIntro:string; evidenceTitle:string; evidenceIntro:string;
  japanTitle:string; japanIntro:string; japanLimit:string; outcomeTitle:string; outcome:string;
  problems:string[]; capabilities:{name:string;maturity:keyof typeof maturityLabel;note:string}[];
  models:string[]; refusals:string[]; cases:{title:string;note:string;href:string}[];
};

const CASES="https://github.com/joint-fleet/matterturn-ai/tree/main/cases/library";

const copy:Record<Locale,Copy>={
  en:{
    status:"Advanced engineering / controlled validation",
    eyebrow:"Real estate investment & asset judgment system",
    lead:"From valuation, rent, debt and refinancing to development, market, legal, operations and investment-committee synthesis — one system for consequential real-estate decisions.",
    useTitle:"What can you bring to this system?",useIntro:"Start with the real decision, not with an AI feature list.",
    capabilityTitle:"One system. Ten professional capabilities.",capabilityIntro:"Capabilities are exposed separately so maturity can be judged honestly, but they work together inside one case.",
    modelTitle:"What the system can calculate",modelIntro:"Customer-facing calculations already exist behind the judgment layer. The system does not expose internal model IDs or implementation details.",
    refuseTitle:"When the system refuses to calculate",refuseIntro:"Responsibility also means refusing a number when the evidence cannot support it.",
    evidenceTitle:"Evidence from real cases",evidenceIntro:"The case library is an accountability record, not a trophy cabinet. Correct calls, blocked judgments and preserved failures all remain visible.",
    japanTitle:"Current research frontier — Japan",japanIntro:"Official Japanese regulatory sources and PLATEAU / CityGML spatial data are being tested as candidate evidence for Japanese real-estate work.",japanLimit:"Not yet claimed: verified legal status of a Japanese asset, completed commercial due diligence in Japan, or automatic admission of spatial data into a formal investment conclusion.",
    outcomeTitle:"What you actually receive",outcome:"A reviewable judgment that separates evidence, assumptions, calculations, unresolved facts, risks and the conditions that would change the decision.",
    problems:["Asset valuation","Rent analysis","Debt capacity & debt-service coverage","Refinancing / capital recycling","Development feasibility","Market demand & positioning","Underwriting","Operating performance review","Investment-committee synthesis"],
    capabilities:[
      {name:"Investment analysis & problem diagnosis",maturity:"validated",note:"Frames the controlling decision before any model runs."},
      {name:"Asset valuation",maturity:"engineering-validated",note:"DCF/direct-cap valuation has real-case exercise, with disclosed defects preserved rather than promoted away."},
      {name:"Underwriting",maturity:"validated",note:"A real case reached MORE DILIGENCE REQUIRED / BLOCKED without forcing a yes/no."},
      {name:"Finance & debt analysis",maturity:"engineering-validated",note:"Real and tested, but current public proof points still carry disclosed input/model limitations."},
      {name:"Development & cost review",maturity:"engineering-validated",note:"Executed in a real integrated run; not yet independently human-reviewed as a standalone capability."},
      {name:"Market analysis",maturity:"validated",note:"Used in real cases and able to block unsupported downstream shortcuts."},
      {name:"Legal & regulatory review",maturity:"validated",note:"Jurisdiction-aware constraint review with current work across the US, UK, China and Japan."},
      {name:"Operations review",maturity:"validated",note:"Preserves missing operating evidence instead of guessing past it."},
      {name:"Model selection",maturity:"engineering-validated",note:"Decides whether a calculation is useful and which model family fits the actual decision."},
      {name:"Senior investment judgment",maturity:"engineering-validated",note:"Synthesizes the full case and inherits the weakest evidence it depends on."}
    ],
    models:["DCF / XNPV valuation","Direct capitalization","Terminal / exit value","Property cash flow","Annual debt-service scenarios","Development sources & uses","Cost-to-complete and interest carry","Yield on cost and development profit","Residual land value / alternative-use comparison","Sensitivity and break-even analysis"],
    refusals:["No supportable cap rate → no fabricated direct-cap value","No valid amortization period → legal maturity is not silently treated as amortization","No supportable forward NOI → no forced terminal value","Material evidence gaps → underwriting may remain BLOCKED","A directionally correct conclusion does not promote a defective calculation"],
    cases:[
      {title:"1740 Broadway — Historical Blind Validation",note:"The direction matched the later real outcome; the valuation defect was also preserved on record.",href:`${CASES}/1740-broadway-blind-validation.md`},
      {title:"Select-Service Hotel Acquisition",note:"MORE DILIGENCE REQUIRED; underwriting BLOCKED; 11 material unresolved facts preserved.",href:`${CASES}/hotel-acquisition-screening.md`},
      {title:"A-03 — Right Answer, Bad Process",note:"A directionally useful result with four process failures kept visible instead of deleted.",href:`${CASES}/a03-failure-decomposition.md`},
      {title:"A-05 — Refusing to Compute",note:"The system moved upstream to the real refinancing question rather than forcing unsupported arithmetic.",href:`${CASES}/a05-controlled-comparison.md`},
      {title:"Murray Hill Development Review",note:"Development and cost capability exercised in an integrated real run; still awaiting independent human review.",href:"https://github.com/joint-fleet/matterturn-ai/tree/main/systems/real-estate"}
    ]
  },
  "zh-CN":{
    status:"深度工程 / 受控验证",eyebrow:"房地产投资与资产判断系统",
    lead:"从资产估值、租金、债务与再融资，到开发可行性、市场、法律、运营和投资委员会级综合判断——用一套系统处理高价值房地产决策。",
    useTitle:"你可以把什么问题交给这个系统？",useIntro:"从真实决策问题开始，而不是从 AI 功能列表开始。",
    capabilityTitle:"一个系统，十项专业能力。",capabilityIntro:"能力会分别展示成熟度，但在真实案例中由同一判断链协同工作。",
    modelTitle:"系统实际能做哪些测算",modelIntro:"这些是判断层背后已经存在的客户可理解计算能力；内部模型 ID、registry 和实现细节不会公开。",
    refuseTitle:"系统什么时候会拒绝计算",refuseIntro:"负责任不只是给答案，也包括在证据不足时拒绝制造一个看似精确的数字。",
    evidenceTitle:"真实案例证据",evidenceIntro:"案例库不是战绩墙，而是责任记录：正确判断、阻断结论和失败过程都保留。",
    japanTitle:"当前研究前沿 — 日本",japanIntro:"系统正在测试日本官方法规来源，以及 PLATEAU / CityGML 空间数据如何成为日本房地产判断的候选证据。",japanLimit:"尚未声称：已经核实任何日本资产的法律状态、完成日本商业房地产正式尽调，或让空间数据自动进入正式投资结论。",
    outcomeTitle:"客户最终得到什么",outcome:"一份可审查的判断：把证据、假设、计算、未解决事实、风险，以及哪些条件会改变结论分开呈现。",
    problems:["资产估值","租金分析","债务能力与偿债覆盖","再融资 / 资本回收","开发可行性","市场需求与竞争定位","承销判断","经营表现审查","投资委员会级综合判断"],
    capabilities:[
      {name:"投资分析与问题诊断",maturity:"validated",note:"先识别真正控制决策的问题，再决定是否需要模型。"},
      {name:"资产估值",maturity:"engineering-validated",note:"DCF / 直接资本化已进入真实案例；已披露的估值缺陷被保留，没有因方向正确而被掩盖。"},
      {name:"承销判断",maturity:"validated",note:"真实案例可以正式输出“需要更多尽调 / 阻断”，而不是强行给出买或不买。"},
      {name:"融资与债务分析",maturity:"engineering-validated",note:"已经真实运行和测试，但公开案例仍带有已披露的输入或模型限制。"},
      {name:"开发与成本审查",maturity:"engineering-validated",note:"已在真实综合运行中执行；作为独立能力尚未完成外部人工复核。"},
      {name:"市场分析",maturity:"validated",note:"已经进入真实案例，并能够阻断市场证据不足却继续估值的捷径。"},
      {name:"法律与监管审查",maturity:"validated",note:"按司法辖区识别约束；当前工作覆盖美国、英国、中国和日本。"},
      {name:"资产运营审查",maturity:"validated",note:"缺失经营资料时明确保留缺口，而不是猜测填补。"},
      {name:"模型选择",maturity:"engineering-validated",note:"判断是否应该计算、以及哪类模型真正对应当前决策问题。"},
      {name:"高级投资综合判断",maturity:"engineering-validated",note:"综合全部能力，并继承其依赖证据中最弱的一环，不把风险平均掉。"}
    ],
    models:["DCF / XNPV 估值","直接资本化估值","终值 / 退出价值","物业现金流","年度债务偿付情景","开发资金来源与用途","完工尚需成本与利息滚存","Yield on Cost 与开发利润","剩余土地价值 / 替代用途比较","敏感性与盈亏平衡分析"],
    refusals:["没有可支持的资本化率 → 不制造直接资本化价值","没有有效摊销期 → 不把法律到期日偷偷当作摊销期","没有可支持的远期 NOI → 不强算终值","重大证据缺口仍存在 → 承销可以保持 BLOCKED","最终方向正确 ≠ 有缺陷的计算因此自动获得验证"],
    cases:[
      {title:"1740 Broadway — 历史盲测",note:"最终方向与后来的真实结果一致；同时把估值模型缺陷原样保留。",href:`${CASES}/1740-broadway-blind-validation.md`},
      {title:"精选服务酒店收购审查",note:"MORE DILIGENCE REQUIRED；承销 BLOCKED；11 个重大未解决事实被保留。",href:`${CASES}/hotel-acquisition-screening.md`},
      {title:"A-03 — 答案方向正确，但过程有问题",note:"保留四个真实过程失败，而不是因为结论看起来正确就删除。",href:`${CASES}/a03-failure-decomposition.md`},
      {title:"A-05 — 拒绝为了计算而计算",note:"系统把问题上移到真正的再融资可实现性，而不是强行完成缺乏依据的数字。",href:`${CASES}/a05-controlled-comparison.md`},
      {title:"Murray Hill 开发审查",note:"开发与成本能力已经在真实综合运行中执行；尚待独立人工复核。",href:"https://github.com/joint-fleet/matterturn-ai/tree/main/systems/real-estate"}
    ]
  },
  "zh-TW":{
    status:"深度工程 / 受控驗證",eyebrow:"房地產投資與資產判斷系統",
    lead:"從資產估值、租金、債務與再融資，到開發可行性、市場、法律、營運與投資委員會級綜合判斷——用一套系統處理高價值房地產決策。",
    useTitle:"你可以把甚麼問題交給這個系統？",useIntro:"從真實決策問題開始，而不是從 AI 功能清單開始。",
    capabilityTitle:"一個系統，十項專業能力。",capabilityIntro:"能力分別標示成熟度，但在真實案例中由同一判斷鏈協同工作。",
    modelTitle:"系統實際能做哪些測算",modelIntro:"這些是判斷層背後已存在的客戶可理解計算能力；內部模型 ID、registry 與實作細節不公開。",
    refuseTitle:"系統甚麼時候會拒絕計算",refuseIntro:"負責任不只是給答案，也包括在證據不足時拒絕製造看似精確的數字。",
    evidenceTitle:"真實案例證據",evidenceIntro:"案例庫不是戰績牆，而是責任記錄：正確判斷、阻斷結論與失敗過程都保留。",
    japanTitle:"目前研究前沿 — 日本",japanIntro:"系統正測試日本官方法規來源，以及 PLATEAU / CityGML 空間資料如何成為日本房地產判斷的候選證據。",japanLimit:"尚未聲稱：已核實任何日本資產法律狀態、完成日本商業房地產正式盡調，或讓空間資料自動進入正式投資結論。",
    outcomeTitle:"客戶最終得到甚麼",outcome:"一份可審查的判斷：把證據、假設、計算、未解決事實、風險，以及哪些條件會改變結論分開呈現。",
    problems:["資產估值","租金分析","債務能力與償債覆蓋","再融資 / 資本回收","開發可行性","市場需求與競爭定位","承銷判斷","營運表現審查","投資委員會級綜合判斷"],
    capabilities:[
      {name:"投資分析與問題診斷",maturity:"validated",note:"先識別真正控制決策的問題，再決定是否需要模型。"},
      {name:"資產估值",maturity:"engineering-validated",note:"DCF / 直接資本化已進入真實案例；已披露估值缺陷被保留。"},
      {name:"承銷判斷",maturity:"validated",note:"真實案例可正式輸出需要更多盡調 / 阻斷，而非強行二選一。"},
      {name:"融資與債務分析",maturity:"engineering-validated",note:"已真實運行與測試，但公開案例仍帶有已披露限制。"},
      {name:"開發與成本審查",maturity:"engineering-validated",note:"已在真實綜合運行中執行；尚未完成獨立人工覆核。"},
      {name:"市場分析",maturity:"validated",note:"已進入真實案例，並能阻斷缺乏市場證據的估值捷徑。"},
      {name:"法律與監管審查",maturity:"validated",note:"按司法管轄區識別限制；目前工作覆蓋美國、英國、中國與日本。"},
      {name:"資產營運審查",maturity:"validated",note:"缺少營運資料時保留缺口，而不是猜測填補。"},
      {name:"模型選擇",maturity:"engineering-validated",note:"判斷是否應計算，以及哪類模型真正對應當前決策。"},
      {name:"高階投資綜合判斷",maturity:"engineering-validated",note:"整合全部能力，並繼承其依賴證據中最弱的一環。"}
    ],
    models:["DCF / XNPV 估值","直接資本化估值","終值 / 退出價值","物業現金流","年度債務償付情境","開發資金來源與用途","完工尚需成本與利息滾存","Yield on Cost 與開發利潤","剩餘土地價值 / 替代用途比較","敏感性與損益平衡分析"],
    refusals:["沒有可支持的資本化率 → 不製造直接資本化價值","沒有有效攤銷期 → 不把法律到期日當作攤銷期","沒有可支持的遠期 NOI → 不強算終值","重大證據缺口仍存在 → 承銷可以保持 BLOCKED","方向正確 ≠ 有缺陷計算自動得到驗證"],
    cases:[
      {title:"1740 Broadway — 歷史盲測",note:"方向與後來真實結果一致；估值缺陷也被原樣保留。",href:`${CASES}/1740-broadway-blind-validation.md`},
      {title:"精選服務酒店收購審查",note:"MORE DILIGENCE REQUIRED；承銷 BLOCKED；11 個重大未解決事實被保留。",href:`${CASES}/hotel-acquisition-screening.md`},
      {title:"A-03 — 答案方向正確，但過程有問題",note:"四個真實過程失敗被保留。",href:`${CASES}/a03-failure-decomposition.md`},
      {title:"A-05 — 拒絕為了計算而計算",note:"把問題上移到真正的再融資可實現性。",href:`${CASES}/a05-controlled-comparison.md`},
      {title:"Murray Hill 開發審查",note:"已在真實綜合運行中執行；尚待獨立人工覆核。",href:"https://github.com/joint-fleet/matterturn-ai/tree/main/systems/real-estate"}
    ]
  },
  fr:null as never, ar:null as never, ary:null as never, es:null as never, ja:null as never, th:null as never
};
for(const locale of ["fr","ar","ary","es","ja","th"] as Locale[]) copy[locale]=copy.en;

export function RealEstateView({locale}:{locale:Locale}){
  const product=translatedProduct(locale,"real-estate");
  if(!product)return null;
  const c=copy[locale],m=messages(locale),direction=rtl(locale)?"rtl":"ltr";
  const englishLinks=locale==="en";
  return <><SiteHeader locale={locale}/><main className="shell detail" dir={direction}>
    <a className="back-link" href={pathFor(locale,"/#systems")}><ArrowIcon direction="left"/> {m.allSystems}</a>
    <div className="detail-intro"><div><p className="overline">{c.eyebrow}</p><h1>{product.title}<span className="detail-dot">.</span></h1></div><span className="status">{c.status}</span></div>
    <p className="detail-lead">{c.lead}</p>

    <section className="problem-section"><span className="small-label">{c.useTitle}</span><p>{c.useIntro}</p>
      <div className="case-library-grid">{c.problems.map((p,i)=>englishLinks?<a className="case-library-card" href={`/systems/real-estate/${["asset-valuation","rent-analysis","debt-analysis","refinance-analysis","development-feasibility","market-analysis","underwriting","operations-review","investment-review"][i]}`} key={p}><h3>{p}</h3><span className="case-library-arrow"><ArrowIcon/></span></a>:<div className="case-library-card" key={p}><h3>{p}</h3></div>)}</div>
    </section>

    <section className="problem-section capability-bundle"><span className="small-label">{c.capabilityTitle}</span><p>{c.capabilityIntro}</p>
      <div className="case-library-grid">{c.capabilities.map(cap=><div className="case-library-card" key={cap.name}><h3>{cap.name}</h3><span className={`maturity-badge maturity-${cap.maturity}`}>{maturityLabel[cap.maturity]}</span><p>{cap.note}</p></div>)}</div>
    </section>

    <section className="detail-work"><div><p className="overline">{c.modelTitle}</p><h2>{c.modelIntro}</h2></div><ol>{c.models.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</li>)}</ol></section>

    <section className="problem-section problem-limits"><span className="small-label">{c.refuseTitle}</span><p>{c.refuseIntro}</p>
      <ul>{c.refusals.map(x=><li key={x}>{x}</li>)}</ul>
    </section>

    <section className="problem-section"><span className="small-label">{c.evidenceTitle}</span><p>{c.evidenceIntro}</p>
      <div className="case-library-grid">{c.cases.map(x=><div className="case-library-card problem-case-card" key={x.title}><a href={x.href} target="_blank" rel="noreferrer"><h3>{x.title}</h3></a><p>{x.note}</p></div>)}</div>
    </section>

    <section className="problem-section"><span className="small-label">{c.japanTitle}</span><p>{c.japanIntro}</p><p className="case-note">{c.japanLimit}</p></section>

    <Walkthrough slug="real-estate" locale={locale}/>
    <section className="outcome"><div><p className="overline">{c.outcomeTitle}</p><h2>{m.reviewTitle}</h2></div><p>{c.outcome}</p></section>
    <div className="detail-cta"><div><span className="small-label">{m.privateTest}</span><p>{m.testText}</p></div><Link className="button-dark" href={pathFor(locale,"/workspace")}>{m.startACase} <ArrowIcon/></Link></div>
  </main><footer className="footer shell" dir={direction}><span>© MatterTurn Ai</span><span>{m.exampleFoot}</span><a href={pathFor(locale,"/#systems")}>{m.allSystems} <ArrowIcon direction="up"/></a></footer></>;
}
