#!/usr/bin/env python3

import os
import re

# List of all pages that need fixing
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

def fix_page_syntax(content):
    """Fix common syntax issues in the page content."""

    # Fix broken mb-6"> patterns
    content = re.sub(r'</a>\s*mb-6\">\s*<a', r'</a>\n                </div>\n                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">\n                  <a', content)

    # Fix standalone mb-6"> lines
    content = re.sub(r'^\s*mb-6\">\s*$', '', content, flags=re.MULTILINE)

    # Fix malformed div structures
    content = re.sub(r'</a>\s*mb-6\">', r'</a>\n                </div>', content)

    # Remove any lines that are just malformed attribute fragments
    lines = content.split('\n')
    cleaned_lines = []

    for line in lines:
        # Skip lines that are just broken attribute fragments
        if re.match(r'^\s*mb-6\">\s*$', line):
            continue
        if re.match(r'^\s*className=\"[^\"]*\"\s*$', line) and 'mb-6' in line:
            continue
        cleaned_lines.append(line)

    content = '\n'.join(cleaned_lines)

    # Ensure proper JSX structure - remove any stray text content that's not in tags
    content = re.sub(r'>\s*mb-6\">\s*<', r'>\n                </div>\n                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">\n                  <', content)

    return content

for page in pages_to_fix:
    file_path = f"{base_path}/{page}/page.tsx"

    if not os.path.exists(file_path):
        print(f"❌ File not found: {file_path}")
        continue

    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file is corrupted (very short)
        if len(content) < 3000:
            print(f"⚠️  {page}: File appears corrupted (too short: {len(content)} chars), skipping")
            continue

        # Fix syntax issues
        original_content = content
        fixed_content = fix_page_syntax(content)

        # Only write if we made changes
        if original_content != fixed_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"✅ Fixed {page}")
        else:
            print(f"✅ {page} was already clean")

    except Exception as e:
        print(f"❌ Error fixing {page}: {e}")

print("\n🔧 All pages processed!")