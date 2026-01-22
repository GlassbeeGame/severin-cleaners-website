import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: 'Junk Removal La Mesa CA | Same-Day Service | (619) 750-0114',
  description: 'Professional junk removal La Mesa CA service for Mount Helix, Fletcher Hills, and La Mesa Village. Expert la mesa junk removal team serving all East County. Same-day hauling, licensed & insured. Call (619) 750-0114',
  keywords: [
    'junk removal la mesa ca',
    'la mesa junk removal',
    'junk removal la mesa',
    'same day junk removal la mesa'
  ],
  openGraph: {
    title: 'Junk Removal La Mesa CA | Same-Day Hauling | East County Specialists',
    description: 'Professional junk removal La Mesa CA service for Mount Helix, Fletcher Hills, Village. La mesa junk removal team serving all East County. Call (619) 750-0114',
    url: 'https://severincleaners.com/junk-removal-la-mesa',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'La Mesa Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal La Mesa CA | Same-Day Hauling | East County Specialists',
    description: 'Professional junk removal La Mesa CA service for Mount Helix, Fletcher Hills, Village. La mesa junk removal team serving all East County. Call (619) 750-0114',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-la-mesa',
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
    'geo.placename': 'La Mesa',
    'geo.position': '32.7678;-117.0231',
    'ICBM': '32.7678, -117.0231',
  },
};

const laMesaFAQs = [
  {
    question: "How much does junk removal La Mesa CA cost?",
    answer: "Our junk removal La Mesa CA pricing is transparent and volume-based with no hidden fees. Single item removal starts at $100, perfect for one couch, mattress, or appliance. Quarter-load service costs $249 for small cleanouts like a closet or bathroom. Half-load runs $349 for garage corners or bedroom furniture sets. Three-quarter load is $429 for larger projects like full garage sections. Full-load service tops out at $495 for complete garage, estate, or commercial property cleanouts. All prices include labor, hauling, and disposal fees with no surcharges for hillside access in Mount Helix or downtown La Mesa Village parking challenges. We provide free estimates over the phone and confirm final pricing on-site before starting work. Our local La Mesa location means lower travel costs and faster response times compared to companies coming from North County or downtown San Diego."
  },
  {
    question: "Can you handle hillside homes in Mount Helix and Fletcher Hills?",
    answer: "Yes, our la mesa junk removal team specializes in hillside properties throughout Mount Helix, Fletcher Hills, and surrounding East County hills. We navigate steep driveways, winding access roads, and elevation changes regularly—these challenging properties are our specialty as a locally-based La Mesa service. Our trucks are appropriately sized for narrow hillside streets, and our crews plan routes in advance to handle tight turns and steep grades safely. Mount Helix properties often require extended carries from house to truck due to limited driveway access, and we bring the right equipment and crew size for these situations. We've serviced hundreds of hillside homes in the 91941, 91942, and 91944 zip codes, from modest hillside cottages to large estates with panoramic views. No driveway is too steep, no access too narrow, and no elevation too challenging for our experienced East County junk removal team."
  },
  {
    question: "Do you serve downtown La Mesa Village and Grossmont Center area?",
    answer: "Absolutely. We provide comprehensive junk removal La Mesa CA service throughout downtown La Mesa Village, Grossmont Center commercial district, and all surrounding neighborhoods. Downtown La Mesa presents unique challenges—limited street parking on Spring Street and La Mesa Boulevard, tight alley access for rear-entry buildings, and coordinated timing around business hours and customer traffic. Our team coordinates parking permits when needed, schedules during off-peak hours to minimize disruption, and works efficiently to complete removals quickly in high-traffic areas. We serve retail businesses near Grossmont Center, multi-unit apartment buildings in the Village core, mixed-use properties along Spring Street, and historic homes in the surrounding residential blocks. Whether you're a La Mesa Village retailer clearing old inventory, an apartment manager handling unit turnovers, or a homeowner in the adjacent neighborhoods, our flexible scheduling and downtown experience ensure smooth, professional service."
  },
  {
    question: "Are your junk removal services eco-friendly in La Mesa?",
    answer: "Yes, eco-friendly disposal is central to our junk removal La Mesa CA service. We sort every load to maximize recycling and donation opportunities, minimizing what goes to local transfer stations or the Miramar Landfill. Usable furniture, working appliances, and household goods in good condition are donated to East County charities including Goodwill on Fletcher Parkway, local churches, and family resource centers serving La Mesa residents. Metal items—appliances, bed frames, scrap metal—go to San Diego recycling facilities that process materials responsibly. Mattresses and box springs are taken to specialized recycling centers that break them down into foam, fabric, and metal components rather than landfilling them. Electronics receive certified e-waste recycling with proper hazardous material handling. Wood debris and yard waste go to composting facilities when possible. As a La Mesa-based company headquartered at 8900 Grossmont Boulevard, we're committed to responsible disposal that benefits our own community and reduces environmental impact throughout East County."
  },
  {
    question: "How fast can you respond for junk removal in La Mesa?",
    answer: "Most la mesa junk removal calls receive same-day or next-day service when you contact us before noon. Our local La Mesa headquarters at Grossmont Boulevard means minimal travel time to any neighborhood—we can often arrive within 1-2 hours for urgent situations throughout the 91941, 91942, and 91944 zip codes. Same-day service is especially valuable for time-sensitive needs like rental property turnovers with tight deadlines, real estate closing cleanouts, HOA violation notices requiring immediate compliance, or emergency situations after unexpected events. We coordinate scheduling around La Mesa's traffic patterns—avoiding Fletcher Parkway congestion during commute hours and planning routes that minimize response time. Whether you're in Mount Helix, downtown Village, Grossmont area, Fletcher Hills, or anywhere in La Mesa, our local presence ensures faster response than companies based in other cities. Even during busy weekends and peak moving season, our expanded crew capacity and proximity to all La Mesa neighborhoods keeps response times minimal."
  },
  {
    question: "What areas of La Mesa do you serve?",
    answer: "Our junk removal La Mesa CA service covers all neighborhoods throughout the city and surrounding East County areas. We serve Mount Helix with its hillside estates and panoramic view properties, Fletcher Hills with family homes and challenging hillside access, downtown La Mesa Village along Spring Street and La Mesa Boulevard, the Grossmont Center commercial district and surrounding apartments, College Area near Grossmont College and San Diego State satellite campus, Lake Murray neighborhoods around the lake and recreation area, Rolando Village and Allied Gardens border areas, and all residential streets between Fletcher Parkway and Interstate 8. We also serve neighboring communities including El Cajon, Spring Valley, Lemon Grove, and Santee as natural extensions of our East County service area. All three La Mesa zip codes—91941 (central La Mesa and Mount Helix), 91942 (northern La Mesa and College area), and 91944 (southern and eastern areas)—receive the same reliable, professional service with transparent pricing regardless of neighborhood or property type."
  },
  {
    question: "Do you offer free estimates for La Mesa junk removal?",
    answer: "Yes, we provide free, no-obligation estimates for all junk removal La Mesa CA jobs. You can get an initial estimate over the phone by describing what needs to be removed—we'll provide a price range based on estimated volume. For larger or complex projects like full estate cleanouts, multi-unit property turnovers, or commercial building clearances, we offer free on-site estimates where our team visits your La Mesa property to assess items and provide exact pricing. On-site estimates are especially helpful for Mount Helix hillside properties with access challenges, downtown Village properties requiring parking coordination, or accumulations spread across multiple rooms or storage areas. During same-day service calls, we provide final pricing upon arrival before starting any work—you approve the quote before we touch anything. Our volume-based pricing includes all labor, hauling, disposal fees, and coordination with no hidden charges for stairs, hillside access, downtown parking, or distance. Whether you're in a hillside home or downtown apartment, free estimates ensure you know costs upfront with no pressure."
  },
  {
    question: "Can you remove furniture and appliances in La Mesa CA?",
    answer: "Yes, furniture and appliance removal is one of our primary la mesa junk removal services. We handle all types of furniture including sofas, couches, sectionals, recliners, dining sets, bedroom furniture, mattresses, box springs, dressers, entertainment centers, office desks, patio furniture, and outdoor equipment. For appliances, we remove refrigerators, freezers, washers, dryers, dishwashers, stoves, ovens, microwaves, water heaters, and air conditioning units with proper handling of refrigerants and hazardous materials per California regulations. La Mesa's mix of property types—from compact Village apartments to spacious Mount Helix estates—creates diverse furniture removal needs, and we handle them all with equal professionalism. We navigate narrow apartment building hallways and staircases downtown, manage steep hillside home access in Mount Helix and Fletcher Hills, and coordinate elevator reservations for multi-story buildings near Grossmont Center. All removed furniture in good condition is donated to East County charities. Appliances go to certified recycling facilities. Professional, careful removal protects your property throughout the entire process."
  }
];

export default function JunkRemovalLaMesaPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "La Mesa",
    serviceName: "Junk Removal",
    description: "Affordable junk removal in La Mesa CA. Same-day hauling, transparent pricing, and a faster alternative to the La Mesa dump. Serving Mount Helix, Fletcher Hills, La Mesa Village, Grossmont Center, and all East County neighborhoods.",
    url: "https://severincleaners.com/junk-removal-la-mesa",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "La Mesa Junk Removal", url: "https://severincleaners.com/junk-removal-la-mesa" },
  ]);

  const faqSchema = generateFAQSchema(laMesaFAQs);

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-la-mesa#business",
    "name": "Severin Cleaners LLC",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8900 Grossmont Blvd Ste 1",
      "addressLocality": "La Mesa",
      "addressRegion": "CA",
      "postalCode": "91941",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7678,
      "longitude": -117.0231
    },
    "url": "https://severincleaners.com/junk-removal-la-mesa",
    "areaServed": [
      {
        "@type": "City",
        "name": "La Mesa",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "91941",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91942",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "91944",
        "addressLocality": "La Mesa",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 06:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "27",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/severinhauling",
      "https://www.instagram.com/severinhauling/",
      "https://www.yelp.com/biz/severin-cleaners-san-diego",
      "https://www.thumbtack.com/ca/la-mesa/junk-removal/severin-hauling/service/541381661422116888"
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
    { name: "Lemon Grove", slug: "junk-removal-lemon-grove" },
    { name: "Santee", slug: "junk-removal-santee" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                #1 La Mesa Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal La Mesa CA
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Mount Helix to La Mesa Village • Faster Than the Dump • Same-Day Service
              </p>

              <p className="text-lg mb-8">
                ✓ Hillside Access Experts ✓ Village Area Specialists ✓ Licensed & Insured
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
                      Professional Junk Hauling La Mesa – Your Dump Alternative
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      La Mesa junk removal serves this vibrant East County community where hillside homes meet family neighborhoods and downtown village charm. From Mount Helix estates to Fletcher Hills properties to La Mesa Village apartments, our junk hauling La Mesa team navigates steep driveways, downtown parking restrictions, and East County terrain with expertise. We provide same-day junk pickup La Mesa as a faster, easier alternative to the crowded <strong>La Mesa dump</strong>, offering transparent pricing and complete service throughout the 91941 and 91942 areas.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our La Mesa operation is uniquely positioned to serve this diverse East County city. We understand that La Mesa CA junk removal requires more than just hauling capacity—it demands experience with hillside access on winding Mount Helix roads, knowledge of downtown Village parking logistics, familiarity with Grossmont area apartment complexes, and the ability to provide service that's more convenient than driving to the dump yourself. Whether you're clearing out a Mount Helix hillside estate, removing furniture from a La Mesa Village condo, or handling a garage cleanout near Lake Murray, our team brings the specialized local experience that makes junk removal easy and stress-free.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">La Mesa Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our trash removal La Mesa service covers every corner of this East County city, from hillside estates to valley neighborhoods to downtown urban properties. We've completed thousands of junk removal jobs throughout La Mesa's diverse areas, each with unique characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Mount Helix:</strong> Hillside estates with steep driveways, panoramic views, and challenging access requiring specialized equipment</li>
                        <li><strong>Fletcher Hills:</strong> Traditional family homes with multi-car garages and established neighborhoods</li>
                        <li><strong>La Mesa Village:</strong> Downtown condos, apartments, and retail properties with limited parking access</li>
                        <li><strong>Grossmont Center Area:</strong> Apartment complexes and commercial offices near the regional mall</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Lake Murray Area:</strong> Family homes near the reservoir with recreational property needs</li>
                        <li><strong>Spring Street Corridor:</strong> Trolley-accessible properties and mixed-use buildings</li>
                        <li><strong>College Area:</strong> Student housing and rental properties near Grossmont College</li>
                        <li><strong>Baltimore Drive:</strong> Residential neighborhoods connecting to central La Mesa</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk hauling La Mesa team knows every major route and residential street throughout this East County city. This local expertise matters when navigating La Mesa's mix of hillside terrain, downtown congestion, and suburban neighborhoods. We plan each job with detailed access planning:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>La Mesa Boulevard:</strong> Main east-west thoroughfare connecting downtown to residential areas</li>
                      <li>• <strong>University Avenue:</strong> Central corridor serving La Mesa Village and commercial district</li>
                      <li>• <strong>Spring Street:</strong> North-south route with trolley access and urban properties</li>
                      <li>• <strong>Fletcher Parkway:</strong> Eastern boundary connecting to El Cajon neighborhoods</li>
                      <li>• <strong>Lake Murray Boulevard:</strong> Scenic route serving lakeside residential properties</li>
                      <li>• <strong>Baltimore Drive:</strong> Residential connector linking north and central La Mesa</li>
                      <li>• <strong>Grossmont Boulevard:</strong> Commercial corridor serving shopping and medical facilities</li>
                      <li>• <strong>Mount Helix Drive:</strong> Winding hillside road requiring careful truck navigation</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">La Mesa Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide junk pickup La Mesa service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival estimates throughout this diverse East County community:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Grossmont Hospital—major medical center</li>
                        <li>• Grossmont Center—regional shopping mall</li>
                        <li>• Mount Helix Park—scenic overlook landmark</li>
                        <li>• La Mesa Village—downtown entertainment district</li>
                        <li>• Lake Murray—recreational reservoir area</li>
                        <li>• La Mesa Library—community gathering center</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Grossmont College—community college campus</li>
                        <li>• Helix Charter High School—educational facility</li>
                        <li>• La Mesa Community Center—recreation hub</li>
                        <li>• MacArthur Park—neighborhood green space</li>
                        <li>• Trolley Stations—Spring Street and Grossmont transit</li>
                        <li>• Peter Pan Junior Theater—cultural venue</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      La Mesa's East County location and mix of hillside and urban areas create unique traffic patterns that affect junk removal La Mesa scheduling. Our dispatch team actively monitors local traffic and coordinates with you to schedule service windows that maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning commute (6:30-9 AM):</strong> Heavy westbound traffic on La Mesa Boulevard and University Avenue as residents commute to San Diego. We recommend mid-morning (9:30 AM-2 PM) service windows when major corridors clear and residential street access improves significantly.</li>
                      <li><strong>Afternoon rush (3:30-6 PM):</strong> Eastbound traffic returns through La Mesa on main corridors. We prioritize earlier service windows or coordinate evening appointments after 6:30 PM for clients who prefer post-commute scheduling when parking and street access become easier.</li>
                      <li><strong>Village area timing:</strong> La Mesa Village parking is limited during business hours and evening dining times. We coordinate early morning (before 9 AM) or mid-afternoon (2-4 PM) service windows for downtown properties to ensure parking access for our trucks near buildings.</li>
                      <li><strong>Mount Helix access:</strong> Hillside properties with steep, winding driveways require careful timing. We avoid wet weather for hillside work and schedule during cooler parts of the day when temperatures allow safe navigation of steep terrain with heavy loads.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      La Mesa's inland East County location creates hot, dry summers and mild winters that affect junk removal operations year-round. Summer temperatures (June-September) regularly exceed 90°F in valley areas, with Mount Helix hillside properties often 5-10 degrees cooler due to elevation and breeze. We schedule early morning starts (7-10 AM) during heat waves to protect crews during physical hauling work and prevent heat damage to items being transported. The community experiences less marine layer fog than coastal San Diego neighborhoods, allowing consistent morning scheduling without weather delays. Winter rainy season (December-February) brings occasional heavy rainfall that makes Mount Helix's steep, winding roads more challenging—we monitor weather forecasts and may adjust timing for hillside properties during wet conditions to ensure crew safety. Santa Ana wind conditions occur periodically, bringing extremely dry, warm weather that requires fire safety awareness during outdoor debris removal in hillside areas where vegetation is present.
                    </p>

                    {/* Dump Alternative */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">La Mesa Dump Alternative – Why Choose Our Service</h3>
                    <p className="text-gray-700 mb-4">
                      Many La Mesa residents ask about the <strong>La Mesa dump</strong> when they need to dispose of junk. While the Sycamore Canyon Landfill serves the area, our La Mesa junk removal service offers significant advantages over making the trip yourself:
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-bold mb-3 text-blue-900">Why We're Better Than the Dump:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>No driving required:</strong> Skip the 20-minute drive to the landfill and the time spent waiting in line at the dump entrance</li>
                        <li><strong>No loading work:</strong> We do all the lifting, loading, and hauling—you don't touch a single item</li>
                        <li><strong>No truck rental needed:</strong> No need to rent a pickup truck or trailer to transport your junk</li>
                        <li><strong>Faster service:</strong> We arrive at your property and complete removal in under 2 hours—faster than the round trip to the dump</li>
                        <li><strong>Recycling included:</strong> We sort for donation and recycling, not just dump everything in the landfill</li>
                        <li><strong>Same-day available:</strong> Call before noon for same-day service—no waiting for dump hours or weekend availability</li>
                      </ul>
                    </div>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in La Mesa</h3>
                    <p className="text-gray-700 mb-4">
                      Our La Mesa junk removal service handles everything from single items to complete property cleanouts. We remove all the items you'd take to the dump—and more—with full-service convenience:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> from living rooms</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames</li>
                          <li>• Tables, chairs, dining sets</li>
                          <li>• Dressers, desks, cabinets, bookshelves</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a></li>
                          <li>• Stoves, dishwashers, microwaves</li>
                          <li>• TVs, computers, entertainment systems</li>
                          <li>• Water heaters and HVAC units</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Garage</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture and outdoor equipment</li>
                          <li>• Garage cleanouts and storage items</li>
                          <li>• Yard waste and landscaping debris</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Projects</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for inherited properties</li>
                          <li>• Apartment and condo move-outs with <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">professional cleanout services</a></li>
                          <li>• Storage unit clearing</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from remodels</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our La Mesa Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your La Mesa location. We'll provide estimated pricing based on volume.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> throughout La Mesa. We coordinate arrival times around your schedule and local traffic patterns.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and hillside access, and complete removal efficiently. You simply point—we handle everything.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true waste to landfill.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure—faster than a dump trip.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for La Mesa Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Local La Mesa Expertise:</strong> We navigate La Mesa's unique geography with ease—from Mount Helix's steep, winding hillside roads to La Mesa Village's limited downtown parking to Lake Murray area family neighborhoods. Our crews have completed thousands of La Mesa junk removal jobs and understand the specific access challenges of this diverse East County community.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Hillside Access Specialists:</strong> Mount Helix properties require specialized experience with steep driveways and narrow access roads. We bring the right equipment and expertise to safely navigate challenging hillside terrain that makes dump trips particularly difficult for residents.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Faster Than the Dump:</strong> Our same-day service means we arrive at your property and complete removal in under 2 hours—faster than loading your vehicle, driving to the dump, waiting in line, unloading, and driving back. We handle everything while you relax or focus on other priorities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access doesn't change our rates—you pay for volume removed, not location complexity. Most La Mesa jobs range from half-truck to full-truck loads.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="La Mesa"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="La Mesa"
          contextParagraph="Hillside estate cleanouts and Village area projects throughout La Mesa—from Mount Helix to Grossmont—all use the same transparent pricing. No hidden fees, faster than the dump."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="La Mesa" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal La Mesa"
          description="Get answers to common questions about our junk removal La Mesa services, pricing, and same-day availability."
          faqs={laMesaFAQs}
          ctaTitle="Still Have Questions About La Mesa Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal La Mesa services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Mount Helix estate furniture and family home removal throughout La Mesa</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Inherited hillside properties and family estate transitions in La Mesa</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Family home renovations and hillside property improvement projects</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
