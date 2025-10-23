import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RanchoSantaFeFAQSection from "./RanchoSantaFeFAQSection";
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
  title: 'Rancho Santa Fe Junk Removal | Luxury Estate Experts | (619) 750-0114',
  description: 'Rancho Santa Fe junk removal for luxury estates. Discreet, professional service. Licensed & insured. (619) 750-0114',
  keywords: 'Rancho Santa Fe junk removal, junk hauling Rancho Santa Fe, junk pickup Rancho Santa Fe, trash removal Rancho Santa Fe, Rancho Santa Fe San Diego junk removal',
  openGraph: {
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate Specialists',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured. Call (619) 750-0114!',
    url: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
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
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate Specialists',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-rancho-santa-fe',
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

export default function JunkRemovalRanchoSantaFePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Rancho Santa Fe",
    serviceName: "Junk Removal",
    description: "Professional Rancho Santa Fe junk removal for luxury estates. Discreet service, white-glove handling. Licensed & insured.",
    url: "https://severincleaners.com/junk-removal-rancho-santa-fe",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Rancho Santa Fe Junk Removal", url: "https://severincleaners.com/junk-removal-rancho-santa-fe" },
  ]);

  const nearbyLocations = [
    { name: "Del Mar", slug: "del-mar" },
    { name: "Solana Beach", slug: "solana-beach" },
    { name: "Encinitas", slug: "encinitas" },
    { name: "Escondido", slug: "escondido" },
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
                Luxury Estate Junk Removal Specialists
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Rancho Santa Fe Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                The Covenant • Fairbanks Ranch • Luxury Estate Cleanouts
              </p>

              <p className="text-lg mb-8">
                ✓ <a href="/same-day-junk-removal-san-diego" className="text-white hover:underline">Same-Day Service</a> Available ✓ Licensed & Insured ✓ Discreet & Professional
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
                      Professional Rancho Santa Fe Junk Removal – Del Dios Highway to The Covenant
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Rancho Santa Fe junk removal</strong> serves one of Southern California's most exclusive communities. Our <strong>junk hauling Rancho Santa Fe</strong> team provides discreet, professional service for luxury estates, gated properties, and multi-acre compounds throughout The Covenant, Fairbanks Ranch, and surrounding areas. We understand the unique requirements of high-end properties and deliver white-glove <strong>trash removal Rancho Santa Fe</strong> with complete respect for privacy and property.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Rancho Santa Fe Communities We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>The Covenant:</strong> 6,200-acre exclusive community</li>
                        <li><strong>Fairbanks Ranch:</strong> Gated luxury estates</li>
                        <li><strong>The Bridges:</strong> Golf course community</li>
                        <li><strong>Rancho Valencia:</strong> Resort area estates</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Del Rayo Estates:</strong> Hilltop properties</li>
                        <li><strong>Crosby Estates:</strong> Historic luxury homes</li>
                        <li><strong>RSF Village:</strong> Downtown shopping district</li>
                        <li><strong>Cielo:</strong> Gated enclave</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Roads & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Rancho Santa Fe San Diego junk removal</strong> team navigates all major routes:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Del Dios Highway (S6):</strong> Main west access</li>
                      <li>• <strong>Via De La Valle:</strong> South corridor to I-5</li>
                      <li>• <strong>Paseo Delicias:</strong> Village shopping area</li>
                      <li>• <strong>La Granada:</strong> Covenant main road</li>
                      <li>• <strong>Linea Del Cielo:</strong> Hilltop estates</li>
                      <li>• <strong>El Camino Del Norte:</strong> North properties</li>
                      <li>• <strong>San Dieguito Road:</strong> East access</li>
                      <li>• <strong>Avenida De Acacias:</strong> Residential corridor</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Rancho Santa Fe Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup Rancho Santa Fe</strong> service near all community landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Rancho Santa Fe Golf Club</li>
                        <li>• The Inn at Rancho Santa Fe</li>
                        <li>• RSF Village Shopping District</li>
                        <li>• Roger Rowe School</li>
                        <li>• RSF Country Day School</li>
                        <li>• Helen Woodward Animal Center</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Rancho Valencia Resort & Spa</li>
                        <li>• The Bridges Golf Club</li>
                        <li>• Morgan Run Resort</li>
                        <li>• San Dieguito River Park</li>
                        <li>• Lake Hodges</li>
                        <li>• RSF Association Community Center</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Service Timing & Scheduling</h3>
                    <p className="text-gray-700 mb-4">
                      Rancho Santa Fe's low-traffic environment allows flexible scheduling:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>School hours (7:30-8:30 AM, 2:30-3:30 PM):</strong> We coordinate around Roger Rowe and Country Day School traffic on Paseo Delicias.</li>
                      <li><strong>Weekend service preferred:</strong> Many estates request Saturday service to minimize disruption during the work week.</li>
                      <li><strong>Gated community protocols:</strong> We coordinate with gate security, HOAs, and property managers for seamless access.</li>
                      <li><strong>Event coordination:</strong> We work around polo matches, fundraisers, and private events at estates and country clubs.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Rancho Santa Fe's Mediterranean climate means hot, dry summers (85-95°F) and mild winters. Santa Ana wind events (October-February) create fire-hazard conditions requiring defensible space clearance. We schedule large estate cleanouts during cooler morning hours (6-10 AM) in summer and help property owners maintain brush clearance requirements year-round.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove from Rancho Santa Fe Estates</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Estate Furniture</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Designer sofas, sectionals</li>
                          <li>• Antique furniture, pianos</li>
                          <li>• Bedroom sets, armoires</li>
                          <li>• Office furniture, libraries</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Equipment</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sub-Zero refrigerators</li>
                          <li>• Wine cellars, coolers</li>
                          <li>• Commercial-grade appliances</li>
                          <li>• HVAC units, water heaters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Recreation</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Pool equipment, furniture</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a></li>
                          <li>• Tennis court equipment</li>
                          <li>• Landscape materials, planters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Renovation & Construction</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Kitchen/bath remodel debris</li>
                          <li>• Flooring, cabinets, counters</li>
                          <li>• Windows, doors, fixtures</li>
                          <li>• Drywall, lumber, materials</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Rancho Santa Fe Estate Owners Choose Us</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Discretion & Professionalism:</strong> Uniformed crews, unmarked vehicles available, complete respect for privacy and property.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>White-Glove Service:</strong> Careful handling of high-value items, floor protection, minimal disruption to daily operations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Multi-Acre Property Experience:</strong> We navigate large estates, guest houses, pool houses, and multiple structures with ease.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Fully Insured:</strong> Comprehensive liability coverage for luxury properties and high-value estates.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Rancho Santa Fe"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Rancho Santa Fe"
          contextParagraph="Estate cleanouts and luxury property services throughout The Covenant, Fairbanks Ranch, and all Rancho Santa Fe communities use our transparent pricing. For multi-acre estates, call for custom quotes."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Rancho Santa Fe" coverageArea="North County Coastal" />

        {/* FAQ Section */}
        <RanchoSantaFeFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Designer furniture and antique removal for luxury estates</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout Services</h4>
                <p className="text-gray-600">Complete estate cleanouts with discretion and professionalism</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Luxury home remodel and renovation debris cleanup</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
