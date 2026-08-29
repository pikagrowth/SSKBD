import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Our Projects | ${BUSINESS_DETAILS.name}`,
  description: "Explore Shree Samarth Krupa Builders & Developers' portfolio of ongoing, completed, and upcoming residential and commercial projects in Panvel and Navi Mumbai.",
  keywords: [
    "Panvel real estate projects",
    "Navi Mumbai property listings",
    "Shravan Siddhant Old Panvel",
    "Flats in Panvel",
    "Commercial properties Navi Mumbai",
    "Shree Samarth Krupa Builders & Developers portfolio",
    "Builders in Panvel"
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Our Projects | ${BUSINESS_DETAILS.shortName}`,
    description: "Explore our portfolio of ongoing, completed, and upcoming residential and commercial projects in Panvel.",
    url: "/projects",
    siteName: BUSINESS_DETAILS.name,
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.shortName} Properties Portfolio`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}