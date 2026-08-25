import React from "react";
import Image from "next/image";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Mail, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

// ==========================================
// FAQ DATA 
// ==========================================
const faqs = [
  {
    question: "How can I schedule a site visit?",
    answer: "You can schedule a site visit by filling out the enquiry form on this page or calling our sales office directly. Our team will arrange a convenient time for your visit."
  },
  {
    question: "Do you assist with home loans?",
    answer: "Yes, our projects are approved by major banks and financial institutions. Our sales team will guide you through the entire loan approval and documentation process."
  },
  {
    question: "What is the current status of your ongoing projects?",
    answer: "Construction is proceeding in full swing across our active sites like Shravan Siddhant. Please contact our team for the latest availability, pricing, and timeline updates."
  }
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${BUSINESS_DETAILS.website}/contact/#webpage`,
        "url": `${BUSINESS_DETAILS.website}/contact`,
        "name": `Contact ${BUSINESS_DETAILS.name}`
      },
      {
        "@type": "RealEstateBuilder",
        "@id": `${BUSINESS_DETAILS.website}/#organization`,
        "name": BUSINESS_DETAILS.name,
        "image": `${BUSINESS_DETAILS.website}/images/brand/logo-full.png`,
        "telephone": BUSINESS_DETAILS.phone,
        "email": BUSINESS_DETAILS.email,
        "url": BUSINESS_DETAILS.website,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_DETAILS.address,
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      }
    ]
  };

  return (
    <main className="flex flex-col w-full bg-brand-bg min-h-screen transition-colors duration-300 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ==========================================
          HERO SECTION 
      ========================================== */}
      <section className="relative w-full py-12 lg:py-20 bg-brand-text overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/brand/hero-poster.jpeg" 
            alt={`Contact ${BUSINESS_DETAILS.shortName}`} 
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#221F1C]/95 via-[#221F1C]/80 to-[#221F1C]"></div>
        </div>

        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primaryLight font-bold text-sm mb-8 backdrop-blur-md shadow-lg">
            <MessageSquare className="w-4 h-4 mr-2" />
            We Are Here To Help
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Get In <span className="text-brand-primaryLight">Touch</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-0 font-light drop-shadow">
            Whether you are looking to book a new home, enquire about commercial spaces, or schedule a site visit, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTENT SPLIT: INFO & FORM
      ========================================== */}
      <section className="py-20 lg:py-32 bg-white transition-colors duration-300 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:w-5/12 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-8 tracking-tight">
                  Contact Details
                </h2>
                <p className="text-brand-muted leading-relaxed text-lg font-light mb-10">
                  Connect with our sales team directly or visit our corporate office. We operate with complete transparency and zero hidden terms.
                </p>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Phone className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</h4>
                      <a href={`tel:${BUSINESS_DETAILS.phone.replace(/\D/g, '')}`} className="text-xl md:text-2xl font-bold text-brand-text hover:text-brand-primary transition-colors">
                        {BUSINESS_DETAILS.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Mail className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1 w-full overflow-hidden">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                      <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-lg md:text-xl font-bold text-brand-text hover:text-brand-primary transition-colors truncate block">
                        {BUSINESS_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <Clock className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Working Hours</h4>
                      <p className="text-lg font-medium text-brand-text">
                        Mon - Sun: 10:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Corporate Office */}
                  <div className="flex items-start group">
                    <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm shrink-0 mr-5 transition-colors group-hover:border-brand-primary group-hover:bg-brand-primary/5">
                      <MapPin className="w-6 h-6 text-brand-primary transition-transform group-hover:scale-110" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Corporate Office</h4>
                      <a href="https://maps.google.com/?q=Niharika+Mirrage+Kharghar" target="_blank" rel="noreferrer" className="text-base font-medium text-brand-muted hover:text-brand-primary transition-colors leading-relaxed block mt-1">
                        {BUSINESS_DETAILS.address}
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Links */}
              <div className="pt-10 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect Socially</h4>
                <div className="flex gap-4">
                  <a 
                    href={BUSINESS_DETAILS.socials.instagram} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all group text-brand-muted"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href={BUSINESS_DETAILS.socials.facebook} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all group text-brand-muted"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Unified Enquiry Form */}
            <div className="lg:w-7/12 relative" id="enquire">
              <div className="absolute inset-0 bg-brand-primary/5 transform -rotate-2 rounded-[40px] -z-10"></div>
              
              <div className="bg-brand-bg p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 relative z-10 min-h-[500px] flex flex-col justify-center">
                <div className="mb-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-2">
                    Send an Enquiry
                  </h3>
                  <p className="text-brand-muted text-sm font-light">
                    Fill out the form below and we will get back to you shortly.
                  </p>
                </div>

                <EnquiryForm />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold text-brand-text mb-3">{faq.question}</h4>
                <p className="text-brand-muted leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          DYNAMIC MAP SECTION 
      ========================================== */}
      <section className="relative w-full h-[500px] bg-gray-100 border-t border-gray-200 group">
        <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]"></div>
        
        <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="text-brand-primary" size={20} />
            </div>
            <h3 className="font-extrabold text-brand-text text-lg">Visit Our Office</h3>
          </div>
          <p className="text-sm text-brand-muted font-light leading-relaxed mb-4 ml-13">
            {BUSINESS_DETAILS.address}
          </p>
          <a 
            href="https://maps.google.com/?q=Niharika+Mirrage+Kharghar" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primaryLight transition-colors"
          >
            Get Directions <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <iframe 
          title={`${BUSINESS_DETAILS.name} Office Location`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Niharika Mirrage, Sector 10, Kharghar, Navi Mumbai")}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>

    </main>
  );
}