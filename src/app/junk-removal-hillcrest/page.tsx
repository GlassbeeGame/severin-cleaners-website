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
  title: 'Hillcrest Junk Removal | Historic Home & Urban Core Specialists | Same-Day Service',
  description: 'Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions. Call (619) 750-0114.',
  keywords: 'Hillcrest junk removal, junk hauling Hillcrest, junk pickup Hillcrest, trash removal Hillcrest, University Heights junk removal, urban junk removal San Diego',
  openGraph: {
    title: 'Hillcrest Junk Removal | Historic Home & Urban Core Specialists | Same-Day Service',
    description: 'Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-hillcrest/',
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
    title: 'Hillcrest Junk Removal | Historic Home & Urban Core Specialists | Same-Day Service',
    description: 'Professional Hillcrest junk removal for condos, historic homes, University Heights. Urban core specialists with limited parking solutions. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-hillcrest/',
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

export default function JunkremovalhillcrestPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Historic urban neighborhood with diverse housing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hillcrest Junk Removal – Urban Core & Historic Home Experts
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Historic Building Specialists • Same-Day Service
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
                Book Your Hillcrest Junk Pickup - Save 15%
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Urban Core's Premier Hillcrest Junk Removal Service</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Hillcrest junk removal</strong> requires specialized expertise in urban challenges and historic property care. As San Diego's vibrant urban core, Hillcrest features narrow streets, limited parking, historic homes, and modern high-rise condos. Our <strong>junk hauling Hillcrest</strong> service specializes in navigating these unique urban constraints while providing professional service.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From <strong>University Heights junk removal</strong> for vintage apartments to <strong>urban junk removal San Diego</strong> for downtown condos, we understand the complexities of city living. Whether you need <strong>junk pickup Hillcrest</strong> for a historic bungalow or <strong>trash removal Hillcrest</strong> for a high-rise apartment, our team delivers efficient service that respects urban living constraints.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Hillcrest Service Areas</h3>
                <ul className="text-blue-800">
                  <li>Historic Hillcrest homes and vintage apartments</li>
                  <li>University Heights and surrounding areas</li>
                  <li>High-rise condos and apartment complexes</li>
                  <li>Fifth Avenue and University Avenue corridors</li>
                  <li>Balboa Park adjacent neighborhoods</li>
                  <li>Medical district and professional areas</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junk Hauling in Hillcrest and University Heights</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Hillcrest</strong> service addresses the unique challenges of San Diego's urban core. From navigating narrow alleyways to coordinating with building management for high-rise access, our team delivers professional <strong>Hillcrest junk removal</strong> that works within the constraints of city living.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Urban Challenges We Handle</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Limited street parking and narrow alleyways</li>
                    <li>High-rise condo and apartment access coordination</li>
                    <li>Historic building preservation requirements</li>
                    <li>Elevator scheduling and building management coordination</li>
                    <li>Time-restricted loading zones and city permits</li>
                    <li>Stair navigation for walk-up apartments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Hillcrest Neighborhoods</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>University Heights vintage apartments and condos</li>
                    <li>Fifth Avenue corridor commercial and residential</li>
                    <li>Historic Hillcrest bungalows and craftsman homes</li>
                    <li>Park West high-rise condos and modern apartments</li>
                    <li>Medical district professional buildings</li>
                    <li>Balboa Park adjacent historic properties</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Historic Property & High-Rise Specialists</h3>
              <p className="text-lg text-gray-700 mb-6">
                Hillcrest's diverse housing requires specialized <strong>trash removal Hillcrest</strong> approaches. Our team understands historic preservation guidelines for vintage properties and building access protocols for modern high-rises. We provide careful <strong>junk pickup Hillcrest</strong> services that protect property value and respect community standards.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-yellow-900">Urban Core Expertise</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                    <li>Historic home preservation during cleanouts</li>
                    <li>High-rise building access and elevator coordination</li>
                    <li>Limited parking solutions and street permits</li>
                    <li>Stair navigation for walk-up apartments</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                    <li>Time-restricted loading zone management</li>
                    <li>Building management coordination and scheduling</li>
                    <li>Professional appearance for upscale properties</li>
                    <li>Noise consideration for dense neighborhoods</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Junk Removal in Hillcrest</p>
                    <p className="text-sm opacity-90">Free quotes • Urban specialists • Historic property experience</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Urban Residents Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business serving San Diego's urban core, we understand the unique challenges of city living. Our <strong>Hillcrest junk removal</strong> service combines urban expertise with professional standards to deliver efficient solutions for condos, apartments, and historic homes.
              </p>

              <p className="mb-6">
                We specialize in working within the constraints of urban environments, from coordinating with building management to navigating limited parking. Our <strong>urban junk removal San Diego</strong> team treats every property with professionalism and respect for community standards.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Hillcrest Junk Removal Quote Today</h3>
                <p className="text-lg mb-6">
                  Urban core specialists with historic property experience and modern solutions
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ Hillcrest Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off Hillcrest Bookings</strong> • <strong>Urban Core Special</strong>
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
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - Hillcrest Junk Removal</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does junk removal cost in Hillcrest?</h3>
                <p className="text-gray-700">
                  Our <strong>Hillcrest junk removal</strong> pricing starts at $99 for small loads and varies based on volume and access challenges. We provide upfront pricing with no hidden fees, considering factors like elevator access, parking restrictions, and historic property requirements. Urban locations may have additional coordination fees for permits or building management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide junk removal for high-rise condos and apartments?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>junk hauling Hillcrest</strong> service specializes in high-rise and apartment cleanouts. We coordinate with building management, schedule elevator time, and handle all access logistics. Our team is experienced with condo association requirements and maintains professional standards for upscale properties throughout the urban core.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you handle limited parking and narrow streets in Hillcrest?</h3>
                <p className="text-gray-700">
                  Absolutely. Our <strong>urban junk removal San Diego</strong> team specializes in navigating Hillcrest's narrow streets, limited parking, and time-restricted loading zones. We secure necessary permits, coordinate with city regulations, and use appropriately sized vehicles to access urban properties while minimizing neighborhood disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer same-day junk hauling in Hillcrest and University Heights?</h3>
                <p className="text-gray-700">
                  Yes, we provide same-day <strong>junk pickup Hillcrest</strong> and <strong>University Heights junk removal</strong> for urgent needs. Our urban-focused team can respond quickly throughout the central San Diego area. Same-day availability depends on scheduling and may require coordination with building management for access.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are you experienced with historic homes and older buildings?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>trash removal Hillcrest</strong> service has extensive experience with historic properties and vintage buildings. We understand preservation requirements, structural considerations, and special handling needs for historic homes. Our team protects architectural features and follows best practices for working in sensitive historic environments.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:6197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
              >
                📞 Call Now for Same-Day Hillcrest Service: (619) 750-0114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Urban Core Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">Apartment and condo furniture removal for urban core properties</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Historic property estate cleanouts and inherited home services</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600">High-rise appliance removal with elevator coordination</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}