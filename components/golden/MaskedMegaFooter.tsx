"use client";

import React from "react";
import { siteConfig } from "../../config/siteConfig";

export function MaskedMegaFooter() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#090807] text-[#F5F2EB] pt-24 pb-12 px-6 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4A373]">
              PRIVATE COMMISSIONS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Initiate a Conversation with Our Principal Architects.
            </h2>
            <p className="text-sm text-[#F5F2EB]/65 max-w-md">
              {siteConfig.location.streetAddress}, {siteConfig.location.city}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-serif italic text-2xl md:text-3xl text-[#D4A373] hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-xs font-mono uppercase tracking-widest text-[#F5F2EB]/60">
              DIRECT LINE: {siteConfig.contact.phone}
            </p>
          </div>
        </div>

        {/* GIANT EDGE-TO-EDGE IMAGE-MASKED SVG WORDMARK (VIDEO 2 FOOTER FINALE) */}
        <div className="w-full my-8 select-none">
          <svg
            viewBox="0 0 1400 260"
            className="w-full h-auto overflow-visible"
            aria-label={siteConfig.brandName}
          >
            <defs>
              <pattern
                id="footer-image-fill"
                patternUnits="userSpaceOnUse"
                width="1400"
                height="260"
              >
                <image
                  href={siteConfig.hero.backgroundSkyImage}
                  x="0"
                  y="-120"
                  width="1400"
                  height="520"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <text
              x="50%"
              y="78%"
              textAnchor="middle"
              fill="url(#footer-image-fill)"
              stroke="rgba(212,163,115,0.35)"
              strokeWidth="1.5"
              className="font-serif font-bold uppercase tracking-[0.06em]"
              style={{ fontSize: "210px" }}
            >
              {siteConfig.brandName}
            </text>
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#F5F2EB]/45 pt-6 border-t border-white/5">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}. ALL RIGHTS RESERVED.
          </span>
          <span>ENGINEERED ON SOUL GOLDEN TEMPLATE V3.0</span>
        </div>
      </div>
    </footer>
  );
}
