import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LemonGroveFAQSection from "./LemonGroveFAQSection";
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
  title: 'Lemon Grove Junk Removal | Local Family-Owned Service | (619) 750-0114',
  description: 'Lemon Grove budget junk removal apartments, Broadway corridor. Affordable multi-family, student rentals. (619) 750-0114',
  keywords: 'Lemon Grove junk removal, junk hauling Lemon Grove, junk pickup Lemon Grove, trash removal Lemon Grove, Lemon Grove San Diego junk removal, apartment junk removal',
  openGraph: {
    title: 'Lemon Grove Junk Removal | Family Homes & Apartment Specialists | Same-Day Service',
    description: 'Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-lemon-grove',
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
    title: 'Lemon Grove Junk Removal | Family Homes & Apartment Specialists | Same-Day Service',
    description: 'Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-lemon-grove',
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

export default function JunkRemovalLemonGrovePage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Lemon Grove",
    serviceName: "Junk Removal",
    description: "Affordable Lemon Grove junk removal for apartments, family homes, Broadway corridor. Community-focused service with eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-lemon-grove",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Lemon Grove Junk Removal", url: "https://severincleaners.com/junk-removal-lemon-grove" },
  ]);

  const nearbyLocations = [
    { name: "La Mesa", slug: "la-mesa" },
    { name: "Spring Valley", slug: "spring-valley" },
    { name: "El Cajon", slug: "el-cajon" },
    { name: "Chula Vista", slug: "chula-vista" },
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
                #1 Lemon Grove Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Lemon Grove Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Family Homes • Apartments • Broadway Corridor • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Community-Focused Service ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Lemon Grove – Community-Focused East County Service
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Lemon Grove junk removal</strong> serves one of East County's most tight-knit family communities. From Broadway's diverse commercial corridor to Berry Street Park's residential neighborhoods, our <strong>junk hauling Lemon Grove</strong> team navigates compact streets, apartment complexes, and family homes with efficiency and care. We provide same-day <strong>trash removal Lemon Grove</strong> for apartment turnovers, family cleanouts, and small business needs throughout the 91945 area with transparent pricing and community-focused service.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Lemon Grove operation is uniquely equipped to serve this diverse, family-oriented community. We understand that <strong>Lemon Grove San Diego junk removal</strong> requires more than just hauling equipment—it demands respect for working families, affordable pricing structures, coordination with apartment property managers, and the ability to work efficiently in one of East County's most densely populated areas. Whether you're clearing out a Broadway apartment after tenant move-out, removing accumulated storage from a family home near Lemon Grove Avenue, or handling a small business cleanout in the civic center area, our team brings the community understanding and affordable service Lemon Grove residents deserve.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lemon Grove Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>apartment junk removal</strong> service covers every corner of Lemon Grove's compact community, from historic downtown properties to newer residential developments. We've completed thousands of junk removal jobs throughout Lemon Grove's diverse neighborhoods, each with unique access challenges and community characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Downtown Lemon Grove:</strong> Historic district, civic center, iconic Lemon landmark with mixed-use buildings and limited parking</li>
                        <li><strong>Broadway Corridor:</strong> Main commercial street with apartments above businesses, shared alley access, and tight loading zones</li>
                        <li><strong>Berry Street Area:</strong> Family neighborhoods surrounding the park with mature homes and garage storage needs</li>
                        <li><strong>Massachusetts Avenue:</strong> Residential streets with single-family homes requiring estate and garage cleanouts</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Lemon Grove Avenue:</strong> Central north-south connector with apartment complexes and multifamily housing</li>
                        <li><strong>Trolley Station Area:</strong> Transit-oriented development with newer apartments and commercial spaces</li>
                        <li><strong>Lincoln Street:</strong> Residential neighborhood near schools with family home cleanout needs</li>
                        <li><strong>Central Avenue:</strong> Mixed residential and commercial requiring flexible service coordination</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Points</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Lemon Grove San Diego junk removal</strong> team knows every street and alley in this compact East County community. This local expertise matters when navigating the area's challenging infrastructure—narrow residential streets, limited street parking, apartment complex parking restrictions, and shared commercial loading zones. We plan each <strong>junk pickup Lemon Grove</strong> job with detailed access coordination to ensure efficient service:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Broadway:</strong> Main east-west commercial artery with mixed-use buildings and peak congestion periods</li>
                      <li>• <strong>Lemon Grove Avenue:</strong> Central corridor with apartment complexes and multifamily access coordination</li>
                      <li>• <strong>Massachusetts Avenue:</strong> Residential connector with single-family homes and standard driveway access</li>
                      <li>• <strong>Washington Street:</strong> Trolley station access with transit traffic and pedestrian considerations</li>
                      <li>• <strong>Berry Street:</strong> Park-adjacent residential with school zone timing requirements</li>
                      <li>• <strong>Lincoln Street:</strong> Family neighborhood street with mature homes and garage access</li>
                      <li>• <strong>Central Avenue:</strong> Mixed-use area requiring coordination with small businesses</li>
                      <li>• <strong>Grove Street:</strong> Compact residential with narrow streets and careful truck navigation</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lemon Grove Landmarks & Reference Points</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Lemon Grove</strong> service near all major community landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this close-knit community where neighbors know each other by name:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• The Big Lemon—iconic downtown landmark and community symbol</li>
                        <li>• Berry Street Park—central recreation area and family gathering space</li>
                        <li>• Lemon Grove Civic Center—government services and community hub</li>
                        <li>• Lemon Grove Trolley Station—transit access and downtown anchor</li>
                        <li>• Lemon Grove Library—educational resource and neighborhood reference</li>
                        <li>• Lemon Grove Historical Society—heritage center and downtown landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Mt. Vernon Elementary—school zone and family neighborhood reference</li>
                        <li>• Lemon Grove Academy—educational facility and community landmark</li>
                        <li>• Veterans Memorial—civic plaza and downtown gathering space</li>
                        <li>• Broadway Plaza—commercial district and shopping reference</li>
                        <li>• Lemon Grove Community Church—central faith community landmark</li>
                        <li>• Lemon Grove Village—historic downtown commercial district</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Lemon Grove's compact layout and commuter traffic affect <strong>trash removal Lemon Grove</strong> timing throughout the day. Our dispatch team actively monitors local traffic patterns and coordinates with you to schedule service windows that minimize disruption while maximizing efficiency. We've developed specific timing protocols for different Lemon Grove areas and property types:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday morning rush (7-9 AM):</strong> Broadway and Massachusetts Avenue experience heavy commuter traffic as residents head to I-94 and Route 94. School zones around Berry Street and Mt. Vernon Elementary require careful navigation. We recommend mid-morning (9 AM-12 PM) service windows when streets clear and parking becomes available near apartment complexes and residential properties.</li>
                      <li><strong>Afternoon school zones (2-4 PM):</strong> Areas near schools experience increased pedestrian and vehicle traffic during pickup hours. Streets around Berry Street Park and educational facilities require extra caution and slower navigation. We prioritize early afternoon (12-2 PM) or late afternoon (after 4 PM) for nearby properties to avoid peak school congestion periods.</li>
                      <li><strong>Trolley station coordination:</strong> The Lemon Grove Trolley Station creates pedestrian traffic and limited parking near Washington Street and downtown areas. We plan commercial and apartment cleanouts near the station during mid-day periods (10 AM-2 PM) when transit commuter parking pressure is reduced and loading zones are more accessible.</li>
                      <li><strong>Weekend apartment turnovers:</strong> Property managers often schedule apartment cleanouts for weekends to minimize tenant disruption. We offer Saturday morning (8 AM-12 PM) priority scheduling for apartment complexes and multifamily properties, coordinating with management offices to ensure smooth access to units and dumpster areas without interfering with current resident parking.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather & Service Planning</h3>
                    <p className="text-gray-700 mb-6">
                      Lemon Grove's inland East County location brings warmer temperatures and occasional rainfall that impact junk removal operations. Summer heat (June-September) regularly reaches the 80s and 90s, making early morning service windows (7-11 AM) most comfortable for both crew efficiency and property owner convenience during large cleanouts. Our team prioritizes morning scheduling during extreme heat periods, completing physical hauling work before afternoon temperatures peak. Apartment complexes with limited air conditioning in common areas particularly benefit from early service timing. Winter rains (December-February) are infrequent but can affect scheduling for outdoor storage cleanouts and garage access. We monitor weather forecasts and coordinate proactive communication with clients when rain threatens outdoor work areas. The compact nature of Lemon Grove's residential streets means storm water runoff can temporarily fill gutters and limit parking near curbs, requiring flexible scheduling after significant rainfall. Spring and fall offer ideal conditions year-round, with moderate temperatures and minimal weather disruptions for all types of junk removal projects from apartment turnovers to family home estate cleanouts.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Lemon Grove</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Lemon Grove junk removal</strong> service handles the diverse mix of items common to family homes and apartment living—from furniture to appliances to accumulated household items. We remove everything from single pieces to complete apartment and home cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, couches, sectionals from apartment turnovers</li>
                          <li>• Mattresses, box springs, bed frames from family homes</li>
                          <li>• Dining tables, chairs, kitchen furniture</li>
                          <li>• Dressers, nightstands, bedroom sets from downsizing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, washers, dryers from apartment upgrades</li>
                          <li>• Dishwashers, stoves, microwaves for kitchen renovations</li>
                          <li>• TVs, computers, outdated electronics disposal</li>
                          <li>• Window AC units, portable heaters, fans</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Family Home & Garage Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Garage cleanouts with tools, equipment, storage items</li>
                          <li>• Kids' toys, play equipment, outgrown furniture</li>
                          <li>• Exercise equipment, weights, home gym items</li>
                          <li>• Holiday decorations and seasonal storage clearance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Business & Office Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Small business cleanouts and office furniture</li>
                          <li>• Retail fixtures, shelving, display equipment</li>
                          <li>• Restaurant equipment and commercial appliances</li>
                          <li>• Office electronics, filing cabinets, desks</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Lemon Grove Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Lemon Grove location. For apartments, let us know about parking restrictions or elevator access. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Lemon Grove</strong> service throughout the community. We coordinate with apartment property managers for access and schedule around your availability for residential properties.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises. For apartment complexes, we coordinate with management offices as needed.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate apartment hallways and elevators, and complete removal efficiently. You simply point—we handle the rest, including proper disposal coordination.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local East County charities, recyclables to proper facilities, and only true trash to landfill as last resort. We support Lemon Grove's community organizations whenever possible.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most apartment and residential jobs are completed in under two hours from arrival to departure, ensuring minimal disruption to your day.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Lemon Grove Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Community-Focused Service:</strong> We navigate Lemon Grove's compact streets, apartment complexes, and family neighborhoods with care and efficiency. Our crews have completed thousands of East County junk removal jobs and understand the specific needs of working families, apartment residents, and small businesses. We coordinate with property managers, respect neighbor parking, and complete jobs efficiently even during peak periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Lemon Grove and surrounding East County areas. Our dispatch team actively monitors local traffic patterns and coordinates with apartment management offices, ensuring reliable service for both residential and commercial properties with flexible scheduling around your needs.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. We offer affordable pricing structures for apartment turnovers, family home cleanouts, and small business needs. Most Lemon Grove jobs range from quarter-truck to full-truck loads with clear pricing tiers communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for apartment complex access, including protection for hallways, elevators, shared building entry, and residential properties that require careful navigation of narrow streets and limited parking areas common to Lemon Grove's family neighborhoods.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Lemon Grove"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Lemon Grove"
          contextParagraph="Apartment cleanouts and family home projects throughout Lemon Grove—from Broadway to Berry Street—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Lemon Grove" />

        {/* FAQ Section */}
        <LemonGroveFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Affordable furniture disposal for apartments and family homes throughout East County</p>
              </a>
              <a href="/commercial-junk-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Commercial Junk Removal</h4>
                <p className="text-gray-600">Small business cleanouts with budget-friendly pricing for Lemon Grove businesses</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Compassionate family estate transitions and downsizing support in East County</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
