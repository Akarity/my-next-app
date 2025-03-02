import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from '@/utils/translations';
import { getAllLocations } from '@/utils/services';
import Hero from '@/components/blocks/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { LocationIcon } from '@/components/icons';
import CallToAction from '@/components/blocks/CallToAction';

interface LocationsPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: LocationsPageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  
  return {
    title: params.lang === 'en' ? 'Our Locations | Harmony Mediation' : 'Helyszíneink | Harmony Mediation',
    description: params.lang === 'en'
      ? 'Discover our mediation services available in various locations. Professional mediation tailored to local communities.'
      : 'Fedezze fel a különböző helyszíneken elérhető mediációs szolgáltatásainkat. Professzionális mediáció, amely a helyi közösségekhez igazodik.',
    keywords: [...t.seo.keywords, 'locations', 'mediation locations', 'local mediation'],
  };
}

export default function LocationsPage({ params }: LocationsPageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  const locations = getAllLocations();
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={lang === 'en' ? 'Our Locations' : 'Helyszíneink'}
        subtitle={lang === 'en'
          ? 'Discover our mediation services available in various locations.'
          : 'Fedezze fel a különböző helyszíneken elérhető mediációs szolgáltatásainkat.'}
        ctaText={t.common.contactUs}
        ctaLink={`/${lang}/contact`}
      />
      
      {/* Locations Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Where We Offer Our Services' : 'Hol Kínáljuk Szolgáltatásainkat'}
          </h2>
          <p className="text-lg text-neutral-600">
            {lang === 'en'
              ? 'At Harmony Mediation, we provide our professional mediation services in various locations to better serve our clients. Our experienced mediators understand the unique dynamics of each community and are committed to helping you resolve conflicts effectively.'
              : 'A Harmony Mediation különböző helyszíneken nyújtja professzionális mediációs szolgáltatásait, hogy jobban kiszolgálja ügyfeleit. Tapasztalt mediátoraink megértik minden közösség egyedi dinamikáját, és elkötelezettek amellett, hogy segítsenek hatékonyan megoldani a konfliktusokat.'}
          </p>
        </div>
        
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {locations.map((location) => {
            const langKey = lang as keyof typeof location.name;
            
            return (
              <Card 
                key={location.id}
                href={`/${lang}/locations/${location.slug[langKey]}`}
                className="flex flex-col h-full"
              >
                <div className="relative w-full h-48 overflow-hidden bg-primary-100 flex items-center justify-center">
                  <div className="text-primary-600 text-4xl">
                    <LocationIcon className="w-16 h-16" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-primary-600">
                      <LocationIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800">{location.name[langKey]}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {lang === 'en'
                      ? `Discover our full range of mediation services available in ${location.name.en}.`
                      : `Fedezze fel a ${location.name.hu}-ban elérhető teljes körű mediációs szolgáltatásainkat.`}
                  </p>
                  <div className="mt-auto">
                    <span className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center">
                      {lang === 'en' ? 'View Services' : 'Szolgáltatások Megtekintése'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
      
      {/* Map Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === 'en' ? 'Find Us' : 'Találjon Meg Minket'}
            </h2>
            <p className="text-lg text-neutral-600">
              {lang === 'en'
                ? 'Our offices are conveniently located to serve you better.'
                : 'Irodáink kényelmesen helyezkednek el, hogy jobban kiszolgálhassuk Önt.'}
            </p>
          </div>
          
          {/* Map placeholder */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg bg-primary-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {lang === 'en' ? 'Harmony Mediation Budapest' : 'Harmony Mediation Budapest'}
                </h3>
                <p className="text-neutral-600">
                  {lang === 'en'
                    ? 'Our main office is located in the heart of Budapest, easily accessible by public transportation.'
                    : 'Központi irodánk Budapest szívében található, tömegközlekedéssel könnyen megközelíthető.'}
                </p>
                <Link 
                  href={`/${lang}/contact`}
                  className="mt-4 inline-block text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  {lang === 'en' ? 'Contact Us' : 'Kapcsolat'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToAction
        title={lang === 'en' ? 'Ready to Get Started?' : 'Készen Áll a Kezdésre?'}
        subtitle={lang === 'en'
          ? 'Contact us today to discuss how we can help you resolve your dispute.'
          : 'Vegye fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk megoldani a vitáját.'}
        buttonText={t.common.contactUs}
        buttonLink={`/${lang}/contact`}
      />
    </>
  );
}
