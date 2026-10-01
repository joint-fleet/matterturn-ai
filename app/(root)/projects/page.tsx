import {ProjectsView} from "@/components/projects-view";
import {pageMetadata} from "@/lib/seo";
import {navigation} from "@/lib/navigation";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({locale:"en",path:"/projects",title:navigation.en.projects});

export default function Projects(){return <ProjectsView locale="en"/>;}
