import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: `Terms & Conditions | ${BUSINESS_DETAILS.shortName}`,
  description: `Terms and conditions of use for ${BUSINESS_DETAILS.name}'s website.`,
};

export default function TermsConditionsPage() {
  return (
    <div className="w-full bg-brand-bg py-20 md:py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-gray-200 pb-8 transition-colors">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight transition-colors">
            Terms & Conditions
          </h1>
          <p className="text-brand-muted transition-colors">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 transition-colors">
          
          <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-4 mb-8 text-sm text-brand-text rounded-r-lg transition-colors">
            <strong>Disclaimer:</strong> This document serves as a general Terms & Conditions framework for {BUSINESS_DETAILS.name}. It does not constitute formal legal advice.
          </div>

          <p>
            Welcome to {BUSINESS_DETAILS.name}. These Terms & Conditions outline the rules and regulations for the use of our website ({BUSINESS_DETAILS.website}) and the real estate development information we provide.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use {BUSINESS_DETAILS.name}'s website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">1. Nature of Business</h2>
          <p>
            {BUSINESS_DETAILS.name} acts as a Real Estate Builder and Developer. We develop, construct, and sell residential and commercial properties.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">2. Accuracy of Information</h2>
          <p>
            All property information, pricing, availability, and specifications listed on this website are subject to change without prior notice. The information provided is for general marketing and informational purposes only.
          </p>
          <ul>
            <li><strong>Project Approvals:</strong> Ongoing and upcoming projects listed are subject to the approval of local authorities (CIDCO, PMC, NAINA) and MahaRERA.</li>
            <li><strong>Visuals:</strong> Images, renders, and floor plans used on this website may be artistic impressions and not actual photographs. They do not constitute a legal offering.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, {BUSINESS_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use, subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website without explicit permission.</li>
            <li>Sell, rent, or sub-license material from this website.</li>
            <li>Reproduce, duplicate, or copy material from this website for commercial gain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">4. Limitation of Liability</h2>
          <p>
            In no event shall {BUSINESS_DETAILS.name}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. {BUSINESS_DETAILS.name} shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or reliance on its content.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">5. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent {BUSINESS_DETAILS.name} from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">6. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Panvel, Maharashtra.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">7. Contact Details</h2>
          <p>For any queries regarding our Terms & Conditions, please reach out to us at:</p>
          <ul className="list-none pl-0">
            <li><strong>{BUSINESS_DETAILS.name}</strong></li>
            <li>Email: {BUSINESS_DETAILS.email}</li>
            <li>Phone: {BUSINESS_DETAILS.phone}</li>
            <li>Address: {BUSINESS_DETAILS.address}</li>
          </ul>

        </div>
      </div>
    </div>
  );
}