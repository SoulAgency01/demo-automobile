import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/siteConfig";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { SmoothScrollProvider } from "../components/providers/SmoothScrollProvider";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.hero.subheadline,
  openGraph: {
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: siteConfig.hero.subheadline,
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    images: [{ url: siteConfig.hero.foregroundCutoutImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} dark`}
    >
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-[#0D0B0A] text-[#F5F2EB] font-sans antialiased selection:bg-[#D4A373] selection:text-[#0D0B0A] overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
