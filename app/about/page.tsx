import React from "react";
import Link from "next/link";
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
  Leaf
} from "lucide-react";
import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { team } from "@/lib/data/team";

export const metadata: Metadata = {
  title: `About Us | Meet the ${BUSINESS_DETAILS.shortName} Team`,
  description: `Learn about the journey of ${BUSINESS_DETAILS.name}. Discover our leadership team and our commitment to uncompromising quality construction in Panvel and Navi Mumbai.`,
  keywords: [
    "Shree Samarth Krupa Builders Team",
    "Mangesh Shelar",
    "Mansi Shelar",
    "Panvel real estate developers",
    "Navi Mumbai builders",
    "SSKBD history",
    "Trusted builders in Panvel"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${BUSINESS_DETAILS.name}`,
    description: "Discover how our dedicated team brings quality, transparency, and on-time delivery to real estate development in Panvel and Navi Mumbai.",
    url: "/about",
    siteName: BUSINESS_DETAILS.name,
    type: "profile",
  }
};

// ==========================================
// DATA CONFIGURATION
// ==========================================
const milestones = [
  {
    year: "The Foundation",
    title: "Establishing Trust",
    description: "Started with a vision to deliver absolute transparency and superior construction quality to the local real estate market in Panvel.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-success" />
  },
  {
    year: "Portfolio Expansion",
    title: "Residential Landmarks",
    description: "Grew our portfolio by executing successful residential projects, focusing on well-planned spaces and premium materials that families are proud to call home.",
    icon: <Building2 className="w-6 h-6 text-brand-success" />
  },
  {
    year: "Commercial Growth",
    title: "Mixed-Use Developments",
    description: "Expanded into mixed-use and commercial spaces, providing high-visibility retail environments that help local businesses thrive.",
    icon: <Briefcase className="w-6 h-6 text-brand-success" />
  },
  {
    year: "Community Focus",
    title: "Delivering Happiness",
    description: "Today, we measure our success not just by the structures we build, but by the hundreds of happy families and businesses thriving in our spaces.",
    icon: <Users className="w-6 h-6 text-brand-success" />
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

// Helper to generate initials for missing team photos
const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2);
};

export default function AboutPage() {
  const founders = team.filter(member => member.role.toLowerCase().includes('founder'));
  const coreTeam = team.filter(member => !member.role.toLowerCase().includes('founder'));

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
          HERO SECTION
      ========================================== */}
      <section className="py-16 md:py-24 bg-brand-text text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-brand-text">
          <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-transparent"></div>
        </div>
        
        {/* Subtle Brand Accents in Background */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight font-bold text-sm mb-6 backdrop-blur-md shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Company Profile
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white">
            Building Legacies, <br className="hidden md:block" />
            <span className="text-brand-primaryLight">
              Delivering Trust
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light drop-shadow">
            We are {BUSINESS_DETAILS.name}. A premier real estate development firm in Panvel built on the principles of honest construction, absolute transparency, and on-time delivery.
          </p>
        </div>
      </section>

      {/* ==========================================
          MISSION & VISION SECTION
      ========================================== */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission Card */}
            <div className="p-10 lg:p-12 rounded-3xl bg-brand-bg border border-gray-100 flex flex-col items-start relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-100 relative z-10">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-3xl font-bold text-brand-text mb-6 relative z-10">Our Mission</h3>
              <p className="text-brand-muted leading-relaxed text-lg relative z-10 font-light">
                To construct high-quality, durable, and thoughtfully designed residential and commercial spaces. We aim to empower families with secure, verified homes and provide businesses with prime retail environments across Navi Mumbai's growing corridors.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="p-10 lg:p-12 rounded-3xl bg-brand-bg border border-gray-100 flex flex-col items-start relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 border border-gray-100 relative z-10">
                <Eye className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-3xl font-bold text-brand-text mb-6 relative z-10">Our Vision</h3>
              <p className="text-brand-muted leading-relaxed text-lg relative z-10 font-light">
                To be the most trusted and reliable real estate developer in Maharashtra, recognized for our uncompromising build quality, transparent dealings, and our commitment to handing over keys exactly when promised.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          THE FOUNDERS SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Led by <span className="text-brand-primary">Vision & Integrity</span>
            </h2>
            <p className="text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed font-light">
              Our leadership is deeply involved in every phase of the construction lifecycle, ensuring that the foundational values of SSKBD are reflected in every brick laid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 border-b border-gray-100 pb-8">
                  <div className="relative w-28 h-28 shrink-0 rounded-full flex items-center justify-center bg-brand-primary/10 border-4 border-white shadow-md">
                    <span className="text-3xl font-black text-brand-primary">{getInitials(founder.name)}</span>
                  </div>
                  <div className="text-center sm:text-left mt-2 sm:mt-0">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-text mb-2">{founder.name}</h3>
                    <p className="inline-block bg-brand-bg px-4 py-1.5 rounded-lg text-brand-primary font-bold text-sm border border-gray-100">{founder.role}</p>
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
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 text-brand-primary border border-brand-primary/20 text-sm font-bold tracking-widest mb-4 uppercase">
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
              <div key={idx} className="bg-brand-bg rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group">
                
                <div className="relative w-24 h-24 shrink-0 mx-auto sm:mx-0 rounded-full flex items-center justify-center bg-white border-4 border-gray-100 shadow-sm group-hover:border-brand-primary/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-brand-text/50">{getInitials(member.name)}</span>
                </div>
                
                <div className="flex flex-col flex-grow text-center sm:text-left pt-2">
                  <h4 className="font-extrabold text-brand-text text-xl mb-1">{member.name}</h4>
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
          OUR METHODOLOGY & PROCESS SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight">
              Our Growth Journey
            </h2>
            <p className="text-lg text-brand-muted max-w-2xl mx-auto font-light">
              From our very first brick to becoming a trusted name in Panvel's skyline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="text-5xl font-black text-gray-50 absolute top-4 right-6 pointer-events-none group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                
                <div className="w-14 h-14 bg-brand-bg rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative z-10">
                  {step.icon}
                </div>
                
                <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2 relative z-10">
                  {step.year}
                </div>
                
                <h3 className="text-xl font-bold text-brand-text mb-3 relative z-10">{step.title}</h3>
                <p className="text-brand-muted leading-relaxed text-sm relative z-10 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          THE SSKBD PHILOSOPHY (Core Values)
      ========================================== */}
      <section className="py-24 bg-brand-text text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none">
          <Leaf className="w-96 h-96 text-brand-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">The SSKBD Philosophy</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              The foundational pillars that dictate how we build and how we serve our homebuyers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10">
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
          CALL TO ACTION
      ========================================== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-6 tracking-tight">
            Ready to find your dream space?
          </h2>
          <p className="text-lg text-brand-muted mb-10 font-light">
            Whether you are looking for a residential flat for your family or a commercial shop for your business, we have the perfect space for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-brand-primary hover:bg-brand-primaryLight text-white rounded-xl font-bold transition duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
            >
              <Building2 size={20} /> View Our Projects
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-brand-bg border border-gray-200 text-brand-text hover:border-brand-primary rounded-xl font-bold transition duration-300 flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}