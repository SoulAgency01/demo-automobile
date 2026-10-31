"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, AmbiencePreset, HotspotSpec } from "../../config/siteConfig";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function AmbientHotspotStage() {
  const { ambiencePresets, hotspots, sectionEyebrow, sectionTitle, sectionSubtitle, stageImage } =
    siteConfig.hotspotStage;

  const [activeAmbience, setActiveAmbience] = useState<AmbiencePreset>(ambiencePresets[0]);
  const [activeHotspot, setActiveHotspot] = useState<HotspotSpec>(hotspots[0]);

  return (
    <section
      id="materials"
      className="relative w-full min-h-screen bg-[#0D0B0A] text-[#F5F2EB] py-28 px-6 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* DYNAMIC AMBIENT RADIAL LIGHTING SYNC (VIDEO 4 COLORWAY GLOW) */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 50% 52%, ${activeAmbience.glowRgba} 0%, rgba(13,11,10,0) 68%)`,
        }}
      />

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#D4A373] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {sectionEyebrow}
        </span>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,4.25rem)] leading-tight text-[#F5F2EB]">
          {sectionTitle}
        </h2>
        <p className="text-sm md:text-base text-[#F5F2EB]/70 mt-3 max-w-2xl mx-auto">
          {sectionSubtitle}
        </p>
      </div>

      {/* INTERACTIVE STAGE CONTAINER + EXPLODED SVG HOTSPOT CALLOUTS */}
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#161311]"
        >
          {/* Main Architectural/Product Stage Image (CLS = 0.00 Lock) */}
          <Image
            src={stageImage}
            alt={sectionTitle}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-all duration-700"
            style={{ filter: activeAmbience.imageFilter }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />

          {/* SVG CONNECTOR LINES (VIDEO 4 EXPLODED CALLOUT EFFECT) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {hotspots.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <g key={spot.id}>
                  <line
                    x1={spot.x}
                    y1={spot.y}
                    x2={spot.anchorX}
                    y2={spot.anchorY}
                    stroke={isSelected ? activeAmbience.accentHex : "rgba(255,255,255,0.28)"}
                    strokeWidth={isSelected ? "0.35" : "0.18"}
                    strokeDasharray="1.2 0.8"
                  />
                  <circle
                    cx={spot.anchorX}
                    cy={spot.anchorY}
                    r="0.6"
                    fill={isSelected ? activeAmbience.accentHex : "white"}
                  />
                </g>
              );
            })}
          </svg>

          {/* PULSING HOTSPOT BEACONS */}
          {hotspots.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <div
                key={spot.id}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(spot)}
                  aria-label={spot.label}
                  className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/40 transition-transform duration-300 hover:scale-125"
                  style={{
                    borderColor: isSelected ? activeAmbience.accentHex : "rgba(255,255,255,0.35)",
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-full animate-ping absolute"
                    style={{ backgroundColor: activeAmbience.accentHex }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full relative"
                    style={{ backgroundColor: isSelected ? activeAmbience.accentHex : "#FFFFFF" }}
                  />
                </button>
              </div>
            );
          })}

          {/* ACTIVE SPEC CALLOUT CARD OVERLAY */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHotspot.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md p-5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 z-30"
            >
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <span
                  className="text-[10px] font-mono uppercase tracking-[0.25em]"
                  style={{ color: activeAmbience.accentHex }}
                >
                  SPECIFICATION CALLOUT · {activeAmbience.badgeText}
                </span>
                <CheckCircle2
                  className="w-4 h-4 shrink-0"
                  style={{ color: activeAmbience.accentHex }}
                />
              </div>
              <h3 className="font-serif text-xl text-[#F5F2EB]">{activeHotspot.label}</h3>
              <p className="text-xs md:text-sm text-[#F5F2EB]/75 mt-1 leading-relaxed">
                {activeHotspot.detail}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CURVED TRACK AMBIENCE / COLORWAY CONTROLLER (VIDEO 4 BOTTOM ORBIT TRACK) */}
        <div className="mt-10 flex flex-col items-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-full bg-[#161311] border border-white/10 shadow-xl">
            {ambiencePresets.map((preset) => {
              const active = preset.id === activeAmbience.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActiveAmbience(preset)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "bg-[#F5F2EB] text-[#0D0B0A] font-semibold shadow-lg scale-105"
                      : "text-[#F5F2EB]/65 hover:text-[#F5F2EB]"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: preset.accentHex }}
                  />
                  {preset.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
