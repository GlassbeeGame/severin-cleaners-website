#!/usr/bin/env python3

import os
import re

# Page configurations
pages_config = [
    {
        'file': 'src/app/junk-removal-pacific-beach/page.tsx',
        'local_area': 'Pacific Beach',
        'special_feature': 'Beach Rental Special'
    },
    {
        'file': 'src/app/junk-removal-hillcrest/page.tsx',
        'local_area': 'Hillcrest',
        'special_feature': 'Historic Home Special'
    },
    {
        'file': 'src/app/hot-tub-removal-san-diego/page.tsx',
        'local_area': 'San Diego',
        'special_feature': 'Spa Removal Special'
    },
    {
        'file': 'src/app/commercial-junk-removal-san-diego/page.tsx',
        'local_area': 'San Diego',
        'special_feature': 'Business Special'
    },
    {
        'file': 'src/app/junk-removal-point-loma/page.tsx',
        'local_area': 'Point Loma',
        'special_feature': 'Military Discount'
    },
    {
        'file': 'src/app/junk-removal-chula-vista/page.tsx',
        'local_area': 'Chula Vista',
        'special_feature': 'Bilingual Service'
    },
    {
        'file': 'src/app/junk-removal-north-park/page.tsx',
        'local_area': 'North Park',
        'special_feature': 'Artist District Special'
    },
    {
        'file': 'src/app/piano-removal-san-diego/page.tsx',
        'local_area': 'San Diego',
        'special_feature': 'Piano Specialist'
    },
    {
        'file': 'src/app/junk-removal-el-cajon/page.tsx',
        'local_area': 'El Cajon',
        'special_feature': 'East County Special'
    }
]

def streamline_ctas(file_path, config):
    """Streamline CTAs to just 3 strategic placements per page"""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        print(f"Processing: {file_path}")

        # 1. Keep hero section CTAs as-is (already optimized with primary + secondary)
        # No changes needed to hero section

        # 2. Remove info box CTAs - replace with simple text
        # Remove the CTA buttons from the blue info box and replace with simple contact info
        info_box_pattern = r'(<div className="flex flex-col sm:flex-row gap-3 mt-4">\s*<a[^>]*href="tel:6192716411"[^>]*>\s*📞 Call for Quote\s*</a>\s*<a[^>]*href="/#contact"[^>]*>\s*Schedule [^<]* Service\s*</a>\s*</div>)'

        simple_contact_text = f'''<div className="mt-4 text-center">
                  <p className="text-blue-700 font-semibold">📞 Call (619) 271-6411 for immediate service</p>
                </div>'''

        content = re.sub(info_box_pattern, simple_contact_text, content, flags=re.DOTALL)

        # 3. Simplify sticky CTA to just one primary action (phone call)
        sticky_cta_pattern = r'(<div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">\s*<div className="flex flex-col sm:flex-row items-center justify-between gap-4">\s*<div>\s*<p className="font-semibold">Ready for Junk Removal in [^?]*\?</p>\s*<p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>\s*</div>\s*<div className="flex gap-3">\s*<a[^>]*href="tel:6192716411"[^>]*>\s*📞 Call Now\s*</a>\s*<a[^>]*href="/#contact"[^>]*>\s*Get Quote\s*</a>\s*</div>\s*</div>\s*</div>)'

        simplified_sticky = f'''<div className="sticky top-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-lg shadow-lg mb-8 z-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ready for Junk Removal in {config['local_area']}?</p>
                    <p className="text-sm opacity-90">Free quotes • Same-day service • Licensed & insured</p>
                  </div>
                  <a
                    href="tel:6192716411"
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>'''

        content = re.sub(sticky_cta_pattern, simplified_sticky, content, flags=re.DOTALL)

        # 4. Simplify final CTA section - remove redundant buttons, keep just one primary action
        final_cta_pattern = r'(<div className="text-center bg-blue-900 text-white p-8 rounded-lg">.*?</div>\s*</div>)'

        simplified_final_cta = f'''<div className="text-center bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready for {config['local_area']} Junk Removal?</h3>
                <p className="text-lg mb-6">
                  Professional service with local expertise and guaranteed satisfaction
                </p>
                <a
                  href="tel:6192716411"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors duration-200 inline-block mb-6"
                >
                  📞 Call (619) 271-6411 Now
                </a>
                <div className="bg-blue-800 rounded-lg p-4">
                  <p className="text-yellow-300 font-semibold mb-2">⭐ {config['local_area']} Special ⭐</p>
                  <div className="text-sm">
                    <strong>15% Off Online Booking</strong> • <strong>{config['special_feature']}</strong>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Licensed & insured • Same-day service • Local specialists
                </p>
              </div>'''

        content = re.sub(final_cta_pattern, simplified_final_cta, content, flags=re.DOTALL)

        # Write the updated content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ Successfully streamlined CTAs in: {file_path}")

    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")

def main():
    print("🎯 Streamlining CTAs to optimize conversion rates...")
    print("📊 Reducing from 6-8 CTAs to 3 strategic CTAs per page\n")

    for config in pages_config:
        streamline_ctas(config['file'], config)

    print(f"\n✅ Completed streamlining CTAs for {len(pages_config)} pages")
    print("\n🎯 New CTA Strategy:")
    print("1. Hero Section: Primary CTA (phone) + Secondary CTA (form)")
    print("2. Sticky CTA: Single mobile-optimized phone CTA")
    print("3. Final Section: One primary phone CTA with special offer")
    print("\n📈 Benefits:")
    print("• Reduced decision paralysis")
    print("• Clearer visual hierarchy")
    print("• Improved conversion focus")
    print("• Better user experience")

if __name__ == "__main__":
    main()