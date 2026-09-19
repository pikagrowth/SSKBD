"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Building2, CheckCircle2 } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <section className="py-24 bg-brand-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-success/10 border border-brand-success/20 text-brand-success rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
              <Clock size={16} /> Construction In Full Swing
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text tracking-tight">
              Flagship Project: Shravan Siddhant
            </h2>
            <p className="text-brand-muted text-lg font-light leading-relaxed">
              Our premium mixed-use development right in the heart of Old Panvel. Designed for modern living and thriving businesses, built with our signature commitment to quality and timely delivery.
            </p>
          </div>
          <Link href="/projects/shravan-siddhant" className="shrink-0 z-20">
            <button className="py-3 px-6 bg-brand-primary hover:bg-brand-primaryLight text-white font-bold rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300 flex items-center">
              View Full Details <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Premium Split Card Design (Fully Clickable) */}
        <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 gap-0 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer">
          
          {/* Invisible Link covering the entire card to make it clickable */}
          <Link 
            href="/projects/shravan-siddhant-1.jpeg" 
            className="absolute inset-0 z-10" 
            aria-label="View Shravan Siddhant Details"
          />

          {/* Left: Image Container */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden bg-gray-100 z-0">
            <Image
              src="/images/projects/shravan-siddhant-1.jpeg" // Using the real project image
              alt="Shravan Siddhant Lifestyle"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Gradient Overlay for aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            {/* Floating Detail Badge */}
            <div className="absolute bottom-6 left-6 z-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Starting Price</div>
              <div className="text-2xl font-black text-brand-primary">₹75 Lacs*</div>
            </div>
          </div>
          
          {/* Right: Content Container */}
          <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center relative z-0">
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[80px] -z-10"></div>
            
            <div className="relative z-0">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary mb-6 bg-brand-primary/10 px-4 py-2 rounded-lg">
                <MapPin size={18} /> Old Panvel, Navi Mumbai
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6 tracking-tight group-hover:text-brand-primary transition-colors">
                Shravan Siddhant
              </h3>
              
              <p className="text-brand-muted mb-10 leading-relaxed text-base sm:text-lg font-light">
                A landmark redevelopment offering a perfect blend of peaceful residential living and high-visibility commercial spaces. Featuring 80 residential flats, 15 premium retail shops, and 2 dedicated commercial units.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-10 border-t border-gray-100 pt-8">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <Building2 size={16} />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Configuration</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-brand-text">1, 2 & 3 BHK</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Status</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-brand-success">Ongoing</div>
                </div>
              </div>
              
              {/* Button Container - Needs high Z-index to bypass the invisible Link layer */}
              <div className="relative z-20">
                <button 
                  className="w-full py-4 bg-brand-bg hover:bg-brand-primary hover:text-white text-brand-primary font-bold rounded-xl border border-gray-200 transition-all duration-300 shadow-sm text-base flex items-center justify-center gap-2" 
                  onClick={(e) => {
                    // Prevent the click from triggering the parent <Link> tag, but allow navigation
                    e.stopPropagation();
                    window.location.href = '/projects/shravan-siddhant';
                  }}
                >
                  Explore Project Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};