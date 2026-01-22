import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Piano Removal San Diego | Musical Instrument Specialists',
  description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
  keywords: [
    'piano removal san diego',
    'piano disposal san diego',
    'musical instrument removal',
    'upright piano removal',
    'grand piano removal',
    'piano movers san diego',
    'piano hauling san diego',
    'piano removal service'
  ],
  openGraph: {
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
    url: 'https://severincleaners.com/piano-removal-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Piano Removal San Diego - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/piano-removal-san-diego',
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

export default function PianoremovalsandiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Piano Removal San Diego",
    description: "Professional piano removal for upright pianos, grand pianos, and musical instruments. Careful handling with specialized equipment.",
    url: "https://severincleaners.com/piano-removal-san-diego",
    serviceType: "Piano Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Piano Removal", url: "https://severincleaners.com/piano-removal-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  const relatedServices = [
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Estate Cleanout", slug: "estate-cleanout-san-diego" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Piano Removal San Diego"
          subtitle="⭐⭐⭐⭐⭐ 5.0 Rating • Piano Experts • Careful Handling Guaranteed"
          description="✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists"
        />

      {/* Main Content - NEW 2-COLUMN LAYOUT */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Piano Removal Specialists</h2>

              <p className="text-lg text-gray-700 mb-6">
                Piano removal requires specialized knowledge and equipment to handle these valuable, heavy instruments safely. Severin Cleaners provides expert <strong>piano removal San Diego</strong> services throughout <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a>, <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a>, and <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, whether you&apos;re relocating, downsizing, or dealing with an inherited instrument that needs professional disposal. We also specialize in <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, and are <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">heavy item specialists</a>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Piano Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our <strong>piano disposal San Diego</strong> service handles all types of pianos and musical instruments with the care and expertise they deserve. From apartment upright pianos to concert grand pianos, we have the specialized equipment and trained professionals to ensure safe removal without damage to your property.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Piano Types We Remove</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Upright Pianos:</strong> Spinet, console, studio, and full upright models</li>
                    <li><strong>Grand Pianos:</strong> Baby grands, parlor grands, and concert grands</li>
                    <li><strong>Digital Pianos:</strong> Electric and electronic piano removal</li>
                    <li><strong>Player Pianos:</strong> Antique and modern player piano systems</li>
                    <li><strong>Organs:</strong> Church organs, Hammond organs, and pipe organs</li>
                    <li><strong>Other Instruments:</strong> Harpsichords, spinets, and large instruments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Specialized Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Professional piano disconnection and preparation</li>
                    <li>Stairs, elevators, and tight space navigation</li>
                    <li>Protection for walls, floors, and doorways</li>
                    <li>Estate piano evaluation and removal</li>
                    <li>Music school and venue cleanouts</li>
                    <li>Piano donation coordination when possible</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Piano Removal Requires Expertise</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Musical instrument removal</strong> is not like typical junk removal. Pianos are incredibly heavy (200-1,200 pounds), delicately balanced, and often located in challenging spaces. Our trained team understands piano construction, weight distribution, and proper lifting techniques to ensure safe removal.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Piano Removal Challenges We Handle</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Narrow Staircases:</strong> Complex piano maneuvering through tight spaces</li>
                    <li><strong>Elevator Transport:</strong> Proper piano positioning for elevator removal</li>
                    <li><strong>Apartment Complexes:</strong> Coordination with property management</li>
                    <li><strong>Historic Homes:</strong> Protecting original woodwork and architecture</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Second/Third Floor:</strong> Safe multi-level piano removal</li>
                    <li><strong>Tight Doorways:</strong> Sometimes requiring partial piano disassembly</li>
                    <li><strong>Delicate Surroundings:</strong> Protecting artwork, furniture, and finishes</li>
                    <li><strong>Heavy Weight:</strong> Proper team size and equipment for each piano type</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Upright piano removal and disposal</li>
                  <li>Grand piano relocation and removal</li>
                  <li>Musical instrument cleanouts</li>
                  <li>Estate piano services</li>
                  <li>Music studio and school cleanouts</li>
                  <li>Apartment and condo piano removal</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business, we understand the importance of treating your property and belongings
                with care. Our San Diego service combines local knowledge with professional standards
                to deliver the best junk removal experience possible.
              </p>

                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Piano Removal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Services We Provide"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Piano Removal"
        contextParagraph="Expert piano removal with specialized equipment and trained professionals. Pricing includes careful handling, stair navigation, property protection, removal, and proper disposal or donation coordination."
      />

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Piano Removal" />
      </main>
      <Footer />
    </>
  );
}