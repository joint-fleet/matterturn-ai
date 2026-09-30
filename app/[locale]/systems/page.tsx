import {notFound} from "next/navigation";
import {SystemsPage} from "@/components/systems-page";
import {validLocale} from "@/lib/i18n";
export default async function LocalSystems({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(!validLocale(locale))notFound();return <SystemsPage locale={locale}/>;
}
