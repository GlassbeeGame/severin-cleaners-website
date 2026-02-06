import type { Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet",
  description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers. Call (619) 750-0114!",
  keywords: [
    "foreclosure cleanout San Diego",
    "eviction cleanout San Diego",
    "foreclosure junk removal San Diego",
    "eviction junk removal San Diego",
    "property cleanout San Diego",
    "REO property cleanup",
    "tenant cleanout San Diego",
    "property management cleanouts",
    "bank foreclosure cleanup"
  ],
  openGraph: {
    title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet",
    description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers.",
    url: 'https://www.severinhauling.com/foreclosure-eviction-cleanout-san-diego',
    siteName: 'Severin Hauling',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://www.severinhauling.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Foreclosure & Eviction Cleanout San Diego - Severin Hauling'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Foreclosure & Eviction Cleanout Services San Diego",
    description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers.",
    images: ['https://www.severinhauling.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.severinhauling.com/foreclosure-eviction-cleanout-san-diego",
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

const foreclosureFAQs = [
    {
      question: "What are your foreclosure and eviction cleanout prices?",
      answer: "Our foreclosure junk removal San Diego and eviction junk removal San Diego pricing is based on volume: Small Items: $69+ • Standard Items: $100+, 1/4 Trailer Load: $249 (3 cubic yards), 3/8 Trailer Load: $319, 1/2 Trailer Load: $349 (6 cubic yards), 5/8 Trailer Load: $366, 3/4 Trailer Load: $429, 7/8 Trailer Load: $462, Full Trailer Load: $495 (12 cubic yards). All prices include labor, hauling, proper disposal, and cleanup. We provide detailed documentation for banks and property managers when requested."
    },
    {
      question: "How quickly can you clear a foreclosure or eviction property?",
      answer: "We offer same-day service for urgent property cleanout San Diego situations and typically complete most residential cleanouts within 24-48 hours. Our team works efficiently to meet tight deadlines for banks, landlords, and property managers."
    },
    {
      question: "Can you handle large or multi-unit properties?",
      answer: "Yes, we have the crew capacity and equipment to handle everything from single-family homes to large apartment complexes and commercial properties. We scale our team size based on project scope for efficient completion."
    },
    {
      question: "Is your foreclosure cleanout service discreet?",
      answer: "Absolutely. Our teams work with professionalism and respect for all parties involved. We provide unmarked vehicles when requested and ensure all junk hauling work is conducted discreetly to maintain neighborhood relations."
    },
    {
      question: "Do you provide documentation for banks and landlords?",
      answer: "Yes, we provide comprehensive documentation including detailed invoices, before and after photos, itemized removal lists, and disposal certificates. We understand financial institution requirements and ensure all paperwork meets their standards."
    }
  ];

export default function ForeclosureEvictionCleanoutPage() {
  const serviceSchema = generateServiceSchema({
    name: "Foreclosure & Eviction Cleanout San Diego",
    description: "Professional foreclosure and eviction cleanout services for banks, landlords, and property managers. Discreet, fast turnaround service.",
    url: "https://www.severinhauling.com/foreclosure-eviction-cleanout-san-diego",
    serviceType: "Foreclosure Cleanout Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.severinhauling.com" },
    { name: "Services", url: "https://www.severinhauling.com/services" },
    { name: "Foreclosure & Eviction Cleanout", url: "https://www.severinhauling.com/foreclosure-eviction-cleanout-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(foreclosureFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Estate Cleanout", slug: "/estate-cleanout-san-diego" },
    { name: "Property Cleanout", slug: "/cleanout-services-san-diego" },
    { name: "Same-Day Junk Removal", slug: "/same-day-junk-removal-san-diego" },
    { name: "Commercial Cleanout", slug: "/commercial-junk-removal-san-diego" }
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Foreclosure & Eviction Cleanout San Diego"
          subtitle="Discreet, Fast Turnaround • Property Managers & Banks • Licensed & Insured"
          description="Professional cleanout services • Same-day available • Serving all San Diego County"
        />

        {/* Main Content with Sidebar - 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Discreet Cleanout Services You Can Trust
                    </h2>
                    <p className="text-lg mb-6 text-gray-700">
                      Foreclosure and eviction cleanouts are sensitive situations. We handle every project with professionalism and respect for all parties involved.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Privacy</h3>
                        <p className="text-sm text-gray-600">Unmarked vehicles available upon request to maintain neighborhood discretion during sensitive cleanouts</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Respectful Crews</h3>
                        <p className="text-sm text-gray-600">Trained professionals who understand the emotional nature of these situations and work with compassion</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Standards</h3>
                        <p className="text-sm text-gray-600">Licensed, insured, and bonded service with strict confidentiality protocols for all property cleanouts</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Fast Turnaround for Sensitive Timelines</h3>
                    <p className="text-gray-700 mb-4">
                      These projects often have strict deadlines. We meet urgent court orders, bank requirements, and landlord timelines. Our team is ready when you need us.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">⚡ Emergency Response</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Same-day service available for urgent situations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Next-day scheduling for most property cleanouts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Weekend and evening availability when needed</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">📋 Deadline Compliance</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Court-ordered cleanout deadlines met reliably</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Bank and REO property requirements fulfilled</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>Property manager schedules accommodated</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Trusted by Property Managers & Realtors</h3>
                    <p className="text-gray-700 mb-4">
                      We work with property managers and realtors across San Diego. Our reliable service helps with tenant turnovers and property prep. Fast, professional results every time. For probate and estate situations, visit our <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout services</a>. We also offer <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial property cleanouts</a> and full <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">property cleanout</a> services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <h4 className="font-bold text-gray-900 mb-2">Landlord Services</h4>
                        <p className="text-sm text-gray-600">Quick tenant turnover cleanouts to minimize vacancy periods and maximize rental income</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <h4 className="font-bold text-gray-900 mb-2">Realtor Support</h4>
                        <p className="text-sm text-gray-600">Property staging preparation and listing-ready cleanouts for faster sales and showings</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <h4 className="font-bold text-gray-900 mb-2">Multi-Unit Properties</h4>
                        <p className="text-sm text-gray-600">Comprehensive cleanouts for apartment complexes, condos, and multi-family properties</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Experience with Banks & REO Properties</h3>
                    <p className="text-gray-700 mb-4">
                      We have years of experience with foreclosed and bank-owned properties. Our service meets all lending institution requirements. We prepare properties for quick resale.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-3">🏦 Bank Requirements</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span><strong>Documentation & Compliance:</strong> Complete photo documentation, detailed invoices, and compliance with all banking protocols</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span><strong>Secure & Insured Service:</strong> Full licensing, bonding, and insurance coverage to protect financial institutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">→</span>
                            <span><strong>Timeline Adherence:</strong> Strict deadline compliance for asset management and resale preparation schedules</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-3">🏠 REO Preparation</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">→</span>
                            <span><strong>Market-Ready Condition:</strong> Complete property cleanouts that prepare foreclosed homes for immediate market listing</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">→</span>
                            <span><strong>Clear Debris for Property Access:</strong> Remove junk and debris to allow proper property inspections and evaluations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">→</span>
                            <span><strong>Value Preservation:</strong> Protect property value through careful, professional cleanout practices</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove from Foreclosure & Eviction Properties</h3>
                    <p className="text-gray-700 mb-4">
                      Our comprehensive cleanout services handle all types of belongings and debris commonly found in foreclosure and eviction situations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">🏠 Interior Items</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Furniture of all sizes (sofas, beds, tables, chairs)</li>
                          <li>• Appliances (refrigerators, washers, dryers, stoves)</li>
                          <li>• Personal belongings and clothing</li>
                          <li>• Electronics and entertainment systems</li>
                          <li>• Household goods and kitchen items</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 text-gray-900">🌿 Exterior & Misc Items</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Yard debris and landscaping materials</li>
                          <li>• Construction or renovation leftovers</li>
                          <li>• Garage and storage items</li>
                          <li>• Trash and general debris</li>
                          <li>• Hot tubs, pools, and outdoor equipment</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Our Foreclosure & Eviction Cleanout Process</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">1. Initial Consultation & Free Quote</h4>
                        <p className="text-gray-700 text-sm">Contact us for a free, detailed estimate. We can provide quotes over the phone or visit the property for larger cleanouts. All quotes include transparent pricing with no hidden fees.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">2. Flexible Scheduling & Coordination</h4>
                        <p className="text-gray-700 text-sm">We work around your timeline, whether it's same-day emergency service, next-day scheduling, or planned cleanouts. Coordination with property managers, banks, and legal teams as needed.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">3. Efficient & Discreet Removal</h4>
                        <p className="text-gray-700 text-sm">Our professional crews arrive on time with all necessary equipment. We work efficiently to complete cleanouts quickly while maintaining respect for the property and neighborhood.</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">4. Eco-Friendly Disposal & Documentation</h4>
                        <p className="text-gray-700 text-sm">Items are sorted for donation, recycling, or proper disposal. We provide complete documentation including before/after photos, itemized receipts, and disposal certificates when required.</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Service Areas Throughout San Diego County</h3>
                    <p className="text-gray-700 mb-4">
                      We serve property managers, banks, landlords, and families throughout San Diego County including <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>, <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a>, and <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline">Lakeside</a>. Our cleanout services cover all neighborhoods. Fast, professional service is our standard. We handle both small and large properties. Every client receives the same reliable care and attention.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-sm text-gray-700">
                      <div>• Downtown San Diego</div>
                      <div>• North Park</div>
                      <div>• Hillcrest</div>
                      <div>• La Jolla</div>
                      <div>• Pacific Beach</div>
                      <div>• Mission Valley</div>
                      <div>• Chula Vista</div>
                      <div>• Clairemont</div>
                      <div>• Point Loma</div>
                      <div>• El Cajon</div>
                      <div>• La Mesa</div>
                      <div>• Santee</div>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Foreclosure & Eviction Cleanout"
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
          locationName="Foreclosure & Eviction Cleanout"
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Foreclosure & Eviction Cleanout" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Foreclosure & Eviction Cleanout"
          description="Get answers to common questions about our foreclosure cleanout San Diego and eviction cleanout San Diego services."
          faqs={foreclosureFAQs}
          ctaTitle="Need Fast Foreclosure or Eviction Cleanout?"
          ctaDescription="Our professional team is ready to help with foreclosure cleanout San Diego and eviction cleanout San Diego services. Fast, discreet, and thorough."
          includeSchema={false}
        />
      </main>
      <Footer />
    </>
  );
}

/* SEO Metadata:
Meta Title: "Foreclosure & Eviction Cleanout Services San Diego - Fast & Discreet"
Meta Description: "Professional foreclosure & eviction cleanout services in San Diego. Discreet, fast turnaround for banks, landlords & property managers. Call (619) 750-0114!"
Suggested URL: /foreclosure-eviction-cleanout-san-diego

Word Count: ~850 words
Focus Keywords:
- foreclosure cleanout San Diego
- eviction cleanout services
- REO property cleanup
- tenant cleanout San Diego
- property management cleanouts
- bank foreclosure cleanup
*/