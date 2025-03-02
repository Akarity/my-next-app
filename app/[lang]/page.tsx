import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from '@/utils/translations';
import { getAllServices } from '@/utils/services';
import imagePaths from '@/utils/imagePaths';
import Hero from '@/components/blocks/Hero';
import ServicesOverview from '@/components/blocks/ServicesOverview';
import About from '@/components/blocks/About';
import CallToAction from '@/components/blocks/CallToAction';
import Testimonials from '@/components/blocks/Testimonials';

interface HomePageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  
  return {
    title: t.seo.title,
    description: t.seo.description,
    keywords: t.seo.keywords,
  };
}

export default function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  const services = getAllServices();
  
  // Sample testimonials
  const testimonials = [
    {
      quote: lang === 'en' 
        ? "The mediation process helped us resolve our workplace conflict in a way that preserved our professional relationship. Highly recommended!"
        : "A mediációs folyamat segített megoldani a munkahelyi konfliktusunkat olyan módon, hogy megőrizte szakmai kapcsolatunkat. Nagyon ajánlom!",
      author: lang === 'en' ? "Sarah Johnson" : "Johnson Sarah",
      role: lang === 'en' ? "HR Manager" : "HR Menedzser",
      image: imagePaths['testimonial1']
    },
    {
      quote: lang === 'en'
        ? "Our neighborhood dispute had been ongoing for years until we tried mediation. The process was fair, respectful, and effective."
        : "A szomszédsági vitánk évek óta tartott, amíg ki nem próbáltuk a mediációt. A folyamat tisztességes, tiszteletteljes és hatékony volt.",
      author: lang === 'en' ? "Michael Chen" : "Chen Michael",
      role: lang === 'en' ? "Homeowner" : "Háztulajdonos",
      image: imagePaths['testimonial2']
    },
    {
      quote: lang === 'en'
        ? "The team facilitation session transformed our dysfunctional team into a cohesive unit. We're now more productive than ever."
        : "A csapatfejlesztési foglalkozás átalakította diszfunkcionális csapatunkat egy összetartó egységgé. Most produktívabbak vagyunk, mint valaha.",
      author: lang === 'en' ? "Emma Rodriguez" : "Rodriguez Emma",
      role: lang === 'en' ? "Team Lead" : "Csapatvezető",
      image: imagePaths['testimonial3']
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.home.hero.title}
        subtitle={t.home.hero.subtitle}
        ctaText={t.home.hero.cta}
        ctaLink={`/${lang}/services`}
        backgroundImage={imagePaths['hero-family']}
      />
      
      {/* Services Overview */}
      <ServicesOverview
        title={t.home.services.title}
        subtitle={t.home.services.subtitle}
        services={services}
        locale={lang}
        limit={6}
      />
      
      {/* About Section */}
      <About
        title={t.home.about.title}
        content={t.home.about.content}
        ctaText={t.common.learnMore}
        ctaLink={`/${lang}/about`}
        image={imagePaths['about']}
        locale={lang}
      />
      
      {/* Testimonials */}
      <Testimonials
        title={t.home.testimonials.title}
        testimonials={testimonials}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={t.home.cta.title}
        subtitle={t.home.cta.subtitle}
        buttonText={t.home.cta.button}
        buttonLink={`/${lang}/contact`}
        backgroundImage={imagePaths['cta']}
      />
    </>
  );
}
