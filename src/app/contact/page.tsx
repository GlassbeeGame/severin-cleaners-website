import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateContactPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Severin Cleaners | Same-Day Junk Removal San Diego | (619) 750-0114',
  description: 'Contact Severin Cleaners for same-day junk removal in San Diego. Call (619) 750-0114 or fill out our form for a free quote. Serving El Cajon and all San Diego County.',
  keywords: [
    'contact junk removal',
    'San Diego junk removal contact',
    'Severin Cleaners contact',
    'junk removal quote'
  ],
  openGraph: {
    title: 'Contact Severin Cleaners | Same-Day Junk Removal San Diego',
    description: 'Contact us for same-day junk removal. Call (619) 750-0114 or request a free quote online.',
    url: 'https://severincleaners.com/contact',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Severin Cleaners - San Diego Junk Removal',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Severin Cleaners | Same-Day Junk Removal San Diego',
    description: 'Contact us for same-day junk removal. Call (619) 750-0114 or request a free quote online.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/contact',
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
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

export default function ContactPage() {
  const contactSchema = generateContactPageSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Contact", url: "https://severincleaners.com/contact" }
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
