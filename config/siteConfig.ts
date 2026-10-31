export interface HotspotSpec {
  id: string;
  x: number;
  y: number;
  anchorX: number;
  anchorY: number;
  label: string;
  detail: string;
}

export interface AmbiencePreset {
  id: string;
  name: string;
  accentHex: string;
  glowRgba: string;
  imageFilter: string;
  badgeText: string;
}

export interface BentoItem {
  id: string;
  tag: string;
  title: string;
  metric: string;
  description: string;
  image: string;
  colSpan?: "1" | "2";
}

export interface ServiceRowItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const siteConfig = {
  // 1. GLOBAL BRAND & GOLDEN SEO METADATA (SWAP PER CLIENT)
  brandName: "AETHERIA",
  legalName: "Aetheria Spaces Architectural & Interior Studio LLC",
  tagline: "Tropical Modernism Engineered for the Arabian Desert",
  domain: "https://soulagency.online",
  industrySchemaType: "HomeAndConstructionBusiness" as
    | "HomeAndConstructionBusiness"
    | "RealEstateAgent"
    | "Store"
    | "SportsActivityLocation"
    | "ProfessionalService",
  location: {
    streetAddress: "Villa 14, Alserkal Avenue, Al Quoz",
    city: "Dubai",
    region: "Dubai",
    postalCode: "00000",
    countryCode: "AE",
    geo: { lat: 25.1412, lng: 55.2265 },
  },
  contact: {
    phone: "+971-4-555-0199",
    email: "concierge@soulagency.online",
    priceRange: "$$$$",
    openingHours: "Mo-Sa 09:00-19:00",
  },

  // 2. ENGINE 1: 3-PLANE SPATIAL PARALLAX HERO (VIDEOS 1 & 2)
  hero: {
    eyebrow: "DUBAI · BALI · TRIVANDRUM",
    headlineLine1: "Find What",
    headlineLine2: "Moves Space",
    subheadline:
      "Monolithic travertine, sustainably harvested Balinese teak, and climate-tuned glass sanctuaries designed for private collectors.",
    ctaPrimary: "Commission a Residence",
    ctaSecondary: "Explore Masterworks",
    backgroundSkyImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85",
    foregroundCutoutImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },

  // 3. ENGINE 2: PINNED SVG TEXT-MASK PORTAL ZOOM (VIDEO 2)
  portal: {
    maskWord: "AETHERIA",
    captionTop: "ARCHITECTURAL IMMERSION",
    captionBottom: "SCROLL TO ENTER THE PALM JUMEIRAH SANCTUARY",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    overlayQuote: "Where raw cast concrete meets living botanicals.",
  },

  // 4. ENGINE 4: DYNAMIC LIGHTING STATE MACHINE & EXPLODED SVG HOTSPOTS (VIDEO 4)
  hotspotStage: {
    sectionEyebrow: "MATERIAL INTELLIGENCE & CIRCADIAN LIGHTING",
    sectionTitle: "Quality That Speaks in Silence.",
    sectionSubtitle:
      "Switch atmospheric lighting modes and inspect every architectural specification in real time.",
    stageImage:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
    ambiencePresets: [
      {
        id: "golden",
        name: "Golden Desert Hour",
        accentHex: "#D4A373",
        glowRgba: "rgba(212, 163, 115, 0.28)",
        imageFilter: "sepia(0.18) contrast(1.06) brightness(0.96)",
        badgeText: "2700K Solar Grazing",
      },
      {
        id: "noon",
        name: "High Zenith Sun",
        accentHex: "#94A3B8",
        glowRgba: "rgba(148, 163, 184, 0.22)",
        imageFilter: "saturate(1.05) contrast(1.04) brightness(1.03)",
        badgeText: "5500K Atrium Daylight",
      },
      {
        id: "nocturne",
        name: "Nocturne Sanctuary",
        accentHex: "#F59E0B",
        glowRgba: "rgba(245, 158, 11, 0.34)",
        imageFilter: "brightness(0.72) contrast(1.18) saturate(1.1)",
        badgeText: "2100K Lutron Scene",
      },
    ] as AmbiencePreset[],
    hotspots: [
      {
        id: "hs-1",
        x: 28,
        y: 42,
        anchorX: 14,
        anchorY: 22,
        label: "Grade-A Balinese Teak",
        detail: "Kiln-dried acoustic slatted ceilings with hidden linear HVAC diffusers.",
      },
      {
        id: "hs-2",
        x: 54,
        y: 66,
        anchorX: 54,
        anchorY: 86,
        label: "Honed Roman Travertine",
        detail: "4.8-meter monolithic stone island with zero-joint mitred waterfall edges.",
      },
      {
        id: "hs-3",
        x: 76,
        y: 36,
        anchorX: 88,
        anchorY: 18,
        label: "Solar-Control Low-E Glass",
        detail: "Motorized 6-meter pocket sliders blocking 78% infrared desert heat.",
      },
    ] as HotspotSpec[],
  },

  // 5. ENGINE 3: KINETIC METRIC TICKERS & REACTIVE LASER-GLOW BENTO (VIDEO 3)
  metrics: [
    { value: 420, suffix: "M+", label: "AED Luxury Residences Delivered" },
    { value: 18, suffix: "", label: "International Design Monoliths" },
    { value: 100, suffix: "%", label: "Bespoke Turnkey Execution" },
  ],
  bentoDrops: [
    {
      id: "bento-1",
      tag: "PALM JUMEIRAH · FROND G",
      title: "Villa Solaris Monolith",
      metric: "14,200 SQ.FT",
      description: "Cantilevered travertine pavilions suspended over a saltwater infinity lagoon.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      colSpan: "2",
    },
    {
      id: "bento-2",
      tag: "EMIRATES HILLS",
      title: "The Teak Atrium",
      metric: "9,800 SQ.FT",
      description: "Double-height indoor tropical rain courtyard with custom bronze brise-soleil.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      colSpan: "1",
    },
    {
      id: "bento-3",
      tag: "DIFC PENTHOUSE",
      title: "Skyline Sanctuary",
      metric: "6,400 SQ.FT",
      description: "Acoustic basalt stone walls paired with museum-grade warm circadian lighting.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      colSpan: "1",
    },
    {
      id: "bento-4",
      tag: "JUMEIRAH BAY ISLAND",
      title: "Casa Obsidian & Sand",
      metric: "18,500 SQ.FT",
      description: "Private subterranean spa, sunken fire lounge, and bespoke Italian millwork.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      colSpan: "2",
    },
  ] as BentoItem[],

  // 6. ENGINE 2B: DARK CURTAIN INTERACTIVE SERVICE ROWS (VIDEO 2)
  services: [
    {
      id: "srv-1",
      index: "01",
      title: "Architecture",
      subtitle: "CLIMATE-RESILIENT TROPICAL MODERNISM",
      description:
        "We sculpt raw concrete, natural stone, and deep overhangs to tame harsh desert light into serene indoor-outdoor living.",
      deliverables: ["Site Sun-Path Modeling", "Structural Shell Design", "Landscape & Water Integration"],
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "srv-2",
      index: "02",
      title: "Interiors",
      subtitle: "BESPOKE MILLWORK & RARE STONE CURATION",
      description:
        "Every surface is hand-selected from quarries in Tivoli and sustainable timber estates in Indonesia.",
      deliverables: ["Custom Furniture & Joinery", "Circadian Lighting Design", "Acoustic Engineering"],
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "srv-3",
      index: "03",
      title: "Turnkey",
      subtitle: "WHITE-GLOVE EXECUTION FROM CONCEPT TO KEY",
      description:
        "Single-point accountability managing master artisans, MEP engineers, and private art installation.",
      deliverables: ["Full Permitting & Fit-Out", "Smart Home Automation", "Private Handover Curation"],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    },
  ] as ServiceRowItem[],
};
