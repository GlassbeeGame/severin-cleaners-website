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
  title: 'Commercial Junk Removal San Diego | Office & Retail',
  description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
  keywords: [
    'commercial junk removal san diego',
    'business junk removal san diego',
    'office cleanout san diego',
    'retail cleanout san diego',
    'warehouse junk removal san diego',
    'commercial debris removal san diego',
    'business cleanout services',
    'office junk hauling san diego'
  ],
  openGraph: {
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts | Same-Day Service',
    description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/commercial-junk-removal-san-diego',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Commercial Junk Removal San Diego - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts | Same-Day Service',
    description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/commercial-junk-removal-san-diego',
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

const commercialFAQs = [
  {
    question: "Do you provide after-hours or weekend commercial junk removal in San Diego?",
    answer: "Yes, we understand that business operations cannot be disrupted during regular hours. Our <strong>commercial junk removal San Diego</strong> service includes evening, weekend, and holiday scheduling to minimize impact on your business operations. We work with your schedule to ensure seamless service delivery."
  },
  {
    question: "Can you provide disposal documentation for compliance?",
    answer: "Absolutely. We provide comprehensive disposal documentation including certificates of disposal, chain of custody records, and environmental compliance reports. Our <strong>business junk removal San Diego</strong> service includes HIPAA-compliant document destruction and EPA-certified hazardous waste handling with full documentation."
  },
  {
    question: "Do you offer recurring services or contracts for businesses?",
    answer: "Yes, we offer flexible commercial contracts for recurring <strong>office cleanout San Diego</strong> services, including monthly warehouse cleanouts, quarterly office reorganizations, and ongoing retail maintenance. We provide volume discounts for qualified business accounts."
  },
  {
    question: "How quickly can you complete a large office or warehouse cleanout?",
    answer: "Timeline depends on project scope, but we typically complete small <strong>office cleanout San Diego</strong> projects in 2-4 hours, medium retail cleanouts in 4-8 hours, and large <strong>warehouse junk removal San Diego</strong> projects in 1-3 days. We provide detailed timelines during our free assessment and can expedite urgent projects."
  },
  {
    question: "What industries do you serve in San Diego?",
    answer: "We serve all industries including healthcare and medical offices, legal and professional services, technology and startups, manufacturing and warehouses, hospitality and tourism, retail and shopping centers. Our <strong>commercial debris removal San Diego</strong> team has specialized experience with industry-specific requirements and regulations."
  }
];

export default function CommercialjunkremovalsandiegoPage() {
  const serviceSchema = generateServiceSchema({
    name: "Commercial Junk Removal San Diego",
    description: "Professional commercial junk removal for offices, retail stores, warehouses. Business cleanouts with disposal documentation and after-hours service.",
    url: "https://severincleaners.com/commercial-junk-removal-san-diego",
    serviceType: "Commercial Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Commercial Junk Removal", url: "https://severincleaners.com/commercial-junk-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(commercialFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Office Furniture Removal", slug: "furniture-removal-san-diego" },
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
                San Diego businesses require reliable, professional <strong>commercial junk removal San Diego</strong> services for office relocations, retail renovations, and ongoing business needs. Severin Cleaners provides comprehensive <strong>business junk removal San Diego</strong> solutions with flexible scheduling, commercial account options, and deep understanding of business operations requirements.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From downtown high-rises to industrial complexes, our <strong>commercial debris removal San Diego</strong> service handles everything with minimal disruption to your operations. We provide <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">commercial junk removal in Kearny Mesa</a> business districts, <a href="/junk-removal-mira-mesa" className="text-blue-600 hover:underline">Mira Mesa</a> industrial parks, and throughout the region. We specialize in <strong>office cleanout San Diego</strong>, <strong>retail cleanout San Diego</strong>, and <strong>warehouse junk removal San Diego</strong> projects of all sizes. We also provide <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">commercial construction cleanup</a>, <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">office furniture removal</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">commercial equipment disposal</a>, and <a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">emergency commercial cleanup</a>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Business Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our <strong>commercial junk removal San Diego</strong> service handles everything from small office cleanouts to large-scale facility relocations. We understand that business operations cannot be disrupted, which is why we offer flexible scheduling including evenings and weekends to minimize impact on your daily operations.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need urgent <strong>retail junk removal</strong> in <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a> retail corridors or comprehensive <strong>warehouse cleanouts San Diego</strong> for <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a> industrial facilities, our team provides professional service with liability insurance, disposal documentation, and confidential handling of sensitive materials. We serve businesses throughout <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, and <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Office Cleanout Services in San Diego</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Complete office furniture removal and workstation dismantling</li>
                    <li>Electronic equipment disposal with data destruction certification</li>
                    <li>Confidential document shredding and secure material handling</li>
                    <li>Conference room and reception area clearing</li>
                    <li>Break room appliance and furniture removal</li>
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
                Our <strong>office cleanout San Diego</strong> service goes beyond simple junk removal. We provide comprehensive business solutions that include full liability insurance, proper disposal documentation, and confidential handling protocols to ensure seamless project completion while maintaining your business's professional standards.
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
                Our <strong>business junk removal San Diego</strong> service spans multiple industries, each with unique requirements and regulatory challenges. From downtown high-rises to industrial complexes in Kearny Mesa, we have the specialized experience and commercial-grade equipment to handle any <strong>commercial debris removal San Diego</strong> project efficiently.
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
                Our <strong>retail cleanout San Diego</strong> and <strong>warehouse junk removal San Diego</strong> services cover all major business districts and commercial areas throughout San Diego County. We understand the unique challenges of different business zones and provide tailored <strong>commercial junk removal San Diego</strong> solutions for each area's specific needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Major Business Districts</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Downtown San Diego:</strong> High-rise offices, financial district, Gaslamp Quarter businesses</li>
                    <li><strong>Mission Valley:</strong> Corporate headquarters, shopping centers, medical complexes</li>
                    <li><strong>UTC/<a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>:</strong> Tech companies, biotech firms, university research facilities, medical and dental office cleanouts</li>
                    <li><strong><a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>:</strong> Manufacturing, warehouses, automotive businesses, industrial junk removal</li>
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Businesses Trust Severin Cleaners</h3>
              <p className="mb-4">
                As a locally-owned business serving San Diego's commercial community, we understand the importance of treating your business property and operations with professionalism and care. Our <strong>commercial junk removal San Diego</strong> service combines local market knowledge with professional standards to deliver reliable business solutions.
              </p>

              <p className="mb-6">
                We specialize in working around your business schedule, providing <strong>office cleanout San Diego</strong> services during off-hours to minimize operational disruption. Our team coordinates with property managers, contractors, and facilities teams to ensure seamless project execution.
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
        description="Get answers to common questions about our <strong>commercial junk removal San Diego</strong> services, business scheduling, and professional cleanout process."
        faqs={commercialFAQs}
        ctaTitle="Still Have Questions About Commercial Junk Removal?"
        ctaDescription="Our experienced team is ready to answer any questions about our <strong>commercial junk removal San Diego</strong> services, provide detailed quotes, or schedule your business cleanout."
      />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Business Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal San Diego</h4>
              <p className="text-gray-600">Professional debris removal for renovations and tenant improvements</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Appliance Removal</h4>
              <p className="text-gray-600">Office and restaurant equipment removal with EPA compliance</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
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