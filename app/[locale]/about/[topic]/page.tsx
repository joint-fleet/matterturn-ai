import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
import {validLocale} from "@/lib/i18n";
export default async function LocalAboutTopic({params}:{params:Promise<{locale:string,topic:string}>}){
  const {locale,topic}=await params;
  if(!validLocale(locale)||(topic!=="team"&&topic!=="founders"&&topic!=="mission"))notFound();
  return <SectionPage locale={locale} section={topic}/>;
}
