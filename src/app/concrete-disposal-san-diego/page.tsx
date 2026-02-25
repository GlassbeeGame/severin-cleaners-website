import { Metadata } from 'next';
import Image from "next/image";
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
  title: 'Concrete Disposal San Diego from $100 | Removal & Recycling | (619) 750-0114',
  description: 'Professional concrete disposal San Diego. Broken concrete removal, asphalt hauling, concrete recycling services. Same-day pickup, transparent pricing. Licensed & insured.',
  keywords: [
    'concrete disposal san diego',
    'concrete removal san diego',
    'concrete recycling san diego',
    'concrete recycling san diego ca',
    'broken concrete removal san diego',
    'asphalt disposal san diego',
    'concrete hauling san diego',
    'san diego concrete recycling'
  ],
  openGraph: {
    title: 'Concrete Disposal San Diego from $100 | Same-Day Removal & Recycling',
    description: 'Professional concrete disposal San Diego. Broken concrete removal, asphalt hauling, concrete recycling services. Same-day pickup, transparent pricing.',
    url: 'https://www.severinhauling.com/concrete-disposal-san-diego',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Concrete Disposal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete Disposal San Diego from $100 | Same-Day Removal & Recycling',
    description: 'Professional concrete disposal San Diego. Broken concrete removal, asphalt hauling, concrete recycling services. Same-day pickup, transparent pricing.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/concrete-disposal-san-diego',
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

const concreteFAQs = [
  {
    question: "How much does concrete disposal cost in San Diego?",
    answer: "Concrete disposal in San Diego starts at $100 for small amounts and goes up to $495 for full trailer loads. Pricing depends on volume (cubic yards), weight (concrete is roughly 4,000 lbs per cubic yard), and accessibility of your property. Our all-inclusive rates cover labor, specialized equipment for heavy materials, hauling, and Miramar Landfill disposal fees. For comparison, DIY disposal at Miramar costs $70-$200+ in dump fees alone, plus truck rental ($75-$150), fuel, and half your day. When you factor in your time and effort, professional concrete removal often costs the same or less. Call (619) 750-0114 for a free quote based on your specific project."
  },
  {
    question: "What types of concrete do you remove?",
    answer: "We remove all types of broken concrete and masonry materials including broken foundation concrete and structural debris, sidewalk and driveway concrete chunks, parking lot and pavement demolition materials, concrete with rebar or wire mesh reinforcement, cinder blocks and concrete blocks, brick and masonry materials, tile and stucco debris, asphalt and blacktop materials, and gravel mixed with concrete. Our concrete removal San Diego service handles both small residential projects (broken patio slabs) and larger demolition debris. We cannot accept concrete contaminated with hazardous materials, but standard construction concrete and masonry is fully accepted."
  },
  {
    question: "Do you offer same-day concrete disposal?",
    answer: "Yes, same-day concrete disposal San Diego is available when you call before 2 PM. This works best for central San Diego areas including Kearny Mesa, Mission Valley, downtown, and East County locations. Same-day service depends on crew availability and your specific location, but we prioritize urgent requests. For planned demolition projects or larger volumes, we recommend scheduling 24-48 hours in advance to guarantee your preferred time slot and ensure we bring appropriate equipment for your concrete volume. Most concrete removal projects in San Diego are completed within 24 hours of your initial call."
  },
  {
    question: "Can you recycle concrete in San Diego?",
    answer: "Yes, concrete recycling San Diego is a core part of our service. Clean concrete (free from contamination) gets crushed and recycled into aggregate base material for road construction, fill material for new construction projects, landscape base and drainage applications, and erosion control materials. Concrete recycling reduces landfill waste and supports San Diego County's 65% C&D debris recycling requirement for permitted projects. Mixed loads containing concrete, wood, metal, and other materials may require landfill disposal, but we separate recyclable materials when practical. Reinforced concrete with rebar gets separated with metal recycled and concrete crushed for aggregate. We provide disposal documentation showing whether your materials were recycled or landfilled."
  },
  {
    question: "Do you handle rebar and reinforced concrete?",
    answer: "Yes, our concrete removal San Diego service accepts reinforced concrete with rebar, wire mesh, and steel reinforcement. This is common in foundation demolition, structural concrete removal, and building demolition projects. Reinforced concrete may affect pricing due to additional processing requirements and weight, but we handle it routinely. For large amounts of steel-reinforced concrete, we coordinate with recycling facilities to separate materials when possible. We also offer dedicated scrap metal removal for pure metal materials. Just let us know during the quote process that your concrete contains reinforcement so we can provide accurate pricing."
  },
  {
    question: "What areas in San Diego do you serve?",
    answer: "We provide concrete disposal San Diego service throughout all of San Diego County. Key service areas include Kearny Mesa industrial corridor, Miramar area (near Miramar Landfill for efficient disposal), Mission Valley, downtown San Diego, El Cajon, La Mesa, and Santee East County areas, Otay Mesa, and Oceanside and Escondido North County regions. Our proximity to Miramar Landfill ensures cost-effective disposal for all San Diego County locations. We serve residential properties, construction sites, and facilities throughout the county with same-day availability in most areas."
  },
  {
    question: "How does your pricing compare to Miramar Landfill?",
    answer: "DIY trips to Miramar Landfill require you to load, haul, and unload concrete yourself, rent a truck capable of hauling heavy loads ($75-$150/day), pay dump fees by tonnage ($70-$200+ depending on weight), spend 3-5 hours minimum including drive time and wait, and handle all the physical labor. Hidden costs add up fast. Our all-inclusive concrete disposal San Diego pricing ($100-$495) includes all labor, equipment, hauling, and disposal with no surprise fees. For most projects, professional removal costs similar to or less than DIY when you factor in truck rental, fuel, dump fees, and your time. Plus, you don't lift a finger. We do all the heavy work."
  },
  {
    question: "How do I get rid of concrete in San Diego?",
    answer: "You have four main options for concrete disposal in San Diego. Professional removal services like ours start at $100 with same-day availability and we handle all the work. Taking it to Miramar Landfill yourself costs $70-$200 in dump fees plus truck rental and your time. Concrete recycling facilities like San Diego Concrete Recycle accept materials but you need to haul it yourself. For construction projects with permits, you may be required to recycle 65% of C&D debris per San Diego County regulations. Most San Diego residents and contractors choose professional concrete removal for convenience, transparent pricing, and fast service. We provide disposal documentation for compliance if needed."
  },
  {
    question: "Do you remove asphalt and pavement?",
    answer: "Yes, asphalt disposal San Diego is included in our concrete removal service. We handle asphalt and blacktop from parking lot repairs, driveway resurfacing, road and alley pavement, loading dock areas, and mixed asphalt and concrete materials. Asphalt disposal follows similar pricing to concrete since both are heavy materials requiring specialized equipment and tonnage-based disposal fees. We can recycle clean asphalt through certified San Diego County facilities. Whether you need broken concrete removal, asphalt hauling, or mixed pavement materials disposed of, we handle it all with transparent pricing."
  },
  {
    question: "Can you remove concrete from tight access areas?",
    answer: "Yes, we remove concrete from difficult access situations throughout San Diego including narrow side yards and gated areas, second-story locations and upstairs access, tight driveways in older neighborhoods, hillside properties with limited access, and downtown properties with parking restrictions. Our crews are experienced with San Diego's unique challenges including tight parking in urban areas, heavy beach traffic in coastal neighborhoods, and narrow driveways in older communities. We bring appropriate equipment for your specific access situation and protect your property during removal. If you're concerned about access, describe your situation when you call and we'll let you know if we can handle it (we almost always can)."
  }
];

const relatedServices = [
  { name: "Construction Debris Removal", slug: "construction-debris-removal-san-diego" },
  { name: "Scrap Metal Removal", slug: "scrap-metal-removal" },
  { name: "Same-Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
];

export default function ConcreteDisposalSanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Concrete Disposal San Diego",
    description: "Professional concrete disposal, removal, and recycling services in San Diego. Broken concrete, asphalt, demolition debris. Same-day service, transparent pricing, licensed & insured.",
    url: "https://www.severinhauling.com/concrete-disposal-san-diego",
    serviceType: "Concrete Removal and Disposal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Concrete Disposal", url: "https://www.severinhauling.com/concrete-disposal-san-diego" },
  ]);

  // Enhanced LocalBusiness schema with all required fields per CLAUDE.md
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/concrete-disposal-san-diego#business",
    "name": "Severin Hauling - Concrete Disposal San Diego",
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
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "url": "https://www.severinhauling.com/concrete-disposal-san-diego",
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
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 00:00-23:59",
    "knowsAbout": [
      "Concrete disposal and removal services San Diego",
      "Broken concrete hauling and recycling",
      "Asphalt and pavement disposal",
      "Reinforced concrete with rebar removal",
      "Demolition debris disposal and recycling",
      "Same-day concrete pickup San Diego County",
      "Eco-friendly concrete recycling practices",
      "Heavy masonry and construction material removal"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Concrete Disposal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Disposal San Diego",
            "description": "Broken concrete and demolition debris removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asphalt Disposal San Diego",
            "description": "Asphalt and pavement material disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Recycling San Diego",
            "description": "Eco-friendly concrete crushing and recycling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Demolition Debris Disposal",
            "description": "Complete demolition debris removal and disposal"
          }
        }
      ]
    },
    "aggregateRating": generateAggregateRatingSchema()
  };

  const faqSchema = generateFAQSchema(concreteFAQs);

  const howToSchema = {
    "@type": "HowTo",
    "name": "How to Dispose of Concrete in San Diego",
    "description": "Complete guide to concrete disposal options in San Diego including professional removal, DIY, and recycling facilities.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Option 1: Professional Concrete Removal",
        "text": "Call Severin Hauling at (619) 750-0114 for same-day concrete disposal starting at $100. We handle all loading, hauling, and disposal.",
        "url": "https://www.severinhauling.com/concrete-disposal-san-diego"
      },
      {
        "@type": "HowToStep",
        "name": "Option 2: Miramar Landfill DIY",
        "text": "Rent a truck, load concrete yourself, drive to Miramar Landfill. Cost: $70-$200+ in dump fees plus truck rental and your time.",
        "url": "https://www.severinhauling.com/san-diego-dump-fees"
      },
      {
        "@type": "HowToStep",
        "name": "Option 3: Concrete Recycling Facilities",
        "text": "Take concrete to certified recycling facilities like San Diego Concrete Recycle or Rockridge Crushing. Requires hauling it yourself.",
        "url": "https://www.severinhauling.com/concrete-disposal-san-diego"
      },
      {
        "@type": "HowToStep",
        "name": "Option 4: On-Site Concrete Crushing",
        "text": "For large projects, hire mobile crushing services to recycle concrete on-site for use as base material.",
        "url": "https://www.severinhauling.com/concrete-disposal-san-diego"
      }
    ]
  };

  const neighborhoodSchema = {
    "@type": "ItemList",
    "name": "San Diego Areas We Serve for Concrete Disposal",
    "description": "Neighborhoods and communities throughout San Diego County where we provide concrete disposal and removal services",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Kearny Mesa concrete disposal" },
      { "@type": "ListItem", "position": 2, "name": "Mission Valley concrete removal" },
      { "@type": "ListItem", "position": 3, "name": "Downtown San Diego concrete disposal" },
      { "@type": "ListItem", "position": 4, "name": "El Cajon concrete removal" },
      { "@type": "ListItem", "position": 5, "name": "La Mesa concrete disposal" },
      { "@type": "ListItem", "position": 6, "name": "Santee concrete removal" },
      { "@type": "ListItem", "position": 7, "name": "Mira Mesa concrete disposal" },
      { "@type": "ListItem", "position": 8, "name": "Clairemont concrete removal" },
      { "@type": "ListItem", "position": 9, "name": "Oceanside concrete disposal" },
      { "@type": "ListItem", "position": 10, "name": "Escondido concrete removal" },
      { "@type": "ListItem", "position": 11, "name": "Chula Vista concrete disposal" },
      { "@type": "ListItem", "position": 12, "name": "North Park concrete removal" }
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
        <OptimizedGradientHero
          title="Concrete Disposal San Diego"
          subtitle="⭐ Same-Day Removal • Concrete Recycling • Asphalt Disposal • Licensed & Insured"
          description="✓ Broken Concrete from $100 ✓ Asphalt & Pavement ✓ Demolition Debris ✓ All San Diego County"
        />

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get Rid of Concrete in San Diego</h2>

                    {/* Concrete Removal Image - Integrated float-right */}
                    <div className="float-right ml-6 mb-6 w-80 hidden md:block">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/concrete_removal.jpg"
                          alt="Concrete disposal San Diego - professional broken concrete removal and hauling service"
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                      </div>
                    </div>

                    {/* Mobile image - stacks above content */}
                    <div className="block md:hidden mb-6">
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/optimized/concrete_removal.jpg"
                          alt="Concrete disposal San Diego - professional broken concrete removal and hauling service"
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority
                        />
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                      Need concrete disposal in San Diego? Severin Hauling removes broken concrete, asphalt, and demolition debris throughout San Diego County. We handle everything from small driveway chunks to full parking lot demolitions.
                    </p>

                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> starts at $100 for small amounts, with pricing up to $495 for full loads. Once we give you a price, it covers everything—all labor, specialized equipment, hauling, and responsible disposal or recycling. No hidden fees or surprise charges.
                    </p>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Whether you're a homeowner removing an old patio, a contractor clearing a demolition site, or a property manager handling facility upgrades, we make concrete removal easy. We serve <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, and communities throughout San Diego County with fast response times.
                    </p>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Our concrete recycling San Diego service prioritizes eco-friendly disposal. Clean concrete gets crushed and recycled into aggregate base material for road construction and new projects. This supports San Diego County's C&D debris recycling requirements while keeping materials out of landfills. We provide disposal documentation showing whether your materials were recycled or landfilled.
                    </p>

                    <div className="clear-both"></div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Concrete & Materials We Remove</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      Our concrete removal San Diego service handles all types of heavy construction materials. From small residential projects to large demolition jobs, we remove it all.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Broken Concrete</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Foundation concrete and structural debris</li>
                          <li>Sidewalk and walkway concrete chunks</li>
                          <li>Driveway and parking area removal</li>
                          <li>Patio slabs and concrete pads</li>
                          <li>Reinforced concrete with rebar</li>
                          <li>Wall and partition concrete</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Asphalt & Pavement</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Asphalt disposal for parking lot repairs</li>
                          <li>Blacktop and paved surface removal</li>
                          <li>Driveway asphalt chunks</li>
                          <li>Road and alley pavement</li>
                          <li>Loading dock pavement</li>
                          <li>Mixed asphalt and concrete</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Masonry Materials</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Brick and brick veneer debris</li>
                          <li>Cinder blocks and concrete blocks</li>
                          <li>Stone and natural stone materials</li>
                          <li>Tile and ceramic tile debris</li>
                          <li>Stucco and exterior finish materials</li>
                          <li>Mortar and grout materials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Demolition Debris</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Concrete mixed with rebar and steel</li>
                          <li>Mixed demolition materials</li>
                          <li>Gravel and aggregate with concrete</li>
                          <li>Construction site cleanup materials</li>
                          <li>Warehouse demolition debris</li>
                          <li>Facility renovation materials</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Options for Concrete Disposal in San Diego</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      San Diego residents and contractors have several options for getting rid of concrete. Here's an honest comparison so you can choose what works best for your situation.
                    </p>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Option</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Your Work</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Severin Hauling</strong></td>
                            <td className="border border-gray-300 px-4 py-2">$100-$495</td>
                            <td className="border border-gray-300 px-4 py-2">None</td>
                            <td className="border border-gray-300 px-4 py-2">Same day</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Miramar Landfill</strong></td>
                            <td className="border border-gray-300 px-4 py-2">$70-200+</td>
                            <td className="border border-gray-300 px-4 py-2">You load & haul</td>
                            <td className="border border-gray-300 px-4 py-2">Half your day</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Recycling Facility</strong></td>
                            <td className="border border-gray-300 px-4 py-2">$40-100</td>
                            <td className="border border-gray-300 px-4 py-2">You load & haul</td>
                            <td className="border border-gray-300 px-4 py-2">3-4 hours</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2"><strong>Dumpster Rental</strong></td>
                            <td className="border border-gray-300 px-4 py-2">$300-600</td>
                            <td className="border border-gray-300 px-4 py-2">You load it</td>
                            <td className="border border-gray-300 px-4 py-2">3-7 day rental</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-lg text-gray-700 mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <strong>Think about your time.</strong> Renting a truck, loading heavy concrete, driving to Miramar, and unloading takes 3-5 hours minimum. Add truck rental ($75-$150) and dump fees ($70-$200+) and you're paying similar to professional removal—except you did all the work.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our Concrete Removal Process Works</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      We've streamlined concrete disposal for San Diego homeowners and contractors. Here's what happens from call to completion:
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 mb-8">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Call for Free Quote:</strong> Contact us at <a href="tel:6197500114" className="text-blue-600 hover:underline font-semibold">(619) 750-0114</a> and describe your concrete removal project. Let us know the approximate volume, location, and whether materials are reinforced. We provide upfront pricing over the phone.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before 2 PM for same-day concrete disposal throughout San Diego County. We coordinate around your schedule and can arrive during your preferred time window.</li>
                        <li><strong>3. We Load & Haul Everything:</strong> Our crew brings appropriate equipment for heavy concrete materials. We handle all loading, protecting your property during removal. You don't lift a finger.</li>
                        <li><strong>4. Eco-Friendly Disposal or Recycling:</strong> We transport materials to Miramar Landfill or concrete recycling facilities depending on material type. Clean concrete gets recycled when possible to support environmental sustainability.</li>
                        <li><strong>5. Documentation Provided:</strong> We provide disposal documentation for your records or compliance requirements. This is helpful for permitted projects that require proof of proper disposal.</li>
                      </ol>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete Recycling in San Diego</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      Concrete recycling San Diego ca facilities crush clean concrete into reusable aggregate. This material gets used for road base, fill material, drainage applications, and landscaping projects throughout San Diego County.
                    </p>

                    <p className="text-lg text-gray-700 mb-6">
                      San Diego County requires 65% recycling of C&D debris for permitted construction projects. Our concrete recycling service helps you meet this requirement while keeping materials out of landfills. We work with certified recycling facilities including San Diego Concrete Recycle, Rockridge Crushing in Lakeside, and other county-approved locations. Clean concrete (no contamination) qualifies for recycling. Mixed loads with wood, metal, or other debris typically go to Miramar Landfill, though we separate recyclable materials when practical.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                      <h4 className="text-xl font-bold mb-3 text-yellow-900">Why Concrete Recycling Matters</h4>
                      <p className="text-yellow-800 mb-2">
                        Recycled concrete aggregate has multiple uses in San Diego construction projects:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                        <li>Road base and subbase material for new construction</li>
                        <li>Fill material for grading and site preparation</li>
                        <li>Drainage rock for landscaping and erosion control</li>
                        <li>Aggregate in new concrete mixes (crushed and graded)</li>
                      </ul>
                      <p className="text-yellow-800 mt-3">
                        By choosing concrete recycling over landfill disposal, you support San Diego's sustainability goals and reduce construction waste.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">San Diego Areas We Serve</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      We provide concrete disposal San Diego service throughout all of San Diego County. Our strategic location near Miramar Landfill reduces transportation costs, which means better pricing for you.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">Central & East County</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a> - industrial and warehouse facilities</li>
                          <li>Mission Valley - retail and office properties</li>
                          <li>Downtown San Diego - urban construction sites</li>
                          <li><a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a> - residential and commercial</li>
                          <li><a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a> - homes and businesses</li>
                          <li><a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a> - residential properties</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-blue-600">North & South County</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a> - North County coastal</li>
                          <li><a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a> - North County inland</li>
                          <li><a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a> - South County residential</li>
                          <li>Otay Mesa - industrial and logistics</li>
                          <li><a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a> - mixed residential/business</li>
                          <li><a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a> - residential neighborhoods</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete Disposal Pricing Explained</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      Understanding concrete disposal pricing helps you budget accurately. Unlike lighter materials, concrete is extremely heavy—approximately 4,000 pounds per cubic yard—which affects both equipment requirements and disposal fees.
                    </p>

                    <p className="text-lg text-gray-700 mb-6">
                      Our all-inclusive pricing ($100-$495 based on volume) covers all labor, specialized equipment for heavy materials, hauling and transportation, Miramar Landfill dump fees (tonnage-based), and disposal documentation. Pricing depends on volume (how much space it takes), weight (tonnage for disposal), accessibility of your property, and whether materials are reinforced with rebar. For detailed pricing comparisons with DIY options, see our <a href="/san-diego-dump-fees" className="text-blue-600 hover:underline">San Diego dump fees guide</a>.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Why Professional Removal Makes Sense</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>No truck rental needed ($75-$150 saved)</li>
                          <li>No dump fees ($70-$200+ saved)</li>
                          <li>No physical labor (3-5 hours saved)</li>
                          <li>No risk of injury from heavy materials</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Same-day service available (we're fast)</li>
                          <li>Professional equipment and crews</li>
                          <li>Property protection during removal</li>
                          <li>Proper disposal or recycling handled</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Hauling</h3>

                    <p className="text-lg text-gray-700 mb-4">
                      We've handled hundreds of concrete removal projects across San Diego County. From small residential patios to large demolition sites, we make the process easy.
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before 2 PM for same-day concrete disposal throughout San Diego County. Fast response for urgent projects.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> Upfront quotes with no hidden fees. Once we give you a price, that's what you pay—no surprises.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed and insured in California with proper liability coverage for your protection and peace of mind.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Eco-Friendly Disposal:</strong> We prioritize concrete recycling when possible, supporting San Diego's environmental goals and C&D debris requirements.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Near Miramar Landfill:</strong> Our location reduces transportation time and costs, which means better pricing and faster service for you.</span>
                      </li>
                    </ul>

                    <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                      <h3 className="text-2xl font-bold mb-4">Ready to Get Rid of Your Concrete?</h3>
                      <p className="text-lg mb-6 leading-relaxed">
                        Professional concrete disposal San Diego starting at $100. Same-day service available. Transparent pricing with no hidden fees. Eco-friendly recycling when possible.
                      </p>
                      <a
                        href="tel:6197500114"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                      >
                        📞 Call (619) 750-0114 Now
                      </a>
                      <div className="bg-blue-800 rounded-lg p-4">
                        <p className="text-yellow-300 font-semibold mb-2">Concrete Removal San Diego from $100</p>
                        <div className="text-sm">
                          Same-Day Service • All-Inclusive Pricing • Concrete Recycling • All San Diego County
                        </div>
                      </div>
                      <p className="text-sm mt-4">
                        Licensed and insured • Locally owned • Fast and professional service
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Concrete Disposal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Related Services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Concrete Disposal"
          contextParagraph="Concrete disposal in San Diego starts at $100 for small amounts and goes up to $495 for full loads. Pricing depends on volume and weight since concrete is heavy (4,000 lbs per cubic yard). All-inclusive rates cover labor, specialized equipment, hauling, and disposal fees. No hidden charges. Call (619) 750-0114 for a free quote based on your specific project."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Concrete Disposal" />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQSection
                title="Frequently Asked Questions - Concrete Disposal San Diego"
                description="Get answers to common questions about our concrete disposal San Diego services, pricing, recycling options, and same-day removal."
                faqs={concreteFAQs}
                ctaTitle="Still Have Questions About Concrete Disposal?"
                ctaDescription="Our experienced team is ready to answer any questions about our concrete removal San Diego services, provide detailed quotes, or schedule your same-day pickup."
                includeSchema={false}
              />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Complete demolition and construction debris removal for all project types</p>
              </a>
              <a href="/scrap-metal-removal" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Scrap Metal Removal</h4>
                <p className="text-gray-600">Metal recycling and removal including rebar from reinforced concrete</p>
              </a>
              <a href="/hot-tub-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Hot Tub Removal</h4>
                <p className="text-gray-600">Heavy item removal including hot tubs, spas, and large fixtures</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
