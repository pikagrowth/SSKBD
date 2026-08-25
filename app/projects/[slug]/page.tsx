import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, Phone, Building2, CheckCircle2, Award, Info } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { BUSINESS_DETAILS } from "@/lib/constants";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const mainImage = project.images[0] || "/images/projects/land-placeholder-1.jpeg";

  // JSON-LD Schema identifying this page as an Apartment Complex / Real Estate Listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": project.title,
    "description": project.description,
    "url": `${BUSINESS_DETAILS.website}/projects/${params.slug}`,
    "image": `${BUSINESS_DETAILS.website}${mainImage}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": project.location.split(',')[0],
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "amenityFeature": project.highlights.map(highlight => ({
      "@type": "LocationFeatureSpecification",
      "name": highlight,
      "value": true
    }))
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-bg transition-colors duration-300">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] bg-brand-text">
        <Image src={mainImage} alt={project.title} fill className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#221F1C] via-[#221F1C]/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 md:mb-8 transition-colors text-xs font-bold tracking-widest uppercase">
              <ArrowLeft size={16} className="mr-2" /> Back to Properties
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-4 md:mb-6">
              <span className={`px-4 py-1.5 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest rounded-lg shadow-sm border ${
                project.status === "Completed" 
                  ? "bg-brand-success/90 border-brand-success" 
                  : project.status === "Upcoming"
                  ? "bg-brand-accent/90 border-brand-accent text-brand-text"
                  : "bg-brand-primary/90 border-brand-primary"
              }`}>
                {project.status}
              </span>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-extrabold uppercase tracking-widest rounded-lg shadow-sm">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
              {project.title}
            </h1>
            
            <div className="flex items-center text-white/90 text-base md:text-lg font-light">
              <MapPin size={20} className="mr-2 text-brand-primaryLight" />
              {project.location}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CONTENT SECTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <div className="lg:w-2/3">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Price</p>
                <p className={`text-base md:text-lg font-extrabold ${project.status === "Completed" ? "text-brand-text" : "text-brand-primary"}`}>
                  {project.priceRange || "TBA"}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Configuration</p>
                <p className="text-base md:text-lg font-extrabold text-brand-text truncate">{project.configuration || "TBA"}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Property Type</p>
                <p className="text-base md:text-lg font-extrabold text-brand-text truncate">{project.category}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Status</p>
                <p className={`text-base md:text-lg font-extrabold ${project.status === "Completed" ? "text-brand-success" : project.status === "Upcoming" ? "text-brand-accent" : "text-brand-primary"}`}>
                  {project.status}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6">Overview</h2>
              <p className="text-brand-muted font-light leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6">Project Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start group">
                    <Award size={20} className="text-brand-primary mr-3 mt-0.5 shrink-0" />
                    <span className="text-brand-muted font-medium text-base leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mb-12 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6 tracking-tight">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="relative h-48 md:h-64 bg-gray-100 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                      <Image 
                        src={img} 
                        alt={`Gallery image ${idx + 1} of ${project.title}`} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ==========================================
              SIDEBAR CTA
          ========================================== */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                {project.status === "Completed" ? (
                  <div className="text-center">
                    <div className="absolute top-0 left-0 w-full h-2 bg-brand-success"></div>
                    <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-text mb-3">Project Delivered</h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      This project has been successfully completed and handed over.
                    </p>
                  </div>
                ) : project.status === "Upcoming" ? (
                  <div className="text-center">
                    <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent"></div>
                    <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Info size={32} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-text mb-3">Coming Soon</h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      We are currently finalizing details for this project. Register your interest to get early access.
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary"></div>
                    <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building2 size={32} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-brand-text mb-3">Bookings Open</h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      Construction is underway. Contact us to schedule a site visit or check available inventory.
                    </p>
                  </div>
                )}

                {/* Universal CTA Buttons */}
                <div className="flex flex-col gap-4 mt-2">
                  <Link href="/contact" className="w-full py-4 bg-brand-primary shadow-lg shadow-brand-primary/20 hover:bg-brand-primaryLight text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
                    Enquire Now <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\s+/g, '')}`} className="w-full py-4 bg-brand-bg shadow-sm border border-gray-200 hover:border-brand-primary text-brand-text font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm group">
                    <Phone size={18} className="text-brand-primary group-hover:scale-110 transition-transform" /> 
                    Call Sales Office
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}