import React from 'react';
import Section from '../ui/Section';
import { getIconByName } from '../icons';

interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

const Process: React.FC<ProcessProps> = ({
  title,
  subtitle,
  steps,
  className = '',
}) => {
  return (
    <Section background="secondary" className={className}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="relative">
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <div className="text-primary-600">
                  {step.icon ? (
                    getIconByName(step.icon, 'w-8 h-8')
                  ) : (
                    <span className="text-2xl font-bold">{index + 1}</span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connecting Line (visible on larger screens) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-200 -translate-y-1/2 z-0"></div>
      </div>
    </Section>
  );
};

export default Process;
