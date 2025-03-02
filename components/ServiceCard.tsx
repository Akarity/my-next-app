import React from 'react';
import Link from 'next/link';
import { Service } from '@/utils/services';
import Card from './ui/Card';
import { getIconByName } from './icons';

interface ServiceCardProps {
  service: Service;
  locale: string;
  showImage?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  locale,
  showImage = true,
  className = '',
}) => {
  const { id, title, shortDescription, icon, image } = service;
  const lang = locale as keyof typeof title;
  
  return (
    <Card 
      className={`flex flex-col h-full ${className}`}
      href={`/${locale}/services/${service.slug[lang]}`}
    >
      {showImage && (
        <div className="relative w-full h-48 overflow-hidden bg-primary-100 flex items-center justify-center">
          <div className="text-primary-600 text-4xl">
            {getIconByName(icon, 'w-16 h-16')}
          </div>
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-primary-600">
            {getIconByName(icon, 'w-6 h-6')}
          </div>
          <h3 className="text-xl font-semibold text-primary-800">{title[lang]}</h3>
        </div>
        <p className="text-neutral-600 mb-4">{shortDescription[lang]}</p>
        <div className="mt-auto">
          <span className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
            {locale === 'en' ? 'Learn more' : 'Tudj meg többet'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
