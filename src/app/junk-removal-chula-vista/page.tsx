import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChulaVistaFAQSection from "./ChulaVistaFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
  description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
  keywords: 'Chula Vista junk removal, junk hauling Chula Vista, junk pickup Chula Vista, trash removal Chula Vista, South Bay junk removal, Eastlake junk removal',
  openGraph: {
    title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
    description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-chula-vista',
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
    title: 'Chula Vista Junk Removal | Same-Day Junk Hauling | South Bay Specialists',
    description: 'Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-chula-vista',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Chula Vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Chula Vista junk removal pricing is transparent and volume-based with no hidden fees. We offer comprehensive service to all Eastlake, Otay Ranch, and South Bay neighborhoods with HOA-compliant service: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. All prices include labor, hauling, disposal fees, and eco-friendly recycling. Volume discounts available for large Chula Vista cleanouts. Call for your free estimate today."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer bilingual junk removal service in Chula Vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos servicio completamente bilingüe. Our junk hauling Chula Vista team includes Spanish-speaking crew members who can communicate effectively with all residents. We provide estimates, scheduling, and service in both English and Spanish to serve our diverse South Bay community."
      }
    },
    {
      "@type": "Question",
      "name": "Can you provide same-day junk removal in Eastlake or Otay Ranch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day junk pickup Chula Vista service for urgent needs in Eastlake, Otay Ranch, and throughout South Bay. Our team understands HOA requirements and can coordinate emergency cleanouts while maintaining community standards. Same-day availability depends on scheduling and crew availability."
      }
    },
    {
      "@type": "Question",
      "name": "Are your junk removal services HOA-compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our trash removal Chula Vista service is fully HOA-compliant for all neighborhoods including Eastlake, Otay Ranch, and Rolling Hills Ranch. We coordinate with property management, schedule during approved hours, maintain professional appearance, and provide documentation when required by HOA boards."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of South Bay do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our South Bay junk removal covers all Chula Vista neighborhoods, plus National City, Bonita, Imperial Beach, and San Ysidro. We serve from the bayfront to the hills, including all master-planned communities, established neighborhoods, commercial districts, and border region properties throughout South Bay."
      }
    }
  ]
};

export default function JunkRemovalChulaVistaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Chula Vista",
    serviceName: "Junk Removal",
    description: "Professional Chula Vista junk removal for Eastlake, Otay Ranch, Millenia. Bilingual junk hauling service, HOA compliant. Same-day pickup.",
    url: "https://severincleaners.com/junk-removal-chula-vista",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Chula Vista Junk Removal", url: "https://severincleaners.com/junk-removal-chula-vista" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
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
              🌎 Servicio Bilingüe Disponible
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chula Vista Junk Removal
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Familia Local • Servicio en Español
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
                Book Your Chula Vista Junk Pickup - Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Large Home Specialists ✓ Bilingual Crews ✓ HOA Compliant Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">South Bay's Premier Chula Vista Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Chula Vista junk removal</strong> requires understanding our city's diverse communities and unique needs. As San Diego County's second-largest city, Chula Vista spans from the bayfront to rolling hills and master-planned communities. Severin Cleaners provides comprehensive <strong>junk hauling Chula Vista</strong> services with bilingual crews who understand our community's values and HOA requirements.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From Eastlake's luxury homes to historic Third Avenue, from Otay Ranch developments to established neighborhoods, our <strong>South Bay junk removal</strong> service covers every corner of Chula Vista. We specialize in <strong>junk pickup Chula Vista</strong> and <strong>trash removal Chula Vista</strong> for residential and commercial properties throughout the South Bay.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Chula Vista Complete Coverage</h3>
                <ul className="text-blue-800">
                  <li>Eastlake neighborhoods and master-planned communities</li>
                  <li>Otay Ranch and Rolling Hills Ranch developments</li>
                  <li>Millenia and Otay Mesa border areas</li>
                  <li>Historic Third Avenue downtown district</li>
                  <li>West Chula Vista established neighborhoods</li>
                  <li>Rancho del Rey and Sunbow residential areas</li>
                  <li>Olympic Training Center area and Heritage Road corridor</li>
                  <li>Chula Vista Marina area and bayfront properties</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Eastlake and Otay Ranch</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Chula Vista</strong> service provides specialized attention to the area's premier neighborhoods. Whether you need <strong>junk pickup Chula Vista</strong> for a luxury estate in Eastlake or routine <strong>trash removal Chula Vista</strong> in Otay Ranch, our team delivers professional service that meets HOA standards and community expectations.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Eastlake Communities</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Eastlake Greens and Eastlake Trails luxury homes</li>
                    <li>Eastlake Woods and Eastlake Vistas neighborhoods</li>
                    <li>Olympic Parkway commercial and residential areas</li>
                    <li>Olympic Training Center district and surroundings</li>
                    <li>Bonita Road corridor businesses and offices</li>
                    <li>Rolling Hills Ranch master-planned community</li>
                    <li>Salt Creek Golf Club and recreational areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Otay Ranch & South Chula Vista</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Otay Ranch Village developments and townhomes</li>
                    <li>Millenia and Terra Nova neighborhoods</li>
                    <li>Otay Mesa border region properties</li>
                    <li>Main Street and Broadway commercial districts</li>
                    <li>Rancho del Rey and Sunbow residential areas</li>
                    <li>Heritage Road and Palomar Street corridors</li>
                    <li>Chula Vista Marina and bayfront communities</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Chula Vista Service Areas</h3>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Chula Vista</p>
                    <p className="text-sm opacity-90">Free quotes • Bilingual service • HOA compliant</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-3">HOA-Compliant Junk Removal Service</h4>
              <p className="mb-4">
                Many Chula Vista neighborhoods have strict HOA guidelines for junk removal Chula Vista services. Our professional team ensures all junk hauling Chula Vista operations meet community standards, from scheduling during approved hours to maintaining clean, professional appearance. We work seamlessly with property management companies and HOA boards throughout the South Bay, providing reliable junk pickup Chula Vista that respects community rules.
              </p>

              <p className="mb-4">
                Whether you need emergency junk pickup Chula Vista or scheduled trash removal Chula Vista, our team coordinates with your community's requirements. We understand Eastlake's luxury standards, Otay Ranch's family-friendly guidelines, and the unique needs of Millenia's diverse neighborhoods. From the Olympic Training Center area to the Heritage Road corridor, our South Bay junk removal service maintains the highest professional standards.
              </p>

              <p className="mb-6">
                Our junk hauling Chula Vista crews are trained to work efficiently in master-planned communities, handling everything from single-item pickups to complete estate cleanouts. Whether you're near the Chula Vista Marina or in Otay Mesa, our trash removal Chula Vista service delivers the same reliable, courteous experience that has made us the trusted choice for South Bay junk removal.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-900 mb-2">Servicio Bilingüe / Bilingual Service</h3>
                <p className="text-green-800">
                  Nuestro equipo habla español y entiende las necesidades de la comunidad. Ofrecemos servicio
                  profesional y respetuoso para todas las familias de Chula Vista.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href="tel:6197500114"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors duration-200"
                  >
                    📞 Llame para Cotización
                  </a>
                  <a
                    href="/contact"
                    className="bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-50 transition-colors duration-200"
                  >
                    Schedule Chula Vista Service
                  </a>
                </div>
              </div>

              {/* Pricing Section - STANDARDIZED */}
              <section id="pricing" className="my-12">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Transparent Chula Vista Junk Removal Pricing
                  </h2>
                  <p className="text-xl text-gray-600 mb-12 text-center">
                    Volume-based pricing for all junk removal Chula Vista services. No hidden fees, no surprises - just honest junk hauling Chula Vista rates for all South Bay neighborhoods.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white text-center">
                      <div className="text-4xl font-bold mb-2">$100</div>
                      <div className="text-blue-100 mb-4">Starting Price</div>
                      <div className="font-bold text-lg mb-2">Single Item Pickup</div>
                      <div className="text-blue-100 text-sm">
                        Perfect for one couch, appliance, mattress, or similar item
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white text-center">
                      <div className="text-4xl font-bold mb-2">$249</div>
                      <div className="text-green-100 mb-4">1/4 Load (3 cu yd)</div>
                      <div className="font-bold text-lg mb-2">Small Cleanout</div>
                      <div className="text-green-100 text-sm">
                        Bedroom furniture, small shed, partial garage
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white text-center">
                      <div className="text-4xl font-bold mb-2">$349</div>
                      <div className="text-orange-100 mb-4">1/2 Load (6 cu yd)</div>
                      <div className="font-bold text-lg mb-2">Medium Cleanout</div>
                      <div className="text-orange-100 text-sm">
                        Full garage, storage unit, attic cleanout
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
                      <div className="text-4xl font-bold mb-2">$495</div>
                      <div className="text-purple-100 mb-4">Full Load (12 cu yd)</div>
                      <div className="font-bold text-lg mb-2">Large Cleanout</div>
                      <div className="text-purple-100 text-sm">
                        Whole house, estate, multiple rooms
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Additional Load Sizes Available</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="font-bold text-gray-900">3/8 Load</div>
                        <div className="text-green-600 font-bold">$319</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">5/8 Load</div>
                        <div className="text-green-600 font-bold">$366</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">3/4 Load</div>
                        <div className="text-green-600 font-bold">$429</div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">7/8 Load</div>
                        <div className="text-green-600 font-bold">$462</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">What's Included in Every Price:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        All labor and loading
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Transportation and hauling
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Eco-friendly disposal fees
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Donation coordination
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Recycling services
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Cleanup and sweeping
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href="tel:6197500114"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                    >
                      Get Your Free Chula Vista Quote - Call (619) 750-0114
                    </a>
                  </div>
                </div>
              </section>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Family Values & Bilingual Service</h3>
              <p className="mb-4">
                Like many Chula Vista families, Severin Cleaners is family-owned and operated. We understand the importance of treating your property and belongings with the same care we'd want for our own families. Our bilingual junk removal Chula Vista team reflects the diversity and values of our South Bay community, delivering professional junk hauling Chula Vista service with genuine care.
              </p>

              <p className="mb-4">
                From Spanish-speaking families in traditional neighborhoods to English-speaking residents in newer developments like Otay Ranch and Eastlake, our South Bay junk removal service bridges language barriers while maintaining the highest professional standards. Whether you need junk pickup Chula Vista in the Heritage Road area or trash removal Chula Vista near the Marina, we serve all residents with equal respect and attention to detail.
              </p>

              <p className="mb-6">
                Our commitment to the community extends throughout Chula Vista - from Otay Mesa to the Olympic Training Center area. We're not just another junk hauling Chula Vista company; we're your neighbors, dedicated to keeping our South Bay neighborhoods clean and beautiful through responsible junk pickup Chula Vista and trash removal Chula Vista services.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Chula Vista Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Professional South Bay service with local expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ Chula Vista Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off Chula Vista Bookings</strong> • <strong>Servicio Bilingüe</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Local specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ChulaVistaFAQSection />

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related South Bay Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Expert furniture removal San Diego service for large South Bay homes, Eastlake estates, and Otay Ranch properties with same-day pickup available</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Compassionate estate cleanout services for South Bay families in Chula Vista, with respectful handling throughout all neighborhoods</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
              <p className="text-gray-600">Professional appliance removal San Diego with EPA-compliant disposal for all Chula Vista and South Bay area residents</p>
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