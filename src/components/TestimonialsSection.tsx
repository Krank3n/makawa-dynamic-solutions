
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA, ChevronLeftIcon, ChevronRightIcon } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  }, []);

  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-charcoal-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Client Success Stories" subtitle="What They Say" />
        <div className="relative max-w-3xl mx-auto">
          <GlassCard className="text-center shadow-2xl overflow-hidden">
            <div className="p-6 md:p-10 min-h-[300px] flex flex-col justify-center items-center">
              <Image
                src={currentTestimonial.avatarUrl}
                alt={currentTestimonial.name}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-6 border-4 border-orange-vibrant shadow-lg"
              />
              <blockquote className="text-lg md:text-xl italic text-charcoal-deep/80 dark:text-gray-warm/90 mb-6">
                "{currentTestimonial.quote}"
              </blockquote>
              <footer className="font-display">
                <p className="text-lg font-semibold text-charcoal-deep dark:text-white">{currentTestimonial.name}</p>
                {currentTestimonial.company && (
                  <p className="text-sm text-orange-vibrant">{currentTestimonial.company}</p>
                )}
              </footer>
            </div>
          </GlassCard>

          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 p-3 bg-white dark:bg-charcoal-deep/80 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-warm/20 focus:outline-none focus:ring-2 focus:ring-orange-vibrant transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6 text-orange-vibrant" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 p-3 bg-white dark:bg-charcoal-deep/80 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-warm/20 focus:outline-none focus:ring-2 focus:ring-orange-vibrant transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6 text-orange-vibrant" />
          </button>
        </div>
         <div className="flex justify-center mt-8">
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === index ? 'bg-orange-vibrant scale-125' : 'bg-gray-warm/50 dark:bg-gray-warm/30 hover:bg-orange-vibrant/70'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
