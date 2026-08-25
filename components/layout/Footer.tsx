import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS_DETAILS, NAV_LINKS } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="relative bg-brand-text text-white pt-20 pb-8 border-t-[6px] border-brand-primary transition-colors duration-300 overflow-hidden">
      
      {/* Background Texture for premium depth */}
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="relative w-28 h-28 bg-white rounded-2xl p-2 shadow-xl border border-white/10">
              <Image 
                src="/images/brand/logo-full.png" 
                alt={`${BUSINESS_DETAILS.name} Logo`}
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
              {BUSINESS_DETAILS.tagline}. We are Panvel and Navi Mumbai's trusted real estate developers, committed to delivering quality homes and commercial spaces on time.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href={BUSINESS_DETAILS.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm border border-white/5">
                <Instagram size={18} />
              </a>
              <a href={BUSINESS_DETAILS.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm border border-white/5">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 text-brand-accent tracking-tight">Company</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span> {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2 hover:translate-x-1 duration-300">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-extrabold mb-6 text-brand-accent tracking-tight">Reach Out</h4>
            
            <div className="mb-6 group">
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5 block">Corporate Office</span>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-primary group-hover:text-white transition-colors" />
                <span className="hover:text-white transition-colors font-light leading-relaxed">
                  {BUSINESS_DETAILS.address}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1.5 block">Contact</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300 group">
                  <Phone size={18} className="shrink-0 text-brand-primary group-hover:text-white transition-colors" />
                  <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, '')}`} className="font-bold hover:text-white transition-colors tracking-wide">
                    {BUSINESS_DETAILS.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300 group">
                  <Mail size={18} className="shrink-0 text-brand-primary group-hover:text-white transition-colors" />
                  <a href={`mailto:${BUSINESS_DETAILS.email}`} className="font-light hover:text-white transition-colors break-all">
                    {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm text-gray-400 font-light">
            <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};