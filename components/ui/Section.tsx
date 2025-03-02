import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary' | 'accent';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  // Base classes
  const baseClasses = 'py-12 md:py-24';
  
  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
    accent: 'bg-accent-50',
  };
  
  // Combine classes
  const sectionClasses = `${baseClasses} ${backgroundClasses[background]} ${className}`;
  
  return (
    <section className={sectionClasses} id={id}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
