"use client";
import {useState} from "react";
import {ArrowIcon} from "./arrow-icon";
import {useSearchParams} from "next/navigation";
import {type Locale,messages} from "@/lib/i18n";
import {translatedProducts,translatedProduct} from "@/lib/product-i18n";
import {productBySlug} from "@/lib/products";
type Submission={id:string;system:string;instruction:string;fileName:string|null;createdAt:string;status:string};
type ApiResult={error?:string;submissions?:Submission[];submission?:Submission};
export function WorkspaceForm({locale}:{locale:Locale}){
  const search=useSearchParams(),m=messages(locale),products=translatedProducts(locale);
  const unavailable: Record<Locale,string> = {
    en:"Private intake is being migrated. Uploads are temporarily unavailable; no request will be saved.",
    "zh-CN":"私有资料提交正在迁移。上传暂不可用，当前不会保存请求。",
    "zh-TW":"私有資料提交正在遷移。上傳暫不可用，目前不會儲存請求。",
    fr:"Le dépôt privé est en cours de migration. Les envois sont indisponibles ; aucune demande ne sera enregistrée.",
    ar:"يجري نقل استقبال الملفات الخاص. الرفع غير متاح مؤقتاً ولن يُحفظ أي طلب.",
    ary:"إرسال الملفات الخاص كيتنقل دابا. الرفع ما خدامش مؤقتاً وما غادي يتسجل حتى طلب.",
    es:"La recepción privada está en migración. Las cargas no están disponibles y no se guardará ninguna solicitud.",
    ja:"非公開の資料受付を移行中です。アップロードは一時停止中で、依頼は保存されません。",
    th:"กำลังย้ายระบบรับข้อมูลส่วนตัว การอัปโหลดไม่พร้อมใช้งานชั่วคราวและจะไม่มีการบันทึกคำขอ"
  };
  const initial=search.get("system")??"real-estate";
  const [system,setSystem]=useState(productBySlug(initial)?initial:"real-estate");
  const [instruction,setInstruction]=useState("");
  const [file,setFile]=useState<File|null>(null);
  const [records,setRecords]=useState<Submission[]>([]);
  const loading=false;
  const [sending,setSending]=useState(false);
  const [message,setMessage]=useState("");
  const [error,setError]=useState(false);
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();const fileInput=event.currentTarget.elements.namedItem("file") as HTMLInputElement;setSending(true);setMessage("");setError(false);
    const form=new FormData();form.append("system",system);form.append("instruction",instruction);if(file)form.append("file",file);
    try{const response=await fetch("/api/submissions",{method:"POST",body:form});const data=await response.json() as ApiResult;if(!response.ok||!data.submission)throw new Error("save");setRecords(list=>[data.submission!,...list]);setInstruction("");setFile(null);fileInput.value="";setMessage(m.saved);}
    catch{setError(true);setMessage(m.saveError);}
    finally{setSending(false)}
  }
  return <div className="workspace-layout"><section className="submission"><h2>{m.newRequest}</h2><p>{m.requestIntro}</p><p className="form-message" role="status">{unavailable[locale]}</p><form onSubmit={submit} className="form-grid"><label>{m.system}<select name="system" value={system} onChange={e=>setSystem(e.target.value)}>{products.map(p=><option key={p.slug} value={p.slug}>{p.title} · {p.status}</option>)}</select></label><label>{m.instruction}<textarea name="instruction" minLength={15} maxLength={3000} required placeholder={m.placeholder} value={instruction} onChange={e=>setInstruction(e.target.value)}/><span className="field-help">{m.instructionHelp}</span></label><label>{m.file} <span className="field-help">({m.optional})</span><input name="file" type="file" accept=".pdf,.docx,.xlsx,.csv,.txt" onChange={e=>setFile(e.target.files?.[0]??null)}/><span className="field-help">{m.fileHelp}</span></label><button type="submit" className="submit-button" disabled={true}>{sending?m.saving:<>{m.save} <ArrowIcon/></>}</button>{message?<p className={`form-message ${error?"error":"success"}`} role="status">{message}</p>:null}</form></section><aside className="submissions"><h2>{m.received}</h2><p>{m.receivedIntro}</p>{loading?<p>{m.loading}</p>:records.length===0?<p>{m.empty}</p>:records.map(record=><article className="task-card" key={record.id}><span>{m.receivedStatus}</span><strong>{translatedProduct(locale,record.system)?.title??m.unknownSystem}</strong><time dateTime={record.createdAt}>{new Date(record.createdAt).toLocaleString(locale)}</time><p>{record.instruction}</p>{record.fileName?<p>{m.attachment}: {record.fileName}</p>:null}</article>)}</aside></div>;
}
