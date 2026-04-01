import { Metadata } from 'next';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema, generateHowToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Junk Removal Pacific Beach | Same-Day Service | (619) 750-0114',
  description: 'Professional junk removal Pacific Beach for beach houses, apartments, and properties in Crystal Pier, Crown Point, Garnet Avenue. Same-day hauling, free estimate, licensed & insured.',
  keywords: [
    'junk removal pacific beach',
    'pacific beach junk removal',
    'junk hauling pacific beach',
    'same day junk removal pb'
  ],
  openGraph: {
    title: 'Junk Removal Pacific Beach | Beach House & Property Specialists',
    description: 'Professional junk removal Pacific Beach from Crystal Pier to Crown Point. Same-day availability, free estimate, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    url: 'https://www.severinhauling.com/junk-removal-pacific-beach',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Pacific Beach Junk Removal - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Pacific Beach | Beach House & Property Specialists',
    description: 'Professional junk removal Pacific Beach from Crystal Pier to Crown Point. Same-day availability, free estimate, transparent pricing. Licensed & insured. Call (619) 750-0114!',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/junk-removal-pacific-beach',
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
    'geo.placename': 'Pacific Beach',
    'geo.position': '32.7942;-117.2347',
    'ICBM': '32.7942, -117.2347',
    'article:published_time': '2026-01-15T09:00:00-08:00',
    'article:modified_time': '2026-03-06T09:00:00-08:00',
  },
};

const pacificBeachFAQs = [
  {
    question: "How much does junk removal Pacific Beach cost?",
    answer: "Our pricing is transparent and volume-based: small items $69, standard items $100, quarter-load $249, half-load $349, three-quarter load $429, and full-load $495. All prices include labor, hauling, and disposal with no surcharges for beach access or narrow alleys. We provide free estimates and confirm final pricing on-site before starting work. Learn more about <a href='/blog/how-much-does-junk-removal-cost-san-diego' className='text-blue-600 hover:underline'>junk removal pricing in San Diego</a>."
  },
  {
    question: "Do you provide same-day service?",
    answer: "Yes, call before noon for <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day service</a> throughout the 92109 area. We often arrive within 2-4 hours for urgent situations like vacation rental turnovers, student move-outs, or emergency cleanouts. We coordinate scheduling around summer beach traffic and Tuesday Farmers Market closures for reliable arrival times."
  },
  {
    question: "Can you remove heavy furniture and appliances?",
    answer: "Absolutely. We handle all heavy lifting for <a href='/furniture-disposal-san-diego' className='text-blue-600 hover:underline'>furniture</a>, <a href='/appliance-removal-san-diego' className='text-blue-600 hover:underline'>appliances</a>, exercise equipment, and salt-damaged outdoor items. We navigate Ocean Front Walk's narrow boardwalk alleys, Crown Point's limited parking, and Garnet Avenue multi-story buildings. We protect floors and doorways during all removals."
  },
  {
    question: "Do you service all of Pacific Beach?",
    answer: "Yes, we serve the entire 92109 zip code from Tourmaline Surfing Park to the Mission Beach border, Mission Bay to the Pacific Ocean. This includes Ocean Front Walk, Crystal Pier, Garnet Avenue, Crown Point, Kate Sessions Park area, Bay Park, The Promenade, and Fanuel/Lamont student housing corridors. We know every alley and access challenge throughout the area."
  },
  {
    question: "Do you work around PB's Tuesday Farmers Market and special events?",
    answer: "Yes, we schedule around all Pacific Beach events. Tuesday Farmers Market closes Bayard Street 12-8 PM weekly—we route via Grand Avenue or schedule other days. During summer events (BeachFest, concerts), we offer early morning or weekday service. Student move-outs in May/August require 2-3 weeks advance booking during peak periods."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we're a fully licensed California junk removal contractor with $2 million general liability insurance coverage. Our insurance protects your Pacific Beach property during service—especially important for narrow boardwalk access, multi-story buildings, and sandy beach house floors. We provide certificates of insurance upon request for property management companies and vacation rental owners who require proof of coverage."
  },
  {
    question: "Do you recycle or donate items?",
    answer: "Yes, we sort every load for recycling and donation. Usable items go to local charities, scrap metal to recycling facilities, mattresses to specialized recycling centers, and electronics to certified e-waste recyclers. Surfboards and beach equipment in good condition are donated to youth programs. This eco-friendly approach reduces landfill fees and supports competitive pricing."
  },
  {
    question: "Can you remove construction debris?",
    answer: "Yes, we handle <a href='/construction-debris-removal-san-diego' className='text-blue-600 hover:underline'>construction debris</a> from beach house renovations including cabinets, countertops, drywall, flooring, and deck demolition. We coordinate with contractors for same-day or next-day removal to keep job sites clear. All debris goes to licensed facilities with recycling when possible."
  }
];

export default function JunkRemovalPacificBeachPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Areas We Serve", url: "https://www.severinhauling.com/areas-we-serve" },
    { name: "Pacific Beach Junk Removal", url: "https://www.severinhauling.com/junk-removal-pacific-beach" },
  ]);

  const faqSchema = generateFAQSchema(pacificBeachFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Pacific Beach",
    "description": "Full service junk removal Pacific Beach from Crystal Pier to Crown Point. We do all the heavy lifting. Same-day service, free estimate, beach property specialists, transparent pricing. Licensed & insured San Diego company.",
    "url": "https://www.severinhauling.com/junk-removal-pacific-beach",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://www.severinhauling.com/junk-removal-pacific-beach#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/junk-removal-pacific-beach#business",
    "name": "Severin Hauling LLC",
    "image": [
      "https://www.severinhauling.com/optimized/couchwithlogo.jpg",
      "https://www.severinhauling.com/optimized/toiletteam.jpg",
      "https://www.severinhauling.com/optimized/commercial.jpg"
    ],
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
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
      "latitude": 32.7678,
      "longitude": -117.0231
    },
    "url": "https://www.severinhauling.com/junk-removal-pacific-beach",
    "knowsAbout": [
      "Beach House Property Access and Cleanouts",
      "Ocean Front Walk Boardwalk Alley Navigation",
      "Vacation Rental Property Junk Removal",
      "Student Housing Move-Outs on Fanuel and Lamont Streets",
      "Salt Air Corrosion and Coastal Environment Item Removal",
      "Crown Point Bay-Front Property Access",
      "Garnet Avenue Multi-Story Building Coordination",
      "Summer Beach Traffic and Tuesday Farmers Market Scheduling"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pacific Beach Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beach House and Coastal Property Cleanouts",
            "description": "Full-service junk removal for Crystal Pier boardwalk apartments, Crown Point bay-front homes, and Ocean Front Walk properties with narrow alley access"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Property Junk Removal",
            "description": "Same-day junk removal for short-term rental properties throughout the 92109 area—removing left-behind furniture, appliances, and accumulated junk between tenants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Housing Move-Out Cleanouts",
            "description": "End-of-lease junk removal for student apartments on Fanuel and Lamont Streets near San Diego State University extension housing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salt-Damaged Outdoor and Beach Equipment Removal",
            "description": "Removal of rust-corroded patio furniture, bikes, grills, surfboards, paddleboards, and other salt-air damaged coastal items"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Pacific Beach",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92109",
        "addressLocality": "San Diego",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": generateAggregateRatingSchema(),
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-hauling-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const howToSchema = generateHowToSchema({
    cityName: "Pacific Beach",
    pageUrl: "https://www.severinhauling.com/junk-removal-pacific-beach"
  });

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "Pacific Beach San Diego Neighborhoods Served",
    "description": "Complete junk removal coverage throughout all Pacific Beach neighborhoods and zones in the 92109 zip code",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Place",
          "name": "North Pacific Beach",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Place",
          "name": "Crown Point",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Garnet Avenue District",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Place",
          "name": "Ocean Front Walk",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Place",
          "name": "Bay Park",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Place",
          "name": "The Promenade",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Place",
          "name": "Fanuel Street Corridor",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Place",
          "name": "Mission Boulevard",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Place",
          "name": "Tourmaline Surfing Park Area",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Place",
          "name": "Kate Sessions Memorial Park Area",
          "address": { "@type": "PostalAddress", "addressLocality": "Pacific Beach", "addressRegion": "CA", "postalCode": "92109" }
        }
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema, neighborhoodSchema, howToSchema]
  };

  const nearbyLocations = [
    { name: "La Jolla", slug: "junk-removal-la-jolla" },
    { name: "Point Loma", slug: "junk-removal-point-loma" },
    { name: "Clairemont", slug: "junk-removal-clairemont" },
    { name: "Del Mar", slug: "junk-removal-del-mar" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

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
                Junk Removal Pacific Beach
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Crystal Pier to Crown Point • Beach House Cleanouts • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Full Service San Diego Experts ✓ We Do All the Heavy Lifting ✓ Free Estimate ✓ Licensed & Insured
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
                      Beach House &amp; Coastal Property Cleanout Specialists
                    </h2>

                    {/* Pacific Beach Junk Removal Image - Integrated */}
                    <div className="mb-6 md:float-right md:ml-6 w-full md:w-80">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/junkintrashbags.jpg"
                          alt="junk removal Pacific Beach - beach house cleanout service in 92109"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <p className="text-lg mb-4 text-gray-700">
                      Need junk removal in Pacific Beach? <a href="/" className="text-blue-600 hover:underline font-medium">Severin Hauling</a> serves the entire 92109 area—from Crystal Pier boardwalk apartments to Crown Point bay-front homes. Most Pacific Beach junk removals run $249-$495 depending on volume, with same-day service available when you call before noon.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                      Our crew handles beach house cleanouts, vacation rental turnovers, and student housing move-outs on Fanuel and Lamont Streets. Narrow Ocean Front Walk alleys mean we bring our smaller truck (fits 8-foot-wide passages). Tuesday Farmers Market closures mean we route via Grand Avenue. Summer beach traffic means we schedule early morning slots (6-9 AM) on weekends.
                    </p>
                    <p className="text-lg mb-6 text-gray-700">
                      Call (619) 750-0114 for a price quote over the phone based on what you're removing. We confirm the final price when we arrive—before we start loading. No obligation to proceed if the on-site price doesn't match your budget. Whether it's a single sofa or a full apartment cleanout, we handle loading, hauling, and disposal. Need it fast? We offer <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">same-day pickup</a> when you call before noon.
                    </p>

                    {/* Vacation Rental Use Case */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Junk Removal for Vacation Rental Properties</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Typical Pacific Beach vacation rental turnover scenario:</strong> Tenant leaves behind a sofa, mattress, mini-fridge, and 4-5 bags of miscellaneous items in an Ocean Front Walk 3rd-floor apartment. We navigate the narrow boardwalk alley with our smaller truck, hand-carry items down three flights to avoid wall damage, and complete removal in 90 minutes. Cost: $349 (half-load rate). Property ready for next guest same-day when booked before noon. We serve vacation rental owners and property managers throughout the 92109 area—including Ocean Front Walk, Crown Point, and Mission Boulevard.
                    </p>

                    {/* Student Housing Use Case */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Student Move-Outs on Lamont, Fanuel &amp; Surrounding Streets</h3>
                    <p className="text-gray-700 mb-6">
                      <strong>Typical Pacific Beach student move-out:</strong> Futon, desk, mini-fridge, 6-8 bags of clothes and books left in a Fanuel Street second-floor apartment. Average cost: $249 (quarter-load rate). Time: 60 minutes including stairwell navigation. The Fanuel and Lamont Street corridors see heavy student move-out activity every May and August—book 2-3 weeks ahead during these peak periods for guaranteed availability. Outside May/August, we're typically available within 24 hours. All removed items are sorted for donation or recycling before anything goes to landfill.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">92109 Neighborhoods We Serve</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• North Pacific Beach</li>
                        <li>• Crown Point</li>
                        <li>• Garnet District</li>
                        <li>• Ocean Front Walk</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Bay Park</li>
                        <li>• The Promenade</li>
                        <li>• Fanuel Street</li>
                        <li>• Mission Boulevard</li>
                      </ul>
                    </div>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Major Landmarks & Cross Streets</h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Crystal Pier & Hotel</li>
                        <li>• Kate Sessions Memorial Park</li>
                        <li>• PB Library & Recreation Center</li>
                        <li>• Tourmaline Surfing Park</li>
                        <li>• Mission Bay Park</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Crown Point Shores</li>
                        <li>• The Promenade Shopping Center</li>
                        <li>• Garnet Avenue District</li>
                        <li>• Fanuel Park</li>
                        <li>• Kendall-Frost Marsh Reserve</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Beach Traffic & Scheduling Considerations</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Summer weekends:</strong> Mission Boulevard and Garnet Avenue get congested 10 AM-6 PM. We schedule Pacific Beach junk removal for 6-9 AM to avoid delays. Early slots guarantee on-time arrival and faster completion (typical job: 60-90 minutes including loading and haul-away).
                    </p>
                    <p className="text-gray-700 mb-6">
                      <strong>Tuesday Farmers Market:</strong> Bayard Street between Garnet and Grand closes 12-8 PM weekly. We automatically route via Grand Avenue—no delays. <strong>Student move-out season (May/August):</strong> Lamont and Fanuel Streets book 2-3 weeks in advance. <a href="/blog/same-day-junk-removal-guide" className="text-blue-600 hover:underline">Book early during peak periods</a> or call for next-day availability outside those months.
                    </p>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Salt-Damaged Outdoor Items & Weather Considerations</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Common Pacific Beach salt-air damage removal:</strong> Rust-corroded patio furniture, bikes with seized chains, grills with deteriorated burners, metal shelving with flaking paint. We handle heavy corroded items (50-200 lbs each) and dispose at proper facilities. Typical outdoor item removal: $100-$249 depending on volume and weight.
                    </p>
                    <p className="text-gray-700 mb-6">
                      <strong>Winter weather (December-February):</strong> Crown Point bayside (Moorland Drive, Lamont Street) can flood during heavy rain. We monitor weather and reschedule if street access is unsafe. Text us day-of if you need to postpone—no rescheduling fees.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Haul From Pacific Beach Properties</h3>
                    <p className="text-gray-700 mb-4">
                      We handle everything from single items to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Furniture</a>, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, sofas</li>
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances</a> and electronics</li>
                          <li>• Salt-damaged outdoor items</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Beach & Specialty</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Surfboards, paddleboards, beach cruisers</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> and patio furniture</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from beach house remodels</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Hauling for Pacific Beach</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Beach Property Access Experience:</strong> We use our smaller truck for narrow Ocean Front Walk alleys (8-foot width minimum). We hand-carry items through tight boardwalk passages and protect walls/doorways during multi-story building removals. We know which Garnet Avenue parking structures allow truck access and which require hand-cart transfers. We also serve nearby <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> and <a href="/junk-removal-point-loma" className="text-blue-600 hover:underline">Point Loma</a> coastal communities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Guarantee:</strong> Call before noon for same-day Pacific Beach junk removal. We text you 30 minutes before arrival. Typical 2-hour arrival windows (not all-day waits). Jobs completed 60-90 minutes from arrival to final haul-away.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Price Confirmed Before We Start:</strong> Phone quote based on your description. Final price confirmed when we arrive—before loading begins. No obligation if price doesn't match your budget. No surcharges for beach access, narrow alleys, stairs, or limited parking. See our <a href="/junk-removal-cost-san-diego" className="text-blue-600 hover:underline">complete pricing guide</a>.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Fully Licensed & Insured in California:</strong> Licensed junk removal contractor with $2M general liability coverage. Certificates of insurance available upon request for property managers and vacation rental owners requiring proof of coverage.</span>
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
          contextParagraph="Beach house cleanouts throughout the 92109 area—from Crystal Pier to Crown Point—all use the same transparent pricing. No hidden fees for beach access or limited parking. Call for your free, no-obligation estimate."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Pacific Beach" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Pacific Beach"
          description="Get answers to common questions about our services, pricing, and same-day availability in the 92109 area."
          faqs={pacificBeachFAQs}
          ctaTitle="Still Have Questions?"
          ctaDescription="Our experienced team is ready to answer your questions, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Book Your Pacific Beach Junk Removal Today
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Clearing a beach house? Vacation rental turnover on Ocean Front Walk? Student move-out on Lamont Street? Call before noon for same-day Pacific Beach junk removal. Most jobs: $249-$495. Timeline: 60-90 minutes from arrival to completion. Price confirmed on-site before we start loading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="text-blue-200 text-lg">
                Serving all of Pacific Beach 92109 — Crystal Pier to Crown Point • Same-Day Service Available • Licensed &amp; Insured
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Beach Community Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky beach-damaged furniture throughout the 92109 area</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and salt-air damaged appliances with eco-friendly disposal</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris</h4>
                <p className="text-gray-600">Beach house remodel debris and renovation cleanup services</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
