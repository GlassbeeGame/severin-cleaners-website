import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SameDayFAQSection from "../same-day-junk-removal-san-diego/SameDayFAQSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'TEST - Same Day Junk Removal San Diego | Today Pickup | Severin Cleaners',
  description: 'TEST PAGE - Need junk removed TODAY? Fast same day junk removal in San Diego. Available 7 days, arrive within hours. Call (619) 750-0114 for immediate pickup.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SameDayJunkRemovalTestPage() {
  const serviceSchema = generateServiceSchema({
    name: "Same Day Junk Removal San Diego",
    description: "Fast same day junk removal in San Diego. Available 7 days, arrive within hours. No rush fees. Starting at $100.",
    url: "https://severincleaners.com/same-day-junk-removal-san-diego",
    serviceType: "Same Day Junk Removal",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Same Day Junk Removal", url: "https://severincleaners.com/same-day-junk-removal-san-diego" },
  ]);

  const relatedServices = [
    { name: "Emergency Junk Removal", slug: "emergency-junk-removal-san-diego" },
    { name: "Furniture Removal", slug: "furniture-removal-san-diego" },
    { name: "Appliance Removal", slug: "appliance-removal-san-diego" },
    { name: "Hot Tub Removal", slug: "hot-tub-removal-san-diego" },
  ];

  return (
    <div className={`${inter.variable} font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* BADGE */}
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                #1 Same Day Junk Removal Service - TEST VERSION
              </div>

              {/* H1 HEADLINE */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Same Day Junk Removal San Diego
              </h1>

              {/* SUBHEADLINE */}
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Call Now, We'll Be There This Afternoon • Arrive in 2-4 Hours • 7 Days a Week
              </p>

              {/* BOTTOM TRUST LINE */}
              <p className="text-lg mb-8">
                ✓ No Rush Fees ✓ Same Day Guarantee ✓ Licensed & Insured
              </p>
            </div>
          </div>
        </section>

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
                      <strong>Same day junk removal San Diego</strong> means exactly that—service the same day you call. Our <strong>same day junk pickup San Diego</strong> team responds within 2-4 hours when you call before 2 PM. We provide <strong>junk removal San Diego today</strong> for homeowners and businesses throughout the county.
                    </p>

                    <p className="text-gray-700 mb-6">
                      When you need <strong>fast junk removal San Diego</strong> that actually shows up today, we've got you covered. Unlike national chains that book you out days or weeks, we're local teams positioned throughout San Diego County. That means <strong>rapid junk removal San Diego</strong> without the wait—we dispatch immediately and arrive the same afternoon.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our <strong>immediate junk removal San Diego</strong> service handles urgent situations where every hour counts. Contractor coming tomorrow? New furniture arriving this afternoon? Landlord inspection in hours? We provide <strong>instant junk removal San Diego</strong> when you need it most.
                    </p>

                    {/* How Fast Can We Get There */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Fast Can We Get There?</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>quick junk removal San Diego</strong> service is built around speed and responsiveness.
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
                      We provide same-day junk removal service throughout San Diego County. Local teams mean faster response wherever you're located.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <ul className="space-y-1 text-gray-700">
                        <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a></li>
                        <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a></li>
                        <li>• Downtown San Diego</li>
                        <li>• North Park</li>
                        <li>• Hillcrest</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a></li>
                        <li>• La Mesa</li>
                        <li>• Santee</li>
                        <li>• Lakeside</li>
                        <li>• Poway</li>
                      </ul>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Chula Vista</li>
                        <li>• Oceanside</li>
                        <li>• Carlsbad</li>
                        <li>• Encinitas</li>
                        <li>• All North County</li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - Sidebar (lg:col-span-1) */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Same-Day Service"
                    nearbyLocations={relatedServices}
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
        <SameDayFAQSection />

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
    </div>
  );
}
