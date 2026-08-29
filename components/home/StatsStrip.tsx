"use client";

import React from "react";

export const StatsStrip = () => {
  // Builder-appropriate stats
  const stats = [
    { label: "Years of Trust", value: "30+" },
    { label: "Flats Sold", value: "300+" },
    { label: "Commericial Shops & Office Sold", value: "130+" },
    { label: "Upcoming Projects", value: "4+" },
  ];

  return (
    <div className="bg-brand-primary py-16 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Premium Background Textures */}
      <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center flex flex-col items-center group ${idx % 2 !== 0 ? 'border-l border-white/20 md:border-0' : ''}`}>
              <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-brand-accent font-bold tracking-widest uppercase transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};