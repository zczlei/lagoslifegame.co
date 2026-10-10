import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Lagos Life Updates Log",
  description:
    "Weekly Lagos Life in-game updates: Gov rulings, minimum wage changes, new homes and events.",
  alternates: { canonical: "/updates/" },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="In-game updates log"
      description="Running log of Gov @Franka-style rulings, minimum wage changes, and new features — built to pull crawl frequency and return visits. First entries landing next."
      intent="lagos life update / gov / minimum wage"
    />
  );
}
