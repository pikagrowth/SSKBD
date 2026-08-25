import React from "react";
import type { Metadata } from "next";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { ThankYouRedirect } from "@/components/forms/ThankYouRedirect";

export const metadata: Metadata = {
  title: `Thank You | ${BUSINESS_DETAILS.shortName}`,
  description: `Thank you for reaching out to ${BUSINESS_DETAILS.name}. Our team will contact you shortly.`,
};

export default function ThankYouPage() {
  return (
    <div className="w-full flex-1 flex flex-col pt-20 bg-brand-bg transition-colors duration-300">
      <ThankYouRedirect />
    </div>
  );
}