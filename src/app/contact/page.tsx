import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Severin Hauling | Same-Day Junk Removal San Diego | (619) 750-0114',
  description: 'Contact Severin Hauling for same-day junk removal in San Diego. Call (619) 750-0114 or fill out our form for a free quote. Serving El Cajon and all San Diego County.',
  keywords: [
    'contact junk removal',
    'San Diego junk removal contact',
    'Severin Hauling contact',
    'junk removal quote'
  ],
  openGraph: {
    title: 'Contact Severin Hauling | Same-Day Junk Removal San Diego',
    description: 'Contact us for same-day junk removal. Call (619) 750-0114 or request a free quote online.',
    url: 'https://www.severinhauling.com/contact',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Severin Hauling - San Diego Junk Removal',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Severin Hauling | Same-Day Junk Removal San Diego',
    description: 'Contact us for same-day junk removal. Call (619) 750-0114 or request a free quote online.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/contact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-CA',
  },
};

export default function ContactPage() {
  const contactSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Contact", url: "https://www.severinhauling.com/contact" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [contactSchema, breadcrumbSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <ContactPageClient />
    </>
  );
}
