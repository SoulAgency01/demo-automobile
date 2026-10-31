# SOUL GOLDEN TEMPLATE V3.0 — UNIVERSAL AGENT PLAYBOOK

## 1. PURPOSE OF THIS REPOSITORY
This repository is Soul Agency's **Golden Scrollytelling & SEO Master Template**. Whenever you (Cascade, Codex, or Gemini Argon) are instructed to build a website for a new client or showcase industry, **DO NOT delete the core engines**. Instead, re-theme and extend the existing 6 signature components via `src/config/siteConfig.ts`.

## 2. WHERE TO PUT & HOW TO MAXIMIZE EACH COMPONENT
1. **`src/config/siteConfig.ts` (First Stop for Every New Client):**
   - Swap `brandName`, `legalName`, `domain`, `industrySchemaType`, and `location` first. This automatically updates `SchemaMarkup.tsx` (JSON-LD), `app/robots.ts`, `app/sitemap.ts`, and `app/layout.tsx` OpenGraph tags.
2. **`SpatialParallaxHero.tsx` (Above-the-Fold 3-Plane Stage):**
   - **How it works:** Layer 1 (`z-0` Sky/Environment) moves slowly (`yPercent: 18`), Layer 2 (`z-10` Editorial Headline) sinks behind, and Layer 3 (`z-20` Foreground Structure/Product) rises (`yPercent: -14`).
   - **Rule:** Always keep `priority` and `fetchPriority="high"` on the hero `<Image>` components so **LCP stays < 2.5s**.
3. **`TextMaskPortal.tsx` (Pinned Scroll-Through Wordmark):**
   - **How it works:** Pins `100vh` for `+=220%` scroll distance while scaling `#soul-portal-knockout-mask` `<text>` from `1x` to `32x`.
   - **How to adjust:** If a client's brand name is longer than 10 characters, reduce `fontSize` inside `TextMaskPortal.tsx` from `230px` to `150px` so the letters fit inside the `1920x1080` SVG viewBox before scaling.
   - **GPU Rule:** Never remove the `autoAlpha: 0` tween at `0.65` progress—hiding the SVG mask once zoomed inside guarantees **INP < 200ms** on mobile.
4. **`AmbientHotspotStage.tsx` (Dynamic Lighting Switcher + Exploded SVG Specs):**
   - **How it works:** Switching `ambiencePresets` interpolates the radial background glow and CSS filter while SVG `<line>` and pulsing beacons point to exact `(x%, y%)` coordinates on the stage image.
   - **Where to use:** Use for Interior Design materials, Sneaker/Apparel tech callouts, Automotive features, or Gym/Bio-optimization equipment zones.
5. **`ReactiveBentoGrid.tsx` & `EditorialServiceRows.tsx`:**
   - **How it works:** High-contrast showcase grid with hover state inversion and dark-curtain interactive service rows.
   - **CLS Lock:** Every image wrapper MUST retain explicit `aspect-[...]` classes so **CLS remains 0.00**.
6. **`MaskedMegaFooter.tsx`:**
   - Renders an edge-to-edge SVG `<pattern>` image fill inside the client's brand wordmark.

## 3. MANDATORY HUGO SPEED TEST & SEO CHECKLIST BEFORE EVERY COMMIT
- [ ] `npm run build` passes with 0 TypeScript or ESLint errors.
- [ ] `src/app/robots.ts` and `src/app/sitemap.ts` are intact.
- [ ] `src/components/seo/SchemaMarkup.tsx` is rendered inside `src/app/layout.tsx`.
- [ ] All animations animate ONLY `transform`, `scale`, `opacity`, or `filter`.
