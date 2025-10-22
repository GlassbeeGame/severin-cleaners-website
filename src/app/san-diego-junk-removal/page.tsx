import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SanDiegoFAQSection from "./SanDiegoFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, combineSchemas } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Junk Removal San Diego | Same-Day Service & Transparent Pricing',
  description: 'Fast junk removal across San Diego County starting around $100. Same-day pickup, licensed local team, and no-hidden-fee pricing. Call (619) 750-0114 today.',
  keywords: 'junk removal San Diego, San Diego junk removal, junk hauling San Diego, junk pickup San Diego, trash removal San Diego, San Diego County junk removal, same-day junk removal, junk removal cost San Diego, furniture removal San Diego, couch removal San Diego, appliance removal San Diego',
  openGraph: {
    title: 'Junk Removal San Diego | Same-Day Service & Transparent Pricing',
    description: 'Fast junk removal across San Diego County starting around $100. Same-day pickup, licensed local team, and no-hidden-fee pricing. Call (619) 750-0114 today.',
    url: 'https://severincleaners.com/san-diego-junk-removal',
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
    title: 'Junk Removal San Diego | Same-Day Service & Transparent Pricing',
    description: 'Fast junk removal across San Diego County starting around $100. Same-day pickup, licensed local team, and no-hidden-fee pricing. Call (619) 750-0114 today.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/san-diego-junk-removal',
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

export default function SanDiegoJunkRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "San Diego Junk Removal",
    description: "Professional junk removal serving all San Diego County. Same-day service available for furniture removal, appliance disposal, estate cleanouts, construction debris removal, and more.",
    url: "https://severincleaners.com/san-diego-junk-removal",
    serviceType: "Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  // LocalBusiness schema with comprehensive details
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/san-diego-junk-removal#business",
    "name": "Severin Cleaners - San Diego Junk Removal",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "San Diego",
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
        "latitude": 32.7157,
        "longitude": -117.1611
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 06:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "200"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Couch Removal San Diego",
            "url": "https://severincleaners.com/couch-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Removal San Diego",
            "url": "https://severincleaners.com/furniture-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal San Diego",
            "url": "https://severincleaners.com/appliance-removal-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Disposal San Diego",
            "url": "https://severincleaners.com/san-diego-mattress-disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanout San Diego",
            "url": "https://severincleaners.com/estate-cleanout-san-diego"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Junk Removal San Diego",
            "url": "https://severincleaners.com/commercial-junk-removal-san-diego"
          }
        }
      ]
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema]
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
              Locally Owned • Licensed & Insured • Serving All San Diego County
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              San Diego Junk Removal & Same-Day Hauling Experts
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Transparent Pricing Starting at $100
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call Now (619) 750-0114
              </a>
              <a
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Book Online & Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Disposal in Accordance with County Regulations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Junk Removal San Diego Trusts</h2>

              <p className="text-lg text-gray-700 mb-6">
                Looking for <strong>junk removal San Diego</strong> residents rely on? Our locally owned team provides same-day hauling across all of San Diego County with transparent <strong>pricing starting at $100</strong>. From single-item pickups to complete property cleanouts, we handle everything—no hidden fees, no hassle. Licensed, insured, and ready to serve your neighborhood today.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Driving Directions & Local Access</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our central San Diego location allows us to reach most areas quickly:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>From <strong>Petco Park</strong> (Downtown) → Take 10th Ave to I-8 West → <strong>15 minutes to Mission Valley</strong></li>
                <li>From <strong>Miramar Landfill</strong> (Miramar Rd) → Head south on Miramar Way to I-15 → <strong>10 minutes to Kearny Mesa</strong></li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                This proximity means faster response times than out-of-county haulers routing trucks from Riverside or Orange County.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Neighborhood-Specific Junk Removal Expertise</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">🌊 Coastal Corridor</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Areas:</strong> <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, <a href="/junk-removal-pacific-beach" className="hover:underline text-blue-600">Pacific Beach</a>
                  </p>
                  <p className="text-gray-700">
                    Beach traffic and coastal parking restrictions require strategic scheduling. We navigate limited street access, seasonal tourism congestion, and coastal permit requirements. Expect slightly longer arrival windows during summer weekends, but we always coordinate pickup times around your schedule and local parking enforcement hours.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-green-900 mb-3">🏙️ Central Urban</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Areas:</strong> <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, Downtown, Gaslamp Quarter
                  </p>
                  <p className="text-gray-700">
                    Multi-story apartments, narrow stairwells, and tight elevator access define urban junk removal challenges. Our team specializes in navigating these spaces—coordinating with building management, reserving freight elevators, and handling complex logistics for high-rise pickups. We're experienced with downtown parking meters, loading zone permits, and quick turnarounds to minimize disruption.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-orange-900 mb-3">🏔️ East County</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Areas:</strong> <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>
                  </p>
                  <p className="text-gray-700">
                    Hillside terrain and East County heat (often 10-15°F warmer than the coast) affect scheduling and crew safety. We plan pickups earlier in the day during summer months and bring extra equipment for steep driveways. Properties here often have larger yards and more accumulated debris—we adjust trailer capacity accordingly and provide accurate quotes based on actual volume needs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-bold text-purple-900 mb-3">🏡 North County</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Areas:</strong> <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, Carlsbad, <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a>
                  </p>
                  <p className="text-gray-700">
                    Longer-range pickups and strict HOA regulations require advance planning. We coordinate with property management for gate codes, follow community guidelines for truck placement, and schedule around HOA-approved service hours. Gated communities and estate properties often have specific vendor requirements—we're familiar with them all and ensure compliant, hassle-free service.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-xl font-bold text-red-900 mb-3">🏘️ South Bay</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Areas:</strong> <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, National City, Otay Ranch
                  </p>
                  <p className="text-gray-700">
                    Family homes and growing commercial hubs near Otay Ranch require flexible scheduling for busy working families. We offer evening and weekend appointments, handle multi-family property cleanouts, and work with landlords managing tenant turnovers. South Bay's mix of residential and light industrial areas means we see everything from garage cleanouts to small warehouse clearances—all handled with the same professional care.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Weather & Seasonal Considerations</h3>
              <p className="text-lg text-gray-700 mb-4">
                San Diego's climate affects junk removal in ways most people don't consider:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>🌊 Coastal Humidity:</strong> Salt air and moisture can make furniture heavier and require protective covering during transport from beach neighborhoods.</li>
                  <li><strong>☀️ East County Heat:</strong> Summer temperatures exceeding 100°F in El Cajon and Santee mean we schedule intensive jobs earlier in the day for crew safety and efficiency.</li>
                  <li><strong>🌧️ Post-Storm Debris:</strong> After winter rains, we assist with water-damaged items, yard waste, and driveway cleanup—especially in hillside areas prone to runoff.</li>
                  <li><strong>🔥 Wildfire Season:</strong> During Santa Ana wind events (typically fall), we provide brush removal and fire-safety clearance services in East County and North County backcountry areas.</li>
                  <li><strong>🌬️ Santa Ana Winds:</strong> High winds require extra securing of loads and careful handling of lightweight debris that could blow during transport.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Major Employers & Industries We Serve</h3>
              <p className="text-lg text-gray-700 mb-4">
                We regularly partner with San Diego's major employers and institutions for ongoing junk removal needs:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-3 text-blue-600">🎓 Education & Healthcare</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>UC San Diego</strong> – Student housing turnovers, dormitory cleanouts, campus facility management</li>
                    <li><strong>Sharp Healthcare & Scripps Clinics</strong> – Medical office furniture recycling, equipment disposal, facility upgrades</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3 text-green-600">💼 Corporate & Tech</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Qualcomm Campus & Tech Firms</strong> – Office equipment disposal, cubicle removal, e-waste recycling</li>
                    <li><strong>Sorrento Valley Offices</strong> – Corporate relocations, furniture liquidations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-3 text-purple-600">⚓ Military & Government</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Port of San Diego / Naval Base</strong> – Warehouse cleanouts, dock equipment removal, base housing turnovers</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-3 text-orange-600">🏠 Real Estate</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Property Managers & Realtors</strong> – Rental turnovers county-wide, estate cleanouts, foreclosure cleanouts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego County Coverage Areas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Coastal San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-la-jolla" className="hover:underline">La Jolla</a> & <a href="/junk-removal-pacific-beach" className="hover:underline">Pacific Beach</a></li>
                      <li><a href="/junk-removal-del-mar" className="hover:underline">Del Mar</a> & Solana Beach</li>
                      <li><a href="/junk-removal-point-loma" className="hover:underline">Point Loma</a> & Ocean Beach</li>
                      <li>Coronado & Imperial Beach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Central San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Downtown & Gaslamp Quarter</li>
                      <li><a href="/junk-removal-north-park" className="hover:underline">North Park</a> & <a href="/junk-removal-hillcrest" className="hover:underline">Hillcrest</a></li>
                      <li>Mission Valley & <a href="/junk-removal-kearny-mesa" className="hover:underline">Kearny Mesa</a></li>
                      <li><a href="/junk-removal-clairemont" className="hover:underline">Clairemont</a> & Linda Vista</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">East County</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-el-cajon" className="hover:underline">El Cajon</a> & <a href="/junk-removal-la-mesa" className="hover:underline">La Mesa</a></li>
                      <li><a href="/junk-removal-santee" className="hover:underline">Santee</a> & <a href="/junk-removal-lakeside" className="hover:underline">Lakeside</a></li>
                      <li><a href="/junk-removal-spring-valley" className="hover:underline">Spring Valley</a> & <a href="/junk-removal-lemon-grove" className="hover:underline">Lemon Grove</a></li>
                      <li>Alpine & Jamul</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">South Bay</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-chula-vista" className="hover:underline">Chula Vista</a> & National City</li>
                      <li>Bonita & Eastlake</li>
                      <li>Otay Ranch & San Ysidro</li>
                      <li>Paradise Hills & Skyline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Coastal</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-oceanside" className="hover:underline">Oceanside</a> & Carlsbad</li>
                      <li>Encinitas & Cardiff</li>
                      <li>Leucadia & Olivenhain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Inland</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-poway" className="hover:underline">Poway</a> & Rancho Bernardo</li>
                      <li><a href="/junk-removal-rancho-santa-fe" className="hover:underline">Rancho Santa Fe</a> & <a href="/junk-removal-carmel-valley" className="hover:underline">Carmel Valley</a></li>
                      <li><a href="/junk-removal-vista" className="hover:underline">Vista</a> & San Marcos</li>
                      <li>Escondido & Valley Center</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for <a href="/same-day-junk-removal-san-diego" className="hover:underline">same-day service</a> in your area</p>
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Junk Removal Pricing</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>San Diego junk removal prices</strong> typically range from <strong>$100 for a single item pickup to $495 for a full trailer load</strong>. Costs vary by volume, access, and material type—but we always provide upfront, transparent quotes with no hidden fees. See our detailed volume-based pricing below.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Several factors affect pricing: junk volume is the primary consideration, but property access matters too—stairs, elevators, and parking distance all play a role. Item weight impacts cost since concrete weighs more than furniture. Some materials need special handling. All prices include labor, hauling, and proper eco-friendly disposal.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We guarantee no hidden fees ever. Our quote is your final price. Jobs taking longer don't cost more. Extra effort doesn't change the rate. This builds trust with San Diego residents who call us for <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">couch removal</a>, and all removal needs. For detailed pricing information, visit our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline font-semibold">pricing page</a>.
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service Level</th>
                      <th className="px-6 py-4 text-left font-semibold">Volume</th>
                      <th className="px-6 py-4 text-left font-semibold">Price</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Single Item</td>
                      <td className="px-6 py-4">1 item</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$100</td>
                      <td className="px-6 py-4">Quick pickups</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">1/4 Trailer</td>
                      <td className="px-6 py-4">5-10 items</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$249</td>
                      <td className="px-6 py-4">Small cleanouts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3/8 Trailer</td>
                      <td className="px-6 py-4">Quarter room</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$319</td>
                      <td className="px-6 py-4">Garage corners</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">1/2 Trailer</td>
                      <td className="px-6 py-4">Half trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$349</td>
                      <td className="px-6 py-4">Room cleanouts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5/8 Trailer</td>
                      <td className="px-6 py-4">Over half</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$366</td>
                      <td className="px-6 py-4">Large rooms</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3/4 Trailer</td>
                      <td className="px-6 py-4">Most of trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$429</td>
                      <td className="px-6 py-4">Multiple rooms</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">7/8 Trailer</td>
                      <td className="px-6 py-4">Nearly full</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$462</td>
                      <td className="px-6 py-4">Small house</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-6 py-4 font-medium">Full Load</td>
                      <td className="px-6 py-4">Full trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$495</td>
                      <td className="px-6 py-4">Whole house</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <p className="text-gray-800 font-semibold mb-2">⏰ Same-Day Service Available</p>
                <p className="text-gray-700">
                  Call before 2 PM for same-day <strong>junk removal San Diego</strong> service. Same-day slots fill quickly—contact us early at <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> to secure your appointment.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Compare Us to Competitors</h3>
              <p className="text-lg text-gray-700 mb-4">
                Unlike national franchises charging per hour plus fuel fees, our quotes are flat-rate and include labor, transport, and eco-disposal. Here's how we stack up:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-700">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-green-700">Severin Cleaners</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-700">National Franchises</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-700">Miramar Landfill</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Turnaround Time</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Same-Day</td>
                      <td className="px-6 py-4 text-center">2-5 Days</td>
                      <td className="px-6 py-4 text-center">Self-Haul</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Cost Transparency</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Upfront Flat-Rate</td>
                      <td className="px-6 py-4 text-center">Hourly + Fees</td>
                      <td className="px-6 py-4 text-center">Per-Ton Fees</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Recycling Policy</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Eco-Priority</td>
                      <td className="px-6 py-4 text-center">Varies</td>
                      <td className="px-6 py-4 text-center">Landfill Only</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Licensed & Local</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ San Diego Based</td>
                      <td className="px-6 py-4 text-center">National Chain</td>
                      <td className="px-6 py-4 text-center">County Facility</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Same-Day Availability</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✓ Yes</td>
                      <td className="px-6 py-4 text-center">Limited</td>
                      <td className="px-6 py-4 text-center">Open Hours Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Skip the Miramar Dump Trip</h3>
              <p className="text-lg text-gray-700 mb-4">
                Hauling junk to the <strong>Miramar Landfill</strong> yourself means:
              </p>
              <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                <ul className="space-y-2 text-gray-700">
                  <li>❌ Renting a truck or trailer ($75-150+ per day)</li>
                  <li>❌ Loading heavy items yourself (risk of injury)</li>
                  <li>❌ Driving to Miramar Rd (often 30-60 min each way)</li>
                  <li>❌ Waiting in dump lines (can take 1-2 hours on weekends)</li>
                  <li>❌ Paying per-ton disposal fees ($50-200+ depending on weight)</li>
                  <li>❌ Unloading everything yourself</li>
                  <li>❌ Returning the rental truck</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                <p className="text-lg font-semibold text-green-900 mb-3">✓ With Severin Cleaners:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ We arrive on YOUR schedule</li>
                  <li>✓ We do ALL the heavy lifting</li>
                  <li>✓ We load, haul, and dispose of everything</li>
                  <li>✓ Transparent flat-rate pricing (no hidden fees)</li>
                  <li>✓ Eco-friendly recycling & donation when possible</li>
                  <li>✓ Licensed, insured professionals handling everything start to finish</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  Bottom line: Save time, avoid hassle, and often save money too. Call <a href="tel:6197500114" className="text-green-700 hover:underline">(619) 750-0114</a> and skip the dump trip entirely.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">When You Need Professional Junk Removal</h3>
              <p className="text-lg text-gray-700 mb-4">
                Professional junk removal helps in many situations. Life changes create removal needs. Here's when residents and businesses call us most often:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Moving & Downsizing</h4>
                  <p className="text-gray-700 mb-3">
                    Moving to a smaller home in San Diego? Our <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">cleanout services</a> help you declutter before the move. We handle unwanted furniture, appliances, and boxes of belongings you don't want to take with you—clearing space and reducing moving truck costs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Estate Situations</h4>
                  <p className="text-gray-700 mb-3">
                    Handling an estate after a loved one passes requires sensitivity and efficiency. Our <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout San Diego</a> service provides compassionate property clearing with proper documentation for probate requirements and estate settlement.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Property Sale Preparation</h4>
                  <p className="text-gray-700 mb-3">
                    Selling a San Diego property? Buyers want clean, empty spaces. We clear out unwanted items, remove old furniture and appliances, and help you stage properties for maximum sale appeal—whether it's a <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> condo or <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a> home.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">HOA Violations</h4>
                  <p className="text-gray-700 mb-3">
                    Received an HOA notice about exterior clutter or garage overflow? San Diego HOAs enforce strict property standards. Our <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day junk removal San Diego</a> service helps you meet compliance deadlines quickly.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Renovation Projects</h4>
                  <p className="text-gray-700 mb-3">
                    Remodeling your San Diego home or business? Our <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> handles drywall, flooring, cabinets, and renovation waste—keeping your project site clean and safe.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Emergency Situations</h4>
                  <p className="text-gray-700 mb-3">
                    Water damage, property damage, or sudden move-out requirements? Our <a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">emergency junk removal</a> provides rapid response throughout San Diego County when time matters most.
                  </p>
                </div>
              </div>

              <div className="text-center bg-blue-600 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Get Your Free San Diego Junk Removal Quote</h3>
                <p className="text-lg mb-6">
                  Transparent pricing • Same-day service • Licensed & insured throughout San Diego County
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                >
                  📞 Call Now: (619) 750-0114
                </a>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens to Your Junk</h3>
              <p className="text-lg text-gray-700 mb-4">
                All items get proper disposal. We follow City and County regulations strictly. Landfills aren't our only option. Responsible practices protect our community and environment. This matters to us.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Every load goes to licensed facilities. Donations head to local charities. Recyclable materials get separated properly. Recycling centers receive what they can process. Complete documentation is maintained always. This helps with <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a> and probate needs. Property managers appreciate our disposal records too.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Some items need special handling beyond standard service. We coordinate with trusted professionals when needed. Proper handling is guaranteed for everything. Our commitment is taking care of you completely. Going beyond core services when necessary makes the difference. This comprehensive approach builds trust across San Diego.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive San Diego Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                We handle all cleanout types across the county. Residential, commercial, and specialty projects all get professional service. Here's what we remove:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong><a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture Removal</a>:</strong> Sofas, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, tables, chairs, bedroom sets</li>
                    <li><strong><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliance Removal</a>:</strong> Refrigerators, washers, dryers, stoves, dishwashers</li>
                    <li><strong><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate Cleanouts</a>:</strong> Complete property clearing with sensitive handling</li>
                    <li><strong><a href="/hoarding-cleanup-san-diego" className="text-blue-600 hover:underline">Hoarding Cleanup</a>:</strong> Compassionate service for challenging situations</li>
                    <li><strong><a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage & Basement Cleanouts</a>:</strong> Total space reclamation projects</li>
                    <li><strong>Yard Waste:</strong> Tree trimmings, landscaping debris, outdoor cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-green-600">Commercial Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office Cleanouts</a>:</strong> Furniture, equipment, and document disposal</li>
                    <li><strong>Retail Space Clearing:</strong> Fixtures, inventory, and display removal</li>
                    <li><strong>Restaurant Equipment:</strong> Commercial appliances and kitchen gear</li>
                    <li><strong><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction Debris</a>:</strong> Renovation materials, drywall, flooring</li>
                    <li><strong>Warehouse Clearing:</strong> Pallets, equipment, excess inventory</li>
                    <li><strong><a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Property Management</a>:</strong> Tenant cleanouts and turnover services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Items We Remove Throughout San Diego County</h3>
              <p className="text-lg text-gray-700 mb-4">
                All standard items are handled properly. County disposal regulations guide our work. Here's what we commonly remove:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture of all types</a></li>
                    <li><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances & electronics</a></li>
                    <li><a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses & box springs</a></li>
                    <li><a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> & exercise equipment</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a></li>
                    <li>Yard waste & landscaping</li>
                    <li><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office furniture & equipment</a></li>
                    <li>General household junk</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage & <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">basement cleanouts</a></li>
                    <li>Storage unit cleanouts</li>
                    <li><a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Tenant move-out debris</a></li>
                    <li><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate sale leftovers</a></li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 text-sm italic">
                  <strong>Note:</strong> We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, call us at (619) 750-0114 — some items require special handling, and we'll help coordinate so you're fully taken care of.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Chooses Severin Cleaners</h3>
              <p className="text-lg text-gray-700 mb-4">
                We're a family-owned business serving all of San Diego County. Reliability, professionalism, and local expertise define our service. Here's what makes us different:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Service Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Same-day service:</strong> Available when scheduled before 2 PM throughout San Diego County</li>
                    <li><strong>Licensed & insured:</strong> Comprehensive coverage protecting your property during removal</li>
                    <li><strong>Transparent pricing:</strong> $100-$495 based on volume, no hidden fees</li>
                    <li><strong>Family-owned:</strong> Local business with community commitment and accountability</li>
                    <li><strong>Professional crews:</strong> Trained, uniformed teams with courteous service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Regulatory Compliance</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>San Diego County regulations:</strong> All disposal follows local waste handling laws</li>
                    <li><strong>Proper documentation:</strong> Complete records of item disposal and recycling</li>
                    <li><strong>Licensed facilities:</strong> Items disposed at authorized San Diego County locations</li>
                    <li><strong>Environmental standards:</strong> Compliance with California and county requirements</li>
                    <li><strong>Special item coordination:</strong> Help arranging proper handling when needed</li>
                  </ul>
                </div>
              </div>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get San Diego Junk Removal Quote</h3>
                <p className="text-lg mb-6">
                  Professional <strong>San Diego junk removal</strong> with transparent pricing, same-day service, and county-wide coverage
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call Now for Same-Day Service: (619) 750-0114
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 Transparent Pricing • Book Online & Save 15% 💰</p>
                  <div className="text-sm">
                    <strong>$100-$495 Standard Pricing</strong> • <strong>Same-Day Service Available</strong><br/>
                    <strong>Licensed & Insured</strong> • <strong>County-Wide Coverage</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Serving Coastal • Central • East County • South Bay • North County • All San Diego neighborhoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Related Services in San Diego</h3>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
              We offer comprehensive junk removal services throughout San Diego County. Click below to learn more about our specialized services:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/couch-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">🛋️ Couch Removal San Diego</h4>
                <p className="text-gray-600">Same-day sofa and sectional disposal with transparent pricing</p>
              </a>
              <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <h4 className="font-semibold text-lg mb-2 text-green-600">🛏️ Mattress Disposal & Pickup</h4>
                <p className="text-gray-600">Eco-friendly mattress recycling and removal services</p>
              </a>
              <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <h4 className="font-semibold text-lg mb-2 text-purple-600">🪑 Furniture Removal</h4>
                <p className="text-gray-600">Complete furniture hauling for homes and offices</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                <h4 className="font-semibold text-lg mb-2 text-orange-600">📦 Appliance Removal</h4>
                <p className="text-gray-600">Refrigerator, washer, dryer, and appliance disposal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-red-500">
                <h4 className="font-semibold text-lg mb-2 text-red-600">🏠 Estate Cleanouts</h4>
                <p className="text-gray-600">Compassionate estate and probate property clearing</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                <h4 className="font-semibold text-lg mb-2 text-indigo-600">🏢 Commercial Junk Removal</h4>
                <p className="text-gray-600">Business and office cleanout services</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SanDiegoFAQSection />

      {/* Service Pages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">San Diego Junk Removal Services</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
              <p className="text-gray-600 text-sm">Complete furniture removal from homes and businesses</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600 text-sm">Safe appliance disposal services</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts</h4>
              <p className="text-gray-600 text-sm">Compassionate full property estate cleanout service</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris</h4>
              <p className="text-gray-600 text-sm">Renovation and construction waste removal</p>
            </a>
            <a href="/hoarding-cleanup-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hoarding Cleanup</h4>
              <p className="text-gray-600 text-sm">Sensitive hoarding situation cleanout services</p>
            </a>
            <a href="/hot-tub-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hot Tub Removal</h4>
              <p className="text-gray-600 text-sm">Professional hot tub and spa removal service</p>
            </a>
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600 text-sm">Business and commercial property cleanouts</p>
            </a>
            <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Service</h4>
              <p className="text-gray-600 text-sm">Emergency and same-day junk removal</p>
            </a>
            <a href="/piano-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Piano Removal</h4>
              <p className="text-gray-600 text-sm">Specialized piano removal services</p>
            </a>
            <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Service</h4>
              <p className="text-gray-600 text-sm">Fast same-day pickup available</p>
            </a>
            <a href="/junk-removal-cost-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Pricing Information</h4>
              <p className="text-gray-600 text-sm">Transparent junk removal pricing</p>
            </a>
            <a href="/services" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">All Services</h4>
              <p className="text-gray-600 text-sm">View our complete service list</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              Need a specific service? We handle all types of <strong>San Diego junk removal</strong> projects throughout the county.
            </p>
            <a
              href="tel:6197500114"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              📞 Call (619) 750-0114 for Your Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">San Diego Neighborhood Junk Removal</h3>
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <a href="/junk-removal-la-jolla" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Jolla</span>
            </a>
            <a href="/junk-removal-del-mar" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Del Mar</span>
            </a>
            <a href="/junk-removal-pacific-beach" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Pacific Beach</span>
            </a>
            <a href="/junk-removal-point-loma" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Point Loma</span>
            </a>
            <a href="/junk-removal-north-park" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">North Park</span>
            </a>
            <a href="/junk-removal-hillcrest" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Hillcrest</span>
            </a>
            <a href="/junk-removal-kearny-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Kearny Mesa</span>
            </a>
            <a href="/junk-removal-clairemont" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Clairemont</span>
            </a>
            <a href="/junk-removal-el-cajon" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">El Cajon</span>
            </a>
            <a href="/junk-removal-la-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Mesa</span>
            </a>
            <a href="/junk-removal-chula-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Chula Vista</span>
            </a>
            <a href="/junk-removal-oceanside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Oceanside</span>
            </a>
            <a href="/junk-removal-poway" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Poway</span>
            </a>
            <a href="/junk-removal-rancho-santa-fe" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Rancho Santa Fe</span>
            </a>
            <a href="/junk-removal-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Vista</span>
            </a>
            <a href="/junk-removal-santee" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Santee</span>
            </a>
            <a href="/junk-removal-lakeside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lakeside</span>
            </a>
            <a href="/junk-removal-spring-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Spring Valley</span>
            </a>
            <a href="/junk-removal-lemon-grove" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lemon Grove</span>
            </a>
            <a href="/junk-removal-carmel-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Carmel Valley</span>
            </a>
          </div>
          <p className="text-center mt-8">
            <span className="text-gray-600">Don't see your San Diego neighborhood? </span>
            <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline">
              Call (619) 750-0114 for service in your area
            </a>
          </p>
          <div className="text-center mt-6">
            <a href="/areas-we-serve" className="text-blue-600 font-semibold hover:underline text-lg">
              View All Service Areas →
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
