import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Severin Cleaners | Same-Day Junk Removal San Diego | (619) 750-0114',
  description: 'Contact Severin Cleaners for same-day junk removal in San Diego. Call (619) 750-0114 or fill out our form for a free quote. Serving El Cajon and all San Diego County.',
  keywords: 'contact junk removal, San Diego junk removal contact, Severin Cleaners contact, junk removal quote',
  openGraph: {
    title: 'Contact Severin Cleaners | Same-Day Junk Removal San Diego',
    description: 'Contact us for same-day junk removal. Call (619) 750-0114 or request a free quote online.',
    url: 'https://severincleaners.com/contact',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
    type: 'website',
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
};

export default function ContactPage() {
  return <ContactPageClient />;
}
