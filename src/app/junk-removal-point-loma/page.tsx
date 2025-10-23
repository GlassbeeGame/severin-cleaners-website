import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointLomaFAQSection from "./PointLomaFAQSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Point Loma Junk Removal | Military & Coastal Experts | (619) 750-0114',
  description: 'Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. (619) 750-0114',
  keywords: 'Point Loma junk removal, junk hauling Point Loma, junk pickup Point Loma, trash removal Point Loma, Point Loma San Diego junk removal, military PCS moves',
  openGraph: {
    title: 'Point Loma Junk Removal | Military & Coastal Specialists',
    description: 'Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-point-loma',
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
    title: 'Point Loma Junk Removal | Military & Coastal Specialists',
    description: 'Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-point-loma',
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

export default function JunkRemovalPointLomaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Point Loma",
    serviceName: "Junk Removal",
    description: "Professional Point Loma junk removal from Naval Base to Sunset Cliffs. Military PCS support. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-point-loma",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Point Loma Junk Removal", url: "https://severincleaners.com/junk-removal-point-loma" },
  ]);

  const nearbyLocations = [
    { name: "Ocean Beach", slug: "ocean-beach" },
    { name: "Pacific Beach", slug: "pacific-beach" },
    { name: "Mission Beach", slug: "mission-beach" },
    { name: "Downtown San Diego", slug: "downtown-san-diego" },
  ];

  return (
    <div className={`${inter.variable} font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Military & Coastal Junk Removal Specialists
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Point Loma Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Naval Base • Liberty Station • Sunset Cliffs • Military PCS Support
              </p>

              <p className="text-lg mb-8">
                ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Military Discounts
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content - Left Column */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Introduction */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Military & Coastal Point Loma Junk Removal Experts
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Point Loma junk removal</strong> serves one of San Diego's most unique peninsulas, combining military base housing, historic coastal neighborhoods, and waterfront properties. Our <strong>junk hauling Point Loma</strong> team navigates Naval Base San Diego access protocols, Liberty Station's historic district, and Sunset Cliffs' narrow coastal streets with expertise. We provide same-day <strong>trash removal Point Loma</strong> with special support for military PCS moves, transparent pricing, and eco-friendly disposal throughout the Point Loma peninsula.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Point Loma Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Naval Base San Diego:</strong> Base housing, barracks</li>
                        <li><strong>Liberty Station/NTC:</strong> Historic redevelopment</li>
                        <li><strong>Sunset Cliffs:</strong> Coastal bluff properties</li>
                        <li><strong>Wooded Area/Roseville:</strong> Central residential</li>
                        <li><strong>Loma Portal:</strong> Family neighborhoods</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>La Playa:</strong> Waterfront, yacht clubs</li>
                        <li><strong>Shelter Island:</strong> Marina, hotels</li>
                        <li><strong>Harbor Island:</strong> High-rises, marinas</li>
                        <li><strong>Point Loma Heights:</strong> Hillside homes</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Base Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Point Loma San Diego junk removal</strong> team knows all access routes:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Rosecrans Street (CA-209):</strong> Main corridor</li>
                      <li>• <strong>Catalina Boulevard:</strong> Coastal route</li>
                      <li>• <strong>Nimitz Boulevard:</strong> Waterfront access</li>
                      <li>• <strong>Sports Arena Boulevard:</strong> North entry</li>
                      <li>• <strong>Voltaire Street:</strong> Commercial area</li>
                      <li>• <strong>Sunset Cliffs Boulevard:</strong> Coastal homes</li>
                      <li>• <strong>Hill Street:</strong> Central residential</li>
                      <li>• <strong>Canon Street:</strong> Base housing</li>
                    </ul>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-sm text-gray-700">
                        <strong>Naval Base Access:</strong> We coordinate with base housing offices for on-base junk removal. Active duty personnel should contact us 48 hours in advance for gate clearance coordination.
                      </p>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Point Loma Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup Point Loma</strong> service near all community landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Cabrillo National Monument</li>
                        <li>• Liberty Station/NTC Promenade</li>
                        <li>• Sunset Cliffs Natural Park</li>
                        <li>• Naval Base San Diego</li>
                        <li>• Point Loma Nazarene University</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Shelter Island Yacht Basin</li>
                        <li>• Liberty Public Market</li>
                        <li>• Harbor Island Drive</li>
                        <li>• Ocean Beach Pier (border)</li>
                        <li>• Loma Portal Park</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Point Loma's unique geography creates specific traffic patterns:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Military Base Commute (6:30-8:30 AM, 3:30-5:30 PM):</strong> Rosecrans Street and Nimitz Boulevard experience heavy base traffic. We schedule around shift changes for residential properties.</li>
                      <li><strong>Sunset Cliffs Recreation Traffic:</strong> Weekends bring surfers and tourists to Sunset Cliffs Boulevard. Early morning (6-9 AM) service works best for coastal homes.</li>
                      <li><strong>Liberty Station Events:</strong> Farmers markets, concerts, and community events create parking challenges. We coordinate with event calendars.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Point Loma's coastal position brings persistent marine layer May-August (cool, foggy mornings) and mild year-round temperatures ideal for junk removal work. Salt air from the Pacific and San Diego Bay accelerates rust on outdoor furniture and equipment. We protect sensitive items during transport and schedule around winter storms that occasionally impact Sunset Cliffs coastal access.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Point Loma</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, sectionals, recliners</li>
                          <li>• Mattresses, bed frames</li>
                          <li>• Tables, chairs, dressers</li>
                          <li>• Desks, bookshelves, cabinets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, washers, dryers</li>
                          <li>• Stoves, dishwashers, microwaves</li>
                          <li>• TVs, computers, electronics</li>
                          <li>• AC units, water heaters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Marine Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, grills</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                          <li>• Marine equipment, kayaks</li>
                          <li>• Yard waste, landscaping</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Military PCS & Cleanouts</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• PCS move excess items</li>
                          <li>• Estate & garage cleanouts</li>
                          <li>• Construction debris</li>
                          <li>• Storage unit contents</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Military Families & Coastal Residents Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Military PCS Experience:</strong> We understand base housing requirements and coordinate with housing offices for smooth clearances.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Base Access Protocols:</strong> Our crews are experienced with NBSD gate procedures and vehicle inspections.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Coastal Property Navigation:</strong> We handle Sunset Cliffs narrow streets, Liberty Station historic properties, and waterfront access.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Active duty military receive special discount pricing. Call for details.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Point Loma"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Point Loma"
          contextParagraph="Military PCS moves and coastal property cleanouts all use the same transparent pricing. Active duty military families receive special discount pricing."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Point Loma" />

        {/* FAQ Section */}
        <PointLomaFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Point Loma Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Military PCS and household furniture removal for Point Loma</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate and garage cleanouts throughout Point Loma</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Refrigerators, washers, dryers, and appliance disposal</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
