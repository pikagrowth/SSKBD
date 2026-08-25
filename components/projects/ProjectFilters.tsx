"use client";

import React from "react";

export type FilterOption = "All" | "Ongoing" | "Completed" | "Upcoming";

interface ProjectFiltersProps {
  activeCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

export function ProjectFilters({ activeCategory, onCategoryChange }: ProjectFiltersProps) {
  const categories: FilterOption[] = [
    "All", 
    "Ongoing", 
    "Completed", 
    "Upcoming"
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
            activeCategory === cat
              ? "bg-brand-primary text-white border-brand-primary"
              : "bg-white text-brand-muted hover:bg-gray-50 border border-gray-200 hover:border-brand-primary/50 hover:text-brand-text"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}