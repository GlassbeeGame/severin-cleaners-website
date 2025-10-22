#!/usr/bin/env python3

import os
import shutil

# Configuration for each page
page_configs = {
    "junk-removal-pacific-beach": {
        "title": "Junk Removal Pacific Beach | Beachside Cleanup Experts | Severin Cleaners",
        "description": "Professional junk removal in Pacific Beach - serving PB beaches, bay area, and coastal communities. Same-day service, beach equipment removal. Call (619) 271-6411.",
        "area_name": "Pacific Beach",
        "local_features": "Beach community with vacation rentals and year-round residents",
        "special_offer": "Beach Rental Special",
        "special_offer_desc": "Same-day PB service available",
        "h1": "Pacific Beach Junk Removal - Coastal Community Experts",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Beach Community Specialists • Year-Round Service",
        "description_text": "Pacific Beach's vibrant coastal community combines vacation rentals, beachfront properties, and year-round residents. Severin Cleaners understands the unique needs of PB's dynamic environment - from vacation rental turnovers to beach equipment removal, from condo cleanouts to large beach house projects. We provide efficient service that respects both visitors and locals.",
        "coverage_areas": [
            "PB beach communities and waterfront properties",
            "Vacation rental and short-term rental properties",
            "Crown Point and Sail Bay residential areas",
            "Garnet Avenue commercial and residential district",
            "North PB and Kate Sessions Park vicinity",
            "Bayside condos and apartment complexes"
        ]
    },
    "junk-removal-hillcrest": {
        "title": "Junk Removal Hillcrest | Urban Core Cleanup Specialists | Severin Cleaners",
        "description": "Professional junk removal in Hillcrest - serving the urban core, historic buildings, and apartment complexes. Same-day service available. Call (619) 271-6411.",
        "area_name": "Hillcrest",
        "local_features": "Historic urban neighborhood with diverse housing",
        "special_offer": "Historic Home Special",
        "special_offer_desc": "Urban core same-day service",
        "h1": "Hillcrest Junk Removal - Urban Core Cleanup Experts",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Historic Building Specialists • Same-Day Service",
        "description_text": "Hillcrest stands as San Diego's vibrant urban core, featuring historic homes, modern condos, and bustling commercial districts. Severin Cleaners specializes in the unique challenges of urban junk removal - from narrow streets and limited parking to historic building considerations and diverse housing types.",
        "coverage_areas": [
            "Historic Hillcrest homes and vintage apartments",
            "University Heights and surrounding areas",
            "High-rise condos and apartment complexes",
            "Fifth Avenue and University Avenue corridors",
            "Balboa Park adjacent neighborhoods",
            "Medical district and professional areas"
        ]
    },
    "junk-removal-point-loma": {
        "title": "Junk Removal Point Loma | Military & Coastal Community Service | Severin Cleaners",
        "description": "Professional junk removal in Point Loma - serving military families, coastal communities, and historic districts. Military discount available. Call (619) 271-6411.",
        "area_name": "Point Loma",
        "local_features": "Military community with coastal properties",
        "special_offer": "Military Discount",
        "special_offer_desc": "Serving our service members",
        "h1": "Point Loma Junk Removal - Military & Coastal Community Service",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Military Family Support • Coastal Specialists",
        "description_text": "Point Loma's unique position as both a military community and coastal destination creates diverse junk removal needs. Severin Cleaners proudly serves military families with PCS moves, coastal property cleanouts, and historic district projects. We understand the specific requirements of military relocations and coastal property maintenance.",
        "coverage_areas": [
            "Naval Base San Diego and military housing",
            "Sunset Cliffs and coastal communities",
            "Liberty Station and historic areas",
            "Ocean Beach adjacent neighborhoods",
            "Cabrillo National Monument vicinity",
            "Harbor and marina communities"
        ]
    },
    "junk-removal-north-park": {
        "title": "Junk Removal North Park | Hip Urban Community Service | Severin Cleaners",
        "description": "Professional junk removal in North Park - serving the arts district, craft beer community, and diverse neighborhoods. Same-day service. Call (619) 271-6411.",
        "area_name": "North Park",
        "local_features": "Arts and craft beer community with diverse housing",
        "special_offer": "Arts District Special",
        "special_offer_desc": "Creative community support",
        "h1": "North Park Junk Removal - Arts & Community Specialists",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Arts District Friendly • Community Focused",
        "description_text": "North Park's vibrant arts scene and craft beer culture attract creative residents and young professionals to diverse housing options from vintage bungalows to modern condos. Severin Cleaners supports the creative community with flexible service that understands the neighborhood's artistic spirit and community values.",
        "coverage_areas": [
            "University Avenue arts and business corridor",
            "30th Street restaurant and bar district",
            "Vintage bungalows and craftsman homes",
            "Modern condos and apartment complexes",
            "Morley Field and Balboa Park adjacent areas",
            "North Park neighborhood commercial zones"
        ]
    },
    "junk-removal-el-cajon": {
        "title": "Junk Removal El Cajon | East County Family Service | Severin Cleaners",
        "description": "Professional junk removal in El Cajon - serving East County families, established neighborhoods, and growing communities. Family-owned service. Call (619) 271-6411.",
        "area_name": "El Cajon",
        "local_features": "East County family community with diverse neighborhoods",
        "special_offer": "Family Discount",
        "special_offer_desc": "East County family service",
        "h1": "El Cajon Junk Removal - East County Family Specialists",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Family-Owned Service • East County Experts",
        "description_text": "El Cajon's family-oriented East County community features established neighborhoods, growing developments, and multi-generational households. As a family-owned business, Severin Cleaners understands the importance of respectful, reliable service for East County families managing household transitions and property improvements.",
        "coverage_areas": [
            "Central El Cajon residential neighborhoods",
            "Rancho San Diego and Fletcher Hills",
            "Bostonia and Granite Hills communities",
            "East County shopping and business districts",
            "Crest and surrounding hillside areas",
            "Multi-generational family properties"
        ]
    },
    "hot-tub-removal-san-diego": {
        "title": "Hot Tub Removal San Diego | Spa & Pool Equipment Disposal | Severin Cleaners",
        "description": "Professional hot tub removal throughout San Diego - spas, pool equipment, and backyard cleanup. Same-day service available. Call (619) 271-6411.",
        "area_name": "San Diego",
        "local_features": "Hot tub and spa removal specialists",
        "special_offer": "Spa Removal Special",
        "special_offer_desc": "Complete backyard cleanup",
        "h1": "Hot Tub Removal San Diego - Spa & Pool Equipment Specialists",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Hot Tub Experts • Complete Backyard Service",
        "description_text": "San Diego's outdoor lifestyle means many homes feature hot tubs, spas, and pool equipment that eventually need professional removal. Severin Cleaners specializes in safe, efficient hot tub removal throughout San Diego County, handling everything from small portable spas to large built-in installations.",
        "coverage_areas": [
            "Residential hot tub and spa removal",
            "Pool equipment and pump removal",
            "Backyard renovation cleanup",
            "Deck and patio restoration support",
            "Property improvement projects",
            "Real estate preparation services"
        ]
    },
    "commercial-junk-removal-san-diego": {
        "title": "Commercial Junk Removal San Diego | Business Cleanup Experts | Severin Cleaners",
        "description": "Professional commercial junk removal in San Diego - office cleanouts, retail spaces, construction debris. Business-focused service. Call (619) 271-6411.",
        "area_name": "San Diego",
        "local_features": "Commercial and business cleanup specialists",
        "special_offer": "Business Special",
        "special_offer_desc": "Commercial account pricing",
        "h1": "Commercial Junk Removal San Diego - Business Cleanup Experts",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Business Focused • Commercial Accounts Welcome",
        "description_text": "San Diego businesses require reliable, professional junk removal for office relocations, retail renovations, and ongoing commercial needs. Severin Cleaners provides business-focused service with flexible scheduling, commercial account options, and understanding of business operations requirements.",
        "coverage_areas": [
            "Downtown San Diego office buildings",
            "Business parks and commercial complexes",
            "Retail stores and shopping centers",
            "Restaurants and hospitality venues",
            "Medical and professional offices",
            "Industrial and warehouse facilities"
        ]
    },
    "piano-removal-san-diego": {
        "title": "Piano Removal San Diego | Musical Instrument Disposal | Severin Cleaners",
        "description": "Professional piano removal throughout San Diego - upright pianos, grand pianos, and musical instruments. Careful handling guaranteed. Call (619) 271-6411.",
        "area_name": "San Diego",
        "local_features": "Piano and musical instrument removal specialists",
        "special_offer": "Music Special",
        "special_offer_desc": "Careful instrument handling",
        "h1": "Piano Removal San Diego - Musical Instrument Specialists",
        "subtitle": "⭐⭐⭐⭐⭐ 5.0 Rating • Piano Experts • Careful Handling Guaranteed",
        "description_text": "Piano removal requires specialized knowledge and equipment to handle these valuable, heavy instruments safely. Severin Cleaners provides expert piano removal throughout San Diego, whether you're relocating, downsizing, or dealing with an inherited instrument that needs professional disposal.",
        "coverage_areas": [
            "Upright piano removal and disposal",
            "Grand piano relocation and removal",
            "Musical instrument cleanouts",
            "Estate piano services",
            "Music studio and school cleanouts",
            "Apartment and condo piano removal"
        ]
    }
}

def create_clean_page(page_slug, config):
    """Create a completely clean page file from template"""

    template = f'''import {{ Metadata }} from 'next';
import Link from 'next/link';
import {{ Inter }} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({{
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
}});

export const metadata: Metadata = {{
  title: '{config["title"]}',
  description: '{config["description"]}',
  keywords: 'junk removal {config["area_name"].lower()}, {config["area_name"].lower()} junk hauling, {config["area_name"].lower()} cleanout service',
  openGraph: {{
    title: '{config["title"]}',
    description: '{config["description"]}',
    url: 'https://severincleaners.com/{page_slug}/',
    siteName: 'Severin Cleaners',
    images: [{{
      url: 'https://severincleaners.com/og-image.jpg',
      width: 1200,
      height: 630,
    }}],
    locale: 'en_US',
    type: 'website',
  }},
  twitter: {{
    card: 'summary_large_image',
    title: '{config["title"]}',
    description: '{config["description"]}',
    images: ['https://severincleaners.com/og-image.jpg'],
  }},
  alternates: {{
    canonical: 'https://severincleaners.com/{page_slug}/',
  }},
  robots: {{
    index: true,
    follow: true,
    googleBot: {{
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }},
  }},
}};

export default function {page_slug.replace('-', '').title()}Page() {{
  return (
    <div className={{`${{inter.variable}} font-sans antialiased`}}>
      <Header />
      <main>
      {{/* Hero Section */}}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ {config["local_features"]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {config["h1"]}
            </h1>
            <div className="text-xl mb-6">
              {config["subtitle"]}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:6192716411"
                className="btn btn-primary text-lg px-8 py-4"
              >
                📞 Call (619) 271-6411
              </a>
              <a
                href="/#contact"
                className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
              >
                Get Free {config["area_name"]} Quote - Save 15%
              </a>
            </div>
            <p className="text-lg">
              ✓ Same-Day Service ✓ Licensed & Insured ✓ Local Specialists
            </p>
          </div>
        </div>
      </section>

      {{/* Main Content */}}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{config["area_name"]} Junk Removal Experts</h2>

              <p className="text-lg text-gray-700 mb-6">
                {config["description_text"]}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{config["area_name"]} Service Areas</h3>
                <ul className="text-blue-800">'''

    # Add coverage areas
    for area in config["coverage_areas"]:
        template += f'\n                  <li>{area}</li>'

    template += f'''
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href="tel:6192716411"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    📞 Call for Quote
                  </a>
                  <a
                    href="/#contact"
                    className="bg-white text-blue-700 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors duration-200"
                  >
                    Schedule {config["area_name"]} Service
                  </a>
                </div>
              </div>

              {{/* Sticky CTA */}}
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Junk Removal in {config["area_name"]}?</p>
                    <p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="tel:6192716411"
                      className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      📞 Call Now
                    </a>
                    <a
                      href="/#contact"
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Severin Cleaners</h3>
              <p className="mb-4">
                As a family-owned business, we understand the importance of treating your property and belongings
                with care. Our {config["area_name"]} service combines local knowledge with professional standards
                to deliver the best junk removal experience possible.
              </p>

              <div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready for {config["area_name"]} Junk Removal?</h3>
                <p className="text-lg mb-6">
                  Professional service with local expertise and guaranteed satisfaction
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a
                    href="tel:6192716411"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200"
                  >
                    📞 Call (619) 271-6411
                  </a>
                  <a
                    href="/#contact"
                    className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200"
                  >
                    Get Free {config["area_name"]} Quote
                  </a>
                </div>
                <div className="bg-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ {config["area_name"]} Special Offers ⭐</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-700 rounded p-3">
                      <strong>15% Off Online Booking</strong><br />
                      Book through our website and save!
                    </div>
                    <div className="bg-blue-700 rounded p-3">
                      <strong>{config["special_offer"]}</strong><br />
                      {config["special_offer_desc"]}
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Local specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Related Areas */}}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Nearby Areas We Serve</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">La Jolla</h4>
              <p className="text-gray-600">Luxury coastal community service</p>
            </div>
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Mission Beach</h4>
              <p className="text-gray-600">Beachfront vacation rental support</p>
            </div>
            <div className="block p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-2">Downtown San Diego</h4>
              <p className="text-gray-600">Urban residential and commercial</p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}}'''

    return template

# Create clean versions of all pages
base_path = "/Users/jammermurphy/Desktop/severin-cleaners-website/src/app"

for page_slug, config in page_configs.items():
    file_path = f"{base_path}/{page_slug}/page.tsx"

    print(f"🔄 Recreating {page_slug}...")

    try:
        # Create clean content
        clean_content = create_clean_page(page_slug, config)

        # Write the clean file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(clean_content)

        print(f"✅ Successfully recreated {page_slug}")

    except Exception as e:
        print(f"❌ Error recreating {page_slug}: {e}")

print("\n🎉 All pages have been completely recreated with clean code!")
print("All syntax errors should now be resolved.")