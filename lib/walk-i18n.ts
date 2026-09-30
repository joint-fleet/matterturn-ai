import {type Locale} from "./i18n";
type Step={heading:string;question:string;choices?:[string,string][];result?:string};
type Scenario="real-estate"|"international-brand";
// Each scenario has two decisions and one illustrative conclusion.
const text:Record<Locale,Record<Scenario,string[]>>={
 en:{
  "real-estate":["Define the decision|A committee is considering a new property. What is the first task?|Screen the opportunity|Check whether deeper underwriting is justified|Prepare an approval|First establish the evidence and decision criteria","Test the evidence|The broker's rent estimate conflicts with another source. What should the review show?|Trace both sources|Compare provenance and relevance|Test the sensitivity|Show how either figure affects the decision","Prepare the review|The conclusion remains conditional.|The next step is focused underwriting and expert review. Conflicts, limits and assumptions stay visible."],
  "international-brand":["Frame the problem|A product enters a new country. What should be understood first?|The product and audience|Use case, target buyer and positioning|Candidate markets|Compare where the product could fit","Read the market|Online comments sound promising, but local coverage is thin. What comes next?|Expand local evidence|Seek consumer voices across relevant channels|Record the gap|Keep the position provisional","Prepare a choice|Evidence supports several options, with gaps.|Compare candidate markets and possible positioning with the remaining unknowns visible for expert review."]
 },
 "zh-CN":{
  "real-estate":["明确决策|投资委员会正在考虑一个新项目，第一步是什么？|初筛机会|判断是否值得深入测算|准备批准|先建立证据和决策标准","检验证据|中介提供的租金数据与另一来源冲突，应如何处理？|追溯两个来源|比较出处与适用性|做敏感性分析|显示两个数值如何影响决策","准备审查|目前只能得出有条件的判断。|下一步是针对性测算与专家复核。冲突、限制和假设仍须明确展示。"],
  "international-brand":["界定问题|产品进入一个新国家前，先弄清什么？|产品和受众|使用场景、目标顾客与定位|候选市场|比较哪些国家可能适合","理解市场|网上评价不错，但当地覆盖不足，接下来怎么办？|扩大当地证据|寻找不同渠道的消费者声音|记录证据缺口|只保留暂时性的看法","准备选择|证据支持多种方向，但仍有缺口。|比较候选市场和定位方案，把未知事项交给专家继续审查。"]
 },
 "zh-TW":{
  "real-estate":["明確決策|投資委員會正考慮一個新項目，第一步是甚麼？|初步篩選機會|判斷是否值得深入測算|準備批准|先建立證據與決策標準","檢驗證據|中介提供的租金數據與另一來源衝突，應如何處理？|追溯兩個來源|比較出處與適用性|做敏感度分析|顯示兩個數值如何影響決策","準備審查|目前只能得出有條件的判斷。|下一步是針對性測算與專家覆核。衝突、限制與假設仍須清楚呈現。"],
  "international-brand":["界定問題|產品進入新國家前，先弄清甚麼？|產品和受眾|使用場景、目標顧客與定位|候選市場|比較哪些國家可能適合","理解市場|網上評價不錯，但當地覆蓋不足，接下來怎麼做？|擴大當地證據|尋找不同渠道的消費者聲音|記錄證據缺口|只保留暫時性的看法","準備選擇|證據支持多種方向，但仍有缺口。|比較候選市場與定位方案，將未知事項交由專家繼續審查。"]
 },
 fr:{
  "real-estate":["Définir la décision|Un comité étudie un nouveau bien. Quelle est la première étape ?|Examiner l’opportunité|Décider si une analyse financière approfondie est justifiée|Préparer une approbation|Établir d’abord les preuves et critères","Vérifier les preuves|Le loyer estimé par le courtier contredit une autre source. Que montrer ?|Retracer les deux sources|Comparer leur origine et leur pertinence|Tester la sensibilité|Montrer l’effet de chaque chiffre sur la décision","Préparer la revue|La conclusion reste conditionnelle.|L’étape suivante est une analyse ciblée et une revue experte. Les contradictions, limites et hypothèses restent visibles."],
  "international-brand":["Poser le problème|Avant d’entrer dans un pays, que faut-il comprendre ?|Produit et public|Usage, clientèle cible et positionnement|Marchés candidats|Comparer les pays où le produit peut convenir","Lire le marché|Les avis en ligne semblent bons, mais la couverture locale est faible. Que faire ?|Élargir les preuves locales|Chercher des voix de consommateurs sur divers canaux|Noter la lacune|Garder une conclusion provisoire","Préparer un choix|Plusieurs options sont possibles malgré les lacunes.|Comparer marchés et positionnements en exposant les inconnues à la revue experte."]
 },
 ar:{
  "real-estate":["تحديد القرار|تدرس لجنة استثمار عقاراً جديداً. ما المهمة الأولى؟|فحص الفرصة|معرفة هل تستحق دراسة مالية أعمق|إعداد الموافقة|تحديد الأدلة ومعايير القرار أولاً","فحص الأدلة|تقدير الإيجار من الوسيط يخالف مصدراً آخر. ماذا نعرض؟|تتبع المصدرين|مقارنة الأصل ومدى الصلة|اختبار الحساسية|إظهار أثر كل تقدير على القرار","تحضير المراجعة|لا يزال الاستنتاج مشروطاً.|الخطوة التالية تحليل مالي محدد ومراجعة خبراء، مع إبراز التعارضات والحدود والافتراضات."],
  "international-brand":["صياغة المشكلة|قبل دخول بلد جديد، ما الذي يجب فهمه؟|المنتج والجمهور|الاستخدام والمشتري المستهدف والتموضع|الأسواق المرشحة|مقارنة البلدان الملائمة","قراءة السوق|التعليقات مشجعة لكن التغطية المحلية محدودة. ما التالي؟|توسيع الأدلة المحلية|البحث عن آراء المستهلكين في قنوات مناسبة|تسجيل الفجوة|الإبقاء على رؤية مؤقتة","تحضير الاختيار|توجد خيارات عدة مع فجوات في الأدلة.|مقارنة الأسواق والتموضع مع توضيح المجهول للمراجعة المهنية."]
 },
 ary:{
  "real-estate":["نحددو القرار|لجنة استثمار كتشوف عقار جديد. شنو أول خطوة؟|نفحصو الفرصة|نعرفو واش تستاهل دراسة مالية معمقة|نوجدو الموافقة|خاصنا نثبتو الدلائل والمعايير اللول","نفحصو الدلائل|تقدير الكراء ديال السمسار كيتعارض مع مصدر آخر. شنو خاص يبان؟|نتبّعو جوج المصادر|نقارنو الأصل والصلاحية|نجربو الحساسية|نبيّنو أثر كل رقم على القرار","نوجدو المراجعة|الخلاصة مازال مشروطة.|الخطوة الجاية دراسة مالية مركزة ومراجعة الخبراء، مع توضيح التعارض والحدود والفرضيات."],
  "international-brand":["نحددو المشكل|قبل ما يدخل منتوج لبلاد جديدة، شنو خاصنا نفهمو؟|المنتوج والجمهور|الاستعمال والزبون المستهدف والتموقع|الأسواق الممكنة|نقارنو البلدان اللي يقدر ينجح فيها","نفهمو السوق|التعاليق مبشرة ولكن المعطيات المحلية قليلة. شنو نديرو؟|نزيدو دلائل محلية|نقلبو على آراء المستهلكين فالقنوات المهمة|نسجلو شنو ناقص|نخليو الرأي مؤقت","نوجدو الاختيار|كاينين عدة خيارات ولكن الدلائل ناقصة.|نقارنو الأسواق والتموقع ونبيّنو شنو باقي مجهول للخبراء."]
 },
 es:{
  "real-estate":["Definir la decisión|Un comité estudia un nuevo inmueble. ¿Cuál es la primera tarea?|Examinar la oportunidad|Ver si se justifica un análisis financiero a fondo|Preparar la aprobación|Definir antes las pruebas y los criterios","Examinar las pruebas|La renta estimada por el agente contradice otra fuente. ¿Qué debe mostrarse?|Rastrear ambas fuentes|Comparar procedencia y pertinencia|Probar la sensibilidad|Mostrar cómo cada cifra cambia la decisión","Preparar la revisión|La conclusión sigue siendo condicional.|Sigue un análisis financiero específico y una revisión experta. Los conflictos, límites e hipótesis siguen visibles."],
  "international-brand":["Plantear el problema|Antes de entrar en un país nuevo, ¿qué hay que comprender?|Producto y público|Uso, comprador objetivo y posicionamiento|Mercados candidatos|Comparar países adecuados","Leer el mercado|Los comentarios son prometedores, pero hay pocos datos locales. ¿Qué sigue?|Ampliar pruebas locales|Buscar voces de consumidores en canales relevantes|Registrar la laguna|Mantener una postura provisional","Preparar la elección|Las pruebas permiten varias opciones con lagunas.|Comparar mercados y posicionamientos con las dudas visibles para los expertos."]
 },
 ja:{
  "real-estate":["判断事項を定義|委員会が新しい物件を検討しています。最初にすることは？|機会を選別|詳細な収支分析に進む価値があるか判断|承認を準備|まず証拠と判断基準を定める","証拠を検証|仲介業者の賃料予測が別の情報源と矛盾します。何を示すべきか？|両方の情報源を追う|出所と適合性を比較|感度を調べる|それぞれの数字が判断に与える影響を示す","検証を準備|現段階の結論には条件があります。|次は対象を絞った収支分析と専門家による検証です。矛盾、限界、前提を示します。"],
  "international-brand":["問題を定める|新しい国への進出前にまず何を知るべきか？|製品と対象者|用途、顧客、ポジショニング|候補市場|適合しそうな国を比較","市場を読む|オンラインの反応は良好でも現地データが不足。次は？|現地の証拠を増やす|適切な経路で消費者の声を集める|不足を記録|暫定的な見解にとどめる","選択肢を準備|複数の案を支える証拠がありますが不足も残ります。|市場とポジショニングを比較し、不明点を専門家の検証に回します。"]
 },
 th:{
  "real-estate":["กำหนดการตัดสินใจ|คณะกรรมการกำลังพิจารณาทรัพย์สินใหม่ ควรเริ่มจากอะไร|คัดกรองโอกาส|ดูว่าคุ้มกับการวิเคราะห์การเงินเชิงลึกหรือไม่|เตรียมอนุมัติ|ต้องตั้งหลักฐานและเกณฑ์ก่อน","ตรวจหลักฐาน|ค่าเช่าจากนายหน้าขัดกับอีกแหล่ง ควรแสดงอะไร|ย้อนดูทั้งสองแหล่ง|เทียบที่มาและความเกี่ยวข้อง|ทดสอบความไว|แสดงผลของตัวเลขแต่ละชุดต่อการตัดสินใจ","เตรียมตรวจทาน|ข้อสรุปยังมีเงื่อนไข|ขั้นต่อไปคือวิเคราะห์การเงินเฉพาะจุดและให้ผู้เชี่ยวชาญตรวจ โดยแสดงข้อขัดแย้ง ข้อจำกัด และสมมติฐาน"],
  "international-brand":["ตั้งโจทย์|ก่อนเข้าสู่ประเทศใหม่ ต้องเข้าใจอะไร|สินค้าและกลุ่มเป้าหมาย|การใช้สินค้า ลูกค้าเป้าหมาย และตำแหน่งแบรนด์|ตลาดตัวเลือก|เปรียบเทียบประเทศที่อาจเหมาะ","อ่านตลาด|ความเห็นออนไลน์ดูดี แต่ข้อมูลท้องถิ่นยังน้อย ทำอะไรต่อ|เพิ่มหลักฐานท้องถิ่น|หาความเห็นผู้บริโภคจากช่องทางที่สำคัญ|บันทึกช่องว่าง|เก็บข้อสรุปไว้ชั่วคราว","เตรียมทางเลือก|หลักฐานสนับสนุนหลายทาง แต่ยังมีช่องว่าง|เปรียบเทียบตลาดและตำแหน่งแบรนด์ พร้อมข้อไม่รู้ให้ผู้เชี่ยวชาญตรวจ"]
 }
};
export function walkthrough(locale:Locale,slug:Scenario):Step[]{
 return text[locale][slug].map((line,index)=>{
  const parts=line.split("|");
  return index<2?{heading:parts[0],question:parts[1],choices:[[parts[2],parts[3]],[parts[4],parts[5]]]}:{heading:parts[0],question:parts[1],result:parts[2]};
 });
}
