import {notFound} from "next/navigation";
import {WorkspaceView} from "@/components/workspace-view";
import {validLocale} from "@/lib/i18n";
export const dynamic="force-dynamic";
export default async function LocalWorkspace({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!validLocale(locale))notFound();return <WorkspaceView locale={locale}/>;}
