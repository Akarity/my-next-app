"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.startsWith(path) ? 'text-primary-800 font-semibold' : '';
  };

  // Determine current language from pathname
  const currentLang = pathname?.startsWith('/hu') ? 'hu' : 'en';
  
  // Translations for navigation items
  const translations = {
    en: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
    },
    hu: {
      home: 'Főoldal',
      services: 'Szolgáltatások',
      contact: 'Kapcsolat',
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href={`/${currentLang === 'hu' ? 'hu' : 'en'}`} className="text-2xl font-bold text-primary-700">
              Harmony Mediation
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href={`/${currentLang === 'hu' ? 'hu' : 'en'}`} 
              className={`hover:text-primary-600 transition-colors ${isActive(`/${currentLang}`)}`}
            >
              {t.home}
            </Link>
            <Link 
              href={`/${currentLang === 'hu' ? 'hu' : 'en'}/services`} 
              className={`hover:text-primary-600 transition-colors ${isActive(`/${currentLang}/services`)}`}
            >
              {t.services}
            </Link>
            <Link 
              href={`/${currentLang === 'hu' ? 'hu' : 'en'}/contact`} 
              className={`hover:text-primary-600 transition-colors ${isActive(`/${currentLang}/contact`)}`}
            >
              {t.contact}
            </Link>
            <LanguageSwitcher currentLang={currentLang} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
