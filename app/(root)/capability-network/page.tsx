import {CapabilityNetworkView} from "@/components/capability-network-view";
import {pageMetadata} from "@/lib/seo";
import type {Metadata} from "next";

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/capability-network",
  title: "Capability Network",
  description: "Each additional MatterTurn system unlocks another professional capability domain, connected around the same real business problem.",
});

export default function CapabilityNetwork() {
  return <CapabilityNetworkView />;
}
