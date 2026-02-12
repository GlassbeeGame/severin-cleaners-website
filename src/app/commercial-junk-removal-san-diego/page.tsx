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
  title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse | (619) 750-0114',
  description: 'Professional commercial junk removal San Diego. Office cleanouts, warehouse disposal, concrete disposal San Diego, retail renovations. Same-day service, licensed & insured. NET-30 terms available.',
  keywords: [
    'commercial junk removal san diego',
    'business junk removal san diego',
    'office cleanout san diego',
    'retail cleanout san diego',
    'warehouse junk removal san diego',
    'commercial debris removal san diego',
    'concrete disposal san diego',
    'business cleanout services',
    'office junk hauling san diego'
  ],
  openGraph: {
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts | Same-Day Service',
    description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
    url: 'https://www.severinhauling.com/commercial-junk-removal-san-diego',
    siteName: 'Severin Hauling',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Commercial Junk Removal San Diego - Severin Hauling'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts | Same-Day Service',
    description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.severinhauling.com/commercial-junk-removal-san-diego',
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

const commercialFAQs = [
  {
    question: "Do you provide after-hours or weekend commercial junk removal in San Diego?",
    answer: "Yes, we understand that business operations cannot be disrupted during regular hours. Our commercial junk removal San Diego service includes evening, weekend, and holiday scheduling to minimize impact on your business operations. We work with your schedule to ensure seamless service delivery."
  },
  {
    question: "Can you provide disposal documentation for compliance?",
    answer: "Absolutely. We provide comprehensive disposal documentation including certificates of disposal, chain of custody records, and environmental compliance reports. Our business junk removal San Diego service includes HIPAA-compliant document destruction and EPA-certified hazardous waste handling with full documentation."
  },
  {
    question: "Do you offer recurring services or contracts for businesses?",
    answer: "Yes, we offer flexible commercial contracts for recurring office cleanout San Diego services, including monthly warehouse cleanouts, quarterly office reorganizations, and ongoing retail maintenance. We provide volume discounts for qualified business accounts."
  },
  {
    question: "How quickly can you complete a large office or warehouse cleanout?",
    answer: "Timeline depends on project scope, but we typically complete small office cleanout San Diego projects in 2-4 hours, medium retail cleanouts in 4-8 hours, and large warehouse junk removal San Diego projects in 1-3 days. We provide detailed timelines during our free assessment and can expedite urgent projects."
  },
  {
    question: "What industries do you serve in San Diego?",
    answer: "We serve all industries including healthcare and medical offices, legal and professional services, technology and startups, manufacturing and warehouses, hospitality and tourism, retail and shopping centers. Our commercial debris removal San Diego team has specialized experience with industry-specific requirements and regulations."
  },
  {
    question: "Do you handle concrete disposal and heavy construction materials?",
    answer: "Yes, our concrete disposal San Diego service handles heavy materials including broken concrete, asphalt, brick, tile, and other masonry debris from commercial renovations, warehouse floor demolitions, and facility upgrades. We provide proper disposal of construction materials with full documentation and compliance with San Diego County regulations. This service is ideal for businesses undergoing parking lot repairs, loading dock renovations, or structural improvements."
  },
  {
    question: "What's the difference between commercial and residential junk removal pricing?",
    answer: "Our commercial junk removal San Diego pricing includes volume discounts for businesses, NET-30 payment terms for qualified commercial accounts, and flexible recurring service contracts for ongoing needs. Commercial projects often involve larger volumes, specialized disposal requirements (HIPAA compliance, data destruction, hazardous materials), and after-hours scheduling to minimize business disruption. We provide detailed invoicing with project breakdowns, disposal documentation for compliance, and dedicated account management for commercial clients. Volume-based pricing starts at $69 for small items and $100 for standard items, up to $495 for full loads, with additional discounts available for recurring monthly or quarterly service contracts."
  },
  {
    question: "How do you handle confidential documents and sensitive materials?",
    answer: "We take confidential material handling seriously for our business junk removal San Diego clients. All confidential documents receive secure handling with chain of custody documentation, HIPAA-compliant shredding through certified destruction partners, and certificates of destruction provided for your compliance records. For IT equipment containing sensitive data, we provide data destruction certification and EPA-certified e-waste recycling. Our crews sign confidentiality agreements when handling sensitive materials, and we can coordinate secure handling protocols with your facilities team. This makes us the trusted choice for legal firms, medical offices, financial institutions, and businesses with compliance requirements throughout San Diego County."
  },
  {
    question: "Can you coordinate with our property manager or facilities team?",
    answer: "Absolutely. Our office cleanout San Diego service includes full coordination with property managers, facilities teams, general contractors, and building management. We provide detailed project timelines, coordinate access and scheduling around building operations, communicate directly with your designated contacts, and adapt to your specific requirements including after-hours access, freight elevator reservations, and loading dock scheduling. For multi-location businesses, we assign dedicated account management to ensure consistency across all San Diego properties. We carry comprehensive liability insurance and provide certificates of insurance to property management as needed for building access and compliance."
  },
  {
    question: "Do you offer emergency commercial junk removal for urgent situations?",
    answer: "Yes, our commercial junk removal San Diego team provides emergency response for urgent business situations including same-day emergency service for critical operational needs, after-hours emergency response for flood, fire, or disaster cleanup, rapid deployment for health code violations or unexpected inspections, and urgent tenant turnover for immediate re-occupancy needs. Call <a href='tel:6197500114' className='text-blue-600 hover:underline font-semibold'>(619) 750-0114</a> for emergency service throughout San Diego County. We understand that business interruptions cost money, so we prioritize emergency commercial calls and can typically respond within 2-4 hours for urgent situations. Our <a href='/emergency-junk-removal-san-diego' className='text-blue-600 hover:underline'>emergency junk removal service</a> operates 7 days a week with extended hours to support San Diego businesses."
  }
];

export default function CommercialjunkremovalsandiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Commercial Junk Removal San Diego",
    description: "Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, concrete disposal San Diego, after-hours service, and commercial accounts.",
    url: "https://www.severinhauling.com/commercial-junk-removal-san-diego",
    serviceType: "Commercial Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  // Enhanced LocalBusiness schema for commercial services
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://www.severinhauling.com/commercial-junk-removal-san-diego#business",
    "name": "Severin Hauling - Commercial Junk Removal San Diego",
    "image": "https://www.severinhauling.com/og-image.jpg",
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
    "url": "https://www.severinhauling.com/commercial-junk-removal-san-diego",
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
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Cleanout San Diego",
            "description": "Professional office junk removal and cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouse Junk Removal San Diego",
            "description": "Large-scale warehouse and industrial cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Concrete Disposal San Diego",
            "description": "Commercial concrete and heavy material disposal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Cleanout San Diego",
            "description": "Store closure and retail renovation junk removal"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Commercial Junk Removal", url: "https://www.severinhauling.com/commercial-junk-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(commercialFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Office Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Construction Debris Removal", slug: "construction-debris-removal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Same Day Junk Removal", slug: "same-day-junk-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Commercial Junk Removal San Diego"
          subtitle="⭐⭐⭐⭐⭐ 5.0 Rating • Business Focused • Commercial Accounts Welcome"
          description="✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists"
        />

      {/* Main Content - NEW 2-COLUMN LAYOUT */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="prose prose-lg max-w-none">

                    <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Commercial Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                San Diego businesses require reliable, professional commercial junk removal San Diego services for office relocations, retail renovations, and ongoing business needs. Severin Hauling provides comprehensive business junk removal San Diego solutions with flexible scheduling, commercial account options, and deep understanding of business operations requirements.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From downtown high-rises to industrial complexes, our commercial debris removal San Diego service handles everything with minimal disruption to your operations. We provide <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">commercial junk removal in Kearny Mesa</a> business districts, <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a> industrial parks, and throughout the region. We specialize in office cleanout San Diego, retail cleanout San Diego, and warehouse junk removal San Diego projects of all sizes. We also provide <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">commercial construction cleanup</a>, concrete disposal San Diego for renovation projects, <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">office furniture removal</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">commercial equipment disposal</a>, and <a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">emergency commercial cleanup</a>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Business Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our commercial junk removal San Diego service handles everything from small office cleanouts to large-scale facility relocations. We understand that business operations cannot be disrupted, which is why we offer flexible scheduling including evenings and weekends to minimize impact on your daily operations.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need urgent retail junk removal in <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a> retail corridors or comprehensive warehouse cleanouts San Diego for <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a> industrial facilities, our team provides professional service with liability insurance, disposal documentation, and confidential handling of sensitive materials. We serve businesses throughout <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>, <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a>, <a href="/la-mesa-junk-removal" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, and <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Office Cleanout Services in San Diego</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Complete <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">office furniture removal</a> and workstation dismantling</li>
                    <li>Electronic equipment disposal with data destruction certification</li>
                    <li>Confidential document shredding and secure material handling</li>
                    <li>Conference room and reception area clearing</li>
                    <li>Break room <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance removal</a> and furniture disposal</li>
                    <li>IT equipment recycling with compliance documentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Retail & Restaurant Cleanouts</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Store fixture and display removal for renovations</li>
                    <li>Commercial kitchen equipment and appliance disposal</li>
                    <li>Inventory and merchandise disposal with documentation</li>
                    <li>Point-of-sale systems and technology removal</li>
                    <li>Storage room and back-of-house clearing</li>
                    <li>Shopping center and mall unit complete cleanouts</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Industrial & Warehouse Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Large-scale warehouse and distribution center cleanouts</li>
                    <li>Manufacturing equipment removal and scrap metal recycling</li>
                    <li>Industrial debris and machinery disposal</li>
                    <li><a href="/concrete-disposal-san-diego" className="text-blue-600 hover:underline">Concrete disposal San Diego</a> for warehouse floors, loading docks, and facility renovations</li>
                    <li>Loading dock and storage area clearing</li>
                    <li>Hazardous material handling with certified disposal</li>
                    <li>Emergency cleanout services for operational continuity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Technology & Startups</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Server room and data center equipment removal</li>
                    <li>Startup office relocations and downsizing</li>
                    <li>Tech equipment recycling with data security compliance</li>
                    <li>Flexible scheduling for 24/7 tech operations</li>
                    <li>Biotech and research facility specialized cleanouts</li>
                    <li>Venture capital property preparation services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Professional Standards</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our office cleanout San Diego service goes beyond simple junk removal. We provide comprehensive business solutions that include full liability insurance, proper disposal documentation, and confidential handling protocols to ensure seamless project completion while maintaining your business's professional standards.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-yellow-900">Professional Compliance & Documentation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                    <li>$2M liability insurance coverage for business protection</li>
                    <li>Certificate of disposal for regulatory compliance</li>
                    <li>HIPAA-compliant document destruction services</li>
                    <li>Confidentiality agreements for sensitive materials</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                    <li>EPA-certified hazardous waste handling</li>
                    <li>Data destruction certification for IT equipment</li>
                    <li>Chain of custody documentation</li>
                    <li>Environmental compliance reporting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3 text-gray-900">Business Account Benefits & Scheduling</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Priority scheduling for urgent business needs</li>
                    <li>Volume discounts for recurring services and contracts</li>
                    <li>Detailed invoicing with project breakdowns</li>
                    <li>NET-30 payment terms for qualified businesses</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>After-hours and weekend service to minimize downtime</li>
                    <li>Dedicated project management and coordination</li>
                    <li>Emergency response for urgent situations</li>
                    <li>Recurring maintenance contracts available</li>
                  </ul>
                </div>
              </div>


              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve in San Diego</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our business junk removal San Diego service spans multiple industries, each with unique requirements and regulatory challenges. From downtown high-rises to industrial complexes in Kearny Mesa, we have the specialized experience and commercial-grade equipment to handle any commercial debris removal San Diego project efficiently.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Healthcare & Medical</h5>
                  <p className="text-sm text-gray-600">Medical office cleanouts, dental practice relocations, clinic renovations with proper medical waste handling.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Legal & Professional</h5>
                  <p className="text-sm text-gray-600">Law firm relocations, accounting office cleanouts, confidential document destruction services.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Technology & Startups</h5>
                  <p className="text-sm text-gray-600">Tech company relocations, server room cleanouts, electronic equipment recycling and data destruction.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Manufacturing & Warehouse</h5>
                  <p className="text-sm text-gray-600">Industrial cleanouts, equipment removal, factory relocations, warehouse clearing services.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Hospitality & Tourism</h5>
                  <p className="text-sm text-gray-600">Hotel renovations, restaurant closures, event venue cleanouts, tourism industry support.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h5 className="font-bold text-blue-600 mb-2">Retail & Shopping</h5>
                  <p className="text-sm text-gray-600">Store closures, retail relocations, shopping center cleanouts, seasonal inventory disposal.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Service Areas Throughout San Diego</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our retail cleanout San Diego and warehouse junk removal San Diego services cover all major business districts and commercial areas throughout San Diego County. We understand the unique challenges of different business zones and provide tailored commercial junk removal San Diego solutions for each area's specific needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Major Business Districts</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Downtown San Diego:</strong> High-rise offices, financial district, Gaslamp Quarter businesses</li>
                    <li><strong>Mission Valley:</strong> Corporate headquarters, shopping centers, medical complexes</li>
                    <li><strong>UTC/<a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>:</strong> Tech companies, biotech firms, university research facilities, medical and dental office cleanouts</li>
                    <li><strong><a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>:</strong> Manufacturing, warehouses, automotive businesses, industrial junk removal including <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">scrap metal recycling</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Specialized Commercial Zones</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Airport Area:</strong> Logistics, cargo facilities, airport-related businesses</li>
                    <li><strong>Harbor District:</strong> Maritime businesses, port operations, shipping companies</li>
                    <li><strong>Sorrento Valley/<a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a>:</strong> Biotech corridor, research facilities, Torrey Hills business parks</li>
                    <li><strong>Miramar/<a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a>:</strong> Military contractors, aerospace companies, industrial parks, distribution centers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Downtown San Diego office buildings</li>
                  <li>Business parks and commercial complexes</li>
                  <li>Retail stores and shopping centers</li>
                  <li>Restaurants and hospitality venues</li>
                  <li>Medical and professional offices</li>
                  <li>Industrial and warehouse facilities</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Businesses Trust Severin Hauling</h3>
              <p className="mb-4">
                As a locally-owned business serving San Diego's commercial community, we understand the importance of treating your business property and operations with professionalism and care. Our commercial junk removal San Diego service combines local market knowledge with professional standards to deliver reliable business solutions. Learn more about our <a href="/blog/how-much-does-junk-removal-cost-san-diego" className="text-blue-600 hover:underline">transparent pricing structure</a> and why businesses choose us over <a href="/blog/dumpster-rental-san-diego-alternatives" className="text-blue-600 hover:underline">dumpster rental alternatives</a>.
              </p>

              <p className="mb-6">
                We specialize in working around your business schedule, providing office cleanout San Diego services during off-hours to minimize operational disruption. Our team coordinates with property managers, contractors, and facilities teams to ensure seamless project execution. Understanding <a href="/blog/san-diego-dump-fees-guide" className="text-blue-600 hover:underline">San Diego dump fees</a> helps explain why our all-inclusive pricing saves businesses money compared to DIY disposal.
              </p>

                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
              <div className="lg:col-span-1">
                <LocationSidebarCTA
                  locationName="Commercial Junk Removal"
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
        locationName="Commercial Junk Removal"
        contextParagraph="Professional commercial junk removal with flexible scheduling and transparent pricing. Volume-based pricing with no hidden fees, commercial accounts available with NET-30 terms for qualified businesses."
      />

      {/* Trust Signals Section */}
      <TrustSignalsSection locationName="Commercial Junk Removal" />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions - Commercial Junk Removal San Diego"
        description="Get answers to common questions about our commercial junk removal San Diego services, business scheduling, and professional cleanout process."
        faqs={commercialFAQs}
        ctaTitle="Still Have Questions About Commercial Junk Removal?"
        ctaDescription="Our experienced team is ready to answer any questions about our commercial junk removal San Diego services, provide detailed quotes, or schedule your business cleanout."
      />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Business Services</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Professional debris removal for renovations and tenant improvements</p>
            </a>
            <a href="/concrete-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Concrete Disposal San Diego</h4>
              <p className="text-gray-600">Heavy material disposal for contractors and commercial facilities</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Appliance Removal</h4>
              <p className="text-gray-600">Office and restaurant equipment removal with EPA compliance</p>
            </a>
            <a href="/furniture-disposal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Office Furniture Removal</h4>
              <p className="text-gray-600">Complete office furniture and workstation dismantling services</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}