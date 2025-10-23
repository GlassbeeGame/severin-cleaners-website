import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DelMarFAQSection from "./DelMarFAQSection";
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
  title: 'Del Mar Junk Removal | Coastal Luxury Experts | (619) 750-0114',
  description: 'Del Mar junk removal from Del Mar Village to Del Mar Heights. Coastal property specialists. Licensed & insured. (619) 750-0114',
  keywords: 'Del Mar junk removal, junk hauling Del Mar, junk pickup Del Mar, trash removal Del Mar, Del Mar San Diego junk removal, junk removal 92014, Camino Del Mar junk hauling',
  openGraph: {
    title: 'Del Mar Junk Removal | Coastal Luxury Specialists',
    description: 'Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-del-mar',
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
    title: 'Del Mar Junk Removal | Coastal Luxury Specialists',
    description: 'Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-del-mar',
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

export default function JunkRemovalDelMarPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Del Mar",
    serviceName: "Junk Removal",
    description: "Professional Del Mar junk removal from Village to Heights. Expert coastal property service. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-del-mar",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Del Mar Junk Removal", url: "https://severincleaners.com/junk-removal-del-mar" },
  ]);

  const nearbyLocations = [
    { name: "Solana Beach", slug: "solana-beach" },
    { name: "Rancho Santa Fe", slug: "rancho-santa-fe" },
    { name: "Carmel Valley", slug: "carmel-valley" },
    { name: "Encinitas", slug: "encinitas" },
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
                #1 Del Mar Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Del Mar Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Del Mar Village • Del Mar Heights • Coastal Luxury Service
              </p>

              <p className="text-lg mb-8">
                ✓ Transparent Pricing ✓ Eco-Friendly Disposal ✓ Coastal Property Experts
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
                      Professional Junk Hauling Del Mar – Del Mar Village to Del Mar Heights
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Del Mar junk removal</strong> serves one of San Diego's most exclusive coastal communities. From oceanfront homes near Powerhouse Park to Del Mar Heights estates overlooking the Pacific, our <strong>junk hauling Del Mar</strong> team delivers premium service with discretion and professionalism. We're fully licensed and insured, providing same-day <strong>trash removal Del Mar</strong> throughout the 92014 area with transparent pricing and eco-friendly disposal practices.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Del Mar Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Del Mar Village:</strong> Downtown, beach access, shops</li>
                        <li><strong>Del Mar Heights:</strong> Hilltop estates, panoramic views</li>
                        <li><strong>Flower Hill:</strong> Shopping, residential hillside</li>
                        <li><strong>Del Mar Highlands:</strong> Master-planned community</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Stratford Court:</strong> Coastal homes near beach</li>
                        <li><strong>Coastal Zone:</strong> Beachfront properties</li>
                        <li><strong>Carmel Valley Border:</strong> East Del Mar</li>
                        <li><strong>North Beach:</strong> Torrey Pines border area</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Del Mar San Diego junk removal</strong> team navigates all major routes:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Camino Del Mar:</strong> Main coastal road</li>
                      <li>• <strong>Del Mar Heights Road:</strong> Hilltop access</li>
                      <li>• <strong>Jimmy Durante Boulevard:</strong> Commercial corridor</li>
                      <li>• <strong>Via de la Valle:</strong> Fairgrounds, I-5 access</li>
                      <li>• <strong>Coast Boulevard:</strong> Beachfront homes</li>
                      <li>• <strong>15th Street:</strong> Village downtown</li>
                      <li>• <strong>Stratford Court:</strong> Residential enclave</li>
                      <li>• <strong>Durango Drive:</strong> Heights area</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Del Mar Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal 92014</strong> service near all Del Mar landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Del Mar Racetrack & Fairgrounds</li>
                        <li>• Del Mar Plaza (shopping)</li>
                        <li>• Del Mar City Beach</li>
                        <li>• Flower Hill Promenade</li>
                        <li>• Del Mar Highlands Town Center</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Torrey Pines State Reserve (border)</li>
                        <li>• Del Mar Civic Center</li>
                        <li>• L'Auberge Del Mar (resort)</li>
                        <li>• Del Mar Country Club</li>
                        <li>• San Dieguito Lagoon</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Del Mar's seasonal traffic patterns affect <strong>Camino Del Mar junk hauling</strong> scheduling:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Racing Season (July-Sept, November):</strong> Via de la Valle and Jimmy Durante experience heavy traffic on race days (Wed-Sun). We schedule residential service early mornings or Monday-Tuesday.</li>
                      <li><strong>Summer Beach Traffic:</strong> Camino Del Mar and Coast Boulevard congested 10 AM-5 PM weekends. We offer early morning (6-9 AM) premium service for beachfront properties.</li>
                      <li><strong>Del Mar Village narrow streets:</strong> 15th Street and Stratford Court require strategic parking. We coordinate with neighbors and use hand trucks for tight access.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Coastal Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Del Mar's coastal microclimate brings May-August marine layer (cool, foggy mornings ideal for physical work) and year-round mild temperatures (60-75°F). Salt air accelerates corrosion on outdoor furniture and appliances. We protect electronics during transport and schedule around winter storm systems that occasionally cause street flooding in low-lying Village areas.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Del Mar</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Designer sofas, sectionals</li>
                          <li>• Bedroom sets, mattresses</li>
                          <li>• Dining tables, chairs</li>
                          <li>• Office furniture, desks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, wine coolers</li>
                          <li>• Washers, dryers, dishwashers</li>
                          <li>• TVs, electronics, computers</li>
                          <li>• HVAC units, water heaters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Coastal Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, umbrellas</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                          <li>• BBQ grills, outdoor kitchens</li>
                          <li>• Pool equipment, furniture</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate & garage cleanouts</li>
                          <li>• Construction debris, remodels</li>
                          <li>• Yard waste, landscaping</li>
                          <li>• Storage unit contents</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Del Mar Residents Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Coastal Access Expertise:</strong> We navigate narrow Village streets, beachfront access, and hillside Heights properties with skill.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Racing Season Scheduling:</strong> We work around Del Mar Racetrack events and summer crowds with flexible timing.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Volume-based pricing that doesn't change with racing season or beach traffic. No hidden fees.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Comprehensive coverage for luxury coastal properties and high-value estates.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Del Mar"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Del Mar"
          contextParagraph="Estate cleanouts and property services from Del Mar Village to Del Mar Heights all use transparent, volume-based pricing. Racing season or beach traffic doesn't change our rates."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Del Mar" coverageArea="North County Coastal" />

        {/* FAQ Section */}
        <DelMarFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Coastal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and coastal property furnishing removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate cleanouts for Del Mar luxury properties</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Coastal home remodel and renovation debris cleanup</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
