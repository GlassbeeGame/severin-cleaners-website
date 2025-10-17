import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplianceFAQSection from "./ApplianceFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Appliance Removal San Diego",
  description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $175.",
  openGraph: {
    title: "Appliance Removal San Diego",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Same-day service available. Call (619) 750-0114. Starting at $175.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
  },
  alternates: {
    canonical: "https://severincleaners.com/appliance-removal-san-diego",
  },
};

export default function ApplianceRemovalPage() {
  const serviceSchema = generateServiceSchema({
    name: "Appliance Removal San Diego",
    description: "Professional appliance removal in San Diego. We remove refrigerators, washers, dryers, stoves, and all appliance types. Eco-friendly disposal.",
    url: "https://severincleaners.com/appliance-removal-san-diego",
    serviceType: "Appliance Removal Service",
    areaServed: "San Diego County, CA",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Services", url: "https://severincleaners.com/services" },
    { name: "Appliance Removal", url: "https://severincleaners.com/appliance-removal-san-diego" },
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
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Appliance Removal San Diego
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, Professional Service • We Handle the Heavy Lifting • Same-Day Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+16197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Call Now: (619) 750-0114
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                Licensed & Insured • Starting at $175 • Serving All of San Diego County
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why San Diego Homeowners Choose Severin Cleaners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">We Do the Heavy Lifting</h3>
                <p className="text-gray-600">
                  No need to move anything to your curb. Our team handles everything—from your basement, second floor, or wherever the appliance sits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Upfront, Honest Pricing</h3>
                <p className="text-gray-600">
                  No surprises. You'll know the total cost before we start. Pricing includes removal, hauling, and proper disposal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">
                  Need it gone today? We offer same-day pickup throughout San Diego when you call early. Evenings and weekends available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Old Appliances Taking Up Space? We'll Haul Them Away.
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-4">
                  Just upgraded to new appliances? Remodeling your kitchen? Or maybe you've got an old fridge that's been sitting in the garage for months.
                </p>

                <p className="text-lg mb-6">
                  Whatever the reason, getting rid of heavy appliances is a hassle. That's where our <strong>appliance removal San Diego</strong> service comes in. We handle refrigerators, washers, dryers, stoves, dishwashers—you name it. From La Jolla to Chula Vista, we're helping San Diego homeowners reclaim their space every day.
                </p>

                {/* Pricing Section */}
                <h3 className="text-2xl font-bold mt-8 mb-4">Simple, Straightforward Pricing</h3>
                <p className="text-lg mb-6">
                  No hidden fees. No surprises. Here's what you'll pay for professional <strong>appliance disposal San Diego</strong>:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">SINGLE APPLIANCE</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">$175</p>
                      <p className="text-sm text-blue-700">Starting at</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      One refrigerator, washer, dryer, stove, or similar
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-green-600 mb-2">2 APPLIANCES</p>
                      <p className="text-4xl font-bold text-green-900 mb-1">$249</p>
                      <p className="text-sm text-green-700">Total price</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Perfect for washer & dryer sets
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-purple-600 mb-2">3-4 APPLIANCES</p>
                      <p className="text-4xl font-bold text-purple-900 mb-1">$319</p>
                      <p className="text-sm text-purple-700">Total price</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Partial kitchen cleanout
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-orange-600 mb-2">5-6 APPLIANCES</p>
                      <p className="text-4xl font-bold text-orange-900 mb-1">$349</p>
                      <p className="text-sm text-orange-700">Total price</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Most kitchen remodels
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-blue-600 mb-2">FULL KITCHEN</p>
                      <p className="text-4xl font-bold text-blue-900 mb-1">$495</p>
                      <p className="text-sm text-blue-700">7+ appliances</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Complete kitchen renovation cleanout
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Prices include removal from anywhere on your property, loading, hauling, and proper disposal. Built-in appliances or items requiring disconnection may have additional fees. Call <a href="tel:+16197500114" className="underline font-bold">(619) 750-0114</a> for an accurate quote.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove</h3>
                <p className="text-lg mb-4">
                  If it's an appliance and you need it gone, we'll take it. Here's what we haul away most often:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Kitchen Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Refrigerators & freezers (all sizes)</li>
                      <li>Stoves, ovens & cooktops (gas or electric)</li>
                      <li>Dishwashers (built-in or portable)</li>
                      <li>Microwaves & range hoods</li>
                      <li>Garbage disposals & ice makers</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-3 text-blue-600">Laundry & Other Appliances</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Washers & dryers (stackable or side-by-side)</li>
                      <li>Water heaters (gas, electric, tankless)</li>
                      <li>AC units & dehumidifiers</li>
                      <li>Space heaters</li>
                      <li>Small kitchen appliances</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
                <p className="text-lg mb-4">
                  Getting rid of your old appliances is easier than you think:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                    <h4 className="font-bold text-lg mb-2">Call or Book Online</h4>
                    <p className="text-gray-700">
                      Give us a call at <a href="tel:+16197500114" className="text-blue-600 underline font-semibold">(619) 750-0114</a> or request a quote. We'll give you an upfront price and schedule a time that works for you.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                    <h4 className="font-bold text-lg mb-2">We Show Up & Haul It</h4>
                    <p className="text-gray-700">
                      Our team arrives on time, handles all the lifting, and carefully removes your appliance without damaging your home.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                    <h4 className="font-bold text-lg mb-2">Proper Disposal</h4>
                    <p className="text-gray-700">
                      We dispose of your appliance according to local San Diego regulations. You're done—no truck rental, no hauling.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Refrigerator Removal</h3>
                <p className="text-lg mb-6">
                  Old fridges are heavy, awkward, and tough to move. Our <strong>refrigerator removal San Diego</strong> team has the right equipment to safely extract your fridge—even from tight kitchens, garages, or second-story units. We'll navigate stairs, protect your walls and floors, and get it out without breaking a sweat (well, maybe a little).
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Washer & Dryer Removal</h3>
                <p className="text-lg mb-6">
                  Whether you've got a stackable set in a closet or a side-by-side pair in the laundry room, our <strong>washer dryer removal San Diego</strong> service makes it easy. We handle disconnection from water and power, carefully remove both units, and haul them away—all in one visit.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Stove & Dishwasher Removal</h3>
                <p className="text-lg mb-6">
                  Gas stoves, electric ranges, built-in ovens—we remove them all. Need <strong>stove removal San Diego</strong> or <strong>dishwasher removal San Diego</strong>? We'll carefully disconnect and extract built-in units without damaging your cabinetry or countertops.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Freezer Removal</h3>
                <p className="text-lg mb-6">
                  Got a chest freezer in the garage that's seen better days? Our <strong>freezer removal San Diego</strong> service handles standalone freezers of all sizes. Just make sure it's emptied out, and we'll take care of the rest.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">When You Might Need Us</h3>
                <p className="text-lg mb-4">
                  San Diego homeowners call us for appliance disposal in all kinds of situations:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Kitchen Remodels</h4>
                    <p className="text-gray-700 text-sm">
                      Contractors need the old appliances out before the new ones arrive. We coordinate with your schedule.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Upgrading Appliances</h4>
                    <p className="text-gray-700 text-sm">
                      New fridge being delivered tomorrow? We'll haul the old one away same-day.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Moving Out</h4>
                    <p className="text-gray-700 text-sm">
                      Your new place has appliances, but you need to clear out your old ones before closing.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Broken Appliances</h4>
                    <p className="text-gray-700 text-sm">
                      That dead dishwasher has been sitting there for months. Time to reclaim the space.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Rental Property Turnovers</h4>
                    <p className="text-gray-700 text-sm">
                      Tenant left behind a broken washer? We'll remove it fast so you can re-list the unit.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Estate Cleanouts</h4>
                    <p className="text-gray-700 text-sm">
                      Multiple appliances to remove? We handle everything in one trip.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Hire Professionals?</h3>
                <p className="text-lg mb-4">
                  You might be tempted to drag that old fridge to the curb yourself. Here's why that's usually a bad idea:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>They're Heavy:</strong> A full-size refrigerator can weigh 250-400 lbs. Washers and dryers aren't much lighter.</li>
                  <li><strong>Risk of Injury:</strong> Back strains, dropped appliances, smashed fingers—it happens more than you'd think.</li>
                  <li><strong>Property Damage:</strong> One wrong move and you've got a hole in your wall or a scratched floor.</li>
                  <li><strong>Disposal Regulations:</strong> Appliances can't just go to the dump. They need to be disposed of properly.</li>
                  <li><strong>No Truck Needed:</strong> Why rent a truck and do multiple trips when we can handle it all?</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Serving All of San Diego</h3>
                <p className="text-lg mb-4">
                  We provide fast, professional service throughout San Diego County—from coastal neighborhoods to inland communities.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>La Jolla</li>
                    <li>Pacific Beach</li>
                    <li>Downtown San Diego</li>
                    <li>North Park</li>
                    <li>El Cajon</li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Chula Vista</li>
                    <li>Oceanside</li>
                    <li>La Mesa</li>
                    <li>Santee</li>
                    <li>Poway</li>
                  </ul>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Point Loma</li>
                    <li>Hillcrest</li>
                    <li>Mission Valley</li>
                    <li>Vista</li>
                    <li>All North County</li>
                  </ul>
                </div>

        {/* FAQ Section */}
        <ApplianceFAQSection />

                {/* Trust Signals */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">200+</p>
                      <p className="text-sm text-gray-600">Jobs Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Licensed</p>
                      <p className="text-sm text-gray-600">& Fully Insured</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Same-Day</p>
                      <p className="text-sm text-gray-600">Service Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </>
  );
}
