import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaMesaFAQSection from "./LaMesaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'La Mesa Junk Removal & Hauling | East County\'s Trusted Local Service',
  description: 'Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Call (619) 750-0114 for your quote.',
  keywords: 'La Mesa junk removal, junk hauling La Mesa, junk pickup La Mesa, trash removal La Mesa, La Mesa dump, La Mesa CA junk removal, Mount Helix junk removal, Fletcher Hills junk removal, La Mesa Village junk removal, Grossmont junk removal, Lake Murray junk removal, East County junk removal',
  openGraph: {
    title: 'La Mesa Junk Removal & Hauling | East County\'s Trusted Local Service',
    description: 'Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Call (619) 750-0114 for your quote.',
    url: 'https://severincleaners.com/junk-removal-la-mesa',
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
    title: 'La Mesa Junk Removal & Hauling | East County\'s Trusted Local Service',
    description: 'Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Call (619) 750-0114 for your quote.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-la-mesa',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in La Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most pickups start around $100 and scale by load size and accessibility. All quotes include hauling, labor, and disposal fees."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle hillside homes in Mount Helix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—our junk removal La Mesa CA team is equipped for steep driveways and tight access roads."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve downtown La Mesa Village?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely—we offer flexible pickup windows for retail and multi-unit buildings near Spring Street."
      }
    },
    {
      "@type": "Question",
      "name": "Are your services eco-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—we recycle and donate whenever possible to reduce landfill use at the La Mesa dump."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you respond?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most calls are handled within 24 hours, with same-day availability in central La Mesa and Mount Helix."
      }
    }
  ]
};

export default function JunkremovallamesesPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "La Mesa",
    serviceName: "Junk Removal",
    description: "Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Serving Mount Helix, Fletcher Hills, La Mesa Village, Grossmont Center, and all East County neighborhoods.",
    url: "https://severincleaners.com/junk-removal-la-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "La Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-la-mesa" },
  ]);

  // Additional local business schema for La Mesa
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-la-mesa#business",
    "name": "Severin Cleaners - La Mesa Junk Removal",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7678,
      "longitude": -117.0231
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "La Mesa",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.7678,
        "longitude": -117.0231
      },
      "geoRadius": "10000"
    },
    "openingHours": "Mo-Su 06:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "200"
    }
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
              ✓ Same-Day Service • Licensed & Insured • La Mesa Experts
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              La Mesa Junk Removal & Hauling Services
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Locally Owned Service • East County Specialists
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
                Book Your La Mesa Junk Pickup – Save 15% Online
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving the Heart of East County</h2>

              <p className="text-lg text-gray-700 mb-6">
                La Mesa sits between San Diego's coastal suburbs and the rolling East County foothills, where hillside homes meet family neighborhoods. Our <strong>La Mesa junk removal</strong> team knows every corner—from the winding roads of Mount Helix to the suburban grids of Fletcher Hills and the busy streets near La Mesa Village. Whether you're clearing a garage, prepping a rental, or seeking an easier alternative to the crowded <strong>La Mesa dump</strong>, we provide fast, friendly, and affordable service you can count on.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Our Local Service Areas</h3>
                <p className="text-blue-800 mb-4">We provide complete <strong>junk removal La Mesa CA</strong> coverage across the city and nearby communities:</p>
                <ul className="text-blue-800 space-y-2">
                  <li><strong>Mount Helix:</strong> hillside estates, gated driveways, and narrow road access</li>
                  <li><strong>Fletcher Hills:</strong> traditional family homes and multi-car garage cleanouts</li>
                  <li><strong>La Mesa Village:</strong> downtown condos, retail properties, and restaurant turnovers</li>
                  <li><strong>Grossmont Center:</strong> apartment complexes and commercial offices</li>
                  <li><strong>Spring Street Corridor:</strong> trolley-accessible properties and small businesses</li>
                  <li><strong>Lake Murray Area:</strong> family homes, recreational properties, and storage cleanouts</li>
                </ul>
                <p className="text-blue-700 mt-4">Response times vary by area—most <strong>La Mesa junk pickup</strong> calls are completed within 24 hours, and same-day service is often available for Mount Helix and central La Mesa addresses.</p>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Driving Directions from Local Landmarks</h3>
              <p className="text-lg text-gray-700 mb-4">
                We're centrally located near the Grossmont Center and can reach most jobs in under 20 minutes.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>From <strong>Grossmont Hospital</strong>, head east on Center Dr toward Fletcher Pkwy—our trucks are staged just five minutes away.</li>
                <li>From <strong>La Mesa Village</strong>, we're a quick 10-minute drive via University Ave and Spring St.</li>
                <li>From <strong>Lake Murray Boulevard</strong>, take Baltimore Dr south and we'll meet you near Severin Dr.</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Our close proximity allows flexible scheduling and quicker turnaround than out-of-area haulers who service all of San Diego County.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Weather & Terrain Considerations</h3>
              <p className="text-lg text-gray-700 mb-6">
                La Mesa's East County climate brings hot, dry summers and seasonal Santa Ana winds, which means more brush clearing, furniture turnover, and outdoor debris removal compared to coastal communities. Our crew operates year-round—even during triple-digit days—using smaller vehicles when hillside roads heat up and larger trucks for flat suburban routes. After seasonal storms, we also assist with green-waste hauling and driveway cleanup for homes around Mount Helix and Lake Murray.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Employers & Businesses We Serve</h3>
              <p className="text-lg text-gray-700 mb-4">
                We regularly assist commercial clients and property managers tied to La Mesa's biggest employers and institutions, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Sharp Grossmont Hospital</strong> (medical facility cleanouts & office removals)</li>
                <li><strong>Grossmont Center</strong> retail stores and restaurants</li>
                <li><strong>Helix Charter High School</strong> facility maintenance support</li>
                <li><strong>City of La Mesa</strong> public works and community centers</li>
                <li>Real estate offices along Spring Street and University Avenue</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling La Mesa</strong> team provides after-hours pickup options to minimize business disruption.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neighborhood-Specific Solutions</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Hillside Properties (Mount Helix & Dehesa Road)</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Steep-driveway navigation with smaller trucks</li>
                    <li>Landscape debris removal & fire-safety brush hauling</li>
                    <li>Estate cleanouts with respect for property views and terrain</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Family Neighborhoods (Fletcher Hills & Lake Murray)</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Garage & attic decluttering for growing families</li>
                    <li>Appliance & mattress removal without driveway damage</li>
                    <li>Yard waste pickup and seasonal cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Downtown & Transit Corridor (La Mesa Village & Spring Street)</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Apartment & condo move-outs</li>
                    <li>Office furniture recycling and retail junk pickup</li>
                    <li>Tight schedule coordination with property managers and HOAs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">La Mesa Dump Alternative</h3>
              <p className="text-lg text-gray-700 mb-6">
                The city's public dump near Encanto is often busy, with long lines and disposal fees. Our <strong>La Mesa junk removal</strong> service is a faster, cleaner option—no waiting, no lifting, and no hidden charges. We recycle and donate whenever possible through East County facilities, reducing landfill waste and saving you time.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Pricing</h3>
              <p className="text-lg text-gray-700 mb-4">
                Transparent, all-inclusive pricing that covers labor, hauling, and disposal:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">Single Item (starting at $100)</span>
                    <span className="text-xl font-bold text-blue-600">$100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">¼ Load (3 cu yd)</span>
                    <span className="text-xl font-bold text-blue-600">$249</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">½ Load (6 cu yd)</span>
                    <span className="text-xl font-bold text-blue-600">$349</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">¾ Load (9 cu yd)</span>
                    <span className="text-xl font-bold text-blue-600">$429</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">Full Load (12 cu yd)</span>
                    <span className="text-xl font-bold text-blue-600">$495</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-center">
                  Call for a free quote—our team provides exact totals before pickup so there are no surprises.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Competitor Comparison</h3>
              <p className="text-lg text-gray-700 mb-6">
                Unlike national franchises that route trucks from Mira Mesa or Chula Vista, we're based in East County—meaning shorter drive times, lower fuel costs, and faster response. Competitors often charge extra for hillside access or heavy loads; we include that in our upfront pricing. Every haul is completed by trained local professionals who know La Mesa's roads, HOA rules, and parking restrictions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly Disposal Commitment</h3>
              <p className="text-lg text-gray-700 mb-6">
                We recycle or donate when we can, working with San Diego County transfer stations and local charities. Metal, wood, and appliances go to licensed recyclers, while reusable furniture is redirected to community donation partners.
              </p>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in La Mesa</p>
                    <p className="text-sm opacity-90">locally-owned service • East County specialists • Eco-friendly disposal</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>


              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">📞 Call (619) 750-0114 to schedule your La Mesa junk removal today.</h3>
                <p className="text-lg mb-6">
                  Skip the dump line—get fast, local pickup from East County's trusted junk hauling team.
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏡 La Mesa Special 🏡</p>
                  <div className="text-sm">
                    <strong>Same-Day Service Available</strong> • <strong>Transparent Pricing</strong><br/>
                    <strong>Hillside Property Specialists</strong> • <strong>Eco-Friendly Disposal</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • East County's trusted local service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now using dropdown component */}
      <LaMesaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related East County Family Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large family home furniture removal for growing East County households</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Inherited hillside properties and multi-generational family estate transitions</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Family home renovations and hillside property improvement projects</p>
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