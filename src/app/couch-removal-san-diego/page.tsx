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
  title: 'Couch Removal & Furniture Disposal San Diego | Starting at $69 | (619) 750-0114',
  description: 'Professional couch removal and furniture disposal San Diego starting at $69. Same-day sofa removal, transparent pricing, eco-friendly recycling. Call (619) 750-0114.',
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
    title: 'Couch Removal & Furniture Disposal San Diego | Starting at $69 | (619) 750-0114',
    description: 'Professional couch removal and furniture disposal San Diego starting at $69. Same-day sofa removal, transparent pricing, eco-friendly recycling. Call (619) 750-0114.',
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
    title: 'Couch Removal & Furniture Disposal San Diego | Starting at $69 | (619) 750-0114',
    description: 'Professional couch removal and furniture disposal San Diego starting at $69. Same-day sofa removal, transparent pricing, eco-friendly recycling. Call (619) 750-0114.',
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
    answer: "Couch removal in San Diego starts at $69 and varies based on the size and type of sofa. Small loveseats and compact sofas typically cost $69-89, while standard three-seat couches range from $100-129. Larger sectional sofas cost $129-199 depending on the number of pieces, and sleeper sofas with pull-out beds run $129-149. We provide upfront quotes with transparent pricing over the phone before we arrive. Once we give you a price, it covers everything—all labor, hauling, stairs, tight spaces, and eco-friendly disposal or donation. No hidden fees or surprises. For couch disposal San Diego service, call (619) 750-0114 for your free quote based on your specific furniture."
  },
  {
    question: "Do you offer same-day couch disposal?",
    answer: "Yes, we provide same-day couch disposal and sofa removal service when you call before noon in most cases. Same-day pickup works best in central San Diego neighborhoods including North Park, Hillcrest, Clairemont, Downtown San Diego, and surrounding areas. For outlying communities like Chula Vista, El Cajon, Oceanside, and Carlsbad, same-day availability depends on our current schedule and route, but we can almost always offer next-day pickup if today doesn't work. Our furniture removal team serves all of San Diego County with fast response times. Call (619) 750-0114 to check same-day availability for your specific location and schedule your couch removal."
  },
  {
    question: "Can you remove sectionals or oversized sofas?",
    answer: "Absolutely. Large furniture removal is our specialty, and we handle oversized couches regularly throughout San Diego. We remove L-shaped sectionals, U-shaped sectionals, modular sofa systems, sleeper sofas with pull-out beds, and oversized recliners from living rooms, family rooms, and basements. No couch is too big for our experienced crews. If your sectional needs to be disassembled to fit through tight doorways or navigate narrow staircases, we handle that too. Our two-person teams are trained in furniture removal techniques and use proper equipment to protect your walls, floors, and property. Whether you're removing a massive sectional from a Clairemont home or a tight Pacific Beach apartment, we complete the job safely and efficiently."
  },
  {
    question: "Do you recycle couches?",
    answer: "Yes, eco-friendly furniture disposal is a core part of our couch removal San Diego service. We don't simply dump everything at the landfill like many junk removal companies. Couches in good shape get donated to local San Diego charities including Habitat for Humanity and San Diego Rescue Mission, where they can help families in need. Furniture that cannot be donated due to damage, stains, or wear gets responsibly broken down for recycling. Wood frames are sent to recycling facilities, metal springs and hardware are recycled as scrap metal, and foam padding is processed when possible. Only items that truly cannot be reused or recycled go to the landfill. This eco-friendly approach keeps thousands of pounds of furniture out of San Diego landfills each year while supporting our local community."
  },
  {
    question: "Do you serve apartments or high-rises downtown?",
    answer: "Yes, our couch removal San Diego team serves apartment buildings and high-rises throughout downtown and all San Diego neighborhoods daily. We're very familiar with downtown buildings in areas like East Village, Little Italy, Gaslamp Quarter, and Marina District. Our crews navigate elevators, stairways, and narrow hallways while protecting your walls and floors during the furniture removal process. We coordinate with building management and follow HOA requirements when needed. Unlike some furniture disposal services, we charge no extra fees for stairs or elevator access—you pay based on couch size only with our transparent pricing model. Whether you're on the ground floor or the 20th floor, we handle all the logistics and heavy lifting for your sofa removal."
  },
  {
    question: "How do I dispose of a couch in San Diego?",
    answer: "You have several options for couch disposal San Diego. Professional furniture removal services like ours start at $69 with same-day availability—we handle all the work so you don't lift a finger. City of San Diego bulky item pickup is free, but requires a 1-2 week wait and you must move the couch to the curb yourself. Taking it to Miramar Landfill costs $40-60 in dump fees plus your time, and you need access to a truck large enough to haul the sofa. Donation to charities is free if your couch is in good shape with no stains or damage, but pickup typically takes 3-7 days to schedule. Most San Diego residents choose professional couch removal for the convenience, speed, and transparent pricing. It's faster than waiting for city pickup and easier than renting a truck and driving to the dump yourself."
  },
  {
    question: "What is the cheapest way to get rid of a couch?",
    answer: "The cheapest option is the City of San Diego's free bulky item pickup service for couch disposal, but there's a significant catch—you typically wait 1-2 weeks for your scheduled pickup date and must move the couch to the curb yourself, which can be difficult for large or heavy sofas. If you have a nice couch in good shape, donation pickup through organizations like Habitat for Humanity is free as well, though scheduling takes 3-7 days and they may reject stained or damaged furniture. For fast couch removal, professional junk removal services like ours start at $69, which is often comparable to or cheaper than renting a truck (typically $75-150 per day) and paying Miramar Landfill dump fees ($40-60) yourself. When you factor in your time, physical effort, and convenience, professional furniture disposal San Diego service provides the best overall value for most people."
  },
  {
    question: "How much does it cost to remove a large couch?",
    answer: "Large couch removal pricing varies based on the size and configuration of your furniture. Small loveseats start at $69 and up. Standard three-seat sofas range from $100 and up. L-shaped or U-shaped sectional sofas cost $129-199 depending on how many pieces need to be removed. Sleeper sofas with pull-out bed mechanisms run $129-149 due to their added weight. Oversized recliners and large accent chairs typically cost $100-129 for furniture removal. The final price depends on the size, number of pieces, and specific dimensions of your sofa. We provide exact couch disposal pricing over the phone with our transparent pricing approach—just call (619) 750-0114 and describe your furniture. We'll give you an accurate quote in about 2 minutes so you know exactly what to expect before we arrive."
  },
  {
    question: "Will you remove a couch from upstairs?",
    answer: "Yes, our sofa removal team removes couches from upstairs locations, downstairs areas, and any floor level throughout San Diego properties. We regularly handle second-story living rooms, upstairs bedrooms, basement rec rooms, and high-rise apartment buildings. Stairs don't intimidate our experienced furniture removal crews—they navigate tight turns, narrow stairwells, and challenging angles daily while protecting your walls, railings, and flooring. Unlike many junk removal companies that charge extra stair fees, we include stairway access in our base pricing. You pay based on couch size only with our transparent pricing model, whether your sofa is on the ground floor or three flights up. Many customers highly recommend our stair removal service for this reason."
  },
  {
    question: "Do you take couches with bed bugs or stains?",
    answer: "Yes, we accept couches in any condition for furniture disposal San Diego service. Heavily stained sofas, torn upholstery, bed bug infestations, pet damage, smoke odors, water damage—we remove it all. Many donation centers and the city's free bulky pickup service refuse furniture in poor condition, leaving you with limited options. Our couch removal San Diego team handles these difficult situations without judgment and without charging extra fees based on condition. We follow proper disposal protocols for infested furniture to prevent spreading bed bugs. Whether your living room sofa has seen better days or your old couch is beyond salvaging, we'll remove it quickly and dispose of it responsibly. If you need it gone, we'll take it regardless of condition."
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
        title="Couch Removal & Furniture Disposal San Diego"
        subtitle="⭐ Same-Day Sofa Removal • Eco-Friendly • Transparent Pricing • Licensed & Insured"
        description="✓ Small sofas from $69 ✓ Standard couches from $100 ✓ All San Diego County"
      />

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Couch Removal & Furniture Disposal San Diego</h2>

                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    When you need reliable couch removal and furniture disposal San Diego, Severin Cleaners delivers fast, affordable, and eco-friendly service throughout San Diego County. Our professional couch disposal San Diego team provides same-day sofa removal service starting at just $69 for small sofas and loveseats, with standard couches from $100. We offer transparent pricing with upfront quotes, and once we give you a price, it covers everything—all labor, hauling, and responsible disposal or recycling.
                  </p>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Whether you're upgrading your living room furniture, clearing out a rental property in <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, handling an estate cleanout in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, or managing a property turnover in <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>, our couch removal San Diego service handles everything from single loveseats to large sectional sofas. We serve all San Diego neighborhoods including <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, and communities throughout the county.
                  </p>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our eco-friendly approach prioritizes donation and recycling whenever possible. Couches in good shape get donated to local San Diego charities like Habitat for Humanity and San Diego Rescue Mission. Damaged furniture gets broken down responsibly, with wood and metal components sent to recycling facilities. Our customers highly recommend our transparent pricing, same-day availability, and professional service. From the moment you call us at (619) 750-0114 to the final pickup, we make furniture removal and junk removal as simple and stress-free as possible.
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
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">We Serve All of San Diego County</h3>
                    <p className="text-blue-800 mb-3 leading-relaxed">
                      Our couch removal San Diego service covers every neighborhood and community throughout the county. We pick up furniture from downtown high-rises and Gaslamp Quarter apartments, urban homes with tight access in North Park and Hillcrest, condos and townhouses in Clairemont and Clairemont, beach properties in La Jolla and Pacific Beach, family homes in Chula Vista and National City, and larger properties throughout East County and El Cajon.
                    </p>
                    <p className="text-blue-800 mb-3 leading-relaxed">
                      Most furniture removal pickups happen within 24 hours of your call. Same-day sofa removal is available in central San Diego areas when you contact us before noon. Whether you need furniture disposal for a single loveseat or a complete living room cleanout, we provide fast, reliable service across all of San Diego County.
                    </p>
                    <p className="text-blue-700 font-semibold text-center">📞 Call (619) 750-0114 for immediate couch disposal service</p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Response Times</h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    We're locally based in San Diego, which means fast pickup times for couch removal throughout the county. Our central location allows us to reach most San Diego neighborhoods quickly—typically 15 minutes from Petco Park, 10 minutes from Balboa Park, and 20 minutes from UC San Diego. This local presence makes us significantly faster than out-of-town junk removal companies operating from Riverside or Orange County who may take hours to reach your location.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">We Handle Tricky Situations</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    San Diego presents unique challenges for furniture removal, and our experienced team navigates them all. Tight parking in downtown areas, heavy beach traffic in coastal neighborhoods, narrow driveways in older communities—we've handled far worse. Our drivers know San Diego streets intimately and plan efficient routes around traffic patterns, parking restrictions, and neighborhood access limitations. Whether removing a sectional from a Pacific Beach apartment with limited street parking or hauling a sleeper sofa from a hillside home in Mission Hills, we make it work.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business & Property Managers</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We work extensively with commercial properties, property management companies, and businesses throughout San Diego County. Our furniture removal clients include UC San Diego student housing, Sharp Healthcare medical facilities, Qualcomm offices in Sorrento Valley, hotels and vacation rentals near Mission Beach, and retail centers like Fashion Valley. We offer flexible pickup scheduling with both business hours and after-hours service to minimize disruption to your operations. Property managers highly recommend our transparent pricing, reliable scheduling, and professional service for apartment turnovers, office furniture upgrades, and commercial junk removal projects.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Neighborhood-Specific Solutions</h2>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Urban Apartments & Downtown Properties</h4>
                      <p className="text-gray-700 leading-relaxed">
                        We specialize in couch removal from downtown San Diego apartments and urban high-rises. Our team navigates tight hallways, operates freight elevators, and disassembles sectional sofas when needed. We provide same-day move-out furniture disposal near Gaslamp Quarter and East Village, perfect for rental turnovers and quick relocations.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Suburban Homes & Family Properties</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Our sofa removal service handles suburban family homes throughout San Diego with driveway-safe loading procedures for larger living room furniture. We remove couches from garages, attics, and side yards. For furniture in good shape, we coordinate donation pickups with local charities, helping San Diego families give back.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-3 text-blue-600">Beach & Coastal Neighborhoods</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Coastal furniture removal requires special attention, and we deliver. We handle oversized beachfront sofas with limited street access, provide sand-safe protection for your property, and schedule pickups strategically around tourism patterns and parking restrictions in areas like Pacific Beach and La Jolla.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Skip the Dump</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Taking furniture to Miramar Landfill yourself is a hassle that consumes half your day. You need access to a truck large enough to haul your couch, which means renting one if you don't own a pickup. Then you wait in long dump lines, unload heavy furniture yourself, and pay $40-60 in disposal fees. Our couch disposal San Diego service makes it simple—one call and we handle everything. No heavy lifting, no driving across town, no waiting in landfill lines. Starting at just $69, we provide convenient furniture removal that saves you time, effort, and often money.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us Over Big Franchises</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    As a locally owned furniture removal company, we provide faster service than national franchises operating from outside San Diego. Our transparent pricing model means no hidden fees—unlike other companies that charge extra for stairs, tight spaces, or weekend pickups, we quote one price based on couch size and stick to it. We prioritize eco-friendly disposal, donating furniture in good shape to San Diego charities and recycling materials whenever possible, while many competitors simply dump everything at the landfill regardless of condition. Customers highly recommend our honest approach and reliable service.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Eco-Friendly Furniture Disposal</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our commitment to eco-friendly couch removal means prioritizing donation and recycling over landfill disposal. Sofas in good shape get donated to San Diego organizations including San Diego Rescue Mission and Habitat for Humanity, where they help families furnish their homes. Damaged furniture that cannot be donated gets responsibly broken down, with wood frames sent to recycling facilities and metal springs processed as scrap metal. Only items that truly cannot be reused or recycled end up in the landfill. This approach keeps thousands of pounds of furniture out of San Diego's waste stream each year while supporting our local community.
                  </p>

                  <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Rid of Your Couch?</h3>
                    <p className="text-lg mb-6 leading-relaxed">
                      Professional couch removal and furniture disposal San Diego starting at $69 for small sofas, $100 for standard couches. Same-day sofa removal available. Transparent pricing with no hidden fees. Eco-friendly recycling and donation.
                    </p>
                    <a
                      href="tel:6197500114"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                    >
                      📞 Call (619) 750-0114 Now
                    </a>
                    <div className="bg-blue-800 rounded-lg p-4">
                      <p className="text-yellow-300 font-semibold mb-2">Couch Disposal San Diego Starting at $69</p>
                      <div className="text-sm">
                        Same-Day Service • Transparent Pricing • Eco-Friendly Disposal • All San Diego County
                      </div>
                    </div>
                    <p className="text-sm mt-4">
                      Licensed and insured • Locally owned • Fast and professional junk removal service
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
        contextParagraph="Couch removal in San Diego starts at $69 for small sofas and loveseats, with standard three-seat couches from $100. Sectional sofas range from $129-199, and sleeper sofas cost $129-149. We provide upfront quotes with transparent pricing over the phone before we arrive. Once we give you a price, it covers everything—all labor, hauling, stairs, and eco-friendly disposal or donation to local charities. No hidden fees or surprises. Call (619) 750-0114 for an exact quote based on your furniture."
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
