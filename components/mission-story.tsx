import {type Locale} from "@/lib/i18n";

type Mission = {statement:string;challenge:string;work:string;reach:string;closing:string;labels:[string,string,string]};

const missions:Record<Locale,Mission>={
  en:{
    statement:"Make rigorous professional judgment more accessible, repeatable and responsive to the real world.",
    challenge:"Important decisions are often made with incomplete information, conflicting evidence and changing conditions. Deep professional work takes people, time and money. A quick answer can be useful, but it is not enough when the cost of being wrong is high.",
    work:"MatterTurn Ai turns the working methods of experienced specialists into professional systems. We aim to help teams trace evidence, see gaps and conflicts, compare possible actions and revisit conclusions as new information emerges. We do not take the decision away from the client — people who understand the business and local context make the final call. What we take responsibility for is the rigor of the judgment we put in front of them.",
    reach:"We begin with real estate and international market and brand strategy. Alongside our own systems, we design systems for clients facing specific professional problems. Our ambition is to let teams of different sizes and in different places examine important decisions more deeply and more often, without requiring the resources of a large institution.",
    closing:"A decision should become clearer with each round of evidence and expert challenge.",
    labels:["The problem","What we build","Who it is for"]
  },
  "zh-CN":{
    statement:"让严谨的专业判断更容易获得、反复使用，并能随着现实变化持续更新。",
    challenge:"重要的商业决定，往往要在信息不完整、证据相互矛盾、现实持续变化的情况下作出。深入的专业工作需要人力、时间和预算；当判断错误代价高昂时，一个快速答案远远不够。",
    work:"MatterTurn Ai 致力于把真实专家的工作方式转化为专业系统，帮助团队追溯证据、发现缺口与冲突、比较可行的行动，并在新信息出现时重新审视结论。我们不会把最终决定从客户手中拿走——了解业务与当地现实的人做最终判断。我们负责的，是我们呈现给他们的那份判断本身的严谨程度。",
    reach:"我们从房地产、国际市场与品牌战略出发，建设自己的专业系统，也针对客户的具体业务问题设计定制系统。我们的目标是让不同规模、不同地区的团队，都有机会以可承担的资源，进行更深入、更频繁的专业判断。",
    closing:"每一轮新证据和专家质疑，都应让判断更清晰。",
    labels:["我们面对的问题","我们建设什么","我们希望服务谁"]
  },
  "zh-TW":{
    statement:"讓嚴謹的專業判斷更容易取得、反覆使用，並能隨現實變化持續更新。",
    challenge:"重要的商業決定，往往要在資訊不完整、證據相互矛盾、現實持續變化的情況下作出。深入的專業工作需要人力、時間與預算；當判斷錯誤的代價高昂，快速答案遠遠不夠。",
    work:"MatterTurn Ai 致力將真實專家的工作方式轉化為專業系統，幫助團隊追溯證據、發現缺口與衝突、比較可行行動，並在新資訊出現時重新審視結論。我們不會把最終決定從客戶手中拿走——了解業務與當地現實的人做最終判斷。我們負責的，是我們呈現給他們的那份判斷本身的嚴謹程度。",
    reach:"我們從房地產、國際市場與品牌策略出發，建立自己的專業系統，也針對客戶的具體業務問題設計定製系統。我們希望讓不同規模、不同地區的團隊，都有機會運用可負擔的資源，作出更深入、更頻繁的專業判斷。",
    closing:"每一輪新證據與專家質疑，都應讓判斷更清晰。",
    labels:["我們面對的問題","我們建立什麼","我們希望服務誰"]
  },
  fr:{
    statement:"Rendre le jugement professionnel rigoureux plus accessible, renouvelable et attentif aux changements du réel.",
    challenge:"Les décisions importantes se prennent souvent avec des informations incomplètes, des preuves contradictoires et une situation qui évolue. Une analyse approfondie exige des personnes, du temps et un budget. Lorsque le coût d'une erreur est élevé, une réponse rapide ne suffit pas.",
    work:"MatterTurn Ai transforme les méthodes de travail de spécialistes expérimentés en systèmes professionnels. Nous voulons aider les équipes à retracer les preuves, repérer les lacunes et les contradictions, comparer les actions possibles et réexaminer les conclusions à mesure que de nouvelles informations arrivent. Nous ne retirons pas la décision au client — ce sont les personnes qui connaissent l'activité et le contexte local qui tranchent. Ce dont nous répondons, c'est de la rigueur du jugement que nous leur présentons.",
    reach:"Nous partons de l'immobilier et de la stratégie internationale de marché et de marque. Nous construisons nos propres systèmes et concevons aussi des systèmes adaptés aux problèmes précis de nos clients. Notre ambition est de permettre à des équipes de tailles et de pays différents d'examiner les décisions importantes plus souvent et plus en profondeur, sans disposer des ressources d'une grande institution.",
    closing:"Chaque nouvelle preuve et chaque examen critique d'un expert devraient rendre le jugement plus clair.",
    labels:["Le problème","Ce que nous construisons","Pour qui"]
  },
  ar:{
    statement:"جعل الحكم المهني الدقيق أكثر إتاحة وقابلية للتكرار والتحديث مع تغير الواقع.",
    challenge:"تُتخذ القرارات المهمة كثيراً في ظل معلومات ناقصة وأدلة متعارضة وظروف متغيرة. ويتطلب العمل المهني المتعمق أشخاصاً ووقتاً وميزانية. وعندما تكون تكلفة الخطأ مرتفعة، لا تكفي الإجابة السريعة.",
    work:"تحوّل MatterTurn Ai أساليب عمل الخبراء ذوي الخبرة إلى أنظمة مهنية. نريد مساعدة الفرق على تتبع الأدلة وكشف الفجوات والتعارضات ومقارنة الإجراءات الممكنة وإعادة النظر في النتائج عند ظهور معلومات جديدة. نحن لا نأخذ القرار من العميل — فمن يفهمون العمل والسياق المحلي هم من يتخذون القرار النهائي. وما نتحمل مسؤوليته هو دقة الحكم الذي نضعه أمامهم.",
    reach:"ننطلق من العقارات واستراتيجية الأسواق والعلامات التجارية الدولية. نبني أنظمتنا الخاصة ونصمم أيضاً أنظمة لمعالجة مشكلات مهنية محددة لدى العملاء. وطموحنا أن تتمكن فرق مختلفة الحجم وفي بلدان مختلفة من دراسة القرارات المهمة بعمق وتكرار أكبر، من دون الحاجة إلى موارد مؤسسة كبيرة.",
    closing:"كل دليل جديد وكل مراجعة نقدية من خبير ينبغي أن يجعلا الحكم أوضح.",
    labels:["المشكلة","ما نبنيه","لمن نعمل"]
  },
  ary:{
    statement:"نخلّيو الحكم المهني الدقيق متاح أكثر، قابل يتعاود ويتحدّث ملي كيتبدل الواقع.",
    challenge:"القرارات المهمة كتتاخذ بزاف ديال المرات بمعلومات ناقصة، أدلة متعارضة وظروف كتتبدل. التحليل المهني العميق كيحتاج ناس ووقت وميزانية. وملي كيكون ثمن الغلط كبير، الجواب السريع بوحدو ما كافيش.",
    work:"MatterTurn Ai كتحوّل طريقة خدمة الخبراء المجربين لأنظمة مهنية. بغينا نعاونو الفرق يتبعو مصادر الأدلة، يشوفو النواقص والتعارض، يقارنو الإجراءات الممكنة ويراجعو الخلاصات ملي كتظهر معلومات جديدة. احنا ما كناخدوش القرار من العميل — الناس اللي فاهمين الخدمة والسياق المحلي هوما اللي كياخدو القرار النهائي. واللي كنتحملو المسؤولية ديالو هو دقة الحكم اللي كنقدموه ليهم.",
    reach:"بدينا من العقار واستراتيجية الأسواق والعلامات التجارية الدولية. كنبنيو أنظمتنا وكنصممو حتى أنظمة لمشاكل مهنية محددة عند الزبناء. الهدف ديالنا هو فرق مختلفة فالحجم والبلدان تقدر تدرس القرارات المهمة بعمق وبشكل متكرر، بلا ما تحتاج موارد مؤسسة كبيرة.",
    closing:"كل دليل جديد وكل مراجعة من خبير خاصها توضح الحكم أكثر.",
    labels:["المشكل","شنو كنبنيو","لمن كنخدمو"]
  },
  es:{
    statement:"Hacer que el criterio profesional riguroso sea más accesible, repetible y capaz de responder a los cambios del mundo real.",
    challenge:"Las decisiones importantes suelen tomarse con información incompleta, pruebas contradictorias y circunstancias cambiantes. Un análisis profesional profundo requiere personas, tiempo y presupuesto. Cuando equivocarse cuesta caro, una respuesta rápida no basta.",
    work:"MatterTurn Ai convierte los métodos de trabajo de especialistas experimentados en sistemas profesionales. Queremos ayudar a los equipos a rastrear las pruebas, detectar lagunas y conflictos, comparar posibles acciones y revisar las conclusiones cuando aparece nueva información. No le quitamos la decisión al cliente — quienes conocen el negocio y el contexto local toman la decisión final. De lo que respondemos es del rigor del juicio que ponemos ante ellos.",
    reach:"Partimos del sector inmobiliario y la estrategia internacional de mercados y marcas. Desarrollamos nuestros propios sistemas y diseñamos otros para los problemas específicos de nuestros clientes. Aspiramos a que equipos de distintos tamaños y países puedan analizar las decisiones importantes con mayor profundidad y frecuencia, sin necesitar los recursos de una gran institución.",
    closing:"Cada nueva prueba y cada revisión crítica de un experto deberían aclarar el juicio.",
    labels:["El problema","Qué construimos","Para quién"]
  },
  ja:{
    statement:"厳密な専門的判断を、より多くのチームが繰り返し使い、現実の変化に応じて更新できるようにする。",
    challenge:"重要な意思決定は、情報が不完全で、証拠が矛盾し、状況が変わり続ける中で行われます。深い専門分析には人、時間、費用が必要です。判断を誤る代償が大きいとき、素早い回答だけでは足りません。",
    work:"MatterTurn Aiは、経験豊富な専門家の仕事の進め方を専門システムにします。証拠の出所をたどり、欠落や矛盾を見つけ、行動の選択肢を比較し、新しい情報が出れば結論を見直せるようチームを支援します。最終判断を下すのはお客様から取り上げません——事業と地域の現実を理解する人が最終判断を下します。私たちが責任を負うのは、その人たちの前に示す判断そのものの厳密さです。",
    reach:"私たちは不動産と国際市場・ブランド戦略から始めています。独自の専門システムに加え、顧客固有の業務課題に合わせたシステムも設計します。規模や地域の異なるチームが、大組織の資源に頼らずに重要な判断をより深く、より頻繁に検討できることを目指します。",
    closing:"新しい証拠と専門家の批判的な検証を重ねるたびに、判断は明確になるべきです。",
    labels:["向き合う課題","構築するもの","目指す相手"]
  },
  th:{
    statement:"ทำให้การตัดสินใจเชิงวิชาชีพที่รอบคอบเข้าถึงได้มากขึ้น ใช้ซ้ำได้ และปรับตามความจริงที่เปลี่ยนไป",
    challenge:"การตัดสินใจสำคัญมักเกิดขึ้นท่ามกลางข้อมูลที่ไม่ครบ หลักฐานที่ขัดกัน และสถานการณ์ที่เปลี่ยนอยู่เสมอ การวิเคราะห์อย่างลึกซึ้งต้องใช้คน เวลา และงบประมาณ เมื่อความผิดพลาดมีต้นทุนสูง คำตอบที่รวดเร็วเพียงอย่างเดียวไม่พอ",
    work:"MatterTurn Ai นำวิธีทำงานของผู้เชี่ยวชาญที่มีประสบการณ์มาพัฒนาเป็นระบบเฉพาะทาง เพื่อช่วยทีมติดตามแหล่งหลักฐาน เห็นช่องว่างและความขัดแย้ง เปรียบเทียบแนวทางที่เป็นไปได้ และทบทวนข้อสรุปเมื่อมีข้อมูลใหม่ เราไม่ได้ดึงการตัดสินใจไปจากลูกค้า — ผู้ที่เข้าใจธุรกิจและบริบทท้องถิ่นเป็นผู้ตัดสินใจขั้นสุดท้าย สิ่งที่เรารับผิดชอบคือความรอบคอบของการตัดสินใจที่เรานำเสนอต่อพวกเขา",
    reach:"เราเริ่มจากอสังหาริมทรัพย์และกลยุทธ์ตลาดกับแบรนด์ระหว่างประเทศ ทั้งสร้างระบบของเราเองและออกแบบระบบตามปัญหาเฉพาะของลูกค้า เป้าหมายคือให้ทีมขนาดต่าง ๆ ในพื้นที่ต่าง ๆ ตรวจสอบการตัดสินใจสำคัญได้ลึกขึ้นและบ่อยขึ้น โดยไม่ต้องมีทรัพยากรเท่าสถาบันขนาดใหญ่",
    closing:"หลักฐานใหม่และการทบทวนอย่างจริงจังจากผู้เชี่ยวชาญควรทำให้การตัดสินใจชัดเจนขึ้นทุกครั้ง",
    labels:["ปัญหาที่เราเผชิญ","สิ่งที่เราสร้าง","เพื่อใคร"]
  }
};

export function missionStatement(locale:Locale){return missions[locale].statement;}

export function MissionStory({locale}:{locale:Locale}){
  const mission=missions[locale];
  return <article className="mission-story">
    <p className="mission-statement">{mission.statement}</p>
    <div className="mission-sections">{([mission.challenge,mission.work,mission.reach] as const).map((body,index)=><section className="mission-section" key={index}><div className="mission-section-title"><span>0{index+1}</span><h2>{mission.labels[index]}</h2></div><p>{body}</p></section>)}</div>
    <blockquote className="mission-closing">{mission.closing}</blockquote>
  </article>;
}
