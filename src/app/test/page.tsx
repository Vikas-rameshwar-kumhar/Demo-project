import type { Metadata } from "next";
import { CoveHero } from "@/components/cove/CoveHero";
import { CoveHighlights } from "@/components/cove/CoveHighlights";
import { CoveMenu } from "@/components/cove/CoveMenu";
import { CoveStory } from "@/components/cove/CoveStory";
import { CoveTypographyShowcase } from "@/components/cove/CoveTypographyShowcase";

export const metadata: Metadata = {
  title: "Cove Coffee — A Little Pause in Your Day",
  description: "Thoughtfully sourced coffee and fresh neighborhood favorites at Cove Coffee.",
};

export default function TestPage() {
  return (
    <main className="bg-[#f6f2e9] text-[#24372e]">
      <CoveHero />
      <CoveHighlights />
      <CoveMenu />
      <CoveTypographyShowcase />
      <CoveStory />
    </main>
  );
}
