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
  title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
  description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
  keywords: 'El Cajon junk removal, junk hauling El Cajon, trash removal El Cajon, junk pickup El Cajon, East County junk removal, Fletcher Hills junk removal',
  openGraph: {
    title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
    description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-el-cajon/',
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
    title: 'El Cajon Junk Removal | East County Junk Hauling | Family-Owned Specialists',
    description: 'Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-el-cajon/',
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

export default function JunkremovalelcajonPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ East County family community with diverse neighborhoods
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              El Cajon Junk Removal – East County Family Service Specialists
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Family-Owned Service • East County Experts
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
                Book East County Junk Pickup - Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">East County's Premier El Cajon Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>El Cajon junk removal</strong> requires understanding the unique character of East County's family-oriented communities. From Fletcher Hills' established neighborhoods to Rancho San Diego's growing developments, our <strong>junk hauling El Cajon</strong> service specializes in serving multi-generational households and family properties throughout East County.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                As a family-owned business, Severin Cleaners provides respectful, reliable <strong>East County junk removal</strong> that understands the importance of household transitions and property improvements. Whether you need <strong>junk pickup El Cajon</strong> for a family move or <strong>trash removal El Cajon</strong> for home renovations, we deliver professional service with family values.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">El Cajon Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Central El Cajon residential neighborhoods</li>
                  <li>Rancho San Diego and Fletcher Hills</li>
                  <li>Bostonia and Granite Hills communities</li>
                  <li>East County shopping and business districts</li>
                  <li>Crest and surrounding hillside areas</li>
                  <li>Multi-generational family properties</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Rancho San Diego and Fletcher Hills</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling El Cajon</strong> service provides specialized attention to East County's premier neighborhoods. From luxury estates in Fletcher Hills to family developments in Rancho San Diego, our team delivers professional <strong>El Cajon junk removal</strong> that respects community standards and family values.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">North El Cajon & Hills</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Fletcher Hills luxury homes and hillside properties</li>
                    <li>Granite Hills family neighborhoods and developments</li>
                    <li>Bostonia established communities and multi-generational homes</li>
                    <li>Crest rural properties and estate homes</li>
                    <li>Dehesa Road and Japatul Valley areas</li>
                    <li>Mount Helix scenic hillside residences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Central & South El Cajon</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Rancho San Diego master-planned community</li>
                    <li>Central El Cajon family neighborhoods</li>
                    <li>Jamacha-Lomita and Casa de Oro areas</li>
                    <li>Main Street and Broadway commercial districts</li>
                    <li>Spring Valley border neighborhoods</li>
                    <li>Sweetwater Road corridor properties</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Generational Home Specialists</h3>
              <p className="text-lg text-gray-700 mb-6">
                East County families often maintain multi-generational households and inherited properties. Our <strong>trash removal El Cajon</strong> service understands the sensitivity required for family cleanouts, estate transitions, and property management. We provide compassionate <strong>junk pickup El Cajon</strong> services that respect family dynamics and preserve important memories.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Family Property Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Multi-generational household cleanouts</li>
                    <li>Inherited property preparation and clearing</li>
                    <li>Family estate organization and sorting</li>
                    <li>Garage and storage area clearing for growing families</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Large family property maintenance</li>
                    <li>Renovation debris removal for home improvements</li>
                    <li>Moving support for family relocations</li>
                    <li>Respectful handling of personal belongings</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in El Cajon</p>
                    <p className="text-sm opacity-90">Free quotes • Family-owned service • East County specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why East County Families Trust Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business serving East County for years, we understand the importance of treating your property and belongings with care and respect. Our <strong>El Cajon junk removal</strong> service combines deep local knowledge with professional standards to deliver the best experience for East County families.
              </p>

              <p className="mb-6">
                We specialize in working with multi-generational households, family estate transitions, and large property cleanouts that require sensitivity and attention to detail. Our <strong>East County junk removal</strong> team treats every family property with the same care we'd want for our own homes.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get El Cajon Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Serving East County families with care and reliability for years
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ El Cajon Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off El Cajon Bookings</strong> • <strong>Family Property Special</strong>
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
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - El Cajon Junk Removal</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does junk removal cost in El Cajon?</h3>
                <p className="text-gray-700">
                  Our <strong>El Cajon junk removal</strong> pricing starts at $99 for small loads and varies based on volume and items. We provide upfront pricing with no hidden fees, volume discounts for large family properties, and special rates for multi-generational household cleanouts. Call for your free East County estimate today.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide same-day junk hauling in East County?</h3>
                <p className="text-gray-700">
                  Yes, we offer same-day <strong>junk hauling El Cajon</strong> service for urgent needs throughout East County. Whether you're in Fletcher Hills, Rancho San Diego, or Granite Hills, our team can respond quickly for emergency cleanouts, family situations, or time-sensitive property needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What neighborhoods in El Cajon do you cover?</h3>
                <p className="text-gray-700">
                  Our <strong>East County junk removal</strong> covers all El Cajon neighborhoods including Fletcher Hills, Rancho San Diego, Granite Hills, Bostonia, Crest, Mount Helix, Casa de Oro, Jamacha-Lomita, and central El Cajon. We also serve surrounding areas like Spring Valley and parts of La Mesa.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you handle large family properties or multi-generational homes?</h3>
                <p className="text-gray-700">
                  Absolutely. Our <strong>junk pickup El Cajon</strong> service specializes in large family properties and multi-generational households common in East County. We understand the unique needs of family cleanouts, inherited properties, and estate transitions, providing respectful service that preserves important family memories.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer eco-friendly junk disposal in El Cajon?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>trash removal El Cajon</strong> service prioritizes eco-friendly disposal methods. We donate usable items to local East County charities, recycle materials whenever possible, and ensure proper disposal of electronics and hazardous materials. We're committed to protecting our East County environment.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:6197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
              >
                📞 Call Now for Same-Day El Cajon Service: (619) 750-0114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Large family property furniture removal for East County estates</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Compassionate estate cleanouts for multi-generational East County homes</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600">Professional appliance disposal with eco-friendly practices</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}