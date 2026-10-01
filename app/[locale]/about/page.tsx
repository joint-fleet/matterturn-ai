import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
import {validLocale,locales} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!validLocale(locale))return {};return pageMetadata({locale,path:"/about",title:navigation[locale].about});}
export default async function LocalAbout({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(!validLocale(locale))notFound();return <SectionPage locale={locale} section="about"/>;
}
