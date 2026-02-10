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
  // Optimize font loading
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Severin Hauling | Professional Junk Removal & Hauling Services",
  description: "Severin Hauling is your trusted partner for junk removal and property cleanout services throughout San Diego County. Family-owned, licensed & insured. Call (619) 750-0114.",
  keywords: "junk removal San Diego, junk hauling San Diego, trash removal San Diego, junk pickup San Diego, haul away junk San Diego, same day junk removal, emergency junk removal San Diego, furniture removal San Diego, appliance removal San Diego, estate cleanout San Diego, construction debris removal, garage cleanout San Diego, mattress removal San Diego, couch removal San Diego, commercial junk removal, residential junk hauling",
  authors: [{ name: "Severin Hauling" }],
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
    title: "Severin Hauling | Professional Junk Removal & Hauling Services",
    description: "Severin Hauling is your trusted partner for junk removal and property cleanout services throughout San Diego County. Family-owned, licensed & insured. Call (619) 750-0114.",
    type: "website",
    locale: "en_US",
    url: "https://www.severinhauling.com",
    siteName: "Severin Hauling - Junk Removal San Diego",
    images: [
      {
        url: "https://www.severinhauling.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Severin Hauling - Professional Junk Removal Service El Cajon & San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Severin Hauling | Professional Junk Removal & Hauling Services",
    description: "Severin Hauling is your trusted partner for junk removal and property cleanout services throughout San Diego County. Family-owned, licensed & insured. Call (619) 750-0114.",
    images: ["https://www.severinhauling.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.severinhauling.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "San Diego County",
    "geo.position": "32.7157;-117.1611",
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

        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="/optimized/landingpage.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Resource Hints for Performance - DNS prefetch only for third parties */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />

        {/* Favicons - optimized order */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
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
