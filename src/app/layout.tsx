import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
  weight: ["400", "600", "700", "900"], // Only load weights we actually use
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Best Junk Removal San Diego | Same Day Service | Severin Cleaners",
  description: "San Diego's top rated junk removal service. Professional, licensed & insured. Same day service available. Call (619) 750-0114 for free quote.",
  keywords: "junk removal San Diego, junk hauling San Diego, trash removal San Diego, junk pickup San Diego, haul away junk San Diego, same day junk removal, emergency junk removal San Diego, furniture removal San Diego, appliance removal San Diego, estate cleanout San Diego, construction debris removal, garage cleanout San Diego, mattress removal San Diego, couch removal San Diego, commercial junk removal, residential junk hauling",
  authors: [{ name: "Severin Cleaners" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "BeGU1HGiaVVEbiJWNx2yGB-J9dc93sy8wzsZ34McCfg",
  },
  openGraph: {
    title: "Best Junk Removal San Diego | Same Day Service | Severin Cleaners",
    description: "San Diego's top rated junk removal service. Professional, licensed & insured. Same day service available. Call (619) 750-0114 for free quote.",
    type: "website",
    locale: "en_US",
    url: "https://severincleaners.com",
    siteName: "Severin Cleaners - Junk Removal San Diego",
    images: [
      {
        url: "https://severincleaners.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Severin Cleaners - Professional Junk Removal Service El Cajon & San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Junk Removal San Diego | Same Day Service | Severin Cleaners",
    description: "San Diego's top rated junk removal service. Professional, licensed & insured. Same day service available. Call (619) 750-0114 for free quote.",
    images: ["https://severincleaners.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "La Mesa",
    "geo.position": "32.7781;-117.0229",
    "ICBM": "32.7781, -117.0229",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08328E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManagerHead />
        <GoogleTagManagerBody />
        {children}
      </body>
    </html>
  );
}
