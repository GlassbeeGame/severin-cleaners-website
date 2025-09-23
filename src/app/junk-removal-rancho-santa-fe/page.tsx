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
  title: 'Rancho Santa Fe Junk Removal | Luxury Estate & Equestrian Specialists | Same-Day Service',
  description: 'Professional Rancho Santa Fe junk removal for luxury estates, equestrian properties, gated communities. HOA-approved with white-glove service. Call (619) 750-0114.',
  keywords: 'Rancho Santa Fe junk removal, junk hauling Rancho Santa Fe, luxury estate cleanouts, equestrian property junk removal, gated community junk removal',
  openGraph: {
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate & Equestrian Specialists | Same-Day Service',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates, equestrian properties, gated communities. HOA-approved with white-glove service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-rancho-santa-fe/',
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
    title: 'Rancho Santa Fe Junk Removal | Luxury Estate & Equestrian Specialists | Same-Day Service',
    description: 'Professional Rancho Santa Fe junk removal for luxury estates, equestrian properties, gated communities. HOA-approved with white-glove service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-rancho-santa-fe/',
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

export default function JunkremovalranchosantafePage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Luxury estates and equestrian properties with exclusive service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rancho Santa Fe Junk Removal – Luxury Estate & Equestrian Specialists
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • HOA-Approved • White-Glove Service
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
                Get Your Luxury Estate Quote – Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Estate Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Luxury Estate Rancho Santa Fe Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>Rancho Santa Fe junk removal</strong> requires the highest level of discretion and professionalism for one of San Diego County's most prestigious communities. Serving luxury estates, equestrian properties, and exclusive gated communities, our <strong>junk hauling Rancho Santa Fe</strong> service understands the unique needs of The Ranch's discerning residents and property managers.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                From sprawling estate cleanouts at The Covenant to equestrian facility maintenance at Fairbanks Ranch, we provide white-glove <strong>luxury estate cleanouts</strong> that meet the exacting standards expected in Rancho Santa Fe. Our <strong>equestrian property junk removal</strong> and <strong>gated community junk removal</strong> services work seamlessly within HOA guidelines and community regulations.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Rancho Santa Fe Service Areas</h3>
                <ul className="text-blue-800">
                  <li>The Covenant luxury estates and custom homes</li>
                  <li>Fairbanks Ranch gated community</li>
                  <li>The Bridges exclusive neighborhood</li>
                  <li>Crosby Estates and Del Rayo Estates</li>
                  <li>Rancho Valencia Resort properties</li>
                  <li>Equestrian facilities and horse properties</li>
                </ul>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for immediate service</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Estate Services & Multi-Acre Property Specialists</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>junk hauling Rancho Santa Fe</strong> service specializes in managing large-scale estate cleanouts, equestrian facility maintenance, and luxury home renovations. We understand the complexities of multi-acre properties, gated community access, and the discretion required for high-profile estate management.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Luxury Estate & Mansion Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Multi-acre estate cleanouts and property management</li>
                    <li>Luxury home renovation debris removal and coordination</li>
                    <li>Guest house, pool house, and casita cleaning services</li>
                    <li>High-end furniture and antique handling with care</li>
                    <li>Estate sale preparation and post-sale cleanup</li>
                    <li>Sensitive family estate transitions and inheritance support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Equestrian & Agricultural Properties</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Horse barn cleanouts and stable maintenance</li>
                    <li>Equestrian arena debris removal and grading prep</li>
                    <li>Old fencing, tack room organization, and equipment disposal</li>
                    <li>Pasture and paddock cleanup for property improvements</li>
                    <li>Ranch and agricultural facility waste management</li>
                    <li>Feed storage area cleaning and pest prevention</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gated Community & HOA-Approved Services</h3>
              <p className="text-lg text-gray-700 mb-6">
                Rancho Santa Fe's exclusive gated communities require HOA compliance, proper documentation, and professional appearance standards. Our <strong>gated community junk removal</strong> service is pre-approved by multiple RSF communities and provides all necessary insurance documentation, gate access coordination, and community regulation compliance.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                <h4 className="text-xl font-bold mb-3 text-green-900">Premium Gated Community Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Pre-approved vendor status for multiple RSF communities</li>
                    <li>Comprehensive insurance and bonding documentation</li>
                    <li>Gate access coordination and security protocol compliance</li>
                    <li>Professional uniformed crews with luxury property experience</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-green-800">
                    <li>Discretion and privacy protection for high-profile residents</li>
                    <li>Flexible scheduling around community events and restrictions</li>
                    <li>Environmental responsibility and community standards compliance</li>
                    <li>Detailed service documentation for property management</li>
                  </ul>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Call Today for Same-Day Luxury Estate Service</p>
                    <p className="text-sm opacity-90">White-glove service • HOA-approved • Estate specialists</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Rancho Santa Fe Estate Owners Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business with deep understanding of luxury property management, we provide the discretion, professionalism, and expertise that Rancho Santa Fe estates demand. Our <strong>Rancho Santa Fe junk removal</strong> service combines white-glove handling with efficient execution for properties ranging from historic adobes to modern equestrian estates.
              </p>

              <p className="mb-6">
                We specialize in high-value item handling, estate transitions, and large-scale property management support. Our team understands the unique requirements of luxury estates, from coordinating with household staff to managing sensitive family situations during estate cleanouts.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Rancho Santa Fe Estate Quote Today</h3>
                <p className="text-lg mb-6">
                  Luxury estate specialists with white-glove service and guaranteed discretion
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 750-0114 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">🏆 Rancho Santa Fe Luxury Special 🏆</p>
                  <div className="text-sm">
                    <strong>White-Glove Estate Service</strong> • <strong>15% Off Luxury Bookings</strong><br/>
                    <strong>HOA-Approved Vendor</strong> • <strong>Equestrian Property Specialists</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Luxury estate & equestrian property specialists
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
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions - Rancho Santa Fe Junk Removal</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you service all areas of Rancho Santa Fe including gated communities?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>Rancho Santa Fe junk removal</strong> service covers all areas including The Covenant, Fairbanks Ranch, The Bridges, and other exclusive gated communities. We're pre-approved vendors familiar with gate access procedures and HOA requirements throughout Rancho Santa Fe.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How is pricing determined for estate cleanouts and luxury properties?</h3>
                <p className="text-gray-700">
                  Our <strong>luxury estate cleanouts</strong> are priced based on volume and complexity, typically ranging from $250 for smaller projects to $700+ for full estate cleanouts. For multi-acre properties and extensive equestrian facilities, we provide custom quotes based on scope and special handling requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you handle removal of high-end furniture, antiques, and valuable items?</h3>
                <p className="text-gray-700">
                  Absolutely. Our <strong>junk hauling Rancho Santa Fe</strong> crews are specially trained in white-glove handling of valuable items. We coordinate with estate sale companies, consignment services, and appropriate charities, providing full documentation for tax-deductible donations of high-end pieces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide specialized services for equestrian properties?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>equestrian property junk removal</strong> includes barn cleanouts, arena maintenance debris removal, old fencing disposal, and tack room organization. We understand the unique needs of horse properties and work around feeding schedules and equestrian activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are you approved by Rancho Santa Fe HOAs and fully insured?</h3>
                <p className="text-gray-700">
                  Yes, our <strong>gated community junk removal</strong> service is pre-approved by multiple RSF communities. We're fully licensed, bonded, and carry comprehensive insurance including coverage for luxury estates. We provide all necessary documentation for HOA compliance and property management requirements.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="tel:6197500114"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
              >
                📞 Call Now for Same-Day Rancho Santa Fe Service: (619) 750-0114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Related Luxury & Estate Services</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
              <p className="text-gray-600">Comprehensive luxury estate cleanouts with white-glove handling</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
              <p className="text-gray-600">Luxury home renovation and custom construction cleanup</p>
            </a>
            <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
              <p className="text-gray-600">High-end furniture disposal with antique and luxury item expertise</p>
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}