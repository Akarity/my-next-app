import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from '@/utils/translations';
import Hero from '@/components/blocks/Hero';
import ContactForm from '@/components/blocks/ContactForm';
import ContactInfo from '@/components/blocks/ContactInfo';
import FAQ from '@/components/blocks/FAQ';

interface ContactPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const t = getTranslations(params.lang);
  
  return {
    title: `${t.contact.title} | ${t.seo.title}`,
    description: t.contact.subtitle,
    keywords: [...t.seo.keywords, 'contact', 'mediation contact', 'get in touch'],
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  const { lang } = params;
  const t = getTranslations(lang);
  
  // FAQs for contact page
  const faqs = [
    {
      question: lang === 'en' 
        ? 'How quickly will you respond to my inquiry?'
        : 'Milyen gyorsan válaszolnak a megkeresésemre?',
      answer: lang === 'en'
        ? 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
        : 'Célunk, hogy minden megkeresésre 24 órán belül válaszoljunk munkanapokon. Sürgős ügyekben kérjük, hívjon minket közvetlenül.',
    },
    {
      question: lang === 'en'
        ? 'Do I need to prepare anything for the initial consultation?'
        : 'Kell valamit előkészítenem a kezdeti konzultációra?',
      answer: lang === 'en'
        ? 'No special preparation is needed. Just come ready to discuss your situation, and our mediators will guide you through the process.'
        : 'Nincs szükség különleges előkészületekre. Csak jöjjön felkészülten, hogy megbeszélje a helyzetét, és mediátoraink végigvezetik a folyamaton.',
    },
    {
      question: lang === 'en'
        ? 'Can I request a specific mediator?'
        : 'Kérhetek egy adott mediátort?',
      answer: lang === 'en'
        ? 'Yes, if you have a preference for a specific mediator, please mention this in your inquiry, and we will do our best to accommodate your request.'
        : 'Igen, ha van preferenciája egy adott mediátorra, kérjük, említse meg ezt a megkeresésében, és mindent megteszünk, hogy teljesítsük a kérését.',
    },
    {
      question: lang === 'en'
        ? 'What languages do your mediators speak?'
        : 'Milyen nyelveken beszélnek a mediátoraik?',
      answer: lang === 'en'
        ? 'Our team includes mediators who speak Hungarian, English, and several other languages to serve our diverse community.'
        : 'Csapatunk olyan mediátorokat foglal magában, akik magyarul, angolul és több más nyelven is beszélnek, hogy szolgálják sokszínű közösségünket.',
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        ctaText={lang === 'en' ? 'View Our Services' : 'Szolgáltatásaink Megtekintése'}
        ctaLink={`/${lang}/services`}
      />
      
      {/* Contact Info */}
      <ContactInfo
        title={t.contact.info.title}
        phone={t.contact.info.phone}
        email={t.contact.info.email}
        address={t.contact.info.address}
      />
      
      {/* Contact Form */}
      <ContactForm
        title={lang === 'en' ? 'Send Us a Message' : 'Küldjön Nekünk Üzenetet'}
        subtitle={lang === 'en' 
          ? 'Fill out the form below and we\'ll get back to you as soon as possible.'
          : 'Töltse ki az alábbi űrlapot, és a lehető leghamarabb visszajelzünk.'}
        nameLabel={t.contact.form.name}
        emailLabel={t.contact.form.email}
        phoneLabel={t.contact.form.phone}
        messageLabel={t.contact.form.message}
        submitLabel={t.contact.form.submit}
        successMessage={lang === 'en'
          ? 'Your message has been sent successfully. We will contact you shortly.'
          : 'Üzenetét sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot.'}
      />
      
      {/* FAQ */}
      <FAQ
        title={lang === 'en' ? 'Frequently Asked Questions' : 'Gyakran Ismételt Kérdések'}
        faqs={faqs}
      />
    </>
  );
}
