"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { siteConfig } from "../../config/siteConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TextMaskPortal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgMaskWrapperRef = useRef<HTMLDivElement | null>(null);
  const svgTextRef = useRef<SVGTextElement | null>(null);
  const quoteOverlayRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1,
        },
      });

      // Scale SVG masked wordmark from 1x to 32x so camera flies inside the letters
      tl.to(
        svgTextRef.current,
        {
          scale: 32,
          transformOrigin: "50% 50%",
          ease: "power2.inOut",
        },
        0
      );

      // Fade out the dark SVG mask curtain past 70% progress to free mobile GPU (INP < 200ms lock)
      tl.to(
        svgMaskWrapperRef.current,
        {
          autoAlpha: 0,
          ease: "power1.out",
        },
        0.65
      );

      // Reveal full-screen architectural quote once inside the video portal
      tl.fromTo(
        quoteOverlayRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, ease: "power2.out" },
        0.68
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="portal"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0D0B0A] select-none"
    >
      {/* FULL-BLEED BACKGROUND AERIAL VIDEO */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.portal.posterImage}
          className="w-full h-full object-cover brightness-90 contrast-105"
        >
          <source src={siteConfig.portal.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* REVEALED QUOTE OVERLAY INSIDE PORTAL */}
      <div
        ref={quoteOverlayRef}
        className="invisible opacity-0 absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
      >
        <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#D4A373] mb-4">
          {siteConfig.portal.captionTop}
        </span>
        <h2 className="max-w-4xl font-serif italic text-[clamp(2rem,5vw,4.5rem)] text-[#F5F2EB] leading-tight">
          &ldquo;{siteConfig.portal.overlayQuote}&rdquo;
        </h2>
      </div>

      {/* SVG KNOCKOUT MASK CURTAIN (VIDEO 2 "FIND" PORTAL EFFECT) */}
      <div
        ref={svgMaskWrapperRef}
        className="absolute inset-0 z-20 w-full h-full will-change-transform"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="soul-portal-knockout-mask">
              {/* White reveals the dark curtain; Black cuts out the transparent letter portal */}
              <rect width="1920" height="1080" fill="white" />
              <text
                ref={svgTextRef}
                x="50%"
                y="52%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="black"
                className="font-serif font-bold uppercase tracking-[0.06em]"
                style={{ fontSize: "230px" }}
              >
                {siteConfig.portal.maskWord}
              </text>
            </mask>
          </defs>
          <rect
            width="1920"
            height="1080"
            fill="#0D0B0A"
            mask="url(#soul-portal-knockout-mask)"
          />
        </svg>

        {/* Top & Bottom Portal Frame Captions */}
        <div className="absolute top-12 inset-x-0 text-center pointer-events-none">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#F5F2EB]/60">
            {siteConfig.portal.captionTop}
          </span>
        </div>
        <div className="absolute bottom-12 inset-x-0 text-center pointer-events-none">
          <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#D4A373]">
            {siteConfig.portal.captionBottom}
          </span>
        </div>
      </div>
    </section>
  );
}
