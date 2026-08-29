"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Award, Building2, ThumbsUp } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Uncompromising Quality",
      description: "We use top-grade construction materials and strict engineering standards to ensure your home stands the test of time.",
      icon: <Award className="w-7 h-7 text-brand-primary transition-colors" />
    },
    {
      title: "On-Time Delivery",
      description: "We respect your timeline and investment. Our operations team ensures project milestones are hit without compromising on quality.",
      icon: <Clock className="w-7 h-7 text-brand-primary transition-colors" />
    },
    {
      title: "Absolute Transparency",
      description: "From clear titles to RERA compliance and straightforward pricing, we ensure a zero-surprise buying experience.",
      icon: <ShieldCheck className="w-7 h-7 text-brand-primary transition-colors" />
    },
    {
      title: "Prime Locations",
      description: "We strategically select high-growth nodes across Panvel and Navi Mumbai, ensuring great connectivity and high appreciation.",
      icon: <Building2 className="w-7 h-7 text-brand-primary transition-colors" />
    },
    {
      title: "Customer-First Approach",
      description: "From your first site visit to the final handover of keys, our dedicated team is here to support you at every step.",
      icon: <ThumbsUp className="w-7 h-7 text-brand-primary transition-colors" />
    }
  ];

  return (
    <section className="py-24 bg-brand-bg border-t border-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content & Image */}
          <div className="lg:w-1/3 text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-xs font-bold tracking-widest mb-6 uppercase shadow-sm">
              The Shree Samarth Krupa Builders & Developers Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text tracking-tight mb-6 transition-colors leading-tight">
              Why Choose {BUSINESS_DETAILS.shortName}?
            </h2>
            <p className="text-lg text-brand-muted mb-10 leading-relaxed transition-colors font-light">
              With a strong foundation in honest construction and a proven track record, we don't just build apartments—we build trust.
            </p>
            <div className="relative h-72 md:h-80 w-full rounded-[2rem] overflow-hidden shadow-2xl hidden lg:block border border-gray-200 transition-colors group">
              <Image 
                src="/images/brand/hero-poster.jpeg" 
                alt="Construction Quality" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply transition-colors"></div>
            </div>
          </div>

          {/* Right Side: Pillars Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-primary/10 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-xl font-extrabold text-brand-text mb-2 transition-colors">{pillar.title}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed transition-colors font-light">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}