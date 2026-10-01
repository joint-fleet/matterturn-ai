import {SectionPage} from "@/components/section-page";
import {pageMetadata} from "@/lib/seo";
import {navigation} from "@/lib/navigation";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"/about",title:navigation.en.about});

export default function About(){return <SectionPage locale="en" section="about"/>;}
