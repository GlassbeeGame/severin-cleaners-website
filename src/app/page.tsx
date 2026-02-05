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

          {/* Top Service Areas - Clean & Professional */}
          <section className="py-12 md:py-16 bg-white border-t border-b border-gray-100">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Serving San Diego County
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Professional junk removal in your community
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
                {/* San Diego County-wide */}
                <a
                  href="/san-diego-junk-removal"
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      San Diego
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      County-wide
                    </p>
                  </div>
                </a>

                {/* Chula Vista */}
                <a
                  href="/junk-removal-chula-vista"
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Chula Vista
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      South Bay
                    </p>
                  </div>
                </a>

                {/* Pacific Beach */}
                <a
                  href="/junk-removal-pacific-beach"
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Pacific Beach
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      Coastal
                    </p>
                  </div>
                </a>

                {/* Poway */}
                <a
                  href="/junk-removal-poway"
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      Poway
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      North Inland
                    </p>
                  </div>
                </a>

                {/* La Mesa */}
                <a
                  href="/junk-removal-la-mesa"
                  className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg col-span-2 sm:col-span-1"
                >
                  <div className="absolute top-2 right-2">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      HQ
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-700 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      La Mesa
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      Headquarters
                    </p>
                  </div>
                </a>
              </div>

              {/* Call to action */}
              <div className="text-center">
                <a
                  href="/areas-we-serve"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                >
                  <span>View All Service Areas</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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
