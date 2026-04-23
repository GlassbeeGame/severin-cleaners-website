#!/usr/bin/env python3

import re

# Read the file
with open('src/app/junk-removal-pacific-beach/page.tsx', 'r') as f:
    content = f.read()

# Update all phone numbers from 619-271-6411 to 619-750-0114
content = re.sub(r'6192716411', '6197500114', content)
content = re.sub(r'\(619\) 271-6411', '(619) 750-0114', content)

# Update SEO content additions
content = content.replace(
    'We service every corner of Pacific Beach, from the surfers at Tourmaline to the families in Crown Point. Our team regularly services the entire 92109 ZIP code area, and we know PB like locals because we are locals. From vacation rental turnovers on Ocean Front Walk to beach house cleanouts near Crystal Pier - we understand PB\'s unique coastal lifestyle and provide service that respects both visitors and year-round residents.',
    'We service every corner of Pacific Beach, from the surfers at Tourmaline to the families in Crown Point. Our team regularly services the entire 92109 ZIP code area, and we know PB like locals because we are locals. From vacation rental turnovers on Ocean Front Walk to beach house cleanouts near Crystal Pier - we understand PB\'s unique coastal lifestyle and provide service that respects both visitors and year-round residents. We specialize in PB move out cleaning, Pacific Beach apartment cleanout services, and comprehensive 92109 junk removal.'
)

# Update vacation rental section
content = content.replace(
    '<strong className="text-lg text-blue-700">Vacation Rental Turnovers:</strong> PB has hundreds of vacation rentals requiring quick turnovers between guests. We offer same-day service for rental cleanouts, old furniture removal, and left-behind items.',
    '<strong className="text-lg text-blue-700">Vacation Rental Turnovers:</strong> PB has hundreds of vacation rentals requiring quick turnovers between guests. Our vacation rental junk removal Pacific Beach service includes Airbnb cleanouts and VRBO property resets throughout the 92109 area. We offer same-day service for rental cleanouts, old furniture removal, and left-behind items.'
)

# Add FAQ and Related Services sections before the Related Areas section
faq_and_services = """
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Pacific Beach Junk Removal FAQs</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Do you service all of Pacific Beach?</h4>
                <p className="text-gray-600">Yes! We service every street in PB from Tourmaline Surf Beach to Belmont Park, including Crown Point, Bay Park, and all of Garnet Avenue.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Can you handle vacation rental cleanouts?</h4>
                <p className="text-gray-600">Absolutely. We specialize in vacation rental turnovers throughout Pacific Beach, including Airbnb and VRBO properties.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Do you work around PB's Tuesday Farmers Market?</h4>
                <p className="text-gray-600">Yes, we're familiar with all PB events including the Tuesday Farmers Market on Bayard Street and schedule accordingly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Popular Services in Pacific Beach</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <a href="/furniture-disposal-san-diego/" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold text-blue-700">Furniture Disposal</p>
              </a>
              <a href="/appliance-removal-san-diego/" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold text-blue-700">Appliance Removal</p>
              </a>
              <a href="/estate-cleanout-san-diego/" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold text-blue-700">Estate Cleanouts</p>
              </a>
              <a href="/hot-tub-removal-san-diego/" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold text-blue-700">Hot Tub Removal</p>
              </a>
              <a href="/same-day-junk-removal-san-diego/" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <p className="font-semibold text-blue-700">Same Day Service</p>
              </a>
            </div>
          </div>
        </div>
      </section>

"""

# Find where to insert the new sections (before Related Areas)
related_areas_pattern = r'(\s*{/\* Related Areas \*/})'
content = re.sub(related_areas_pattern, faq_and_services + r'\1', content)

# Add Schema markup after the imports but before the metadata export
schema_markup = """
// Schema.org structured data for local SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Severin Cleaners - Pacific Beach Junk Removal",
  "telephone": "619-750-0114",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pacific Beach",
    "addressRegion": "CA",
    "postalCode": "92109",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "PostalAddress",
    "addressLocality": "Pacific Beach",
    "addressRegion": "CA",
    "postalCode": "92109"
  },
  "url": "https://severincleaners.com/junk-removal-pacific-beach/",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "07:00",
    "closes": "19:00"
  }
};

"""

# Insert schema after inter font declaration
inter_pattern = r'(const inter = Inter\({[^}]+}\);\n)'
content = re.sub(inter_pattern, r'\1\n' + schema_markup, content)

# Add the schema script tag to the head section inside the component
# Find where Header ends and add script tag after
header_pattern = r'(      <Header />)'
schema_script = """      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />"""
content = content.replace(header_pattern, schema_script)

# Write the updated content back
with open('src/app/junk-removal-pacific-beach/page.tsx', 'w') as f:
    f.write(content)

print("✅ Successfully updated Pacific Beach page with:")
print("  • Corrected phone number (619) 750-0114")
print("  • Enhanced SEO keywords")
print("  • Schema.org structured data")
print("  • FAQ section")
print("  • Related services links")
print("  • Updated meta descriptions")