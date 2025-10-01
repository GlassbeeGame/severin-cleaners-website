import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SanDiegoFAQSection from "./SanDiegoFAQSection";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'San Diego Junk Removal | Same-Day Hauling | Licensed & Insured County-Wide Service',
  description: 'Professional San Diego junk removal serving all neighborhoods. Family-owned, licensed & insured with transparent pricing $175-$495. Same-day service. Call (619) 750-0114!',
  keywords: 'San Diego junk removal, junk hauling San Diego, junk pickup San Diego, trash removal San Diego, San Diego County junk removal',
  openGraph: {
    title: 'San Diego Junk Removal | Same-Day Hauling | Licensed & Insured County-Wide Service',
    description: 'Professional San Diego junk removal serving all neighborhoods. Family-owned, licensed & insured with transparent pricing $175-$495. Same-day service. Call (619) 750-0114!',
    url: 'https://severincleaners.com/san-diego-junk-removal/',
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
    title: 'San Diego Junk Removal | Same-Day Hauling | Licensed & Insured County-Wide Service',
    description: 'Professional San Diego junk removal serving all neighborhoods. Family-owned, licensed & insured with transparent pricing $175-$495. Same-day service. Call (619) 750-0114!',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/san-diego-junk-removal/',
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

export default function SanDiegoJunkRemovalPage() {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Header />
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Same-Day Service • Licensed & Insured • Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              San Diego Junk Removal – County-Wide Professional Service
            </h1>
            <div className="text-xl mb-6">
              ⭐⭐⭐⭐⭐ 5.0 Rating • Family-Owned • Serving All San Diego County
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6197500114"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call Now for Same-Day Junk Removal San Diego: (619) 750-0114
              </a>
              <a
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Book Online & Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Disposal in Accordance with County Regulations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional San Diego Junk Removal – Coastal to East County</h2>

              <p className="text-lg text-gray-700 mb-6">
                <strong>San Diego junk removal</strong> requires local expertise across one of California's most diverse counties. From coastal communities like La Jolla and Del Mar to inland neighborhoods in El Cajon and Poway, our <strong>junk hauling San Diego</strong> service provides professional, licensed, and insured junk removal throughout all of San Diego County. As a family-owned business, we combine transparent pricing with same-day availability and disposal practices that comply with all San Diego County regulations.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Whether you need <strong>junk pickup San Diego</strong> for a downtown high-rise apartment, North County estate home, East County residential cleanout, or South Bay commercial property, our <strong>trash removal San Diego</strong> team understands the unique needs of each San Diego neighborhood. We handle everything from single-item furniture removal to complete property cleanouts, following all local disposal regulations while providing the responsive, professional service San Diego residents and businesses expect.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                San Diego County's geographic diversity—from beach communities to mountain communities—creates unique challenges for <strong>San Diego junk removal</strong> services. Our team navigates coastal access restrictions, hillside properties, gated communities, and urban density with equal proficiency. We schedule our <strong>junk hauling San Diego</strong> services to accommodate your timeline, coordinate with property managers and HOAs when needed, and maintain the professionalism that reflects San Diego's quality of life throughout all communities.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego County Coverage Areas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Coastal San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>La Jolla & Pacific Beach</li>
                      <li>Del Mar & Solana Beach</li>
                      <li>Point Loma & Ocean Beach</li>
                      <li>Coronado & Imperial Beach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Central San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Downtown & Gaslamp Quarter</li>
                      <li>North Park & Hillcrest</li>
                      <li>Mission Valley & Kearny Mesa</li>
                      <li>Clairemont & Linda Vista</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">East County</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>El Cajon & La Mesa</li>
                      <li>Santee & Lakeside</li>
                      <li>Spring Valley & Lemon Grove</li>
                      <li>Alpine & Jamul</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">South Bay</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Chula Vista & National City</li>
                      <li>Bonita & Eastlake</li>
                      <li>Otay Ranch & San Ysidro</li>
                      <li>Paradise Hills & Skyline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Coastal</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Oceanside & Carlsbad</li>
                      <li>Encinitas & Cardiff</li>
                      <li>Leucadia & Olivenhain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Inland</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Poway & Rancho Bernardo</li>
                      <li>Rancho Santa Fe & Fairbanks Ranch</li>
                      <li>Vista & San Marcos</li>
                      <li>Escondido & Valley Center</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for same-day service in your area</p>
                </div>
              </div>

              {/* Sticky CTA */}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Junk Removal in San Diego?</p>
                    <p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>
                  </div>
                  <a
                    href="tel:6197500114"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive San Diego Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our <strong>junk pickup San Diego</strong> service handles residential, commercial, and specialty cleanouts throughout San Diego County. We provide professional junk removal for:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Furniture Removal:</strong> Sofas, mattresses, tables, chairs, bedroom sets</li>
                    <li><strong>Appliance Removal:</strong> Refrigerators, washers, dryers, stoves, dishwashers</li>
                    <li><strong>Estate Cleanouts:</strong> Complete property clearing with sensitive handling</li>
                    <li><strong>Hoarding Cleanup:</strong> Compassionate service for challenging situations</li>
                    <li><strong>Garage & Basement Cleanouts:</strong> Total space reclamation projects</li>
                    <li><strong>Yard Waste:</strong> Tree trimmings, landscaping debris, outdoor cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-green-600">Commercial Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Office Cleanouts:</strong> Furniture, equipment, and document disposal</li>
                    <li><strong>Retail Space Clearing:</strong> Fixtures, inventory, and display removal</li>
                    <li><strong>Restaurant Equipment:</strong> Commercial appliances and kitchen gear</li>
                    <li><strong>Construction Debris:</strong> Renovation materials, drywall, flooring</li>
                    <li><strong>Warehouse Clearing:</strong> Pallets, equipment, excess inventory</li>
                    <li><strong>Property Management:</strong> Tenant cleanouts and turnover services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Items We Remove Throughout San Diego County</h3>
              <p className="text-lg text-gray-700 mb-4">
                We handle all standard items in accordance with San Diego County disposal regulations:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Furniture of all types</li>
                    <li>Appliances & electronics</li>
                    <li>Mattresses & box springs</li>
                    <li>Hot tubs & exercise equipment</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Construction debris</li>
                    <li>Yard waste & landscaping</li>
                    <li>Office furniture & equipment</li>
                    <li>General household junk</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage & basement clutter</li>
                    <li>Storage unit cleanouts</li>
                    <li>Tenant move-out debris</li>
                    <li>Estate sale leftovers</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 text-sm italic">
                  <strong>Note:</strong> We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, call us at (619) 750-0114 — some items require special handling, and we'll help coordinate so you're fully taken care of.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Chooses Severin Cleaners</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a family-owned business serving San Diego County, we provide the reliability, professionalism, and local expertise San Diego residents and businesses expect:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Service Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Same-day service:</strong> Available when scheduled before 2 PM throughout San Diego County</li>
                    <li><strong>Licensed & insured:</strong> Comprehensive coverage protecting your property during removal</li>
                    <li><strong>Transparent pricing:</strong> $175-$495 based on volume, no hidden fees</li>
                    <li><strong>Family-owned:</strong> Local business with community commitment and accountability</li>
                    <li><strong>Professional crews:</strong> Trained, uniformed teams with courteous service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Regulatory Compliance</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>San Diego County regulations:</strong> All disposal follows local waste handling laws</li>
                    <li><strong>Proper documentation:</strong> Complete records of item disposal and recycling</li>
                    <li><strong>Licensed facilities:</strong> Items disposed at authorized San Diego County locations</li>
                    <li><strong>Environmental standards:</strong> Compliance with California and county requirements</li>
                    <li><strong>Special item coordination:</strong> Help arranging proper handling when needed</li>
                  </ul>
                </div>
              </div>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get San Diego Junk Removal Quote</h3>
                <p className="text-lg mb-6">
                  Professional <strong>San Diego junk removal</strong> with transparent pricing, same-day service, and county-wide coverage
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call Now for Same-Day Service: (619) 750-0114
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">💰 Transparent Pricing • Book Online & Save 15% 💰</p>
                  <div className="text-sm">
                    <strong>$175-$495 Standard Pricing</strong> • <strong>Same-Day Service Available</strong><br/>
                    <strong>Licensed & Insured</strong> • <strong>County-Wide Coverage</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Serving Coastal • Central • East County • South Bay • North County • All San Diego neighborhoods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SanDiegoFAQSection />

      {/* Service Pages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">San Diego Junk Removal Services</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal</h4>
              <p className="text-gray-600 text-sm">Complete furniture removal from homes and businesses</p>
            </a>
            <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal</h4>
              <p className="text-gray-600 text-sm">Safe appliance disposal services</p>
            </a>
            <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts</h4>
              <p className="text-gray-600 text-sm">Compassionate full property estate cleanout service</p>
            </a>
            <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris</h4>
              <p className="text-gray-600 text-sm">Renovation and construction waste removal</p>
            </a>
            <a href="/hoarding-cleanup-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hoarding Cleanup</h4>
              <p className="text-gray-600 text-sm">Sensitive hoarding situation cleanout services</p>
            </a>
            <a href="/hot-tub-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Hot Tub Removal</h4>
              <p className="text-gray-600 text-sm">Professional hot tub and spa removal service</p>
            </a>
            <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
              <p className="text-gray-600 text-sm">Business and commercial property cleanouts</p>
            </a>
            <a href="/emergency-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Service</h4>
              <p className="text-gray-600 text-sm">Same-day junk removal available</p>
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood Pages */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">San Diego Neighborhood Junk Removal</h3>
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <a href="/junk-removal-la-jolla" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Jolla</span>
            </a>
            <a href="/junk-removal-del-mar" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Del Mar</span>
            </a>
            <a href="/junk-removal-pacific-beach" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Pacific Beach</span>
            </a>
            <a href="/junk-removal-point-loma" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Point Loma</span>
            </a>
            <a href="/junk-removal-north-park" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">North Park</span>
            </a>
            <a href="/junk-removal-hillcrest" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Hillcrest</span>
            </a>
            <a href="/junk-removal-kearny-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Kearny Mesa</span>
            </a>
            <a href="/junk-removal-clairemont" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Clairemont</span>
            </a>
            <a href="/junk-removal-el-cajon" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">El Cajon</span>
            </a>
            <a href="/junk-removal-la-mesa" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">La Mesa</span>
            </a>
            <a href="/junk-removal-chula-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Chula Vista</span>
            </a>
            <a href="/junk-removal-oceanside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Oceanside</span>
            </a>
            <a href="/junk-removal-poway" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Poway</span>
            </a>
            <a href="/junk-removal-rancho-santa-fe" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Rancho Santa Fe</span>
            </a>
            <a href="/junk-removal-vista" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Vista</span>
            </a>
          </div>
          <p className="text-center mt-8">
            <span className="text-gray-600">Don't see your San Diego neighborhood? </span>
            <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline">
              Call (619) 750-0114 for service in your area
            </a>
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
