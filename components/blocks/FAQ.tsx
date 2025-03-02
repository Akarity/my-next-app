"use client";

import React, { useState } from 'react';
import Section from '../ui/Section';
import { ChevronDownIcon } from '../icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({
  title,
  subtitle,
  faqs,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section background="light" className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="mb-4 border border-neutral-200 rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              className="w-full flex items-center justify-between p-5 bg-white hover:bg-neutral-50 transition-colors text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-primary-800">{faq.question}</h3>
              <div className={`text-primary-600 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </button>
            
            {/* Answer */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 bg-white">
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
