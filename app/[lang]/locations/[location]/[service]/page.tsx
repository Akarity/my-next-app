import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from '@/utils/translations';
import { getAllServices, getAllLocations, getServiceBySlug, getLocationBySlug } from '@/utils/services';
import Hero from '@/components/blocks/Hero';
import Section from '@/components/ui/Section';
import Benefits from '@/components/blocks/Benefits';
import Process from '@/components/blocks/Process';
import FAQ from '@/components/blocks/FAQ';
import CallToAction from '@/components/blocks/CallToAction';
import { getIconByName } from '@/components/icons';

interface LocationServicePageProps {
  params: {
    lang: string;
    location: string;
    service: string;
  };
}

export async function generateMetadata({ params }: LocationServicePageProps): Promise<Metadata> {
  const { lang, location, service } = params;
  const serviceData = getServiceBySlug(service, lang);
  const locationData = getLocationBySlug(location, lang);
  
  if (!serviceData || !locationData) {
    return {
      title: 'Page Not Found',
    };
  }
  
  const t = getTranslations(lang);
  const langKey = lang as keyof typeof serviceData.title;
  
  return {
    title: `${serviceData.title[langKey]} in ${locationData.name[langKey]} | ${t.seo.title}`,
    description: `Professional ${serviceData.title[langKey].toLowerCase()} services in ${locationData.name[langKey]}. ${serviceData.shortDescription[langKey]}`,
    keywords: [...t.seo.keywords, serviceData.title[langKey].toLowerCase(), locationData.name[langKey].toLowerCase()],
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  const locations = getAllLocations();
  const paths: { lang: string; location: string; service: string }[] = [];
  
  // Generate paths for all services in all locations in all languages
  services.forEach(service => {
    locations.forEach(location => {
      paths.push({ 
        lang: 'en', 
        location: location.slug.en, 
        service: service.slug.en 
      });
      paths.push({ 
        lang: 'hu', 
        location: location.slug.hu, 
        service: service.slug.hu 
      });
    });
  });
  
  return paths;
}

export default function LocationServicePage({ params }: LocationServicePageProps) {
  const { lang, location, service } = params;
  const serviceData = getServiceBySlug(service, lang);
  const locationData = getLocationBySlug(location, lang);
  
  if (!serviceData || !locationData) {
    notFound();
  }
  
  const t = getTranslations(lang);
  const langKey = lang as keyof typeof serviceData.title;
  
  // Process steps for this service in this location
  const processSteps = [
    {
      title: lang === 'en' ? 'Initial Consultation' : 'Kezdeti Konzultáció',
      description: lang === 'en' 
        ? `Meet with our ${locationData.name.en} mediator to discuss your ${serviceData.title.en.toLowerCase()} needs.`
        : `Találkozzon ${locationData.name.hu}-i mediátorunkkal, hogy megbeszélje az Ön ${serviceData.title.hu.toLowerCase()} igényeit.`,
      icon: 'phone',
    },
    {
      title: lang === 'en' ? 'Customized Plan' : 'Személyre Szabott Terv',
      description: lang === 'en'
        ? `We create a tailored ${serviceData.title.en.toLowerCase()} plan specific to your situation in ${locationData.name.en}.`
        : `Személyre szabott ${serviceData.title.hu.toLowerCase()} tervet készítünk az Ön ${locationData.name.hu}-i helyzetére.`,
      icon: 'coaching',
    },
    {
      title: lang === 'en' ? 'Mediation Sessions' : 'Mediációs Ülések',
      description: lang === 'en'
        ? `Our expert ${locationData.name.en} mediator facilitates structured conversations to help find resolution.`
        : `Szakértő ${locationData.name.hu}-i mediátorunk strukturált beszélgetéseket vezet, hogy segítsen megtalálni a megoldást.`,
      icon: serviceData.icon,
    },
    {
      title: lang === 'en' ? 'Resolution & Follow-up' : 'Megoldás és Utánkövetés',
      description: lang === 'en'
        ? `We ensure lasting solutions and provide ongoing support in ${locationData.name.en}.`
        : `Biztosítjuk a tartós megoldásokat és folyamatos támogatást nyújtunk ${locationData.name.hu}-ban.`,
      icon: 'check',
    },
  ];
  
  // FAQs for this service in this location
  const faqs = [
    {
      question: lang === 'en' 
        ? `Where do you provide ${serviceData.title.en} in ${locationData.name.en}?`
        : `Hol nyújtanak ${serviceData.title.hu}-t ${locationData.name.hu}-ban?`,
      answer: lang === 'en'
        ? `We offer ${serviceData.title.en.toLowerCase()} services throughout ${locationData.name.en} and can meet at our office or at a location convenient for all parties.`
        : `${serviceData.title.hu} szolgáltatásokat kínálunk egész ${locationData.name.hu}-ban, és találkozhatunk az irodánkban vagy egy minden fél számára kényelmes helyen.`,
    },
    {
      question: lang === 'en'
        ? `How much does ${serviceData.title.en} cost in ${locationData.name.en}?`
        : `Mennyibe kerül a ${serviceData.title.hu} ${locationData.name.hu}-ban?`,
      answer: lang === 'en'
        ? 'Our fees are structured to be affordable and transparent. We offer a free initial consultation to discuss your specific needs and provide a clear quote.'
        : 'Díjaink megfizethető és átlátható módon vannak kialakítva. Ingyenes kezdeti konzultációt kínálunk az Ön egyedi igényeinek megbeszélésére és egy egyértelmű árajánlat biztosítására.',
    },
    {
      question: lang === 'en'
        ? `How quickly can you start ${serviceData.title.en} in ${locationData.name.en}?`
        : `Milyen gyorsan tudják elkezdeni a ${serviceData.title.hu}-t ${locationData.name.hu}-ban?`,
      answer: lang === 'en'
        ? `We understand that disputes often need prompt attention. In most cases, we can arrange an initial consultation within 48 hours and begin the ${serviceData.title.en.toLowerCase()} process shortly after.`
        : `Megértjük, hogy a viták gyakran azonnali figyelmet igényelnek. A legtöbb esetben 48 órán belül tudunk kezdeti konzultációt szervezni, és röviddel ezután elkezdhetjük a ${serviceData.title.hu.toLowerCase()} folyamatot.`,
    },
    {
      question: lang === 'en'
        ? `Do you have mediators who speak languages other than English in ${locationData.name.en}?`
        : `Vannak olyan mediátoraik, akik az angolon kívül más nyelveken is beszélnek ${locationData.name.hu}-ban?`,
      answer: lang === 'en'
        ? `Yes, our ${locationData.name.en} team includes mediators who speak Hungarian, English, and several other languages to serve our diverse community.`
        : `Igen, ${locationData.name.hu}-i csapatunk olyan mediátorokat foglal magában, akik magyarul, angolul és több más nyelven is beszélnek, hogy szolgálják sokszínű közösségünket.`,
    },
  ];
  
  // Convert benefits to the format expected by the Benefits component
  const benefitItems = serviceData.benefits[langKey].map(benefit => ({
    text: benefit,
  }));
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={`${serviceData.title[langKey]} in ${locationData.name[langKey]}`}
        subtitle={lang === 'en'
          ? `Professional ${serviceData.title[langKey].toLowerCase()} services tailored to the unique needs of ${locationData.name[langKey]}.`
          : `Professzionális ${serviceData.title[langKey].toLowerCase()} szolgáltatások, amelyek ${locationData.name[langKey]} egyedi igényeihez igazodnak.`}
        ctaText={t.common.contactUs}
        ctaLink={`/${lang}/contact`}
      />
      
      {/* Service Description */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              {lang === 'en' 
                ? `${serviceData.title.en} in ${locationData.name.en}`
                : `${serviceData.title.hu} ${locationData.name.hu}-ban`}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">
                {lang === 'en'
                  ? `Our ${serviceData.title.en.toLowerCase()} service in ${locationData.name.en} is designed to address the specific needs of the local community. ${serviceData.fullDescription.en}`
                  : `${locationData.name.hu}-i ${serviceData.title.hu.toLowerCase()} szolgáltatásunk a helyi közösség speciális igényeinek kielégítésére szolgál. ${serviceData.fullDescription.hu}`}
              </p>
              <p className="text-lg mt-4">
                {lang === 'en'
                  ? `With our experienced mediators based in ${locationData.name.en}, we provide personalized support to help you navigate through conflicts and find effective resolutions.`
                  : `${locationData.name.hu}-ban működő tapasztalt mediátorainkkal személyre szabott támogatást nyújtunk, hogy segítsünk eligazodni a konfliktusokban és hatékony megoldásokat találni.`}
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-primary-600">
                {getIconByName(serviceData.icon, 'w-10 h-10')}
              </div>
              <h3 className="text-xl font-semibold">
                {lang === 'en' 
                  ? `Why Choose Our ${locationData.name.en} Service`
                  : `Miért Válassza ${locationData.name.hu}-i Szolgáltatásunkat`}
              </h3>
            </div>
            <ul className="space-y-3">
              {serviceData.benefits[langKey].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
              <li className="flex items-start">
                <span className="mr-2 text-primary-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>
                  {lang === 'en'
                    ? `Local expertise in ${locationData.name.en}`
                    : `Helyi szakértelem ${locationData.name.hu}-ban`}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Benefits */}
      <Benefits
        title={lang === 'en' 
          ? `Benefits of ${serviceData.title.en} in ${locationData.name.en}`
          : `A ${serviceData.title.hu} Előnyei ${locationData.name.hu}-ban`}
        benefits={[
          ...benefitItems,
          {
            text: lang === 'en'
              ? `Local mediators with knowledge of ${locationData.name.en}'s unique community dynamics`
              : `Helyi mediátorok ${locationData.name.hu} egyedi közösségi dinamikájának ismeretével`
          },
          {
            text: lang === 'en'
              ? 'Convenient location for all parties involved'
              : 'Kényelmes helyszín minden érintett fél számára'
          }
        ]}
      />
      
      {/* Process */}
      <Process
        title={lang === 'en' 
          ? `Our ${serviceData.title.en} Process in ${locationData.name.en}`
          : `${serviceData.title.hu} Folyamatunk ${locationData.name.hu}-ban`}
        subtitle={lang === 'en'
          ? 'A structured approach tailored to the local community.'
          : 'A helyi közösségre szabott strukturált megközelítés.'}
        steps={processSteps}
      />
      
      {/* FAQ */}
      <FAQ
        title={lang === 'en' ? 'Frequently Asked Questions' : 'Gyakran Ismételt Kérdések'}
        faqs={faqs}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={lang === 'en' 
          ? `Ready to Start ${serviceData.title.en} in ${locationData.name.en}?`
          : `Készen áll a ${serviceData.title.hu} Elkezdésére ${locationData.name.hu}-ban?`}
        subtitle={lang === 'en'
          ? 'Contact us today to discuss how we can help you find a resolution.'
          : 'Vegye fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk megtalálni a megoldást.'}
        buttonText={t.common.contactUs}
        buttonLink={`/${lang}/contact`}
      />
    </>
  );
}
