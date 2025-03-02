import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface AboutProps {
  title: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  locale: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({
  title,
  content,
  ctaText,
  ctaLink,
  image,
  locale,
  className = '',
}) => {
  return (
    <Section className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colored Box instead of Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-primary-100 flex items-center justify-center">
          <div className="text-primary-800 text-4xl font-bold">Harmony Mediation</div>
        </div>
        
        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p>{content}</p>
          </div>
          
          {ctaText && ctaLink && (
            <Button href={ctaLink} variant="primary">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};

export default About;
