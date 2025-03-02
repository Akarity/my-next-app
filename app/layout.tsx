import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Harmony Mediation | Professional Mediation Services",
    template: "%s | Harmony Mediation",
  },
  description: "Professional mediation services for workplace, family, neighborhood, and commercial disputes. Resolving conflicts and restoring harmony.",
  keywords: ["mediation", "conflict resolution", "dispute resolution", "workplace mediation", "family mediation", "commercial mediation"],
  authors: [{ name: "Harmony Mediation" }],
  creator: "Harmony Mediation",
  publisher: "Harmony Mediation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harmonymediation.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "hu": "/hu",
    },
  },
  openGraph: {
    title: "Harmony Mediation | Professional Mediation Services",
    description: "Professional mediation services for workplace, family, neighborhood, and commercial disputes. Resolving conflicts and restoring harmony.",
    url: "https://harmonymediation.com",
    siteName: "Harmony Mediation",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony Mediation | Professional Mediation Services",
    description: "Professional mediation services for workplace, family, neighborhood, and commercial disputes. Resolving conflicts and restoring harmony.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
