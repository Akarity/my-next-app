import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the English version of the homepage
  redirect('/en');
  
  // This return statement is never reached due to the redirect,
  // but is needed to satisfy TypeScript
  return null;
}
