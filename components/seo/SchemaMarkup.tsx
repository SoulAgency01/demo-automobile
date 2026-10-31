import React from "react";
import { siteConfig } from "../../config/siteConfig";

export function SchemaMarkup() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": siteConfig.industrySchemaType,
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.brandName,
        description: siteConfig.tagline,
        url: siteConfig.domain,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: siteConfig.contact.priceRange,
        openingHours: siteConfig.contact.openingHours,
        image: siteConfig.hero.foregroundCutoutImage,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.streetAddress,
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          postalCode: siteConfig.location.postalCode,
          addressCountry: siteConfig.location.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.geo.lat,
          longitude: siteConfig.location.geo.lng,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.brandName,
        description: siteConfig.tagline,
        publisher: {
          "@id": `${siteConfig.domain}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
