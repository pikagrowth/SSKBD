"use client";

import React, { useState, useMemo } from "react";
import { Building, Sparkles } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters, FilterOption } from "@/components/projects/ProjectFilters";
import { BUSINESS_DETAILS } from "@/lib/constants";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  // ==========================================
  // SMART FILTER LOGIC
  // ==========================================
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(project => project.status === activeFilter);
  }, [activeFilter]);

  // ==========================================
  // JSON-LD SCHEMA (Builder Profile)
  // ==========================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Properties & Projects | ${BUSINESS_DETAILS.shortName}`,
    "description": "Browse our ongoing, completed, and upcoming real estate projects across Navi Mumbai and Panvel.",
    "url": `${BUSINESS_DETAILS.website}/projects`,
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_DETAILS.name,
      "url": BUSINESS_DETAILS.website
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((proj, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "RealEstateListing",
          "name": proj.title,
          "url": `${BUSINESS_DETAILS.website}/projects/${proj.slug}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": proj.location
          }
        }
      }))
    }
  };

  return (
    <main className="flex flex-col min-h-screen w-full bg-brand-bg transition-colors duration-300 pb-24">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative w-full py-12 lg:py-20 bg-brand-text overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight font-bold text-sm mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Portfolio
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Properties & <span className="text-brand-primaryLight">Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our footprint across Panvel and Navi Mumbai. From delivered landmarks to exciting upcoming launches.
          </p>
        </div>
      </section>

      {/* ==========================================
          FILTERS
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <ProjectFilters 
          activeCategory={activeFilter} 
          onCategoryChange={setActiveFilter} 
        />
      </section>

      {/* ==========================================
          PROJECTS GRID 
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-brand-bg rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
              <Building className="text-brand-muted" size={40} />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-text mb-3">No Projects Found</h3>
            <p className="text-brand-muted max-w-md mx-auto mb-8 text-lg">
              We currently don't have any public listings under "{activeFilter}". Check back soon!
            </p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="px-8 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors border border-gray-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}