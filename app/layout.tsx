import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.samarthkrupabuilders.com"),
  title: {
    template: `%s | ${BUSINESS_DETAILS.name}`,
    default: `${BUSINESS_DETAILS.name} | Building Legacies, Delivering Trust`,
  },
  description: "Shree Samarth Krupa Builders & Developers (SSKBD). Panvel and Navi Mumbai's trusted real estate developers, committed to delivering quality residential and commercial spaces on time.",
  keywords: [
    "Shree Samarth Krupa Builders & Developers",
    "SSKBD",
    "Panvel builders",
    "Navi Mumbai real estate developers",
    "Shravan Siddhant Old Panvel",
    "Ongoing projects in Panvel",
    "Flats in Navi Mumbai"
  ],
  authors: [{ name: BUSINESS_DETAILS.name, url: BUSINESS_DETAILS.website }],
  creator: BUSINESS_DETAILS.name,
  publisher: BUSINESS_DETAILS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BUSINESS_DETAILS.name} | Premium Real Estate Developers`,
    description: "Building Legacies, Delivering Trust. Discover premium ongoing and upcoming residential projects across Panvel and Navi Mumbai.",
    url: "/",
    siteName: BUSINESS_DETAILS.name,
    images: [
      {
        url: "/images/brand/hero-poster.jpeg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_DETAILS.name} - Premium Properties in Panvel`,
      },
      {
        url: "/images/brand/logo-square.jpg",
        width: 800,
        height: 800,
        alt: `${BUSINESS_DETAILS.name} Logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_DETAILS.name} | Panvel Builders & Developers`,
    description: "Building Legacies, Delivering Trust. Discover premium projects across Panvel and Navi Mumbai.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-body bg-brand-bg text-brand-text antialiased flex flex-col min-h-screen`}>
        <JsonLd />
        <Header />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}