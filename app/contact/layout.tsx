import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | ${BUSINESS_DETAILS.name}`,
  description: `Get in touch with ${BUSINESS_DETAILS.shortName}. Visit our office in Kharghar, Navi Mumbai or call us at ${BUSINESS_DETAILS.phone} to enquire about our ongoing and upcoming real estate projects.`,
  keywords: [
    "Contact SSKBD",
    "Shree Samarth Krupa Builders phone number",
    "Real estate developers in Panvel",
    "Navi Mumbai builders contact",
    "Kharghar builders office"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${BUSINESS_DETAILS.shortName}`,
    description: "Connect with our team to discuss your real estate requirements. Visit our office in Kharghar or drop us an enquiry online.",
    url: "/contact",
    siteName: BUSINESS_DETAILS.name,
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: `Contact ${BUSINESS_DETAILS.name}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}