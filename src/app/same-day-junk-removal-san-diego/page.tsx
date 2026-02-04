import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Same Day Junk Removal San Diego | Today Pickup | Severin Cleaners',
  description: 'Need junk removed TODAY? Fast same day junk removal in San Diego. Available 7 days, arrive within hours. Small items $69+, standard $100+. Call (619) 750-0114.',
  keywords: [
    'same day junk removal san diego',
    'same day junk pickup san diego',
    'junk removal san diego today',
    'fast junk removal san diego',
    'rapid junk removal san diego',
    'immediate junk removal san diego',
    'instant junk removal san diego',
    'quick junk removal san diego',
    'urgent junk removal san diego',
    'today junk pickup',
    'same day hauling san diego',
    'emergency junk removal san diego'
  ],
  openGraph: {
    title: 'Same Day Junk Removal San Diego | Today Pickup | Severin Cleaners',
    description: 'Need junk removed TODAY? Fast same day junk removal in San Diego. Available 7 days, arrive within hours. Small items $69+, standard $100+.',
    url: 'https://severincleaners.com/same-day-junk-removal-san-diego',
    siteName: 'Severin Cleaners',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Same Day Junk Removal San Diego - Severin Cleaners'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Same Day Junk Removal San Diego | Today Pickup',
    description: 'Need junk removed TODAY? Available 7 days, arrive within 2-4 hours. No rush fees. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://severincleaners.com/same-day-junk-removal-san-diego',
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

const sameDayFAQs = [
    {
      question: "How quickly can you arrive for same day junk removal?",
      answer: "We typically arrive within 2-4 hours for same day junk pickup San Diego requests. For immediate junk removal San Diego situations, call (619) 750-0114 and speak directly to our dispatch team. Book in the morning, and we can often arrive the same afternoon. Our local San Diego teams respond faster than national chains because we're right here in your community."
    },
    {
      question: "What items can be removed on a same day basis?",
      answer: "Our fast junk removal San Diego service handles virtually everything same-day: furniture, appliances, mattresses, construction debris, yard waste, electronics, and general household junk. We can remove single items or full truckloads today. The only items requiring advance scheduling are hazardous materials that need special permits. Everything else? We'll haul it today."
    },
    {
      question: "Do you offer same day service on weekends?",
      answer: "Yes! Our today junk removal San Diego service operates 7 days a week, including weekends and most holidays. Saturday and Sunday are our busiest days, so we recommend calling as early as possible for same-day weekend pickup. No extra fees for weekend service – same transparent pricing every day of the week."
    },
    {
      question: "Is same day junk removal more expensive?",
      answer: "No! We don't charge emergency fees or rush charges for immediate junk removal San Diego. Same day service costs exactly the same as scheduling for next week. Our pricing starts at $69 for small items and $100 for standard items, up to $495 for a full trailer load. Unlike some competitors, we believe in transparent pricing without penalizing customers who need urgent service."
    },
    {
      question: "What areas in San Diego qualify for same day service?",
      answer: "We provide quick junk removal San Diego county-wide! Priority same-day service zones include La Jolla, Pacific Beach, Chula Vista, El Cajon, Oceanside, and all central San Diego neighborhoods. Even North County and South Bay areas get same-day service when you call before 2 PM. Being locally based means faster response than national franchises operating from outside the county."
    },
    {
      question: "What's the latest I can call for same day pickup?",
      answer: "For guaranteed same day junk pickup San Diego, call before 2 PM. However, we often accommodate later calls depending on crew availability and location. It never hurts to call – even if it's 4 PM, we'll do everything possible to get there today. Our goal is to solve your junk problem NOW, not make you wait until tomorrow."
    },
    {
      question: "Can you handle emergency cleanouts the same day?",
      answer: "Absolutely. Our rapid junk removal San Diego team specializes in emergency situations: last-minute move-outs, property inspection deadlines, HOA violations, and urgent estate cleanouts. We bring extra crew members for large same-day projects to ensure completion within hours. Don't wait days – we'll handle your emergency cleanout TODAY."
    },
    {
      question: "Do I need to sort items for same day removal?",
      answer: "No sorting required! Our instant junk removal San Diego service handles everything as-is. Just point to what goes, and we'll load it up. We understand same-day situations are often urgent – you don't have time to organize. That's why our full-service approach includes all the heavy lifting, sorting during disposal, and complete cleanup. You relax while we work."
    }
  ];

export default function SameDayJunkRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Same Day Junk Removal San Diego",
    description: "Fast same day junk removal in San Diego. Available 7 days, arrive within hours. No rush fees. Small items $69+, standard $100+.",
    url: "https://severincleaners.com/same-day-junk-removal-san-diego",
    serviceType: "Same Day Junk Removal",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Same Day Junk Removal", url: "https://severincleaners.com/same-day-junk-removal-san-diego" },
  ]);

  const faqSchema = generateFAQSchema(sameDayFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema]
  };

  const relatedServices = [
    { name: "Emergency Junk Removal", slug: "emergency-junk-removal-san-diego" },
    { name: "Furniture Removal", slug: "furniture-disposal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
      <main>
        <OptimizedGradientHero
          title="Same Day Junk Removal San Diego"
          subtitle="Call Now, We'll Be There This Afternoon • Arrive in 2-4 Hours • 7 Days a Week"
          description="✓ No Rush Fees ✓ Same Day Guarantee ✓ Licensed & Insured"
        />

        {/* Main Content with Sidebar - NEW 2-COLUMN LAYOUT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN - Main Content (lg:col-span-2) */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Introduction */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Same-Day Junk Removal San Diego – Get Service Today
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Same day junk removal San Diego means exactly that—service the same day you call. Our same day junk pickup San Diego team responds within 2-4 hours when you call before 2 PM. We provide junk removal San Diego today for homeowners and businesses in <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a>, <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a>, <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a>, and throughout the county.
                    </p>

                    <p className="text-gray-700 mb-6">
                      When you need fast junk removal San Diego that actually shows up today, we've got you covered. Unlike national chains that book you out days or weeks, we're local teams positioned throughout San Diego County. We serve <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a>, <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a>, and <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a>. That means rapid junk removal San Diego without the wait—we dispatch immediately and arrive the same afternoon.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our immediate junk removal San Diego service handles urgent situations where every hour counts in <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a>, <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a>, <a href="/junk-removal-kearny-mesa" className="text-blue-600 hover:underline">Kearny Mesa</a>, and <a href="/junk-removal-clairemont" className="text-blue-600 hover:underline">Clairemont</a>. Contractor coming tomorrow? New furniture arriving this afternoon? Landlord inspection in hours? We provide instant junk removal San Diego when you need it most.
                    </p>

                    {/* How Fast Can We Get There */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Fast Can We Get There?</h3>
                    <p className="text-gray-700 mb-4">
                      Our quick junk removal San Diego service is built around speed and responsiveness.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="font-bold text-blue-600 mr-3">✓</span>
                          <span><strong>Call before 2 PM:</strong> Guaranteed same-day pickup</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold text-blue-600 mr-3">✓</span>
                          <span><strong>Typical arrival time:</strong> 2-4 hours from when you call</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold text-blue-600 mr-3">✓</span>
                          <span><strong>Weekend & holiday service:</strong> Available 7 days a week</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold text-blue-600 mr-3">✓</span>
                          <span><strong>No rush fees:</strong> Same pricing as scheduled service</span>
                        </li>
                      </ul>
                    </div>

                    {/* What We Remove Same Day */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove Same Day</h3>
                    <p className="text-gray-700 mb-4">
                      Our same-day service handles virtually everything from single items to full cleanouts.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Common Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Furniture (couches, mattresses, dressers)</li>
                          <li>• Appliances (refrigerators, washers, dryers)</li>
                          <li>• Electronics and e-waste</li>
                          <li>• Garage and basement cleanouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Larger Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Construction materials and debris</li>
                          <li>• Hot tubs and pool equipment</li>
                          <li>• Office furniture and equipment</li>
                          <li>• Estate cleanouts</li>
                        </ul>
                      </div>
                    </div>

                    {/* Why We're Faster */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why We're Faster Than National Chains</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          <span><strong>Local teams:</strong> Based in San Diego, not routing from Orange County or LA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          <span><strong>Flexible scheduling:</strong> Not locked into corporate booking systems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          <span><strong>Same-day priority:</strong> We built our business around it</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          <span><strong>Direct communication:</strong> Talk to the team, not a call center</span>
                        </li>
                      </ul>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Same-Day Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Call Right Now:</strong> Speak directly with our team at (619) 750-0114. Get an upfront quote in minutes.</li>
                        <li><strong>2. We Dispatch Immediately:</strong> Accept the quote and we send the nearest team. You'll get a 2-hour arrival window—usually 2-4 hours from now.</li>
                        <li><strong>3. Done This Afternoon:</strong> We load everything, haul it away, and clean up. Your junk is gone and your space is clear—today.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Same-Day Service</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Genuine Same-Day Service:</strong> We're local teams positioned throughout San Diego County. When you call before 2 PM, we guarantee same-day service. Average arrival time is 2-4 hours—not days or weeks like national chains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>No Rush Fees:</strong> Same-day service shouldn't cost extra. Our pricing stays the same whether you book today or next week. Transparent pricing with no hidden charges for urgent service.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Available 7 Days a Week:</strong> Weekends, holidays, whenever you need us. We provide the same rapid response every day of the week with no extra weekend fees or holiday surcharges.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. Same fast service with proper coverage and protection for your property.</span>
                      </li>
                    </ul>

                    {/* Service Areas */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Same-Day Service Throughout San Diego County</h3>
                    <p className="text-gray-700 mb-4">
                      We provide same-day junk removal service throughout San Diego County. Local teams mean faster response wherever you're located. Services include <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliance removal</a>, <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">hot tub removal</a>, <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal</a>, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout</a>, and <a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">emergency service</a>.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <ul className="space-y-1 text-gray-700">
                        <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a></li>
                        <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a></li>
                        <li>• <a href="/junk-removal-del-mar" className="text-blue-600 hover:underline">Del Mar</a></li>
                        <li>• <a href="/junk-removal-north-park" className="text-blue-600 hover:underline">North Park</a></li>
                        <li>• <a href="/junk-removal-hillcrest" className="text-blue-600 hover:underline">Hillcrest</a></li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a></li>
                        <li>• <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a></li>
                        <li>• <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a></li>
                        <li>• <a href="/junk-removal-chula-vista" className="text-blue-600 hover:underline">Chula Vista</a></li>
                        <li>• <a href="/junk-removal-poway" className="text-blue-600 hover:underline">Poway</a></li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <a href="/junk-removal-oceanside" className="text-blue-600 hover:underline">Oceanside</a></li>
                        <li>• <a href="/junk-removal-escondido" className="text-blue-600 hover:underline">Escondido</a></li>
                        <li>• <a href="/junk-removal-vista" className="text-blue-600 hover:underline">Vista</a></li>
                        <li>• <a href="/junk-removal-carmel-valley" className="text-blue-600 hover:underline">Carmel Valley</a></li>
                        <li>• <a href="/junk-removal-rancho-santa-fe" className="text-blue-600 hover:underline">Rancho Santa Fe</a></li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Same-Day Service"
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
          locationName="Same-Day Junk Removal"
          contextParagraph="Same-day service with no rush fees. Whether you need junk removed today or next week, our pricing stays the same—transparent and based on volume with all labor, hauling, and disposal included."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Same-Day Junk Removal" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Same Day Junk Removal"
          description="Get answers to common questions about our same-day junk removal San Diego service and urgent pickup options."
          faqs={sameDayFAQs}
          ctaTitle="Need Same-Day Junk Removal Now?"
          ctaDescription="Our same-day junk removal San Diego team is ready to help. Call now for immediate service and fast response times."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Junk Removal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/junk-removal-cost-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Junk Removal Pricing</h4>
                <p className="text-gray-600">Transparent pricing guide and cost information for all junk removal services</p>
              </a>
              <a href="/san-diego-junk-removal" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">San Diego Junk Removal</h4>
                <p className="text-gray-600">Complete junk removal services throughout San Diego County</p>
              </a>
              <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Junk Removal</h4>
                <p className="text-gray-600">24/7 emergency cleanup and urgent junk removal services</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
