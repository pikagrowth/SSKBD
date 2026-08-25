import React from "react";
import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { VideoHero } from "@/components/home/VideoHero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { StatsStrip } from "@/components/home/StatsStrip";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.samarthkrupabuilders.com";

  return {
    title: `Premium Builders in Panvel & Navi Mumbai | ${BUSINESS_DETAILS.shortName}`,
    description: "Shree Samarth Krupa Builders & Developers delivers quality residential and commercial projects in Panvel. Explore Shravan Siddhant and other ongoing properties.",
    alternates: {
      canonical: siteUrl,
    },
    keywords: [
      "Builders in Panvel",
      "Developers in Navi Mumbai",
      "Flats in Panvel",
      "New projects in Panvel",
      "Shravan Siddhant",
      "Shravan Siddhant Old Panvel",
      "Commercial space in Panvel",
      "Shree Samarth Krupa Builders & Developers",
      "SSKBD"
    ],
    openGraph: {
      title: `Premium Builders in Panvel & Navi Mumbai | ${BUSINESS_DETAILS.name}`,
      description: "Shree Samarth Krupa Builders & Developers delivers quality residential and commercial projects in Panvel. Explore our ongoing properties.",
      url: siteUrl,
      siteName: BUSINESS_DETAILS.name,
      images: [
        {
          url: "/images/brand/hero-poster.jpeg",
          width: 1200,
          height: 630,
          alt: `${BUSINESS_DETAILS.shortName} - Premium Properties in Panvel`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Builders in Panvel | ${BUSINESS_DETAILS.shortName}`,
      description: "Discover verified 1, 2 & 3 BHK flats and commercial spaces in Panvel with Shree Samarth Krupa Builders & Developers.",
      images: ["/images/brand/hero-poster.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-brand-bg transition-colors duration-300">
      <VideoHero />
      <FeaturedProject />
      <StatsStrip />
      <FeaturedListings />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Unified Lead Capture Section */}
      <section id="enquire" className="py-24 bg-white border-t border-brand-primary/10 relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-[0.03] mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text tracking-tight mb-4 transition-colors">
              Ready to secure your new property?
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto transition-colors">
              Whether you are looking for a new home, a commercial shop, or have a general query, drop your details below and our team will get in touch with you.
            </p>
          </div>
          
          <div className="bg-brand-bg p-6 md:p-10 rounded-3xl border border-gray-200 shadow-xl">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}