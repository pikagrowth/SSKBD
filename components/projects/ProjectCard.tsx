"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const mainImage = project.images[0] || "/images/projects/land-placeholder-1.jpeg";

  return (
    <div className="flex flex-col h-full group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 hover:-translate-y-1">
      <Link href={`/projects/${project.slug}`} className="relative h-64 overflow-hidden block bg-brand-bg">
        <Image
          src={mainImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
          <span className={`px-3 py-1.5 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm ${
            project.status === 'Completed' ? 'bg-brand-success/90' : project.status === 'Upcoming' ? 'bg-brand-accent/90 text-brand-text' : 'bg-brand-primary/90'
          }`}>
            {project.status}
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-gray-200 text-sm font-medium mb-1 drop-shadow-md">
            <MapPin size={14} className="mr-1 text-brand-accent" />
            <span className="truncate">{project.location}</span>
          </div>
          <h3 className="text-xl font-bold text-white drop-shadow-md line-clamp-1">
            {project.title}
          </h3>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1 bg-white transition-colors duration-300">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
          <div>
            <div className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-1">Configuration</div>
            <div className="font-medium text-brand-text truncate max-w-[120px] sm:max-w-[150px]">{project.configuration || "TBA"}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-1">Price</div>
            <div className="font-bold text-brand-primary">{project.priceRange || "On Request"}</div>
          </div>
        </div>
        
        <p className="text-sm text-brand-muted line-clamp-2 mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <Link href={`/projects/${project.slug}`}>
            <button className="w-full h-11 bg-brand-bg hover:bg-brand-primary text-brand-primary hover:text-white border border-brand-primary/20 hover:border-brand-primary text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
              View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};