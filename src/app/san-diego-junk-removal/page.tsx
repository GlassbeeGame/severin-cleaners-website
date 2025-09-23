import type { Metadata } from "next";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ServiceHub from "@/components/ServiceHub";
import NeighborhoodCoverage from "@/components/NeighborhoodCoverage";
import TrustFactors from "@/components/TrustFactors";
import EcoFriendly from "@/components/EcoFriendly";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "San Diego Junk Removal | Same-Day Hauling & Disposal Experts",
  description: "Professional junk removal San Diego. Same-day junk hauling, trash pickup, furniture removal, and eco-friendly disposal. Serving all neighborhoods in San Diego County.",
  keywords: "junk removal San Diego, junk hauling San Diego, trash removal San Diego, junk pickup San Diego, same day junk removal San Diego, furniture removal San Diego, appliance removal San Diego, estate cleanout San Diego, construction debris removal, eco-friendly junk removal San Diego, bilingual junk removal San Diego",
  openGraph: {
    title: "San Diego Junk Removal | Same-Day Hauling & Disposal Experts",
    description: "Professional junk removal San Diego. Same-day junk hauling, trash pickup, furniture removal, and eco-friendly disposal. Serving all neighborhoods in San Diego County.",
    url: "https://severincleaners.com/san-diego-junk-removal",
  },
};

export default function SanDiegoJunkRemoval() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <div className="gradient-overlay"></div>
          </div>

          <div className="relative z-20 w-full container section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-white/90">Family-Owned • Licensed & Insured • Eco-Friendly Disposal</span>
                </div>

                <h1 className="text-white uppercase mb-6">
                  <span className="block text-blue-500">
                    San Diego Junk Removal
                  </span>
                  Same-Day Junk Hauling Across All Neighborhoods
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Professional junk removal San Diego residents trust • Same-day junk hauling San Diego • Eco-friendly trash removal San Diego
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="tel:+16197500114"
                    className="btn btn-primary text-lg px-8 py-4"
                  >
                    📞 Call (619) 750-0114 – Book Same-Day Service & Save 15%
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-outline text-lg px-8 py-4"
                  >
                    Get Free Quote – Save 15% When You Book Online
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Same-Day Junk Pickup San Diego</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Eco-Friendly Disposal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto lg:mx-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    GET YOUR FREE
                  </h2>
                  <h3 className="text-3xl font-bold text-blue-500 mb-6">
                    JUNK REMOVAL QUOTE
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Service Type *</option>
                        <option value="Junk Removal">Junk Removal</option>
                        <option value="Estate Cleanout">Estate Cleanout</option>
                        <option value="Furniture Removal">Furniture Removal</option>
                        <option value="Appliance Removal">Appliance Removal</option>
                        <option value="Construction Debris">Construction Debris</option>
                        <option value="Yard Waste">Yard Waste</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <input
                        required
                        type="text"
                        placeholder="Your Name *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email Address (Optional)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <input
                        required
                        type="text"
                        placeholder="Service Address or ZIP Code *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">When Do You Need Service? *</option>
                        <option value="ASAP - Emergency">ASAP - Emergency</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Within 3 Days">Within 3 Days</option>
                        <option value="Within a Week">Within a Week</option>
                        <option value="Flexible">Flexible Schedule</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn btn-primary text-lg py-4 uppercase font-black"
                    >
                      Get Free Quote Now
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      No obligation • 100% free quote • Same-day service available
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Introduction />
        <ServiceHub />
        <NeighborhoodCoverage />
        <TrustFactors />
        <EcoFriendly />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}