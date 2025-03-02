import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from '@/utils/translations';
import { getAllServices, getAllLocations, getLocationBySlug } from '@/utils/services';
import Hero from '@/components/blocks/Hero';
import ServicesOverview from '@/components/blocks/ServicesOverview';
import Process from '@/components/blocks/Process';
import CallToAction from '@/components/blocks/CallToAction';

interface LocationPageProps {
  params: {
    lang: string;
    location: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { lang, location } = params;
  const locationData = getLocationBySlug(location, lang);
  
  if (!locationData) {
    return {
      title: 'Location Not Found',
    };
  }
  
  const t = getTranslations(lang);
  const langKey = lang as keyof typeof locationData.name;
  
  return {
    title: `${t.services.title} in ${locationData.name[langKey]} | ${t.seo.title}`,
    description: lang === 'en'
      ? `Professional mediation services in ${locationData.name[langKey]}. We offer a comprehensive range of mediation services tailored to the unique needs of ${locationData.name[langKey]}.`
      : `Professzionális mediációs szolgáltatások ${locationData.name[langKey]}-ban. Átfogó mediációs szolgáltatásokat kínálunk, amelyek ${locationData.name[langKey]} egyedi igényeihez igazodnak.`,
    keywords: [...t.seo.keywords, locationData.name[langKey].toLowerCase(), 'local mediation', 'mediation services'],
  };
}

export async function generateStaticParams() {
  const locations = getAllLocations();
  const paths: { lang: string; location: string }[] = [];
  
  // Generate paths for all locations in all languages
  locations.forEach(location => {
    paths.push({ lang: 'en', location: location.slug.en });
    paths.push({ lang: 'hu', location: location.slug.hu });
  });
  
  return paths;
}

export default function LocationPage({ params }: LocationPageProps) {
  const { lang, location } = params;
  const locationData = getLocationBySlug(location, lang);
  
  if (!locationData) {
    notFound();
  }
  
  const t = getTranslations(lang);
  const services = getAllServices();
  const langKey = lang as keyof typeof locationData.name;
  
  // Process steps for mediation in this location
  const processSteps = [
    {
      title: lang === 'en' ? 'Initial Consultation' : 'Kezdeti Konzultáció',
      description: lang === 'en' 
        ? `Meet with our ${locationData.name.en} mediator to discuss your specific needs.`
        : `Találkozzon ${locationData.name.hu}-i mediátorunkkal, hogy megbeszélje az Ön egyedi igényeit.`,
      icon: 'phone',
    },
    {
      title: lang === 'en' ? 'Service Selection' : 'Szolgáltatás Kiválasztása',
      description: lang === 'en'
        ? `We help you choose the right mediation service for your situation in ${locationData.name.en}.`
        : `Segítünk kiválasztani a megfelelő mediációs szolgáltatást az Ön ${locationData.name.hu}-i helyzetéhez.`,
      icon: 'coaching',
    },
    {
      title: lang === 'en' ? 'Mediation Process' : 'Mediációs Folyamat',
      description: lang === 'en'
        ? `Our expert ${locationData.name.en} mediator facilitates the resolution process.`
        : `Szakértő ${locationData.name.hu}-i mediátorunk segíti a megoldási folyamatot.`,
      icon: 'team',
    },
    {
      title: lang === 'en' ? 'Resolution & Follow-up' : 'Megoldás és Utánkövetés',
      description: lang === 'en'
        ? `We ensure lasting solutions and provide ongoing support in ${locationData.name.en}.`
        : `Biztosítjuk a tartós megoldásokat és folyamatos támogatást nyújtunk ${locationData.name.hu}-ban.`,
      icon: 'check',
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={lang === 'en' 
          ? `Mediation Services in ${locationData.name[langKey]}`
          : `Mediációs Szolgáltatások ${locationData.name[langKey]}-ban`}
        subtitle={lang === 'en'
          ? `Professional mediation services tailored to the unique needs of ${locationData.name[langKey]}.`
          : `Professzionális mediációs szolgáltatások, amelyek ${locationData.name[langKey]} egyedi igényeihez igazodnak.`}
        ctaText={t.common.contactUs}
        ctaLink={`/${lang}/contact`}
      />
      
      {/* Location Introduction */}
      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {lang === 'en'
                  ? `About Our ${locationData.name[langKey]} Services`
                  : `${locationData.name[langKey]}-i Szolgáltatásainkról`}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  {lang === 'en'
                    ? `At Harmony Mediation, we are proud to offer our full range of mediation services in ${locationData.name[langKey]}. Our team of experienced mediators understands the unique dynamics of the local community and is committed to providing personalized solutions to help resolve conflicts effectively.`
                    : `A Harmony Mediation büszke arra, hogy teljes körű mediációs szolgáltatásokat kínál ${locationData.name[langKey]}-ban. Tapasztalt mediátoraink csapata megérti a helyi közösség egyedi dinamikáját, és elkötelezett a személyre szabott megoldások nyújtása mellett, hogy hatékonyan segítsen a konfliktusok megoldásában.`}
                </p>
                <p className="mt-4">
                  {lang === 'en'
                    ? `Whether you're dealing with a workplace dispute, family conflict, or commercial disagreement, our ${locationData.name[langKey]}-based mediators are here to help you find a path forward.`
                    : `Akár munkahelyi vitával, családi konfliktussal vagy kereskedelmi nézeteltéréssel küzd, ${locationData.name[langKey]}-i mediátoraink itt vannak, hogy segítsenek megtalálni az előrelépés útját.`}
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-primary-100 flex items-center justify-center">
              <div className="text-primary-600 text-4xl font-bold">
                {locationData.name[langKey]}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <ServicesOverview
        title={lang === 'en' 
          ? `Our Services in ${locationData.name[langKey]}`
          : `Szolgáltatásaink ${locationData.name[langKey]}-ban`}
        subtitle={lang === 'en' 
          ? `Explore our comprehensive range of mediation services available in ${locationData.name[langKey]}.`
          : `Fedezze fel átfogó mediációs szolgáltatásainkat ${locationData.name[langKey]}-ban.`}
        services={services}
        locale={lang}
        showImages={true}
      />
      
      {/* Mediation Process */}
      <Process
        title={lang === 'en' 
          ? `Our Mediation Process in ${locationData.name[langKey]}`
          : `Mediációs Folyamatunk ${locationData.name[langKey]}-ban`}
        subtitle={lang === 'en'
          ? 'A structured approach tailored to the local community.'
          : 'A helyi közösségre szabott strukturált megközelítés.'}
        steps={processSteps}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={lang === 'en' 
          ? `Ready to Resolve Your Dispute in ${locationData.name[langKey]}?`
          : `Készen áll a vitája megoldására ${locationData.name[langKey]}-ban?`}
        subtitle={lang === 'en'
          ? 'Contact us today to discuss how we can help you find a resolution.'
          : 'Vegye fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk megtalálni a megoldást.'}
        buttonText={t.common.contactUs}
        buttonLink={`/${lang}/contact`}
      />
    </>
  );
}
