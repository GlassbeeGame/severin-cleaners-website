import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClairemontFAQSection from "./ClairemontFAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Clairemont Junk Removal | Central San Diego Specialists | (619) 750-0114',
  description: 'Clairemont family home junk removal Bay Park to Bay Ho. Garage cleanouts, pool equipment, 1950s-era homes. (619) 750-0114',
  keywords: 'Clairemont junk removal, junk hauling Clairemont, junk pickup Clairemont Mesa, trash removal Clairemont, Clairemont San Diego junk removal, garage cleanouts',
  openGraph: {
    title: 'Clairemont Junk Removal | Family Home & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-clairemont',
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
    title: 'Clairemont Junk Removal | Family Home & Garage Cleanout Specialists | Same-Day Service',
    description: 'Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-clairemont',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Clairemont junk removal pricing is transparent and upfront with no hidden fees. Here's our standard pricing structure: Single Item Pickup starting at $100, 1/4 Trailer Load $249, 3/8 Trailer Load $319, 1/2 Trailer Load $349, 5/8 Trailer Load $366, 3/4 Trailer Load $429, 7/8 Trailer Load $462, Full Trailer Load $495. Final pricing depends on volume, type of items, and access. Call (619) 750-0114 for a free, customized quote tailored to your specific junk hauling Clairemont needs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide same-day junk hauling in Clairemont Mesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer fast junk pickup Clairemont Mesa service, typically providing next-day service with same-day available when you call before 2 PM. Our local team understands Clairemont families' schedules and can respond quickly for emergency cleanouts, moving deadlines, or unexpected situations throughout North Clairemont, South Clairemont, and Clairemont Mesa East."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle garage and attic cleanouts in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our trash removal Clairemont service specializes in garage cleanouts, attic clearing, and storage area organization. We handle everything from accumulated household items to old furniture, appliances, and boxes. Our team helps Clairemont families reclaim valuable space with efficient, respectful service."
      }
    },
    {
      "@type": "Question",
      "name": "Do you recycle or donate items collected in Clairemont?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle all items in accordance with San Diego County regulations. Our team recycles metals, electronics, and appliances through certified facilities, and donates usable furniture and household items to local charities when appropriate."
      }
    },
    {
      "@type": "Question",
      "name": "Is commercial junk removal available for Clairemont businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive commercial junk hauling Clairemont for local businesses along Balboa Avenue and throughout Clairemont Mesa. Our services include office cleanouts, retail space clearing, restaurant equipment removal, and small business junk hauling. We offer flexible scheduling and competitive commercial rates to support Clairemont's business community."
      }
    }
  ]
};

export default function JunkremovalclairemontPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Clairemont",
    serviceName: "Junk Removal",
    description: "Professional Clairemont junk removal for family homes, garage cleanouts, Clairemont Village, Balboa Ave corridor. Residential specialists with eco-friendly service. Call (619) 750-0114.",
    url: "https://severincleaners.com/junk-removal-clairemont",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Clairemont Junk Removal", url: "https://severincleaners.com/junk-removal-clairemont" },
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, serviceSchema, breadcrumbSchema],
  };

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />
      <div className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Family-Friendly Community with Convenient Balboa Avenue Corridor Access
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Clairemont Junk Removal | Central San Diego Specialists
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-100">
                  Bay Park to Bay Ho • Mid-Century Home Experts • Garage Cleanout Specialists
                </p>

                <p className="text-lg mb-8">
                  ⭐⭐⭐⭐⭐ 5.0 Rating • Garage Cleanout Experts • Licensed & Insured
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
                    Book Your Clairemont Junk Pickup
                  </a>
                </div>

                <p className="text-lg">
                  Same-Day Service Available • Residential Family Specialists • Eco-Friendly Disposal
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
                        Clairemont's Premier Family Home Junk Removal Service
                      </h2>

                      <p className="text-lg mb-4 text-gray-700">
                        <strong>Clairemont junk removal</strong> requires understanding one of San Diego's most established family communities, from historic Clairemont Village to bustling Balboa Avenue corridor neighborhoods. Known for its mid-century homes, family-friendly parks, and convenient central location, Clairemont features diverse residential properties from North Clairemont hillside homes to South Clairemont bay-area communities. Our <strong>junk hauling Clairemont</strong> service specializes in garage cleanouts, family home decluttering, and residential property maintenance throughout this classic San Diego neighborhood.
                      </p>

                      <p className="text-lg mb-6 text-gray-700">
                        Whether you need <strong>junk pickup Clairemont Mesa</strong> for a garage renovation project, family home organization, or estate cleanout support, our <strong>trash removal Clairemont</strong> team provides reliable service that respects the character of this established community. From Bay Park boundaries to Tecolote Canyon natural areas, we deliver professional solutions throughout all Clairemont neighborhoods while honoring the area's family-focused values and mid-century architectural heritage.
                      </p>

                      {/* Neighborhoods */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Clairemont Neighborhoods We Serve</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>Clairemont San Diego junk removal</strong> service covers every corner of this diverse community, from residential family neighborhoods to commercial corridors. We've completed thousands of projects throughout Clairemont's unique sub-districts, each with distinct characteristics that inform our service approach:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>North Clairemont:</strong> Hillside family homes, mature trees, canyon-view properties near Mount Acadia</li>
                          <li><strong>South Clairemont:</strong> Bay Park border area, proximity to Mission Bay, recreational access</li>
                          <li><strong>Clairemont Mesa East:</strong> Residential neighborhoods with schools, parks, family-oriented streets</li>
                          <li><strong>Clairemont Mesa West:</strong> Mixed residential and light commercial, convenient freeway access</li>
                          <li><strong>Bay Ho:</strong> Hillside community with bay views, established homes, quiet streets</li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Clairemont Village:</strong> Historic downtown district, original commercial core, walkable community</li>
                          <li><strong>Linda Vista Border:</strong> Adjacent neighborhoods, university area influence</li>
                          <li><strong>Tecolote Canyon Area:</strong> Natural open space, canyon-adjacent properties, recreational trails</li>
                          <li><strong>Mount Acadia:</strong> Hillside views, winding streets, elevation challenges</li>
                          <li><strong>Balboa Avenue Corridor:</strong> Commercial spine, mixed-use properties, business district</li>
                        </ul>
                      </div>

                      {/* Major Streets */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>junk hauling Clairemont</strong> team knows every street in this sprawling community. This local expertise matters when navigating Clairemont's grid-pattern streets, canyon interruptions, and freeway crossings. We plan each route efficiently to serve your property without unnecessary delays:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-2 mb-6 text-gray-700">
                        <li>• <strong>Balboa Avenue:</strong> Main east-west corridor, commercial spine, heavy traffic during commute hours</li>
                        <li>• <strong>Clairemont Drive:</strong> Central north-south route connecting neighborhoods, schools access</li>
                        <li>• <strong>Clairemont Mesa Boulevard:</strong> Major thoroughfare, eastern boundary, commercial development</li>
                        <li>• <strong>Genesee Avenue:</strong> Western border, university connection, canyon crossings</li>
                        <li>• <strong>Mount Acadia Boulevard:</strong> Hillside residential access, elevation gain, scenic views</li>
                        <li>• <strong>Burgener Boulevard:</strong> South Clairemont connector, Bay Park access</li>
                        <li>• <strong>I-5 & I-805:</strong> Freeway access north and south, commuter routes</li>
                        <li>• <strong>Tecolote Road:</strong> Canyon access, recreational area connection</li>
                      </ul>

                      {/* Landmarks */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Clairemont Landmarks & Community Reference Points</h3>
                      <p className="text-gray-700 mb-4">
                        We use Clairemont's well-known landmarks to navigate efficiently to your property, ensuring timely service throughout this established community:
                      </p>

                      <ul className="grid md:grid-cols-2 gap-3 mb-6 text-gray-700">
                        <li><strong>Clairemont Town Square</strong> — Community shopping center, central gathering place</li>
                        <li><strong>Bay Ho Park</strong> — Neighborhood park, recreational facilities, community events</li>
                        <li><strong>Tecolote Canyon Natural Park</strong> — Urban canyon, hiking trails, open space preserve</li>
                        <li><strong>Mount Everest Academy</strong> — Educational institution, neighborhood landmark</li>
                        <li><strong>North Clairemont Recreation Center</strong> — Community center, family programs</li>
                        <li><strong>Clairemont Community Park</strong> — Central park, sports fields, family gatherings</li>
                        <li><strong>Bay Park Elementary</strong> — Historic school, neighborhood anchor</li>
                        <li><strong>Clairemont Square Shopping Center</strong> — Balboa Avenue retail, commercial services</li>
                        <li><strong>Clairemont Library</strong> — Community resource, educational programs</li>
                        <li><strong>Morena Boulevard Corridor</strong> — Retail and auto services, western boundary</li>
                        <li><strong>South Clairemont Bowl</strong> — Recreation landmark, family entertainment</li>
                        <li><strong>Mount Acadia Viewpoints</strong> — Hillside overlooks, bay and ocean views</li>
                      </ul>

                      {/* Traffic Patterns */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Navigating Clairemont's Traffic Patterns</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>trash removal Clairemont</strong> crews understand the neighborhood's traffic patterns and navigate them expertly to ensure on-time arrivals:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h4 className="font-bold mb-2 text-orange-900">Rush Hour Commute Patterns</h4>
                          <p className="text-gray-700 text-sm">Clairemont's central location creates I-5 and I-805 commuter traffic weekday mornings (7-9 AM) and evenings (4-6 PM). Balboa Avenue and Clairemont Mesa Boulevard experience heavy east-west flow. We schedule around peak hours or use residential streets for efficient access.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-bold mb-2 text-blue-900">School Zone Timing</h4>
                          <p className="text-gray-700 text-sm">Multiple elementary and middle schools create morning drop-off (8-8:30 AM) and afternoon pickup (2:30-3 PM) congestion on residential streets. We coordinate with school schedules to avoid traffic delays and ensure safe neighborhood navigation.</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="font-bold mb-2 text-green-900">Shopping District Access</h4>
                          <p className="text-gray-700 text-sm">Clairemont Town Square and Balboa Avenue shopping centers create weekend and evening retail traffic. We use strategic routing through residential neighborhoods to access properties efficiently while respecting parking and loading zones.</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h4 className="font-bold mb-2 text-purple-900">Canyon Crossings & Dead Ends</h4>
                          <p className="text-gray-700 text-sm">Tecolote Canyon interrupts Clairemont's street grid, creating limited crossing points and cul-de-sac neighborhoods. Our team knows which streets connect and which require alternate routing to reach canyon-adjacent properties efficiently.</p>
                        </div>
                      </div>

                      {/* Services */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Junk Removal Services for Clairemont Families</h3>
                      <p className="text-gray-700 mb-4">
                        Our <strong>junk pickup Clairemont Mesa</strong> service provides specialized attention to the area's classic mid-century family homes, many featuring attached garages, spacious yards, and decades of accumulated household items. We understand the unique needs of Clairemont families maintaining older homes and deliver solutions that help preserve these beloved family properties:
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Residential Family Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Garage cleanouts and organization for mid-century homes with decades of accumulation</li>
                            <li>Attic and storage area clearing for established properties with limited access</li>
                            <li>Backyard and patio furniture disposal near canyons and recreational areas</li>
                            <li>Home office setup and paper clutter removal for remote work transitions</li>
                            <li>Kids' room decluttering and family organization projects</li>
                            <li>Exercise equipment and recreational gear removal from family homes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-3 text-blue-600">Estate & Transition Services</h4>
                          <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><a href="/estate-cleanout-san-diego" className="text-blue-600 hover:text-blue-700 underline">Estate transitions</a> and downsizing assistance for multi-generational families</li>
                            <li>Senior living transitions and organization for established residents</li>
                            <li>Property management coordination for rental properties and tenant turnovers</li>
                            <li>Home renovation debris and remodeling cleanup for family updates</li>
                            <li><a href="/furniture-removal-san-diego" className="text-blue-600 hover:text-blue-700 underline">Mid-century furniture removal</a> including vintage pieces and antiques</li>
                            <li>Seasonal cleanup for family properties and holiday decorations</li>
                          </ul>
                        </div>
                      </div>

                      {/* Mid-Century Focus */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Mid-Century Home Specialists</h3>
                      <p className="text-gray-700 mb-4">
                        Clairemont's classic homes from the 1950s-1970s present unique challenges that our team handles expertly. Attached garages filled with decades of family memories, attics with limited access points, and floor plans requiring careful furniture navigation demand specialized expertise. We protect original hardwood floors, maneuver through narrow hallways characteristic of mid-century design, and access difficult storage spaces without damaging walls, doorframes, or vintage architectural details.
                      </p>

                      <p className="text-gray-700 mb-6">
                        We understand North Clairemont's hillside access challenges, South Clairemont's proximity to canyons and recreational areas, and the Balboa Avenue corridor's mix of residential and commercial properties. Multi-generational households are common throughout Clairemont, and we approach each project with patience and respect—whether helping families downsize, clearing inherited properties, or simply reclaiming garage space that hasn't been used for parking in years.
                      </p>

                      {/* How It Works */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">How Our Clairemont Service Works</h3>
                      <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <ol className="space-y-3 text-gray-700">
                          <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe your location in Clairemont (North, South, Bay Ho, etc.) and what items need removal. We provide transparent pricing estimates over the phone.</li>
                          <li><strong>2. Schedule Service:</strong> We offer flexible scheduling including same-day service when you call before 2 PM. Choose a service window that works for your family's schedule, including weekends and after-hours appointments.</li>
                          <li><strong>3. Professional Arrival:</strong> Our uniformed crew arrives on time with proper equipment. We assess items in person and confirm final pricing before beginning any work—no surprises or hidden fees.</li>
                          <li><strong>4. Efficient Removal:</strong> We handle all the heavy lifting, loading, and hauling. Most Clairemont garage cleanouts complete within 2-3 hours. We protect your mid-century home's floors, doorways, and landscaping throughout the process.</li>
                          <li><strong>5. Eco-Friendly Disposal:</strong> Usable items go to local charities and donation centers. Recyclables are processed through certified facilities. Only true waste goes to landfill as a last resort.</li>
                          <li><strong>6. Final Walkthrough:</strong> We sweep and clean the area, complete a satisfaction walkthrough, and process payment. Many Clairemont families use our service repeatedly for ongoing home needs.</li>
                        </ol>
                      </div>

                      {/* Why Choose Us */}
                      <h3 className="text-2xl font-bold mt-8 mb-4">Why Clairemont Families Choose Severin Cleaners</h3>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Local Community Knowledge</h4>
                        <p className="text-gray-700 mb-3">
                          We know Clairemont's neighborhoods intimately—from Bay Ho's hillside streets to South Clairemont's bay-area access. Our team understands mid-century home layouts, navigates canyon-interrupted street grids efficiently, and respects the family-oriented community that makes Clairemont special.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-4">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Garage Cleanout Expertise</h4>
                        <p className="text-gray-700 mb-3">
                          Clairemont's attached garages often house decades of family history. We approach these projects with care and respect, helping families sort through memories while efficiently removing unwanted items. Our team has cleared hundreds of Clairemont garages, transforming cluttered storage into functional parking and workshop space.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h4 className="text-lg font-bold mb-3 text-gray-900">Family-Friendly Service</h4>
                        <p className="text-gray-700 mb-3">
                          We understand that Clairemont families value courtesy, reliability, and fair pricing. Our team arrives on time, works efficiently, and treats your home with respect. Many of our Clairemont clients are repeat customers who trust us for ongoing junk removal needs as their families grow and change.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Sidebar - Right Column */}
                  <div className="lg:col-span-1">
                    <LocationSidebarCTA
                      locationName="Clairemont"
                      nearbyLocations={[
                        { name: "Bay Park", slug: "bay-park" },
                        { name: "Kearny Mesa", slug: "kearny-mesa" },
                        { name: "Linda Vista", slug: "linda-vista" },
                        { name: "Mission Bay", slug: "mission-bay" },
                      ]}
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <ClairemontFAQSection />

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Book Your Clairemont Junk Removal Today
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Whether you're clearing a garage in Bay Ho, organizing a family home in North Clairemont, or managing an estate transition in Clairemont Mesa, Severin Cleaners delivers the trusted junk removal Clairemont families depend on.
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
                    Request Your Free Quote Now
                  </a>
                </div>
                <p className="text-blue-200 text-lg">
                  Serving all of Clairemont — Bay Park to Bay Ho • Same-Day Service Available • Licensed & Insured
                </p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-center mb-8">Related Residential & Family Services</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="/furniture-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                  <p className="text-gray-600">Family home furniture disposal and mid-century home cleanouts</p>
                </a>
                <a href="/estate-cleanout-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                  <p className="text-gray-600">Multi-generational family homes and estate transition support</p>
                </a>
                <a href="/construction-debris-removal-san-diego" className="block p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                  <p className="text-gray-600">Home remodeling cleanup and renovation debris disposal</p>
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
