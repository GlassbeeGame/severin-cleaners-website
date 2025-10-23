import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpringValleyFAQSection from "./SpringValleyFAQSection";
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
  title: "Spring Valley Junk Removal | Hillside Property Experts | (619) 750-0114",
  description: "Spring Valley hillside junk removal Dictionary Hill, Casa de Oro. Steep driveways, apartment complexes, family homes. (619) 750-0114",
  keywords: "Spring Valley junk removal, junk hauling Spring Valley, junk pickup Spring Valley, trash removal Spring Valley, Spring Valley San Diego junk removal, Dictionary Hill junk removal, Casa de Oro junk hauling, Sweetwater Reservoir junk pickup",
  openGraph: {
    title: "Spring Valley Junk Removal | Affordable Family & Hillside Specialists",
    description: "Professional Spring Valley junk removal for East County families, hillside homes & apartments. Same-day junk hauling Spring Valley, eco-friendly disposal.",
    url: "https://severincleaners.com/junk-removal-spring-valley",
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
    title: "Spring Valley Junk Removal | Affordable Family & Hillside Specialists",
    description: "Professional Spring Valley junk removal for East County families, hillside homes & apartments. Same-day junk hauling Spring Valley, eco-friendly disposal.",
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-spring-valley",
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

export default function JunkRemovalSpringValleyPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Spring Valley",
    serviceName: "Junk Removal",
    description: "Professional Spring Valley junk removal for East County families, hillside homes & apartments. Same-day junk hauling Spring Valley, eco-friendly disposal. Serving Dictionary Hill, Casa de Oro.",
    url: "https://severincleaners.com/junk-removal-spring-valley",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Spring Valley Junk Removal", url: "https://severincleaners.com/junk-removal-spring-valley" },
  ]);

  const nearbyLocations = [
    { name: "La Mesa", slug: "la-mesa" },
    { name: "Lemon Grove", slug: "lemon-grove" },
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
                #1 Spring Valley Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Spring Valley Junk Removal
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Hillside Property Experts • East County Family Service • Same-Day Available
              </p>

              <p className="text-lg mb-8">
                ✓ Hillside Access Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Spring Valley – Dictionary Hill to Casa de Oro
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Spring Valley junk removal</strong> serves a diverse East County community known for hillside homes, family neighborhoods, and multi-family properties. From panoramic-view homes in Dictionary Hill to established family areas near Casa de Oro, our <strong>junk hauling Spring Valley</strong> team handles the unique access challenges of this varied landscape. We provide same-day <strong>trash removal Spring Valley</strong> for hillside properties, apartments, and family homes throughout the 91977 and 91978 areas with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Spring Valley operation is uniquely equipped to handle properties ranging from steep hillside driveways to multi-family apartment complexes. We understand that <strong>Spring Valley San Diego junk removal</strong> requires specialized knowledge of challenging terrain, narrow street access, and the diverse mix of property types that characterize this East County community. Whether you're clearing accumulated items from a hillside home's garage, removing furniture from an apartment complex near Jamacha Boulevard, or handling estate cleanouts in Casa de Oro, our team brings the expertise and equipment East County's varied properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Spring Valley Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk removal Spring Valley</strong> service covers every corner of this extensive East County community. We've completed thousands of junk removal jobs throughout Spring Valley's diverse neighborhoods, each with unique terrain and access characteristics:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Dictionary Hill:</strong> Hillside community with panoramic views, steep driveways, and challenging property access requiring specialized equipment</li>
                        <li><strong>Casa de Oro:</strong> Established family neighborhood near Mount Helix with multi-generational homes and estate cleanout needs</li>
                        <li><strong>Jamacha Boulevard Corridor:</strong> Mixed-use area with apartments, mobile home parks, and commercial properties along main thoroughfare</li>
                        <li><strong>Sweetwater Reservoir Area:</strong> Properties near recreation area with boat storage, RV equipment, and outdoor gear accumulation</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Spring Valley Estates:</strong> Mid-century family homes with two-car garages and decades of storage accumulation patterns</li>
                        <li><strong>Hillsdale:</strong> Hillside neighborhoods with canyon views, winding roads, and unique driveway configurations</li>
                        <li><strong>Avocado Boulevard Area:</strong> Central corridor with apartment complexes, retail centers, and residential density</li>
                        <li><strong>Helix/Grossmont Area:</strong> Properties near schools and colleges with student housing and seasonal turnover patterns</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Spring Valley San Diego junk removal</strong> team knows every street, hillside approach, and access challenge in this geographically diverse area. We plan each <strong>junk pickup Spring Valley</strong> job with detailed routing:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Jamacha Boulevard:</strong> Main north-south corridor with shopping centers, apartments, and commercial traffic</li>
                      <li>• <strong>Bancroft Drive:</strong> Central east-west route connecting hillside neighborhoods to valley floor</li>
                      <li>• <strong>Jamacha Road:</strong> Winding hillside connector with steep grades and canyon properties</li>
                      <li>• <strong>Sweetwater Road:</strong> Southern boundary with recreational access and reservoir properties</li>
                      <li>• <strong>Avocado Boulevard:</strong> Northern corridor with residential density and apartment complexes</li>
                      <li>• <strong>Campo Road:</strong> Eastern connector linking to El Cajon and Rancho San Diego</li>
                      <li>• <strong>Quarry Road:</strong> Hillside access with challenging terrain and multi-level homes</li>
                      <li>• <strong>Kenwood Drive:</strong> Residential street network serving established family neighborhoods</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Spring Valley Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk removal Spring Valley</strong> service near all major East County landmarks. These reference points help us navigate efficiently:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Sweetwater Reservoir—recreation area and fishing destination</li>
                        <li>• Grossmont Shopping Center—major retail hub and community anchor</li>
                        <li>• Mount Helix Park—iconic cross landmark and panoramic viewpoint</li>
                        <li>• Helix Charter High School—educational center and community facility</li>
                        <li>• Spring Valley Library—central community gathering space</li>
                        <li>• Bancroft Plaza—shopping center serving central neighborhoods</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Sweetwater Summit Regional Park—wilderness trails and open space</li>
                        <li>• Jamacha Junction—commercial corridor and retail destination</li>
                        <li>• Grossmont College—community college campus and student housing area</li>
                        <li>• Spring Valley Community Center—recreation programs and events</li>
                        <li>• Dictionary Hill Open Space—hillside preserve and trail access</li>
                        <li>• Casa de Oro Community Park—family recreation and sports fields</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Spring Valley's position as an East County residential hub creates traffic patterns that affect <strong>junk hauling Spring Valley</strong> scheduling:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (6:30-8:30 AM, 4-6 PM):</strong> Jamacha Boulevard, Avocado Boulevard, and SR-94 access points experience heavy East County commuter traffic. We schedule mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) windows to avoid peak congestion, particularly for hillside properties where narrow streets compound traffic delays.</li>
                      <li><strong>Hillside access considerations:</strong> Dictionary Hill and Hillsdale properties often feature steep driveways with limited turnaround space. We coordinate advance notice for hillside jobs and plan extra time for careful navigation. Morning service (7-11 AM) works best for steep terrain before afternoon heat affects crew efficiency and equipment performance.</li>
                      <li><strong>School schedule impacts:</strong> Grossmont Union High School District and Grossmont College academic calendars create seasonal patterns. May-June semester endings and August-September new semester starts generate apartment turnover and family garage organization surges. Book 2-3 weeks ahead during these transition periods for optimal scheduling.</li>
                      <li><strong>Weekend recreation traffic:</strong> Sweetwater Reservoir weekend fishing and boating activity creates localized traffic Saturday-Sunday 7 AM-3 PM. Grossmont Center weekend shopping crowds congest surrounding streets 10 AM-6 PM. For properties near these attractions, early Sunday morning or weekday scheduling provides clearest access and fastest completion.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Spring Valley's inland East County location brings warmer temperatures than coastal areas. Summer heat (June-September) regularly reaches 85-95°F, making early morning scheduling (7-10 AM) ideal for both crew comfort and client convenience during property assessments. Hillside properties in Dictionary Hill and Hillsdale benefit from elevation cooling but create sun exposure challenges—we plan shaded loading areas when possible. The warm, dry climate accelerates outdoor item deterioration, with patio furniture, storage shed contents, and garage-stored items showing sun damage and heat warping faster than coastal properties, creating regular junk removal needs. Winter rainy season (December-February) brings occasional heavy downpours that make steep hillside driveways temporarily challenging—we maintain schedule flexibility and coordinate closely with clients when weather affects access. Spring Valley's valley floor geography creates occasional temperature inversions and morning fog (November-March) that burn off by 9-10 AM, making mid-morning starts preferable during these months for optimal visibility and safe hillside navigation.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Spring Valley</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>Spring Valley junk removal</strong> service handles items common to East County's diverse property types:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Sofas, sectionals, recliners from family living spaces</li>
                          <li>• Mattresses, bed frames, bedroom furniture from upgrades</li>
                          <li>• Dining sets, tables, chairs from downsizing projects</li>
                          <li>• Desks, office furniture, bookshelves from home offices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Refrigerators, freezers, washers, dryers from remodels</li>
                          <li>• Dishwashers, stoves, microwaves during kitchen updates</li>
                          <li>• TVs, computers, electronics from tech refreshes</li>
                          <li>• Exercise equipment, treadmills, home gym gear</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Recreation Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, outdoor seating, BBQ grills</li>
                          <li>• Boats, kayaks, fishing equipment from reservoir recreation</li>
                          <li>• Bikes, sports equipment, outdoor toys</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Estate cleanouts for multi-generational family properties</li>
                          <li>• Apartment turnovers and mobile home park cleanouts</li>
                          <li>• Garage organization and storage shed clearances</li>
                          <li>• Construction debris from hillside home renovations</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Spring Valley Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe your items and Spring Valley location. We'll provide volume-based pricing and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day <strong>junk pickup Spring Valley</strong> service. We coordinate timing around traffic patterns and hillside access requirements.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives during your scheduled window. We assess items and provide final pricing before starting—no hidden fees.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team handles all lifting and loading. We navigate steep driveways, protect property, and complete removal efficiently.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort for donation, recycling, and responsible disposal. Usable items go to East County charities, recyclables to proper facilities.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep clean after removal and collect payment. Most jobs complete in under two hours.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Spring Valley Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Hillside Access Specialists:</strong> We excel at Dictionary Hill and Hillsdale terrain challenges. Our team has completed thousands of Spring Valley hillside jobs, navigating steep driveways and narrow streets efficiently. We bring appropriate equipment for challenging access situations and coordinate carefully to ensure safe, damage-free service on properties where typical haulers struggle.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Spring Valley and East County. Our dispatch monitors Jamacha Boulevard traffic and coordinates arrival windows that work around commute congestion and hillside access requirements.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees. Upfront volume-based quotes with all labor, hauling, and disposal included. Steep hillside access doesn't change our rates—you pay for volume removed. Most Spring Valley jobs range from quarter-truck to half-truck loads with clear pricing before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance covering hillside property access, apartment complex coordination, and the diverse East County property types throughout Spring Valley.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Spring Valley"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Spring Valley"
          contextParagraph="Hillside home and apartment cleanouts throughout Spring Valley—from Dictionary Hill to Casa de Oro—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Spring Valley" />

        {/* FAQ Section */}
        <SpringValleyFAQSection />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Multi-generational family homes and inherited property transitions</p>
              </a>
              <a href="/furniture-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home and apartment furniture disposal services</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Hillside home renovations and remodeling cleanup</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
