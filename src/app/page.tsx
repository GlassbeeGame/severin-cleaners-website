import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96 bg-gray-50" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-64 bg-white" />
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-gray-50" />
});

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />

          {/* Top Service Areas - Premium Section */}
          <section className="section-padding bg-gray-50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="container relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  Junk Removal Services Across San Diego County
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Fast, reliable service in your neighborhood
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
                {/* San Diego County-wide */}
                <a
                  href="/san-diego-junk-removal"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <div className="text-4xl mb-2">📍</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        San Diego
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600 text-center font-semibold">
                        County-wide service
                      </p>
                    </div>
                  </div>
                </a>

                {/* Chula Vista */}
                <a
                  href="/junk-removal-chula-vista"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <div className="text-4xl mb-2">🏖️</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Chula Vista
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600 text-center font-semibold">
                        South Bay specialist
                      </p>
                    </div>
                  </div>
                </a>

                {/* Pacific Beach */}
                <a
                  href="/junk-removal-pacific-beach"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <div className="text-4xl mb-2">🌊</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Pacific Beach
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600 text-center font-semibold">
                        Coastal community
                      </p>
                    </div>
                  </div>
                </a>

                {/* Poway */}
                <a
                  href="/junk-removal-poway"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <div className="text-4xl mb-2">🏘️</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Poway
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600 text-center font-semibold">
                        North inland service
                      </p>
                    </div>
                  </div>
                </a>

                {/* La Mesa */}
                <a
                  href="/junk-removal-la-mesa"
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 col-span-2 md:col-span-1"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-center group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 relative overflow-hidden">
                      {/* Headquarters badge */}
                      <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        HQ
                      </div>
                      <div className="text-4xl mb-2">⭐</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        La Mesa
                      </h3>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-600 text-center font-semibold">
                        Our headquarters
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Call to action below */}
              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Don't see your area?</span> We serve all of San Diego County
                </p>
                <a
                  href="/areas-we-serve"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-lg transition-colors group"
                >
                  <span>View All Service Areas</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
