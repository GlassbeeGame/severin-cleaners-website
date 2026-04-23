import { Metadata } from 'next';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Couch Removal San Diego from $69 | Same-Day Sofa & Sectional Disposal',
  description: 'Need to get rid of a couch in San Diego? Professional removal from $69 with same-day pickup. We haul couches, sectionals, loveseats. Free quote: (619) 750-0114.',
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
    title: 'Couch Removal San Diego from $69 | Same-Day Sofa & Sectional Disposal',
    description: 'Need to get rid of a couch in San Diego? Professional removal from $69 with same-day pickup. We haul couches, sectionals, loveseats. Free quote: (619) 750-0114.',
    url: 'https://www.severinhauling.com/couch-removal-san-diego',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Couch Removal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couch Removal San Diego from $69 | Same-Day Sofa & Sectional Disposal',
    description: 'Need to get rid of a couch in San Diego? Professional removal from $69 with same-day pickup. We haul couches, sectionals, loveseats. Free quote: (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/couch-removal-san-diego',
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

const relatedServices = [
  { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
  { name: "Mattress Disposal", slug: "san-diego-mattress-disposal" },
  { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  { name: "Estate Cleanouts", slug: "estate-cleanout-san-diego" },
];

const couchFAQs = [
  {
    question: "How much does couch removal cost in San Diego?",
    answer: "Couch removal in San Diego costs $69-$199 depending on size. Small loveseats start at $69, standard three-seat couches $100-129, sectionals $129-199, and sleeper sofas $129-149. Price includes all labor, hauling, stairs, and disposal. We provide upfront quotes with transparent pricing over the phone before we arrive. Once we give you a price, it covers everything: all labor, hauling, stairs, tight spaces, and eco-friendly disposal or donation. No hidden fees or surprises. For couch disposal San Diego service, call (619) 750-0114 for your free quote based on your specific furniture."
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
    answer: "Yes, our couch removal San Diego team serves apartment buildings and high-rises throughout downtown and all San Diego neighborhoods daily. We're very familiar with downtown buildings in areas like East Village, Little Italy, Gaslamp Quarter, and Marina District. Our crews navigate elevators, stairways, and narrow hallways while protecting your walls and floors during the furniture removal process. We coordinate with building management and follow HOA requirements when needed. Unlike some furniture disposal services, we charge no extra fees for stairs or elevator access. You pay based on couch size only with our transparent pricing model. Whether you're on the ground floor or the 20th floor, we handle all the logistics and heavy lifting for your sofa removal."
  },
  {
    question: "How do I dispose of a couch in San Diego?",
    answer: "You have four options: professional removal ($69+, same-day), free City bulky pickup (1-2 week wait), Miramar Landfill ($40-60 dump fees), or donation (free for clean couches, 3-7 day wait). Professional furniture removal services like ours start at $69 with same-day availability. We handle all the work so you don't lift a finger. City of San Diego bulky item pickup is free, but requires a 1-2 week wait and you must move the couch to the curb yourself. Taking it to Miramar Landfill costs $40-60 in dump fees plus your time, and you need access to a truck large enough to haul the sofa. Donation to charities is free if your couch is in good shape with no stains or damage, but pickup typically takes 3-7 days to schedule. Most San Diego residents choose professional couch removal for the convenience, speed, and transparent pricing."
  },
  {
    question: "What is the cheapest way to get rid of a couch?",
    answer: "City of San Diego's free bulky item pickup is cheapest, but you wait 1-2 weeks and move the couch to curb yourself. Donation is also free for clean couches. Professional removal starts at $69. The cheapest option is the City of San Diego's free bulky item pickup service for couch disposal, but there's a significant catch: you typically wait 1-2 weeks for your scheduled pickup date and must move the couch to the curb yourself, which can be difficult for large or heavy sofas. If you have a nice couch in good shape, donation pickup through organizations like Habitat for Humanity is free as well, though scheduling takes 3-7 days and they may reject stained or damaged furniture. For fast couch removal, professional junk removal services like ours start at $69, which is often comparable to or cheaper than renting a truck (typically $75-150 per day) and paying Miramar Landfill dump fees ($40-60) yourself. When you factor in your time, physical effort, and convenience, professional furniture disposal San Diego service provides the best overall value for most people."
  },
  {
    question: "How much does it cost to remove a large couch?",
    answer: "Large couch removal pricing varies based on the size and configuration of your furniture. Small loveseats start at $69 and up. Standard three-seat sofas range from $100 and up. L-shaped or U-shaped sectional sofas cost $129-199 depending on how many pieces need to be removed. Sleeper sofas with pull-out bed mechanisms run $129-149 due to their added weight. Oversized recliners and large accent chairs typically cost $100-129 for furniture removal. The final price depends on the size, number of pieces, and specific dimensions of your sofa. We provide exact couch disposal pricing over the phone with our transparent pricing approach. Just call (619) 750-0114 and describe your furniture. We'll give you an accurate quote in about 2 minutes so you know exactly what to expect before we arrive."
  },
  {
    question: "Will you remove a couch from upstairs?",
    answer: "Yes, our sofa removal team removes couches from upstairs locations, downstairs areas, and any floor level throughout San Diego properties. We regularly handle second-story living rooms, upstairs bedrooms, basement rec rooms, and high-rise apartment buildings. Stairs don't intimidate our experienced furniture removal crews. They navigate tight turns, narrow stairwells, and challenging angles daily while protecting your walls, railings, and flooring. Unlike many junk removal companies that charge extra stair fees, we include stairway access in our base pricing. You pay based on couch size only, whether your sofa is on the ground floor or three flights up. Many customers highly recommend our stair removal service for this reason."
  },
  {
    question: "Do you take couches with bed bugs or stains?",
    answer: "Yes, we accept couches in any condition for furniture disposal San Diego service. Heavily stained sofas, torn upholstery, bed bug infestations, pet damage, smoke odors, water damage. We remove it all. Many donation centers and the city's free bulky pickup service refuse furniture in poor condition, leaving you with limited options. Our couch removal San Diego team handles these difficult situations without judgment and without charging extra fees based on condition. We follow proper disposal protocols for infested furniture to prevent spreading bed bugs. Whether your living room sofa has seen better days or your old couch is beyond salvaging, we'll remove it quickly and dispose of it responsibly. If you need it gone, we'll take it regardless of condition."
  }
];

export default function CouchRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Couch Removal San Diego",
    description: "Affordable couch removal in San Diego starting at $69. Same-day sofa disposal, upfront pricing, and responsible recycling. We handle sectionals, loveseats, recliners, and all furniture types.",
    url: "https://www.severinhauling.com/couch-removal-san-diego",
    serviceType: "Couch and Sofa Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Couch Removal", url: "https://www.severinhauling.com/couch-removal-san-diego" },
  ]);

  // Local business schema for couch removal
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/couch-removal-san-diego#business",
    "name": "Severin Hauling - Couch Removal San Diego",
    "image": "https://www.severinhauling.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8900 Grossmont Blvd Ste 1",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "postalCode": "91941",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7736,
      "longitude": -117.0228
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
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 00:00-23:59",
    "knowsAbout": [
      "Couch removal and disposal San Diego",
      "Sectional sofa hauling services",
      "Loveseat and recliner removal",
      "Eco-friendly furniture recycling",
      "Same-day upholstered furniture pickup",
      "Apartment and high-rise furniture removal",
      "Donation coordination for usable furniture",
      "Heavy furniture disassembly and removal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Couch Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Loveseat Removal",
            "description": "Small two-seat couch removal starting at $69"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Couch Removal",
            "description": "Three-seat sofa removal starting at $100"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sectional Removal",
            "description": "L-shaped and U-shaped sectional removal from $129"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sleeper Sofa Removal",
            "description": "Pull-out couch and sofa bed removal from $129"
          }
        }
      ]
    },
    "aggregateRating": generateAggregateRatingSchema()
  };

  const faqSchema = generateFAQSchema(couchFAQs);

  const howToSchema = generateHowToSchema({
    cityName: "San Diego",
    pageUrl: "https://www.severinhauling.com/couch-removal-san-diego"
  });

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego Neighborhoods We Serve for Couch Removal",
    "description": "Areas throughout San Diego County where we provide couch and sofa removal services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "Pacific Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92109"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "La Jolla",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92037"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "North Park",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92104"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Hillcrest",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92103"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Downtown San Diego",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "Clairemont",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92117"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Chula Vista",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chula Vista",
            "addressRegion": "CA",
            "postalCode": "91910"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "El Cajon",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "El Cajon",
            "addressRegion": "CA",
            "postalCode": "92020"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Oceanside",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Oceanside",
            "addressRegion": "CA",
            "postalCode": "92054"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Mission Valley",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92108"
          }
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema, localBusinessSchema, howToSchema, neighborhoodSchema]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
      {/* Hero Section - Optimized for Core Web Vitals */}
      <OptimizedGradientHero
        title="Couch & Sofa Removal San Diego"
        subtitle="Same-Day Sectional Disposal • Loveseat Pickup • Recliner Removal • Licensed & Insured"
        description="Small sofas from $69 • Standard couches from $100 • Sectionals from $129 • All San Diego County"
      />

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get Rid of a Couch in San Diego</h2>

                  {/* Couch Removal Image - Integrated */}
                  <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/optimized/couch2.jpg"
                        alt="Couch removal San Diego - professional sofa disposal and hauling service"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                  </div>

                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                    Need couch removal in San Diego? Severin Hauling specializes in upholstered furniture disposal throughout San Diego County. We handle couches, sectionals, loveseats, recliners, and all upholstered seating. Booking a pickup is easy and stress free: call, get a free no-obligation estimate, and we handle the rest. We pick up couches seven days a week, covering Pacific Beach (92109) and Hillcrest south to Chula Vista and east to El Cajon.
                  </p>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> starts at just $69 for small sofas and loveseats, with standard couches from $100 and sectionals from $129. Once we give you a price, it covers everything: all labor, hauling, and responsible disposal or recycling. <strong>Need to remove other furniture types like beds, dressers, or desks?</strong> Check out our comprehensive <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline font-semibold">furniture disposal service</a>.
                  </p>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Whether you're upgrading your living room or clearing out a rental, we handle everything from single loveseats to large sectionals, helping you reclaim your space fast. We serve <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>, <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, and communities throughout San Diego County.
                  </p>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our eco-friendly approach prioritizes donation and recycling whenever possible. Couches in good shape get donated to local San Diego charities like Habitat for Humanity and San Diego Rescue Mission. Damaged sofas and sectionals get broken down responsibly, with wood frames and metal components sent to recycling facilities. Our customers highly recommend our transparent pricing, same-day availability, and professional service. From the moment you call to the final pickup, we make sofa disposal easy and stress free. We haul it all away and leave your space clutter free.
                  </p>

                  <div className="clear-both"></div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Types of Couches We Remove</h2>

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
                      <p className="text-gray-700 mb-4">Any condition. Stained, torn, outdated. We take them all.</p>
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

                  {/* Clear float before next section */}
                  <div className="clear-both"></div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Options: DIY vs Pro Removal</h2>

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
                          <td className="border border-gray-300 px-4 py-2"><strong>Severin Hauling</strong></td>
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
                    We serve all of San Diego County. <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, and <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>. <strong>Removing other furniture beyond couches?</strong> Our <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline font-semibold">complete furniture disposal service</a> handles beds, dressers, desks, tables, and more. We also offer specialized <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattress disposal</a> and comprehensive <a href="/services" className="text-blue-600 hover:underline">junk removal services</a>.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">We Serve All of San Diego County</h3>
                    <p className="text-blue-800 mb-3 leading-relaxed">
                      Our couch removal San Diego service covers every neighborhood and community throughout the county. We pick up sofas, sectionals, and loveseats from downtown high-rises and Gaslamp Quarter apartments, urban homes with tight access in North Park and Hillcrest, condos and townhouses in Clairemont, beach properties in La Jolla and Pacific Beach, family homes in Chula Vista and National City, and larger properties throughout East County and El Cajon.
                    </p>
                    <p className="text-blue-800 mb-3 leading-relaxed">
                      Most couch pickups happen within 24 hours of your call. Same-day sofa removal is available in central San Diego areas when you contact us before noon. Whether you need disposal for a single loveseat, a standard three-seat couch, or a large sectional sofa, we provide fast, reliable upholstered furniture removal across all of San Diego County.
                    </p>
                    <p className="text-blue-700 font-semibold text-center">Call (619) 750-0114 for immediate couch disposal service</p>
                  </div>

                  {/* Second Couch Image - Integrated */}
                  <div className="float-left mr-6 mb-6 w-80 hidden md:block">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/optimized/sectionalcouchlarge.jpg"
                        alt="Sectional couch removal San Diego - large sofa and furniture hauling service"
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fast Response Times</h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    We're locally based in San Diego, which means fast pickup times for couch removal throughout the county. Our central location allows us to reach most San Diego neighborhoods quickly: typically 15 minutes from Petco Park, 10 minutes from Balboa Park, and 20 minutes from UC San Diego. This local presence makes us significantly faster than out-of-town junk removal companies operating from Riverside or Orange County who may take hours to reach your location.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">We Handle Tricky Situations</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    San Diego presents unique challenges for furniture removal, and our experienced team navigates them all. Tight parking in downtown areas, heavy beach traffic in coastal neighborhoods, narrow driveways in older communities. We've handled far worse. Our drivers know San Diego streets intimately and plan efficient routes around traffic patterns, parking restrictions, and neighborhood access limitations. Whether removing a sectional from a Pacific Beach apartment with limited street parking or hauling a sleeper sofa from a hillside home in Mission Hills, we make it work. The freight elevators in downtown high-rises on 5th and 6th Ave have reserved service windows. We call building management the day before to lock in elevator access.
                  </p>

                  <div className="clear-both"></div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Business & Property Managers</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We work extensively with commercial properties, property management companies, and businesses throughout San Diego County. Our couch removal clients include UC San Diego student housing, Sharp Healthcare medical facilities, Qualcomm offices in Sorrento Valley, hotels and vacation rentals near Mission Beach, and retail centers like Fashion Valley. We remove lobby furniture, waiting room seating, office lounge sofas, and tenant-abandoned couches. We offer flexible pickup scheduling with both business hours and after-hours service to minimize disruption to your operations. Property managers highly recommend our transparent pricing and reliable service for apartment turnovers and commercial upholstered furniture disposal.
                  </p>

                  <h2 className="text-3xl font-bold mt-10 mb-6">Common Couch Removal Situations</h2>

                  <div className="space-y-6 mb-12">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">Moving Deadlines & Sofa Problems</h3>
                      <p className="text-gray-700 mb-3">
                        Your lease ends Friday and the new place is a one-bedroom in North Park, no room for the sectional. Or you bought a condo downtown and the sleeper sofa is 9 feet long and won't turn the corner on the stairwell. Moving with a couch that doesn't fit the new space is its own headache: too big to donate easily, too heavy to move yourself, and movers won't take it if it doesn't fit. We handle that pickup on your schedule. We get a lot of calls on lease-end days, Saturday mornings in particular, so the earlier you book, the better.
                      </p>
                      <p className="text-gray-700">
                        <strong>Common scenarios:</strong> Sectional too large for new apartment • Sleeper sofa that won't fit a studio • Old couch that doesn't work in the new layout • Military PCS move with no room for bulky seating • Downsizing from a house to a condo, two couches become zero • Estate cleanout with inherited sofas nobody wants
                      </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-red-900 mb-3">Damaged Upholstery & Sofa Emergencies</h3>
                      <p className="text-gray-700 mb-3">
                        Bed bugs in the cushions. Mold growing inside a sofa after a roof leak. A sleeper sofa frame that collapsed and is now a pile of metal and foam in the middle of your living room. These aren't just cosmetic problems. They're health hazards. San Diego's coastal humidity makes mold spread fast once it gets into upholstery. A bug-infested couch can't go to donation, can't be stored, and needs to leave today. We see this most in older rental buildings in City Heights, Logan Heights, and East Village, where ground-floor units collect moisture and it gets into upholstery over time.
                      </p>
                      <p className="text-gray-700">
                        <strong>Common scenarios:</strong> Bed bug infestation in upholstered seating • Mold in cushions from water damage or humidity • Collapsed or broken sofa frames • Springs punching through seats, injury risk • Pet-destroyed sofas beyond repair • Smoke-damaged upholstery after kitchen fires
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-900 mb-3">Rental Property & Tenant Turnovers</h3>
                      <p className="text-gray-700 mb-3">
                        The tenant moved out of your Mission Valley rental and left behind a sectional, loveseat, and recliner. You've got new renters moving in next week and need the unit show-ready. Or you manage a La Jolla vacation rental and guests abandoned a stained couch. Property managers across San Diego deal with this constantly. Tenants leave furniture behind, and landlords need it gone fast to avoid lost rental income. City Heights, National City, and Linda Vista are where we get these calls most, high-density rental areas where tenants move out without arranging furniture pickup.
                      </p>
                      <p className="text-gray-700">
                        <strong>Common scenarios:</strong> Tenant-abandoned furniture after evictions • Vacation rental guest furniture disposal • Student housing turnovers near SDSU and UCSD • Airbnb furniture replacement cycles • Corporate housing furniture swaps • Multi-family property bulk furniture cleanouts
                      </p>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-orange-900 mb-3">New Furniture Delivery Conflicts</h3>
                      <p className="text-gray-700 mb-3">
                        Your new sectional from Mor Furniture delivers tomorrow at 10 AM and the old couch is still taking up the entire Hillcrest living room. The delivery crew won't haul away your old furniture. They just drop off the new stuff. You need the space cleared before they arrive or the delivery gets rescheduled (and you wait another 3 weeks). Or you bought a floor model at Ashley Furniture and need same-day old couch removal to make room. Jerome's is another big one around here. Give us your delivery window the night before and we'll clear the space before they arrive.
                      </p>
                      <p className="text-gray-700">
                        <strong>Common scenarios:</strong> New furniture delivery tomorrow • Floor model purchases requiring immediate pickup • Living room remodels with contractor start dates • Home staging before open houses this weekend • Interior design projects with tight installation schedules • Showroom furniture swaps for model homes
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Skip the Dump</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Taking furniture to <a href="/san-diego-dump-fees" className="text-blue-600 hover:underline">Miramar Landfill</a> yourself is a hassle that consumes half your day. You need access to a truck large enough to haul your couch, which means renting one if you don't own a pickup. Then you wait in long dump lines, unload heavy furniture yourself, and pay $40-60 in disposal fees. Our couch disposal San Diego service makes it simple. One call and we handle everything. No heavy lifting, no driving across town, no waiting in landfill lines. Starting at just $69, we provide convenient furniture removal that saves you time, effort, and often money.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us Over Big Franchises</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    As a locally owned furniture removal company, we provide faster service than national franchises operating from outside San Diego. Our transparent pricing model means no hidden fees. Unlike other companies that charge extra for stairs, tight spaces, or weekend pickups, we quote one price based on couch size and stick to it. We prioritize eco-friendly disposal, donating furniture in good shape to San Diego charities and recycling materials whenever possible, while many competitors simply dump everything at the landfill regardless of condition. Customers highly recommend our honest approach and reliable service.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Your Old Sofa Actually Goes</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We prioritize donation over landfill for every couch pickup in San Diego. Sofas and sectionals in decent shape get donated to San Diego Rescue Mission, Habitat for Humanity ReStore, and local transitional housing programs, places where upholstered seating is always in demand. When a sofa is too worn to donate, we break it down: fabric and foam go to textile recyclers, wood frames to lumber recyclers, metal springs to scrap processors. Only what can't be salvaged ends up at Miramar. Most couches and loveseats we pick up never see the landfill.
                  </p>

                  <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of Your Couch or Sofa?</h2>
                    <p className="text-lg mb-6 leading-relaxed">
                      Professional couch and sofa removal San Diego starting at $69 for small sofas, $100 for standard couches, $129+ for sectionals. Same-day service available. Transparent pricing with no hidden fees. Eco-friendly recycling and donation for all upholstered furniture.
                    </p>
                    <a
                      href="tel:6197500114"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                    >
                      Call (619) 750-0114 Now
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
        contextParagraph="Couch removal in San Diego starts at $69 for small sofas and loveseats, with standard three-seat couches from $100. Sectional sofas range from $129-199, and sleeper sofas cost $129-149. We provide free, no-obligation estimates over the phone before we arrive. Once we give you a price, it covers everything: all labor, hauling, stairs, and eco-friendly disposal or donation to local charities. No hidden fees or surprises. Call (619) 750-0114 for an exact quote based on your furniture."
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
          <h2 className="text-3xl font-bold text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-disposal-san-diego" className="block p-6 bg-blue-50 border-2 border-blue-500 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">All Furniture Types →</h4>
              <p className="text-gray-700"><strong>Need to remove beds, dressers, desks, or tables?</strong> Our complete furniture disposal service handles all furniture types beyond couches.</p>
            </a>
            <a href="/san-diego-mattress-disposal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Mattress Disposal</h4>
              <p className="text-gray-600">Eco-friendly mattress and box spring removal throughout San Diego</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts</h4>
              <p className="text-gray-600">Complete property cleanouts including all furniture and household items</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
