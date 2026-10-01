import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
import {navigation} from "@/lib/navigation";
import {founderLead} from "@/components/founder-story";
import {missionStatement} from "@/components/mission-story";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";

const description = (topic:"team"|"founders"|"mission") =>
  topic==="founders" ? founderLead("en") : topic==="mission" ? missionStatement("en") : undefined;

export async function generateMetadata({params}:{params:Promise<{topic:string}>}):Promise<Metadata>{
  const {topic}=await params;
  if(topic!=="team"&&topic!=="founders"&&topic!=="mission")return {};
  return pageMetadata({locale:"en",path:`/about/${topic}`,title:navigation.en[topic],description:description(topic)});
}

export default async function AboutTopic({params}:{params:Promise<{topic:string}>}){
  const {topic}=await params;
  if(topic!=="team"&&topic!=="founders"&&topic!=="mission")notFound();
  return <SectionPage locale="en" section={topic}/>;
}
