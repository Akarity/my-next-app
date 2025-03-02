import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from '@/utils/translations';
import { getAllServices } from '@/utils/services';
import Hero from '@/components/blocks/Hero';
import ServicesOverview from '@/components/blocks/ServicesOverview';
import Process from '@/components/blocks/Process';
import CallToAction from '@/components/blocks/CallToAction';

interface ServicesPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  
  return {
    title: `${t.services.title} | ${t.seo.title}`,
    description: t.services.subtitle,
    keywords: t.seo.keywords,
  };
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  const services = getAllServices();
  
  // Mediation process steps
  const processSteps = [
    {
      title: lang === 'en' ? 'Initial Consultation' : 'Kezdeti Konzultáció',
      description: lang === 'en' 
        ? 'We discuss your situation and determine if mediation is the right approach for your dispute.'
        : 'Megbeszéljük a helyzetet, és meghatározzuk, hogy a mediáció a megfelelő megközelítés-e az Ön vitájához.',
      icon: 'phone',
    },
    {
      title: lang === 'en' ? 'Preparation' : 'Felkészülés',
      description: lang === 'en'
        ? 'We gather information and prepare all parties for the mediation process.'
        : 'Információkat gyűjtünk és felkészítjük az összes felet a mediációs folyamatra.',
      icon: 'coaching',
    },
    {
      title: lang === 'en' ? 'Mediation Session' : 'Mediációs Ülés',
      description: lang === 'en'
        ? 'A structured conversation facilitated by our expert mediator to help parties find common ground.'
        : 'Szakértő mediátorunk által vezetett strukturált beszélgetés, amely segít a feleknek megtalálni a közös alapot.',
      icon: 'team',
    },
    {
      title: lang === 'en' ? 'Agreement' : 'Megállapodás',
      description: lang === 'en'
        ? 'Parties work together to create a mutually acceptable resolution to the dispute.'
        : 'A felek együtt dolgoznak, hogy kölcsönösen elfogadható megoldást találjanak a vitára.',
      icon: 'commercial',
    },
    {
      title: lang === 'en' ? 'Follow-up' : 'Utánkövetés',
      description: lang === 'en'
        ? 'We check in to ensure the agreement is working and provide additional support if needed.'
        : 'Ellenőrizzük, hogy a megállapodás működik-e, és szükség esetén további támogatást nyújtunk.',
      icon: 'check',
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.services.title}
        subtitle={t.services.subtitle}
        ctaText={t.common.contactUs}
        ctaLink={`/${lang}/contact`}
      />
      
      {/* Services Overview */}
      <ServicesOverview
        title={lang === 'en' ? 'Our Mediation Services' : 'Mediációs Szolgáltatásaink'}
        subtitle={lang === 'en' 
          ? 'We offer a comprehensive range of mediation services tailored to your specific needs.'
          : 'Átfogó mediációs szolgáltatásokat kínálunk, amelyek az Ön egyedi igényeihez igazodnak.'}
        services={services}
        locale={lang}
        showImages={true}
      />
      
      {/* Mediation Process */}
      <Process
        title={lang === 'en' ? 'Our Mediation Process' : 'A Mediációs Folyamatunk'}
        subtitle={lang === 'en'
          ? 'A structured approach to resolving disputes effectively and amicably.'
          : 'Strukturált megközelítés a viták hatékony és barátságos megoldására.'}
        steps={processSteps}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={lang === 'en' ? 'Ready to Resolve Your Dispute?' : 'Készen áll a vitája megoldására?'}
        subtitle={lang === 'en'
          ? 'Contact us today to discuss how we can help you find a resolution.'
          : 'Vegye fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk megtalálni a megoldást.'}
        buttonText={t.common.contactUs}
        buttonLink={`/${lang}/contact`}
      />
    </>
  );
}
