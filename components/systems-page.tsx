import Link from "next/link";
import {SiteHeader} from "./site-header";
import {SystemsCatalog} from "./systems-catalog";
import {ArrowIcon} from "./arrow-icon";
import {type Locale,pathFor,rtl} from "@/lib/i18n";
import {navigation} from "@/lib/navigation";

export function SystemsPage({locale}:{locale:Locale}){
  return <><SiteHeader locale={locale}/><main dir={rtl(locale)?"rtl":"ltr"}>
    <div className="systems-page-back shell"><Link href={pathFor(locale,"/")} className="back-link">{navigation[locale].home} <ArrowIcon direction="up-left"/></Link></div>
    <SystemsCatalog locale={locale}/>
  </main></>;
}
