"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { BUSINESS_DETAILS, NAV_LINKS } from "@/lib/constants";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Premium feature: Shrink header, add glassmorphism, and increase shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Premium feature: Auto-close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleEnquireClick = () => {
    setIsMobileMenuOpen(false);
    router.push('/contact');
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-2xl shadow-lg border-gray-200/50 py-1" 
            : "bg-white/80 backdrop-blur-xl shadow-sm border-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SLIM NAVBAR HEIGHT: h-14 on mobile, h-16 on desktop */}
          <div className="flex justify-between items-center transition-all duration-300 ease-in-out h-14 md:h-16">
            
            {/* OVERHANGING LOGO TRICK */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              {/* Negative margins (-my-4) allow the logo to be bigger than the navbar without stretching it */}
              <div className="relative w-16 h-16 md:w-20 md:h-18 -my-2 md:-my-4 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/brand/logo-full.png" 
                  alt={`${BUSINESS_DETAILS.name} Logo`}
                  fill
                  priority
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-extrabold text-lg md:text-xl text-brand-text leading-tight tracking-tight transition-colors duration-300 group-hover:text-brand-primary">
                  Shree Samarth Krupa Builders & Developers
                </h1>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 h-full">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                
                return (
                  <div key={link.name} className="relative h-full flex items-center group">
                    <Link 
                      href={link.href}
                      className={`text-sm font-bold transition-colors h-full flex items-center relative ${
                        isActive 
                          ? "text-brand-primary" 
                          : "text-gray-800 hover:text-brand-primary"
                      }`}
                    >
                      {link.name}
                      {/* Premium Active Indicator Dot */}
                      {isActive && (
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full animate-in zoom-in duration-300" />
                      )}
                    </Link>
                  </div>
                );
              })}
              
              {/* Desktop Actions */}
              <div className="flex items-center gap-4 ml-2 pl-6 border-l border-gray-200">
                <button 
                  onClick={handleEnquireClick}
                  className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primaryLight text-white text-sm font-extrabold rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Enquire Now
                </button>
              </div>
            </nav>

            {/* Mobile Right Section: Menu Button */}
            <div className="flex items-center gap-3 lg:hidden relative z-50">
              <button 
                className="p-2 text-gray-700 bg-gray-100/80 backdrop-blur-md hover:bg-gray-200 rounded-xl border border-transparent transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Premium Mobile Nav Drawer */}
      <div 
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.3)] border-l border-gray-100 transition-transform duration-500 ease-out overflow-y-auto flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-28 pb-8 px-6 gap-2 flex-grow">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <div key={link.name} className="flex flex-col">
                <Link 
                  href={link.href}
                  className={`text-base font-extrabold p-4 rounded-2xl transition-colors flex items-center justify-between group ${
                    isActive 
                      ? "bg-brand-primary/10 text-brand-primary" 
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  {isActive && <ArrowRight size={16} className="text-brand-primary" />}
                </Link>
              </div>
            );
          })}
          
          <div className="mt-auto pt-8">
            <button 
              className="w-full py-4 bg-brand-primary text-white font-extrabold rounded-xl shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2" 
              onClick={handleEnquireClick}
            >
              Enquire Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};