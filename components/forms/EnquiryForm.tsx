"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";

export const EnquiryForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    purpose: 'Buying a Flat', // Default option
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-strip non-numeric characters for the mobile field
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Validation
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Briefly show success state before redirecting
        setTimeout(() => {
          router.push('/thank-you');
        }, 800);
      } else {
        setStatus('error');
        alert("Something went wrong on our end. Please try calling us instead.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name <span className="text-brand-primary">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-gray-900"
          />
        </div>

        {/* Mobile Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="mobile" className="text-sm font-bold text-gray-700">Mobile Number <span className="text-brand-primary">*</span></label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              maxLength={10}
              placeholder="9876543210"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Email Field (Optional) */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-gray-900"
          />
        </div>

        {/* Purpose Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="purpose" className="text-sm font-bold text-gray-700">Purpose of Enquiry</label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-gray-900 cursor-pointer appearance-none"
          >
            <option value="Buying a Flat">Buying a Flat</option>
            <option value="Site Visit Request">Site Visit Request</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      {/* Message Field (Optional) */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-bold text-gray-700">Message <span className="text-gray-400 font-normal">(Optional)</span></label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="I'm interested in the Shravan Siddhant project..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-white text-gray-900 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="w-full py-4 mt-2 bg-brand-primary hover:bg-brand-primaryLight text-white font-extrabold rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300 disabled:opacity-80 flex items-center justify-center gap-2"
      >
        {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
        {status === 'success' && <CheckCircle2 size={20} />}
        {status === 'idle' || status === 'error' ? 'Submit Enquiry' : status === 'loading' ? 'Sending...' : 'Received!'}
      </button>

      {status === 'error' && (
        <p className="text-brand-primary text-sm text-center font-medium mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};