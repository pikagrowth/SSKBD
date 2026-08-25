"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ArrowRight, Building2 } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function VideoHero() {
  const router = useRouter();

  // ==========================================
  // UI RENDER
  // ==========================================
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] max-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full bg-brand-text z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/brand/hero-poster.jpeg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source 
            src={process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL} 
            media="(max-width: 768px)" 
            type="video/mp4" 
          />
          <source 
            src={process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL} 
            media="(min-width: 769px)" 
            type="video/mp4" 
          />
        </video>
        
        {/* Cinematic gradient overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent font-bold text-sm mb-8 backdrop-blur-md shadow-2xl animate-in slide-in-from-top-4 duration-700">
          <ShieldCheck className="w-4 h-4 mr-2" />
          {BUSINESS_DETAILS.tagline}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight max-w-5xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-tight">
          Panvel's Trusted <br className="hidden md:block" />
          <span className="text-brand-primaryLight">Builders & Developers</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
          Creating spaces that inspire. With an uncompromising commitment to quality and on-time delivery, we build more than just structures—we build your future.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <button 
            className="px-8 py-4 bg-brand-primary hover:bg-brand-primaryLight text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(184,74,36,0.4)] flex items-center justify-center gap-2 text-lg"
            onClick={() => router.push('/projects')}
          >
            <Building2 size={20} /> Explore Our Projects
          </button>
          <button 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            onClick={() => router.push('/contact')}
          >
            Contact Us <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}