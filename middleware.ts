import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'hu'];
const defaultLocale = 'en';

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => locales.some(locale => lang.startsWith(locale)));
    
    if (preferredLocale) {
      const matchedLocale = locales.find(locale => preferredLocale.startsWith(locale));
      if (matchedLocale) return matchedLocale;
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // Redirect to the appropriate locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
