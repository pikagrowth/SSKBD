"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

export function FeaturedListings() {
  const router = useRouter();
  
  // Show up to 3 projects, prioritizing Ongoing ones
  const ongoing = projects.filter(p => p.status === 'Ongoing');
  const other = projects.filter(p => p.status !== 'Ongoing');
  const displayProjects = [...ongoing, ...other].slice(0, 3);

  if (displayProjects.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading
            title="Our Featured Projects"
            subtitle="Explore our latest residential and commercial developments, thoughtfully designed for modern living and built to last."
            className="mb-0 max-w-2xl"
          />
          <button 
            onClick={() => router.push('/projects')} 
            className="hidden md:inline-flex items-center font-bold text-brand-primary hover:text-brand-primaryLight transition-colors pb-2"
          >
            View Full Portfolio <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="text-center md:hidden">
          <button 
            onClick={() => router.push('/projects')} 
            className="w-full py-4 bg-gray-50 text-brand-primary font-bold rounded-xl border border-gray-200 shadow-sm flex items-center justify-center"
          >
            View All Projects <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
        
      </div>
    </section>
  );
}