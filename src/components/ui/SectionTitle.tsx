
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', titleClassName = '', subtitleClassName = '' }) => {
  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      {subtitle && (
        <p className={`text-orange-vibrant font-semibold text-sm md:text-base uppercase tracking-wider mb-2 animate-fade-in-up ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal-deep dark:text-white animate-fade-in-up animation-delay-200 ${titleClassName}`}>
        {title}
      </h2>
      <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-orange-vibrant to-yellow-golden mx-auto rounded-full animate-fade-in-up animation-delay-400"></div>
    </div>
  );
};

export default SectionTitle;
    