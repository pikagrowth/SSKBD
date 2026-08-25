import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-text mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-muted font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};