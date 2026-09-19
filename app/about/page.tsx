import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Building2,
  Target,
  Eye,
  Award,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  HardHat,
  Leaf,
  Truck,
  Factory,
  Clock,
  TrendingUp,
  MapPin,
  Layers,
  Handshake,
  Video
} from "lucide-react";
import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { team } from "@/lib/data/team";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PresentationVideo } from "@/components/about/PresentationVideo"; // Adjust path if needed

export const metadata: Metadata = {
  title: `Company Profile | ${BUSINESS_DETAILS.shortName}`,
  description: `${BUSINESS_DETAILS.name} is a Panvel-based real estate development company with 25+ years of hands-on construction experience, an in-house RMC plant and equipment fleet, and a growing portfolio of completed, ongoing, and upcoming residential and redevelopment projects across Panvel and Navi Mumbai.`,
  keywords: [
    "Shree Samarth Krupa Builders Company Profile",
    "Mangesh Shelar",
    "Mansi Shelar",
    "Panvel redevelopment builders",
    "Karanjade builders",
    "Navi Mumbai builders",
    "Shree Samarth Krupa Builders & Developers history",
    "Trusted builders in Panvel",
    "RMC plant Panvel",
    "Shravan Siddhant project"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `Company Profile | ${BUSINESS_DETAILS.name}`,
    description: "35+ years of construction experience, an in-house material supply chain, and Panvel's most trusted name in redevelopment.",
    url: "/about",
    siteName: BUSINESS_DETAILS.name,
    type: "profile",
  }
};

// ==========================================
// DATA CONFIGURATION
// ==========================================

const storyTimeline = [
  {
    marker: "30 Years Ago",
    title: "Where It All Began",
    description: "Tanaji Shankar Shelar begins working in construction in the Panvel–Karanjade belt, laying the foundation of what would one day become Shree Samarth Krupa Builders & Developers — built on hard work, discipline, and an honest day's labour.",
    icon: <HardHat className="w-6 h-6 text-white" />
  },
  {
    marker: "A New Generation",
    title: "Mangesh Joins the Trade",
    description: "At just 20 years old, Mangesh Shelar joins his father on-site, learning the business from the ground up — from raw construction work to managing clients and relationships — carrying his father's principles into a new generation.",
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    marker: "Roots in Karanjade",
    title: "Building Our First Projects",
    description: "The company establishes itself firmly in Karanjade, delivering its earliest completed projects and earning a reputation in the community for keeping its word and handing over what was promised.",
    icon: <MapPin className="w-6 h-6 text-white" />
  },
  {
    marker: "The Redevelopment Era",
    title: "Taking On What Others Couldn't",
    description: "As Panvel's older buildings age, Shree Samarth Krupa Builders & Developers steps up to lead one of the region's most critical redevelopment projects — one long considered too difficult to redevelop — establishing the company as Panvel's name to trust for redevelopment.",
    icon: <Layers className="w-6 h-6 text-white" />
  },
  {
    marker: "Today",
    title: "30 Years of Experience, Still Building",
    description: "With Mangesh Shelar now carrying 30 years of hands-on experience, an in-house equipment fleet, and a dedicated leadership team behind him, the company continues to expand its footprint of residential and redevelopment projects across Panvel and Navi Mumbai.",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  }
];

const coreValues = [
  {
    title: "Uncompromising Quality",
    description: "We use top-grade materials and strict engineering standards to ensure every project stands strong for generations.",
    icon: <HardHat className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Absolute Transparency",
    description: "No hidden costs, clear titles, and strictly factual communication. We believe a homebuyer deserves total peace of mind.",
    icon: <Compass className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "On-Time Delivery",
    description: "We respect your investment and your time. Our operations team works rigorously to ensure project milestones are hit safely and efficiently.",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-accent" />
  }
];

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2);
};

export default function AboutPage() {
  const founders = team.filter(member => member.role.toLowerCase().includes('founder'));
  const coreTeam = team.filter(member => !member.role.toLowerCase().includes('founder'));

  const completedProjects = projects.filter(p => p.status === 'Completed');
  const ongoingProjects = projects.filter(p => p.status === 'Ongoing');
  const upcomingProjects = projects.filter(p => p.status === 'Upcoming');
  const totalProjects = projects.length;

  const statHighlights = [
    { value: "30+", label: "Years of Experience", icon: <Clock className="w-6 h-6 text-brand-primary" /> },
    { value: `${totalProjects}+`, label: "Projects", icon: <Building2 className="w-6 h-6 text-brand-primary" /> },
    { value: "1", label: "In-House RMC Plant", icon: <Factory className="w-6 h-6 text-brand-primary" /> },
    { value: "4", label: "Excavators", icon: <HardHat className="w-6 h-6 text-brand-primary" /> },
    { value: "10", label: "Dumpers", icon: <Truck className="w-6 h-6 text-brand-primary" /> },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_DETAILS.website}/#organization`,
    "name": BUSINESS_DETAILS.name,
    "url": BUSINESS_DETAILS.website,
    "telephone": BUSINESS_DETAILS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DETAILS.address
    },
    "founder": founders.map(f => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": f.role
    })),
    "employee": coreTeam.map(e => ({
      "@type": "Person",
      "name": e.name,
      "jobTitle": e.role
    }))
  };

  return (
    <div className="flex flex-col w-full bg-brand-bg pb-24 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==========================================
          HERO SECTION — Company Profile intro
      ========================================== */}
      <section className="py-16 md:py-24 bg-brand-text text-white relative overflow-hidden group">
        <div className="absolute inset-0 z-0 bg-brand-text">
          <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay transition-transform duration-[20s] ease-linear group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-transparent"></div>
        </div>

        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight font-bold text-sm mb-6 backdrop-blur-md shadow-lg hover:bg-brand-primary/30 transition-colors cursor-default">
            <Award className="w-4 h-4 mr-2" />
            Company Profile
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-lg">
            SHREE SAMARTH KRUPA BUILDERS & DEVELOPERS
            <br className="hidden md:block" />
            <span className="text-brand-primaryLight">
              Building Legacies, <br className="hidden md:block" />
            </span>
            
            <span className="text-brand-primaryLight">
              Delivering Trust
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow">
            {BUSINESS_DETAILS.name} is a Panvel-based real estate development company built on 30+ years of hands-on construction experience. What began as one man's work on the ground in Karanjade has grown into a company with an in-house RMC plant, its own equipment fleet, and a portfolio spanning completed, ongoing, and upcoming residential and redevelopment projects across Panvel and Navi Mumbai. Today, we are widely recognised as Panvel's leading name in redevelopment — trusted with projects other builders considered too difficult to take on.
          </p>
        </div>
      </section>

      {/* ==========================================
          PROOF BAR — Trust Signals
      ========================================== */}
      <section className="bg-white border-b border-gray-100 py-10 md:py-12 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y-0">
            {statHighlights.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 group cursor-default hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 group-hover:bg-brand-primary/15 flex items-center justify-center mb-4 transition-colors duration-300 border border-brand-primary/10">
                  {stat.icon}
                </div>
                <span className="text-4xl md:text-5xl font-black text-brand-text tracking-tight leading-none group-hover:text-brand-primary transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold text-brand-muted uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PRESENTATION VIDEO SECTION — SHRAVAN SIDDHANT
      ========================================== */}
      <section className="py-20 md:py-28 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-sm font-extrabold tracking-widest mb-4 uppercase shadow-sm">
              <Video className="w-4 h-4 mr-2 -mt-0.5" />
              Discover Shravan Siddhant
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              A Glimpse into Our Future
            </h2>
            <p className="text-lg text-brand-muted max-w-3xl mx-auto font-light leading-relaxed">
              Watch our latest promotional showcase featuring <strong>Shravan Siddhant</strong> — our upcoming flagship project — alongside a deeper look into the values, operational scale, and uncompromising quality that define Shree Samarth Krupa Builders & Developers.
            </p>
          </div>

          {/* Custom Interactive Client Component */}
          <PresentationVideo src="https://res.cloudinary.com/r11mrpj9/video/upload/v1789714043/profile_video.mp4" />
          
        </div>
      </section>

      {/* ==========================================
          REDEVELOPMENT LEADERSHIP BANNER
      ========================================== */}
      <section className="py-16 md:py-24 bg-brand-primary relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
          <Layers className="w-96 h-96 text-white" />
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/15 border border-white/25 font-bold text-sm mb-6 backdrop-blur-md shadow-lg">
            <TrendingUp className="w-4 h-4 mr-2" />
            Redevelopment Leadership
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
            Panvel's Trusted Name in Redevelopment
          </h2>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
            Starting from our roots in Karanjade, Shree Samarth Krupa Builders & Developers has grown into Panvel's go-to name for redevelopment — taking on some of the region's most critical redevelopment projects, including buildings long considered too difficult to redevelop, and delivering where others couldn't. Backed by our own RMC plant and equipment fleet, we don't depend on third parties to keep a redevelopment project moving.
          </p>
        </div>
      </section>

      {/* ==========================================
          OUR STORY
      ========================================== */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/20 text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Our Story
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
              From one man's work on a Karanjade construction site to leading Panvel's most demanding redevelopment projects — this is the journey of Shree Samarth Krupa Builders & Developers.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary/20 via-brand-primary/10 to-transparent md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-12">
              {storyTimeline.map((step, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start gap-6 group ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)] ring-4 ring-white z-10 transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                    <div className="bg-brand-bg border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors"></div>
                      <span className="text-xs font-extrabold text-brand-primary uppercase tracking-wider bg-white px-3 py-1 rounded-lg shadow-sm border border-gray-100 inline-block mb-3">
                        {step.marker}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-text mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MISSION & VISION SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

            <div className="p-10 lg:p-12 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-start relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-default">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-bl-[150px] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="w-20 h-20 bg-brand-bg shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-100 relative z-10 group-hover:bg-brand-primary/10 transition-colors duration-300">
                <Target className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-6 relative z-10 tracking-tight">Our Mission</h3>
              <p className="text-brand-muted leading-relaxed text-lg lg:text-xl relative z-10 font-light">
                To construct high-quality, durable, and thoughtfully designed residential and commercial spaces. We aim to empower families with secure, verified homes and provide businesses with prime retail environments across Navi Mumbai's growing corridors.
              </p>
            </div>

            <div className="p-10 lg:p-12 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-start relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-default">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-bl-[150px] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-125"></div>
              <div className="w-20 h-20 bg-brand-bg shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-100 relative z-10 group-hover:bg-brand-primary/10 transition-colors duration-300">
                <Eye className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-6 relative z-10 tracking-tight">Our Vision</h3>
              <p className="text-brand-muted leading-relaxed text-lg lg:text-xl relative z-10 font-light">
                To be the most trusted and reliable real estate developer in Maharashtra, recognized for our uncompromising build quality, transparent dealings, and our commitment to handing over keys exactly when promised.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          THE FOUNDERS SECTION
      ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Led by <span className="text-brand-primary">Vision & Integrity</span>
            </h2>
            <p className="text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed font-light">
              Our leadership is deeply involved in every phase of the construction lifecycle, ensuring that the foundational values of Shree Samarth Krupa Builders & Developers are reflected in every brick laid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-brand-bg rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-gray-200/60 pb-8">
                  <div className="relative w-28 h-28 shrink-0 rounded-full flex items-center justify-center bg-brand-primary/10 border-4 border-white shadow-md overflow-hidden group-hover:shadow-brand-primary/20 transition-shadow">
                    {founder.image ? (
                      <Image 
                        src={founder.image} 
                        alt={founder.name} 
                        fill 
                        sizes="112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    ) : (
                      <span className="text-3xl font-black text-brand-primary">{getInitials(founder.name)}</span>
                    )}
                  </div>
                  <div className="text-center sm:text-left mt-2 sm:mt-0">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{founder.name}</h3>
                    <p className="inline-block bg-white px-4 py-1.5 rounded-lg text-brand-primary font-bold text-sm border border-gray-100 shadow-sm">{founder.role}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-brand-muted leading-relaxed text-lg font-light italic">
                    "{founder.bio}"
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          CORE MANAGEMENT TEAM SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/20 text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">
              The Execution Engine
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Core Team
            </h2>
            <p className="text-lg text-brand-muted max-w-3xl mx-auto font-light leading-relaxed">
              Our operations, compliance, accounts, and sales are driven by dedicated professionals who ensure a seamless experience for every homebuyer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group hover:-translate-y-1">

                <div className="relative w-24 h-24 shrink-0 mx-auto sm:mx-0 rounded-full flex items-center justify-center bg-brand-bg border-4 border-gray-100 shadow-sm group-hover:border-brand-primary/20 transition-colors duration-300 overflow-hidden">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      sizes="96px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <span className="text-2xl font-bold text-brand-text/50">{getInitials(member.name)}</span>
                  )}
                </div>

                <div className="flex flex-col flex-grow text-center sm:text-left pt-2">
                  <h4 className="font-extrabold text-brand-text text-xl mb-1 group-hover:text-brand-primary transition-colors">{member.name}</h4>
                  <p className="text-sm text-brand-primary font-bold mb-3">{member.role}</p>
                  <p className="text-brand-muted text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          OUR PROJECTS — Completed / Ongoing / Upcoming
      ========================================== */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/20 text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Projects, Past & Present
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light leading-relaxed">
              A look at everything we've delivered, everything we're building right now, and what's coming next.
            </p>
          </div>

          {ongoingProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-success shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                Ongoing Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {completedProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(var(--brand-primary-rgb),0.5)]"></span>
                Completed Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

          {upcomingProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.5)]"></span>
                Upcoming Projects
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ==========================================
          THE SHREE SAMARTH KRUPA PHILOSOPHY (Core Values)
      ========================================== */}
      <section className="py-24 bg-brand-text text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none transition-transform duration-[20s] group-hover:-translate-x-10">
          <Leaf className="w-96 h-96 text-brand-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">The Shree Samarth Krupa Philosophy</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              The foundational pillars that dictate how we build and how we serve our homebuyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm cursor-default shadow-xl">
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          DUAL CALL TO ACTION
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-10 rounded-3xl bg-brand-bg border border-gray-100 text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                <Building2 className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-3">Looking for a Home?</h3>
              <p className="text-brand-muted mb-8 font-light leading-relaxed">
                Explore our completed, ongoing, and upcoming residential projects across Panvel and Navi Mumbai.
              </p>
              <Link
                href="/projects"
                className="px-8 py-4 bg-brand-primary hover:bg-brand-primaryLight text-white rounded-xl font-bold transition duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1"
              >
                <Building2 size={20} /> View Our Projects
              </Link>
            </div>

            <div className="p-10 rounded-3xl bg-brand-text text-white text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Handshake className="w-7 h-7 text-brand-primaryLight" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Have a Redevelopment Project?</h3>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                If you're part of a society or building committee evaluating redevelopment partners, talk to our team directly.
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-brand-text hover:bg-gray-100 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1"
              >
                Contact Us <ArrowRight size={20} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}