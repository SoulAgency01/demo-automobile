# THE AESTHETIC LAB
## Master Product Requirements Document — Luxury Automotive Digital Atelier

**Project:** The Aesthetic Lab — Kerala, India  
**Product class:** Premium ₹50,000+ commissioned web experience (project positioning, **not** a quoted service price)  
**Document version:** 1.0 | **Prepared:** 31 October 2026  
**Status:** Production-ready engineering brief; client identity, proof, assets and service claims still require sign-off  
**Owner:** Product / Systems Architecture / Creative Direction  
**Routes:** `/`, `/builds`, `/contact`  
**Canonical deliverable:** This `PRD.md` is the authoritative build specification for all five Codex stages.

> **Implementation rule:** Do not invent customer projects, local addresses, business phone numbers, workmanship certifications, coating metrics, partnerships, or ownership of photographed vehicles. Content explicitly identified as sample must not ship as a factual claim.

---

## 0. Executive directive and definition of done

Build a high-craft, fast, accessible, SEO-ready automotive website that combines the engineered precision of **Mecha XYZ** with the cinematic automotive atmosphere of **Forge Automotive**, while maintaining an original visual identity for **The Aesthetic Lab**. It must feel like an advanced automotive surface laboratory, rather than a commodity car-wash or detailing template.

### 0.1 Business positioning

- **Primary services:** Paint Protection Film (PPF), ceramic coating, graphene coating (only when genuinely offered), paint correction, and precision automotive restoration/care.
- **Conditional services:** Mechanical work and body styling may be described only if the client confirms capability and relevant staff/processes. Otherwise use “Surface Restoration & Finish Correction” and conceal mechanical claims.
- **Market:** Luxury-vehicle owners in the confirmed Kerala service area; editorial fleet includes BMW M340i/M4/5 Series, Mercedes-AMG/E-Class/G-Class, Mini Cooper JCW, Land Rover Defender, Porsche 911, and Lamborghini Urus. Audi may appear in the non-affiliation vehicle marquee.
- **Audience motivation:** Protect expensive finishes, preserve condition, obtain meticulous workmanship, and trust a studio handling high-value cars.
- **Conversion:** Make a qualified consultation / vehicle-care enquiry through the contact form, call, or confirmed WhatsApp business link.

### 0.2 User goals and non-goals

| ID | Goal | How success is judged |
|---|---|---|
| G1 | Trust and differentiation | User comprehends premium positioning and core services within the first viewport |
| G2 | Technical confidence | Service details provide validated technology, process, exclusions and service-specific specifications |
| G3 | Visible craft | Licensed original-grade car/workshop photography contextualizes actual surface treatments |
| G4 | Low-friction conversion | Keyboard/mobile-accessible contact flow succeeds with explicit confirmation |
| G5 | Search discovery | Crawlable, unique page content + accurate local structured data + sitemap |
| G6 | Speed | Premium motion without sacrificing responsive input, accessible fallback or first paint |
| NG1 | E-commerce | No checkout, deposit system, or online product configurator in v1 |
| NG2 | Unverified claims | No fabricated “100%” coating proof, OEM certification, past client builds, or guarantees |
| NG3 | Reference duplication | No copying another studio's source code, photography, brand assets, or pixel-identical visual trade dress |

### 0.3 Global acceptance contract

1. Three public routes work independently via direct load, internal navigation, refresh, mobile and keyboard.
2. 29 *unique curated photographic assets* are planned by the registry in §5; deployment uses only rights-cleared assets. Temporary local placeholders are permitted in development but not misrepresented as client work.
3. All sections work with JavaScript enhancements disabled where possible; meaningful text, links, image alts, form labels, and page landmarks are in server-rendered HTML.
4. Motion is smooth at supported device tiers, offers `prefers-reduced-motion` support and gracefully degrades on weak devices.
5. Contact form is a functioning server-side flow, not decorative.
6. No false performance claim: lab and real-user measurements are recorded independently after each stage.
7. Every stage generates a measurement report, issue list, and decision to **PASS**, **PASS WITH MITIGATION** or **BLOCK**.

---

## 1. Source inspection: verified evidence vs prescribed effects

### 1.1 Primary references

- **Forge:** https://forgeautomotive.co.uk/ ; https://forgeautomotive.co.uk/builds/ ; https://forgeautomotive.co.uk/contact/
- **Mecha:** https://mecha-xyz.webflow.io/

**Verified from retrievable public page structure on 31 October 2026:**

| Reference | Verified page elements | Interpretation for this project |
|---|---|---|
| Forge home | A multi-image automotive introduction, workshop/vehicle assets, brand-logo image collection, “Identity / Insight / Cohesion” editorial stack, service imagery and project CTA | Source for visual density, vehicle atmosphere, curated multi-layer narrative |
| Forge `/builds/` | Editorial intro and numerous individually named vehicle build entries, images, concise descriptions and project CTAs | Source for staggered vehicle gallery architecture |
| Forge `/contact/` | Hero photography, strong invitation, phone/email/appointment information and photographic brand elements | Source for image-led contact route |
| Mecha home | Numbered investments, category tags, `MORE` triggers, repeated gallery imagery, project statistics, `Previous / Next` labels, and a contact form | Source for numbered card anatomy, specification presentation, interaction vocabulary and minimal input structure |

**Not independently proven by static retrieval:** animation code, internal DOM/GSAP timeline configuration, precise preloader wait times, canvas architecture, scroll-velocity calculations, drawer focus behavior, exact transition easing, and frame-accurate image masks. These are **user-provided creative requirements**, not reverse-engineering claims. The implementation must be verified in a real browser at stage QA, not presented as source-code extraction or guaranteed identical behavior.

**Creative boundary:** Reinterpret *principles*, not actual logos, written copy, proprietary code, unique compositional trademarks, or photography from the references without written rights. Do not position the finished project as endorsed by Mecha or Forge.

### 1.2 Design synthesis

**Mecha-derived:** Swiss grid, large optical margins, thin structural rules, technical `├──` markers, indexed service rails, swipeable horizontal image cards, `MORE` drawers with technical tables, `+` accordions, editorial type contrast.

**Forge-derived:** cinematic opening, preloader photo strip, scroll-coupled vehicle depth, metal-emblem marquee, progressive word illumination, architectural narrowing photography, triple narrative sticky panels, dispersed parallax assets, route transition curtain, scaling portfolio imagery, photographic contact framing.

**Original signature:** Blackstone engineering grid + off-white clinic drawers + rare electric-lime precision signals, studio-quality photographic narrative, a single coherent motion grammar, and factual local automotive service information.

---

## 2. Product architecture and information architecture

### 2.1 Routes and intent

| URL | Primary experience | H1 intent | SEO role | Conversion |
|---|---|---|---|---|
| `/` | Preloader → Hero → brand marquee → manifesto/identity → surface services → package sliders → selected builds → contact CTA | One original, naturally readable service/location headline | Primary Kerala luxury automotive protection landing page | Book an assessment |
| `/builds` | Photographic hero → curated vehicle project catalogue → project overlays or genuine detail sections → enquiry CTA | Vehicle surface-protection projects / work | Real image-led portfolio and trust signals | Discuss a similar finish |
| `/contact` | Full-bleed workshop photo → technical enquiry form → verified address/contact details → cropped wordmark | Contact the studio | Conversion and authentic local entity details | Submit / call / WhatsApp |

Use normal `<a>` / Next.js `Link` navigation. Provide one discoverable semantic `<nav>` with visible links available independently of the animated overlay. Hero CTA must have a functional destination. Route changes must preserve accessible focus management.

**URL convention:** no trailing slash unless project configuration explicitly standardizes it; canonical, sitemap and redirects must agree. Avoid indexing `/builds?filter=...` variants; filters live in client state.

### 2.2 Homepage content order

1. **Global chrome:** minimal logotype, location/discipline meta, menu trigger, accessible skip link.
2. **S0 Preloader:** counter and 10-photo ribbon, non-blocking enhancement.
3. **S1 Hero:** studio automotive poster + 2.5D depth; immediate actual H1 + concise subcopy + CTA.
4. **S2 Crest marquee:** seven emblem positions with supporting non-endorsement language.
5. **S3 Molecular Shield manifesto:** sequential word highlight, narrowing studio photo, identity/intent/cohesion sticky narrative.
6. **S4 Service atelier:** scattered 9:16 photography, three indexed horizontal service sliders and spec drawers, plus craft/process accordions.
7. **S5 Selected works teaser:** 3–5 verified or clearly demonstrative projects linking to `/builds`.
8. **S6 Final consultation CTA:** atmospheric image, service promise, verified contact destination.
9. **Footer:** accessible navigation, legal/privacy, true contact details, trademark disclaimer.

`/builds` and `/contact` are full pages, not mere scroll anchors. Use the same global style and navigation grammar.

### 2.3 Information accuracy and launch dependencies

`PENDING_CLIENT_VERIFICATION` fields: legal/trade name, publicly usable logo, registered/operating address, city/district, postal code, lat/long, business hours, phone with `+91` country code, monitored enquiry email, WhatsApp consent/link, domain, social profiles, actual service list, warranty terms, brands of film/coatings, package names and real price policy, aftercare instructions, signed vehicle photo releases, and genuinely completed jobs. The site can be built with typed development fixtures; production publishing is blocked until required real-world details are approved.

---

## 3. Art direction: tokens, spacing and composition

### 3.1 Color architecture

The title “60–30–7–3 calibration” describes the aesthetic intent; the **operative final allocation** is **~70% primary combination, ~27% supporting tones and strictly <3% lime**. These are visual-composition guidelines, not machine-testable pixel ratios.

| Token | Hex | Function |
|---|---|---|
| `blackstone` | `#212529` | Main architectural surface, service rails, dark panels |
| `whiteout` | `#E9ECEF` | Core readable headings, illuminated text |
| `jet-black` | `#0A0A0A` | Hero environment, preloader, photo scrims |
| `chrome-silver` | `#C9D0D6` | Metal accents, logos subject to rights, hairlines at low opacity |
| `smoke-gray` | `#6F7780` | Resting text and unilluminated manifesto words |
| `off-white` | `#F7F7F5` | Clinical light spec panels only |
| `electric-lime` | `#C7FF2E` | Strictly minimal telemetry and interactions |

Required `tailwind.config.ts` colors (use a version-compatible Tailwind setup; Tailwind 3 config is acceptable when this file is required):

```ts
// Extract inside theme.extend.colors of tailwind.config.ts
colors: {
  blackstone: '#212529',
  whiteout: '#E9ECEF',
  'jet-black': '#0A0A0A',
  'chrome-silver': '#C9D0D6',
  'smoke-gray': '#6F7780',
  'off-white': '#F7F7F5',
  'electric-lime': '#C7FF2E',
}
```

Global CSS variable parity: `--color-blackstone`, `--color-whiteout`, `--color-jet-black`, `--color-chrome-silver`, `--color-smoke-gray`, `--color-off-white`, `--color-electric-lime`. Hairline: `1px solid rgb(201 208 214 / 0.20)`; verify contrast separately for text and interactive hit targets.

**Lime allowlist only:** numbered active slide index, `├──` marker details, *selective* scientific keywords, drawer/accordion active affordance, preloader progress, single CTA directional arrow, focus indication (with robust accessibility). No lime-coated giant blocks, entire headings, full background, or permanent large strokes.

### 3.2 Typography

| Variable | Selected font | Loading | Placement |
|---|---|---|---|
| `--font-display` | Space Grotesk 500/700 | `next/font/google`, `display: 'swap'` | Hero, build names, service headers |
| `--font-editorial` | Instrument Serif regular/italic | Deferred or limited preloading | Manifesto spotlight, drawer title |
| `--font-sans` | Plus Jakarta Sans 400/500/600 | `next/font/google`, `display: 'swap'` | Body, form, long descriptions |
| `--font-mono` | JetBrains Mono 400/500 | Deferred or limited preloading | `├──`, counters, table rows, numbered slides |

Alternative `Unbounded` display only after an A/B readability test; do not ship two display families. Preload *only* critical subsets/font files, establish fallback metric adjustment, fixed line-heights and wrapping envelopes. `next/font` helps reduce font-related layout shift but **does not mathematically guarantee CLS 0.00**.

- Hero display: `clamp(3.2rem, 7.5vw, 9rem)`, weight 700, line-height `0.88–1.0`, uppercase, intentional editorial wrapping.
- Section display: `clamp(2.2rem, 5vw, 6rem)`; editorial italic contrast limited to specific phrases.
- Detail body: `clamp(0.94rem, 1vw, 1.1rem)` / 1.5–1.7 line-height.
- Mono index/label: 10–12px, tracked uppercase, minimum readable contrast.
- Avoid squeezed or clipped body copy on narrow screens; display max width follows viewport rather than fixed SVG lettering.

### 3.3 Architectural layout contract

| System | Desktop ≥1200px | Tablet 768–1199px | Mobile <768px |
|---|---|---|---|
| Grid | 12 columns, max content width 1600px | 8 columns | 4 columns |
| Edge padding | `clamp(32px, 4.5vw, 88px)` | 28–40px | 16–22px |
| Section spacing | 128–200px contextual | 88–128px | 72–104px |
| Gaps | 16–32px | 12–24px | 12–16px |
| Hairline border | 1px structural horizontal and selected vertical separators | horizontal dominant | horizontal dominant |
| 9:16 parallax image | `min(25vw, 540px)` in side rails | 28–38vw if space permits | within content, static/reduced motion |
| Drawer | 42–52vw wide with min ~520px / max ~820px | 70–85vw | 100vw full-height sheet |
| Touch controls | ≥44×44 CSS px | ≥44×44 | ≥44×44 |

Display technical tags using the literal design language `├── 01 / ARCHIVE`, `├── 02 / MOLECULAR SHIELD`, `├── 03 / LAB PACKAGES`, `├── 04 / BUILDS`. The line should be a real border or flex item rather than fake text fragments. Pill-pair: `( KERALA AESTHETIC LAB ) ─── ( PPF & CERAMIC ENGINEERING )`, collapsing to two lines or stacked labels on mobile. Avoid overlapping decorative text and hit targets.

### 3.4 Photography and treatment

- Black/gray studio scenes, controlled tungsten/white rim lights, glossy reflections, credible Kerala-luxury vehicle models, precise surface-care process photography.
- Each crop needs a designated dark safe area for white type and meaningful focal point on the car/craft.
- Do not artificially imply coatings are being applied to a specific car if the paired image is unrelated; group images truthfully.
- Avoid recognizable customer registration plates, names or faces without permission. Blur plates in licensed source files if releases absent.
- Provide real descriptive image alt text. Pure atmosphere images may use `alt=""` if redundant. No keyword stuffing.

---

## 4. Interaction and motion system (Peak 2.5D)

### 4.1 Governing animation rules

- **One primary animation orchestrator:** GSAP + ScrollTrigger loaded only in client component boundaries, dynamically when needed; use CSS transitions for simple hover/focus. Do not mix uncoordinated Framer Motion, multiple smooth-scroll engines and GSAP loops.
- **No mandatory smooth-scroll hijack:** preserve native scroll and scroll restoration; only introduce a scroll manager when actual device profiling proves safe.
- Animate `transform` and `opacity` first; clip masks are permitted when measured. `clip-path` is **not universally cheap or compositor-only**; profile it. Never animate layout width/height on scroll.
- Motion progress derives from scroll or elapsed state, not arbitrary scroll event work. Updates consolidated through a single rAF scheduler; avoid React state updates per frame.
- Load GSAP on demand; use `gsap.context()` cleanup, `ScrollTrigger` lifecycle cleanup and responsive `matchMedia` branches. Observe visibility to pause/disable off-screen *non-pinned* animations; do not disable pinned sequences mid-pin, which would jump layout. Resume and refresh safely when re-entering.
- Canvas only when progressive enhancement is justified. An HTML image poster remains visible/meaningful without canvas.
- Respect `prefers-reduced-motion: reduce`, background tabs, low-power devices, and viewport changes.

### 4.2 S0 — Preloader: Mecha counter + Forge photo ribbon

**Composition:** `#0A0A0A` surface; horizontal/overlapping strip of 10 portrait image cards with deliberate staggering; anchored bottom-left mono marker `├──` and numeric `00 → 100`, narrow 1px lime progress line. End with vertical clip-reveal of page content. Logo may appear, but loading sequence should not become a second advertisement.

**State machine:** `initial → assets_requested → poster_ready → reveal → complete` plus `skip/reduced_motion`. Count value can visually animate but **100 must not falsely communicate download completion**; complete when first hero poster is decoded/usable or after fail-safe release. Recommended visual cap 800–1500ms on normal fast loads; hard escape ≲2.5s and instant skip available to keyboard users. Avoid fixed multi-second blank waits. Do not fetch 10 ribbon images at high priority; use reduced-size thumbnails and load them after the hero poster request has begun. Do not preloader-mask bots with browser-agent sniffing.

**Pass:** actual main heading/image appear in server HTML, image available without JavaScript, no page trap, appropriate `aria` treatment for decorative ticker, no false progress dependence, reduced-motion skips animation.

### 4.3 S1 — Scroll-scrubbed automotive hero

**Scene:** A dark flagship car in a studio; selectable subject BMW M340i / Defender / Urus depending on licensed hero media. Static first poster as real `<Image>` in server HTML; layer ambient reflection, directional glow, optional background masks and foreground editorial H1.

**Hero steps:** (a) poster and H1 paint immediately; (b) masked title lines rise 24–64px into position as CSS/GSAP enhancement; (c) scroll maps a bounded `0→1` timeline over approximately 120–200vh desktop; (d) vehicle image scales about `1.00→1.12` and translates slightly while lighting/background planes move at lesser offsets to create parallax depth; (e) final stage yields cleanly to marquee. These values are initial calibration, not a claim about the Forge implementation.

**Optional Peak mode:** one image sequence / lightweight canvas on high-end desktop only, lazy import after poster paint and gated by runtime frame profiling. If a *dual* canvas is used, both canvases must be paused outside the hero and never run parallel perpetual loops without demonstrated need. Do not allocate 30 full-resolution uncompressed animation frames. Build WebP/AVIF frame sets and cap decoded memory; prioritize the poster, not the entire sequence.

**Fallback order:** native static poster → layered CSS `translate3d/scale` → optional frame sequence. If low-memory, reduced motion, poor FPS, or WebGL/canvas failure: preserve the static poster and reveal H1/CTA.

### 4.4 S2 — Metallic automotive crest marquee

Seven monochrome logos: BMW, Mercedes-Benz, Porsche, Lamborghini, Mini, Land Rover, Audi. Use rights-cleared official logos or permissible brand-name text with correct nominative disclaimer. Continuous horizontal motion runs with **CSS transform** on track, duplicated visual slots for seamless looping, and `aria-hidden` on redundant duplicates. Velocity modulation is optional and bounded (never dizzying); pause on hover and keyboard focus, and stop under reduced motion. Show semantics as a separate heading describing vehicle experience, not formal partnerships.

### 4.5 S3 — Molecular Shield manifesto + narrowing image + identity switcher

1. **Word scrub:** Split visible editorial text into semantic words while preserving a readable, unsplit accessible string; screen readers see one logical sentence. Progressively light words from `#6F7780` to `#E9ECEF`, with 1–3 highlighted scientific terms in `#C7FF2E`. Thresholds should advance smoothly as the section crosses viewport; no one-trigger-per-letter overhead.
2. **Narrowing photograph:** full-bleed studio image on sticky backdrop; reveal margin by `scaleX(1→0.76)` with an appropriately compensated inner image or `clip-path: inset(0 12%)`, whichever profiles better. The image container reserves geometry beforehand; no layout-shifting `width` animation.
3. **Three visual states:** `01 Identity`, `02 Intent`, `03 Cohesion`. Change text, side photo and ambient lighting when scroll thresholds pass; crossfade photographs with bounded opacity and GPU transforms. Each state is backed by an actual image from Bucket B and meaningful explanatory text.
4. **Accessibility:** same text is available without motion; no essential content hidden in opacity 0 before client JS; sticky sections become stacked static cards for reduced motion/mobile.

**Sample original copy:** “Every surface holds a standard. Every reflection reveals the work behind it. Protection should feel almost invisible.” Editorial text is provisional.

### 4.6 S4 — Services + 9:16 parallax gallery + horizontal sliders

A background montage of **nine** portrait images arranged in left/right vertical rails and occasional background columns. Staggered y offsets for depth, ~`±24–110px` across each image's local passage, bounded to prevent overlap. Use `object-fit: cover`, layer isolation, restrained opacity scrims and native responsive `sizes`. The montage must not obstruct service headings or controls. The slider rails appear in foreground with meaningful whitespace.

Three numbered treatment groups:

| Index | Rail title | Offer categories | Drawer technical subject |
|---|---|---|---|
| `01` | MOLECULAR SHIELD / PPF | Front-end coverage, high-impact package, full-body wrap when offered | Film construction, thickness, finish, protection scope, maintenance, exclusions |
| `02` | CERAMIC / GRAPHENE | Ceramic coating, graphene-based coating only if stocked, surface maintenance | Product-specific hardness test, hydrophobic characteristics, cure/aftercare, durability conditions |
| `03` | RESTORATION & FINISH | Multi-stage paint correction, swirl reduction, trim/paint restoration | Inspection process, machine polishing stages, finish goals, measurement disclaimer |

**Rail anatomy:** top 1px rule; left monospace number; center title and tag chips; right keyboard-focusable `MORE` button; horizontal draggable card strip beneath. Cards have fixed aspect-ratio wrappers, captions and an optional directional indicator. Touch swipes use native horizontal scrolling with CSS scroll-snap; optional pointer-drag behavior must not suppress vertical mobile scrolling. Mouse drag must not accidentally navigate links. Arrow buttons and keyboard interaction provide equivalent navigation.

**Technical drawer:** fixed panel overlay, close control reading `Close ──┤`, title, lead service image, concise scope, real product/material rows, footnotes and `PREVIOUS | NEXT` navigation; background has reduced-opacity overlay. Visual surface `#F7F7F5`, text `#212529`, chrome borders. Use valid `<dialog>` or accessible dialog equivalent: `role="dialog"`, `aria-modal`, initial focus, tab containment, Escape close, return focus to opener, lock background scroll without lost scroll position, sufficient mobile top/bottom safe areas. Previous/Next cycles *within a given service group* and announces updated title to assistive technology. Route changes close overlays cleanly.

**Example rows — DEVELOPMENT FIXTURES ONLY, NOT PUBLISHABLE FACTS:**

| Key | Illustrative UI value | Publication rule |
|---|---|---|
| Film thickness | `210 μm` | Use only with identified product data sheet; may vary by layer/product |
| Self-healing recovery | `100%` | Do **not** publish without a credible test method and legitimate qualifier; otherwise explain self-healing qualitatively |
| Gloss retention | `98%` | Requires measurable, product-specific study and conditions; otherwise remove |
| Water-contact angle | `115°` | Requires manufacturer/testing evidence and test conditions; otherwise remove |
| Coating hardness | `9H` / `10H` | Only product-specific pencil-hardness claim with method and disclaimer; **not** equivalent to scratch-proof paint |

Use honest replacement labels when proof is unavailable: “Film construction”, “Self-healing technology”, “Surface finish”, “Aftercare requirements”, “Coverage area”, “Inspection protocol”. Do not claim universal chemical performance, lifetime protection, manufacturer certification or complete scratch immunity.

**Accordions:** `+` square controls for process stages (Inspection, Preparation, Application, Finishing, Aftercare) and optionally actual technicians if identities and consent confirmed. Animated panel height only on discrete open/close, not scroll; `aria-expanded`, `aria-controls`, no trapped focus, thumbnail and semantic text. Reduce motion uses instant toggles.

### 4.7 S5 — Menu and transitions

Navigation trigger opens an edge-to-edge `#0A0A0A` overlay with staggered oversized links `HOME / BUILDS / CONTACT`. A subtle photo layer and index metadata add atmosphere. Entry: overlay clip/transform reveal 350–650ms; route leave: 250–450ms only if it does not delay input or native navigation. Navigation must still work on slow devices, browser back, new-tab/modified click, direct refresh and reduced motion. Scroll locking, ESC close, focus trap and focus return are mandatory. Animated page transitions are optional enhancements: never block loading on a prolonged black curtain.

### 4.8 S6 — Builds gallery and card scaling

- `/builds` opens with atmospheric workshop/car photograph, technical marker `├── 04 / BUILDS`, title and one useful paragraph describing only genuine work.
- Six hero project image slots: BMW M340i, Mercedes E-Class/AMG, Mini JCW, Defender, Urus, Porsche 911. The owner must supply a signed portfolio-use right and accurate description before calling any image a completed project. Otherwise label page “Concept Gallery” / “Selected Treatments” rather than claiming before/after job history.
- Card layout alternates wide photography and short copy; internal image moves/scales `1.08→1.00` within overflow mask, with title/metadata translating a few pixels. Transform never grows beyond card and should not change document dimensions.
- Add treatment/finish tag, year only if true, scope, materials only if verified, optional location only with approval; avoid vehicle owner identification.
- Card can open a semantic detail drawer or future dedicated route only if a meaningful detail page exists; no dead “View build” CTA.

### 4.9 S7 — Photographic contact page

Full-height dark craft/car background with robust contrast scrim and oversized bottom-clipped `THE AESTHETIC LAB` wordmark. Foreground minimalist border-driven inputs. Fields: name, one contact method (phone or email), vehicle make/model (optional), service interest, message (optional), privacy acknowledgement (when legally required). Submit CTA `Send message ──┤`; lime only as the arrow/focus micro-accent.

Required states: idle, validation error, submitting, success, server-error, duplicate-submit protection. Form must work via a real server route/action, provide spam mitigation, server-side schema validation, protected API credentials and delivery/notification to the client. Never embed secret inbox credentials or expose private submissions publicly. No deceptive success for failures. Include verified public call and WhatsApp links only after client confirmation. Display working address/hours only when approved; otherwise omit them.

---

## 5. Production image registry: exactly 29 curated photographic sources

**Accounting:** A 10 + B 3 + C 9 + D 7 = **29 unique images**. Decorative duplicate usages and derivative responsive encodes do not add unique sources. CSS-generated overlays are not counted as photographs. Optional hero frame sequences are separate motion derivatives that must meet independent byte limits; do not use them to silently inflate initial network requests.

**Critical ratio correction:** `2880×2234` is approximately **1.29:1**, **not 16:9**. Treat this as the *source dimensions* for Bucket B and use `object-fit: cover` within a viewport-shaped reserved container; do not label it 16:9 or stretch it. `216×270 = 4:5`, `540×960 = 9:16`.

| ID | Crop / master minimum | Subject / editorial task | Placement / loading |
|---|---|---|---|
| A01 | 4:5 / 432×540+ | Technician hand starting precision PPF film laydown | Ribbon 01, deferred |
| A02 | 4:5 / 432×540+ | Matte black Urus detail | Ribbon 02, deferred |
| A03 | 4:5 / 432×540+ | BMW M340i headlight macro | Ribbon 03, deferred |
| A04 | 4:5 / 432×540+ | Defender in studio bay | Ribbon 04, deferred |
| A05 | 4:5 / 432×540+ | Ceramic applicator on panel | Ribbon 05, deferred |
| A06 | 4:5 / 432×540+ | Squeegee removing fluid under PPF | Ribbon 06, deferred |
| A07 | 4:5 / 432×540+ | Trim and body panel reflection | Ribbon 07, deferred |
| A08 | 4:5 / 432×540+ | Controlled workshop lighting | Ribbon 08, deferred |
| A09 | 4:5 / 432×540+ | Film finishing/edge treatment | Ribbon 09, deferred |
| A10 | 4:5 / 432×540+ | Water beading macro | Ribbon 10, deferred |
| B01 | 2880×2234 | Identity: black-on-black BMW/Defender studio composition | Sticky state 01, lazy near section |
| B02 | 2880×2234 | Intent: handwork/PPF film over sculpted bodywork | Sticky state 02, lazy near section |
| B03 | 2880×2234 | Cohesion: premium car finish and reflection geometry | Sticky state 03, lazy near section |
| C01 | 9:16 / 540×960+ | Urus profile reflection | Background left, lazy |
| C02 | 9:16 / 540×960+ | Film stretch/preparation macro | Background right, lazy |
| C03 | 9:16 / 540×960+ | Mini JCW gloss detail | Background left, lazy |
| C04 | 9:16 / 540×960+ | Technician inspecting paint | Background right, lazy |
| C05 | 9:16 / 540×960+ | Porsche surface highlight | Background left, lazy |
| C06 | 9:16 / 540×960+ | Hydrophobic water beading | Background right, lazy |
| C07 | 9:16 / 540×960+ | Mercedes panel finishing | Background left, lazy |
| C08 | 9:16 / 540×960+ | Paint-correction lighting check | Background right, lazy |
| C09 | 9:16 / 540×960+ | Defender wheel arch/film detail | Background transition, lazy |
| D01 | Landscape (e.g. 3:2) | BMW M340i flagship showcase | Builds gallery, lazy |
| D02 | Landscape (e.g. 3:2) | Mercedes-AMG/E-Class showcase | Builds gallery, lazy |
| D03 | Landscape (e.g. 3:2) | Mini Cooper JCW showcase | Builds gallery, lazy |
| D04 | Landscape (e.g. 3:2) | Land Rover Defender showcase | Builds gallery, lazy |
| D05 | Landscape (e.g. 3:2) | Lamborghini Urus showcase | Builds gallery, lazy |
| D06 | Landscape (e.g. 3:2) | Porsche 911 showcase | Builds gallery, lazy |
| D07 | Landscape (e.g. 16:9) | Dark craft studio with neutral text-safe area | Contact hero, first visible image on `/contact` |

**Important missing asset:** The homepage 2.5D hero poster should be a specifically optimized derivative of an existing licensed asset (e.g. B01/D01), not necessarily a 30th unique photo. Derivative receives an independent output filename and dimensions. The D07 contact asset is above-the-fold on `/contact` and therefore **must not be lazily loaded on that route**; the rule “only one hero is eager” applies **per route**. The 29-image count cannot justify delaying an actual route LCP image.

### 5.1 Registry implementation

Store in `src/content/media.ts` with `{id, src, alt, width, height, aspectRatio, focalPoint, licenseRef, usage, loadingIntent, mobileSrc?}`. Every `Image` component has stable dimensions or parent `aspect-ratio`, an accurate `sizes` value, and a licensed source. Use `next/image` optimization with AVIF/WebP where supported; art-direct with `<picture>` only when crop changes require it. `next/image` typically handles responsive `srcset` itself. Avoid declaring contradictory `priority`, `loading` and `preload` props. For the target Next.js version, use its documented equivalent (`preload` in current Next.js 16; legacy `priority` in v14/15) for a *single* route LCP image only.

**Example `sizes` policies:** preloader cards `"(max-width: 768px) 120px, 216px"`; side portrait `"(max-width: 768px) 82vw, (max-width: 1200px) 35vw, 25vw"`; build image `"(max-width: 768px) 100vw, 80vw"`. Use actual layouts rather than blindly copying strings.

**Indicative asset budgets (initial targets, not guaranteed file sizes):** mobile hero poster ≲180–250 KiB, desktop hero ≤350–500 KiB, ribbon thumbnails ≲15–25 KiB each, side photos ≲70–140 KiB per displayed responsive derivative, gallery photos ≲140–300 KiB depending on viewport, under an explicit aggregate route transfer budget. Optimize visually before indiscriminate compression. Do not use 2880px delivery to 540px slots.

**Prelaunch media QA:** licenses documented; no third-party hotlink dependency without permission; alt text; no distinctive watermark; correct crop; no exposed plates/private people; test dark scrim contrast; test 360/390/768/1440/1920 widths; verify every file loads on deployment CDN.

---

## 6. Technical architecture

### 6.1 Stack and boundaries

- **Framework:** current production-supported Next.js App Router, React, TypeScript strict mode. Pin actual versions and lockfile at Stage 1; do not assume a specific version merely because the reference used it.
- **Styling:** Tailwind with required `tailwind.config.ts` token definitions; CSS custom properties and component-scoped CSS for complex mask/grid effects. If Tailwind v4 is selected, consciously support config compatibility or obtain approval before deviating from the requested file.
- **Animation:** GSAP + ScrollTrigger lazy-loaded within client islands, CSS native scroll/scroll-snap, `IntersectionObserver`, rAF gating; optional desktop-only canvas sequence.
- **Images:** `next/image` and prepared AVIF/WebP variants, stable intrinsic ratios and responsive sources.
- **Fonts:** four next/font families in §3.2, limited initial preloading.
- **Validation:** server-side schema (e.g. Zod) plus appropriate client validation; anti-spam/rate-limit service compatible with hosting.
- **Deploy:** any Next.js-capable runtime hosting App Router/server handlers, ideally preview/staging and production environments. **Do not assume static-only hosting can process contact form actions.**
- **Observability:** Lighthouse CI or automated Lighthouse runs, Web Vitals RUM (privacy-aware), error telemetry without personal message bodies, Search Console once verified.
- **Tests:** TypeScript, ESLint, Playwright browser E2E, axe-core accessibility smoke tests, unit tests for schema/config/validation, Lighthouse CI or reproducible manual reports.

### 6.2 Proposed project tree

```text
src/
  app/
    layout.tsx                   # Fonts, metadata, root JSON-LD and global chrome
    page.tsx                     # Static semantic home content + client motion islands
    builds/page.tsx
    contact/page.tsx
    robots.ts
    sitemap.ts
    opengraph-image.tsx          # Or approved static route-specific OG assets
    api/contact/route.ts        # If using API route instead of server action
    globals.css
  config/site.ts                 # SINGLE source of factual client CONFIG
  content/media.ts              # 29-entry asset manifest
  content/services.ts           # validated service claims / content model
  content/builds.ts             # real/project-demo distinctions
  components/
    layout/Header.tsx Footer.tsx PageMenu.tsx SectionMarker.tsx
    hero/HeroPoster.tsx HeroMotion.client.tsx Preloader.client.tsx
    editorial/WordScrub.client.tsx NarrativeStack.client.tsx
    media/BrandMarquee.client.tsx ParallaxGallery.client.tsx
    services/ServiceRail.client.tsx SpecDrawer.client.tsx ProcessAccordion.tsx
    builds/BuildCard.client.tsx
    contact/EnquiryForm.client.tsx
  lib/
    motion/reduced-motion.ts motion/quality-governor.ts motion/observer.ts
    seo/schema.ts seo/metadata.ts
    analytics/web-vitals.ts
    validation/contact.ts
  styles/
    tokens.css motion.css
public/
  images/                     # licensed assets and derivative encodes
reports/
  stage-1.md stage-2.md stage-3.md stage-4.md stage-5.md
  vitals-baseline.json
  asset-audit.csv
  open-issues.md
```

Keep server-only components server-side by default. Client boundaries should be as narrow as possible. A static SEO-safe server heading must **not** be replaced by a client-only canvas.

### 6.3 Client-facing content models

**Service model:** `id`, `slug`, `name`, `summary`, `category`, `confirmed`, `products[]`, `processSteps[]`, `claims[]` with `sourceRef`, `coverage`, `aftercare`, `images[]`, `ctaLabel`. Hide claims without proof; no fake `100%` row.

**Build model:** `id`, `vehicleMake`, `vehicleModel`, `treatment`, `finish`, `isRealCompletedProject`, `photographyReleaseId`, `year?`, `description`, `images`, `alt`, `specs[]`. If `isRealCompletedProject` is false, show a transparent demonstrative/gallery label and exclude false review/portfolio claims.

**Site config:** city/district, exact address, business URL, phone, coordinates, hours and registration information drawn from a single typed configuration. Metadata, footer, contact route, sitemap and structured data all share this source.

### 6.4 Critical sample code: client-swappable factual config + schema

This is an architectural reference, not a substitute for validating business data. Put the **edit-in-one-place `CONFIG` object** in `src/config/site.ts` and import it at the top of `app/layout.tsx`; editing is centralized rather than duplicating facts in every route.

```ts
// src/config/site.ts
export const CONFIG = {
  name: 'The Aesthetic Lab',
  siteUrl: 'https://REPLACE-WITH-APPROVED-DOMAIN.example',
  phone: '',
  email: '',
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: 'Kerala',
    postalCode: '',
    addressCountry: 'IN',
  },
  geo: null as null | { latitude: number; longitude: number },
  priceRange: '₹₹₹₹',
  services: ['Paint Protection Film', 'Ceramic Coating', 'Paint Correction'],
  servesMechanicalRepair: false,
  isProductionVerified: false,
} as const;
```

```tsx
// app/layout.tsx (excerpt, schema adapter validates CONFIG before output)
import { CONFIG } from '@/config/site';
import { createLocalBusinessJsonLd } from '@/lib/seo/schema';

// ... metadata and font definitions ...
const businessJsonLd = createLocalBusinessJsonLd(CONFIG);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {businessJsonLd && (
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, '\\u003c') }} />
        )}
        {children}
      </body>
    </html>
  );
}
```

`createLocalBusinessJsonLd` returns `null` when required facts (actual address/name/domain) are unverified; only emit true fields. The requested `"@type": ["AutoRepair", "AutoBodyShop"]` is **conditional**: use that type array only if real auto repair and body-shop services both exist. For coating/PPF-only services use the closest truthful `AutomotiveBusiness` / `AutoBodyShop` subtype as supported, with a descriptive `Service`/`OfferCatalog` where appropriate; avoid portraying an exclusively cosmetic studio as a mechanical workshop. Google supports multiple valid local-business types, but the facts must match the page and actual organization.

**No production URL before approval.** Development/staging should be explicitly `noindex, nofollow` and access-controlled as appropriate; production robots/sitemap become indexable only once valid details, approved domain and substantive content are present.

### 6.5 Robots, sitemap and metadata

- `app/robots.ts`: allow `/` in production and expose absolute sitemap URL; disallow or set `noindex` correctly for staging (a robots disallow alone can obstruct discovery of a `noindex` directive). Do not include admin, API, preview or staging endpoints in the sitemap.
- `app/sitemap.ts`: exactly `/`, `/builds`, `/contact` for v1; proper base URL, valid `lastModified` **based on actual changes**, optional sensible `changeFrequency` and `priority` with no expectation of ranking improvement.
- `app/layout.tsx`: `metadataBase`, defaults for title/description, verified icons/OG, canonical strategy, viewport-safe defaults; use page-level metadata to make each route unique.
- Standard `<h1>` per page, descriptive headings, crawlable paragraph about PPF/ceramic/paint correction, no empty keyword-only heading stacks, named link CTAs.
- Site icon/OG images are additional designed assets, **not counted** in the 29 photographic source registry.
- Add `BreadcrumbList` only where visible page hierarchy exists and accurate `Service`/`ImageObject` descriptors only if genuinely reflected in rendered content.

**Proposed SEO language (rewrite after location validation):** home title “Premium PPF, Ceramic Coating & Paint Correction in [Verified City] | The Aesthetic Lab”; `/builds` title “Automotive Protection & Restoration Gallery | The Aesthetic Lab”; `/contact` title “Contact The Aesthetic Lab | PPF & Ceramic Consultation”. Descriptions should be useful, unique, approximately snippet length, without false “best in Kerala” superlatives. Use true locality once known; do not pretend a city or fabricate multi-city service pages.

### 6.6 Contact endpoint, abuse safeguards and privacy

`POST /api/contact` or server action: validate normalized fields server-side, limit payload bytes, reject malformed email/phone, use IP/nonce rate controls without storing unnecessary IP histories, add honeypot/time checks and provider spam protection only if needed. Deliver via authenticated provider or store securely in a private CRM/email queue. Return generic success/error messages that do not expose internal addresses/secrets. Avoid collecting registration numbers unless absolutely needed. Confirm actual privacy notice, lawful purposes, retention/consent requirements and business-owner handling before launch; do not copy a generic legal claim as complete legal compliance.

### 6.7 Accessibility requirements

Target WCAG 2.2 AA as a quality bar. Visible focus states (lime accents permitted), reduced-motion, all click targets ≥44px where feasible, keyboard menu/dialog/sliders/accordion, accessible form labels and validation `aria-describedby`, appropriate `aria-live` success feedback, logical heading order, `skip to content`, no color-only state cues, minimum meaningful color contrast, no hidden preloader focus trap, responsive 200% zoom and screen-reader verification. Large decorative title masks must not remove original text from accessibility tree.

---

## 7. Performance, crawlability and adaptive balance governor

### 7.1 Core Web Vitals: official threshold versus premium internal goal

| Metric | Google's currently documented “good” threshold | Project internal stretch goal | Measurement rule |
|---|---|---|---|
| LCP | ≤2.5 s | <2.0 s | Field 75th percentile when enough users; lab repeatable proxy otherwise |
| INP | ≤200 ms | <150 ms | Real-user field metric; lab interaction traces are diagnostic, not official field INP |
| CLS | ≤0.10 | 0.00 visually / lab ≤0.01 stretch | Field 75th percentile; never guarantee literal zero |
| FPS | Not a CWV ranking threshold | ~60 on target devices, no prolonged stutter | Chrome Performance trace on actual supported devices |
| Lighthouse performance | Tool-dependent | Mobile ≥90, Desktop ≥95 when achievable | Audit indicator; **not** equivalent to field CWV |
| Accessibility | Not CWV | Axe critical issues 0; WCAG 2.2 AA | Automated + manual keyboard/screen reader review |

These project goals are **ambitious engineering targets**, not promises that every device and network will hit fixed numbers. Track page, device class and test conditions. The team's pass/fail gate is always based on measured evidence and explicit exception logs.

### 7.2 First-paint and request prioritization

- HTML contains headline, navigation, important service copy and initial poster `src/srcset` (no JS required to discover it).
- For homepage, only actual LCP poster receives highest network priority. On `/contact`, D07 is independently considered its route's LCP; `/builds` uses its page hero as appropriate.
- Other photographic items **lazy** except an image actually within initial viewport or immediately adjacent to it where eager loading is justified by profiling. Thus “all 28 others lazy” is an aspiration scoped *per route*, not a blind loading bug.
- No waiting to fetch 10 ribbon cards before decoding hero. CSS masking preloader must not hide SEO content in HTML and must release on error.
- Avoid web fonts blocking first paint; use display swap and preallocated line metrics; avoid huge imported motion frameworks on static routes.
- Prefer original compressed preview image over canvas until user engages scroll.

### 7.3 Adaptive governor levels

| Level | Trigger | Behavior |
|---|---|---|
| A / full cinema | Desktop, sufficient runtime frame stability and no reduction preference | All GSAP effects, bounded 2.5D depth, side parallax, optional measured frame sequence |
| B / balanced | Typical laptops/tablets or mild performance deterioration | Static hero + limited 2.5D layers, slower/less parallax, reduced simultaneous images |
| C / low-motion | Weak devices, pronounced long tasks, `saveData` / reduced power signals | CSS-only scene, static side cards, simple reveal, minimal marquee |
| D / accessibility | `prefers-reduced-motion: reduce`, missing APIs, JS error | No scrubs/scroll pinning, fully readable content, instant drawer/menu state changes |

**Governor implementation:** resolve preference and capability once on mount; monitor representative frame timing with a bounded sample (not perpetual analytics loops), enter a *lower* mode when sustained drops occur, avoid switching rapidly (hysteresis). JS config/feature flags must not make core content depend on benchmarks. Avoid browser-fingerprint-style device profiling. Throttle scroll work, dynamically import animations, observe section intersection, disable offscreen non-pinned effects and release GPU memory when possible.

**Fallback order:** pause unused animations → reduce image simultaneous animation → remove 2nd canvas → use CSS transforms on one poster → replace scroll pin with static stack. Preserve document semantics and accessibility at every level. `will-change` only on actively animated elements (remove when done); persistent dozens of `will-change` layers can increase memory use. `clip-path` may require paint and must be profiled rather than assumed GPU-safe.

### 7.4 Performance budgets

Initial planning budgets, to be enforced by profiling and relaxed only with written rationale:

- Homepage initial mobile JS transferred: aspirational ≤170 KiB compressed for critical bundle; large GSAP/canvas modules deferred. Track route-specific chunk breakdown.
- Initial visible media on homepage: ideally ≤300 KiB for mobile poster, and <=500 KiB desktop poster; adjust for actual visual fidelity and network results.
- First-view total transfer (including first-view CSS/fonts/JS/media): target ≲900 KiB mobile where practical.
- New motion work must not regress baseline lab LCP by >150ms, add sustained long tasks, or exceed 50ms main-thread task without profiling and mitigation.
- No autoplay video required. No 30-image eager burst. Do not load entire project catalogue on initial homepage viewport.
- Check at 360×800 mobile, 390×844 mobile, 768×1024 tablet, 1440×900 and 1920×1080 desktop. Also inspect lower-end Android and slower mobile networking emulation.

### 7.5 SEO/performance check at every build stage

Each stage creates `reports/stage-N.md` with the following *measured* table for each built route:

| Required field | Content |
|---|---|
| Git commit & date | Commit hash, environment, bundle/asset revision |
| Scope | Added/removed components, routes, image counts and new dependencies |
| Lab data | Lighthouse mobile/desktop run details; LCP, CLS, TBT, transferred JS, total bytes, request count; multiple-run median |
| INP | Field RUM value if sample sufficient; otherwise “not yet available” + proxy interaction trace |
| Filmstrip & performance trace | LCP element identity, long tasks, frame stability and scroll anomalies |
| Crawl audit | Fetch initial HTML, H1/metadata, canonical, index directive, nav links, alt text, valid schema |
| Accessibility | Automated checks, manual keyboard, reduced motion, contrast/focus |
| Regression | Compare prior stage baseline with absolute and percentage change |
| Decision | PASS / PASS WITH MITIGATION / BLOCK, with exact remediation and owner |

At Stage 1 define a fixed repeatable Lighthouse configuration and keep it constant. Field CWV data requires sufficient real traffic; never invent field INP or p75 based solely on one browser run. Stage reports must include a difference statement and archived output in `reports/`.

---

## 8. Stage-by-stage execution & active SEO tracking checklist

**Workflow rule:** Complete one stage, run its QA and SEO/performance gate, save report, then advance. Stage prompts below are fully copy-pasteable and treat this document as the source of truth. **Codex names/intelligence labels are user-requested selection targets**, not independently validated claims about what appears in a particular account UI; choose these exact labels when available. Do not silently replace a label or promise a model entitlement; note a substitute in the report if the picker differs.

### STAGE 1 — Golden Template & SEO shell

**Select:** `GPT-6.1 Terra` | **Intelligence:** `Extra High`  
**Goal:** Durable Next.js scaffold, tokens, fonts, server-rendered route skeletons, truthful config/schema, SEO/meta, asset registry, baseline tests. No elaborate motion yet.

**Deliverables:** Project with working `/`, `/builds`, `/contact`; Next config and Tailwind tokens; single-client `CONFIG`; functional robots/sitemap; unique metadata; accessible semantic page scaffolds; `media.ts` with all 29 entries; staged placeholder art only; CI checks; Lighthouse baseline and stage report.

**Acceptance:** direct navigation succeeds; one H1 per route; metadata/canonical correct; no indexed dummy contact details; no invalid JSON-LD; CLS stable with placeholders; no horizontal overflow; responsive layouts; `npm run build` and lint/types/test pass.

**Active SEO/performance gate:** view-source/server HTML content, robots + sitemap content, canonical URLs, Schema Validator and Rich Results Test on valid fixture URL, Lighthouse desktop/mobile baseline, initial resource waterfall, image dimensions, title/description uniqueness. Do not publish fictitious local business fields.

**Copy-paste Codex prompt:**

```text
You are the senior Next.js systems architect for THE AESTHETIC LAB.
Read the entire PRD.md before coding. Execute STAGE 1 ONLY.

Implement a production-quality strict TypeScript Next.js App Router codebase with
Home (/), Builds (/builds) and Contact (/contact) as SSR/SSG-accessible semantic
pages. Create the exact Tailwind color tokens, four next/font families, 12/8/4
responsive architectural grid, 1px hairlines, CAD section markers and dark
luxury surface system. Provide a single typed CONFIG at src/config/site.ts,
imported in app/layout.tsx; route metadata, robots.ts, sitemap.ts and accurate
conditional JSON-LD that never fabricates business facts. Use valid
AutomotiveBusiness/AutoBodyShop type and conditionally AutoRepair only if
verified. Build a 29-entry typed media registry with correct intrinsic ratios.

Do not create the preloader, GSAP animation system or final drawers yet.
Do not manufacture client contact data, vehicle projects, vendor claims, photos
or warranties. Use explicit demo data and noindex staging. Build a visible
non-JS-accessible homepage hero poster/H1, accessible navigation and semantic
page content. Set up lints/types/tests/Playwright smoke tests and repeatable
Lighthouse measurement script. Record exact Next/Tailwind versions and lockfile.

Produce reports/stage-1.md containing: changed files, test/build results,
mobile/desktop lab CWV proxy metrics, source-HTML crawl audit, assets/JS bytes,
a11y observations, open issues and PASS/BLOCK. Stop after Stage 1; do not
implement subsequent stages. If key factual data/assets are missing, mark them
as PENDING_CLIENT_VERIFICATION and provide a safe visual placeholder strategy.
```

### STAGE 2 — Preloader & 2.5D hero

**Select:** `GPT-6 Astra` | **Intelligence:** `Max`  
**Goal:** Build polished photo-ribbon preloader, immediate LCP poster, title reveal, scroll-scrubbed 2.5D parallax and adaptive governor.

**Deliverables:** 10 small photo slots; 00→100 indicator; nonblocking curtain; hero poster and scroll timeline; optional gated canvas prototype, but not required if benchmarks fail; reduced-motion behavior, observer cleanup and quality modes.

**Acceptance:** hero paints without waiting for JS/preloader; overlay cannot trap or block indefinitely; menu and CTA remain responsive; no large decoding spike; no scroll-jump; midrange mobile uses good fallback.

**Active SEO/performance gate:** compare Stage 1 LCP to Stage 2, identify LCP element, inspect initial requests, only page LCP image prioritized, no blocked source HTML, audit JS main-thread cost and actual scroll FPS. **Regression protocol:** if LCP target or interaction budgets threatened, remove costly frames before downgrading content.

**Copy-paste Codex prompt:**

```text
Read PRD.md and reports/stage-1.md. Execute STAGE 2 ONLY.

Implement the high-craft 10-card preloader (4:5 216x270 visual cards),
bottom-left CAD 00->100 counter, 1px lime progress accent and vertical curtain
reveal. Implement the automotive poster-backed Peak 2.5D homepage hero with
mask-revealed H1 and one GSAP ScrollTrigger timeline. The first poster/H1 must
render in server HTML and be discoverable before any animation initializes.
Preloader must be skippable, nonblocking and hard-timeout safely. Do NOT eager
fetch all 10 cards. Use dynamic GSAP import, gsap.context cleanup,
IntersectionObserver, prefers-reduced-motion and 4-level quality governor.
Treat canvas/dual-canvas as optional enhancement only after passing budgets.
Keep CPU/GPU resource usage bounded; do not create permanent rAF loops.

Implement mobile static/CSS fallback, no-JS state, keyboard skip and accessible
semantic content. Compare lab CWV and transfer sizes to Stage 1 using identical
settings; run keyboard, reduced-motion and slow device checks. If a heavy effect
hurts LCP or frame time, simplify in this stage, do not leave it for later.

Create reports/stage-2.md with benchmark deltas, trace interpretation, source
HTML SEO check, test results, fallback decisions, open issues and PASS/BLOCK.
Stop after Stage 2; do not implement marquee, drawers or other later features.
```

### STAGE 3 — Brand marquee & Cohesion word-scrub

**Select:** `GPT-6.1 Sol` | **Intelligence:** `High`  
**Goal:** Crest marquee and scroll-reactive narrative that retain readability and responsive performance.

**Deliverables:** rights-gated 7-logo track with velocity-modulated but bounded movement; word-by-word manifesto illumination; `scaleX`/clip narrowing image; three-state Identity/Intent/Cohesion stickies with B01–B03 and mobile stack.

**Acceptance:** marquee pauses as required; no faux official-brand relationship; word-split does not duplicate text for screen readers; static text visible without JS; photography and captions align as scroll positions change.

**Active SEO/performance gate:** DOM text and H2 discoverable, no nested/duplicate hidden content, logo requests bounded, effect-specific CLS 0, zoom/reduced motion, no DOM-node explosion/long-task regression, confirm mobile LCP remains within internal target where possible.

**Copy-paste Codex prompt:**

```text
Read PRD.md plus reports/stage-1.md and reports/stage-2.md.
Execute STAGE 3 ONLY, preserving all existing quality gates.

Build seven-position automotive brand crest marquee: BMW, Mercedes-Benz,
Porsche, Lamborghini, Mini, Land Rover, Audi. Use rights-cleared logo assets
when supplied, otherwise tasteful text marks with an independent-specialist
non-affiliation disclaimer. Animate a seamless CSS-transform track with bounded
scroll velocity modulation; pause hover/focus and reduced motion.

Implement the Molecular Shield editorial manifesto: real semantic text with
screen-reader-friendly progressive visual word illumination from smoke-gray to
whiteout, with rare electric-lime power words. Implement a sticky full-bleed
photograph that narrows via tested transform/clip mask, never CSS layout width.
Build three scroll-controlled image/text states IDENTITY -> INTENT -> COHESION
using B01/B02/B03, with crossfade and static mobile/reduced-motion variants.
Keep expensive work out of server-rendered essentials and remove offscreen
scroll triggers only when safe for pinning.

Measure mobile/desktop Lighthouse against Stage 2, inspect filmstrip, frame
traces, responsive breakpoints and screen reader/keyboard semantics. Refine
animation if metrics regress. Produce reports/stage-3.md with source HTML SEO
audit, Web Vitals lab data, practical fixes, risks, PASS/BLOCK. Stop here.
```

### STAGE 4 — 9:16 parallax, service sliders, specification drawers

**Select:** `GPT-6 Astra` | **Intelligence:** `Max`  
**Goal:** Production-quality nine-image montage, three service rails, touch sliders, modal drawers and accordions.

**Deliverables:** C01–C09 parallax placement; indexed rail headers; native scroll-snap, pointer dragging with safe vertical scroll; service content model; `MORE` light technical drawers; accurate specs with verified-claim gate; Prev/Next; accessibility-complete accordions.

**Acceptance:** all rails usable on touch/mouse/keyboard, no broken focus, no slide horizontal overflow, sticky images do not intercept buttons, no unverified spec shipping, modal mobile safe-area coverage, all image loads responsive and lazy where appropriate.

**Active SEO/performance gate:** crawled service texts are present even if drawers are closed; measure slider click input latency and drawer interaction traces, detect reflows and image paint cost, compare request count and JS byte regressions, check static visibility/reduced motion.

**Copy-paste Codex prompt:**

```text
Read PRD.md and all reports/stage-1.md through stage-3.md.
Execute STAGE 4 ONLY.

Build the Body Styling/Aesthetic Lab service chapter around exactly nine
portrait 9:16 C-series photos in left/right/asymmetric background rails.
Implement bounded staggered scroll parallax, responsive 25vw desktop sizing,
visibility gating and a static low-power/mobile layout that never covers text.

Create three Mecha-inspired indexed rails: 01 PPF, 02 CERAMIC/GRAPHENE,
03 RESTORATION & FINISH. Each rail has 1px separator, CAD number, uppercase
heading/tags, MORE button and touch-draggable horizontal image cards with
native scroll snap. Supply arrow/keyboard navigation equivalent to dragging.

MORE opens accessible off-white slide-over spec drawer with Close --| control,
real structured spec table, footnotes and PREVIOUS/NEXT within its group.
Implement focus trap/return, Escape, scroll lock, correct tab order and
mobile full-width sheet. Add plus-icon process accordions with aria-expanded.
Use verified claims only; 210um, 100%, 98%, 115deg and 9H/10H are SAMPLE DATA
and MUST NOT be published as real facts. Do not claim mechanical repair
unless site config confirms it. Avoid adding heavy carousel libraries.

Run actual scroll/drag/dialog/keyboard E2E tests; compare SEO, mobile/desktop
Lighthouse, layout shift, JS size, responsive image bytes and interaction
profiling with Stage 3. Fix regressions now. Produce reports/stage-4.md with
PASS/BLOCK and stop; do not implement Builds/Contact final experience yet.
```

### STAGE 5 — Builds, contact, page transitions & final CWV/SEO audit

**Select:** `GPT-6.1 Terra` | **Intelligence:** `Extra High`  
**Goal:** Close the product: accurate gallery, photo-led conversion route, functional form, polished menu, complete launch testing, SEO and performance stabilization.

**Deliverables:** `/builds` animated card gallery D01–D06; `/contact` full photo D07 plus real server form; full-screen navigation with transition; giant cropped footer wordmark; server-side validation/security; complete metadata/schema/robots/sitemap; final 29-image audit; final docs.

**Acceptance:** form sends only when operational; no fake confirmation; no fabricated completed projects; menu back/new-tab/reduced-motion works; all three routes crawl/refresh; hardcoded placeholder business domain/address cannot go live; no major accessibility issues; final Core Web Vitals evidence archived.

**Active SEO/performance gate:** crawl production candidate all three routes; Schema Validator and Google Rich Results Test; Search Console verification and sitemap only when real domain is connected; mobile and desktop Lighthouse repeated; field RUM installed for future (do not report imaginary p75); image licensing; contact security test; regression table vs Stages 1–4.

**Copy-paste Codex prompt:**

```text
Read PRD.md and every stage report; execute STAGE 5 and finish the website.

Build /builds with six rights-cleared luxury vehicle photo cases D01-D06,
precise internal image scale masks, short truthful treatment metadata and
staggered text reveal; do not fabricate completed customer work. Build
/contact with D07 as route-specific prioritized LCP background image,
contrast-safe photographic surface, minimal hairline form, oversized cropped
brand wordmark, functioning server-backed enquiry submission, input validation,
spam/rate protections and secure server-only secrets. Add accessible full-screen
HOME/BUILDS/CONTACT navigation, bounded route curtains and reduced-motion
fallback. Preserve native deep links, focus management and back navigation.

Audit and correct all 29 unique media registry records, responsive srcsets,
licenses and alt text. Verify site CONFIG is production-true before exposing
schema, address, phone, claims or indexing. Finish robots/sitemap/canonical,
unique route metadata, true local-business JSON-LD and verified services.
Complete Playwright navigation/form/keyboard tests, axe accessibility smoke
checks, cross-device scroll profiling, server build and production preview.
Run repeatable mobile + desktop Lighthouse on all three routes, inspect
initial HTML, Rich Results Test/Schema Validator and network waterfall.
Prioritize fixes for any LCP/INP/CLS/long-task regression, reducing 2.5D before
compromising semantic content. Document actual final measurements, field RUM
status, known exceptions, deploy instructions, content verification blockers
and final PASS/BLOCK in reports/stage-5.md. Do not claim the site is live or
fully compliant unless deployment and checks have actually succeeded.
```

### 8.1 Consolidated active tracking grid

| Gate | Stage 1 | Stage 2 | Stage 3 | Stage 4 | Stage 5 |
|---|---|---|---|---|---|
| HTML H1/nav/semantic section content | Build + verify | Recheck after preload/canvas | Recheck word-splitting | Recheck hidden drawers | Crawl all 3 routes |
| Robots/sitemap/canonical/metadata | Create | No regression | No regression | Service link audit | Production truth check |
| JSON-LD and local facts | Conditional schema | Unchanged | Logo affiliation review | Claims verified | Rich Results + validator |
| Hero LCP image priority | Establish | Audit poster vs canvas | Prevent logo contention | Prevent gallery contention | Check each route's LCP |
| CLS/ratio checks | Baseline | Overlay/hero | Narrowing/pinning | Side images/drawers | All routes and fonts |
| INP/interaction responsiveness | Lab proxies | Scroll trace | Marquee scrub | Drag + modal traces | Form + transitions / field RUM |
| Accessibility/reduced motion | Landmarks/labels | Skip/hero | Semantic word scrub | Full modal/slider | End-to-end WCAG review |
| Media license + accuracy | Audit manifest | Ribbon/hero | Crest rights | Technical specs | Portfolio/client approval |
| Report | `stage-1.md` | `stage-2.md` | `stage-3.md` | `stage-4.md` | `stage-5.md` |

### 8.2 Stage stop/go logic

- **PASS:** acceptance tests pass, no substantial regressions, factual claims verified or held behind development flags, no launch-critical security/accessibility issue.
- **PASS WITH MITIGATION:** stretch budget missed but within Google's good CWV zone and a documented scoped fallback/regression fix exists; product owner approves prior to next stage.
- **BLOCK:** invalid indexing/schema business facts, inaccessible essential interactions, broken forms, copyrighted/unlicensed production imagery, critical JS-only content, persistent significant layout shift, serious performance degradation or build failure.
- Every report must identify what changed and the evidence, not “SEO 100% complete” without testing.

---

## 9. Cross-browser QA matrix, release checklist and risk register

### 9.1 Functional tests

| Case | Expected result |
|---|---|
| Fresh mobile landing | Text/photo visible, no preloader trap, no overflow; immediate usable CTA |
| Slow network / disabled JS | Server HTML headings, links and images intelligible; no perpetual blank screen |
| Reduced motion | Static hero/manifesto, no aggressive marquee, no locked scroll |
| Menu keyboard | Open via Enter/Space, use Tab/Shift+Tab, Escape closes, focus returns |
| Drawer keyboard | MORE opens relevant panel; aria-label/title accurate; Escape and Close restore focus |
| Slider touch/mouse/keyboard | Horizontal change without accidental vertical-scroll hijack |
| Accordion | Expanded content reachable, correct state announcement |
| Contact invalid | Inline errors, fields preserved, server validates; no fake success |
| Contact valid | Real server response, duplicate prevention, confirmation and safe logging |
| Builds image loading | Correct crop, no shift, no fabricated customer service attribution |
| Navigation | `/`, `/builds`, `/contact` work via direct URL, back/forward and internal link |
| Fonts/images | No missing files or severe fallback reflow; responsive values respected |

### 9.2 SEO checklist

- [ ] Production domain is approved, canonical host is consistent and HTTPS works.
- [ ] Robots allow intended routes; preview/staging not indexed; sitemap points to exact public routes.
- [ ] Unique H1, title and useful meta description for each route.
- [ ] All essential service/portfolio content discoverable without JS animation completion.
- [ ] All actual photographic assets licensed, properly described, compressed and usable.
- [ ] Real address/contact/hours shown consistently across footer, contact and JSON-LD (if disclosed).
- [ ] No invented `AutoRepair`, reviews, ratings, product results, warranties or manufacturer partnerships.
- [ ] JSON-LD has no placeholder domains; Schema Validator and Rich Results Test run against actual pages.
- [ ] Open Graph previews and canonical/slugs verified.
- [ ] Browser navigation, mobile viewport, crawl status and error responses validated.
- [ ] Search Console + sitemap submission only when real verified property is available.

### 9.3 Performance checklist

- [ ] LCP poster declared early in SSR HTML; preload/eager policy per route and framework version.
- [ ] All image geometries explicitly reserved; B ratio correction respected.
- [ ] 10 ribbon thumbnails never outrank hero resource.
- [ ] All noncritical images lazy and `sizes` accurate; no accidental enormous downloads.
- [ ] Motion JS dynamic-imported, scroll work bounded, observer/cleanup handles unmounts.
- [ ] ScrollTrigger pins do not jump when disabled; reduced motion static stack available.
- [ ] Cumulative layout shift and long tasks measured with consistent benchmark protocol.
- [ ] Frame drops, hot/low-end Android behavior and mobile scroll responsiveness profiled.
- [ ] Real-user Web Vitals pipeline ready, with no fabricated field results.
- [ ] Stage 5 report includes all route measures and explicit residual exceptions.

### 9.4 Highest risks and mitigation

| Risk | Severity | Mitigation / decision owner |
|---|---|---|
| Hero canvas and 29-image media compete with LCP | High | Static prioritized poster; deferred frames, strict image registry, quality governor / Tech Lead |
| Fancy preloader blocks useful content | High | Server-rendered poster/H1, short capped sequence, skip, failure release / UX Lead |
| Claimed tech data lacks product evidence | Critical | Product datasheet evidence registry; drop unverifiable numbers / Client + Legal |
| Manufacturer emblems imply approval | High | Source clearance, nominative use review and disclaimer / Client |
| Fake portfolio used on real business launch | Critical | Project provenance and signed media release or clearly marked concepts / Client |
| False repair schema creates misleading local SEO | High | `servesMechanicalRepair` gate; truthful schema taxonomy / SEO Lead |
| CSS clip-path causes main-thread paint | Medium | Profile animation, swap to transforms or static image / Motion Engineer |
| Modal/scroll locking hurts accessibility | High | Dialog controls, focus-return and E2E tests / QA Lead |
| Form spam or private data leakage | High | Server-side validation, rate limiting, private provider configuration / Security Lead |
| Tool/model labels differ from user's available picker | Low | Explicit selection mapping, note deviation in report; no invented entitlements / Operator |
| Business city and domain not confirmed | Launch blocker | Disable bogus JSON-LD/production index, request actual client approvals / Product Owner |

---

## 10. Original creative copy starter pack (provisional)

**Hero eyebrow:** `( KERALA AESTHETIC LAB ) ─── ( SURFACE PROTECTION ENGINEERING )`  
**Hero display line:** `PRECISION, / MADE VISIBLE.`  
**Hero supporting copy:** “Advanced paint protection, surface correction and carefully applied finishes for cars that deserve exceptional attention.”  
**CTA:** `EXPLORE THE LAB ──┤` and `BOOK A CONSULTATION`  
**Manifesto title:** `BEYOND THE REFLECTION.`  
**PPF rail:** `ENGINEERED TO PROTECT.`  
**Ceramic rail:** `A FINISH WITH INTENT.`  
**Restoration rail:** `RESTORE THE ORIGINAL STANDARD.`  
**Builds title:** `THE WORK / SPEAKS.`  
**Contact:** `EVERY FINISH STARTS WITH A CONVERSATION.`

No unverified claims such as “10 years protection”, “100% scratch proof”, “factory certified”, “Kerala's #1”, “official Porsche partner”, or “guaranteed resale value”. Price tiers and product warranty statements only after formal client approval.

---

## 11. Sources, conventions and verification constraints

**Primary visual/public content evidence** (accessed 31 October 2026):

1. Forge Automotive: https://forgeautomotive.co.uk/
2. Forge Builds: https://forgeautomotive.co.uk/builds/
3. Forge Contact: https://forgeautomotive.co.uk/contact/
4. Mecha Capital Webflow reference: https://mecha-xyz.webflow.io/

**Technical standards and implementation guidance:**

5. Google Search Central — Local business JSON-LD: https://developers.google.com/search/docs/appearance/structured-data/local-business
6. Google Search Central — Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
7. Google Structured Data Guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
8. Next.js image component/current API: https://nextjs.org/docs/app/api-reference/components/image
9. Next.js metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
10. Next.js robots route: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
11. GSAP ScrollTrigger API: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
12. Schema.org AutoBodyShop: https://schema.org/AutoBodyShop
13. Schema.org AutoRepair: https://schema.org/AutoRepair
14. web.dev — optimizing LCP: https://web.dev/articles/optimize-lcp

**Research confidence:** Published site content/layout *structure* was inspected. No authoritative live DOM event trace, full browser performance capture, unminified proprietary scripts, screenshot comparison or animation source reconstruction was available through the public text retrieval. Any precise motion distances/durations and interaction internals in this document are **proposed engineering requirements**, to calibrate through real-device review, not claims of verified third-party implementation.

---

## 12. Final handoff contract

For every subsequent implementation stage, deliver these four items in the stage response:

1. **Exact Codex target:** Stage model and intelligence level from §8 (or an explicit unavailable-label substitution).
2. **Copy-paste prompt:** Stage-specific fenced prompt from §8, updated only if test evidence requires a change.
3. **Work product and evidence:** changed files, working routes, test outputs and `reports/stage-N.md` with real measured values.
4. **Active SEO/performance impact decision:** baseline → current comparison, crawlability/schema/accessibility status, remediation and PASS/BLOCK.

**Release condition:** visual approval **and** genuine assets/proven claims **and** secure working conversion endpoint **and** passed audits. The team may reduce expensive animation intensity, but must not remove semantic content, falsify metrics, or substitute decorative effects for fundamental usability.

**End of PRD.md — v1.0**
