import {notFound} from "next/navigation";
import {HomeView} from "@/components/home-view";
import {locales,validLocale} from "@/lib/i18n";
import {messages} from "@/lib/i18n";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!validLocale(locale))return {};const m=messages(locale);return pageMetadata({locale,path:"",title:m.heroLocal,description:m.heroText});}
export default async function LocalHome({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!validLocale(locale))notFound();return <HomeView locale={locale}/>;}
