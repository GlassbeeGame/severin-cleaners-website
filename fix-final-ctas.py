#!/usr/bin/env python3

import os
import re

# List of pages to fix
pages_to_fix = [
    "hot-tub-removal-san-diego",
    "commercial-junk-removal-san-diego",
    "junk-removal-pacific-beach",
    "junk-removal-hillcrest",
    "junk-removal-point-loma",
    "junk-removal-chula-vista",
    "junk-removal-north-park",
    "piano-removal-san-diego",
    "junk-removal-el-cajon"
]

base_path = "/Users/jammermurphy/Desktop/severin-cleaners-website/src/app"

for page in pages_to_fix:
    file_path = f"{base_path}/{page}/page.tsx"

    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue

    with open(file_path, 'r') as f:
        content = f.read()

    # Fix the broken final CTA section
    content = re.sub(
        r'(\s+</a>\s+mb-6">\s+<a\s+href="tel:6192716411")',
        r'\1',
        content
    )

    # Fix specific malformed section
    content = re.sub(
        r'(Get Free [^<]+ Quote - Save 15%\s*</a>\s*) mb-6">',
        r'\1</div>',
        content
    )

    # Ensure proper closing div structure
    content = re.sub(
        r'</a>\s*mb-6">\s*<a\s+href="tel:6192716411"',
        r'</a>\n                </div>\n                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">\n                  <a\n                    href="tel:6192716411"',
        content
    )

    # Write back
    with open(file_path, 'w') as f:
        f.write(content)

    print(f"Fixed {page}")

print("All CTA formatting issues fixed!")