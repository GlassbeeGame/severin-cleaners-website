import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommercialFAQSection from "./CommercialFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Commercial Junk Removal San Diego | Office & Retail',
  description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
  keywords: 'commercial junk removal san diego, business junk removal san diego, office cleanout san diego, retail cleanout san diego, warehouse junk removal san diego, commercial debris removal san diego',
  openGraph: {
    title: 'Commercial Junk Removal San Diego | Office, Retail & Warehouse Cleanouts | Same-Day Service',
    description: 'Professional commercial junk removal San Diego for offices, retail stores, warehouses. Business cleanouts with disposal documentation, after-hours service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/commercial-junk-removal-san-diego',
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
};

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

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
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
              ✓ Commercial and business cleanup specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Junk Removal San Diego
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Business Focused • Commercial Accounts Welcome
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
                Get Business Junk Removal Quote - Save 15%
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">San Diego Commercial Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                San Diego businesses require reliable, professional <strong>commercial junk removal San Diego</strong> services for office relocations, retail renovations, and ongoing business needs. Severin Cleaners provides comprehensive <strong>business junk removal San Diego</strong> solutions with flexible scheduling, commercial account options, and deep understanding of business operations requirements.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From downtown high-rises to industrial complexes in Kearny Mesa, our <strong>commercial debris removal San Diego</strong> service handles everything with minimal disruption to your operations. We specialize in <strong>office cleanout San Diego</strong>, <strong>retail cleanout San Diego</strong>, and <strong>warehouse junk removal San Diego</strong> projects of all sizes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Business Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our <strong>commercial junk removal San Diego</strong> service handles everything from small office cleanouts to large-scale facility relocations. We understand that business operations cannot be disrupted, which is why we offer flexible scheduling including evenings and weekends to minimize impact on your daily operations.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need urgent <strong>retail junk removal</strong> for a store renovation or comprehensive <strong>warehouse cleanouts San Diego</strong> for industrial facilities, our team provides professional service with liability insurance, disposal documentation, and confidential handling of sensitive materials.
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparent Commercial Pricing</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our commercial junk removal pricing is based on volume removed. We provide upfront quotes with no hidden fees, allowing you to budget accurately for your business cleanup projects.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM</p>
                    <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                    <p className="text-sm text-blue-700">Starting at</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-600 mb-2">1/4 TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                    <p className="text-sm text-green-700">3 cubic yards</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-600 mb-2">1/2 TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                    <p className="text-sm text-purple-700">6 cubic yards</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-2">FULL TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                    <p className="text-sm text-orange-700">12 cubic yards</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">3/8 Trailer Load (4.5 cubic yards)</span>
                    <span className="text-xl font-bold text-gray-900">$319</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">5/8 Trailer Load (7.5 cubic yards)</span>
                    <span className="text-xl font-bold text-gray-900">$366</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">3/4 Trailer Load (9 cubic yards)</span>
                    <span className="text-xl font-bold text-gray-900">$429</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-300">
                    <span className="font-semibold text-gray-700">7/8 Trailer Load (10.5 cubic yards)</span>
                    <span className="text-xl font-bold text-gray-900">$462</span>
                  </div>
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
                    <li><strong>UTC/La Jolla:</strong> Tech companies, biotech firms, university research facilities</li>
                    <li><strong>Kearny Mesa:</strong> Manufacturing, warehouses, automotive businesses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Specialized Commercial Zones</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>Airport Area:</strong> Logistics, cargo facilities, airport-related businesses</li>
                    <li><strong>Harbor District:</strong> Maritime businesses, port operations, shipping companies</li>
                    <li><strong>Sorrento Valley:</strong> Biotech corridor, research and development facilities</li>
                    <li><strong>Miramar:</strong> Military contractors, aerospace companies, industrial parks</li>
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

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Commercial Junk Removal in San Diego?</p>
                    <p className="text-sm opacity-90">Free business quotes • After-hours service • Licensed & insured</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Businesses Trust Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business serving San Diego's commercial community, we understand the importance of treating your business property and operations with professionalism and care. Our <strong>commercial junk removal San Diego</strong> service combines local market knowledge with professional standards to deliver reliable business solutions.
              </p>

              <p className="mb-6">
                We specialize in working around your business schedule, providing <strong>office cleanout San Diego</strong> services during off-hours to minimize operational disruption. Our team coordinates with property managers, contractors, and facilities teams to ensure seamless project execution.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get a Contractor Quote for Your Business Cleanout Today</h3>
                <p className="text-lg mb-6">
                  Professional commercial service with local expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ San Diego Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off Business Bookings</strong> • <strong>Commercial Account Special</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • After-hours service • Commercial specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommercialFAQSection />

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">200+</p>
                <p className="text-sm text-gray-600">Cleanout & Hauling Projects Completed</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">Licensed</p>
                <p className="text-sm text-gray-600">& Insured</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">Same-Day</p>
                <p className="text-sm text-gray-600">Service Available</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">Serving All</p>
                <p className="text-sm text-gray-600">San Diego</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      </div>
    </>
  );
}