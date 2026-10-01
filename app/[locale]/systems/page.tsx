import {notFound} from "next/navigation";
import {SystemsPage} from "@/components/systems-page";
import {validLocale,locales,messages} from "@/lib/i18n";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!validLocale(locale))return {};const m=messages(locale);return pageMetadata({locale,path:"/systems",title:`${m.systemsTitle1} ${m.systemsTitle2}`,description:m.systemsIntro});}
export default async function LocalSystems({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(!validLocale(locale))notFound();return <SystemsPage locale={locale}/>;
}
