import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SameDayFAQSection from "./SameDayFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Same Day Junk Removal San Diego | Today Pickup | Severin Cleaners",
  description: "Need junk removed TODAY? Fast same day junk removal in San Diego. Available 7 days, arrive within hours. Call (619) 750-0114 for immediate pickup. Starting at $100.",
  openGraph: {
    title: "Same Day Junk Removal San Diego | Today Pickup | Severin Cleaners",
    description: "Need junk removed TODAY? Fast same day junk removal in San Diego. Available 7 days, arrive within hours. Starting at $100.",
    url: "https://severincleaners.com/same-day-junk-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/same-day-junk-removal-san-diego",
  },
};

export default function SameDayJunkRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Same Day Junk Removal San Diego",
    description: "Fast same day junk removal in San Diego. Available 7 days, arrive within hours. No rush fees. Starting at $100.",
    url: "https://severincleaners.com/same-day-junk-removal-san-diego",
    serviceType: "Same Day Junk Removal",
    areaServed: [
      "San Diego",
      "El Cajon",
      "La Jolla",
      "Pacific Beach",
      "Chula Vista",
      "La Mesa",
      "Santee",
      "Oceanside",
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Same Day Junk Removal", url: "https://severincleaners.com/same-day-junk-removal-san-diego" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Same Day Junk Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Call Now, We'll Be There This Afternoon • Arrive in 2-4 Hours • 7 Days a Week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call Now: (619) 750-0114
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Book Today's Pickup
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Call before 2 PM for guaranteed same-day service • No rush fees • Licensed & Insured
              </p>
            </div>
          </div>
        </section>

        {/* Speed Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Same Day Means SAME DAY
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Unlike national chains, we're based right here in San Diego. That means faster response and same-day service without the wait.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Arrive in 2-4 Hours</h3>
                <p className="text-gray-600">
                  Call in the morning, we're there in the afternoon. That's what makes our service the fastest option in San Diego.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Available Every Day</h3>
                <p className="text-gray-600">
                  Weekends, holidays, whenever. We provide the same rapid response 7 days a week with no extra charges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">No Rush Fees</h3>
                <p className="text-gray-600">
                  Same-day service shouldn't cost extra. Our pricing stays the same whether you book today or next week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                Transparent Same-Day Pricing
              </h2>
              <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                No hidden fees. No rush charges. Know exactly what you'll pay before we arrive.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE ITEM PICKUP</p>
                    <p className="text-4xl font-bold text-blue-900 mb-1">$100</p>
                    <p className="text-sm text-blue-700">Starting at</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    One couch, mattress, appliance, or similar
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-green-600 mb-2">1/4 TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                    <p className="text-sm text-green-700">3 cubic yards</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Several items or small cleanout
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-purple-600 mb-2">1/2 TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-purple-900 mb-1">$349</p>
                    <p className="text-sm text-purple-700">6 cubic yards</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Room cleanout or garage
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-orange-600 mb-2">FULL TRAILER LOAD</p>
                    <p className="text-4xl font-bold text-orange-900 mb-1">$495</p>
                    <p className="text-sm text-orange-700">12 cubic yards</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Full property or estate cleanout
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Additional Load Sizes:</h3>
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

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> All prices include labor, hauling, proper disposal, and cleanup. Same-day service, no rush fees. Call <a href="tel:+16197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> for an accurate quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Need It Gone Today? We'll Be There This Afternoon.
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Contractor coming tomorrow and you need junk cleared NOW? New furniture arriving this afternoon? Landlord inspection in a few hours?
                </p>

                <p className="text-lg mb-6">
                  When you need <strong>same day junk removal San Diego</strong> that actually shows up today, we've got you covered. Our local teams respond fast—usually within 2-4 hours. From <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> to Chula Vista, we're there the same day you call.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">How Fast Can We Get There?</h3>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
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

                <h3 className="text-2xl font-bold mt-10 mb-4">Same Day Junk Pickup San Diego</h3>
                <p className="text-lg mb-6">
                  Our <strong>same day junk pickup San Diego</strong> service handles everything from single-item removals to full property cleanouts. Unlike national franchises that book you out days or weeks in advance, we're local. That means faster response times and genuine same-day service.
                </p>

                <p className="text-lg mb-6">
                  We keep teams strategically positioned throughout San Diego County so when you need <strong>immediate junk removal San Diego</strong>, we can respond quickly. No waiting around for days hoping they'll show up—we give you a 2-hour arrival window and we're there.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Junk Removal San Diego Today</h3>
                <p className="text-lg mb-6">
                  Looking for <strong>junk removal San Diego today</strong>? Here's how it works: Give us a call, tell us what you've got, and we'll give you an upfront price. If you book it, we dispatch a team immediately—often arriving within a couple of hours.
                </p>

                <p className="text-lg mb-6">
                  Whether it's furniture blocking a doorway, appliances that need to go before delivery arrives, or a garage that needs clearing today, we make it happen. That's the advantage of working with a local team instead of a national chain.
                </p>


                <h3 className="text-2xl font-bold mt-10 mb-4">Fast Junk Removal San Diego</h3>
                <p className="text-lg mb-6">
                  What makes our <strong>fast junk removal San Diego</strong> service different? Speed without sacrifice. We don't rush the job—we rush the response. Once we're there, we take the time to do it right: careful removal, property protection, thorough cleanup.
                </p>

                <p className="text-lg mb-6">
                  But getting there fast? That's where we excel. Our dispatch system routes the closest available team to your location. No waiting days for an opening in the schedule.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">What We Remove Same Day</h3>
                <p className="text-lg mb-4">
                  Our <strong>quick junk removal San Diego</strong> service handles virtually everything:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Common Items</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Furniture (couches, mattresses, dressers)</li>
                      <li>Appliances (refrigerators, washers, dryers)</li>
                      <li>Electronics and e-waste</li>
                      <li>Garage and basement cleanouts</li>
                      <li>Yard waste and debris</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Larger Projects</h4>
                    <ul className="list-disc pl-4 space-y-2 text-gray-700">
                      <li>Construction materials and debris</li>
                      <li>Hot tubs and pool equipment</li>
                      <li>Concrete, brick, and asphalt</li>
                      <li>Office furniture and equipment</li>
                      <li>Estate cleanouts</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Rapid Junk Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Need <strong>rapid junk removal San Diego</strong> for an emergency cleanout? Surprise property inspection? Last-minute move preparation? We specialize in urgent situations where every hour counts.
                </p>

                <p className="text-lg mb-6">
                  Our team understands that sometimes junk removal can't wait. That's why we built our entire service model around speed and responsiveness. When you call, you're not going into a queue for next week—you're getting service today.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Immediate Junk Pickup San Diego</h3>
                <p className="text-lg mb-6">
                  When you need <strong>immediate junk pickup San Diego</strong>, timing is everything. We dispatch teams based on proximity and availability, which means faster arrival times than companies routing from a central location.
                </p>

                <p className="text-lg mb-6">
                  Call before 2 PM and we guarantee same-day service. Call after 2 PM and we'll do everything possible to get there today—or first thing tomorrow morning if needed.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Instant Junk Removal San Diego</h3>
                <p className="text-lg mb-6">
                  Looking for the closest thing to <strong>instant junk removal San Diego</strong>? Our average response time is 2-4 hours from initial call to arrival. Some national chains schedule you out 5-7 days. We're there the same afternoon.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="font-bold text-lg mb-3">Why We're Faster Than National Chains:</h4>
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

                <h3 className="text-2xl font-bold mt-10 mb-4">How It Works</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call Right Now</h4>
                    <p className="text-gray-700 text-sm">
                      Speak directly with our team at <a href="tel:+16197500114" className="text-blue-600 underline font-semibold">(619) 750-0114</a>. Get an upfront quote in minutes.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Dispatch Immediately</h4>
                    <p className="text-gray-700 text-sm">
                      Accept the quote and we send the nearest team. You'll get a 2-hour arrival window—usually 2-4 hours from now.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Done This Afternoon</h4>
                    <p className="text-gray-700 text-sm">
                      We load everything, haul it away, and clean up. Your junk is gone and your space is clear—today.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-10 mb-4">Serving All San Diego County</h3>
                <p className="text-lg mb-4">
                  We provide same-day service throughout San Diego County. Local teams mean faster response wherever you're located.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">Central San Diego</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Downtown & Gaslamp</li>
                      <li>• <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a></li>
                      <li>• <a href="/junk-removal-pacific-beach" className="text-blue-600 hover:underline">Pacific Beach</a></li>
                      <li>• North Park & Hillcrest</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">East County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• El Cajon</li>
                      <li>• La Mesa</li>
                      <li>• Santee</li>
                      <li>• Lakeside & Poway</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold mb-2 text-blue-600">South & North County</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Chula Vista</li>
                      <li>• Oceanside</li>
                      <li>• Carlsbad</li>
                      <li>• All North County</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-blue-900 text-white p-8 rounded-lg mt-8">
                  <h3 className="text-2xl font-bold mb-4">Get Same-Day Junk Removal Quote Today</h3>
                  <p className="text-lg mb-6">
                    Call now and we'll be there this afternoon. Same-day service with no rush fees.
                  </p>
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                  >
                    📞 Call (619) 750-0114 Now
                  </a>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <p className="text-yellow-300 font-semibold mb-2">⚡ Same-Day Service Available ⚡</p>
                    <div className="text-sm">
                      <strong>No Rush Fees</strong> • <strong>Arrive Within Hours</strong><br/>
                      <strong>Available 7 Days/Week</strong> • <strong>Transparent Pricing</strong>
                    </div>
                  </div>
                  <p className="text-sm mt-4">
                    Licensed & insured • Call before 2 PM for guaranteed same-day service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <SameDayFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related Junk Removal Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/junk-removal-cost-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Junk Removal Pricing</h4>
                <p className="text-gray-600">Transparent pricing guide and cost information for all junk removal services</p>
              </a>
              <a href="/san-diego-junk-removal" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">San Diego Junk Removal</h4>
                <p className="text-gray-600">Complete junk removal services throughout San Diego County</p>
              </a>
              <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Junk Removal</h4>
                <p className="text-gray-600">24/7 emergency cleanup and urgent junk removal services</p>
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
