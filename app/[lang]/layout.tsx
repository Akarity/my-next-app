import { Metadata } from 'next';
import MainLayout from '@/components/MainLayout';
import { notFound } from 'next/navigation';

// Define the supported languages
export const locales = ['en', 'hu'];

// Generate static params for all supported languages
export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

// Validate the language parameter
export default function LocaleLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Validate that the lang parameter is supported
  if (!locales.includes(lang)) {
    notFound();
  }

  return <MainLayout>{children}</MainLayout>;
}

// Metadata for this layout
export const metadata: Metadata = {
  title: {
    default: "Harmony Mediation | Professional Mediation Services",
    template: "%s | Harmony Mediation",
  },
  description: "Professional mediation services for workplace, family, neighborhood, and commercial disputes. Resolving conflicts and restoring harmony.",
};
