import React from 'react';
import { Service, getAllServices } from '@/utils/services';
import Section from '../ui/Section';
import ServiceCard from '../ServiceCard';

interface ServicesOverviewProps {
  title: string;
  subtitle: string;
  services?: Service[];
  locale: string;
  showImages?: boolean;
  limit?: number;
  className?: string;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  title,
  subtitle,
  services,
  locale,
  showImages = true,
  limit,
  className = '',
}) => {
  // If services are not provided, get all services
  const displayServices = services || getAllServices();
  
  // Limit the number of services if specified
  const limitedServices = limit ? displayServices.slice(0, limit) : displayServices;
  
  return (
    <Section background="light" className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            locale={locale}
            showImage={showImages}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesOverview;
