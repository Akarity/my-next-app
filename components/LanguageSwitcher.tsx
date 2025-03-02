"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const pathname = usePathname() || '';
  
  // Remove language prefix from pathname to get the route
  const route = pathname.replace(/^\/[a-z]{2}/, '') || '/';
  
  // Create URLs for each language
  const enUrl = `/en${route}`;
  const huUrl = `/hu${route}`;

  return (
    <div className="flex items-center space-x-2 ml-4">
      <Link 
        href={enUrl}
        className={`text-sm px-2 py-1 rounded ${currentLang === 'en' ? 'bg-primary-100 text-primary-800 font-medium' : 'text-neutral-600 hover:text-primary-600'}`}
      >
        EN
      </Link>
      <Link 
        href={huUrl}
        className={`text-sm px-2 py-1 rounded ${currentLang === 'hu' ? 'bg-primary-100 text-primary-800 font-medium' : 'text-neutral-600 hover:text-primary-600'}`}
      >
        HU
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
