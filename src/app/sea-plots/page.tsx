import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Lagos Life Sea Plots Explained",
  description:
    "What Sea Plots are in Lagos Life, why players chase them, and why they are not a first-hour buy.",
  alternates: { canonical: "/sea-plots/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Sea Plots explained"
      description="What Sea Plots do in the current meta, approximate cost ranges, and when they are worth chasing. Full page landing next."
      intent="lagos life sea plots"
    />
  );
}
