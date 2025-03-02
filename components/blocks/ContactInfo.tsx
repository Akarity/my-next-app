import React from 'react';
import Section from '../ui/Section';
import { PhoneIcon, EmailIcon, LocationIcon } from '../icons';

interface ContactInfoProps {
  title: string;
  subtitle?: string;
  phone: string;
  email: string;
  address: string;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  subtitle,
  phone,
  email,
  address,
  className = '',
}) => {
  return (
    <Section background="white" className={className}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone */}
        <div className="bg-primary-50 p-8 rounded-xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
            <PhoneIcon className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Phone</h3>
          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-primary-600 hover:text-primary-800 transition-colors">
            {phone}
          </a>
        </div>
        
        {/* Email */}
        <div className="bg-primary-50 p-8 rounded-xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
            <EmailIcon className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Email</h3>
          <a href={`mailto:${email}`} className="text-primary-600 hover:text-primary-800 transition-colors">
            {email}
          </a>
        </div>
        
        {/* Address */}
        <div className="bg-primary-50 p-8 rounded-xl flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
            <LocationIcon className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Address</h3>
          <p className="text-neutral-700">{address}</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfo;
