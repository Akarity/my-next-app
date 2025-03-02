"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith('/hu') ? 'hu' : 'en';
  
  // Translations for footer content
  const translations = {
    en: {
      contact: 'Contact',
      services: 'Our Services',
      rights: 'All Rights Reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      workplaceMediation: 'Workplace Mediation',
      neighbourhoodMediation: 'Neighbourhood Mediation',
      tenancyMediation: 'Tenancy Mediation',
      familyMediation: 'Family Mediation',
      medicalMediation: 'Medical Mediation',
      complaintsMediation: 'Complaints Mediation',
      commercialMediation: 'Commercial Mediation',
      conflictCoaching: 'Conflict Coaching',
      teamFacilitation: 'Team Facilitation',
    },
    hu: {
      contact: 'Kapcsolat',
      services: 'Szolgáltatásaink',
      rights: 'Minden Jog Fenntartva',
      privacy: 'Adatvédelmi Irányelvek',
      terms: 'Felhasználási Feltételek',
      workplaceMediation: 'Munkahelyi Mediáció',
      neighbourhoodMediation: 'Szomszédsági Mediáció',
      tenancyMediation: 'Bérleti Mediáció',
      familyMediation: 'Családi Mediáció',
      medicalMediation: 'Orvosi Mediáció',
      complaintsMediation: 'Panaszkezelési Mediáció',
      commercialMediation: 'Kereskedelmi Mediáció',
      conflictCoaching: 'Konfliktuskezelési Coaching',
      teamFacilitation: 'Csapatfejlesztés',
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Harmony Mediation</h3>
            <p className="text-neutral-300 mb-4">
              {currentLang === 'en' 
                ? 'Resolving Disputes, Restoring Harmony' 
                : 'Viták Megoldása, Harmónia Helyreállítása'}
            </p>
            <div className="mt-4">
              <p className="text-neutral-300">+36 30 2025404</p>
              <p className="text-neutral-300">info@harmonymediation.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t.services}</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link href={`/${currentLang}/services/workplace-mediation`} className="hover:text-primary-300 transition-colors">
                  {t.workplaceMediation}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/services/neighbourhood-mediation`} className="hover:text-primary-300 transition-colors">
                  {t.neighbourhoodMediation}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/services/family-mediation`} className="hover:text-primary-300 transition-colors">
                  {t.familyMediation}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/services/commercial-mediation`} className="hover:text-primary-300 transition-colors">
                  {t.commercialMediation}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/services/conflict-coaching`} className="hover:text-primary-300 transition-colors">
                  {t.conflictCoaching}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t.contact}</h3>
            <p className="text-neutral-300 mb-4">
              {currentLang === 'en' 
                ? 'Get in touch with us to discuss how we can help resolve your dispute.' 
                : 'Vegye fel velünk a kapcsolatot, hogy megbeszéljük, hogyan segíthetünk a vitája megoldásában.'}
            </p>
            <Link 
              href={`/${currentLang}/contact`} 
              className="btn bg-primary-600 hover:bg-primary-700 text-white inline-block px-6 py-2 rounded-lg"
            >
              {t.contact}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Harmony Mediation. {t.rights}.
            </p>
            <div className="flex space-x-4">
              <Link href={`/${currentLang}/privacy`} className="text-neutral-400 text-sm hover:text-white transition-colors">
                {t.privacy}
              </Link>
              <Link href={`/${currentLang}/terms`} className="text-neutral-400 text-sm hover:text-white transition-colors">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
