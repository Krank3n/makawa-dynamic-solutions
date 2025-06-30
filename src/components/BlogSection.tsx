
import React from 'react';
import Image from 'next/image';
import { BLOG_POSTS_DATA } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const BlogSection: React.FC = () => {
  if (!BLOG_POSTS_DATA || BLOG_POSTS_DATA.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-16 md:py-24 bg-white dark:bg-charcoal-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Latest Insights" subtitle="Our Blog" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_POSTS_DATA.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms` }}
              role="article"
              aria-labelledby={`blog-title-${post.id}`}
            >
              <GlassCard className="h-full flex flex-col group overflow-hidden transform transition-all duration-300 hover:scale-105 p-0">
                <div className="relative aspect-w-16 aspect-h-9 w-full" style={{paddingBottom: '56.25%'}}>
                  <Image
                    src={post.imageUrl}
                    alt={`Featured image for ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 
                    id={`blog-title-${post.id}`}
                    className="text-xl font-display font-semibold mb-3 text-charcoal-deep dark:text-white group-hover:text-orange-vibrant dark:group-hover:text-orange-vibrant transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal-deep/70 dark:text-gray-warm/80 mb-2">
                    By {post.author || 'Makawa Team'} - <span className="italic">{post.publishDate}</span>
                  </p>
                  <p className="text-charcoal-deep/80 dark:text-gray-warm/90 mb-6 leading-relaxed text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" href={`#${post.slug}`} asLink aria-label={`Read more about ${post.title}`}>
                      Read More
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

export default BlogSection;
