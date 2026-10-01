import {type Locale} from "@/lib/i18n";

type Story = {role:string;lead:string;sections:{title:string;body:string}[];closing:string};

const stories:Record<Locale,Story>={
  en:{
    role:"Co-founder · Real estate operator and professional AI systems designer",
    lead:"Michael Xie has spent about 20 years making and managing decisions in China's real estate industry. His work began inside major property groups and later moved to running development and asset turnaround businesses, where the consequences of a decision belonged to the people making it.",
    sections:[
      {title:"The experience behind the work",body:"An investment decision is never just a spreadsheet. The condition of an asset, market demand, policy changes, contractual obligations, funding, partners and the ability to execute can all change the outcome. As an operator, Michael had to examine not only what an expert report concluded, but whether its evidence and assumptions would survive contact with the project itself."},
      {title:"From judgment to systems",body:"That experience led him to a question: could the way experienced professionals investigate, challenge and revise a decision become a system that a team can use repeatedly? He taught himself code and AI tools, then began designing and building working systems around real professional workflows. In real estate, that means preserving evidence sources, exposing conflicts and uncertainty, connecting assumptions to conclusions, and revisiting a judgment when conditions change."},
      {title:"His work today",body:"At MatterTurn Ai, Michael leads systems design, product direction, commercial judgment and delivery. He applies this approach across professional fields while keeping each field's expertise and constraints distinct. The goal is to help teams reach the heart of a problem sooner, see what a conclusion depends on, and know when human specialists must challenge it."},
      {title:"What entering a new field does, and doesn't, mean",body:"MatterTurn works across real estate, banking, travel, securities and other fields. That does not mean one founder claims to be an expert in all of them — nobody is. It means MatterTurn builds systems by combining domain expertise, reusable judgment infrastructure, agents, engineering and real-world validation: Michael's role is to identify high-value judgment problems, decompose expert reasoning, organize experts and engineers around it, and falsify assumptions through real cases before calling anything proven."}
    ],
    closing:"A useful system should make clear what supports a judgment, what limits it, and what would cause it to change."
  },
  "zh-CN":{
    role:"联合创始人 · 房地产经营者与专业 AI 系统设计者",
    lead:"Michael Xie 在中国房地产行业工作约 20 年。早期，他在大型房地产集团参与项目开发与管理；后来，作为企业经营者直接面对项目投资、开发、资产盘活和风险处置。判断的后果不只写在报告里，也由经营者亲自承担。",
    sections:[
      {title:"从真实项目中形成的判断",body:"投资判断从来不只是一份财务模型。土地与资产的真实情况、市场需求、政策变化、合同责任、资金安排、合作方利益和执行能力，都可能改变项目的结果。作为经营者，Michael 不仅阅读专家报告，还要追问报告的依据是否可靠、关键假设能否成立、团队遗漏了什么。当新证据出现，原有判断也必须重新审视。"},
      {title:"从专业判断到可运行的系统",body:"这些经历让他开始思考：能否把专家调查、质疑和修正判断的过程，变成团队能够反复使用的系统？Michael 自学代码与 AI 工具，从真实的房地产问题出发，亲自设计并构建专业系统：保留证据来源，呈现信息冲突与不确定性，明确假设和结论的关系，并在现实情况变化时重新判断。"},
      {title:"今天的工作",body:"在 MatterTurn Ai，Michael 负责系统设计、产品方向、商业判断与交付。他将这套从业务问题出发的方法应用于不同专业领域，同时尊重每个领域自身的知识和边界。目标是帮助团队更快进入问题核心，看清结论所依赖的条件，并知道何时必须由人类专家提出质疑与复核。"},
      {title:"进入一个新领域，意味着什么、不意味着什么",body:"MatterTurn 同时涉足房地产、银行、旅行、证券等多个领域，这并不意味着一位创始人自称精通所有领域——没有人能做到。真正发生的是：MatterTurn 把领域专家知识、可复用的判断基础设施、智能体、工程能力与真实案例验证结合起来构建系统。Michael 的角色是识别高价值的判断问题、拆解专家推理、组织专家与工程师围绕问题协作，并通过真实案例证伪假设，而不是先下结论。"}
    ],
    closing:"一个有用的系统，应当说清判断依据是什么、依据有哪些限制，以及什么变化会使结论失效。"
  },
  "zh-TW":{
    role:"聯合創辦人 · 房地產經營者與專業 AI 系統設計者",
    lead:"Michael Xie 在中國房地產業工作約 20 年。早期，他在大型房地產集團參與項目開發與管理；後來，作為企業經營者直接面對投資、開發、資產盤活及風險處置。判斷的後果不只寫在報告裡，也由經營者親自承擔。",
    sections:[
      {title:"從真實項目形成的判斷",body:"投資判斷從來不只是一份財務模型。資產的真實狀況、市場需求、政策變化、合約責任、資金安排、合作方利益與執行能力，都可能改變結果。Michael 不只閱讀專家報告，還要追問證據是否可靠、假設能否成立、團隊遺漏了什麼。新證據出現時，原有判斷也必須重新審視。"},
      {title:"從專業判斷到可運行的系統",body:"這些經歷讓他開始思考：能否將專家調查、質疑及修正判斷的過程，變成團隊可以反覆使用的系統？Michael 自學程式與 AI 工具，從真實的房地產問題出發，親自設計並建立專業系統：保留證據來源，呈現衝突與不確定性，釐清假設與結論的關係，並在現實情況變化時重新判斷。"},
      {title:"今天的工作",body:"在 MatterTurn Ai，Michael 負責系統設計、產品方向、商業判斷與交付。他把這種從業務問題出發的方法應用於不同專業領域，同時尊重各領域的知識與邊界，幫助團隊更快切入問題核心，並知道何時需要人類專家質疑與覆核。"},
      {title:"進入一個新領域，意味著什麼、不意味著什麼",body:"MatterTurn 同時涉足房地產、銀行、旅行、證券等多個領域，這並不代表一位創辦人自稱精通所有領域——沒有人能做到。真正發生的是：MatterTurn 把領域專業知識、可複用的判斷基礎設施、智能體、工程能力與真實案例驗證結合起來建立系統。Michael 的角色是辨識高價值的判斷問題、拆解專家推理、組織專家與工程師圍繞問題協作，並透過真實案例證偽假設，而不是先下結論。"}
    ],
    closing:"有用的系統，應說清判斷依據、依據的限制，以及什麼變化會使結論失效。"
  },
  fr:{
    role:"Cofondateur · Professionnel de l'immobilier et concepteur de systèmes d'IA spécialisés",
    lead:"Michael Xie a passé près de vingt ans dans l'immobilier en Chine. Après avoir participé au développement et à la gestion de projets au sein de grands groupes, il a dirigé des activités de promotion et de redressement d'actifs. Il connaît ainsi les conséquences concrètes des décisions qu'un dirigeant doit assumer.",
    sections:[
      {title:"Une expérience ancrée dans les projets",body:"Une décision d'investissement ne se résume jamais à un modèle financier. L'état réel d'un actif, la demande, la réglementation, les contrats, le financement, les partenaires et la capacité d'exécution peuvent modifier le résultat. Michael devait examiner les conclusions des experts, mais aussi la solidité des preuves, les hypothèses et les points que l'équipe avait pu manquer. De nouvelles informations imposent parfois de revoir la décision."},
      {title:"Du jugement professionnel au système",body:"Cette expérience l'a amené à se demander si la manière dont les experts enquêtent, contestent et révisent un jugement pouvait devenir un système réutilisable par une équipe. Il a appris la programmation et les outils d'IA, puis a commencé à concevoir et construire des systèmes autour de problèmes professionnels réels : conserver l'origine des preuves, rendre visibles les contradictions et l'incertitude, relier les hypothèses aux conclusions et réévaluer celles-ci lorsque la situation change."},
      {title:"Son travail aujourd'hui",body:"Chez MatterTurn Ai, Michael dirige la conception des systèmes, l'orientation des produits, le jugement commercial et la livraison. Il applique cette méthode à plusieurs domaines sans confondre leurs expertises. Son objectif est d'aider les équipes à comprendre plus vite l'enjeu, les conditions d'une conclusion et le moment où un spécialiste humain doit la remettre en question."},
      {title:"Ce que signifie — et ne signifie pas — entrer dans un nouveau domaine",body:"MatterTurn intervient dans l'immobilier, la banque, le voyage, les valeurs mobilières et d'autres domaines. Cela ne veut pas dire qu'un seul fondateur se prétend expert dans tous — personne ne l'est. Cela signifie que MatterTurn construit des systèmes en combinant expertise métier, infrastructure de jugement réutilisable, agents, ingénierie et validation sur des cas réels : le rôle de Michael est d'identifier les problèmes de jugement à forte valeur, de décomposer le raisonnement des experts, d'organiser experts et ingénieurs autour de ces problèmes, et de mettre les hypothèses à l'épreuve de cas réels avant de parler de résultat prouvé."}
    ],
    closing:"Un système utile doit montrer sur quoi repose un jugement, quelles en sont les limites et ce qui pourrait le changer."
  },
  ar:{
    role:"شريك مؤسس · خبير تشغيل عقاري ومصمم أنظمة ذكاء اصطناعي متخصصة",
    lead:"أمضى مايكل شي نحو عشرين عاماً في قطاع العقارات في الصين. بدأ عمله في تطوير المشاريع وإدارتها لدى مجموعات عقارية كبرى، ثم أدار أعمال التطوير وإعادة تنشيط الأصول. وقد تحمل بصفته مشغّلاً نتائج القرارات التي يتخذها.",
    sections:[
      {title:"خبرة نشأت من المشاريع الفعلية",body:"قرار الاستثمار ليس مجرد نموذج مالي. فحالة الأصل والطلب في السوق وتغير السياسات والالتزامات التعاقدية والتمويل والشركاء والقدرة على التنفيذ كلها قد تغيّر النتيجة. لذلك كان مايكل يفحص ليس فقط ما خلص إليه تقرير الخبراء، بل أيضاً قوة أدلته وافتراضاته وما قد يغيب عن الفريق. وعند ظهور أدلة جديدة يجب مراجعة الحكم السابق."},
      {title:"من الحكم المهني إلى النظام",body:"قادته هذه الخبرة إلى سؤال: هل يمكن تحويل طريقة الخبراء في البحث والطعن في الاستنتاجات ومراجعتها إلى نظام تستخدمه الفرق مراراً؟ تعلّم البرمجة وأدوات الذكاء الاصطناعي، وبدأ يصمم ويبني أنظمة انطلاقاً من مسائل مهنية حقيقية، تحفظ مصادر الأدلة وتُظهر التعارض وعدم اليقين وتربط الافتراضات بالنتائج وتعيد التقييم عندما يتغير الواقع."},
      {title:"عمله اليوم",body:"يقود مايكل في MatterTurn Ai تصميم الأنظمة واتجاه المنتجات والتقدير التجاري والتسليم. ويطبق هذه المنهجية في مجالات مهنية مختلفة مع احترام خبرة كل مجال وحدوده. هدفه مساعدة الفرق على الوصول إلى جوهر المسألة وفهم شروط الاستنتاج ومعرفة متى يلزم أن يراجعه خبير بشري."},
      {title:"ماذا يعني — وماذا لا يعني — دخول مجال جديد",body:"تعمل MatterTurn في العقارات والبنوك والسفر والأوراق المالية ومجالات أخرى. هذا لا يعني أن مؤسساً واحداً يدّعي الخبرة في كل هذه المجالات — فلا أحد كذلك. بل يعني أن MatterTurn تبني أنظمتها بالجمع بين خبرة المجال، وبنية تحتية للحكم قابلة لإعادة الاستخدام، والعملاء الآليين، والهندسة، والتحقق بحالات واقعية. دور مايكل هو تحديد مسائل الحكم عالية القيمة، وتفكيك منطق الخبراء، وتنظيم الخبراء والمهندسين حولها، واختبار الافتراضات عبر حالات حقيقية قبل اعتبار أي شيء مُثبتاً."}
    ],
    closing:"النظام المفيد يوضح ما يسند الحكم، وما يحدّه، وما قد يغيّر نتيجته."
  },
  ary:{
    role:"شريك مؤسس · خبير فالعقار ومصمم لأنظمة الذكاء الاصطناعي المتخصصة",
    lead:"مايكل شي خدم قرابة عشرين عام فمجال العقار فالصين. بدا فتطوير وتسيير المشاريع داخل مجموعات عقارية كبار، ومن بعد سيّر أعمال التطوير وإعادة تأهيل الأصول. وكان كيتحمّل بنفسه تبعات القرارات اللي كيتخذها.",
    sections:[
      {title:"تجربة من مشاريع حقيقية",body:"قرار الاستثمار ماشي غير نموذج مالي. الحالة الحقيقية ديال الأصل، طلب السوق، تبدل القوانين، العقود، التمويل، الشركاء والقدرة على التنفيذ، كاملين يقدرو يبدلو النتيجة. مايكل كان كيراجع خلاصات الخبراء، ولكن حتى الأدلة والفرضيات والحوايج اللي ممكن الفريق ما انتبهش ليها. وملي كيبان دليل جديد، خاص الحكم يتراجع."},
      {title:"من الحكم المهني للنظام",body:"هاد التجربة خلاتو يسول: واش ممكن طريقة الخبراء فالبحث والنقد ومراجعة الأحكام تولّي نظام يستعملو الفريق مرّات متعددة؟ تعلّم البرمجة وأدوات الذكاء الاصطناعي، وبدا كيصمم ويبني أنظمة من مشاكل مهنية واقعية: كتحتافظ بمصادر الأدلة، كتبين التعارض وعدم اليقين، كتربط الفرضيات بالنتائج وكتعاود التقييم ملي كيتبدل الواقع."},
      {title:"الخدمة ديالو اليوم",body:"فـ MatterTurn Ai، مايكل مسؤول على تصميم الأنظمة، اتجاه المنتجات، التقدير التجاري والتسليم. كيطبق هاد الطريقة فمجالات مختلفة مع احترام خبرة وحدود كل مجال، باش الفرق توصل لجوهر المشكل وتعرف شنو كيسند الخلاصة ووقتاش خاص خبير بشري يراجعها."},
      {title:"شنو كيعني — وشنو ما كيعنيش — دخول مجال جديد",body:"MatterTurn خدامة فالعقار، البنوك، السفر، الأوراق المالية ومجالات أخرى. هادشي ما كيعنيش بلي مؤسس وحد كيدّعي الخبرة فكلشي — حتى واحد ما قادر. اللي كاين بصح هو: MatterTurn كتبني الأنظمة بجمع خبرة المجال، بنية تحتية للحكم قابلة لإعادة الاستعمال، العملاء الآليين، الهندسة، والتحقق بحالات واقعية. الدور ديال مايكل هو يحدد مسائل الحكم ذات القيمة العالية، يفكّك منطق الخبراء، ينظّم الخبراء والمهندسين حولها، ويجرب الفرضيات بحالات حقيقية قبل ما يقول بلي شي حاجة متحقق منها."}
    ],
    closing:"النظام النافع خاصو يبين على شنو مبني الحكم، فين الحدود ديالو، وشنو يقدر يبدلو."
  },
  es:{
    role:"Cofundador · Empresario inmobiliario y diseñador de sistemas de IA especializados",
    lead:"Michael Xie lleva cerca de veinte años trabajando en el sector inmobiliario chino. Comenzó en el desarrollo y la gestión de proyectos de grandes grupos y después dirigió negocios de promoción y recuperación de activos. Como empresario, ha tenido que asumir las consecuencias de sus decisiones.",
    sections:[
      {title:"Experiencia adquirida en proyectos reales",body:"Una decisión de inversión nunca es solo un modelo financiero. El estado de un activo, la demanda, los cambios normativos, los contratos, la financiación, los socios y la capacidad de ejecución pueden alterar el resultado. Michael debía examinar las conclusiones de los expertos, pero también la solidez de sus pruebas y supuestos y lo que el equipo pudiera haber pasado por alto. Las nuevas pruebas obligan a revisar los juicios anteriores."},
      {title:"Del criterio profesional al sistema",body:"Esa experiencia le llevó a preguntarse si la forma en que los expertos investigan, cuestionan y revisan decisiones podía convertirse en un sistema reutilizable. Aprendió programación y herramientas de IA y comenzó a diseñar y construir sistemas a partir de problemas profesionales reales: conservar las fuentes, mostrar los conflictos y la incertidumbre, vincular los supuestos con las conclusiones y volver a evaluar cuando cambia la realidad."},
      {title:"Su trabajo actual",body:"En MatterTurn Ai, Michael dirige el diseño de sistemas, la dirección de producto, el criterio comercial y la entrega. Aplica este método a distintos ámbitos respetando la experiencia y los límites propios de cada uno, para ayudar a los equipos a comprender el problema y saber cuándo una persona experta debe cuestionar una conclusión."},
      {title:"Qué significa — y qué no — entrar en un nuevo ámbito",body:"MatterTurn trabaja en inmobiliario, banca, viajes, valores y otros sectores. Eso no significa que un solo fundador se declare experto en todos ellos — nadie lo es. Significa que MatterTurn construye sistemas combinando experiencia de dominio, infraestructura de juicio reutilizable, agentes, ingeniería y validación con casos reales: el papel de Michael es identificar problemas de juicio de alto valor, descomponer el razonamiento experto, organizar a expertos e ingenieros en torno a ellos, y poner a prueba los supuestos con casos reales antes de llamar a algo demostrado."}
    ],
    closing:"Un sistema útil debe aclarar qué sostiene una decisión, cuáles son sus límites y qué podría hacerla cambiar."
  },
  ja:{
    role:"共同創業者 · 不動産事業の経営者、専門AIシステム設計者",
    lead:"Michael Xieは中国の不動産業界で約20年の経験を持ちます。大手不動産グループで開発とプロジェクト管理に携わった後、自ら開発事業や資産再生事業を経営し、判断の結果に直接向き合ってきました。",
    sections:[
      {title:"実際の事業から得た視点",body:"投資判断は財務モデルだけでは完結しません。資産の実態、市場需要、政策変更、契約上の責任、資金、パートナー、実行力が結果を左右します。Michaelは専門家の報告書の結論だけでなく、根拠や重要な前提、見落としを検討してきました。新たな証拠が出れば、以前の判断も見直す必要があります。"},
      {title:"専門的判断をシステムへ",body:"こうした経験から、専門家が調査し、疑問を投げかけ、判断を修正する過程を、チームが繰り返し使えるシステムにできないかと考えるようになりました。独学でプログラミングとAIツールを学び、現実の業務課題を起点にシステムを設計・構築。証拠の出所、情報の矛盾と不確実性、前提と結論の関係を明らかにし、状況が変われば再評価できるようにしています。"},
      {title:"現在の仕事",body:"MatterTurn AiでMichaelはシステム設計、製品方針、事業判断、提供を主導します。各分野固有の専門性と制約を尊重しながら、チームが問題の核心と結論の条件を把握し、いつ人間の専門家による検証が必要かを判断できるよう支援します。"},
      {title:"新しい分野に参入することの意味、しないこと",body:"MatterTurnは不動産、銀行、旅行、証券などの分野で事業を展開していますが、これは一人の創業者がすべての分野の専門家を自称していることを意味しません——誰もそうではありません。実際に行っているのは、ドメイン専門知識、再利用可能な判断基盤、エージェント、エンジニアリング、実案件による検証を組み合わせてシステムを構築することです。Michaelの役割は、価値の高い判断課題を見極め、専門家の推論を分解し、専門家とエンジニアをその周りに組織し、何かを実証済みと呼ぶ前に実際の案件で仮説を検証することです。"}
    ],
    closing:"有用なシステムは、判断の根拠と限界、そして結論を変え得る条件を明らかにすべきです。"
  },
  th:{
    role:"ผู้ร่วมก่อตั้ง · ผู้ประกอบการอสังหาริมทรัพย์และผู้ออกแบบระบบ AI เฉพาะทาง",
    lead:"Michael Xie ทำงานในธุรกิจอสังหาริมทรัพย์จีนมาประมาณ 20 ปี เริ่มจากการพัฒนาและบริหารโครงการในกลุ่มบริษัทขนาดใหญ่ ก่อนดำเนินธุรกิจพัฒนาและฟื้นฟูสินทรัพย์ด้วยตนเอง ในฐานะผู้ประกอบการ เขาต้องรับผลของการตัดสินใจจริง",
    sections:[
      {title:"ประสบการณ์จากโครงการจริง",body:"การตัดสินใจลงทุนไม่ใช่เพียงแบบจำลองทางการเงิน สภาพสินทรัพย์ ความต้องการของตลาด นโยบาย สัญญา เงินทุน คู่ค้า และความสามารถในการดำเนินงาน ล้วนเปลี่ยนผลลัพธ์ได้ Michael จึงตรวจสอบทั้งข้อสรุปของผู้เชี่ยวชาญ หลักฐาน สมมติฐาน และสิ่งที่ทีมอาจมองข้าม เมื่อมีหลักฐานใหม่ การประเมินเดิมก็ต้องทบทวน"},
      {title:"จากวิจารณญาณสู่ระบบ",body:"ประสบการณ์นี้ทำให้เขาถามว่า กระบวนการที่ผู้เชี่ยวชาญใช้ค้นคว้า ตั้งคำถาม และปรับแก้ข้อสรุป จะกลายเป็นระบบที่ทีมใช้ซ้ำได้หรือไม่ เขาศึกษาการเขียนโปรแกรมและเครื่องมือ AI ด้วยตนเอง แล้วออกแบบและสร้างระบบจากปัญหาทางวิชาชีพจริง โดยรักษาที่มาของหลักฐาน แสดงความขัดแย้งและความไม่แน่นอน เชื่อมสมมติฐานกับข้อสรุป และประเมินใหม่เมื่อสถานการณ์เปลี่ยน"},
      {title:"งานในปัจจุบัน",body:"ที่ MatterTurn Ai Michael ดูแลการออกแบบระบบ ทิศทางผลิตภัณฑ์ การตัดสินใจทางธุรกิจ และการส่งมอบ เขานำแนวทางนี้ไปใช้กับหลายสาขาโดยเคารพความเชี่ยวชาญและข้อจำกัดของแต่ละสาขา เพื่อให้ทีมเข้าใจแก่นของปัญหาและรู้ว่าเมื่อใดควรให้ผู้เชี่ยวชาญมนุษย์ทบทวน"},
      {title:"การเข้าสู่สาขาใหม่หมายถึงอะไร และไม่ได้หมายถึงอะไร",body:"MatterTurn ทำงานในหลายสาขา ทั้งอสังหาริมทรัพย์ ธนาคาร การท่องเที่ยว หลักทรัพย์ และอื่น ๆ นั่นไม่ได้หมายความว่าผู้ก่อตั้งคนเดียวอ้างว่าเชี่ยวชาญทุกสาขา — ไม่มีใครทำได้ สิ่งที่เกิดขึ้นจริงคือ MatterTurn สร้างระบบโดยผสานความเชี่ยวชาญเฉพาะด้าน โครงสร้างพื้นฐานด้านการวินิจฉัยที่นำกลับมาใช้ใหม่ได้ เอเจนต์ วิศวกรรม และการตรวจสอบด้วยกรณีจริงเข้าด้วยกัน บทบาทของ Michael คือระบุปัญหาการวินิจฉัยที่มีมูลค่าสูง แยกส่วนตรรกะของผู้เชี่ยวชาญ จัดระเบียบผู้เชี่ยวชาญและวิศวกรรอบปัญหานั้น และพิสูจน์หักล้างสมมติฐานด้วยกรณีจริงก่อนที่จะเรียกสิ่งใดว่าพิสูจน์แล้ว"}
    ],
    closing:"ระบบที่มีประโยชน์ควรบอกได้ว่าอะไรสนับสนุนข้อสรุป มีข้อจำกัดอะไร และอะไรอาจทำให้ข้อสรุปเปลี่ยนไป"
  }
};

export function founderLead(locale:Locale){return stories[locale].lead;}

export function FounderStory({locale}:{locale:Locale}){
  const story=stories[locale];
  return <article className="founder-story">
    <header className="founder-intro"><p className="overline">MatterTurn Ai</p><h2>Michael Xie</h2><p className="founder-role">{story.role}</p><p className="founder-lead">{story.lead}</p></header>
    <div className="founder-chapters">{story.sections.map((section,index)=><section key={index} className="founder-chapter"><div className="founder-chapter-heading"><span>0{index+1}</span><h3>{section.title}</h3></div><p>{section.body}</p></section>)}</div>
    <blockquote className="founder-closing">{story.closing}</blockquote>
  </article>;
}
