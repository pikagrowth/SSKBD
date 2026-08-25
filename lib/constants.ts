// lib/constants.ts

export const CLOUDINARY_URLS = {
  heroVideoDesktop: process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL || '',
  heroVideoMobile: process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL || '',
} as const;

export const BUSINESS_DETAILS = {
  name: "Shree Samarth Krupa Builders & Developers",
  shortName: "Shree Samarth Krupa Builders & Developers",
  tagline: "Building Legacies, Delivering Trust",
  address: "Niharika Mirrage, Plot No. 274, Sector 10, Kharghar, Navi Mumbai 410210",
  phone: "+91 88981 91111",
  email: "info@samarthkrupabuilders.com",
  // ⚠️ DEVELOPER ACTION REQUIRED: Verify the exact registered domain name before go-live
  website: "https://www.samarthkrupabuilders.com",
  socials: {
    instagram: "#",
    facebook: "#"
  }
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
] as const;