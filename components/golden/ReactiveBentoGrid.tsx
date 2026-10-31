"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "../../config/siteConfig";
import { ArrowUpRight } from "lucide-react";

export function ReactiveBentoGrid() {
  return (
    <section
      id="masterworks"
      className="relative w-full bg-[#0D0B0A] text-[#F5F2EB] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* LIVE METRIC TICKER BAR (VIDEO 3 HIGH-CONTRAST STATS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20 border-b border-white/10">
          {siteConfig.metrics.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14110F] border border-white/10 flex flex-col justify-between"
            >
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4A373]">
                VERIFIED BENCHMARK 0{idx + 1}
              </span>
              <div className="font-serif text-5xl md:text-6xl font-light text-[#F5F2EB] mt-4">
                {stat.value}
                <span className="text-[#D4A373]">{stat.suffix}</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#F5F2EB]/65 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION HEADING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-20 mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4A373]">
              CURATED MONOLITHS
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-none mt-2">
              Selected Commissions
            </h2>
          </div>
          <p className="max-w-sm text-xs md:text-sm text-[#F5F2EB]/70">
            Hover over any commission to inspect spatial volume and architectural typology.
          </p>
        </div>

        {/* 6-CELL / 4-CELL REACTIVE LASER-GLOW BENTO GRID (VIDEO 3 "NEW DROPS" HOVER STATE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.bentoDrops.map((item) => (
            <article
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-[#151210] border border-white/10 transition-all duration-500 hover:border-[#D4A373] hover:shadow-[0_0_55px_rgba(212,163,115,0.28)] ${
                item.colSpan === "2" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Reactive Crimson/Amber State Inversion Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-[#0D0B0A]/35 to-transparent transition-colors duration-500 group-hover:from-[#2A1810]/90" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/65 backdrop-blur-md border border-white/15 text-[#D4A373]">
                    {item.tag}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md text-[#F5F2EB]">
                    {item.metric}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#F5F2EB] group-hover:text-[#D4A373] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#F5F2EB]/75 mt-1 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#F5F2EB]/10 group-hover:bg-[#D4A373] group-hover:text-[#0D0B0A] flex items-center justify-center border border-white/20 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
