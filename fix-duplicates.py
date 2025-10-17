#!/usr/bin/env python3

import os
import re

# Files to fix
files_to_fix = [
    'src/app/junk-removal-pacific-beach/page.tsx',
    'src/app/junk-removal-hillcrest/page.tsx',
    'src/app/hot-tub-removal-san-diego/page.tsx',
    'src/app/commercial-junk-removal-san-diego/page.tsx',
    'src/app/junk-removal-point-loma/page.tsx',
    'src/app/junk-removal-chula-vista/page.tsx',
    'src/app/junk-removal-north-park/page.tsx',
    'src/app/piano-removal-san-diego/page.tsx',
    'src/app/junk-removal-el-cajon/page.tsx'
]

def fix_duplicates(file_path):
    """Fix duplicate sections caused by regex replacement"""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        print(f"Fixing duplicates in: {file_path}")

        # Remove duplicate closing div and text sections
        duplicate_pattern = r'(\s*</div>\s*</div>\s*<p className="text-sm mt-4">\s*Licensed & insured • Same-day service • Local specialists\s*</p>\s*</div>)'

        # Keep only the first occurrence, remove duplicates
        content = re.sub(duplicate_pattern + r'+', r'\1', content, flags=re.DOTALL)

        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ Fixed duplicates in: {file_path}")

    except Exception as e:
        print(f"❌ Error fixing {file_path}: {str(e)}")

def main():
    print("🔧 Fixing duplicate sections from CTA streamlining...\n")

    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_duplicates(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")

    print("\n✅ Completed fixing duplicate sections")

if __name__ == "__main__":
    main()