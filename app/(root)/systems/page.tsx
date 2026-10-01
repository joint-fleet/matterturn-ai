import {SystemsPage} from "@/components/systems-page";
import {pageMetadata} from "@/lib/seo";
import {messages} from "@/lib/i18n";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"/systems",title:`${messages("en").systemsTitle1} ${messages("en").systemsTitle2}`,description:messages("en").systemsIntro});

export default function Systems(){return <SystemsPage locale="en"/>;}
