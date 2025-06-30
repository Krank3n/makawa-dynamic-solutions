
import React from 'react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-charcoal-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="Our Craftsmanship" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
              style={{ perspective: '1000px', animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-w-4 aspect-h-3 w-full" style={{paddingBottom: '75%'}}>
                <Image
                  src={project.afterImageUrl}
                  alt={`${project.title} - After`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <Image
                  src={project.beforeImageUrl}
                  alt={`${project.title} - Before`}
                  fill
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-8">
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-orange-vibrant font-medium">{project.category}</p>
                        <p className="text-xs text-gray-300 mt-2 hidden sm:block">{project.description}</p>
                    </div>
                </div>
                 <div className="absolute top-4 right-4 bg-orange-vibrant text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    After
                 </div>
                 <div className="absolute top-4 right-4 bg-blue-steel text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Before
                 </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button variant="primary" size="lg" href="#contact" asLink>
                Discuss Your Project
            </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
