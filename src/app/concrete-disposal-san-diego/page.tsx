import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Concrete Disposal San Diego | Demolition Debris Removal | (619) 750-0114',
  description: 'Professional concrete disposal San Diego. Broken concrete, asphalt, pavement, demolition debris. Same-day service, commercial accounts, licensed & insured. Serving contractors county-wide.',
  keywords: [
    'concrete disposal san diego',
    'asphalt disposal san diego',
    'broken concrete removal san diego',
    'demolition debris disposal',
    'concrete recycling san diego',
    'pavement removal san diego',
    'concrete hauling san diego',
    'masonry disposal san diego'
  ],
  openGraph: {
    title: 'Concrete Disposal San Diego | Demolition Debris Removal | Same-Day Service',
    description: 'Professional concrete disposal San Diego. Broken concrete, asphalt, pavement, demolition debris. Same-day service, commercial accounts, licensed & insured.',
    url: 'https://severincleaners.com/concrete-disposal-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Concrete Disposal San Diego - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concrete Disposal San Diego | Demolition Debris Removal | Same-Day Service',
    description: 'Professional concrete disposal San Diego. Broken concrete, asphalt, pavement, demolition debris. Same-day service, commercial accounts, licensed & insured.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/concrete-disposal-san-diego',
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

const concreteFAQs = [
  {
    question: "How much does concrete disposal cost in San Diego?",
    answer: "Our concrete disposal San Diego pricing is volume-based and all-inclusive, ranging from $100 for small amounts to $495 for full trailer loads. Concrete is priced by weight and volume since it's heavier than typical junk. The final cost depends on the amount of material (cubic yards), weight (tonnage), accessibility of the site, and whether materials are mixed with other debris. We provide upfront quotes after assessing your project. For contractors and businesses handling regular concrete disposal, we offer commercial accounts with volume discounts and NET-30 payment terms. Call (619) 750-0114 for a free estimate based on your specific concrete removal needs."
  },
  {
    question: "What types of concrete and materials do you accept for disposal?",
    answer: "We handle all types of broken concrete removal San Diego projects including broken foundation concrete and structural debris, sidewalk and driveway concrete chunks, parking lot and pavement demolition, concrete with rebar or wire mesh reinforcement, cinder blocks and concrete blocks, brick and masonry materials, tile and stucco debris, asphalt and blacktop materials, and gravel mixed with concrete. Our service is ideal for demolition contractors, parking lot companies, property managers, and commercial facilities throughout San Diego County. We cannot accept concrete contaminated with hazardous materials, but standard construction concrete and masonry is fully accepted."
  },
  {
    question: "Do you handle rebar and reinforced concrete?",
    answer: "Yes, our concrete disposal San Diego service accepts reinforced concrete with rebar, wire mesh, and steel reinforcement. This is common in foundation demolition, structural concrete removal, and commercial building demolition. Reinforced concrete may affect pricing due to additional processing requirements and weight, but we handle it routinely. For large amounts of steel-reinforced concrete, we coordinate with recycling facilities to separate materials when possible. We also offer dedicated <a href='/scrap-metal-removal' className='text-blue-600 hover:underline'>scrap metal removal</a> for pure metal materials. Just let us know during the quote process that your concrete contains reinforcement so we can provide accurate pricing."
  },
  {
    question: "Can you provide same-day concrete disposal service?",
    answer: "Yes, we offer same-day concrete disposal San Diego for urgent projects when you call before 2 PM. This is ideal for contractors on tight schedules, property managers facing code violations, or commercial facilities needing immediate debris removal. Our team serves all San Diego County construction zones including Kearny Mesa, Miramar, Mission Valley, downtown San Diego, and East County areas. Same-day service depends on crew availability and your location, but we prioritize contractor and commercial clients. For planned demolition projects, we recommend scheduling 24-48 hours in advance to guarantee your preferred time slot and ensure we bring appropriate equipment for your concrete volume."
  },
  {
    question: "Do you offer commercial accounts for contractors?",
    answer: "Absolutely. Our concrete disposal San Diego service includes commercial accounts specifically designed for contractors, demolition companies, and construction firms. Benefits include NET-30 payment terms for qualified accounts, volume discounts for recurring business, priority scheduling for urgent projects, detailed invoicing with project codes for your accounting, disposal documentation and certificates for compliance, and dedicated account management for multi-project coordination. Many San Diego contractors use us as their primary concrete and <a href='/construction-debris-removal-san-diego' className='text-blue-600 hover:underline'>construction debris removal</a> partner. Call (619) 750-0114 to set up your commercial account and discuss volume pricing for your business."
  },
  {
    question: "What areas in San Diego do you serve for concrete disposal?",
    answer: "We provide concrete disposal San Diego service throughout all of San Diego County with focus on major construction and industrial zones. Key service areas include <a href='/junk-removal-kearny-mesa' className='text-blue-600 hover:underline'>Kearny Mesa</a> industrial corridor and manufacturing district, Miramar area (near Miramar Landfill) for efficient disposal, Mission Valley commercial construction projects, downtown San Diego high-rise and urban construction, <a href='/junk-removal-el-cajon' className='text-blue-600 hover:underline'>El Cajon</a>, <a href='/junk-removal-la-mesa' className='text-blue-600 hover:underline'>La Mesa</a>, and <a href='/junk-removal-santee' className='text-blue-600 hover:underline'>Santee</a> East County areas, Otay Mesa border industrial zone, and <a href='/junk-removal-oceanside' className='text-blue-600 hover:underline'>Oceanside</a> and <a href='/junk-removal-escondido' className='text-blue-600 hover:underline'>Escondido</a> North County regions. Our proximity to Miramar Landfill ensures cost-effective disposal for all San Diego County locations."
  },
  {
    question: "How does concrete disposal pricing compare to Miramar dump fees?",
    answer: "DIY trips to Miramar Landfill charge by tonnage (concrete is extremely heavy at ~4,000 lbs per cubic yard), require you to load, haul, and unload yourself, involve long wait times especially during peak construction seasons, and need a suitable truck capable of hauling heavy loads. Hidden costs include truck rental ($75-$150/day), fuel and drive time, dump fees ($70-$200+ depending on weight), and your time and labor (3-5 hours minimum). Our all-inclusive concrete disposal San Diego pricing ($100-$495) includes all labor, equipment, hauling, and disposal with no surprise fees. For most projects, professional removal costs similar to or less than DIY when you factor in all expenses. See our <a href='/blog/san-diego-dump-fees-guide' className='text-blue-600 hover:underline'>San Diego dump fees guide</a> for detailed cost comparison."
  },
  {
    question: "Do you recycle concrete or is it all landfilled?",
    answer: "We prioritize concrete recycling San Diego whenever possible. Clean concrete (free from contamination) can be crushed and recycled into aggregate base material for road construction, fill material for construction projects, and landscape base materials. Concrete recycling reduces landfill waste and supports San Diego's environmental goals. Mixed loads containing concrete, wood, metal, and other materials may require landfill disposal, but we separate recyclable materials when practical. Reinforced concrete with rebar is often separated with metal recycled and concrete crushed for aggregate. We provide disposal documentation showing whether your materials were recycled or landfilled, which is valuable for LEED projects and environmental compliance reporting for commercial construction."
  }
];

export default function ConcreteDisposalSanDiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Concrete Disposal San Diego",
    description: "Professional concrete disposal San Diego for contractors and businesses. Broken concrete, asphalt, demolition debris, pavement removal. Same-day service, commercial accounts, licensed & insured.",
    url: "https://severincleaners.com/concrete-disposal-san-diego",
    serviceType: "Concrete Removal Service",
    areaServed: "San Diego County, CA",
  });

  // Enhanced LocalBusiness schema for concrete disposal
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/concrete-disposal-san-diego#business",
    "name": "Severin Cleaners - Concrete Disposal San Diego",
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
    "url": "https://severincleaners.com/concrete-disposal-san-diego",
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
    "openingHours": "Mo-Su 06:00-20:00",
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
            "name": "Demolition Debris Disposal",
            "description": "Complete demolition debris removal and disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Material Removal",
            "description": "Brick, block, and masonry debris disposal"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Concrete Disposal", url: "https://severincleaners.com/concrete-disposal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(concreteFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Construction Debris Removal", slug: "construction-debris-removal-san-diego" },
    { name: "Commercial Junk Removal", slug: "commercial-junk-removal-san-diego" },
    { name: "Scrap Metal Removal", slug: "scrap-metal-removal" },
    { name: "Emergency Junk Removal", slug: "emergency-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Concrete Disposal San Diego"
          subtitle="Licensed & Insured • Commercial Accounts • Same-Day Service Available"
          description="✓ Broken Concrete ✓ Asphalt & Pavement ✓ Demolition Debris ✓ Miramar Direct"
        />

      {/* Main Content - 2-COLUMN LAYOUT */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Concrete Disposal San Diego</h2>

              <p className="text-lg text-gray-700 mb-6">
                San Diego contractors, property managers, and commercial facilities need reliable concrete disposal San Diego services for demolition projects, parking lot repairs, and facility renovations. Severin Cleaners provides professional broken concrete removal San Diego with same-day service, commercial account options, and proper disposal documentation for compliance. As part of our comprehensive <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal San Diego</a> services, we handle heavy materials that require specialized equipment and expertise.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a> industrial facilities to downtown San Diego construction projects, our concrete disposal service handles broken concrete, asphalt, pavement, masonry, and demolition debris throughout San Diego County. We're positioned near Miramar Landfill for efficient disposal, which keeps costs low and turnaround times fast. Whether you need <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> for a major project or single-load concrete disposal for a small renovation, we provide transparent all-inclusive pricing with no hidden fees.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Concrete & Heavy Materials We Handle</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our concrete disposal San Diego service accepts all types of heavy construction materials common to San Diego demolition and renovation projects. We handle everything from small residential driveway removal to large-scale commercial parking lot demolition.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Broken Concrete & Demolition Debris</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Foundation concrete and structural demolition debris</li>
                    <li>Sidewalk and walkway concrete chunks</li>
                    <li>Driveway and parking area concrete removal</li>
                    <li>Wall and partition concrete demolition</li>
                    <li>Reinforced concrete with rebar or wire mesh</li>
                    <li>Concrete slabs and pads from equipment removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Asphalt & Pavement Materials</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Asphalt disposal San Diego for parking lot repairs</li>
                    <li>Blacktop and paved surface removal</li>
                    <li>Driveway asphalt chunks and debris</li>
                    <li>Road and alley pavement materials</li>
                    <li>Loading dock and receiving area pavement</li>
                    <li>Mixed asphalt and concrete materials</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Masonry & Heavy Materials</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Brick and brick veneer demolition debris</li>
                    <li>Cinder blocks and concrete blocks</li>
                    <li>Stone and natural stone materials</li>
                    <li>Tile and ceramic tile debris</li>
                    <li>Stucco and exterior finish materials</li>
                    <li>Mortar, grout, and bonding materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Mixed Construction Debris</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Concrete mixed with rebar and steel reinforcement</li>
                    <li>Demolition debris with multiple material types</li>
                    <li>Gravel and aggregate mixed with concrete</li>
                    <li>Construction site cleanup materials</li>
                    <li>Warehouse and loading dock demolition debris</li>
                    <li>Commercial facility renovation materials</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Our San Diego Concrete Disposal Process Works</h3>
              <p className="text-lg text-gray-700 mb-4">
                We've streamlined concrete disposal San Diego for contractors and businesses who need fast, reliable service without the hassle of DIY trips to Miramar Landfill. Here's how our process works from first contact to final disposal:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1. Call for Free Quote:</strong> Contact us at <a href="tel:6197500114" className="text-blue-600 hover:underline font-semibold">(619) 750-0114</a> and describe your concrete removal project. Let us know the approximate volume (cubic yards), location, accessibility, and whether materials are reinforced. We provide upfront pricing estimates over the phone.</li>
                  <li><strong>2. Weight & Volume Assessment:</strong> For larger projects, we can conduct on-site assessments to provide exact pricing. Concrete pricing considers both volume (space it takes up) and weight (tonnage for disposal fees). We explain all costs upfront with no hidden charges.</li>
                  <li><strong>3. Same-Day Scheduling Available:</strong> Call before 2 PM for same-day concrete disposal throughout San Diego County. We coordinate around your project timeline and can schedule during off-hours to avoid disrupting active construction sites.</li>
                  <li><strong>4. We Load & Haul Everything:</strong> Our crew brings appropriate equipment for heavy concrete materials. We handle all loading, protecting your property during removal. You don't lift a finger—we do all the heavy work.</li>
                  <li><strong>5. Miramar Landfill or Recycling Facility:</strong> We transport materials directly to Miramar Landfill or concrete recycling facilities depending on material type and condition. Clean concrete is recycled when possible to support environmental sustainability.</li>
                  <li><strong>6. Documentation Provided:</strong> We provide disposal documentation and certificates for your records, compliance requirements, or LEED project documentation. This is especially important for commercial contractors and property managers.</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">San Diego Construction Zones We Serve</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our concrete disposal San Diego service covers all major construction, industrial, and commercial zones throughout San Diego County. We understand the unique challenges of different areas and provide tailored service for each location's specific needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Major Industrial & Construction Areas</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong><a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>:</strong> Industrial corridor, manufacturing district, warehouse renovations, parking lot repairs for commercial complexes</li>
                    <li><strong>Miramar:</strong> Near Miramar Landfill for efficient disposal, military contractors, aerospace facilities, distribution centers</li>
                    <li><strong>Mission Valley:</strong> Commercial construction projects, retail renovations, corporate campus upgrades, parking structure work</li>
                    <li><strong>Downtown San Diego:</strong> High-rise construction, urban demolition, sidewalk and streetscape improvements, parking garage repairs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">County-Wide Service Coverage</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong><a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>:</strong> East County residential and commercial construction, strip mall renovations, industrial park development</li>
                    <li><strong>Otay Mesa:</strong> Border industrial zone, logistics facilities, warehouse construction, cross-border commerce infrastructure</li>
                    <li><strong><a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>:</strong> North County construction markets, retail development, residential demolition and renovation</li>
                    <li><strong>Harbor District:</strong> Maritime construction, port facilities, industrial waterfront projects, heavy equipment areas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-yellow-900">Proximity to Miramar Landfill = Lower Costs</h4>
                <p className="text-yellow-800 mb-2">
                  Our strategic San Diego County location near Miramar Landfill reduces transportation costs and time, which translates to better pricing for you compared to haulers from outside the county. Shorter haul distances mean:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                  <li>Lower transportation fuel costs passed to customers</li>
                  <li>Faster turnaround for same-day and urgent requests</li>
                  <li>Ability to handle multiple loads per day if needed</li>
                  <li>More competitive all-inclusive pricing</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Concrete Disposal Pricing & Weight Considerations</h3>
              <p className="text-lg text-gray-700 mb-4">
                Understanding concrete disposal pricing helps contractors and businesses budget accurately. Unlike lighter junk removal, concrete is extremely heavy—approximately 4,000 pounds per cubic yard—which affects both hauling equipment requirements and landfill disposal fees.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Our all-inclusive pricing ($100-$495 based on volume) includes all labor, specialized equipment for heavy materials, hauling and transportation, Miramar Landfill dump fees (tonnage-based), and disposal documentation. For context, DIY disposal at Miramar typically costs $70-$200+ in dump fees alone (depending on weight), plus truck rental ($75-$150), fuel, and your time. When you factor in the true cost of DIY, professional concrete disposal San Diego service often costs the same or less—with zero work required from you. See our <a href="/blog/san-diego-dump-fees-guide" className="text-blue-600 hover:underline">complete San Diego dump fees guide</a> for detailed cost comparisons.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Commercial Accounts & Volume Discounts</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>NET-30 payment terms for qualified contractors</li>
                    <li>Volume discounts for recurring monthly service</li>
                    <li>Priority scheduling for commercial clients</li>
                    <li>Dedicated account management and coordination</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Detailed invoicing with project codes</li>
                    <li>Disposal certificates for compliance documentation</li>
                    <li>Multi-project pricing packages available</li>
                    <li>After-hours service to avoid disrupting operations</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Contractors Choose Severin Cleaners</h3>
              <p className="mb-4">
                San Diego's construction industry requires reliable partners who understand project timelines, compliance requirements, and cost control. Our concrete disposal San Diego service combines industry expertise with professional standards to deliver dependable solutions for contractors and businesses.
              </p>

              <p className="mb-6">
                We specialize in working around active construction schedules, providing concrete disposal during off-hours when needed to avoid disrupting your project timeline. Our team coordinates with general contractors, property managers, and facilities teams to ensure seamless service delivery with full liability insurance coverage and proper documentation.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Same-Day Service Available:</strong> Call before 2 PM for same-day concrete disposal throughout San Diego County. Perfect for contractors on tight schedules or unexpected demolition needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Commercial Accounts Welcome:</strong> NET-30 payment terms, volume discounts, and dedicated account management for construction companies and contractors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Licensed & Insured:</strong> $2M liability coverage, proper licensing, and comprehensive insurance for your protection and peace of mind.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span><strong>Disposal Documentation:</strong> Certificates of disposal, weight tickets, and compliance documentation for your project records and regulatory requirements.</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Environmental Compliance & Concrete Recycling</h3>
                <p className="text-blue-800 mb-3">
                  Our <strong>concrete recycling San Diego</strong> efforts support environmental sustainability and LEED project requirements. Clean concrete is crushed and recycled into:
                </p>
                <ul className="text-blue-800 space-y-1">
                  <li>• Aggregate base material for road construction</li>
                  <li>• Fill material for new construction projects</li>
                  <li>• Landscape base and drainage applications</li>
                  <li>• Erosion control and slope stabilization</li>
                </ul>
                <p className="text-blue-800 mt-3">
                  We provide documentation showing whether your materials were recycled or landfilled—valuable for environmental compliance reporting and green building certifications.
                </p>
              </div>

                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Concrete Disposal"
                  nearbyLocations={relatedServices}
                  nearbyHeading="Related Services"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <LocationPricingSection
        locationName="Concrete Disposal"
        contextParagraph="Concrete disposal pricing based on volume and weight. Heavy materials require specialized equipment and tonnage-based disposal fees. All-inclusive pricing covers labor, equipment, hauling, and Miramar dump fees. Commercial accounts available with NET-30 terms."
      />

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Concrete Disposal" />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions - Concrete Disposal San Diego"
        description="Get answers to common questions about our concrete disposal San Diego services, pricing, materials accepted, and contractor accounts."
        faqs={concreteFAQs}
        ctaTitle="Ready for Professional Concrete Disposal?"
        ctaDescription="Our experienced team handles all types of concrete, asphalt, and heavy demolition materials. Call for a free quote and same-day service throughout San Diego County."
        includeSchema={false}
      />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Construction Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Complete demolition and construction debris removal for contractors</p>
            </a>
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600">Business cleanouts with flexible scheduling and commercial accounts</p>
            </a>
            <a href="/scrap-metal-removal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Scrap Metal Removal</h4>
              <p className="text-gray-600">Metal recycling and removal for industrial facilities</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
