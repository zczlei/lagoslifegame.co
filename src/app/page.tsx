import { AtAGlance } from "@/components/home/AtAGlance";
import { Different } from "@/components/home/Different";
import { Faq } from "@/components/home/Faq";
import { FirstHour } from "@/components/home/FirstHour";
import { GuidesGrid } from "@/components/home/GuidesGrid";
import { Hero } from "@/components/home/Hero";
import { QuickStart } from "@/components/home/QuickStart";
import { Safety } from "@/components/home/Safety";
import { Troubleshooting } from "@/components/home/Troubleshooting";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <QuickStart />
        <AtAGlance />
        <Different />
        <FirstHour />
        <Troubleshooting />
        <Safety />
        <GuidesGrid />
        <Faq />
      </main>
    </>
  );
}
