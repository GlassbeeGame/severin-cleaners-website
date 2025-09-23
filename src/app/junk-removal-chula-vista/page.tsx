import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    url: 'https://severincleaners.com/junk-removal-chula-vista/',
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
    canonical: 'https://severincleaners.com/junk-removal-chula-vista/',
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

export default function JunkRemovalChulaVistaPage() {
  return (
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
              Chula Vista Junk Removal – Serving All South Bay Communities
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
                href="#contact"
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
                    <li>Olympic Parkway commercial and residential</li>
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
                Many Chula Vista neighborhoods have strict HOA guidelines for <strong>junk removal Chula Vista</strong> services. Our professional team ensures all <strong>junk hauling Chula Vista</strong> operations meet community standards, from scheduling during approved hours to maintaining clean, professional appearance. We work seamlessly with property management companies and HOA boards throughout the South Bay.
              </p>

              <p className="mb-6">
                Whether you need emergency <strong>junk pickup Chula Vista</strong> or scheduled <strong>trash removal Chula Vista</strong>, our team coordinates with your community's requirements. We understand Eastlake's luxury standards, Otay Ranch's family-friendly guidelines, and the unique needs of Millenia's diverse neighborhoods.
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
                    href="#contact"
                    className="bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-50 transition-colors duration-200"
                  >
                    Schedule Chula Vista Service
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Family Values & Bilingual Service</h3>
              <p className="mb-4">
                Like many Chula Vista families, Severin Cleaners is family-owned and operated. We understand the importance of treating your property and belongings with the same care we'd want for our own families. Our bilingual <strong>junk removal Chula Vista</strong> team reflects the diversity and values of our South Bay community.
              </p>

              <p className="mb-6">
                From Spanish-speaking families in traditional neighborhoods to English-speaking residents in newer developments, our <strong>South Bay junk removal</strong> service bridges language barriers while maintaining the highest professional standards. We serve all Chula Vista residents with equal respect and attention to detail.
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - Chula Vista Junk Removal</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does junk removal cost in Chula Vista?</h3>
                <p className="text-gray-700">
                  Our <strong>Chula Vista junk removal</strong> pricing starts at $99 for small loads and varies based on volume and items. We offer upfront pricing with no hidden fees, volume discounts for large cleanouts, and special rates for Eastlake and Otay Ranch HOA-compliant service. Call for your free estimate today.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer bilingual junk removal service in Chula Vista?</h3>
                <p className="text-gray-700">
                  Sí, ofrecemos servicio completamente bilingüe. Our <strong>junk hauling Chula Vista</strong> team includes Spanish-speaking crew members who can communicate effectively with all residents. We provide estimates, scheduling, and service in both English and Spanish to serve our diverse South Bay community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you provide same-day junk removal in Eastlake or Otay Ranch?</h3>
                <p className="text-gray-700">
                  Yes, we offer same-day <strong>junk pickup Chula Vista</strong> service for urgent needs in Eastlake, Otay Ranch, and throughout South Bay. Our team understands HOA requirements and can coordinate emergency cleanouts while maintaining community standards. Same-day availability depends on scheduling and crew availability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are your junk removal services HOA-compliant?</h3>
                <p className="text-gray-700">
                  Absolutely. Our <strong>trash removal Chula Vista</strong> service is fully HOA-compliant for all neighborhoods including Eastlake, Otay Ranch, and Rolling Hills Ranch. We coordinate with property management, schedule during approved hours, maintain professional appearance, and provide documentation when required by HOA boards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What areas of South Bay do you serve?</h3>
                <p className="text-gray-700">
                  Our <strong>South Bay junk removal</strong> covers all Chula Vista neighborhoods, plus National City, Bonita, Imperial Beach, and San Ysidro. We serve from the bayfront to the hills, including all master-planned communities, established neighborhoods, commercial districts, and border region properties throughout South Bay.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:6197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-4"
              >
                📞 Call Now for Same-Day Chula Vista Service: (619) 750-0114
              </a>
              <div className="mt-4">
                <a
                  href="tel:6197500114"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                >
                  📞 Llame Ahora para Cotización en Español
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related South Bay Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large home furniture removal for Eastlake and South Bay estates</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Compassionate estate cleanout services for South Bay families</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600">Professional appliance disposal with EPA compliance</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}