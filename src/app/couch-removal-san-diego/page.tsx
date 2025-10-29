import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CouchFAQSection from "./CouchFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Couch Removal San Diego | Same-Day Sofa Disposal & Pickup',
  description: 'Affordable couch removal in San Diego starting at $100. Same-day sofa disposal, upfront pricing, and responsible recycling by a local hauling team. Call (619) 750-0114.',
  keywords: 'couch removal San Diego, sofa disposal San Diego, sectional removal, couch pickup San Diego, San Diego couch disposal, sofa removal San Diego, loveseat removal, recliner removal San Diego',
  openGraph: {
    title: 'Couch Removal San Diego | Same-Day Sofa Disposal & Pickup',
    description: 'Affordable couch removal in San Diego starting at $100. Same-day sofa disposal, upfront pricing, and responsible recycling by a local hauling team. Call (619) 750-0114.',
    url: 'https://severincleaners.com/couch-removal-san-diego',
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
    title: 'Couch Removal San Diego | Same-Day Sofa Disposal & Pickup',
    description: 'Affordable couch removal in San Diego starting at $100. Same-day sofa disposal, upfront pricing, and responsible recycling by a local hauling team. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/couch-removal-san-diego',
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

const relatedServices = [
  { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
  { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
  { name: "Estate Cleanouts", slug: "estate-cleanout-san-diego" },
  { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does couch removal cost in San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most pickups start at $100 for a single couch, with final pricing based on access and size."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day couch disposal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide same-day or next-day San Diego couch disposal across most neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove sectionals or oversized sofas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We handle large and heavy furniture, including sectionals, recliners, and sleeper sofas."
      }
    },
    {
      "@type": "Question",
      "name": "Do you recycle couches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recycle or donate when possible, coordinating with local San Diego facilities and charities."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve apartments or high-rises downtown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in sofa removal San Diego apartments with stair or elevator access limitations."
      }
    }
  ]
};

export default function CouchRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Couch Removal San Diego",
    description: "Affordable couch removal in San Diego starting at $100. Same-day sofa disposal, upfront pricing, and responsible recycling. We handle sectionals, loveseats, recliners, and all furniture types.",
    url: "https://severincleaners.com/couch-removal-san-diego",
    serviceType: "Couch and Sofa Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Couch Removal", url: "https://severincleaners.com/couch-removal-san-diego" },
  ]);

  // Local business schema for couch removal
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/couch-removal-san-diego#business",
    "name": "Severin Cleaners - Couch Removal San Diego",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.7157,
        "longitude": -117.1611
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 06:00-20:00",
    "aggregateRating": generateAggregateRatingSchema()
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema]
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
              ✓ Same-Day Couch Pickup • Licensed & Insured • Honest Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Couch Removal San Diego & Sofa Disposal Services
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Locally Owned Junk Removal • San Diego Specialists
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
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Eco-Friendly Disposal
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your San Diego Couch Removal Experts</h2>

                  <p className="text-lg text-gray-700 mb-6">
                    Need an old couch gone fast? Our locally owned <strong>San Diego couch removal</strong> team makes it easy. We handle everything—lifting, hauling, and proper disposal—so you don't have to drag your sofa to the curb or deal with dump lines. Whether it's a single sectional or a full living room set, we offer same-day <strong>couch disposal San Diego</strong> residents rely on for quick, professional service.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    We serve all of San Diego County with eco-conscious removal. Whenever possible, we recycle or donate gently used sofas, loveseats, and recliners through local charities to keep furniture out of the landfill. Need to remove more than just a couch? Our full <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal service</a> handles beds, tables, and all household furniture types.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Local Service Areas</h3>
                    <p className="text-blue-800 mb-4">We provide full <strong>sofa removal San Diego</strong> coverage across the county, including:</p>
                    <ul className="text-blue-800 space-y-2">
                      <li><strong>Downtown & Gaslamp Quarter</strong> – Apartment pickups and office furniture removal</li>
                      <li><strong>North Park & Hillcrest</strong> – Urban homes with limited parking or stair access</li>
                      <li><strong>Mission Valley & Clairemont</strong> – Condo and townhouse junk removal</li>
                      <li><strong>La Jolla & Pacific Beach</strong> – Beachfront furniture disposal and large load hauling</li>
                      <li><strong>Chula Vista & National City</strong> – Family homes and rental turnovers</li>
                      <li><strong>East County & El Cajon</strong> – Larger property cleanouts and curbside pickup options</li>
                    </ul>
                    <p className="text-blue-700 mt-4">Most pickups are completed within 24 hours, with same-day availability in central San Diego, North Park, and Mission Valley.</p>
                    <div className="mt-4 text-center">
                      <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Driving Directions from Local Landmarks</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Our main San Diego route runs between Downtown, Mission Valley, and Clairemont, allowing fast access citywide:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>From <strong>Petco Park</strong>, take 10th Ave north to I-8—our trucks can reach you in about 15 minutes.</li>
                    <li>From <strong>Balboa Park</strong>, we're only a 10-minute drive via Park Blvd and University Ave.</li>
                    <li>From <strong>UC San Diego or La Jolla Village</strong>, we're about 20 minutes south down I-5.</li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6">
                    This proximity ensures faster service times than out-of-county haulers who route trucks from Riverside or Orange County.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Weather & Traffic Challenges We Handle</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    San Diego's mild climate is great for living—but not for hauling. Parking restrictions, beach traffic, and narrow driveways can make <strong>couch removal</strong> tricky. Our drivers plan around rush-hour congestion, coastal parking limits, and multi-level buildings. During rainy winter weeks, we provide covered hauling to protect furniture during transport, especially in La Jolla, Pacific Beach, and the South Bay.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Employers & Businesses We Serve</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We partner with local property managers, offices, and residential complexes tied to major San Diego employers, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li><strong>UC San Diego</strong> housing departments</li>
                    <li><strong>Sharp Healthcare</strong> facilities</li>
                    <li><strong>Qualcomm & corporate offices</strong> in Sorrento Valley</li>
                    <li>Hotel and AirBnB owners near <strong>Mission Beach & Gaslamp</strong></li>
                    <li>Retail centers like <strong>Fashion Valley and Westfield UTC</strong></li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6">
                    We provide flexible pickup times for business hours, tenant turnovers, and hotel refreshes.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Neighborhood-Specific Solutions</h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Urban Apartments & Downtown Properties</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Tight hallways and elevator navigation</li>
                        <li>Sectional couch disassembly</li>
                        <li>Same-day move-out pickups near Gaslamp and East Village</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Suburban Homes & Family Properties</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Driveway-safe loading for larger sofas</li>
                        <li>Garage, attic, and side-yard furniture removal</li>
                        <li>Donation coordination for gently used couches</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Beach & Coastal Neighborhoods</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Oversized furniture pickup with limited street access</li>
                        <li>Sand-safe protection for beachfront homes</li>
                        <li>Quick scheduling around tourism & parking hours</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Couch Disposal vs. the San Diego Dump</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Dragging a couch to the Miramar Landfill or city dump can take hours, require a permit, and cost more than you think. Our <strong>couch removal San Diego</strong> service is faster, cleaner, and fully handled by professionals. We load, haul, and dispose responsibly—no appointments, no dump lines, and no lifting.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Load-Based Pricing</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Our pricing includes labor, hauling, and disposal fees.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">Single Couch or Sofa Pickup (starting at $100)</span>
                        <span className="text-xl font-bold text-blue-600">$100</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">¼ Truck (3 cu yd)</span>
                        <span className="text-xl font-bold text-blue-600">$249</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">½ Truck (6 cu yd)</span>
                        <span className="text-xl font-bold text-blue-600">$349</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">¾ Truck (9 cu yd)</span>
                        <span className="text-xl font-bold text-blue-600">$429</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="font-semibold text-gray-700">Full Truck (12 cu yd)</span>
                        <span className="text-xl font-bold text-blue-600">$495</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 text-center">
                      Perfect for a living room set. Call us for an exact quote—prices are always upfront and based on volume and access.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Competitor Comparison</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Unlike national junk franchises, we're San Diego-based, which means faster arrival and lower fuel costs. Competitors often charge surcharges for stairs, tight access, or late pickups—our quotes already include those. We also recycle and donate when possible, while many competitors haul straight to the dump.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly Furniture Recycling</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    When couches are in good shape, we work with local charities like the San Diego Rescue Mission and Habitat for Humanity ReStore to give them a second life. Damaged or non-recyclable pieces are disposed of responsibly through licensed facilities. Our goal is to reduce landfill waste while keeping your removal quick and affordable.
                  </p>

                  <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                    <h3 className="text-2xl font-bold mb-4">📞 Call (619) 750-0114 to schedule your San Diego couch removal today.</h3>
                    <p className="text-lg mb-6">
                      Fast service, transparent pricing, and responsible disposal—locally owned and proud to serve every San Diego neighborhood.
                    </p>
                    <a
                      href="tel:6197500114"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                    >
                      📞 Call (619) 750-0114 Now
                    </a>
                    <div className="bg-blue-800 rounded-lg p-4">
                      <p className="text-yellow-300 font-semibold mb-2">🛋️ Couch Removal Special 🛋️</p>
                      <div className="text-sm">
                        <strong>Same-Day Service Available</strong> • <strong>Transparent Pricing</strong><br/>
                        <strong>Eco-Friendly Recycling</strong> • <strong>All San Diego Neighborhoods</strong>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      Licensed & insured • Same-day service • Locally owned San Diego couch removal specialists
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="lg:col-span-1">
              <LocationSidebarCTA
                locationName="Couch Removal"
                nearbyLocations={relatedServices}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Couch Removal"
        contextParagraph="Our pricing includes labor, hauling, and disposal fees. Perfect for a living room set. Call us for an exact quote—prices are always upfront and based on volume and access."
      />

      {/* Trust Signals */}
      <TrustSignalsSection locationName="Couch Removal" />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CouchFAQSection />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Furniture Removal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Complete furniture removal including couch removal and sofa pickup</p>
            </a>
            <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
              <p className="text-gray-600">If you're removing multiple furniture items, see our couch removal options</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts</h4>
              <p className="text-gray-600">Old furniture and sofa removal services for complete property cleanouts</p>
            </a>
          </div>
        </div>
      </section>
      </main>
        <Footer />
      </div>
    </>
  );
}
