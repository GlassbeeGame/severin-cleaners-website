import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Scrap Metal Removal San Diego | Metal Recycling & Appliance Pickup",
  description: "Professional scrap metal removal in San Diego. We recycle copper, aluminum, steel, appliances & all metal types. Same-day pickup. Licensed & eco-friendly. Call (619) 750-0114.",
  keywords: [
    "scrap metal removal San Diego",
    "metal recycling San Diego",
    "scrap metal pickup",
    "copper recycling",
    "aluminum recycling",
    "appliance removal",
    "scrap metal hauling",
    "metal disposal San Diego"
  ],
  openGraph: {
    title: "Scrap Metal Removal San Diego | Metal Recycling & Appliance Pickup",
    description: "Professional scrap metal removal in San Diego. We recycle copper, aluminum, steel, appliances & all metal types. Same-day pickup available.",
    url: "https://severincleaners.com/scrap-metal-removal",
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Scrap Metal Removal San Diego - Severin Cleaners'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scrap Metal Removal San Diego | Metal Recycling & Appliance Pickup',
    description: 'Professional scrap metal removal in San Diego. We recycle copper, aluminum, steel, appliances & all metal types. Same-day pickup available.',
    images: ['https://severincleaners.com/og-image.jpg']
  },
  alternates: {
    canonical: "https://severincleaners.com/scrap-metal-removal",
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
    'geo.placename': 'San Diego',
    'geo.position': '32.7157;-117.1611',
    'ICBM': '32.7157, -117.1611',
  },
};

const scrapMetalFAQs = [
  {
    question: "What types of scrap metal do you accept?",
    answer: "We accept all ferrous and non-ferrous metals including:"
  },
  {
    question: "How much does scrap metal removal cost in San Diego?",
    answer: "Our scrap metal removal pricing is volume-based and transparent:"
  },
  {
    question: "Do you remove refrigerators and appliances with Freon?",
    answer: "Yes, we safely remove all appliances including refrigerators, freezers, air conditioners, and other Freon-containing units. We follow EPA regulations and California environmental standards for proper Freon removal and disposal before recycling the metal components. All hazardous materials are handled by certified technicians at licensed facilities."
  },
  {
    question: "Where do you take scrap metal for recycling?",
    answer: "We partner with licensed, certified metal recycling facilities throughout San Diego County. All metals are properly sorted, processed, and recycled according to California environmental regulations. Copper, aluminum, and brass are sent to specialized processors, while ferrous metals go to steel recycling centers. Appliances are processed at e-waste facilities where Freon and other hazardous materials are properly handled before metal recovery."
  },
  {
    question: "Do you offer same-day scrap metal pickup in San Diego?",
    answer: "Yes, we offer same-day scrap metal removal throughout San Diego County including El Cajon, La Mesa, Santee, Chula Vista, and all surrounding areas. Call before 2 PM for same-day service availability. We serve both residential and commercial properties with fast, professional metal pickup and hauling services."
  },
  {
    question: "Can I get paid for my scrap metal?",
    answer: "For large quantities of valuable metals like copper, aluminum, and brass, we offer pricing credits that can offset or eliminate your removal cost. Small amounts of mixed scrap metal typically don't generate payment but help reduce your overall hauling fees. Call us at (619) 750-0114 to discuss your specific situation and get a custom quote based on the type and quantity of metal you have."
  }
];

export default function ScrapMetalRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Scrap Metal Removal San Diego",
    description: "Professional scrap metal removal and recycling in San Diego. We handle copper, aluminum, steel, appliances, and all metal types with eco-friendly disposal.",
    url: "https://severincleaners.com/scrap-metal-removal",
    serviceType: "Scrap Metal Removal & Recycling Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Scrap Metal Removal", url: "https://severincleaners.com/scrap-metal-removal" },
  ]);

  const reviewSchema = {
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://severincleaners.com/#business",
      "name": "Severin Cleaners",
      "telephone": "+1-619-750-0114",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8900 Grossmont Blvd, Suite 1",
        "addressLocality": "La Mesa",
        "addressRegion": "CA",
        "postalCode": "91941",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "image": [
        "https://severincleaners.com/optimized/couchwithlogo.jpg",
        "https://severincleaners.com/optimized/toiletteam.jpg",
        "https://severincleaners.com/optimized/commercial.jpg"
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Tony Murphy"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "They stopped by to help my grandfather remove his old fridge and install the new one. They were kind, quick to respond, and got everything done in no time. We thought it would be a hassle since the new fridge had to be picked up last minute, but they made it effortless and even took the time to coordinate everything.",
    "datePublished": "2025-01-15",
    "publisher": {
      "@type": "Organization",
      "name": "Google",
      "url": "https://www.google.com/maps/place/Severin+Cleaners"
    }
  };

  const faqSchema = generateFAQSchema(scrapMetalFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, reviewSchema]
  };

  const relatedServices = [
    { name: "Appliance Removal", slug: "/appliance-removal-san-diego" },
    { name: "Furniture Removal", slug: "/furniture-disposal-san-diego" },
    { name: "Construction Debris", slug: "/construction-debris-removal-san-diego" },
    { name: "Commercial Junk Removal", slug: "/commercial-junk-removal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Scrap Metal Removal San Diego"
          subtitle="Professional Metal Recycling • Appliance Pickup • Eco-Friendly Disposal • Same-Day Service"
          description="Licensed & Insured • All Metal Types • Fast Service"
        />

        {/* Main Content with Sidebar - 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Scrap Metal Recycling in San Diego
                    </h2>
                    <p className="text-lg mb-4 text-gray-700">
                      Looking for reliable scrap metal removal San Diego services? Our professional team handles all types of ferrous and non-ferrous metals throughout San Diego County from <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a> industrial areas, <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a> auto shops, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>, and <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>. From single appliance pickup to large commercial metal cleanouts, we provide eco-friendly <strong>metal recycling San Diego</strong> with transparent pricing and same-day service available.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Whether you're a contractor with construction debris, a homeowner with old appliances, or a business clearing out metal equipment, our scrap metal hauling service makes disposal easy. We handle all the heavy lifting, proper transportation, and ensure your metals are recycled at certified facilities throughout San Diego County.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Types of Scrap Metal We Accept</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>San Diego metal recycling</strong> service accepts virtually all metal types:
                    </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Appliances & Large Items</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Refrigerators and freezers (Freon removal included)</li>
                      <li>Washers, dryers, and dishwashers</li>
                      <li>Stoves, ovens, and microwaves</li>
                      <li>Water heaters and HVAC units</li>
                      <li>Metal furniture and filing cabinets</li>
                      <li>Exercise equipment and weight sets</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Construction & Raw Metals</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Copper pipes, wire, and plumbing fixtures</li>
                      <li>Aluminum siding, gutters, and window frames</li>
                      <li>Steel beams, rebar, and construction metal</li>
                      <li>Brass fixtures and hardware</li>
                      <li>Iron railings, gates, and fencing</li>
                      <li>Metal roofing and flashing materials</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Copper Recycling San Diego</h3>
                <p className="text-lg mb-6">
                  Copper is one of the most valuable recyclable metals. Our <strong>copper recycling San Diego</strong> service accepts copper pipes, electrical wiring, plumbing fixtures, air conditioning units, and more. We offer competitive pricing for large quantities of clean copper, and can often provide credits that reduce or eliminate your removal cost.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Aluminum Recycling & Removal</h3>
                <p className="text-lg mb-6">
                  From aluminum siding to gutters, window frames to cans, our <strong>aluminum recycling San Diego</strong> service handles all forms of aluminum scrap. Aluminum is highly recyclable and in-demand, making it another metal that may qualify for pricing credits on large quantities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Steel & Iron Scrap Metal Pickup</h3>
                <p className="text-lg mb-6">
                  Contractors and homeowners trust our <strong>steel recycling</strong> service for removing construction debris, rebar, beams, railings, gates, and all ferrous metals. We have the equipment to handle heavy loads and transport your steel scrap to certified recycling facilities.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Appliance Removal with Freon Disposal</h3>
                <p className="text-lg mb-6">
                  Need refrigerator removal or other appliance disposal? We safely remove all appliances containing Freon, following EPA regulations for proper hazardous material handling. Our certified partners ensure refrigerant is recovered before metal recycling, protecting the environment and meeting California standards.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Where We Recycle Your Scrap Metal</h3>
                <p className="text-lg mb-4">
                  Transparency matters. Our metal disposal San Diego service partners with licensed recycling facilities throughout the region:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Certified Metal Recyclers:</strong> Licensed facilities in El Cajon, La Mesa, and Santee for ferrous and non-ferrous metals</li>
                  <li><strong>E-Waste Facilities:</strong> California-certified processors for appliances with proper Freon and refrigerant recovery</li>
                  <li><strong>Specialized Processors:</strong> Dedicated copper and aluminum processing centers for high-value metals</li>
                  <li><strong>Steel Recycling Centers:</strong> Industrial facilities for rebar, beams, and heavy steel scrap</li>
                </ul>

                <h3 className="text-2xl font-bold mt-10 mb-4">Commercial Scrap Metal Services</h3>
                <p className="text-lg mb-6">
                  We provide <strong>commercial metal recycling</strong> for businesses throughout San Diego County. Whether you're a contractor with ongoing debris, a manufacturer with scrap materials, or a business with metal equipment to dispose of, we offer regular pickup schedules, competitive pricing, and proper documentation for your recycling efforts.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Residential Metal Removal</h3>
                <p className="text-lg mb-6">
                  Homeowners choose our residential scrap metal pickup for appliance disposal, garage cleanouts, renovation debris, and more. We make it easy – just call for a quote, schedule your pickup, and we handle everything from there. No need to transport heavy metals yourself.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-green-900">Customer Testimonial</h4>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-500 text-lg mr-2">⭐⭐⭐⭐⭐</div>
                    <p className="font-bold text-gray-900">Tony Murphy - Rancho San Diego</p>
                  </div>
                  <p className="text-gray-700 italic mb-2">
                    "They stopped by to help my grandfather remove his old fridge and install the new one. They were kind, quick to respond, and got everything done in no time. We thought it would be a hassle since the new fridge had to be picked up last minute, but they made it effortless and even took the time to coordinate everything."
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  Our scrap metal removal San Diego service covers the entire county. We also provide <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance metal recycling</a>, <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction metal disposal</a>, and <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial scrap metal</a> services:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside</li>
                      <li>• Rancho San Diego</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central & Coastal</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown San Diego</li>
                      <li>• La Jolla</li>
                      <li>• Pacific Beach</li>
                      <li>• Mission Valley</li>
                      <li>• North Park</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">South & North County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Chula Vista</li>
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• Poway</li>
                      <li>• Carmel Valley</li>
                    </ul>
                  </div>
                </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Ready to Recycle Your Scrap Metal?</h4>
                      <p className="text-gray-700 mb-4">
                        Fast, eco-friendly metal removal with transparent pricing and same-day service available. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for a free quote.
                      </p>
                      <p className="text-sm text-gray-600">
                        Licensed & insured • Same-day pickup • Certified recycling facilities
                      </p>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Scrap Metal Removal"
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
          locationName="Scrap Metal Removal"
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Scrap Metal Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Scrap Metal Removal San Diego"
          description="Get answers to common questions about our scrap metal removal San Diego service, pricing, and same-day pickup options."
          faqs={scrapMetalFAQs}
          ctaTitle="Still Have Questions About Scrap Metal Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our scrap metal removal San Diego services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />
      </main>
      <Footer />
    </>
  );
}
