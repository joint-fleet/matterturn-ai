import {WorkspaceView} from "@/components/workspace-view";
import {pageMetadata} from "@/lib/seo";
import {messages} from "@/lib/i18n";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"/workspace",title:messages("en").caseTitle,description:messages("en").caseIntro});

export default function Workspace(){return <WorkspaceView locale="en"/>;}
