import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Piano Removal San Diego | Musical Instrument Specialists',
  description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
  keywords: 'piano removal san diego, piano disposal san diego, musical instrument removal, upright piano removal, grand piano removal',
  openGraph: {
    title: 'Piano Removal San Diego | Musical Instrument Specialists',
    description: 'Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 750-0114.',
    url: 'https://severincleaners.com/piano-removal-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
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

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Piano and musical instrument removal specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Piano Removal San Diego
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Piano Experts • Careful Handling Guaranteed
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call (619) 750-0114
              </a>
              <a
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Get Free Quote
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Piano Removal Specialists</h2>

              <p className="text-lg text-gray-700 mb-6">
                Piano removal requires specialized knowledge and equipment to handle these valuable, heavy instruments safely. Severin Cleaners provides expert <strong>piano removal San Diego</strong> services, whether you&apos;re relocating, downsizing, or dealing with an inherited instrument that needs professional disposal.
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

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Junk Removal in San Diego?</p>
                    <p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business, we understand the importance of treating your property and belongings
                with care. Our San Diego service combines local knowledge with professional standards
                to deliver the best junk removal experience possible.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready for San Diego Junk Removal?</h3>
                <p className="text-lg mb-6">
                  Professional service with local expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ San Diego Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off Online Booking</strong> • <strong>Piano Specialist</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Local specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Nearby Areas We Serve</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">La Jolla</h4>
              <p className="text-gray-600">Luxury coastal community service</p>
            </div>
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Mission Beach</h4>
              <p className="text-gray-600">Beachfront vacation rental support</p>
            </div>
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Downtown San Diego</h4>
              <p className="text-gray-600">Urban residential and commercial</p>
            </div>
          </div>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}