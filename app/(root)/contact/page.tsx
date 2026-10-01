import {SectionPage} from "@/components/section-page";
import {pageMetadata} from "@/lib/seo";
import {navigation} from "@/lib/navigation";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"/contact",title:navigation.en.contact});

export default function Contact(){return <SectionPage locale="en" section="contact"/>;}
