"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const ThankYouRedirect = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-brand-bg transition-colors duration-300">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center border border-gray-100 transition-colors duration-300">
        <div className="w-20 h-20 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
          <CheckCircle2 className="w-10 h-10 text-brand-success transition-colors duration-300" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4 transition-colors duration-300">
          Thank You!
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed transition-colors duration-300">
          We have received your details. A member of the SSKBD team will reach out to you shortly to assist with your requirements.
        </p>
        
        <Link href="/">
          <button className="w-full py-3 px-6 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};