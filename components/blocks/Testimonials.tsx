import React from 'react';
import Section from '../ui/Section';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  testimonials,
  className = '',
}) => {
  return (
    <Section background="white" className={className}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-neutral-50 p-8 rounded-xl shadow-md flex flex-col"
          >
            {/* Quote */}
            <div className="mb-6">
              <svg className="w-10 h-10 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4v-4z" />
              </svg>
              <p className="text-neutral-700 italic">{testimonial.quote}</p>
            </div>
            
            {/* Author */}
            <div className="mt-auto flex items-center">
              <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-primary-200 flex items-center justify-center">
                <span className="text-primary-800 font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-primary-800">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
