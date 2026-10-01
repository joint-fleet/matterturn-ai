import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
import {validLocale,type Locale} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";
import {founderLead} from "@/components/founder-story";
import {missionStatement} from "@/components/mission-story";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";

const description = (locale:Locale,topic:"team"|"founders"|"mission") =>
  topic==="founders" ? founderLead(locale) : topic==="mission" ? missionStatement(locale) : undefined;

export async function generateMetadata({params}:{params:Promise<{locale:string,topic:string}>}):Promise<Metadata>{
  const {locale,topic}=await params;
  if(!validLocale(locale)||(topic!=="team"&&topic!=="founders"&&topic!=="mission"))return {};
  return pageMetadata({locale,path:`/about/${topic}`,title:navigation[locale][topic],description:description(locale,topic)});
}

export default async function LocalAboutTopic({params}:{params:Promise<{locale:string,topic:string}>}){
  const {locale,topic}=await params;
  if(!validLocale(locale)||(topic!=="team"&&topic!=="founders"&&topic!=="mission"))notFound();
  return <SectionPage locale={locale} section={topic}/>;
}
