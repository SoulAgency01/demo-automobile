import React from "react";
import { SpatialParallaxHero } from "../components/golden/SpatialParallaxHero";
import { TextMaskPortal } from "../components/golden/TextMaskPortal";
import { AmbientHotspotStage } from "../components/golden/AmbientHotspotStage";
import { ReactiveBentoGrid } from "../components/golden/ReactiveBentoGrid";
import { EditorialServiceRows } from "../components/golden/EditorialServiceRows";
import { MaskedMegaFooter } from "../components/golden/MaskedMegaFooter";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0D0B0A] overflow-x-hidden">
      <SpatialParallaxHero />
      <TextMaskPortal />
      <AmbientHotspotStage />
      <ReactiveBentoGrid />
      <EditorialServiceRows />
      <MaskedMegaFooter />
    </main>
  );
}
