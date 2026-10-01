import {HomeView} from "@/components/home-view";
import {pageMetadata} from "@/lib/seo";
import {messages} from "@/lib/i18n";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"",title:messages("en").heroLocal,description:messages("en").heroText});

export default function Home(){return <HomeView locale="en"/>;}
