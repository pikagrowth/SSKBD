import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_DETAILS.name,
    "image": `${BUSINESS_DETAILS.website}/images/brand/logo-full.png`, 
    "url": BUSINESS_DETAILS.website,
    "telephone": BUSINESS_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DETAILS.address,
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Panvel",
      "Navi Mumbai",
      "Kharghar",
      "Old Panvel"
    ],
    "sameAs": [
      BUSINESS_DETAILS.socials.instagram,
      BUSINESS_DETAILS.socials.facebook
    ],
    "priceRange": "$$$",
    "description": `${BUSINESS_DETAILS.name} is a premier real estate development firm in Panvel and Navi Mumbai, committed to delivering quality residential and commercial spaces on time.`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}