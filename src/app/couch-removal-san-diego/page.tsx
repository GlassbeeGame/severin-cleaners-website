import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: '$69 Couch Removal San Diego | Same-Day Pickup | Severin Cleaners',
  description: 'Couch removal in San Diego from $69. Same-day pickup. We lift, haul & dispose. No hidden fees. Call (619) 750-0114 for a free quote.',
  keywords: [
    'couch removal San Diego',
    'sofa disposal San Diego',
    'sectional removal',
    'couch pickup San Diego',
    'San Diego couch disposal',
    'sofa removal San Diego',
    'loveseat removal',
    'recliner removal San Diego'
  ],
  openGraph: {
    title: '$69 Couch Removal San Diego | Same-Day Pickup | Severin Cleaners',
    description: 'Couch removal in San Diego from $69. Same-day pickup. We lift, haul & dispose. No hidden fees. Call (619) 750-0114 for a free quote.',
    url: 'https://severincleaners.com/couch-removal-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Couch Removal San Diego - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$69 Couch Removal San Diego | Same-Day Pickup | Severin Cleaners',
    description: 'Couch removal in San Diego from $69. Same-day pickup. We lift, haul & dispose. No hidden fees. Call (619) 750-0114 for a free quote.',
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
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

const relatedServices = [
  { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
  { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
  { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  { name: "Estate Cleanouts", slug: "estate-cleanout-san-diego" },
];

const couchFAQs = [
  {
    question: "How much does couch removal cost in San Diego?",
    answer: "Couch removal starts at $69 in San Diego. That's for a smaller sofa or loveseat with easy access. Standard couches are $100-129. Sectionals run $129-199. Sleeper sofas are $129-149. Stairs and tight spaces don't change the price. We give you the exact cost over the phone. No surprises. No hidden fees. Call (619) 750-0114 for a free quote."
  },
  {
    question: "Do you offer same-day couch disposal?",
    answer: "Yes! Call before noon and we can usually come the same day. Same-day works best in central San Diego. Think North Park, Hillcrest, Mission Valley, Downtown. Live in Chula Vista, El Cajon, or Oceanside? Same-day depends on our schedule. But we always offer next-day pickup if today doesn't work. Call us to check: (619) 750-0114."
  },
  {
    question: "Can you remove sectionals or oversized sofas?",
    answer: "Yes. Big couches are our specialty. We remove L-shaped sectionals, U-shaped sectionals, sleeper sofas, and oversized recliners. No couch is too big. Need it taken apart? We'll disassemble it. Tight doorway? Narrow stairs? We've seen it all. Our two-person crews handle heavy furniture every day. We'll get it out safely."
  },
  {
    question: "Do you recycle couches?",
    answer: "Yes. We don't just dump everything at the landfill. Good couches get donated. We work with Habitat for Humanity and San Diego Rescue Mission. Couches that can't be donated get broken down. Wood, metal, and foam go to recycling. Only true junk goes to the landfill. Your old couch gets a second life when possible."
  },
  {
    question: "Do you serve apartments or high-rises downtown?",
    answer: "Yes. We remove couches from apartments every day. Downtown, East Village, Little Italy, Gaslamp—we know these buildings. Elevators, stairs, narrow hallways? No problem. We protect your walls and floors during removal. We coordinate with building management if needed. No extra charge for stairs or elevators. You pay based on couch size only."
  },
  {
    question: "How do I dispose of a couch in San Diego?",
    answer: "You have a few options: Hire a pro—We start at $69. Same-day available. We do all the work. City pickup—Free, but you wait 1-2 weeks. You move it to the curb. Miramar Landfill—$40-60 plus your time. You need a truck. Donate it—Free if it's in good shape. Takes 3-7 days. Most people choose pro removal. It's fast and easy."
  },
  {
    question: "What is the cheapest way to get rid of a couch?",
    answer: "The cheapest option is the city's free bulky pickup. But there's a catch: you wait 1-2 weeks and move it to the curb yourself. Have a nice couch? Donation pickup is free too. Need it gone fast? Pro removal starts at $69. That's often cheaper than renting a truck and paying dump fees yourself. Time is money. Pick what works for you."
  },
  {
    question: "How much does it cost to remove a large couch?",
    answer: "Here's the breakdown: Small loveseat—$69+. Standard sofa—$100+. Sectional (L or U shaped)—$129-199. Sleeper sofa—$129-149. Oversized recliner—$100-129. Price depends on size and number of pieces. We quote exact pricing over the phone. Call (619) 750-0114. We'll tell you the cost in 2 minutes."
  },
  {
    question: "Will you remove a couch from upstairs?",
    answer: "Yes. Upstairs, downstairs, any floor. We do second-story bedrooms, basement rec rooms, and high-rise apartments. Stairs don't scare us. Our crews handle tight turns and narrow stairwells daily. We protect your walls and railings too. Best part? No extra charge for stairs. Price is based on couch size only."
  },
  {
    question: "Do you take couches with bed bugs or stains?",
    answer: "Yes. We take couches in any condition. Stained? We'll take it. Torn? We'll take it. Bed bugs? We'll take it. Pet damage? We'll take it. Donation centers and city pickup won't touch these. We will. No judgment. No extra charge. If you need it gone, we'll remove it."
  }
];

export default function CouchRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Couch Removal San Diego",
    description: "Affordable couch removal in San Diego starting at $69. Same-day sofa disposal, upfront pricing, and responsible recycling. We handle sectionals, loveseats, recliners, and all furniture types.",
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
    "priceRange": "$69-$495",
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
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema()
  };

  const faqSchema = generateFAQSchema(couchFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
      {/* Hero Section - Optimized for Core Web Vitals */}
      <OptimizedGradientHero
        title="Couch Removal San Diego & Sofa Disposal Services"
        subtitle="Same-Day Couch Pickup • Licensed & Insured • Honest Pricing • 5.0 Rating"
        description="Small sofas $69+ • Standard couches $100+ • All of San Diego County"
      />

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your San Diego Couch Removal Experts</h2>

                  <p className="text-lg text-gray-700 mb-3">
                    Need your old couch gone? We make it easy.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    <strong>Severin Cleaners</strong> removes sofas in San Diego. Small sofas and loveseats start at <strong>$69</strong>. Standard couches start at <strong>$100</strong>.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    We do all the lifting. All the hauling. All the disposal. You just point to the couch. We handle the rest.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    Same-day pickup available. No dump runs. No heavy lifting.
                  </p>

                  <p className="text-lg text-gray-700 mb-3">
                    From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> sectionals to <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a> apartment couches—we've got you covered.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    <strong>Call <a href="tel:6197500114" className="text-blue-600 hover:underline">(619) 750-0114</a> for a free quote.</strong>
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Couches We Remove</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Sectional Sofas</h4>
                      <p className="text-gray-700 mb-4">L-shaped, U-shaped, any shape. We take them apart if needed.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Sleeper Sofas</h4>
                      <p className="text-gray-700 mb-4">Pull-out beds are heavy and awkward. We handle them daily.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Loveseats</h4>
                      <p className="text-gray-700 mb-4">Small two-seaters. Quick pickup, often same-day.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Recliners</h4>
                      <p className="text-gray-700 mb-4">Manual or electric. Big La-Z-Boy types too.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Leather Couches</h4>
                      <p className="text-gray-700 mb-4">Nice ones get donated. Damaged ones disposed of properly.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Fabric Sofas</h4>
                      <p className="text-gray-700 mb-4">Any condition. Stained, torn, outdated—we take them all.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Futons</h4>
                      <p className="text-gray-700 mb-4">Common in studios and guest rooms. Easy removal.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Patio Furniture</h4>
                      <p className="text-gray-700 mb-4">Outdoor sofas and wicker sets from yards and balconies.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Options: DIY vs Pro Removal</h3>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Option</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Your Work</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Wait Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2"><strong>Severin Cleaners</strong></td>
                          <td className="border border-gray-300 px-4 py-2">$69+</td>
                          <td className="border border-gray-300 px-4 py-2">None</td>
                          <td className="border border-gray-300 px-4 py-2">Same day</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2"><strong>Miramar Landfill</strong></td>
                          <td className="border border-gray-300 px-4 py-2">$40-60</td>
                          <td className="border border-gray-300 px-4 py-2">You load & haul</td>
                          <td className="border border-gray-300 px-4 py-2">Half your day</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2"><strong>City Pickup</strong></td>
                          <td className="border border-gray-300 px-4 py-2">Free</td>
                          <td className="border border-gray-300 px-4 py-2">Move to curb</td>
                          <td className="border border-gray-300 px-4 py-2">1-2 weeks</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2"><strong>Donation</strong></td>
                          <td className="border border-gray-300 px-4 py-2">Free</td>
                          <td className="border border-gray-300 px-4 py-2">Must be nice condition</td>
                          <td className="border border-gray-300 px-4 py-2">3-7 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong>Think about your time.</strong> Renting a truck, driving to the dump, and unloading a heavy couch takes half a day. We do it starting at $69 while you relax.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    We serve all of San Diego County. <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, and <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>. Need to remove more than just a couch? Check out our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal services</a> and <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress disposal</a>.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">We Serve All of San Diego County</h3>
                    <p className="text-blue-800 mb-4">We pick up couches everywhere:</p>
                    <ul className="text-blue-800 space-y-2">
                      <li><strong>Downtown & Gaslamp Quarter</strong> – Apartments and high-rises</li>
                      <li><strong>North Park & Hillcrest</strong> – Urban homes with tight access</li>
                      <li><strong>Mission Valley & Clairemont</strong> – Condos and townhouses</li>
                      <li><strong>La Jolla & Pacific Beach</strong> – Beach homes and large sofas</li>
                      <li><strong>Chula Vista & National City</strong> – Family homes</li>
                      <li><strong>East County & El Cajon</strong> – Big properties</li>
                    </ul>
                    <p className="text-blue-700 mt-4">Most pickups happen within 24 hours.</p>
                    <p className="text-blue-700">Same-day available in central areas.</p>
                    <div className="mt-4 text-center">
                      <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Response Times</h3>
                  <p className="text-lg text-gray-700 mb-3">
                    We're based in San Diego. That means fast pickup.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li>From <strong>Petco Park</strong>: 15 minutes</li>
                    <li>From <strong>Balboa Park</strong>: 10 minutes</li>
                    <li>From <strong>UC San Diego</strong>: 20 minutes</li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6">
                    We're faster than out-of-town haulers from Riverside or Orange County.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">We Handle Tricky Situations</h3>
                  <p className="text-lg text-gray-700 mb-3">
                    Tight parking? We deal with it.
                  </p>
                  <p className="text-lg text-gray-700 mb-3">
                    Beach traffic? We work around it.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Narrow driveways? We've seen worse. Our drivers know San Diego. We plan routes around traffic and parking limits.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business & Property Managers</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    We work with apartments, offices, and hotels:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                    <li><strong>UC San Diego</strong> housing</li>
                    <li><strong>Sharp Healthcare</strong> facilities</li>
                    <li><strong>Qualcomm</strong> offices in Sorrento Valley</li>
                    <li>Hotels and AirBnBs near Mission Beach</li>
                    <li>Retail centers like Fashion Valley</li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6">
                    We offer flexible pickup times. Business hours or after hours.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhood-Specific Solutions</h2>

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

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Skip the Dump</h2>
                  <p className="text-lg text-gray-700 mb-3">
                    Going to Miramar Landfill is a hassle.
                  </p>
                  <p className="text-lg text-gray-700 mb-3">
                    You need a truck. You wait in dump lines. You lift the couch yourself.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    We make it simple. One call and we handle everything. No lifting. No driving. No waiting.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us Over Big Franchises</h3>
                  <p className="text-lg text-gray-700 mb-3">
                    <strong>We're local.</strong> That means faster service.
                  </p>
                  <p className="text-lg text-gray-700 mb-3">
                    <strong>No hidden fees.</strong> Other companies charge extra for stairs. We don't.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>We recycle.</strong> Many competitors dump everything. We donate good couches.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">We Recycle When Possible</h2>
                  <p className="text-lg text-gray-700 mb-3">
                    Good couches get donated. We work with San Diego Rescue Mission and Habitat for Humanity.
                  </p>
                  <p className="text-lg text-gray-700 mb-3">
                    Damaged couches get broken down. Wood and metal go to recycling.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Only true junk goes to the landfill. We keep as much out of dumps as possible.
                  </p>

                  <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Rid of Your Couch?</h3>
                    <p className="text-lg mb-6">
                      Small sofas <strong>$69+</strong> • Standard couches <strong>$100+</strong> • Same-day pickup available • No hidden fees
                    </p>
                    <a
                      href="tel:6197500114"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                    >
                      📞 Call (619) 750-0114 Now
                    </a>
                    <div className="bg-blue-800 rounded-lg p-4">
                      <p className="text-yellow-300 font-semibold mb-2">🛋️ Couch Removal Starting at $69 🛋️</p>
                      <div className="text-sm">
                        <strong>Same-Day Service</strong> • <strong>No Hidden Fees</strong><br/>
                        <strong>We Donate & Recycle</strong> • <strong>All San Diego</strong>
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      Licensed & insured • Locally owned • Fast & professional
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
                nearbyHeading="Services We Provide"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Couch Removal"
        contextParagraph="Small sofas and loveseats start at $69. Standard couches are $100+. Final price depends on size and access. Call (619) 750-0114 for exact quote. No hidden fees."
      />

      {/* Trust Signals */}
      <TrustSignalsSection locationName="Couch Removal" />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection
          title="Frequently Asked Questions - Couch Removal San Diego"
          description="Get answers to common questions about our couch removal San Diego service, pricing, and same-day pickup options."
          faqs={couchFAQs}
          ctaTitle="Still Have Questions About Couch Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our couch removal San Diego services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Furniture Removal Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
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
    </>
  );
}
