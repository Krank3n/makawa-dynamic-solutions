
import React from 'react';
import { SERVICES_DATA } from '@/constants';
import GlassCard from '@/components/ui/GlassCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-deep/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Core Services" subtitle="What We Offer" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className={`animate-fade-in-up`} style={{animationDelay: `${index * 200}ms`}}>
              <GlassCard className="h-full group hover:scale-105 transform transition-all duration-300">
                <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0 p-4 bg-orange-vibrant/10 dark:bg-blue-steel/20 rounded-full group-hover:bg-orange-vibrant dark:group-hover:bg-blue-steel transition-colors duration-300">
                    {React.cloneElement(service.icon, { className: "w-12 h-12 md:w-16 md:h-16 text-orange-vibrant dark:text-blue-steel group-hover:text-white transition-colors duration-300" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-3 text-charcoal-deep dark:text-white group-hover:text-orange-vibrant dark:group-hover:text-orange-vibrant transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-deep/80 dark:text-gray-warm/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" href="#contact" asLink>
                        Learn More
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
