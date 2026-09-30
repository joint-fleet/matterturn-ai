import {notFound} from "next/navigation";
import {SectionPage} from "@/components/section-page";
export default async function AboutTopic({params}:{params:Promise<{topic:string}>}){
  const {topic}=await params;
  if(topic!=="team"&&topic!=="founders"&&topic!=="mission")notFound();
  return <SectionPage locale="en" section={topic}/>;
}
