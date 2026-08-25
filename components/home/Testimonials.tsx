"use client";

import React from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-white transition-colors duration-300 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-bg text-brand-primary border border-gray-200 text-xs font-bold tracking-widest mb-4 uppercase shadow-sm">
            Our Family
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
            Client Stories
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
            Hear from the families and businesses who have chosen a Shree Samarth Krupa Builders & Developers property as their own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-brand-bg rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/30 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 w-28 h-28 text-white -z-0 rotate-12 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent transition-colors" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed text-base mb-10 flex-1 italic transition-colors font-light">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-6 border-t border-gray-200 mt-auto transition-colors">
                  <div className="font-extrabold text-brand-text transition-colors text-lg">{testimonial.name}</div>
                  <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mt-1 transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}