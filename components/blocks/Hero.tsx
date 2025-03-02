import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-[70vh] min-h-[500px] max-h-[800px] bg-primary-900 ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          <Button href={ctaLink} size="lg" variant="accent" className="mt-4">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
