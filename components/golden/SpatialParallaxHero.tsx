"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "../../config/siteConfig";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SpatialParallaxHero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const skyLayerRef = useRef<HTMLDivElement | null>(null);
  const titleLayerRef = useRef<HTMLDivElement | null>(null);
  const cutoutLayerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Layer 1 (Background Sky): Slow deep parallax
      tl.to(
        skyLayerRef.current,
        {
          yPercent: 18,
          scale: 1.08,
          ease: "none",
        },
        0
      );

      // Layer 2 (Middle Display Typography): Sinks gently behind foreground
      tl.to(
        titleLayerRef.current,
        {
          yPercent: 38,
          opacity: 0.15,
          scale: 0.94,
          ease: "none",
        },
        0
      );

      // Layer 3 (Foreground Architectural Cutout): Rises faster for 3D depth separation
      tl.to(
        cutoutLayerRef.current,
        {
          yPercent: -14,
          scale: 1.05,
          ease: "none",
        },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[105vh] overflow-hidden bg-[#0D0B0A] text-[#F5F2EB] flex flex-col justify-between select-none"
    >
      {/* LAYER 1 (z-0): AMBIENT ENVIRONMENT SKY / BACKDROP (LCP < 2.5s LOCK) */}
      <div
        ref={skyLayerRef}
        className="absolute inset-0 z-0 will-change-transform pointer-events-none"
      >
        <Image
          src={siteConfig.hero.backgroundSkyImage}
          alt={siteConfig.brandName}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-45 brightness-75 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B0A]/70 via-transparent to-[#0D0B0A]" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
          <span className="font-serif tracking-[0.28em] text-sm uppercase text-[#F5F2EB]">
            {siteConfig.brandName}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em] text-[#F5F2EB]/75">
          <a href="#portal" className="hover:text-[#D4A373] transition-colors">
            Sanctuary
          </a>
          <a href="#materials" className="hover:text-[#D4A373] transition-colors">
            Materials
          </a>
          <a href="#masterworks" className="hover:text-[#D4A373] transition-colors">
            Masterworks
          </a>
          <a href="#services" className="hover:text-[#D4A373] transition-colors">
            Craft
          </a>
        </nav>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-[#F5F2EB]/10 hover:bg-[#D4A373] hover:text-[#0D0B0A] border border-[#F5F2EB]/20 backdrop-blur-md text-xs font-mono uppercase tracking-widest transition-all duration-300"
        >
          Inquire
        </a>
      </header>

      {/* LAYER 2 (z-10): MASSIVE EDITORIAL SERIF TYPOGRAPHY */}
      <div
        ref={titleLayerRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 md:pt-16 text-center will-change-transform"
      >
        <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.35em] text-[#D4A373] mb-4">
          {siteConfig.hero.eyebrow}
        </p>
        <h1 className="font-serif font-light tracking-tight leading-[0.92] text-[clamp(3.2rem,9.5vw,8.5rem)] text-[#F5F2EB]">
          <span className="block">{siteConfig.hero.headlineLine1}</span>
          <span className="block italic text-[#D4A373]">{siteConfig.hero.headlineLine2}</span>
        </h1>
      </div>

      {/* LAYER 3 (z-20): FOREGROUND ARCHITECTURAL STRUCTURE CUTOUT STAGE */}
      <div
        ref={cutoutLayerRef}
        className="relative z-20 w-full max-w-6xl mx-auto px-6 mt-4 md:-mt-8 will-change-transform"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-t-3xl overflow-hidden border-t border-x border-[#F5F2EB]/20 shadow-[0_-25px_90px_rgba(0,0,0,0.85)]">
          <Image
            src={siteConfig.hero.foregroundCutoutImage}
            alt={siteConfig.hero.headlineLine1}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/25 to-transparent" />

          {/* Bottom Floating Editorial Bar inside Foreground Layer */}
          <div className="absolute bottom-6 inset-x-6 md:inset-x-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="max-w-md text-xs md:text-sm text-[#F5F2EB]/85 leading-relaxed backdrop-blur-sm bg-black/35 p-4 rounded-xl border border-white/10">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#portal"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#D4A373] text-[#0D0B0A] text-xs font-mono uppercase tracking-widest font-semibold transition-transform duration-300 hover:scale-105"
              >
                {siteConfig.hero.ctaPrimary}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
