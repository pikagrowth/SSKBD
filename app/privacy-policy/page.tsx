import React from "react";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: `Privacy Policy | ${BUSINESS_DETAILS.shortName}`,
  description: `Privacy policy and data collection terms for ${BUSINESS_DETAILS.name}'s website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-brand-bg py-20 md:py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-gray-200 pb-8 transition-colors">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight transition-colors">
            Privacy Policy
          </h1>
          <p className="text-brand-muted transition-colors">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 transition-colors">
          
          <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-4 mb-8 text-sm text-brand-text rounded-r-lg transition-colors">
            <strong>Disclaimer:</strong> This document serves as a general privacy framework for {BUSINESS_DETAILS.name}. It does not constitute formal legal advice.
          </div>

          <p>
            At {BUSINESS_DETAILS.name} ("we," "us," or "our"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website ({BUSINESS_DETAILS.website}) and submit details through our enquiry forms.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our real estate projects. The personal information we collect may include:</p>
          <ul>
            <li><strong>Contact Data:</strong> Full name, mobile number, and email address.</li>
            <li><strong>Requirement Data:</strong> Property preferences, project of interest, and any custom messages you provide in your enquiry.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">2. How We Use Your Information</h2>
          <p>We use personal information collected via our website for the following business purposes:</p>
          <ul>
            <li><strong>To facilitate real estate inquiries:</strong> We use your information to contact you regarding the projects or properties you inquired about.</li>
            <li><strong>Communication:</strong> By submitting your details on our forms, you explicitly consent to receiving follow-up communications, project updates, and site visit scheduling via Phone Call, SMS, WhatsApp, and Email.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">3. Data Sharing and Third Parties</h2>
          <p><strong>We do not sell, rent, or trade your personal information to third parties.</strong></p>
          <p>We may share your data only in the following specific situations:</p>
          <ul>
            <li><strong>Internal Operations:</strong> With our internal sales team and customer relationship managers solely to assist you with your property purchase.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, or a judicial proceeding.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">4. Cookies and Local Storage</h2>
          <p>We may use cookies and similar tracking technologies to access or store information to improve website performance and user experience. We may use basic, anonymized analytics to understand how visitors interact with our website.</p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">5. RERA Disclaimer</h2>
          <p>The projects listed on our website are subject to their respective Maharashtra Real Estate Regulatory Authority (MahaRERA) registrations.</p>
          <p>While we strive for absolute accuracy, the visuals, floor plans, and amenities depicted on this site may be artistic impressions. We strongly advise all buyers to independently verify project details and MahaRERA registration numbers on the official MahaRERA website prior to making any financial commitments.</p>

          <h2 className="text-2xl font-bold text-brand-text mt-10 mb-4 transition-colors">6. Contact Us</h2>
          <p>If you have questions or comments about this policy, or if you wish to request the deletion of your personal data from our systems, you may contact us at:</p>
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