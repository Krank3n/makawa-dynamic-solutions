
import React from 'react';
import Button from '@/components/ui/Button';
import { COMPANY_NAME } from '@/constants';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background - Replace with actual video if available */}
      {/*<video*/}
      {/*  autoPlay*/}
      {/*  loop*/}
      {/*  muted*/}
      {/*  playsInline*/}
      {/*  className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"*/}
      {/*  poster="/images/user-image-2.jpg"*/}
      {/*>*/}
      {/*  /!* Provide multiple sources for browser compatibility *!/*/}
      {/*  /!* <source src="/path/to/your/video.mp4" type="video/mp4" /> *!/*/}
      {/*  /!* <source src="/path/to/your/video.webm" type="video/webm" /> *!/*/}
      {/*  /!* Fallback image if video isn't supported or provided *!/*/}
      {/*  Your browser does not support the video tag.*/}
      {/*  <img src="/images/user-image-1.jpg" alt="Construction site background" />*/}
      {/*</video>*/}
      <div
          className="hero-video-overlay z-10 absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-warm/50 via-blue-steel/20 to-charcoal/50 dark:from-charcoal-deep/70 dark:via-blue-steel/50 dark:to-glass-surface-dark"></div>

      <div
          className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-text-focus-in">
          <span className="block dark:text-white text-charcoal-deep leading-tight">Dynamic Solutions</span>
          <span className="block text-orange-vibrant leading-tight">For Modern Construction</span>
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl text-charcoal dark:text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
          {COMPANY_NAME} delivers exceptional construction and maintenance services across Australia, blending innovation with reliability.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button href="#portfolio" asLink variant="primary" size="lg" className="animate-pulsate-cta">
            View Our Work
          </Button>
          <Button href="#contact" asLink variant="outline" size="lg" className="border-charcoal text-charcoal hover:bg-transparent hover:bg-charcoal dark:border-white dark:text-white dark:hover:bg-white hover:text-charcoal-deep dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-charcoal-deep">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
