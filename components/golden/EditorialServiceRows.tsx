"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, ServiceRowItem } from "../../config/siteConfig";

export function EditorialServiceRows() {
  const [activeService, setActiveService] = useState<ServiceRowItem>(siteConfig.services[0]);

  return (
    <section
      id="services"
      className="relative w-full bg-[#120F0D] text-[#F5F2EB] py-28 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: DYNAMIC CROSSFADING ARCHITECTURAL VISUAL + DELIVERABLES (VIDEO 2 BUY/SELL/RENT) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/15">
            <Image
              key={activeService.id}
              src={activeService.image}
              alt={activeService.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-all duration-700 scale-100 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#D4A373]">
                {activeService.subtitle}
              </span>
              <p className="text-sm text-[#F5F2EB]/85 mt-2 leading-relaxed">
                {activeService.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {activeService.deliverables.map((del, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 border border-white/15"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: OVERSIZED INTERACTIVE TYPOGRAPHIC ROWS */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4A373] mb-6">
            DISCIPLINES OF MASTERY
          </span>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {siteConfig.services.map((srv) => {
              const isSelected = srv.id === activeService.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onMouseEnter={() => setActiveService(srv)}
                  onClick={() => setActiveService(srv)}
                  className="w-full py-8 flex items-baseline justify-between text-left group transition-all"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-xs font-mono text-[#D4A373]">{srv.index}</span>
                    <span
                      className={`font-serif text-[clamp(2.6rem,6vw,5.25rem)] leading-none transition-all duration-300 ${
                        isSelected
                          ? "text-[#F5F2EB] translate-x-3 italic"
                          : "text-[#F5F2EB]/35 group-hover:text-[#F5F2EB]/75"
                      }`}
                    >
                      {srv.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4A373]">
                    {isSelected ? "ACTIVE VIEW" : "INSPECT →"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
