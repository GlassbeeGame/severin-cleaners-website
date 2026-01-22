import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/schema";
import SchemaMarkup from "@/components/SchemaMarkup";
import TrustSignalsSection from "@/components/TrustSignalsSection";
import LocationPricingSection from "@/components/LocationPricingSection";
import LocationSidebarCTA from "@/components/LocationSidebarCTA";
import { generateLocationServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import OptimizedGradientHero from "@/components/OptimizedGradientHero";

export const metadata: Metadata = {
  title: "Junk Removal Escondido | Same-Day Service | (619) 750-0114",
  description: "Professional junk removal Escondido services for homes and businesses. Expert junk removal Escondido CA team serving Hidden Meadows, San Pasqual Valley. Same-day hauling, licensed & insured.",
  keywords: [
    "junk removal escondido",
    "junk removal escondido ca",
    "escondido junk removal",
    "junk hauling escondido",
    "junk pickup escondido",
    "same day junk removal escondido"
  ],
  openGraph: {
    title: "Junk Removal Escondido | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal Escondido services for homes and businesses. Expert junk removal Escondido CA team. Same-day service, licensed & insured.",
    url: "https://severincleaners.com/junk-removal-escondido",
    siteName: "Severin Cleaners",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://severincleaners.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Junk Removal Escondido - Severin Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal Escondido | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal Escondido services for homes and businesses. Expert junk removal Escondido CA team. Same-day service, licensed & insured.",
    images: ["https://severincleaners.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-escondido",
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
    'geo.placename': 'Escondido',
    'geo.position': '33.1192;-117.0864',
    'ICBM': '33.1192, -117.0864',
  },
};

const escondidoFAQs = [
    {
      question: "How much does junk removal Escondido cost?",
      answer: "Our junk removal Escondido CA pricing is transparent and upfront with no hidden fees. Single item pickup starts at $100, perfect for removing one couch or appliance. Quarter-load service costs $249, ideal for small cleanouts like a closet or bathroom. Half-load runs $349 for garage corners or bedroom furniture. Three-quarter load is $429 for larger projects, and full-load service tops out at $495 for complete garage, estate, or commercial cleanouts. All prices include labor, hauling, disposal fees, and cleanup. Properties in Hidden Meadows, San Pasqual Valley, or downtown Escondido all receive the same transparent pricing—no surcharges for hillside access or narrow streets. We provide free estimates over the phone and confirm final pricing on-site before starting work, ensuring you know exactly what you'll pay."
    },
    {
      question: "Do you offer same-day service in Escondido?",
      answer: "Yes, we provide same-day junk removal Escondido service when you call before noon. Our local North County team can often arrive within 2-4 hours for urgent situations throughout the 92025, 92026, and 92027 zip codes. Same-day service is especially valuable for time-sensitive needs like rental property turnovers, real estate closing deadlines, or emergency cleanouts after unexpected events. We coordinate scheduling around Escondido's traffic patterns—avoiding Valley Parkway congestion during morning and afternoon commutes—to ensure reliable arrival times. Even during busy weekends or peak moving season (May-September), our expanded crew capacity keeps same-day appointments available. Whether you're in downtown Escondido, hillside Hidden Meadows, or rural San Pasqual Valley, same-day junk hauling helps you meet deadlines without delay. Next-day service is available for all areas with flexible scheduling to match your availability."
    },
    {
      question: "What areas of Escondido do you serve?",
      answer: "We provide junk removal throughout all of Escondido and surrounding North County areas. Our service covers downtown Escondido's historic core with its narrow streets and vintage apartments, hillside communities like Hidden Meadows and Jesmond Dene with steep driveways and gated access, the semi-rural San Pasqual Valley agricultural area with vineyard properties and horse facilities, established neighborhoods around Felicita Park, the commercial corridor along Centre City Parkway and Broadway, and newer developments near the Rancho Bernardo border. We regularly serve all three Escondido zip codes: 92025 (central Escondido), 92026 (northeastern areas), and 92027 (southern and western neighborhoods). Our trucks navigate everything from tight downtown alleys to long private driveways on multi-acre estates. We also serve nearby Vista, Poway, San Marcos, and Valley Center with the same reliable service and transparent pricing Escondido residents expect."
    },
    {
      question: "Do you serve rural or hillside properties in Escondido?",
      answer: "Absolutely. We specialize in challenging property access throughout Escondido's diverse terrain. Hidden Meadows hillside estates with steep, winding driveways are a regular part of our service area—we use appropriately sized trucks and plan routes in advance to handle elevation changes and narrow access roads. San Pasqual Valley agricultural properties with long driveways, vineyard debris, and farm equipment removal are well within our capabilities. Jesmond Dene's semi-rural hillside homes with limited street access and large-lot cleanouts receive the same professional service as downtown properties. Our crew brings extra equipment for properties requiring extended carries from house to truck, and we coordinate gate access codes and timing for gated communities. Rural Escondido properties often accumulate more outdoor debris—brush piles, old fencing, agricultural waste—and we handle these specialized removals with proper disposal at North County facilities. No property is too remote or difficult to access within Escondido and surrounding North County areas."
    },
    {
      question: "Do you recycle or donate items in Escondido?",
      answer: "Yes, eco-friendly disposal is central to our junk removal Escondido service. We sort every load to maximize recycling and donation opportunities, minimizing what goes to landfills. Usable furniture, working appliances, and household goods in good condition go to North County charities including Goodwill, Salvation Army, and local family resource centers serving Escondido residents. Metal items—appliances, scrap metal, bed frames—are delivered to recycling facilities that process materials responsibly. Mattresses and box springs are taken to specialized recycling centers that break them down into foam, fabric, and metal components rather than sending them to landfills. Electronics go to certified e-waste recyclers who handle hazardous materials safely. Wood debris, yard waste, and organic materials are sent to composting facilities when possible. We're familiar with North County disposal regulations and use licensed facilities for construction debris, concrete, and other specialty materials, ensuring environmental compliance throughout the entire junk removal process."
    },
    {
      question: "Are you licensed and insured for junk removal in Escondido?",
      answer: "Yes, Severin Cleaners is fully licensed and insured to provide junk removal services throughout Escondido and all of San Diego County. We carry comprehensive general liability insurance that protects your property during the removal process—if our crew accidentally damages walls, floors, or landscaping while hauling items, our insurance covers repairs. Our licensing ensures compliance with California waste hauling regulations, San Diego County disposal requirements, and local Escondido ordinances. We use only licensed disposal facilities and transfer stations, providing documentation when needed for commercial clients or property management companies. Our team follows OSHA safety protocols for heavy lifting and hazardous material handling, protecting both crew and clients. For HOA-governed communities like Hidden Meadows, we provide proof of insurance upon request to meet community requirements. Business clients and property managers receive certificates of insurance for their records. Our licensing and insurance give you peace of mind that junk removal is handled professionally, legally, and safely throughout every Escondido neighborhood."
    },
    {
      question: "Do you offer free estimates for Escondido junk removal?",
      answer: "Yes, we provide free, no-obligation estimates for all junk removal Escondido jobs. You can get an initial estimate over the phone by describing what you need removed—we'll give you a price range based on estimated volume. For larger or complex jobs like full estate cleanouts, garage clearances, or commercial property removals, we offer free on-site estimates where our team visits your Escondido property to assess items and provide exact pricing. On-site estimates are especially helpful for Hidden Meadows properties with challenging access, San Pasqual Valley agricultural cleanouts with mixed debris types, or multi-unit apartment turnovers requiring coordination. During same-day service calls, we provide final pricing on arrival before starting work—you approve the quote before we touch anything. Our volume-based pricing is transparent and includes all labor, hauling, and disposal fees with no hidden charges for stairs, distance, or difficulty. Whether you're in downtown Escondido or rural areas, our free estimates ensure you know costs upfront without surprises."
    },
    {
      question: "Can you remove construction debris in Escondido?",
      answer: "Yes, we handle construction debris removal for Escondido residential and commercial projects of all sizes. Our service covers renovation debris from kitchen and bathroom remodels, demolition waste from room additions and structural changes, roofing materials like shingles and underlayment, drywall and lumber scraps from framing work, flooring removal including tile, hardwood, and carpet, window and door replacement materials, and general contractor cleanup after project completion. Escondido's active construction market—from downtown mixed-use developments to Hidden Meadows custom home builds to San Pasqual Valley barn renovations—creates consistent debris removal needs. We coordinate with contractors on timing, often providing same-day or next-day service to keep job sites clear and projects on schedule. For larger commercial projects along Centre City Parkway or new residential developments, we arrange multiple pickups as needed. All construction debris goes to licensed facilities that sort materials for recycling when possible. We handle permits and documentation required for commercial construction waste in Escondido, making contractor partnerships simple and compliant."
    }
  ];

export default function JunkRemovalEscondidoPage() {
  const serviceSchema = generateLocationServiceSchema({
    locationName: "Escondido",
    serviceName: "Junk Removal",
    description: "Professional Escondido junk removal services for residential and commercial properties. Fast, reliable, eco-friendly disposal with same-day service available.",
    url: "https://severincleaners.com/junk-removal-escondido",
  });

  // Enhanced LocalBusiness schema for Escondido
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-escondido#business",
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
    "url": "https://severincleaners.com/junk-removal-escondido",
    "areaServed": [
      {
        "@type": "City",
        "name": "Escondido",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92025",
        "addressLocality": "Escondido",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92026",
        "addressLocality": "Escondido",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92027",
        "addressLocality": "Escondido",
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Junk Removal Escondido", url: "https://severincleaners.com/junk-removal-escondido" },
  ]);

  const faqSchema = generateFAQSchema(escondidoFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "Vista", slug: "junk-removal-vista" },
    { name: "Poway", slug: "junk-removal-poway" },
    { name: "Oceanside", slug: "junk-removal-oceanside" },
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        <OptimizedGradientHero
          title="Junk Removal Escondido"
          subtitle="North County's #1 Choice • Hidden Meadows to Downtown • Same-Day Available"
          description="✓ Large Property Experts ✓ Licensed & Insured ✓ Serving All of Escondido CA"
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
                      Professional Junk Removal Escondido – Hidden Meadows to Downtown
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Looking for reliable junk removal Escondido services? Our expert junk removal Escondido CA team serves North County's most diverse inland community with same-day hauling available. From historic downtown bungalows to sprawling Hidden Meadows estates, from San Pasqual Valley vineyard properties to dense apartment complexes along Centre City Parkway, we navigate steep hillside driveways, agricultural access roads, and narrow downtown streets with expertise. We provide professional junk removal throughout Escondido's 92025, 92026, and 92027 zip codes with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Escondido operation is uniquely equipped to handle the challenges of North County's largest inland city. We understand that junk pickup Escondido requires more than just hauling trucks—it demands local knowledge of hillside terrain, understanding of agricultural property access, familiarity with HOA requirements in planned communities, and the ability to work efficiently across Escondido's dramatic elevation changes and diverse property types. Whether you're clearing out a downtown apartment after tenant turnover, removing construction debris from a Hidden Meadows remodel, or handling a full estate cleanout in the historic core, our team brings the specialized experience Escondido properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Escondido Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our furniture removal Escondido service covers every corner of North County's largest inland city, from downtown historic districts to hillside communities bordering the Cleveland National Forest. We've completed thousands of trash removal Escondido jobs throughout Escondido's diverse neighborhoods, each with unique access challenges and property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Downtown Escondido:</strong> Historic core with narrow streets, mixed-use buildings, and older apartment complexes requiring careful navigation</li>
                        <li><strong>Hidden Meadows:</strong> Gated hillside community with steep driveways, custom estates, and long access roads requiring extended service times</li>
                        <li><strong>San Pasqual Valley:</strong> Rural agricultural properties, vineyards, horse properties with large-lot cleanouts and agricultural debris</li>
                        <li><strong>Felicita Park Area:</strong> Family neighborhoods with mature landscaping, garage cleanouts, and yard waste removal needs</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Jesmond Dene:</strong> Semi-rural hillside homes with challenging access and estate-sized property cleanouts</li>
                        <li><strong>North Broadway Corridor:</strong> Commercial district with business cleanouts and mixed-use property service</li>
                        <li><strong>Mission Avenue South:</strong> Residential neighborhoods with standard access and consistent service demand</li>
                        <li><strong>Rancho Bernardo Border:</strong> Planned communities with HOA requirements and standard suburban junk removal needs</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our appliance removal Escondido team knows every major thoroughfare and neighborhood street in Escondido. This local expertise matters when navigating North County's diverse terrain—steep hillside roads in Hidden Meadows, narrow downtown alleys, agricultural access roads in San Pasqual Valley, and busy commercial corridors. We plan each <strong>estate cleanout Escondido</strong> job with detailed route mapping to ensure our trucks can access your property efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Centre City Parkway:</strong> Main commercial spine with peak congestion during rush hours</li>
                      <li>• <strong>Valley Parkway (Highway 78):</strong> East-west connector requiring morning traffic planning</li>
                      <li>• <strong>El Norte Parkway:</strong> Northern access with hillside neighborhood connections</li>
                      <li>• <strong>Escondido Boulevard:</strong> North-south arterial through downtown core</li>
                      <li>• <strong>Auto Park Way:</strong> Commercial district with business access requirements</li>
                      <li>• <strong>Bear Valley Parkway:</strong> Eastern corridor to rural properties and vineyards</li>
                      <li>• <strong>Broadway:</strong> Historic downtown with limited parking and narrow streets</li>
                      <li>• <strong>Mission Avenue:</strong> Residential corridor with consistent neighborhood access</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Escondido Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide commercial junk removal Escondido service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates throughout this geographically expansive North County city:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• California Center for the Arts—downtown cultural hub</li>
                        <li>• Palomar Medical Center—major healthcare facility</li>
                        <li>• Westfield North County—regional shopping destination</li>
                        <li>• Stone Brewing World Bistro—craft brewery landmark</li>
                        <li>• Escondido City Hall—civic center location</li>
                        <li>• San Diego Zoo Safari Park—eastern boundary landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Felicita Park—central recreation area</li>
                        <li>• Lake Dixon & Daley Ranch—outdoor recreation areas</li>
                        <li>• San Pasqual Battlefield—historic site reference</li>
                        <li>• Grape Day Park—downtown historic district</li>
                        <li>• Hidden Meadows Community Center—hillside hub</li>
                        <li>• Escondido High School—central educational landmark</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Escondido's inland location and commuter traffic patterns affect same day junk removal Escondido timing significantly. Our dispatch team actively monitors North County traffic patterns and coordinates with you to schedule service windows that minimize wait times and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Morning commute (7-9 AM):</strong> Valley Parkway and Centre City Parkway experience heavy eastbound traffic as commuters head toward inland employment centers. We schedule early morning (6-7 AM) starts or wait until after 9:30 AM for properties requiring these corridor crossings.</li>
                      <li><strong>Afternoon commute (3:30-6 PM):</strong> Westbound traffic clogs Valley Parkway as workers return from Rancho Bernardo and Poway. Downtown Escondido sees increased congestion around Escondido Boulevard and Broadway. We prioritize mid-morning to early afternoon service windows for optimal access.</li>
                      <li><strong>Safari Park events:</strong> Special events at San Diego Zoo Safari Park create significant traffic on Via Rancho Parkway and eastbound Valley Parkway, particularly on summer weekends. We coordinate around these events when serving eastern Escondido and San Pasqual Valley properties.</li>
                      <li><strong>Downtown events:</strong> Friday night Cruisin' Grand car shows (April-September) close portions of downtown Grand Avenue 5-9 PM. We route around downtown core during these popular weekly events or schedule service earlier in the day for nearby properties.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Escondido's inland North County climate impacts junk removal year-round with temperature extremes and fire weather risks that coastal areas don't experience. Summer temperatures regularly exceed 95°F, making outdoor junk accumulation a pest attraction and odor concern—decomposing materials in garages and yards create urgent removal needs faster than in cooler coastal zones. Our crews schedule early morning starts (6-8 AM) during heat waves to complete physical hauling work during cooler hours, protecting both crew safety and preventing heat damage to items being transported. Winter brings Escondido's limited but intense rainfall, with December-February storms causing drainage issues in hillside neighborhoods, flash flooding in low-lying areas near creek beds, and significant landscape debris from wind and water damage. Most critically, Escondido faces elevated wildfire risk during Santa Ana wind events (September-December), when hillside communities like Hidden Meadows and Jesmond Dene require aggressive brush clearance and defensible space maintenance—we prioritize fire season debris removal for properties in high-risk zones, coordinating with Cal Fire guidelines and homeowner HOA requirements.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Escondido</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Escondido CA service handles the unique mix of items common to North County inland living—from fire-season brush and agricultural debris to estate cleanouts and commercial property clearances. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> for estate sales</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames from turnovers</li>
                          <li>• Dressers, tables, chairs from downsizing moves</li>
                          <li>• Desks, bookshelves, cabinets for garage cleanouts</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from rental properties</li>
                          <li>• Dishwashers, stoves, microwaves needing replacement</li>
                          <li>• TVs, computers, electronics from tech upgrades</li>
                          <li>• Air conditioners, heaters, swamp coolers</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Yard Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Brush, branches, fire clearance debris</li>
                          <li>• Patio furniture, BBQ grills, outdoor equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> for backyard renovations</li>
                          <li>• Fencing materials, landscaping waste, tree trimmings</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate</a> & garage cleanouts for entire properties</li>
                          <li>• Storage unit contents and accumulated items</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from home remodels</li>
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial property</a> and business cleanouts</li>
                          <li>• <a href="/scrap-metal-removal" className="text-blue-600 hover:underline">Scrap metal recycling</a> and removal</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Escondido Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Escondido location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day junk pickup Escondido service throughout North County. We coordinate arrival times around traffic patterns and your schedule preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and hillside properties, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Escondido Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County Expertise:</strong> We navigate Escondido's challenging terrain with ease—steep hillside driveways in Hidden Meadows, narrow downtown streets, agricultural property access in San Pasqual Valley, and everything in between. Our crews have completed thousands of Escondido junk removal jobs and understand the specific access challenges of North County's diverse property types.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Escondido and the 92025, 92026, 92027 zip codes. Our dispatch team actively monitors North County traffic and schedules arrival windows that work around commuter congestion, ensuring reliable service even during busy periods.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access or downtown parking challenges don't change our rates—you pay for volume removed, not time or access difficulty.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for challenging property access, including protection for steep driveways, hillside terrain, and properties requiring extended access routes.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Escondido"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Escondido"
          contextParagraph="Estate cleanouts and garage clearances throughout Escondido—from Hidden Meadows hillside homes to downtown properties—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Escondido" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Escondido"
          description="Get answers to common questions about our junk removal Escondido services, pricing, and same-day availability."
          faqs={escondidoFAQs}
          ctaTitle="Still Have Questions About Escondido Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Escondido services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky furniture removal throughout Escondido</p>
              </a>
              <a href="/appliance-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Appliance Removal San Diego</h4>
                <p className="text-gray-600">Fridges, washers, dryers, and appliance disposal for North County</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanout San Diego</h4>
                <p className="text-gray-600">Complete property cleanouts for estates and downsizing moves</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
