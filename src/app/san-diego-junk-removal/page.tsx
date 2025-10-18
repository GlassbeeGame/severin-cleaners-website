import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SanDiegoFAQSection from "./SanDiegoFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { generateServiceSchema, combineSchemas } from "@/lib/schema";

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
    canonical: 'https://severincleaners.com/san-diego-junk-removal',
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
  const serviceSchema = generateServiceSchema({
    name: "San Diego Junk Removal",
    description: "Professional junk removal serving all San Diego County. Same-day service available for furniture removal, appliance disposal, estate cleanouts, construction debris removal, and more.",
    url: "https://severincleaners.com/san-diego-junk-removal",
    serviceType: "Junk Removal Service",
    areaServed: "San Diego County, CA",
  });

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
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
              San Diego Junk Removal
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
                href="/contact"
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
                We provide junk removal across all of San Diego County. From La Jolla to El Cajon, Del Mar to Chula Vista, we serve every neighborhood. Family-owned and locally operated. Licensed, insured, and ready to help.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Every San Diego area has unique needs. Downtown apartments need fast service. North County estates require careful handling. East County properties often have more space. South Bay commercial jobs need flexible scheduling. We understand them all.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Our team handles single items or whole-property cleanouts. We follow all local disposal rules. Transparent pricing with same-day availability. Professional service from start to finish.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                San Diego County is diverse. Beach communities, hillside homes, and mountain areas all get our best service. We work with HOAs and property managers. Coastal access, gated communities, and urban density - we handle it all with skill and care.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">San Diego County Coverage Areas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Coastal San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-la-jolla" className="hover:underline">La Jolla</a> & <a href="/junk-removal-pacific-beach" className="hover:underline">Pacific Beach</a></li>
                      <li><a href="/junk-removal-del-mar" className="hover:underline">Del Mar</a> & Solana Beach</li>
                      <li><a href="/junk-removal-point-loma" className="hover:underline">Point Loma</a> & Ocean Beach</li>
                      <li>Coronado & Imperial Beach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">Central San Diego</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>Downtown & Gaslamp Quarter</li>
                      <li><a href="/junk-removal-north-park" className="hover:underline">North Park</a> & <a href="/junk-removal-hillcrest" className="hover:underline">Hillcrest</a></li>
                      <li>Mission Valley & <a href="/junk-removal-kearny-mesa" className="hover:underline">Kearny Mesa</a></li>
                      <li><a href="/junk-removal-clairemont" className="hover:underline">Clairemont</a> & Linda Vista</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">East County</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-el-cajon" className="hover:underline">El Cajon</a> & <a href="/junk-removal-la-mesa" className="hover:underline">La Mesa</a></li>
                      <li><a href="/junk-removal-santee" className="hover:underline">Santee</a> & <a href="/junk-removal-lakeside" className="hover:underline">Lakeside</a></li>
                      <li><a href="/junk-removal-spring-valley" className="hover:underline">Spring Valley</a> & <a href="/junk-removal-lemon-grove" className="hover:underline">Lemon Grove</a></li>
                      <li>Alpine & Jamul</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">South Bay</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-chula-vista" className="hover:underline">Chula Vista</a> & National City</li>
                      <li>Bonita & Eastlake</li>
                      <li>Otay Ranch & San Ysidro</li>
                      <li>Paradise Hills & Skyline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Coastal</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-oceanside" className="hover:underline">Oceanside</a> & Carlsbad</li>
                      <li>Encinitas & Cardiff</li>
                      <li>Leucadia & Olivenhain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-2">North County Inland</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li><a href="/junk-removal-poway" className="hover:underline">Poway</a> & Rancho Bernardo</li>
                      <li><a href="/junk-removal-rancho-santa-fe" className="hover:underline">Rancho Santa Fe</a> & <a href="/junk-removal-carmel-valley" className="hover:underline">Carmel Valley</a></li>
                      <li><a href="/junk-removal-vista" className="hover:underline">Vista</a> & San Marcos</li>
                      <li>Escondido & Valley Center</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 750-0114 for <a href="/same-day-junk-removal-san-diego" className="hover:underline">same-day service</a> in your area</p>
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

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Junk Removal Pricing Works in San Diego</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our pricing is straightforward and volume-based. You pay for trailer space, not hours or item counts. This transparent approach gives you the cost upfront. No surprises when we finish.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Several factors affect pricing. Junk volume is the main one. Property access matters too - stairs, elevators, parking distance. Item weight impacts cost since concrete weighs more than furniture. Some materials need special handling. Standard pricing ranges from $175 for one item to $495 for a full load. All prices include labor, hauling, and proper disposal.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                We guarantee no hidden fees ever. Our quote is your final price. Jobs taking longer don't cost more. Extra effort doesn't change the rate. This builds trust with San Diego residents. They call us for <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">furniture removal</a>, and all removal needs.
              </p>

              {/* Pricing Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service Level</th>
                      <th className="px-6 py-4 text-left font-semibold">Volume</th>
                      <th className="px-6 py-4 text-left font-semibold">Price</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Single Item</td>
                      <td className="px-6 py-4">1 item</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$175</td>
                      <td className="px-6 py-4">Quick pickups</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">1/4 Trailer</td>
                      <td className="px-6 py-4">5-10 items</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$249</td>
                      <td className="px-6 py-4">Small cleanouts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3/8 Trailer</td>
                      <td className="px-6 py-4">Quarter room</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$319</td>
                      <td className="px-6 py-4">Garage corners</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">1/2 Trailer</td>
                      <td className="px-6 py-4">Half trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$349</td>
                      <td className="px-6 py-4">Room cleanouts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5/8 Trailer</td>
                      <td className="px-6 py-4">Over half</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$366</td>
                      <td className="px-6 py-4">Large rooms</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3/4 Trailer</td>
                      <td className="px-6 py-4">Most of trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$429</td>
                      <td className="px-6 py-4">Multiple rooms</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">7/8 Trailer</td>
                      <td className="px-6 py-4">Nearly full</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$462</td>
                      <td className="px-6 py-4">Small house</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-6 py-4 font-medium">Full Load</td>
                      <td className="px-6 py-4">Full trailer</td>
                      <td className="px-6 py-4 font-bold text-blue-600">$495</td>
                      <td className="px-6 py-4">Whole house</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <p className="text-gray-800 font-semibold mb-2">⏰ Same-Day Service Available</p>
                <p className="text-gray-700">
                  Call before 2 PM for same-day <strong>junk removal San Diego</strong> service. Same-day slots fill quickly—contact us early at <a href="tel:6197500114" className="text-blue-600 font-bold hover:underline">(619) 750-0114</a> to secure your appointment.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">When You Need Professional Junk Removal</h3>
              <p className="text-lg text-gray-700 mb-4">
                Professional junk removal helps in many situations. Life changes create removal needs. Here's when residents and businesses call us most often:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Moving & Downsizing</h4>
                  <p className="text-gray-700 mb-3">
                    Moving to a smaller home in San Diego? Our <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">cleanout services</a> help you declutter before the move. We handle unwanted furniture, appliances, and boxes of belongings you don't want to take with you—clearing space and reducing moving truck costs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Estate Situations</h4>
                  <p className="text-gray-700 mb-3">
                    Handling an estate after a loved one passes requires sensitivity and efficiency. Our <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout San Diego</a> service provides compassionate property clearing with proper documentation for probate requirements and estate settlement.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Property Sale Preparation</h4>
                  <p className="text-gray-700 mb-3">
                    Selling a San Diego property? Buyers want clean, empty spaces. We clear out unwanted items, remove old furniture and appliances, and help you stage properties for maximum sale appeal—whether it's a <a href="/junk-removal-la-jolla" className="text-blue-600 hover:underline">La Jolla</a> condo or <a href="/junk-removal-el-cajon" className="text-blue-600 hover:underline">El Cajon</a> home.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">HOA Violations</h4>
                  <p className="text-gray-700 mb-3">
                    Received an HOA notice about exterior clutter or garage overflow? San Diego HOAs enforce strict property standards. Our <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day junk removal San Diego</a> service helps you meet compliance deadlines quickly.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Renovation Projects</h4>
                  <p className="text-gray-700 mb-3">
                    Remodeling your San Diego home or business? Our <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> handles drywall, flooring, cabinets, and renovation waste—keeping your project site clean and safe.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Emergency Situations</h4>
                  <p className="text-gray-700 mb-3">
                    Water damage, property damage, or sudden move-out requirements? Our <a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">emergency junk removal</a> provides rapid response throughout San Diego County when time matters most.
                  </p>
                </div>
              </div>

              <div className="text-center bg-blue-600 text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Get Your Free San Diego Junk Removal Quote</h3>
                <p className="text-lg mb-6">
                  Transparent pricing • Same-day service • Licensed & insured throughout San Diego County
                </p>
                <a
                  href="tel:6197500114"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block"
                >
                  📞 Call Now: (619) 750-0114
                </a>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens to Your Junk</h3>
              <p className="text-lg text-gray-700 mb-4">
                All items get proper disposal. We follow City and County regulations strictly. Landfills aren't our only option. Responsible practices protect our community and environment. This matters to us.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Every load goes to licensed facilities. Donations head to local charities. Recyclable materials get separated properly. Recycling centers receive what they can process. Complete documentation is maintained always. This helps with <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a> and probate needs. Property managers appreciate our disposal records too.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Some items need special handling beyond standard service. We coordinate with trusted professionals when needed. Proper handling is guaranteed for everything. Our commitment is taking care of you completely. Going beyond core services when necessary makes the difference. This comprehensive approach builds trust across San Diego.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive San Diego Junk Removal Services</h3>
              <p className="text-lg text-gray-700 mb-4">
                We handle all cleanout types across the county. Residential, commercial, and specialty projects all get professional service. Here's what we remove:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Residential Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong><a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture Removal</a>:</strong> Sofas, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, tables, chairs, bedroom sets</li>
                    <li><strong><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliance Removal</a>:</strong> Refrigerators, washers, dryers, stoves, dishwashers</li>
                    <li><strong><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate Cleanouts</a>:</strong> Complete property clearing with sensitive handling</li>
                    <li><strong><a href="/hoarding-cleanup-san-diego" className="text-blue-600 hover:underline">Hoarding Cleanup</a>:</strong> Compassionate service for challenging situations</li>
                    <li><strong><a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage & Basement Cleanouts</a>:</strong> Total space reclamation projects</li>
                    <li><strong>Yard Waste:</strong> Tree trimmings, landscaping debris, outdoor cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-green-600">Commercial Services</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office Cleanouts</a>:</strong> Furniture, equipment, and document disposal</li>
                    <li><strong>Retail Space Clearing:</strong> Fixtures, inventory, and display removal</li>
                    <li><strong>Restaurant Equipment:</strong> Commercial appliances and kitchen gear</li>
                    <li><strong><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction Debris</a>:</strong> Renovation materials, drywall, flooring</li>
                    <li><strong>Warehouse Clearing:</strong> Pallets, equipment, excess inventory</li>
                    <li><strong><a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Property Management</a>:</strong> Tenant cleanouts and turnover services</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Items We Remove Throughout San Diego County</h3>
              <p className="text-lg text-gray-700 mb-4">
                All standard items are handled properly. County disposal regulations guide our work. Here's what we commonly remove:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture of all types</a></li>
                    <li><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliances & electronics</a></li>
                    <li><a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses & box springs</a></li>
                    <li><a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs</a> & exercise equipment</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a></li>
                    <li>Yard waste & landscaping</li>
                    <li><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office furniture & equipment</a></li>
                    <li>General household junk</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Garage & <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">basement cleanouts</a></li>
                    <li>Storage unit cleanouts</li>
                    <li><a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">Tenant move-out debris</a></li>
                    <li><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate sale leftovers</a></li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-4 text-sm italic">
                  <strong>Note:</strong> We handle all standard household items, furniture, appliances, construction debris, and yard waste in accordance with San Diego County regulations. If you're unsure about a specific item, call us at (619) 750-0114 — some items require special handling, and we'll help coordinate so you're fully taken care of.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why San Diego Chooses Severin Cleaners</h3>
              <p className="text-lg text-gray-700 mb-4">
                We're a family-owned business serving all of San Diego County. Reliability, professionalism, and local expertise define our service. Here's what makes us different:
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
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Emergency Service</h4>
              <p className="text-gray-600 text-sm">Emergency and same-day junk removal</p>
            </a>
            <a href="/piano-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Piano Removal</h4>
              <p className="text-gray-600 text-sm">Specialized piano removal services</p>
            </a>
            <a href="/same-day-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Same-Day Service</h4>
              <p className="text-gray-600 text-sm">Fast same-day pickup available</p>
            </a>
            <a href="/junk-removal-cost-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Pricing Information</h4>
              <p className="text-gray-600 text-sm">Transparent junk removal pricing</p>
            </a>
            <a href="/services" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">All Services</h4>
              <p className="text-gray-600 text-sm">View our complete service list</p>
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 mb-4">
              Need a specific service? We handle all types of <strong>San Diego junk removal</strong> projects throughout the county.
            </p>
            <a
              href="tel:6197500114"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-block"
            >
              📞 Call (619) 750-0114 for Your Custom Quote
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
            <a href="/junk-removal-santee" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Santee</span>
            </a>
            <a href="/junk-removal-lakeside" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lakeside</span>
            </a>
            <a href="/junk-removal-spring-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Spring Valley</span>
            </a>
            <a href="/junk-removal-lemon-grove" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Lemon Grove</span>
            </a>
            <a href="/junk-removal-carmel-valley" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-center">
              <span className="font-medium">Carmel Valley</span>
            </a>
          </div>
          <p className="text-center mt-8">
            <span className="text-gray-600">Don't see your San Diego neighborhood? </span>
            <a href="tel:+16197500114" className="text-blue-500 font-bold hover:underline">
              Call (619) 750-0114 for service in your area
            </a>
          </p>
          <div className="text-center mt-6">
            <a href="/areas-we-serve" className="text-blue-600 font-semibold hover:underline text-lg">
              View All Service Areas →
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
