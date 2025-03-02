import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from '@/utils/translations';
import { getAllServices, getServiceBySlug } from '@/utils/services';
import Hero from '@/components/blocks/Hero';
import Section from '@/components/ui/Section';
import Benefits from '@/components/blocks/Benefits';
import Process from '@/components/blocks/Process';
import FAQ from '@/components/blocks/FAQ';
import CallToAction from '@/components/blocks/CallToAction';
import { getIconByName } from '@/components/icons';

interface ServicePageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { lang, slug } = params;
  const service = getServiceBySlug(slug, lang);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  const t = getTranslations(lang);
  const langKey = lang as keyof typeof service.title;
  
  return {
    title: `${service.title[langKey]} | ${t.seo.title}`,
    description: service.fullDescription[langKey],
    keywords: [...t.seo.keywords, service.title[langKey].toLowerCase()],
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  const paths: { lang: string; slug: string }[] = [];
  
  // Generate paths for all services in all languages
  services.forEach(service => {
    paths.push({ lang: 'en', slug: service.slug.en });
    paths.push({ lang: 'hu', slug: service.slug.hu });
  });
  
  return paths;
}

export default function ServicePage({ params }: ServicePageProps) {
  const { lang, slug } = params;
  const service = getServiceBySlug(slug, lang);
  
  if (!service) {
    notFound();
  }
  
  const t = getTranslations(lang);
  const langKey = lang as keyof typeof service.title;
  
  // Process steps for this service
  const processSteps = [
    {
      title: lang === 'en' ? 'Initial Contact' : 'Kezdeti Kapcsolatfelvétel',
      description: lang === 'en' 
        ? `Reach out to us to discuss your ${service.title.en.toLowerCase()} needs.`
        : `Vegye fel velünk a kapcsolatot, hogy megbeszéljük az Ön ${service.title.hu.toLowerCase()} igényeit.`,
      icon: 'phone',
    },
    {
      title: lang === 'en' ? 'Assessment' : 'Felmérés',
      description: lang === 'en'
        ? 'We evaluate your situation and determine the best approach.'
        : 'Értékeljük a helyzetét és meghatározzuk a legjobb megközelítést.',
      icon: 'coaching',
    },
    {
      title: lang === 'en' ? 'Mediation' : 'Mediáció',
      description: lang === 'en'
        ? 'Our expert mediator facilitates a structured conversation to help find resolution.'
        : 'Szakértő mediátorunk strukturált beszélgetést vezet, hogy segítsen megtalálni a megoldást.',
      icon: service.icon,
    },
    {
      title: lang === 'en' ? 'Resolution' : 'Megoldás',
      description: lang === 'en'
        ? 'Parties work together to create a mutually acceptable agreement.'
        : 'A felek együtt dolgoznak, hogy kölcsönösen elfogadható megállapodást hozzanak létre.',
      icon: 'check',
    },
  ];
  
  // FAQs for this service
  const faqs = [
    {
      question: lang === 'en' 
        ? `How long does ${service.title.en} typically take?`
        : `Mennyi ideig tart általában a ${service.title.hu}?`,
      answer: lang === 'en'
        ? 'The duration varies depending on the complexity of the case, but most sessions are completed within 2-4 hours. Some cases may require multiple sessions.'
        : 'Az időtartam az eset összetettségétől függően változik, de a legtöbb ülés 2-4 órán belül befejeződik. Egyes esetek több ülést igényelhetnek.',
    },
    {
      question: lang === 'en'
        ? `How much does ${service.title.en} cost?`
        : `Mennyibe kerül a ${service.title.hu}?`,
      answer: lang === 'en'
        ? 'Our fees are structured to be affordable and transparent. We offer a free initial consultation to discuss your specific needs and provide a clear quote.'
        : 'Díjaink megfizethető és átlátható módon vannak kialakítva. Ingyenes kezdeti konzultációt kínálunk az Ön egyedi igényeinek megbeszélésére és egy egyértelmű árajánlat biztosítására.',
    },
    {
      question: lang === 'en'
        ? 'Is the process confidential?'
        : 'Bizalmas a folyamat?',
      answer: lang === 'en'
        ? 'Yes, all our mediation services are completely confidential. We maintain strict privacy protocols to ensure your information remains secure.'
        : 'Igen, minden mediációs szolgáltatásunk teljesen bizalmas. Szigorú adatvédelmi protokollokat tartunk fenn, hogy biztosítsuk az Ön információinak biztonságát.',
    },
    {
      question: lang === 'en'
        ? 'What if we cannot reach an agreement?'
        : 'Mi történik, ha nem tudunk megállapodásra jutni?',
      answer: lang === 'en'
        ? 'While most of our mediation cases result in successful agreements, if a resolution cannot be reached, we can discuss alternative approaches or provide referrals to other appropriate services.'
        : 'Bár a legtöbb mediációs esetünk sikeres megállapodással zárul, ha nem sikerül megoldást találni, megbeszélhetjük az alternatív megközelítéseket, vagy ajánlhatunk más megfelelő szolgáltatásokat.',
    },
  ];
  
  // Convert benefits to the format expected by the Benefits component
  const benefitItems = service.benefits[langKey].map(benefit => ({
    text: benefit,
  }));
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={service.title[langKey]}
        subtitle={service.shortDescription[langKey]}
        ctaText={t.common.contactUs}
        ctaLink={`/${lang}/contact`}
        backgroundImage={service.image}
      />
      
      {/* Service Description */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              {lang === 'en' ? `About ${service.title.en}` : `A ${service.title.hu}-ról`}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">{service.fullDescription[langKey]}</p>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-primary-600">
                {getIconByName(service.icon, 'w-10 h-10')}
              </div>
              <h3 className="text-xl font-semibold">{lang === 'en' ? 'Why Choose Us' : 'Miért Válasszon Minket'}</h3>
            </div>
            <ul className="space-y-3">
              {service.benefits[langKey].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Benefits */}
      <Benefits
        title={lang === 'en' ? `Benefits of ${service.title.en}` : `A ${service.title.hu} Előnyei`}
        benefits={benefitItems}
      />
      
      {/* Process */}
      <Process
        title={lang === 'en' ? `Our ${service.title.en} Process` : `A ${service.title.hu} Folyamatunk`}
        subtitle={lang === 'en'
          ? 'A structured approach to resolving disputes effectively and amicably.'
          : 'Strukturált megközelítés a viták hatékony és barátságos megoldására.'}
        steps={processSteps}
      />
      
      {/* FAQ */}
      <FAQ
        title={lang === 'en' ? 'Frequently Asked Questions' : 'Gyakran Ismételt Kérdések'}
        faqs={faqs}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={lang === 'en' ? `Ready to Start ${service.title.en}?` : `Készen áll a ${service.title.hu} Elkezdésére?`}
        subtitle={lang === 'en'
          ? 'Contact us today to discuss how we can help you find a resolution.'
          : 'Vegye fel velünk a kapcsolatot még ma, hogy megbeszéljük, hogyan segíthetünk megtalálni a megoldást.'}
        buttonText={t.common.contactUs}
        buttonLink={`/${lang}/contact`}
      />
    </>
  );
}
