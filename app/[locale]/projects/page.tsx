import {notFound} from "next/navigation";
import {ProjectsView} from "@/components/projects-view";
import {validLocale,locales} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!validLocale(locale))return {};return pageMetadata({locale,path:"/projects",title:navigation[locale].projects});}
export default async function LocalProjects({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(!validLocale(locale))notFound();return <ProjectsView locale={locale}/>;
}
