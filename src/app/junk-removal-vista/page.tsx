import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vista Junk Removal | North County Reliable Service | (619) 750-0114",
  description: "Vista junk removal Shadowridge, Rancho Buena Vista. Affordable North County, breweries, business parks, family homes. (619) 750-0114",
  keywords: [
    "Vista junk removal",
    "junk hauling Vista",
    "junk pickup Vista",
    "trash removal Vista",
    "Vista San Diego junk removal",
    "Shadowridge junk removal",
    "Downtown Vista junk hauling",
    "Vista Business Park cleanout",
    "Rancho Buena Vista junk removal",
    "Buena Creek junk hauling"
  ],
  openGraph: {
    title: "Vista Junk Removal | Same-Day Hauling | Licensed & Insured",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving all Vista neighborhoods including Shadowridge and Rancho Buena Vista.",
    url: "https://severincleaners.com/junk-removal-vista",
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Vista Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vista Junk Removal | Same-Day Hauling | Licensed & Insured",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving all Vista neighborhoods including Shadowridge and Rancho Buena Vista.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-vista",
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
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Vista',
    'geo.position': '33.2000;-117.2425',
    'ICBM': '33.2000, -117.2425',
  },
};

const vistaFAQs = [
  {
    question: "How much does junk removal cost in Vista?",
    answer: "Our <strong>Vista junk removal</strong> pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure:"
  },
  {
    question: "Do you handle apartment and condo junk hauling in Vista?",
    answer: "Yes! We specialize in apartment and condo <strong>junk pickup Vista</strong> services, especially in Downtown Vista Village and Shadowridge complexes. Our team navigates stairs, elevators, and tight spaces with care. We coordinate with property managers and respect HOA guidelines for all <strong>trash removal Vista</strong> projects."
  },
  {
    question: "Can you provide same-day junk pickup in Vista?",
    answer: "Absolutely! We offer same-day <strong>Vista junk removal</strong> service 7 days a week. Our local team can often arrive within 2-4 hours of your call for emergency cleanouts. Whether you need urgent help for moving deadlines or unexpected situations, our same-day <strong>junk hauling Vista</strong> service is ready to help."
  },
  {
    question: "Do you work with Vista businesses and warehouses?",
    answer: "Yes, we provide comprehensive commercial <strong>Vista San Diego junk removal</strong> for businesses throughout Vista Business Park, downtown breweries, and warehouse facilities. Our services include office cleanouts, retail space clearing, and industrial equipment removal. We work with contractors, property managers, and business owners on projects of all sizes."
  },
  {
    question: "Are your junk removal services eco-friendly in North County?",
    answer: "Absolutely. Our <strong>Vista junk removal</strong> approach prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations."
  }
];

export default function JunkRemovalVistaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Vista",
    serviceName: "Junk Removal",
    description: "Professional Vista junk removal for families, apartments & businesses. Same-day junk hauling Vista, eco-friendly disposal. Serving Shadowridge, Downtown Vista Village, Rancho Buena Vista, Buena Creek.",
    url: "https://severincleaners.com/junk-removal-vista",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Vista Junk Removal", url: "https://severincleaners.com/junk-removal-vista" },
  ]);

  const faqSchema = generateFAQSchema(vistaFAQs);

  const nearbyLocations = [
    { name: "Oceanside", slug: "junk-removal-oceanside" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Rancho Santa Fe", slug: "junk-removal-rancho-santa-fe" },
    { name: "Poway", slug: "junk-removal-poway" },
  ];

  return (
    <div className={`${inter.variable} font-sans`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                #1 Vista Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Vista Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                North County Reliable Service • Family & Business Experts • Same-Day Available
              </p>

              <p className="text-lg mb-8">
                ✓ North County Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Main Content - Left Column */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-8">

                    {/* Introduction */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">
                      Professional Junk Hauling Vista – Downtown to Shadowridge
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Vista junk removal</strong> serves one of North County's most dynamic cities, blending historic downtown character with modern suburban development. From the craft brewery district in Downtown Vista Village to hillside homes in Shadowridge, our <strong>junk hauling Vista</strong> team handles the diverse needs of this 19-square-mile North County community. We provide same-day <strong>trash removal Vista</strong> for family homes, apartments, and business properties throughout the 92081, 92083, and 92084 areas with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Vista operation is strategically positioned to serve North County's varied property landscape. We understand that <strong>Vista San Diego junk removal</strong> requires knowledge of everything from compact downtown apartments near the Civic Center to expansive family homes in Rancho Buena Vista, from brewery cleanouts on Main Street to warehouse clearances in Vista Business Park. Whether you're removing furniture from a downtown condo, clearing garage storage from a Shadowridge family home, or handling commercial debris from a Buena Creek business, our team brings the versatility and local expertise North County properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk removal Vista</strong> service covers every corner of this diverse North County city. We've completed thousands of jobs throughout Vista's varied neighborhoods, each with unique characteristics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Downtown Vista Village:</strong> Historic core with breweries, restaurants, mixed-use buildings, and vintage homes requiring careful access coordination</li>
                        <li><strong>Shadowridge:</strong> Hillside golf course community with modern family homes, HOA regulations, and panoramic views</li>
                        <li><strong>Rancho Buena Vista:</strong> Established family neighborhood with larger lots, mature landscaping, and multi-car garages</li>
                        <li><strong>Buena Creek:</strong> Northern residential area with schools, parks, and family-oriented development</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Vista Business Park:</strong> Commercial and industrial corridor off Sycamore Avenue requiring after-hours service options</li>
                        <li><strong>Vista Village Drive Area:</strong> Central corridor with retail centers, apartments, and mixed commercial-residential</li>
                        <li><strong>Brengle Terrace:</strong> Central park area surrounded by established neighborhoods and community facilities</li>
                        <li><strong>North Vista:</strong> Newer developments near Oceanside boundary with contemporary family homes</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Vista San Diego junk removal</strong> team navigates every major route and neighborhood street in this sprawling North County city. We plan each <strong>junk pickup Vista</strong> job with detailed routing:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Vista Village Drive:</strong> Main east-west corridor connecting downtown to eastern developments</li>
                      <li>• <strong>Sycamore Avenue:</strong> Business Park access road with commercial and industrial traffic</li>
                      <li>• <strong>Main Street:</strong> Historic downtown core with brewery district and vintage buildings</li>
                      <li>• <strong>Broadway:</strong> Parallel downtown route with residential and commercial mix</li>
                      <li>• <strong>Shadowridge Drive:</strong> Hillside community access with winding roads and elevation changes</li>
                      <li>• <strong>Buena Creek Road:</strong> Northern residential connector serving schools and parks</li>
                      <li>• <strong>Thibodo Road:</strong> Western access linking to coastal communities via SR-78</li>
                      <li>• <strong>Mar Vista Drive:</strong> Eastern hillside route with family neighborhoods and canyon views</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Vista Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Vista</strong> service near all major North County landmarks:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Vista Civic Center—government hub and community services</li>
                        <li>• Shadowridge Golf Club—centerpiece of hillside community</li>
                        <li>• Brengle Terrace Park—central recreation area and amphitheater</li>
                        <li>• Downtown Vista Brewery District—craft beer corridor and nightlife</li>
                        <li>• Vista Historical Museum—heritage preservation and cultural center</li>
                        <li>• Rancho Minerva Park—community park and sports facilities</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Vista Business Park—commercial and industrial employment center</li>
                        <li>• Tri-City Medical Center—regional hospital and healthcare campus</li>
                        <li>• Vista Village Shopping Center—retail anchor for central neighborhoods</li>
                        <li>• Buena Vista Park—northern recreation area and family destination</li>
                        <li>• Vista Entertainment Center—movie theater and retail complex</li>
                        <li>• Antique Gas & Steam Engine Museum—unique cultural attraction</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Vista's role as a North County employment and residential center creates traffic patterns affecting <strong>junk hauling Vista</strong> timing:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (6:30-8:30 AM, 4-6 PM):</strong> Vista Village Drive, Sycamore Avenue, and SR-78 connections experience heavy commuter traffic as workers travel to/from coastal employment centers and inland destinations. We schedule mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) service windows to avoid these peak periods, particularly for properties near major thoroughfares.</li>
                      <li><strong>Downtown brewery district (Thu-Sat evenings):</strong> Main Street and Broadway experience nightlife traffic Thursday-Saturday 5 PM-midnight as the craft brewery scene draws crowds. For downtown commercial properties, we recommend early morning (6-9 AM) or Sunday service when streets are clear and business dumpster areas are accessible for coordination.</li>
                      <li><strong>Business Park operations (weekdays 8 AM-5 PM):</strong> Vista Business Park sees concentrated commercial activity during standard business hours. For warehouse and office cleanouts, we offer after-hours service (6-9 PM weekdays, weekends) to minimize disruption to active operations and ensure clear loading dock access without interfering with business traffic.</li>
                      <li><strong>Hillside Shadowridge access:</strong> Golf course community experiences member traffic Thursday-Sunday mornings during peak play times (7 AM-12 PM). For Shadowridge properties, afternoon scheduling (1-5 PM) provides clearest access on club streets while respecting the quieter residential atmosphere this premium community expects.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">North County Inland Climate</h3>
                    <p className="text-gray-700 mb-6">
                      Vista's inland North County position creates distinct seasonal patterns affecting junk removal operations. Summer temperatures (June-September) regularly reach 85-95°F, making early morning scheduling (7-10 AM) preferable for crew efficiency and client comfort during property walkthroughs. The warm, dry climate accelerates outdoor storage deterioration—patio furniture, garage-stored items, and backyard equipment show sun damage and heat effects faster than coastal properties, creating year-round junk removal demand. Vista's elevation and distance from the coast means less marine layer influence—mornings are typically clear rather than foggy, allowing earlier start times year-round compared to coastal communities. Winter rainy season (December-February) brings occasional heavy rainfall events that temporarily affect unpaved areas and hillside streets, requiring schedule coordination. Spring and fall (March-May, October-November) offer ideal working conditions with moderate temperatures (65-80°F) and minimal weather disruptions, making these months popular for large-scale garage cleanouts and estate projects that benefit from comfortable outdoor staging areas.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Vista</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Vista junk removal</strong> service handles diverse items reflecting North County's mixed residential and commercial character:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Sofas, sectionals, recliners</a> from family room updates</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, bed frames, bedroom furniture from moves</li>
                          <li>• Dining tables, chairs, kitchen sets from downsizing</li>
                          <li>• Desks, office furniture, bookshelves from home offices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, freezers, washers, dryers</a> from remodels</li>
                          <li>• Dishwashers, stoves, microwaves during kitchen upgrades</li>
                          <li>• TVs, computers, electronics from tech refreshes</li>
                          <li>• Exercise equipment, treadmills, home gym gear</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Commercial & Business Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office furniture</a>, cubicles, conference tables</li>
                          <li>• Brewery equipment, restaurant fixtures, retail displays</li>
                          <li>• Warehouse inventory, industrial shelving, storage racks</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from commercial renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for family property transitions</li>
                          <li>• Apartment complex turnovers and tenant move-outs</li>
                          <li>• <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">Garage and storage unit</a> complete clearances</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                          <li>• <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">Same-day service</a> throughout North County Vista</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Vista Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe your items and Vista location. We'll provide volume-based pricing and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Vista</strong> service throughout North County. We coordinate timing around traffic patterns and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items and provide final pricing before starting—no hidden fees.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team handles all lifting and loading. We protect property, navigate tight spaces, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort for donation, recycling, and responsible disposal. Usable items go to North County charities, recyclables to proper facilities.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep clean after removal and collect payment. Most jobs complete in under two hours.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Vista Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County Versatility:</strong> We handle Vista's diverse property mix with equal expertise. From downtown brewery cleanouts to Shadowridge family homes to Business Park warehouse clearances, our team has completed thousands of Vista jobs. We navigate everything from compact downtown apartments to sprawling Rancho Buena Vista estates, understanding the unique requirements of each Vista neighborhood and property type.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Vista and North County. Our dispatch monitors Vista Village Drive and SR-78 traffic conditions, scheduling arrival windows that work around commute congestion and ensure reliable, on-time service even during busy North County periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees. Upfront volume-based quotes with all labor, hauling, and disposal included. Downtown access challenges or Shadowridge hillside locations don't change our rates—you pay for volume removed. Most Vista jobs range from quarter-truck to full-truck loads with clear pricing communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for residential homes, apartment complexes, and commercial properties throughout Vista's diverse North County landscape—from downtown businesses to hillside family estates.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Vista"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Vista"
          contextParagraph="Family home and business cleanouts throughout Vista—from Downtown Village to Shadowridge—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Vista" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Vista"
          description="Get answers to common questions about our <strong>junk removal Vista</strong> services, pricing, and same-day availability."
          faqs={vistaFAQs}
          ctaTitle="Still Have Questions About Vista Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Vista</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Vista Business Park and brewery district commercial cleanouts</p>
              </a>
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home and apartment furniture disposal services</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Refrigerator, washer, dryer disposal for homes and businesses</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
