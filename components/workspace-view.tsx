import {SiteHeader} from "./site-header";
import {WorkspaceForm} from "./workspace-form";
import {type Locale,messages,rtl} from "@/lib/i18n";
export function WorkspaceView({locale}:{locale:Locale}){
  const m=messages(locale),dir=rtl(locale)?"rtl":"ltr";
  return <><SiteHeader locale={locale}/><main className="shell workspace-page" dir={dir}><div className="workspace-intro"><div><p className="overline">{m.wsKicker}</p><h1>{m.wsTitle}</h1></div><p>{m.wsIntro}</p></div><p className="workspace-notice">{m.wsNotice}</p><WorkspaceForm locale={locale}/></main><footer className="footer shell" dir={dir}><span>© MatterTurn Ai</span><span>{m.accessFoot}</span></footer></>;
}
