
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`glassmorphism rounded-xl shadow-2xl p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-blue-steel/30 dark:hover:shadow-orange-vibrant/30 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
    