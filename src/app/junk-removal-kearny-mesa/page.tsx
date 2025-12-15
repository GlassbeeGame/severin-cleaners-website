import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import LocationPricingSection from "@/components/LocationPricingSection";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Kearny Mesa Junk Removal | Commercial District Experts | (619) 750-0114',
  description: 'Kearny Mesa commercial junk removal Convoy District, warehouses. Office furniture, industrial debris, auto shops. (619) 750-0114',
  keywords: [
    'Kearny Mesa junk removal',
    'junk hauling Kearny Mesa',
    'junk pickup Kearny Mesa',
    'trash removal Kearny Mesa',
    'commercial junk removal Kearny Mesa',
    'office cleanout Kearny Mesa'
  ],
  openGraph: {
    title: 'Kearny Mesa Junk Removal | Commercial & Residential Specialists | Same-Day Service',
    description: 'Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-kearny-mesa',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Kearny Mesa Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kearny Mesa Junk Removal | Commercial & Residential Specialists | Same-Day Service',
    description: 'Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-kearny-mesa',
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
    'geo.placename': 'Kearny Mesa',
    'geo.position': '32.8170;-117.1392',
    'ICBM': '32.8170, -117.1392',
  },
};

const kearnyMesaFAQs = [
  {
    question: "How much does junk removal cost in Kearny Mesa?",
    answer: "Our <strong>Kearny Mesa junk removal</strong> pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure:"
  },
  {
    question: "Do you provide same-day junk hauling in Kearny Mesa?",
    answer: "Absolutely! We offer same-day <strong>junk pickup Kearny Mesa</strong> service for urgent commercial and residential needs. Our local team understands the fast-paced business environment of Kearny Mesa and can respond quickly for office closures, warehouse cleanouts, or emergency residential situations."
  },
  {
    question: "Can you handle office and warehouse junk removal in Kearny Mesa?",
    answer: "Yes! Our <strong>commercial junk removal Kearny Mesa</strong> service specializes in office cleanouts, warehouse junk hauling, and industrial equipment removal. We handle cubicles, filing cabinets, pallets, shelving, electronics, and construction debris. We offer flexible scheduling including after-hours and weekend service to minimize business disruption."
  },
  {
    question: "Do you recycle or donate items collected in Kearny Mesa?",
    answer: "Absolutely. Our <strong>trash removal Kearny Mesa</strong> approach prioritizes environmental responsibility through comprehensive recycling, donation programs, and disposal methods that comply with all local regulations."
  },
  {
    question: "Is commercial junk removal available for Kearny Mesa businesses?",
    answer: "Yes, we provide comprehensive <strong>commercial junk removal Kearny Mesa</strong> for businesses throughout the area including office parks, industrial complexes, auto dealerships, restaurants in Convoy District, and warehouse facilities. We offer business account pricing, flexible scheduling, and recurring service options tailored to your operational needs."
  }
];

export default function JunkRemovalKearnyMesaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Kearny Mesa",
    serviceName: "Junk Removal",
    description: "Professional Kearny Mesa junk removal for offices, warehouses, industrial parks. Commercial junk hauling experts serving Convoy District, auto businesses.",
    url: "https://severincleaners.com/junk-removal-kearny-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Kearny Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-kearny-mesa" },
  ]);

  const faqSchema = generateFAQSchema(kearnyMesaFAQs);

  // Remove @context from individual schemas since they'll be in @graph
  const { "@context": _serviceContext, ...serviceSchemaWithoutContext } = serviceSchema;
  const { "@context": _breadcrumbContext, ...breadcrumbSchemaWithoutContext } = breadcrumbSchema;
  const { "@context": _faqContext, ...faqSchemaWithoutContext } = faqSchema;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchemaWithoutContext, breadcrumbSchemaWithoutContext, faqSchemaWithoutContext]
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Commercial & Industrial Specialists Serving San Diego's Business Hub
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Kearny Mesa Junk Removal | Commercial District Experts
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Convoy District to Business Parks • Office & Warehouse Specialists • Fast Response
                </p>

                <p className="text-lg mb-8">
                  ⭐⭐⭐⭐⭐ 5.0 Rating • Industrial & Office Experts • Licensed & Insured
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:6197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>

                <p className="text-lg">
                  Same-Day Service Available • Business Account Pricing • After-Hours Service
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
                        Professional Kearny Mesa Junk Removal Services
                      </h2>

                      <p className="text-lg mb-4 text-gray-700">
                        <strong>Kearny Mesa junk removal</strong> serves San Diego's premier commercial and industrial hub, from the vibrant Convoy District restaurant scene to sprawling warehouse complexes and auto dealerships. Our <strong>junk hauling Kearny Mesa</strong> service specializes in both commercial operations—office cleanouts, warehouse debris removal, retail space clearing—and residential properties scattered throughout this business-focused community. We understand the fast-paced environment that makes Kearny Mesa essential to San Diego's economy.
                      </p>

                      <p className="text-lg mb-6 text-gray-700">
                        Whether you need <strong>commercial junk removal Kearny Mesa</strong> for an office renovation, warehouse cleanout, or restaurant equipment removal in Convoy District, our <strong>trash removal Kearny Mesa</strong> team provides flexible scheduling, competitive pricing, and expertise with industrial-scale projects. We serve businesses and residents throughout this diverse area, from I-805 industrial corridors to residential pockets near Serra Mesa, delivering professional solutions that keep Kearny Mesa moving.
                      </p>

                      {/* Neighborhoods/Districts */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Kearny Mesa Districts & Areas We Serve</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>junk pickup Kearny Mesa</strong> service covers the entire commercial district and surrounding residential areas. We've completed hundreds of projects throughout Kearny Mesa's unique zones, each requiring specialized expertise:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Convoy District:</strong> Asian restaurant row, retail shops, mixed-use buildings, vibrant commercial core</li>
                          <li><strong>Business Park East:</strong> Office complexes, corporate campuses, technology firms along Balboa Avenue</li>
                          <li><strong>Industrial Zone West:</strong> Warehouse facilities, distribution centers, light manufacturing near I-805</li>
                          <li><strong>Auto Dealership Row:</strong> Car dealerships, service centers, auto sales along major corridors</li>
                          <li><strong>Mercury Street Corridor:</strong> Industrial supply, manufacturing, warehouse operations</li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Aero Drive Office Parks:</strong> Corporate offices, medical facilities, professional services</li>
                          <li><strong>Residential Pockets:</strong> Apartment complexes, condos scattered among commercial zones</li>
                          <li><strong>Serra Mesa Border:</strong> Mixed residential and light commercial transitional area</li>
                          <li><strong>Clairemont Connection:</strong> Western residential neighborhoods near Clairemont boundary</li>
                          <li><strong>Tierrasanta Access:</strong> Eastern commercial and residential transition zone</li>
                        </ul>
                      </div>

                      {/* Major Streets */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Commercial Corridors</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>junk hauling Kearny Mesa</strong> team navigates this commercial district's complex street network expertly. Understanding loading dock access, business hour restrictions, and truck routing regulations ensures efficient service:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-2 mb-6 text-gray-700">
                        <li>• <strong>Convoy Street:</strong> Restaurant and retail spine, heavy pedestrian traffic, parking challenges</li>
                        <li>• <strong>Balboa Avenue:</strong> Major east-west corridor, office parks, commercial centers</li>
                        <li>• <strong>Kearny Villa Road:</strong> North-south connector, business access, industrial facilities</li>
                        <li>• <strong>Aero Drive:</strong> Office park complex, corporate campuses, medical centers</li>
                        <li>• <strong>Mercury Street:</strong> Industrial corridor, warehouse access, loading dock zones</li>
                        <li>• <strong>I-805:</strong> Western boundary, freeway access, major commuter route</li>
                        <li>• <strong>I-15:</strong> Eastern boundary, Miramar connection, commercial truck routing</li>
                        <li>• <strong>Othello Avenue:</strong> Warehouse district, industrial access, truck-friendly streets</li>
                      </ul>

                      {/* Landmarks */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Kearny Mesa Landmarks & Business Reference Points</h3>
                      <p className="text-gray-700 mb-4">
                        We use Kearny Mesa's well-known commercial landmarks to navigate efficiently, ensuring prompt service throughout this business district:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-3 mb-6 text-gray-700">
                        <li><strong>Convoy District Restaurants</strong> — Dense Asian cuisine corridor, retail shops, cultural landmark</li>
                        <li><strong>Kearny Mesa Auto Dealerships</strong> — Major car sales corridor, service centers, commercial anchor</li>
                        <li><strong>Mercury Business Plaza</strong> — Office complex, business services, commercial center</li>
                        <li><strong>Balboa Business Park</strong> — Corporate offices, technology firms, professional services</li>
                        <li><strong>Aero Drive Office Complex</strong> — Medical offices, corporate headquarters, business hub</li>
                        <li><strong>Kearny Mesa Shopping Centers</strong> — Retail plazas, commercial services, mixed-use developments</li>
                        <li><strong>Industrial Warehouse District</strong> — Distribution centers, manufacturing facilities, logistics operations</li>
                        <li><strong>Convoy Plaza</strong> — Shopping and dining destination, cultural community center</li>
                        <li><strong>Miramar Corporate Center</strong> — Business park, office complex, eastern boundary</li>
                        <li><strong>Kearny Villa Distribution Center</strong> — Warehouse complex, logistics hub, industrial landmark</li>
                        <li><strong>Serra Mesa Recreation Center</strong> — Community facility, residential area anchor</li>
                        <li><strong>I-805/I-15 Interchange</strong> — Major freeway junction, commercial access point</li>
                      </ul>

                      {/* Traffic Patterns */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Navigating Kearny Mesa's Commercial Traffic</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>trash removal Kearny Mesa</strong> crews understand the business district's unique traffic patterns and schedule service to minimize disruption:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h4 className="font-bold mb-2 text-orange-900">Business Commute Rush</h4>
                          <p className="text-gray-700 text-sm">Kearny Mesa's office parks create intense weekday morning (7-9 AM) and evening (4-6:30 PM) commuter traffic on I-805, I-15, and Balboa Avenue. We schedule commercial cleanouts outside peak hours or use after-hours service to avoid business disruption and traffic delays.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-bold mb-2 text-blue-900">Convoy Restaurant District</h4>
                          <p className="text-gray-700 text-sm">Convoy Street experiences heavy pedestrian and vehicle traffic during lunch (11 AM-2 PM) and dinner (5-9 PM) service. We coordinate restaurant equipment removal and commercial cleanouts during morning off-hours or late night to respect business operations and parking needs.</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-bold mb-2 text-green-900">Warehouse District Logistics</h4>
                          <p className="text-gray-700 text-sm">Industrial corridors along Mercury Street and I-805 experience commercial truck traffic throughout business hours. Our team understands loading dock protocols, warehouse scheduling requirements, and truck routing regulations for efficient industrial junk removal without disrupting operations.</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold mb-2 text-purple-900">Office Park Access</h4>
                          <p className="text-gray-700 text-sm">Business parks along Aero Drive and Balboa Avenue have specific property management requirements, loading zone restrictions, and tenant coordination needs. We work with building managers to schedule office cleanouts that comply with property rules and minimize tenant impact.</p>
                        </div>
                      </div>

                      {/* Services */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Commercial & Residential Junk Removal Services</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>commercial junk removal Kearny Mesa</strong> service handles the full spectrum of business and residential needs throughout this diverse district. From small office cleanouts to large warehouse projects, we deliver professional solutions:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Commercial & Industrial Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Office cleanouts</a> including cubicles, desks, electronics, filing cabinets</li>
                            <li>Warehouse junk removal with pallets, shelving, equipment, industrial debris</li>
                            <li><a href="/scrap-metal-removal" className="text-blue-600 hover:underline">Scrap metal removal</a> from industrial facilities and warehouses</li>
                            <li><a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris removal</a> for commercial fit-outs and renovations</li>
                            <li>Restaurant equipment removal including kitchen appliances, furniture, commercial gear</li>
                            <li>Auto dealership and repair shop cleanouts with tools, parts, equipment</li>
                            <li>Retail space clearing for store closures, renovations, inventory purges</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Residential Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Apartment and condo cleanouts in residential pockets throughout Kearny Mesa</li>
                            <li><a href="/furniture-removal-san-diego" className="text-blue-600 hover:underline">Furniture removal</a> including couches, beds, dining sets, office furniture</li>
                            <li><a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Appliance disposal</a> for refrigerators, washers, dryers, HVAC units</li>
                            <li><a href="/emergency-junk-removal-san-diego" className="text-blue-600 hover:underline">Emergency junk removal</a> for urgent commercial and business situations</li>
                            <li>Garage and storage area clearing for residential properties</li>
                            <li><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:text-blue-700 underline">Estate cleanouts</a> and downsizing assistance</li>
                            <li>HOA compliant service for apartment complexes and condos</li>
                          </ul>
                        </div>
                      </div>

                      {/* Commercial Focus */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Kearny Mesa Business District Specialists</h3>
                      <p className="text-gray-700 mb-4">
                        Kearny Mesa's commercial environment demands specialized expertise that standard residential junk removal services don't provide. Our team understands loading dock requirements, business hour restrictions, property manager coordination, and the logistics of commercial-scale projects. We schedule after-hours pickups for active restaurants in Convoy District, coordinate with warehouse managers for large industrial cleanouts during operational hours, and navigate busy Balboa Avenue corridor traffic patterns to reach office parks efficiently.
                      </p>

                      <p className="text-gray-700 mb-6">
                        We respect business operations with flexible scheduling—early morning, late evening, or weekend service—to minimize operational disruption. Our team provides HOA-compliant service for residential areas, maintains eco-friendly disposal practices that benefit the entire community, and offers volume discounts and business account pricing for recurring commercial clients. We're familiar with industrial park security protocols, loading dock logistics, and the fast-paced environment that makes Kearny Mesa San Diego's premier business district.
                      </p>

                      {/* How It Works */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">How Our Kearny Mesa Service Works</h3>
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <ol className="space-y-3 text-gray-700">
                          <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe your location (Convoy District, business park, warehouse zone) and project scope. We provide transparent commercial pricing with volume discounts available.</li>
                          <li><strong>2. Schedule Service:</strong> Choose flexible scheduling including same-day, after-hours, and weekend appointments. We coordinate with property managers and building requirements to ensure compliant service.</li>
                          <li><strong>3. Professional Arrival:</strong> Our commercial-trained crew arrives on schedule with industrial-grade equipment. We assess the project and confirm final pricing before work begins—no hidden fees.</li>
                          <li><strong>4. Efficient Removal:</strong> We handle loading, hauling, and disposal of everything from office furniture to warehouse equipment. Most commercial projects complete within 3-6 hours depending on scope and access.</li>
                          <li><strong>5. Commercial Recycling:</strong> Office equipment goes to certified electronics recyclers. Metal, cardboard, and recyclables are processed responsibly. Usable items donated when appropriate.</li>
                          <li><strong>6. Final Documentation:</strong> We provide completion documentation, disposal records, and invoicing as needed for business accounts. Many Kearny Mesa businesses use our recurring service for ongoing needs.</li>
                        </ol>
                      </div>

                      {/* Why Choose Us */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Why Kearny Mesa Businesses Choose Severin Cleaners</h3>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Commercial District Expertise</h4>
                        <p className="text-gray-700">
                          We understand Kearny Mesa's unique commercial environment—from Convoy District restaurant operations to warehouse logistics and office park property management requirements. Our team navigates loading docks, business hour restrictions, and commercial access protocols efficiently while respecting your business operations and timelines.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Flexible Business Scheduling</h4>
                        <p className="text-gray-700">
                          Commercial operations can't always wait for standard business hours. We provide after-hours, early morning, and weekend service to minimize business disruption. Whether you need a restaurant equipment removal at 2 AM or weekend office cleanout, we accommodate your operational schedule.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Business Account Pricing</h4>
                        <p className="text-gray-700">
                          We offer competitive commercial rates, volume discounts for large projects, and business account pricing for recurring clients. Many Kearny Mesa businesses rely on us for ongoing junk removal needs, from regular office cleanouts to periodic warehouse purges. Ask about our commercial account programs.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Sidebar - Right Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="Kearny Mesa"
                      nearbyLocations={[
                        { name: "Clairemont", slug: "junk-removal-clairemont" },
                        { name: "North Park", slug: "junk-removal-north-park" },
                        { name: "Hillcrest", slug: "junk-removal-hillcrest" },
                        { name: "Mira Mesa", slug: "junk-removal-mira-mesa" },
                      ]}
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <LocationPricingSection
            locationName="Kearny Mesa"
            contextParagraph="Transparent pricing for commercial and residential junk removal throughout Kearny Mesa—from Convoy District restaurants to business park offices. Whether you're clearing a warehouse or managing an office cleanout, you'll know the exact cost before we begin."
          />

          {/* Trust Signals Section */}
          <TrustSignalsSection locationName="Kearny Mesa" coverageArea="Central San Diego" />

          {/* FAQ Section */}
          <FAQSection
          title="Frequently Asked Questions - Junk Removal Kearny Mesa"
          description="Get answers to common questions about our <strong>junk removal Kearny Mesa</strong> services, pricing, and same-day availability."
          faqs={kearnyMesaFAQs}
          ctaTitle="Still Have Questions About Kearny Mesa Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal Kearny Mesa</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your Kearny Mesa Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing an office in a business park, removing warehouse equipment, or managing a residential cleanout, Severin Cleaners delivers the trusted commercial and residential junk removal Kearny Mesa businesses and residents depend on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:+16197500114"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Call (619) 750-0114
                  </a>
                  <a
                    href="/contact"
                    className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of Kearny Mesa — Convoy District to Industrial Parks • Same-Day Service • Business Accounts Available
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related Commercial & Residential Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                  <p className="text-gray-600">Office, warehouse, and industrial park cleanout specialists</p>
                </a>
                <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                  <p className="text-gray-600">Commercial renovation and fit-out debris hauling</p>
                </a>
                <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                  <p className="text-gray-600">Residential and commercial furniture disposal</p>
                </a>
              </div>
            </div>
          </section>

      </main>
      <Footer />
    </>
  );
}
