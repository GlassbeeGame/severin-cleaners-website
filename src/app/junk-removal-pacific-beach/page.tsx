import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PacificBeachFAQSection from "./PacificBeachFAQSection";
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
  title: 'Pacific Beach Junk Removal | Beach House & Rental Experts | (619) 750-0114',
  description: 'Pacific Beach junk removal Crystal Pier to Crown Point. Boardwalk debris, beach furniture. Same-day service. (619) 750-0114',
  keywords: 'Pacific Beach junk removal, junk hauling Pacific Beach, junk pickup PB, trash removal Pacific Beach, PB San Diego junk removal, junk removal 92109, Garnet Avenue junk hauling',
  openGraph: {
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-pacific-beach',
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
    title: 'Pacific Beach Junk Removal | Same-Day Hauling | Licensed & Insured',
    description: 'Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-pacific-beach',
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

export default function JunkRemovalPacificBeachPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Pacific Beach",
    serviceName: "Junk Removal",
    description: "Professional Pacific Beach junk removal from Crystal Pier to Crown Point. Same-day service, transparent pricing. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-pacific-beach",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Pacific Beach Junk Removal", url: "https://severincleaners.com/junk-removal-pacific-beach" },
  ]);

  const nearbyLocations = [
    { name: "La Jolla", slug: "la-jolla" },
    { name: "Ocean Beach", slug: "ocean-beach" },
    { name: "Point Loma", slug: "point-loma" },
    { name: "Mission Beach", slug: "mission-beach" },
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
                #1 Pacific Beach Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pacific Beach Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Crystal Pier to Crown Point • Beach House Cleanouts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Beach Property Experts ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Pacific Beach – Crystal Pier to Crown Point
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Pacific Beach junk removal</strong> serves one of San Diego's most vibrant beach communities. From Crystal Pier boardwalk apartments to Crown Point bay-front homes, our <strong>junk hauling Pacific Beach</strong> team navigates narrow beach streets, shared alley access, and dense summer crowds with expertise. We provide same-day <strong>trash removal Pacific Beach</strong> for beach houses, student housing, and garage cleanouts throughout the 92109 area with transparent pricing and eco-friendly disposal.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Pacific Beach Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>North Pacific Beach:</strong> Kate Sessions Park area, family homes</li>
                        <li><strong>Crown Point:</strong> Bayside properties, Mission Bay waterfront</li>
                        <li><strong>Garnet District:</strong> Commercial corridor, mixed-use buildings</li>
                        <li><strong>Beach Area:</strong> Ocean Front Walk, Crystal Pier, boardwalk</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Bay Park:</strong> Residential hillside, Clairemont border</li>
                        <li><strong>The Promenade:</strong> Shopping center, central location</li>
                        <li><strong>Fanuel Street:</strong> Residential corridor near UCSD</li>
                        <li><strong>Pacific Plaza:</strong> Mission Boulevard commercial area</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>PB San Diego junk removal</strong> team knows every street and alley in Pacific Beach:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Garnet Avenue:</strong> Main commercial corridor</li>
                      <li>• <strong>Mission Boulevard:</strong> Beachfront thoroughfare</li>
                      <li>• <strong>Grand Avenue:</strong> Central residential</li>
                      <li>• <strong>Cass Street:</strong> Farmers market location</li>
                      <li>• <strong>Ingraham Street:</strong> North-south connector</li>
                      <li>• <strong>Lamont Street:</strong> Student housing area</li>
                      <li>• <strong>Bayard Street:</strong> Library, community center</li>
                      <li>• <strong>Crown Point Drive:</strong> Bay access</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Pacific Beach Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal 92109</strong> service near all major PB landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Crystal Pier & Hotel</li>
                        <li>• Kate Sessions Memorial Park</li>
                        <li>• PB Library & Recreation Center</li>
                        <li>• Tourmaline Surfing Park</li>
                        <li>• Belmont Park (border)</li>
                        <li>• Mission Bay Park</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Crown Point Shores</li>
                        <li>• The Promenade Shopping Center</li>
                        <li>• PB Shore Club</li>
                        <li>• Fanuel Park</li>
                        <li>• Kendall-Frost Marsh Reserve</li>
                        <li>• Garnet Avenue Bar District</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Pacific Beach's beach traffic and student population affect <strong>Garnet Avenue junk hauling</strong> timing. We schedule around peak congestion:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Summer weekends (June-Sept):</strong> Heavy beach traffic 10 AM-6 PM. We offer early morning (6-9 AM) or evening (after 6 PM) service.</li>
                      <li><strong>Student move-outs (May, Aug):</strong> SDSU and UCSD students create demand surges. Book 2-3 weeks ahead during these periods.</li>
                      <li><strong>Tuesday Farmers Market:</strong> Bayard Street closes 12-8 PM. We route via Grand Avenue or schedule Wednesday-Monday.</li>
                      <li><strong>Garnet nightlife:</strong> Bar district parking disappears 5 PM-2 AM Fri-Sat. We prioritize Sunday morning (6-10 AM) for restaurant cleanouts.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Pacific Beach's coastal climate impacts junk removal year-round. May-August marine layer brings cool, foggy mornings (ideal working conditions), while salt air accelerates rust on patio furniture and beach equipment stored outdoors. We tarp electronics during coastal fog transport and schedule around occasional winter storm systems that cause street flooding near Crown Point.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Pacific Beach</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, couches, sectionals</li>
                          <li>• Mattresses, box springs, bed frames</li>
                          <li>• Dressers, tables, chairs</li>
                          <li>• Desks, bookshelves, cabinets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, washers, dryers</li>
                          <li>• Dishwashers, stoves, microwaves</li>
                          <li>• TVs, computers, electronics</li>
                          <li>• Air conditioners, heaters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Beach & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Surfboards, paddleboards, kayaks</li>
                          <li>• Beach cruisers, bicycles</li>
                          <li>• Patio furniture, BBQ grills</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate & garage cleanouts</li>
                          <li>• Storage unit contents</li>
                          <li>• Construction debris</li>
                          <li>• Yard waste, branches</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Pacific Beach Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Beach Community Expertise:</strong> We navigate PB's narrow streets, alley access, and beach parking restrictions with ease.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Pacific Beach and the 92109 area.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor and disposal included.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Pacific Beach"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Pacific Beach"
          contextParagraph="Beach house cleanouts and garage clearances throughout PB—from Crystal Pier to Crown Point—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Pacific Beach" />

        {/* FAQ Section */}
        <PacificBeachFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture removal throughout PB</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliance disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Beach house remodel and renovation debris cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
