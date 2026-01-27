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
  title: "Junk Removal San Marcos | Same-Day Service | (619) 750-0114",
  description: "Professional junk removal San Marcos services for homes and businesses. Expert San Marcos junk removal team serving San Elijo Hills, Discovery Hills. Same-day hauling, licensed & insured.",
  keywords: [
    "junk removal san marcos",
    "san marcos junk removal",
    "junk hauling san marcos",
    "junk pickup san marcos ca",
    "same day junk removal san marcos"
  ],
  openGraph: {
    title: "Junk Removal San Marcos | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal San Marcos services for homes and businesses. Expert San Marcos junk removal team. Same-day service, licensed & insured.",
    url: "https://severincleaners.com/junk-removal-san-marcos",
    siteName: "Severin Cleaners",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://severincleaners.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Junk Removal San Marcos - Severin Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk Removal San Marcos | Same-Day Pickup & Hauling Service",
    description: "Professional junk removal San Marcos services for homes and businesses. Expert San Marcos junk removal team. Same-day service, licensed & insured.",
    images: ["https://severincleaners.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://severincleaners.com/junk-removal-san-marcos",
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
    'geo.placename': 'San Marcos',
    'geo.position': '33.1434;-117.1661',
    'ICBM': '33.1434, -117.1661',
  },
};

const sanMarcosFAQs = [
  {
    question: "How much does junk removal San Marcos cost?",
    answer: "Our San Marcos junk removal pricing is transparent and upfront with no hidden fees. Single item pickup starts at $100, perfect for removing one couch or appliance. Quarter-load service costs $249, ideal for small cleanouts like a closet or bathroom. Half-load runs $349 for garage corners or bedroom furniture. Three-quarter load is $429 for larger projects, and full-load service tops out at $495 for complete garage, estate, or commercial cleanouts. All prices include labor, hauling, disposal fees, and cleanup. Properties in San Elijo Hills, Discovery Hills, Lake San Marcos, or downtown San Marcos all receive the same transparent pricing—no surcharges for hillside access or gated communities. We provide free estimates over the phone and confirm final pricing on-site before starting work, ensuring you know exactly what you'll pay."
  },
  {
    question: "Do you offer same-day service in San Marcos?",
    answer: "Yes, we provide same-day junk removal San Marcos service when you call before noon. Our local North County team can often arrive within 2-4 hours for urgent situations throughout the 92069, 92078, and 92096 zip codes. Same-day service is especially valuable for time-sensitive needs like rental property turnovers, real estate closing deadlines, or emergency cleanouts after unexpected events. We coordinate scheduling around San Marcos traffic patterns—avoiding San Marcos Boulevard congestion during morning and afternoon commutes and working around CSU San Marcos class schedules that affect local street traffic. Even during busy weekends or peak moving season (May-September), our expanded crew capacity keeps same-day appointments available. Whether you're in San Elijo Hills master-planned community, Lake San Marcos golf estates, or Twin Oaks neighborhoods, same-day junk hauling helps you meet deadlines without delay. Next-day service is available for all areas with flexible scheduling to match your availability."
  },
  {
    question: "What areas of San Marcos do you serve?",
    answer: "We provide junk removal throughout all of San Marcos and surrounding North County areas. Our service covers the upscale San Elijo Hills master-planned community with its HOA requirements and architectural standards, Lake San Marcos luxury golf community with waterfront estates and country club properties, Discovery Hills hillside neighborhoods with panoramic views and winding streets, Twin Oaks valley areas with family homes and standard suburban access, downtown San Marcos near CSU San Marcos with student housing and apartment complexes, Walnut Grove established neighborhoods, Rancho San Marcos newer developments, and La Moree hillside properties. We regularly serve all three San Marcos zip codes: 92069 (central San Marcos and Lake San Marcos), 92078 (eastern areas including San Elijo Hills), and 92096 (CSU San Marcos campus mail). Our trucks navigate everything from tight apartment parking lots to long gated-community driveways on hillside estates. We also serve nearby Vista, Escondido, Carlsbad, and Valley Center with the same reliable service and transparent pricing San Marcos residents expect."
  },
  {
    question: "Do you serve gated communities and HOA properties in San Marcos?",
    answer: "Absolutely. We specialize in serving San Marcos gated communities and HOA-governed neighborhoods. San Elijo Hills, with its strict architectural review and community standards, is a regular service area—we coordinate with HOA requirements, provide proof of insurance when requested, and schedule work during approved hours to maintain community harmony. Lake San Marcos country club estates with gate access and waterfront properties receive the same professional, discreet service that respects the community's upscale character. Discovery Hills hillside properties with gated access and long driveways are well within our capabilities—we coordinate gate codes in advance, plan routes for winding streets, and handle extended carries when needed. Our crew understands that HOA communities require professional presentation, minimal disruption to neighbors, and careful attention to property protection during junk removal. We've worked with property management companies throughout San Marcos for years, building relationships that ensure smooth coordination and consistent quality service. Whether you need estate cleanouts, moving assistance, or routine junk removal in any San Marcos gated community, we bring the professionalism and experience these neighborhoods demand."
  },
  {
    question: "Do you recycle or donate items in San Marcos?",
    answer: "Yes, eco-friendly disposal is central to our junk removal San Marcos service. We sort every load to maximize recycling and donation opportunities, minimizing what goes to landfills. Usable furniture, working appliances, and household goods in good condition go to North County charities including Goodwill, Salvation Army, and local family resource centers serving San Marcos residents. Metal items—appliances, scrap metal, bed frames—are delivered to recycling facilities that process materials responsibly. Mattresses and box springs are taken to specialized recycling centers that break them down into foam, fabric, and metal components rather than sending them to landfills. Electronics go to certified e-waste recyclers who handle hazardous materials safely. Wood debris, yard waste, and organic materials are sent to composting facilities when possible. We're familiar with North County disposal regulations and use licensed facilities for construction debris, concrete, and other specialty materials, ensuring environmental compliance throughout the entire junk removal process. San Marcos residents appreciate our commitment to responsible disposal that protects the community's environmental quality."
  },
  {
    question: "Are you licensed and insured for junk removal in San Marcos?",
    answer: "Yes, Severin Cleaners is fully licensed and insured to provide junk removal services throughout San Marcos and all of San Diego County. We carry comprehensive general liability insurance that protects your property during the removal process—if our crew accidentally damages walls, floors, or landscaping while hauling items, our insurance covers repairs. Our licensing ensures compliance with California waste hauling regulations, San Diego County disposal requirements, and local San Marcos ordinances. We use only licensed disposal facilities and transfer stations, providing documentation when needed for commercial clients or property management companies. Our team follows OSHA safety protocols for heavy lifting and hazardous material handling, protecting both crew and clients. For HOA-governed communities like San Elijo Hills and Lake San Marcos, we provide certificates of insurance upon request to meet community requirements. Business clients and property managers receive certificates of insurance for their records. Our licensing and insurance give you peace of mind that junk removal is handled professionally, legally, and safely throughout every San Marcos neighborhood."
  },
  {
    question: "Do you offer free estimates for San Marcos junk removal?",
    answer: "Yes, we provide free, no-obligation estimates for all San Marcos junk removal jobs. You can get an initial estimate over the phone by describing what you need removed—we'll give you a price range based on estimated volume. For larger or complex jobs like full estate cleanouts, garage clearances, or commercial property removals, we offer free on-site estimates where our team visits your San Marcos property to assess items and provide exact pricing. On-site estimates are especially helpful for San Elijo Hills properties with extensive landscaping debris, Lake San Marcos estates with multiple buildings requiring service, or multi-unit apartment turnovers near CSU San Marcos requiring coordination. During same-day service calls, we provide final pricing on arrival before starting work—you approve the quote before we touch anything. Our volume-based pricing is transparent and includes all labor, hauling, and disposal fees with no hidden charges for stairs, distance, or gated community access. Whether you're in hillside Discovery Hills or downtown San Marcos, our free estimates ensure you know costs upfront without surprises."
  },
  {
    question: "Can you remove construction debris in San Marcos?",
    answer: "Yes, we handle construction debris removal for San Marcos residential and commercial projects of all sizes. Our service covers renovation debris from kitchen and bathroom remodels, demolition waste from room additions and structural changes, roofing materials like shingles and underlayment, drywall and lumber scraps from framing work, flooring removal including tile, hardwood, and carpet, window and door replacement materials, and general contractor cleanup after project completion. San Marcos active construction market—from San Elijo Hills custom home builds to Lake San Marcos estate renovations to downtown mixed-use developments near CSU San Marcos—creates consistent debris removal needs. We coordinate with contractors on timing, often providing same-day or next-day service to keep job sites clear and projects on schedule. For larger commercial projects along San Marcos Boulevard or new residential developments, we arrange multiple pickups as needed. All construction debris goes to licensed facilities that sort materials for recycling when possible. We handle permits and documentation required for commercial construction waste in San Marcos, making contractor partnerships simple and compliant with city requirements."
  }
];

export default function JunkRemovalSanMarcosPage() {
  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in San Marcos",
    "description": "Professional San Marcos junk removal services for residential and commercial properties. Fast, reliable, eco-friendly disposal with same-day service available.",
    "url": "https://severincleaners.com/junk-removal-san-marcos",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-san-marcos#business"
    }
  };

  // Enhanced LocalBusiness schema for San Marcos
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-san-marcos#business",
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
    "url": "https://severincleaners.com/junk-removal-san-marcos",
    "areaServed": [
      {
        "@type": "City",
        "name": "San Marcos",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92069",
        "addressLocality": "San Marcos",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92078",
        "addressLocality": "San Marcos",
        "addressRegion": "CA"
      },
      {
        "@type": "PostalCode",
        "postalCode": "92096",
        "addressLocality": "San Marcos",
        "addressRegion": "CA"
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
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
    { name: "Junk Removal San Marcos", url: "https://severincleaners.com/junk-removal-san-marcos" },
  ]);

  const faqSchema = generateFAQSchema(sanMarcosFAQs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "Vista", slug: "junk-removal-vista" },
    { name: "Escondido", slug: "junk-removal-escondido" },
    { name: "Carlsbad", slug: "junk-removal-carlsbad" },
    { name: "Oceanside", slug: "junk-removal-oceanside" },
  ];

  return (
    <>
      <SchemaMarkup schema={combinedSchema} />

      <Header />

      <main>
        <OptimizedGradientHero
          title="Junk Removal San Marcos"
          subtitle="North County's #1 Choice • San Elijo Hills to Lake San Marcos • Same-Day Available"
          description="✓ HOA-Friendly Service ✓ Licensed & Insured ✓ Serving All of San Marcos CA"
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
                      Professional San Marcos Junk Removal – San Elijo Hills to Downtown
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Looking for reliable junk removal San Marcos services? Our expert San Marcos junk removal team serves North County's fastest-growing community with same-day hauling available. From San Elijo Hills master-planned neighborhoods to Lake San Marcos luxury golf estates, from Discovery Hills panoramic properties to downtown apartments near CSU San Marcos, we navigate gated communities, hillside terrain, and HOA requirements with expertise. We provide professional junk removal throughout San Marcos 92069, 92078, and 92096 zip codes with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our San Marcos operation is uniquely equipped to handle the challenges of North County's most diverse inland community. We understand that junk pickup San Marcos requires more than just hauling trucks—it demands local knowledge of gated community protocols, understanding of HOA requirements and standards, familiarity with university-area rental property needs, and the ability to work efficiently across San Marcos dramatic mix of upscale estates and family neighborhoods. Whether you're clearing out a student apartment near CSU San Marcos after semester turnover, removing construction debris from a San Elijo Hills custom home remodel, or handling a full estate cleanout at Lake San Marcos, our team brings the specialized experience San Marcos properties demand.
                    </p>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">San Marcos Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our furniture removal San Marcos service covers every corner of North County's thriving inland community, from upscale master-planned developments to established family neighborhoods. We've completed thousands of trash removal San Marcos jobs throughout San Marcos diverse neighborhoods, each with unique access challenges and property characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>San Elijo Hills:</strong> Master-planned community with HOA standards, gated access, and architectural requirements for professional service coordination</li>
                        <li><strong>Lake San Marcos:</strong> Luxury golf community with waterfront estates, country club properties, and upscale service expectations</li>
                        <li><strong>Discovery Hills:</strong> Hillside neighborhoods with panoramic views, winding streets, and elevation access challenges</li>
                        <li><strong>Twin Oaks:</strong> Valley neighborhoods with family homes, standard suburban access, and consistent service demand</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Downtown San Marcos:</strong> CSU San Marcos area with student housing, apartment complexes, and seasonal rental turnover needs</li>
                        <li><strong>Walnut Grove:</strong> Established neighborhoods with mature properties and garage cleanout requirements</li>
                        <li><strong>Rancho San Marcos:</strong> Newer developments with modern HOA standards and standard residential access</li>
                        <li><strong>La Moree:</strong> Hillside properties with custom homes and challenging terrain requiring extended service</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our appliance removal San Marcos team knows every major thoroughfare and neighborhood street in San Marcos. This local expertise matters when navigating North County's diverse terrain—gated community access in San Elijo Hills, lake-area winding roads, university-district parking limitations, and busy commercial corridors. We plan each <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">estate cleanout San Marcos</a> job with detailed route mapping to ensure our trucks can access your property efficiently:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>San Marcos Boulevard:</strong> Main commercial spine with peak congestion during rush hours and university traffic</li>
                      <li>• <strong>Rancho Santa Fe Road:</strong> North-south corridor connecting to Carlsbad and Escondido</li>
                      <li>• <strong>Twin Oaks Valley Road:</strong> Eastern access through valley neighborhoods</li>
                      <li>• <strong>Grand Avenue:</strong> Downtown corridor near CSU San Marcos with student housing</li>
                      <li>• <strong>Discovery Street:</strong> Access to Discovery Hills hillside communities</li>
                      <li>• <strong>Lake San Marcos Drive:</strong> Waterfront estates and country club access</li>
                      <li>• <strong>San Elijo Road:</strong> Master-planned community main entrance and internal access</li>
                      <li>• <strong>Woodland Parkway:</strong> Commercial district with business access requirements</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">San Marcos Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial junk removal San Marcos</a> service near all major landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates throughout this rapidly growing North County city:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• California State University San Marcos—university campus and student housing area</li>
                        <li>• Lake San Marcos Resort—waterfront community and recreation center</li>
                        <li>• St. Mark Golf Club—18-hole championship course and clubhouse</li>
                        <li>• Double Peak Park—hilltop park with panoramic views and trailhead</li>
                        <li>• San Marcos Town Center—retail and shopping district</li>
                        <li>• North County Square—commercial and retail hub</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Palomar College San Marcos Education Center—educational facility</li>
                        <li>• San Elijo Hills Town Center—master-planned community retail core</li>
                        <li>• Bradley Park—central recreation area and sports complex</li>
                        <li>• Discovery Lake—Discovery Hills community park and lake</li>
                        <li>• San Marcos Community Center—civic facility and recreation hub</li>
                        <li>• Walnut Grove Park—neighborhood recreation area</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      San Marcos unique combination of university traffic, commuter patterns, and master-planned community access affects same day junk removal San Marcos timing significantly. Our dispatch team actively monitors North County traffic patterns and coordinates with you to schedule service windows that minimize wait times and maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>University class changes (Mon-Fri 8 AM-3 PM):</strong> CSU San Marcos class schedules create periodic traffic surges on Grand Avenue, Barham Drive, and San Marcos Boulevard as students commute between campus and off-campus housing. We schedule around peak class-change times (typically on the hour) or prioritize early morning service (6-8 AM) for properties in the university district to ensure efficient access without student traffic delays.</li>
                      <li><strong>Morning commute (7-9 AM):</strong> San Marcos Boulevard and Rancho Santa Fe Road experience heavy southbound traffic as commuters head toward Carlsbad, Encinitas, and coastal employment centers. Twin Oaks Valley Road sees eastbound congestion toward inland jobs. We schedule early morning (6-7 AM) starts or wait until after 9:30 AM for properties requiring these corridor crossings to avoid commuter delays.</li>
                      <li><strong>Afternoon commute (3:30-6 PM):</strong> Northbound San Marcos Boulevard and Rancho Santa Fe Road clog with returning commuters. University-area traffic compounds residential congestion. We prioritize mid-morning to early afternoon service windows (9 AM-3 PM) for optimal access throughout San Marcos neighborhoods without fighting rush hour traffic.</li>
                      <li><strong>Gated community access:</strong> San Elijo Hills, Lake San Marcos, and Discovery Hills gated neighborhoods require advance coordination for gate codes, visitor access protocols, and sometimes security escort. We obtain access information during scheduling and arrive with proper documentation to ensure smooth entry without delays at community gates that could affect our service window timing.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Inland Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      San Marcos inland North County climate impacts junk removal year-round with temperature extremes and seasonal weather patterns that coastal areas don't experience. Summer temperatures regularly exceed 95°F, making outdoor junk accumulation a pest attraction and odor concern—decomposing materials in garages and yards create urgent removal needs faster than in cooler coastal zones. Our crews schedule early morning starts (6-8 AM) during heat waves to complete physical hauling work during cooler hours, protecting both crew safety and preventing heat damage to items being transported. Winter brings San Marcos limited but intense rainfall, with December-February storms causing drainage issues in hillside neighborhoods like Discovery Hills, flash flooding in low-lying areas near creek beds and drainage channels, and significant landscape debris from wind and water damage throughout the community. Seasonal Santa Ana wind events (September-December) bring hot, dry conditions that elevate fire risk for hillside communities, requiring aggressive brush clearance and defensible space maintenance around properties—we prioritize fire season debris removal for hillside estates and coordinate with San Marcos fire safety guidelines and HOA landscape requirements to help residents maintain compliant defensible space.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in San Marcos</h3>
                    <p className="text-gray-700 mb-4">
                      Our San Marcos junk removal service handles the diverse mix of items common to North County inland living—from student housing turnovers to estate cleanouts and construction debris. We remove everything from single items to complete property cleanouts:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, couches, sectionals</a> from estate sales</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, box springs, bed frames from turnovers</li>
                          <li>• Dressers, tables, chairs from downsizing moves</li>
                          <li>• Desks, bookshelves, student furniture from rental properties</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, washers, dryers</a> from rental properties</li>
                          <li>• Dishwashers, stoves, microwaves needing replacement</li>
                          <li>• TVs, computers, electronics from tech upgrades</li>
                          <li>• Air conditioners, heaters, HVAC equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Outdoor & Yard Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Patio furniture, BBQ grills, outdoor equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> for backyard renovations</li>
                          <li>• Pool equipment, furniture from pool remodels</li>
                          <li>• Landscaping waste, tree trimmings, yard debris</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate</a> & garage cleanouts for entire properties</li>
                          <li>• Student housing cleanouts after semester ends</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from home remodels</li>
                          <li>• <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">Commercial property</a> and business cleanouts</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our San Marcos Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your San Marcos location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for same-day junk pickup San Marcos service throughout North County. We coordinate arrival times around traffic patterns, university schedules, and your preferences.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. For gated communities, we have your access information ready. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate stairs and hillside properties, and complete removal efficiently. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for San Marcos Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>North County Expertise:</strong> We navigate San Marcos diverse communities with ease—gated access in San Elijo Hills, waterfront estates at Lake San Marcos, hillside terrain in Discovery Hills, and university-district parking challenges. Our crews have completed thousands of San Marcos junk removal jobs and understand the specific access requirements and HOA expectations of North County's master-planned communities.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout San Marcos and the 92069, 92078, 92096 zip codes. Our dispatch team actively monitors North County traffic and university schedules, ensuring reliable service even during busy periods and semester transitions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Gated community access or hillside terrain doesn't change our rates—you pay for volume removed, not access difficulty or time spent navigating HOA protocols.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We provide certificates of insurance for HOA communities upon request and carry proper coverage for all property types throughout San Marcos, from student apartments to luxury estates.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="San Marcos"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="San Marcos"
          contextParagraph="Estate cleanouts and garage clearances throughout San Marcos—from San Elijo Hills to Lake San Marcos estates—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="San Marcos" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal San Marcos"
          description="Get answers to common questions about our San Marcos junk removal services, pricing, and same-day availability."
          faqs={sanMarcosFAQs}
          ctaTitle="Still Have Questions About San Marcos Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our San Marcos junk removal services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related North County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Sofas, mattresses, and bulky furniture removal throughout San Marcos</p>
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
