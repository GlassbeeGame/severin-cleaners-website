#!/usr/bin/env python3

import os
import re

# List of pages to update with their specific area names
pages_config = {
    "hot-tub-removal-san-diego": {
        "service_name": "Hot Tub Removal",
        "local_area": "San Diego",
        "phone_cta": "Call for Hot Tub Quote",
        "form_cta": "Schedule Hot Tub Removal",
        "special_offer": "Hot Tub Removal Special",
        "emergency_text": "Same-day hot tub removal available"
    },
    "commercial-junk-removal-san-diego": {
        "service_name": "Commercial Junk Removal",
        "local_area": "San Diego",
        "phone_cta": "Call for Commercial Quote",
        "form_cta": "Schedule Business Consultation",
        "special_offer": "Volume Discount Available",
        "emergency_text": "After-hours commercial service"
    },
    "junk-removal-pacific-beach": {
        "service_name": "Junk Removal",
        "local_area": "Pacific Beach",
        "phone_cta": "Call for PB Quote",
        "form_cta": "Schedule Pacific Beach Pickup",
        "special_offer": "Beach Rental Special",
        "emergency_text": "Same-day PB service available"
    },
    "junk-removal-hillcrest": {
        "service_name": "Junk Removal",
        "local_area": "Hillcrest",
        "phone_cta": "Call for Hillcrest Quote",
        "form_cta": "Schedule Hillcrest Cleanout",
        "special_offer": "Historic Home Special",
        "emergency_text": "Urban core same-day service"
    },
    "junk-removal-point-loma": {
        "service_name": "Junk Removal",
        "local_area": "Point Loma",
        "phone_cta": "Call for Point Loma Quote",
        "form_cta": "Schedule Peninsula Service",
        "special_offer": "15% Military Discount",
        "emergency_text": "Military family priority service"
    },
    "junk-removal-chula-vista": {
        "service_name": "Junk Removal",
        "local_area": "Chula Vista",
        "phone_cta": "Llame para Cotización",
        "form_cta": "Schedule Chula Vista Service",
        "special_offer": "Servicio Bilingüe",
        "emergency_text": "Large home specialists"
    },
    "junk-removal-north-park": {
        "service_name": "Junk Removal",
        "local_area": "North Park",
        "phone_cta": "Call for North Park Quote",
        "form_cta": "Schedule Eco-Friendly Pickup",
        "special_offer": "Vintage Item Preservation",
        "emergency_text": "Craft district specialists"
    },
    "piano-removal-san-diego": {
        "service_name": "Piano Removal",
        "local_area": "San Diego",
        "phone_cta": "Call for Piano Quote",
        "form_cta": "Schedule Piano Assessment",
        "special_offer": "Donation Coordination",
        "emergency_text": "Same-day piano removal"
    },
    "junk-removal-el-cajon": {
        "service_name": "Junk Removal",
        "local_area": "El Cajon",
        "phone_cta": "Call for East County Quote",
        "form_cta": "Schedule El Cajon Service",
        "special_offer": "Large Property Special",
        "emergency_text": "Ranch & rural specialists"
    }
}

base_path = "/Users/jammermurphy/Desktop/severin-cleaners-website/src/app"

def add_cta_buttons(content, config):
    """Add various CTA buttons throughout the content"""

    # 1. Update hero section button to link to contact form
    content = re.sub(
        r'<button className="btn btn-secondary[^"]*">\s*([^<]*)\s*</button>',
        f'''<a
                  href="/#contact"
                  className="btn btn-secondary text-lg px-8 py-4 hover:bg-orange-600 transition-colors duration-200"
                >
                  Get Free {config['local_area']} Quote - Save 15%
                </a>''',
        content
    )

    # 2. Add CTA to colored info boxes
    # Find green boxes and add CTA
    content = re.sub(
        r'(<div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">.*?<p className="text-green-800[^"]*">.*?)</p>\s*</div>',
        lambda m: m.group(1) + f'''</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href="tel:6192716411"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors duration-200"
                  >
                    📞 {config['phone_cta']}
                  </a>
                  <a
                    href="/#contact"
                    className="bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-50 transition-colors duration-200"
                  >
                    {config['form_cta']}
                  </a>
                </div>
              </div>''',
        content,
        flags=re.DOTALL
    )

    # 3. Add CTA to orange boxes
    content = re.sub(
        r'(<div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">.*?<p className="text-orange-800[^"]*">.*?)</p>\s*</div>',
        lambda m: m.group(1) + f'''</p>
                <div className="text-center mt-4">
                  <a
                    href="tel:6192716411"
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-block"
                  >
                    📞 Call Now: (619) 271-6411
                  </a>
                </div>
              </div>''',
        content,
        flags=re.DOTALL
    )

    # 4. Enhance final CTA section
    content = re.sub(
        r'(<div className="text-center bg-blue-900 text-white p-8 rounded-lg">.*?<div className="flex flex-col sm:flex-row gap-4 justify-center[^"]*">.*?)</div>',
        lambda m: m.group(1) + f''' mb-6">
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
                    Get Free {config['local_area']} Quote
                  </a>
                </div>
                <div className="bg-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ {config['local_area']} Special Offers ⭐</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-700 rounded p-3">
                      <strong>15% Off Online Booking</strong><br>
                      Book through our website and save!
                    </div>
                    <div className="bg-blue-700 rounded p-3">
                      <strong>{config['special_offer']}</strong><br>
                      {config['emergency_text']}
                    </div>
                  </div>
                </div>''',
        content,
        flags=re.DOTALL
    )

    # 5. Add floating CTA after first main content section
    first_h3_pattern = r'(<h3 className="text-2xl font-bold text-gray-900 mb-4">.*?</h3>)'
    first_h3_match = re.search(first_h3_pattern, content)
    if first_h3_match:
        # Find the end of the first section after this h3
        start_pos = first_h3_match.end()
        # Look for the next h3 or h4 to place CTA before it
        next_section = re.search(r'<h[34] className="text-[^"]*">', content[start_pos:])
        if next_section:
            insert_pos = start_pos + next_section.start()
            floating_cta = f'''
              <div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for {config['service_name']} in {config['local_area']}?</p>
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

'''
            content = content[:insert_pos] + floating_cta + content[insert_pos:]

    return content

# Process each page
for page, config in pages_config.items():
    file_path = f"{base_path}/{page}/page.tsx"

    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, 'r') as f:
        content = f.read()

    # Add CTAs
    updated_content = add_cta_buttons(content, config)

    # Write back
    with open(file_path, 'w') as f:
        f.write(updated_content)

    print(f"Updated {page} with enhanced CTAs")

print("All pages updated with comprehensive CTA strategy!")