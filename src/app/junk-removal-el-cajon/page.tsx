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
  title: 'Junk Removal El Cajon | East County\'s #1 Rated | (619) 750-0114',
  description: 'Professional junk removal El Cajon serving Fletcher Hills, Rancho San Diego, Granite Hills. Same-day service, estate cleanouts, scrap metal recycling. Licensed & insured. Call (619) 750-0114.',
  keywords: [
    'junk removal El Cajon',
    'scrap metal removal El Cajon',
    'metal recycling El Cajon',
    'junk hauling El Cajon',
    'trash removal El Cajon',
    'junk pickup El Cajon CA',
    'East County junk removal',
    'scrap metal recycling East County'
  ],
  openGraph: {
    title: 'Junk Removal El Cajon | Scrap Metal Recycling & Junk Hauling East County',
    description: 'Professional junk removal and scrap metal recycling in El Cajon CA. We haul appliances, copper, aluminum, steel & all junk. Same-day service East County.',
    url: 'https://severincleaners.com/junk-removal-el-cajon',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'El Cajon Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal El Cajon | Scrap Metal Recycling & Junk Hauling East County',
    description: 'Professional junk removal and scrap metal recycling in El Cajon CA. We haul appliances, copper, aluminum, steel & all junk. Same-day service East County.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-el-cajon',
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
    'geo.placename': 'El Cajon',
    'geo.position': '32.7948;-116.9625',
    'ICBM': '32.7948, -116.9625',
  },
};

const elCajonFAQs = [
  {
    question: "How much does junk removal cost in El Cajon?",
    answer: "Our <strong>junk removal El Cajon</strong> pricing is transparent and volume-based with no hidden fees. Pricing ranges from $100-$150 for a quarter truck load (single item like a couch or appliance), $200-$295 for a half truck load (bedroom set, multiple appliances, or garage cleanout), $350-$425 for a three-quarter truck load (full room clearance or large estate items), and $450-$495 for a full truck load (complete garage, multi-room estate cleanout, or large property projects). All pricing includes labor, loading, hauling, disposal fees, and recycling. We serve all Fletcher Hills, Rancho San Diego, Granite Hills, and East County neighborhoods with the same transparent pricing—no extra charges for hillside access or large properties. For detailed pricing information, see our <a href='/blog/how-much-does-junk-removal-cost-san-diego' className='text-blue-600 hover:underline'>San Diego junk removal cost guide</a>. Call (619) 750-0114 for a free quote specific to your El Cajon project."
  },
  {
    question: "Do you provide same-day junk hauling in East County?",
    answer: "Yes, we offer <strong>same-day junk hauling El Cajon</strong> service for urgent needs throughout East County. Whether you're in Fletcher Hills, Rancho San Diego, Granite Hills, Crest, or Downtown El Cajon, our locally owned team can respond quickly for emergency cleanouts, estate situations, and time-sensitive property needs. Our <a href='/same-day-junk-removal-san-diego' className='text-blue-600 hover:underline'>same-day junk removal</a> service covers all of San Diego County with priority scheduling for East County clients. Call before 2 PM for same-day service availability. For urgent commercial or contractor needs, we also offer <a href='/emergency-junk-removal-san-diego' className='text-blue-600 hover:underline'>emergency junk removal</a> with rapid response. Same-day availability depends on scheduling and crew availability, but we prioritize family emergencies and estate situations."
  },
  {
    question: "What neighborhoods in El Cajon do you cover?",
    answer: "Our East County junk removal covers all El Cajon neighborhoods including Fletcher Hills, Rancho San Diego, Granite Hills, Bostonia, Crest, Mount Helix, Downtown El Cajon, Jamacha-Lomita, Casa de Oro, and the Fletcher Parkway corridor. We serve from Parkway Plaza to the mountain communities, including hillside properties, master-planned communities, and established family neighborhoods throughout East County."
  },
  {
    question: "Can you handle large family properties or multi-generational homes?",
    answer: "Absolutely. Our <strong>junk pickup El Cajon</strong> service specializes in large family properties and multi-generational households common throughout East County. As a locally owned business, we understand the unique needs of family cleanouts, inherited properties, and estate transitions. We provide respectful, compassionate service that preserves important family memories while handling extensive property cleanouts with care and professionalism. Our <a href='/estate-cleanout-san-diego' className='text-blue-600 hover:underline'>estate cleanout services</a> are specifically designed for inherited homes and family transitions, with crews experienced in sorting, organizing, and respectfully handling family belongings. For large-scale projects involving entire properties, our <a href='/cleanout-services-san-diego' className='text-blue-600 hover:underline'>complete cleanout services</a> can handle multi-room, multi-generation accumulations efficiently. We work at your pace and coordinate with family members as needed throughout the process."
  },
  {
    question: "Do you serve Fletcher Hills and Rancho San Diego?",
    answer: "Yes, we provide comprehensive trash removal El Cajon service throughout Fletcher Hills and Rancho San Diego. We specialize in these premier East County neighborhoods, understanding their unique characteristics - from Fletcher Hills' established hillside properties and luxury estates to Rancho San Diego's master-planned communities and HOA requirements. Our team delivers professional service that respects community standards and family values in both areas."
  },
  {
    question: "Do you offer scrap metal removal and recycling in El Cajon?",
    answer: "Yes, our El Cajon scrap metal removal service accepts all types of metal including appliances, copper wire, aluminum, steel, brass, iron, and more. We provide fair pricing for scrap metal recycling El Cajon and haul to certified recycling facilities in East County. Whether you have old appliances, construction metal, or yard scrap, we offer same-day metal pickup El Cajon CA for residential and commercial properties throughout East County."
  },
  {
    question: "What types of scrap metal do you accept in East County?",
    answer: "Our metal recycling El Cajon service accepts: refrigerators, washers, dryers, stoves, water heaters, copper pipes and wire, aluminum siding and gutters, steel beams and rebar, brass fixtures, iron railings and gates, metal furniture, filing cabinets, and more. We handle both ferrous and non-ferrous metals. For large quantities of scrap metal removal East County, we offer competitive pricing and can often provide credits toward your total cost."
  }
];

export default function JunkRemovalElCajonPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "El Cajon",
    serviceName: "Junk Removal",
    description: "Professional El Cajon junk removal for Fletcher Hills, Rancho San Diego, Granite Hills. East County family specialists with same-day service. Call (619) 750-0114.",
    url: "https://severincleaners.com/junk-removal-el-cajon",
  });

  // Enhanced LocalBusiness schema for El Cajon
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-el-cajon#business",
    "name": "Severin Cleaners - Junk Removal El Cajon",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$100-$495",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "El Cajon",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7948,
      "longitude": -116.9625
    },
    "url": "https://severincleaners.com/junk-removal-el-cajon",
    "areaServed": [
      {
        "@type": "City",
        "name": "El Cajon",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "openingHours": "Mo-Su 06:00-20:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "El Cajon Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal El Cajon",
            "description": "Professional junk hauling and removal service for East County"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanout El Cajon",
            "description": "Compassionate estate and family property cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scrap Metal Removal El Cajon",
            "description": "Metal recycling and appliance disposal for East County"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Junk Hauling El Cajon",
            "description": "Emergency and same-day junk removal for urgent needs"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "El Cajon Junk Removal", url: "https://severincleaners.com/junk-removal-el-cajon" },
  ]);

  const faqSchema = generateFAQSchema(elCajonFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
    { name: "Santee", slug: "junk-removal-santee" },
    { name: "Lakeside", slug: "junk-removal-lakeside" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        <OptimizedGradientHero
          title="El Cajon Junk Removal"
          subtitle="Fletcher Hills to Rancho San Diego • Family Property Experts • Same-Day Service"
          description="✓ East County Specialists ✓ Large Property Experts ✓ Licensed & Insured"
        />

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
                      Professional Junk Removal El Cajon – East County Family Property Specialists
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      <strong>Junk removal El Cajon</strong> serves East County's diverse family community, from Fletcher Hills luxury estates to Rancho San Diego master-planned neighborhoods to Granite Hills rural properties. Our <strong>junk hauling El Cajon</strong> team navigates hillside access challenges, large multi-generational properties, and East County's unique terrain with expertise. We provide <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day</a> <strong>junk pickup El Cajon CA</strong> for family homes, <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a>, and garage organization projects throughout East County with <a href="/blog/how-much-does-junk-removal-cost-san-diego" className="text-blue-600 hover:underline">transparent pricing</a> and respectful, compassionate service.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our El Cajon operation is uniquely equipped to handle the challenges of East County properties. We understand that <strong>East County junk removal</strong> requires more than just hauling trucks—it demands experience with steep hillside driveways, knowledge of multi-generational family dynamics, capacity to handle large property cleanouts that span decades of accumulation, and the ability to work sensitively during estate transitions and family cleanouts. Whether you're clearing out a Fletcher Hills inherited estate, removing garage storage from a Rancho San Diego family home, or handling a complete property cleanout in Granite Hills, our team brings the specialized East County experience that family properties demand. We also serve nearby <a href="/junk-removal-la-mesa" className="text-blue-600 hover:underline">La Mesa</a>, <a href="/junk-removal-santee" className="text-blue-600 hover:underline">Santee</a>, <a href="/junk-removal-lakeside" className="text-blue-600 hover:underline">Lakeside</a>, and <a href="/junk-removal-spring-valley" className="text-blue-600 hover:underline">Spring Valley</a> communities.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">El Cajon Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>trash removal El Cajon</strong> service covers every corner of East County, from hillside estates to valley neighborhoods. We've completed thousands of junk removal jobs throughout El Cajon's diverse areas, each with unique characteristics—from established family neighborhoods to newer developments—that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Fletcher Hills:</strong> Luxury hillside estates with steep driveways, multi-generational family homes, and established properties</li>
                        <li><strong>Rancho San Diego:</strong> Master-planned community with HOA requirements, modern family homes, and garage organization needs</li>
                        <li><strong>Granite Hills:</strong> Larger lots with rural properties, multi-generational ranches, and extensive outdoor storage</li>
                        <li><strong>Bostonia:</strong> Established residential neighborhoods with traditional East County family homes and mature properties</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Mount Helix:</strong> Scenic hillside residences with panoramic views, luxury estates, and challenging access roads</li>
                        <li><strong>Crest:</strong> Mountain community properties with unique terrain, rural access, and estate-sized parcels</li>
                        <li><strong>Casa de Oro:</strong> Family neighborhoods with standard residential properties and established homes</li>
                        <li><strong>Downtown El Cajon:</strong> Urban core with <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial properties</a>, small businesses, and mixed-use buildings</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access Routes</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>junk hauling El Cajon</strong> team knows every major route and residential street throughout East County. This local expertise matters when navigating El Cajon's hillside terrain, understanding access challenges in established neighborhoods, and planning efficient routes through diverse property types. We plan each job with detailed route mapping:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Fletcher Parkway:</strong> Major east-west commercial corridor serving central El Cajon neighborhoods</li>
                      <li>• <strong>Main Street:</strong> Downtown thoroughfare with business district and historic properties</li>
                      <li>• <strong>Jamacha Road:</strong> North-south route connecting hillside communities to valley neighborhoods</li>
                      <li>• <strong>Magnolia Avenue:</strong> Residential corridor serving established family neighborhoods</li>
                      <li>• <strong>Greenfield Drive:</strong> Rancho San Diego access serving master-planned communities</li>
                      <li>• <strong>Dehesa Road:</strong> Rural route serving Crest and mountain properties with unique access</li>
                      <li>• <strong>La Mesa Boulevard:</strong> Western boundary connecting to La Mesa neighborhoods</li>
                      <li>• <strong>Broadway:</strong> Central route serving commercial and residential mix throughout El Cajon</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">El Cajon Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <strong>junk pickup El Cajon CA</strong> service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival estimates throughout East County's diverse terrain:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Parkway Plaza—regional shopping center</li>
                        <li>• Grossmont College—community college campus</li>
                        <li>• Fletcher Hills Community Center—neighborhood hub</li>
                        <li>• Sycuan Casino—entertainment destination</li>
                        <li>• Singing Hills Golf Resort—recreation facility</li>
                        <li>• Mount Helix Park—scenic overlook</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Water Conservation Garden—educational center</li>
                        <li>• Rancho San Diego Parkway—commercial corridor</li>
                        <li>• Cottonwood Golf Club—community recreation</li>
                        <li>• Bostonia Park—neighborhood green space</li>
                        <li>• Downtown El Cajon Performing Arts Center—cultural venue</li>
                        <li>• Crest Community Center—mountain area gathering point</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic Patterns & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      El Cajon's East County location and commuter patterns create specific traffic challenges that affect <strong>junk removal El Cajon</strong> scheduling. Our dispatch team actively monitors East County traffic and coordinates with you to schedule service windows that work around commute times and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning rush hours (6-9 AM):</strong> Heavy westbound traffic on I-8 and Fletcher Parkway as East County residents commute to San Diego. We recommend mid-morning (9:30 AM-2 PM) service windows when major corridors clear and residential streets become accessible without traffic delays.</li>
                      <li><strong>Afternoon rush hours (3:30-6:30 PM):</strong> Eastbound I-8 and Fletcher Parkway see heavy return traffic. We prioritize earlier service windows or coordinate evening appointments after 7 PM for clients who prefer post-commute scheduling and can be present during evening hours.</li>
                      <li><strong>Hillside access timing:</strong> Fletcher Hills and Mount Helix properties with steep driveways require careful timing. We avoid wet weather for hillside access and coordinate early morning or late afternoon appointments when temperatures are cooler for crew safety on steep terrain work.</li>
                      <li><strong>Weekend availability:</strong> Saturday mornings are popular for El Cajon junk removal, particularly for working families who need to be present during cleanouts. We offer flexible scheduling throughout weekends and coordinate with family schedules for estate cleanouts that require sorting and decision-making during the removal process.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Weather Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      El Cajon's inland East County location creates hot, dry weather conditions that affect junk removal operations throughout the year. Summer temperatures (June-September) regularly exceed 95°F, with valley neighborhoods experiencing extreme heat that requires early morning scheduling (6-9 AM) to protect crews during physical hauling work. Hillside properties like Fletcher Hills and Mount Helix can be 5-10 degrees cooler than valley areas, but steep terrain creates additional physical demands regardless of temperature. We schedule heat-sensitive jobs during cooler months when possible and provide crew rotation during extreme heat periods. Winter rainy season (December-February) brings occasional heavy rainfall that makes unpaved driveways in Crest and Granite Hills temporarily inaccessible—we monitor weather forecasts and coordinate alternative scheduling or access routes during wet periods. Santa Ana wind conditions occur periodically, bringing extremely dry, warm weather with fire risk that requires extra caution during outdoor debris work, particularly in hillside and rural areas where vegetation is present.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in El Cajon</h3>
                    <p className="text-gray-700 mb-4">
                      Our <strong>El Cajon junk removal</strong> service handles the unique mix of items common to East County family properties—from multi-generational household accumulation to garage storage to estate transition clearance. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Multi-generational <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture removal</a> from inherited homes</li>
                          <li>• Large family <a href="/couch-removal-san-diego" className="text-blue-600 hover:underline">sofas, sectionals, and couches</a> from living rooms</li>
                          <li>• Bedroom sets, <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">mattresses</a>, and guest room furniture</li>
                          <li>• Dining sets and household items from estate transitions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Scrap Metal</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Old <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances and scrap metal recycling</a></li>
                          <li>• Washers, dryers, refrigerators from home upgrades</li>
                          <li>• <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">Copper, aluminum, and steel scrap removal</a></li>
                          <li>• Water heaters, HVAC units, and metal equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Garage & Outdoor</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Garage cleanouts and decades of accumulated storage</li>
                          <li>• Shop equipment and automotive tools</li>
                          <li>• Yard equipment and landscaping materials</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Estate & Family Cleanouts</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanouts</a> for inherited properties</li>
                          <li>• Multi-generational home downsizing with <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">professional cleanout services</a></li>
                          <li>• Large property clearance for family transitions</li>
                          <li>• Respectful handling of family belongings and memories</li>
                        </ul>
                      </div>
                    </div>

                    {/* Scrap Metal Section */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Scrap Metal Removal & Recycling in El Cajon</h3>
                    <p className="text-gray-700 mb-4">
                      East County properties often accumulate scrap metal from years of home maintenance, automotive work, and property improvements. Our <strong>scrap metal removal El Cajon</strong> service handles all types of <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">metal recycling</a>, from <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">appliances</a> to construction materials to copper and aluminum scrap:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 text-blue-600">Appliances & Large Items</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Refrigerators and freezers (Freon removal included)</li>
                          <li>Washers, dryers, and dishwashers</li>
                          <li>Water heaters and HVAC units</li>
                          <li>Metal furniture and filing cabinets</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 text-blue-600">Construction & Scrap Metals</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Copper pipes, wire, and plumbing</li>
                          <li>Aluminum siding, gutters, and frames</li>
                          <li>Steel beams, rebar, and construction metal</li>
                          <li>Brass fixtures and iron materials</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our El Cajon Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your El Cajon location. We'll provide estimated pricing based on volume and coordinate any special access requirements for hillside properties.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> throughout East County. We coordinate arrival times around your schedule and traffic patterns for reliable service.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and hillside access, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal & Recycling:</strong> We sort items for donation, scrap metal recycling, and responsible disposal. Usable furniture goes to local charities, metals to certified recycling facilities, and only true waste to landfill as last resort. For sensitive situations, we also offer <a href="/hoarding-cleanup-san-diego" className="text-blue-600 hover:underline">compassionate hoarding cleanup</a> and <a href="/foreclosure-eviction-cleanout-san-diego" className="text-blue-600 hover:underline">foreclosure cleanout</a> services.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for El Cajon Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>East County Family Property Expertise:</strong> We navigate El Cajon's hillside access challenges, large multi-generational properties, and family estate transitions with compassion and professionalism. Our crews have completed thousands of El Cajon junk removal jobs and understand the specific requirements of Fletcher Hills estates, Rancho San Diego family homes, and Granite Hills rural properties. We handle family cleanouts with sensitivity and respect family memories during difficult transitions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Large Property Specialists:</strong> East County homes often feature extensive garages, sheds, and storage areas accumulated over decades. We have the crew capacity and equipment to handle large-scale cleanouts efficiently, from complete estate clearances to garage organization projects that span multiple days for properties with extensive accumulation. We also handle <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">construction debris removal</a> for renovation projects common in Fletcher Hills and Rancho San Diego.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Scrap Metal Recycling Experts:</strong> Our metal recycling El Cajon service provides fair pricing for valuable metals and proper disposal for all scrap. We coordinate with certified East County recycling facilities and can often provide credits toward your total cost for large quantities of copper, aluminum, and other valuable metals commonly found in garage cleanouts.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access and large property service don't change our rates—you pay for volume removed, not property complexity. Most El Cajon jobs range from half-truck to full-truck loads with clear pricing tiers. Our all-inclusive pricing is often more affordable than DIY trips to the dump—see our <a href="/blog/san-diego-dump-fees-guide" className="text-blue-600 hover:underline">dump fees comparison</a> for details.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="El Cajon"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="El Cajon"
          contextParagraph="Estate cleanouts and family property projects throughout El Cajon—from Fletcher Hills to Rancho San Diego—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="El Cajon" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal El Cajon"
          description="Get answers to common questions about our <strong>junk removal El Cajon</strong> services, pricing, and same-day availability."
          faqs={elCajonFAQs}
          ctaTitle="Still Have Questions About El Cajon Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our <strong>junk removal El Cajon</strong> services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Large family home furniture removal for Fletcher Hills and East County properties</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Compassionate estate services for multi-generational El Cajon families</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance & Scrap Metal Removal</h4>
                <p className="text-gray-600">Professional metal recycling and appliance disposal for East County</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
