import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  className = '',
}) => {
  return (
    <div className={`relative py-16 md:py-24 bg-primary-800 ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-xl mb-8 text-white/90">{subtitle}</p>
          <Button href={buttonLink} size="lg" variant="accent">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
