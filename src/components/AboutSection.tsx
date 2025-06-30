
import React from 'react';
import Image from 'next/image';
import { TEAM_DATA, COMPANY_VALUES, COMPANY_NAME } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-deep/60 parallax-section" style={{backgroundImage: "url('/images/user-image-10.jpg')"}}>
      <div className="absolute inset-0 bg-white/80 dark:bg-charcoal-deep/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title={`About ${COMPANY_NAME}`} subtitle="Our Story & Values" />

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-charcoal-deep/80 dark:text-gray-warm/90 leading-relaxed animate-fade-in-up">
            {COMPANY_NAME} is a premier Australian construction and maintenance firm dedicated to delivering excellence. We combine innovative techniques with time-honored craftsmanship to bring your visions to life, ensuring every project reflects our commitment to quality, integrity, and client satisfaction.
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10 md:mb-12 text-charcoal-deep dark:text-white animate-fade-in-up">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <div key={value.id} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <GlassCard className="h-full text-center hover:border-orange-vibrant dark:hover:border-orange-vibrant">
                  <h4 className="text-xl font-display font-semibold mb-2 text-orange-vibrant">{value.title}</h4>
                  <p className="text-sm text-charcoal-deep/70 dark:text-gray-warm/80">{value.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-10 md:mb-12 text-charcoal-deep dark:text-white animate-fade-in-up">
            Meet Our Leaders
          </h3>
          <div className="d-flex justify-center justify-items-center">
            {TEAM_DATA.map((member, index) => (
              <div key={member.id} className="animate-fade-in-up group max-w-screen-xs" style={{animationDelay: `${index * 150}ms`}}>
                <div className="bg-white dark:bg-charcoal-deep/50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-blue-steel/30 dark:hover:shadow-orange-vibrant/30">
                  <div className="relative aspect-square">
                     <Image src={member.imageUrl} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-4 md:p-6">
                        <h4 className="text-xl md:text-2xl font-display font-semibold text-white">{member.name}</h4>
                        <p className="text-orange-vibrant font-medium">{member.role}</p>
                     </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-sm text-charcoal-deep/70 dark:text-gray-warm/80 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
