import React from 'react';
import Section from '../ui/Section';
import { CheckIcon } from '../icons';

interface BenefitItem {
  text: string;
}

interface BenefitsProps {
  title: string;
  subtitle?: string;
  benefits: BenefitItem[];
  className?: string;
}

const Benefits: React.FC<BenefitsProps> = ({
  title,
  subtitle,
  benefits,
  className = '',
}) => {
  return (
    <Section background="primary" className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-md flex items-start"
          >
            <div className="mr-4 text-primary-600 mt-1">
              <CheckIcon className="w-5 h-5" />
            </div>
            <p className="text-neutral-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
