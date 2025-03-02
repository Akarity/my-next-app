"use client";

import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface ContactFormProps {
  title: string;
  subtitle?: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  submitLabel: string;
  successMessage: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  subtitle,
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  submitLabel,
  successMessage,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real application, you would send the form data to a server
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section background="light" className={className}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-neutral-600">{subtitle}</p>
          )}
        </div>
        
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-green-800">Thank You!</h3>
            <p className="text-green-700">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                {nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                {emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                {phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                {messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full md:w-auto"
              >
                {isSubmitting ? 'Sending...' : submitLabel}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
};

export default ContactForm;
