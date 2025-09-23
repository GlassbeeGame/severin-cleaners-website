import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners",
  description: "Professional junk removal San Diego - same day junk hauling, trash removal & junk pickup service. Emergency junk removal, furniture & appliance removal. Licensed & insured. Call (619) 750-0114!",
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
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification-code-here",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Severin Cleaners",
  },
  openGraph: {
    title: "Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners",
    description: "Professional junk removal San Diego - same day junk hauling, trash removal & junk pickup service. Emergency junk removal, furniture & appliance removal. Licensed & insured. Call (619) 750-0114!",
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
    title: "Junk Removal San Diego | Same Day Junk Hauling | Severin Cleaners",
    description: "Same-day junk removal service in San Diego. Junk hauling, trash removal, furniture & appliance removal. Emergency service available. Call (619) 750-0114!",
    images: ["https://severincleaners.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "El Cajon",
    "geo.position": "32.7948;-116.9625",
    "ICBM": "32.7948, -116.9625",
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
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
