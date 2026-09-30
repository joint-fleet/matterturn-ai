import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
import {validLocale} from "@/lib/i18n";
export default async function LocalContact({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(!validLocale(locale))notFound();return <SectionPage locale={locale} section="contact"/>;
}
