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
  title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square | (619) 750-0114',
  description: 'Junk removal Santee specialists: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills garages. Recreation gear, family homes, commercial. Same-day service.',
  keywords: [
    'junk removal santee',
    'santee junk removal',
    'junk hauling santee',
    'santee lakes rv equipment removal',
    'trolley square apartment cleanout',
    'carlton hills garage cleanout',
    'sky ranch junk removal',
    'recreation equipment disposal santee',
    'family garage cleanout santee',
    'mission gorge commercial junk removal',
    'santee family home cleanout',
    'east county junk hauling'
  ],
  openGraph: {
    title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square • Carlton Hills',
    description: 'Junk removal Santee: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills family garages. Recreation gear specialists. Call (619) 750-0114.',
    url: 'https://severincleaners.com/junk-removal-santee',
    siteName: 'Severin Cleaners',
    images: [{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Santee Junk Removal - Severin Cleaners'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junk Removal Santee | Santee Lakes RV • Trolley Square • Carlton Hills',
    description: 'Junk removal Santee: Santee Lakes RV equipment, Trolley Square apartments, Carlton Hills family garages. Recreation gear specialists. Call (619) 750-0114.',
    images: ['https://severincleaners.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://severincleaners.com/junk-removal-santee',
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
    'geo.placename': 'Santee',
    'geo.position': '32.8384;-116.9739',
    'ICBM': '32.8384, -116.9739',
  },
};

const santeeFAQs = [
  {
    question: "How much does junk removal Santee cost?",
    answer: "Our junk removal Santee pricing is transparent and upfront with no hidden fees.\n\nPricing Structure:\n• Small items: Starting at $69\n• Standard items (couches, appliances, mattresses): Starting at $100\n• Quarter-load: $249 (ideal for closets or bathroom corners)\n• Half-load: $349 (garage sections or bedroom furniture)\n• Three-quarter load: $429 (larger projects, multiple rooms)\n• Full-load: $495 (complete garage, apartment, or estate cleanouts)\n\nAll prices include labor, hauling, disposal fees, and cleanup.\n\nProperties throughout Santee receive the same transparent pricing. Whether you're in Carlton Hills, Sky Ranch, Trolley Square, or Carlton Oaks, there are no surcharges for hillside access or apartment coordination.\n\nWe provide free estimates over the phone by describing your items. Final pricing is confirmed on-site before we start work. You'll know exactly what you'll pay before we touch anything.\n\nMost Santee garage cleanouts range from quarter-truck to half-truck loads. Family homes with two-car or three-car garages often accumulate storage over years. We handle everything from recreational equipment and seasonal decorations to old furniture and appliance upgrades. Our efficient, professional service gets your garage space back for its intended purpose."
  },
  {
    question: "Do you handle garage cleanouts and bulky item pickup in Santee?",
    answer: "Absolutely. Our junk removal Santee service specializes in garage cleanouts and bulky item removal.\n\nWhat We Remove:\n• Furniture: Sofas, sectionals, dining sets, bedroom furniture\n• Appliances: Refrigerators, washers, dryers, dishwashers\n• Exercise equipment: Treadmills, ellipticals, weight benches, home gym equipment\n• Household items: Storage boxes, seasonal decorations, children's outgrown toys\n• RV and recreation gear: Camping equipment, boats, lake recreation gear\n\nSantee's generous garage spaces in Carlton Hills, Sky Ranch, and West Hills often become long-term storage. Years of family living create accumulation that fills two-car and three-car garages. We help families reclaim these valuable spaces for vehicle parking and organized storage.\n\nOur team brings appropriate truck capacity for garage clearances. We work efficiently to complete most residential cleanouts in 1-2 hours. We navigate narrow garage spaces carefully. We protect walls and flooring during removal. We sweep clean when finished.\n\nWhether you're organizing for a new vehicle purchase, preparing for a home sale, or reclaiming space from years of accumulation, we deliver professional results. Transparent pricing and same-day availability when needed."
  },
  {
    question: "Can you provide same-day junk removal in Santee?",
    answer: "Yes, we provide same-day junk removal Santee service when you call before noon. Our local team can often arrive within 2-4 hours for urgent situations throughout Santee's 92071 zip code.\n\nSame-Day Service Is Valuable For:\n• Rental property turnovers when tenants leave unexpected debris\n• Real estate closing deadlines requiring immediate property clearing\n• Family emergencies necessitating rapid cleanout support\n• Home organization projects with tight timelines\n\nWe coordinate scheduling around Santee's traffic patterns. We avoid Mission Gorge Road congestion during morning commute (6:30-8:30 AM) and afternoon rush (4-6 PM). This ensures reliable arrival times throughout Carlton Hills, Sky Ranch, and Trolley Square.\n\nEven during busy weekends when Santee Lakes recreation and Costco create traffic surges, our expanded crew capacity keeps same-day appointments available. Property managers coordinating apartment turnovers near Trolley Square receive priority scheduling.\n\nFamilies facing unexpected cleanout needs can count on responsive service. Estate transitions, downsizing moves, or storage overflow requiring immediate attention—we're here to help.\n\nOur dispatch team actively monitors conditions and communicates realistic arrival windows. You can plan your day around our service without extended waiting periods.\n\nNext-day service is available for all Santee areas. We offer flexible scheduling to match your availability, including evening and weekend appointments for working families."
  },
  {
    question: "Do you work with Santee property managers and apartment complexes?",
    answer: "Yes, our junk removal Santee service provides comprehensive commercial support for property managers and apartment complexes.\n\nProperty Management Services:\n• Tenant turnovers: Rapid cleanout between move-out and move-in to minimize vacancy periods\n• Common area cleanouts: Remove furniture from recreation rooms and fitness centers\n• Bulk item removal: Handle oversized items standard trash service won't accept\n• After-hours scheduling: Evenings and weekends to avoid disrupting current tenants\n\nWe coordinate tenant turnovers for multi-family properties near Trolley Square. Quick service maintains rental income flow and keeps units ready for new tenants.\n\nProperty managers appreciate our responsive communication and professional crews. We respect tenant privacy and meet property standards. Transparent pricing makes budgeting for turnover costs predictable.\n\nWe provide certificates of insurance for property management companies. We meet building access requirements. We coordinate with on-site maintenance teams for efficient service delivery.\n\nSantee's mix of properties creates unique access considerations:\n• Family apartments: Standard parking and access\n• Trolley-accessible developments: Elevator coordination and limited parking\n• Hillside multi-family properties: Steep access and terrain challenges\n\nWe navigate parking limitations, coordinate elevator usage, and handle stairs efficiently without property damage.\n\nRegular service contracts are available for properties with consistent turnover needs. Benefits include priority scheduling and volume discounts that reduce overall maintenance costs."
  },
  {
    question: "Are you licensed and insured for junk removal in Santee?",
    answer: "Yes, Severin Cleaners is fully licensed and insured to provide junk removal services throughout Santee and all of San Diego County. We carry comprehensive general liability insurance that protects your property during the removal process—if our crew accidentally damages walls, floors, landscaping, or structures while hauling items, our insurance covers repairs. This protection is especially important for Santee's family homes where we navigate tight garage spaces, protect hardwood flooring, and work around family belongings during cleanout operations. Our licensing ensures compliance with California waste hauling regulations, San Diego County disposal requirements, and local Santee ordinances governing debris removal and transport. We use only licensed disposal facilities and transfer stations, providing documentation when needed for commercial clients, property management companies, or HOA-governed communities. Our team follows OSHA safety protocols for heavy lifting and hazardous material handling, protecting both crew and clients during garage cleanouts, apartment turnovers, and estate removal projects. For Santee apartment complexes and property management companies, we provide certificates of insurance upon request to meet building requirements and property owner insurance obligations. HOA communities like Carlton Oaks receive proof of insurance for contractor access compliance. Our licensing and insurance give you peace of mind that junk removal is handled professionally, legally, and safely throughout every Santee neighborhood—from hillside Carlton Hills properties to trolley-accessible downtown developments to Sky Ranch family communities. East County residents deserve professional service with proper coverage, and we deliver exactly that with every junk removal job."
  },
  {
    question: "Do you recycle or donate items in Santee?",
    answer: "Yes, eco-friendly disposal is central to our junk removal Santee service. We sort every load to maximize recycling and donation opportunities, minimizing what goes to landfills. Usable furniture, working appliances, and household goods in good condition go to East County charities including Goodwill, Salvation Army, and local family resource centers serving Santee residents and surrounding communities. Metal items—appliances, scrap metal, bed frames, exercise equipment—are delivered to recycling facilities that process materials responsibly and pay by weight, offsetting disposal costs and supporting our competitive pricing. Mattresses and box springs are taken to specialized recycling centers that break them down into foam, fabric, and metal components rather than sending them to landfills where they consume valuable space. Electronics go to certified e-waste recyclers who handle hazardous materials like batteries, screens, and circuit boards safely according to California environmental regulations. Wood debris, yard waste, and organic materials are sent to composting facilities when possible rather than landfills. We're familiar with East County disposal regulations and use licensed facilities for construction debris, concrete, asphalt, and other specialty materials removed during Santee home renovations and apartment updates. Our eco-friendly approach isn't just good environmental practice—it's good business. By maximizing donation and recycling, we reduce landfill fees and pass those savings to Santee customers through competitive pricing. Family homes appreciate knowing their children's outgrown toys, usable furniture, and working appliances find new life with East County families who need them rather than filling landfills unnecessarily."
  },
  {
    question: "What areas of Santee do you serve for junk removal?",
    answer: "We provide junk removal throughout all of Santee and surrounding East County areas.\n\nSantee Neighborhoods We Serve:\n• Carlton Hills: Hillside neighborhoods with panoramic views, challenging driveway access, and family homes with extensive storage\n• Sky Ranch: Newer family developments with modern homes, HOA communities, and garage organization needs\n• Santee Trolley Square: Mixed-use development with transit access, apartments, retail properties, and urban density\n• West Hills: Family neighborhoods near schools, parks, and recreation areas with seasonal cleanout patterns\n• Carlton Oaks: Golf course community with upscale family homes and accumulated storage\n• Edgemoor: Central residential area with mature trees and established homes from the 1970s-80s\n• Mission Gorge: Commercial corridor with business parks, retail centers, and office complexes\n• Santee Lakes: Recreation-oriented neighborhoods with RV storage, boats, camping gear, and outdoor equipment\n\nWe serve the entire 92071 zip code. This covers all Santee neighborhoods from hillside properties bordering Mission Trails Regional Park to trolley-accessible downtown developments.\n\nNearby Areas We Also Serve:\n• El Cajon\n• La Mesa\n• Lakeside\n• Spring Valley\n\nAll areas receive the same reliable service and transparent pricing Santee residents expect."
  },
  {
    question: "Can you remove construction debris in Santee?",
    answer: "Yes, we handle construction debris removal for Santee residential and commercial projects of all sizes.\n\nConstruction Materials We Remove:\n• Renovation debris: Cabinets, countertops, tile, fixtures from kitchen and bathroom remodels\n• Demolition waste: Drywall, framing lumber, roofing materials, subflooring from room additions\n• Roofing materials: Shingles, underlayment, flashing, gutters from re-roofing projects\n• Drywall and lumber: Scraps from framing work, room additions, garage conversions\n• Flooring removal: Tile, hardwood, carpet, padding from whole-home renovations\n• Windows and doors: Replacement materials from energy efficiency upgrades\n• Garage conversions: Debris from adding home offices, gyms, or living space\n\nSantee's established family homes built in the 1970s-1990s create steady renovation needs. Carlton Hills home updates, Sky Ranch kitchen remodels, and Edgemoor whole-home renovations generate consistent debris removal demand.\n\nWe coordinate with contractors on timing. We often provide same-day or next-day service to keep job sites clear. Projects stay on schedule without debris accumulation that creates safety hazards or code violations.\n\nGeneral contractor cleanup after project completion helps builders maintain schedules on multi-phase renovations.\n\nAll construction debris goes to licensed facilities. Materials are sorted for recycling when possible. Wood, metal, concrete, and clean fill are diverted from landfills. This reduces environmental impact and disposal costs."
  }
];

export default function JunkRemovalSanteePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://severincleaners.com" },
    { name: "Areas We Serve", url: "https://severincleaners.com/areas-we-serve" },
    { name: "Santee Junk Removal", url: "https://severincleaners.com/junk-removal-santee" },
  ]);

  const faqSchema = generateFAQSchema(santeeFAQs);

  const serviceSchema = {
    "@type": "Service",
    "name": "Junk Removal in Santee",
    "description": "Professional junk removal Santee for family homes, garage cleanouts, Carlton Hills, Sky Ranch. East County specialists with same-day service and eco-friendly disposal.",
    "url": "https://severincleaners.com/junk-removal-santee",
    "serviceType": "Junk Removal",
    "provider": {
      "@id": "https://severincleaners.com/junk-removal-santee#business"
    }
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://severincleaners.com/junk-removal-santee#business",
    "name": "Severin Cleaners LLC",
    "image": "https://severincleaners.com/og-image.jpg",
    "telephone": "+1-619-750-0114",
    "priceRange": "$69-$495",
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
    "url": "https://severincleaners.com/junk-removal-santee",
    "areaServed": [
      {
        "@type": "City",
        "name": "Santee",
        "containedInPlace": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "PostalCode",
        "postalCode": "92071",
        "addressLocality": "Santee",
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
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle", "Cash App"],
    "acceptsReservations": true,
    "currenciesAccepted": "USD",
    "knowsAbout": [
      "Santee Lakes Recreation Equipment and RV Disposal",
      "Trolley Square Mixed-Use Property Management",
      "Carlton Hills Hillside Estate Access",
      "Mission Gorge Commercial Corridor Services",
      "Sky Ranch Family Neighborhood Expertise",
      "Santee Lakes Camping and Outdoor Recreation Gear",
      "Transit-Oriented Development Cleanout Logistics",
      "East County Suburban Family Home Service"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Santee Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Santee Lakes Recreation & RV Equipment Removal",
            "description": "Specialized removal for camping gear, RV equipment, boats, kayaks, outdoor recreation equipment, and patio furniture serving Santee Lakes Recreation Preserve families and campers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trolley Square Mixed-Use Property Cleanouts",
            "description": "Transit-oriented apartment turnovers, mixed-use property debris removal, elevator access coordination, and limited-parking logistics for Santee Trolley Square developments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carlton Hills & Sky Ranch Family Garage Cleanouts",
            "description": "Two-car and three-car garage clearing, hillside property access, family storage overflow, and recreational equipment disposal for Santee's suburban neighborhoods"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mission Gorge Commercial Corridor Business Services",
            "description": "Retail store closures, office furniture disposal, restaurant equipment removal, and business park warehouse cleanouts along Mission Gorge Road commercial district"
          }
        }
      ]
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };

  const nearbyLocations = [
    { name: "El Cajon", slug: "junk-removal-el-cajon" },
    { name: "La Mesa", slug: "junk-removal-la-mesa" },
    { name: "Lakeside", slug: "junk-removal-lakeside" },
    { name: "Spring Valley", slug: "junk-removal-spring-valley" },
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
                #1 Santee Junk Removal Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Junk Removal Santee
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Santee Lakes RV Specialists • Trolley Square Experts • Family Garages
              </p>

              <p className="text-lg mb-8">
                ✓ Family Home Specialists ✓ Same-Day Hauling ✓ Licensed & Insured
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
                      Professional Junk Hauling Santee – East County's Family Community
                    </h2>

                    <p className="text-lg mb-4 text-gray-700">
                      Looking for reliable junk removal Santee services? Our expert team serves one of East County's most dynamic family-oriented communities with same-day hauling available. From established neighborhoods in Carlton Hills to newer developments in Sky Ranch, our Santee junk removal team handles the unique challenges of this diverse suburban city. We provide professional junk removal throughout Santee's 92071 zip code for family homes, apartment complexes, and garage cleanouts with transparent pricing and eco-friendly disposal.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Our Santee operation is strategically positioned to serve East County's growing suburban landscape. We understand that junk hauling Santee requires knowledge of family neighborhoods with two-car garages that accumulate years of storage, multi-family properties near the Trolley corridor, and hillside homes in Carlton Hills with unique access considerations. Whether you're clearing a garage packed with RV equipment and recreational gear, removing <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">furniture</a> from a family home upgrade, or handling <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">apartment turnover</a> near Santee Trolley Square, our team brings the local expertise East County properties demand.
                    </p>

                    {/* Santee Lakes Recreation & RV Equipment Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Lakes Recreation & RV Equipment Specialists</h3>
                    <p className="text-gray-700 mb-4">
                      Santee Lakes Recreation Preserve creates unique junk removal needs that no other San Diego community shares. This 190-acre campground and recreation area serves as East County's premier outdoor destination, attracting RV campers, boat enthusiasts, and recreation-oriented families year-round. Our junk removal Santee service specializes in the outdoor equipment and recreation gear disposal that comes with Santee's outdoor lifestyle.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-3">Santee Lakes Equipment We Remove:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>RV equipment and accessories:</strong> Awnings, generators, tanks, hitches, slide-out mechanisms, and worn RV furniture from camper upgrades. We coordinate removal from Santee Lakes campsites and storage facilities with care for valuable components that can be recycled or donated.</li>
                        <li><strong>Camping gear and outdoor equipment:</strong> Tents, sleeping bags, camp furniture, coolers, lanterns, and accumulated camping supplies from years of family outdoor adventures. Santee families with regular Santee Lakes visits accumulate duplicate equipment over time—we help clear the excess.</li>
                        <li><strong>Boats, kayaks, and water recreation:</strong> Old fishing boats, kayaks, paddle boards, canoes, and lake recreation equipment that families upgrade or no longer use. We handle transport from backyards and garages to proper disposal or donation facilities that serve outdoor recreation communities.</li>
                        <li><strong>Patio furniture and outdoor entertaining:</strong> BBQ grills, patio sets, fire pits, outdoor umbrellas, and entertaining equipment common to Santee's backyard-oriented lifestyle. The inland heat and outdoor living culture creates regular furniture upgrade cycles.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mb-6">
                      <strong>Recent Santee Lakes Example:</strong> We completed an RV equipment cleanout for a Santee family who upgraded from their 25-foot travel trailer to a larger Class A motorhome. We removed the old RV furniture, camping equipment accumulated over 15 years, and outdoor gear stored in their three-car garage. We donated usable camping equipment to local youth programs and recycled metal components. The family reclaimed 400+ square feet of garage space for their new RV accessories. This type of recreation equipment turnover is unique to Santee—no other San Diego community has this combination of camping culture and storage accumulation from Santee Lakes proximity.
                    </p>

                    {/* Trolley Square Mixed-Use Development Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Trolley Square Mixed-Use Development Specialists</h3>
                    <p className="text-gray-700 mb-4">
                      Santee Trolley Square represents East County's most significant transit-oriented development—a mixed-use community combining apartments, retail, dining, and entertainment around the Green Line trolley station. This urban density creates apartment turnover and property management challenges unique to Santee. Our junk removal Santee service provides specialized support for Trolley Square's property managers and residents.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-3">Trolley Square Services We Provide:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Apartment complex turnovers:</strong> Rapid cleanout service between tenant move-out and new tenant move-in to minimize vacancy periods. We coordinate with property managers for same-day or next-day service that keeps rental income flowing without delays.</li>
                        <li><strong>Elevator access coordination:</strong> We schedule service during off-peak hours to avoid disrupting current residents. Our crews use proper elevator padding and floor protection that meets property management standards for multi-story building access.</li>
                        <li><strong>Limited parking logistics:</strong> Trolley Square's urban density creates parking challenges. We coordinate with property management for loading zone access and work efficiently to minimize truck time in tight parking areas shared with retail customers and residents.</li>
                        <li><strong>Transit-accessible service:</strong> Residents without cars appreciate our trolley-accessible scheduling. We coordinate arrival times around Green Line schedules for residents who rely on transit, making junk removal accessible without needing personal vehicle access.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mb-6">
                      Trolley Square's 300+ apartments generate consistent turnover—approximately 20-30% annually—creating recurring junk removal needs. Property managers value our understanding of mixed-use property challenges, professional crews that respect shared spaces, and transparent pricing that makes budgeting for turnover costs predictable. We've established partnerships with several Trolley Square property management companies for priority service contracts, ensuring they have reliable cleanout support during peak turnover seasons (June-August, December-January). This transit-oriented expertise is unique to Santee—no other East County city has comparable mixed-use trolley development requiring this specialized coordination.
                    </p>

                    {/* Carlton Hills & Sky Ranch Family Garage Specialists */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Carlton Hills & Sky Ranch Family Garage Specialists</h3>
                    <p className="text-gray-700 mb-4">
                      Santee's suburban family neighborhoods—particularly Carlton Hills hillside estates and Sky Ranch modern developments—feature generous two-car and three-car garages that become long-term storage spaces over years of family living. Our junk removal Santee service specializes in reclaiming these valuable spaces and helping families transition through life changes that create garage overflow.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-3">Family Garage Cleanout Expertise:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Two-car and three-car garage accumulation:</strong> Santee's family homes average 1,800-2,400 square feet with generous garage space. Over 10-15 years of family living, these garages fill with storage that pushes vehicles to driveways. We help families reclaim space for their intended purpose—vehicle parking and organized storage.</li>
                        <li><strong>Family transitions and life changes:</strong> Kids leaving for college, retirement downsizing, divorce situations, and estate transitions all create garage cleanout needs. We handle these sensitive situations with professionalism and understanding, working efficiently while respecting family circumstances.</li>
                        <li><strong>Recreational equipment storage overflow:</strong> Bikes, scooters, camping gear, sports equipment, and children's outgrown outdoor toys accumulate in Santee garages. Families with multiple children often have 3-4 generations of recreation equipment stored long after kids outgrow it.</li>
                        <li><strong>Carlton Hills hillside access expertise:</strong> Carlton Hills properties feature steep driveways, limited turnarounds, and canyon-view lots with challenging access. Our crews navigate these hillside conditions safely, protecting landscaping and driveways during furniture and equipment removal.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mb-6">
                      <strong>Recent Carlton Hills Example:</strong> We completed a three-car garage cleanout for a Sky Ranch family whose children had left for college. The garage had accumulated 18 years of storage—bicycles from elementary through high school, sports equipment from soccer to lacrosse, camping gear, holiday decorations, and outgrown furniture. We removed two full truckloads, donated usable sporting equipment to local youth programs, recycled metal items, and helped the family organize remaining seasonal items. They now park all three vehicles inside and have organized storage for current needs. This type of family garage reclamation is Santee's core demographic—18,000+ single-family homes with garage space that becomes long-term storage over decades of family living.
                    </p>

                    {/* Mission Gorge Commercial Corridor Services */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Mission Gorge Commercial Corridor Services</h3>
                    <p className="text-gray-700 mb-4">
                      Mission Gorge Road serves as Santee's commercial backbone—a retail and business corridor stretching from Costco to Trolley Square. This commercial density creates consistent B2B junk removal opportunities for retail closures, office relocations, and restaurant turnovers. Our junk removal Santee service provides after-hours commercial support that keeps businesses operational.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-3">Commercial Services We Handle:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Retail store closures and inventory liquidation:</strong> When retail locations close or relocate, we remove fixtures, displays, damaged inventory, and equipment. Our crews work efficiently to clear spaces for new tenant buildouts without delays.</li>
                        <li><strong>Office furniture and equipment disposal:</strong> Business relocations and downsizing create office furniture removal needs. We handle desks, cubicles, filing cabinets, conference tables, and outdated equipment with same-day or next-day service that minimizes business disruption.</li>
                        <li><strong>Restaurant and commercial kitchen cleanouts:</strong> Restaurant closures, kitchen remodels, and equipment upgrades require specialized removal. We handle commercial refrigeration, ovens, grills, and kitchen fixtures with proper disposal at licensed facilities.</li>
                        <li><strong>After-hours scheduling for active businesses:</strong> We coordinate service during evenings and weekends to avoid disrupting active business operations, ensuring removal happens without affecting customer access or daily business flow.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 mb-6">
                      Mission Gorge commercial corridor generates higher-value B2B contracts with recurring needs. Businesses appreciate our commercial insurance coverage, licensed disposal that meets regulatory requirements, and professional service that respects active business environments. We've established relationships with commercial property managers along Mission Gorge for priority service when retail tenants turn over or businesses relocate. This commercial expertise positions us as Santee's go-to service for business-to-business junk removal beyond residential focus.
                    </p>

                    {/* Why Santee Residents Choose Severin Cleaners */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Santee Residents Choose Severin Cleaners</h3>
                    <p className="text-gray-700 mb-4">
                      What sets our junk removal Santee service apart from generic competitors and national franchises? Our specialized expertise in Santee's unique community characteristics—recreation equipment from Santee Lakes proximity, transit-oriented Trolley Square development, family garage accumulation patterns, and commercial Mission Gorge corridor. We're not just a junk removal company serving Santee—we're Santee specialists who understand this community's specific needs.
                    </p>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-700"><strong>Santee Lakes Recreation Equipment Expertise:</strong> Unlike competitors who treat RV equipment and camping gear as generic junk, we understand Santee's outdoor recreation culture. We know which equipment has resale value, what can be donated to youth programs, and how to handle specialty items like boats and recreation gear properly.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-700"><strong>Trolley Square Transit-Oriented Development Experience:</strong> We've completed hundreds of Trolley Square apartment turnovers, understanding the unique logistics of mixed-use properties. Our crews coordinate elevator access, respect shared spaces, and work efficiently in the urban density that requires different approaches than suburban service.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-700"><strong>Carlton Hills Hillside Navigation:</strong> Our team navigates Carlton Hills steep driveways, limited turnarounds, and challenging property access safely. We protect landscaping, handle stairs efficiently, and work around the hillside terrain that creates unique removal challenges for canyon-view properties.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                        <span className="text-gray-700"><strong>Family Garage Cleanout Specialization:</strong> We understand Santee's family demographic—how two-car and three-car garages accumulate storage over years of children growing up, recreation equipment multiplying, and seasonal items building. We help families reclaim space with sensitivity to the memories and transitions involved.</span>
                      </li>
                    </ul>

                    {/* Neighborhoods Served */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Neighborhoods We Serve</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Santee service covers every corner of this East County community, from trolley-accessible developments to hillside family neighborhoods. We've completed thousands of junk removal jobs throughout Santee's diverse areas, each with unique characteristics that inform our service approach:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        <li><strong>Carlton Hills:</strong> Established hillside neighborhoods with panoramic views, challenging driveway access, and family homes with extensive storage</li>
                        <li><strong>Sky Ranch:</strong> Newer family developments with modern homes, HOA communities, and garage organization needs</li>
                        <li><strong>Santee Trolley Square:</strong> Mixed-use development with transit access, apartments, retail, and urban living density</li>
                        <li><strong>West Hills:</strong> Family neighborhoods near schools, parks, and recreation with seasonal cleanout patterns</li>
                      </ul>
                      <ul className="space-y-2">
                        <li><strong>Carlton Oaks:</strong> Golf course community with upscale family homes and garage accumulation challenges</li>
                        <li><strong>Edgemoor:</strong> Central residential area with mature trees, established homes, and multi-car garages</li>
                        <li><strong>Mission Gorge:</strong> Commercial corridor with business parks, retail centers, and mixed-use properties</li>
                        <li><strong>Santee Lakes:</strong> Recreation-oriented neighborhoods with RV storage, boats, and outdoor equipment disposal needs</li>
                      </ul>
                    </div>

                    {/* Major Streets */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Streets & Access</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Santee team knows every street and access point in this sprawling East County city. This local expertise matters when navigating Santee's mix of suburban subdivisions, hillside roads, and commercial corridors. We plan each job with detailed routing to ensure efficient access:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      <li>• <strong>Mission Gorge Road:</strong> Main east-west corridor with shopping centers and business district traffic</li>
                      <li>• <strong>Magnolia Avenue:</strong> Central north-south route through established residential neighborhoods</li>
                      <li>• <strong>Cuyamaca Street:</strong> Eastern connector serving Sky Ranch and newer developments</li>
                      <li>• <strong>Carlton Hills Boulevard:</strong> Hillside access with winding roads and canyon view properties</li>
                      <li>• <strong>Mast Boulevard:</strong> Northern route connecting to Lakeside with rural transitions</li>
                      <li>• <strong>Prospect Avenue:</strong> Trolley corridor access with transit-oriented development</li>
                      <li>• <strong>Woodside Avenue:</strong> Residential connector through family neighborhoods and schools</li>
                      <li>• <strong>Riverford Road:</strong> Southern boundary with access to Santee Lakes and recreation areas</li>
                    </ul>

                    {/* Local Landmarks */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Santee Landmarks</h3>
                    <p className="text-gray-700 mb-4">
                      We provide <a href="/commercial-junk-removal-san-diego" className="text-blue-600 hover:underline">commercial</a> and residential junk removal Santee service near all major East County landmarks. These familiar reference points help us navigate quickly to your property and provide accurate arrival time estimates. Our crews use local landmarks for efficient routing throughout this family-friendly community:
                    </p>
                    <div className="grid md:grid-cols-2 gap-2 mb-6">
                      <ul className="space-y-1">
                        <li>• Santee Trolley Square—transit hub and mixed-use development center</li>
                        <li>• Santee Lakes Recreation Preserve—camping, fishing, and outdoor recreation area</li>
                        <li>• Costco Santee—major retail anchor and shopping destination</li>
                        <li>• Carlton Oaks Golf Course—community centerpiece and event venue</li>
                        <li>• Sportsplex USA—family entertainment and recreation complex</li>
                        <li>• Santee Drive-In Theatre—vintage entertainment landmark</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• West Hills High School—community education hub and event location</li>
                        <li>• Town Center Community Park—central recreation and sports facilities</li>
                        <li>• Trolley Barn Park—family playground and community gathering space</li>
                        <li>• Mission Trails Regional Park (border)—wilderness access and trailheads</li>
                        <li>• Santee Farmers Market—weekly community event at Town Center</li>
                        <li>• Santee Historical Society—Old West preservation and community history</li>
                      </ul>
                    </div>

                    {/* Traffic & Timing */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Traffic & Service Timing</h3>
                    <p className="text-gray-700 mb-4">
                      Santee's position as an East County commuter hub creates predictable traffic patterns that affect junk removal scheduling. Our dispatch team actively monitors conditions and coordinates with you to schedule <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day service</a> windows that maximize efficiency:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                      <li><strong>Weekday commute hours (6:30-8:30 AM, 4-6 PM):</strong> Mission Gorge Road and SR-52 access points experience heavy traffic as East County residents commute to downtown San Diego and central employment centers. We schedule mid-morning (9 AM-12 PM) or early afternoon (1-3 PM) service windows to avoid these peak congestion periods, particularly for properties near freeway corridors.</li>
                      <li><strong>Trolley schedule coordination:</strong> Santee Trolley stations create localized traffic patterns during peak transit hours (7-9 AM, 4-6 PM weekdays). For properties near Trolley Square or Santee Town Center, we coordinate service timing around transit parking and pedestrian traffic to ensure clear truck access to apartment complexes and mixed-use buildings.</li>
                      <li><strong>Weekend recreation traffic (Sat-Sun 8 AM-4 PM):</strong> Santee Lakes, Mission Trails access points, and Sportsplex USA create recreational traffic surges on weekends. Costco Saturday crowds (10 AM-3 PM) congest Mission Gorge Road corridor. For properties near these attractions, Sunday evening or weekday scheduling provides clearer access and faster service completion.</li>
                      <li><strong>School calendar impacts:</strong> Grossmont Union High School District and Santee School District calendars drive family garage organization patterns. May-June end-of-school-year transitions and August back-to-school preparations create demand surges for garage cleanouts and storage reorganization. Book 2-3 weeks ahead during these peak family transition periods for best availability.</li>
                    </ul>

                    {/* Weather */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">East County Climate Considerations</h3>
                    <p className="text-gray-700 mb-6">
                      Santee's inland East County location creates warmer, drier conditions than coastal San Diego neighborhoods. Summer temperatures (June-September) regularly reach 85-95°F, making early morning (7-10 AM) scheduling ideal for both crew efficiency and client comfort during property walkthroughs and garage assessments. The warm, dry climate accelerates outdoor storage deterioration—sun-faded patio furniture, heat-damaged plastics, and weathered recreational equipment accumulate in Santee's generous garage spaces, creating year-round junk removal needs. Winter months (December-February) bring occasional heavy rainfall events that can cause temporary street flooding in low-lying areas near the San Diego River corridor, requiring schedule flexibility. Santee's position at the base of East County foothills creates occasional Santa Ana wind conditions (September-November) that make outdoor item staging challenging—we tarp and secure loads carefully during high wind periods to prevent debris migration and ensure safe transport to disposal facilities.
                    </p>

                    {/* What We Remove */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">What We Remove in Santee</h3>
                    <p className="text-gray-700 mb-4">
                      Our junk removal Santee service handles the diverse mix of items common to East County family living—from garage storage overflow to RV equipment to family home upgrades. We remove everything from single items to complete <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">house cleanouts</a>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-bold mb-2">Furniture & Household</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/furniture-disposal-san-diego" className="text-blue-600 hover:underline">Sofas, sectionals, recliners</a> from family room upgrades</li>
                          <li>• <a href="/san-diego-mattress-disposal" className="text-blue-600 hover:underline">Mattresses</a>, bed frames, bedroom sets from growing families</li>
                          <li>• Dining tables, chairs, kitchen furniture for downsizing</li>
                          <li>• Desks, bookshelves, home office equipment from remote work transitions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Appliances & Electronics</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• <a href="/appliance-removal-san-diego" className="text-blue-600 hover:underline">Refrigerators, freezers, washers, dryers</a> from kitchen remodels</li>
                          <li>• Dishwashers, stoves, microwaves during appliance upgrades</li>
                          <li>• TVs, computers, gaming systems from tech refreshes</li>
                          <li>• Exercise equipment, treadmills, ellipticals from home gym changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Recreation & Outdoor Items</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Camping gear, RV equipment, recreational vehicle accessories</li>
                          <li>• Bikes, scooters, outdoor toys from growing children</li>
                          <li>• Patio furniture, BBQ grills, outdoor entertaining equipment</li>
                          <li>• <a href="/hot-tub-removal-san-diego" className="text-blue-600 hover:underline">Hot tubs and spas</a> from backyard renovations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Cleanouts & Debris</h4>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Garage <a href="/cleanout-services-san-diego" className="text-blue-600 hover:underline">cleanouts</a> for two-car and three-car storage spaces</li>
                          <li>• Apartment complex turnovers and tenant move-out debris</li>
                          <li>• <a href="/estate-cleanout-san-diego" className="text-blue-600 hover:underline">Estate cleanouts</a> for family property transitions</li>
                          <li>• <a href="/construction-debris-removal-san-diego" className="text-blue-600 hover:underline">Construction debris</a> from home additions and remodeling projects</li>
                        </ul>
                      </div>
                    </div>

                    {/* How Our Service Works */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">How Our Santee Junk Removal Service Works</h3>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Contact Us:</strong> Call (619) 750-0114 or book online. Describe what you need removed and your Santee location. We'll provide estimated pricing based on volume and schedule your service window.</li>
                        <li><strong>2. Same-Day Scheduling Available:</strong> Call before noon for <a href="/same-day-junk-removal-san-diego" className="text-blue-600 hover:underline">same-day</a> junk pickup Santee service throughout East County. We coordinate arrival times around your schedule and Santee's traffic patterns for reliable, on-time service.</li>
                        <li><strong>3. We Arrive & Assess:</strong> Our uniformed crew arrives in clearly marked trucks during your scheduled window. We assess items for removal and provide a final quote before starting work—no hidden fees or surprises.</li>
                        <li><strong>4. We Load & Haul Everything:</strong> Our team does all lifting, loading, and hauling. We protect floors and doorways, navigate garage spaces and family homes efficiently, and complete removal quickly. You simply point—we handle the rest.</li>
                        <li><strong>5. Eco-Friendly Disposal:</strong> We sort items for donation, recycling, and responsible disposal. Usable furniture goes to local East County charities, recyclables to proper facilities, and only true trash to landfill as last resort.</li>
                        <li><strong>6. Clean Sweep & Payment:</strong> We sweep the area clean after removal and collect payment. Most jobs are completed in under two hours from arrival to departure.</li>
                      </ol>
                    </div>

                    {/* Why Choose Us */}
                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Severin Cleaners for Santee Junk Removal</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>East County Family Expertise:</strong> We understand Santee's family-oriented community and the unique junk removal needs that come with suburban East County living. From garage cleanouts in Carlton Hills to apartment turnovers near Trolley Square, our team has completed thousands of Santee jobs. We navigate hillside access, work efficiently around family schedules, and handle the storage overflow common to Santee's generous two-car and three-car garages.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Same-Day Service Available:</strong> Call before noon for same-day junk removal throughout Santee and East County. Our dispatch team actively monitors Mission Gorge Road traffic and schedules arrival windows that work around commute congestion, ensuring reliable service even during busy weekday periods or weekend recreation traffic near Santee Lakes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Upfront quotes based on volume with all labor, hauling, and disposal included. Hillside access in Carlton Hills doesn't change our rates—you pay for volume removed, not time or access challenges. Most Santee garage cleanouts range from quarter-truck to half-truck loads with clear pricing communicated before work begins.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 text-xl mr-3">✓</span>
                        <span><strong>Licensed & Insured:</strong> Fully licensed California junk removal company with comprehensive liability insurance. We carry proper coverage for family home access, apartment complex coordination, and the diverse property types throughout Santee's neighborhoods—from single-family homes to multi-family developments near the Trolley corridor.</span>
                      </li>
                    </ul>

                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="lg:col-span-1">
                  <LocationSidebarCTA
                    locationName="Santee"
                    nearbyLocations={nearbyLocations}
                  />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <LocationPricingSection
          locationName="Santee"
          contextParagraph="Garage cleanouts and family home clearances throughout Santee—from Carlton Hills to Santee Trolley Square—all use the same transparent pricing. No hidden fees, same-day service available."
        />

        {/* Trust Signals Section */}
        <TrustSignalsSection locationName="Santee" />

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions - Junk Removal Santee"
          description="Get answers to common questions about our junk removal Santee services, pricing, and same-day availability."
          faqs={santeeFAQs}
          ctaTitle="Still Have Questions About Santee Junk Removal?"
          ctaDescription="Our experienced team is ready to answer any questions about our junk removal Santee services, provide detailed quotes, or schedule your same-day pickup."
          includeSchema={false}
        />

        {/* Related Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Related East County Services</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/furniture-disposal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Furniture Removal San Diego</h4>
                <p className="text-gray-600">Family home furniture disposal and apartment complex cleanouts</p>
              </a>
              <a href="/construction-debris-removal-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Construction Debris Removal</h4>
                <p className="text-gray-600">Home remodeling cleanup and renovation debris removal</p>
              </a>
              <a href="/estate-cleanout-san-diego" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Estate Cleanouts San Diego</h4>
                <p className="text-gray-600">Family estate transitions and downsizing support</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
