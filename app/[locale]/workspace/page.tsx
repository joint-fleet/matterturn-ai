import {notFound} from "next/navigation";
import {WorkspaceView} from "@/components/workspace-view";
import {validLocale,locales,messages} from "@/lib/i18n";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!validLocale(locale))return {};const m=messages(locale);return pageMetadata({locale,path:"/workspace",title:m.caseTitle,description:m.caseIntro});}
export default async function LocalWorkspace({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!validLocale(locale))notFound();return <WorkspaceView locale={locale}/>;}
