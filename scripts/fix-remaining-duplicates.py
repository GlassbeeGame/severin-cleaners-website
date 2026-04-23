#!/usr/bin/env python3

import os
import re

# Files to fix
files_to_fix = [
    'src/app/junk-removal-pacific-beach/page.tsx',
    'src/app/junk-removal-hillcrest/page.tsx',
    'src/app/junk-removal-point-loma/page.tsx',
    'src/app/junk-removal-north-park/page.tsx',
    'src/app/piano-removal-san-diego/page.tsx',
    'src/app/junk-removal-el-cajon/page.tsx'
]

def fix_duplicates(file_path):
    """Fix remaining duplicate sections"""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        print(f"Checking: {file_path}")

        # Look for the specific duplicate pattern
        pattern = r'(\s*</div>\s*</div>\s*<p className="text-sm mt-4">\s*Licensed & insured[^<]*</p>\s*</div>)'

        matches = list(re.finditer(pattern, content, flags=re.DOTALL))

        if len(matches) > 1:
            print(f"  Found {len(matches)} duplicate sections")
            # Remove all but the first match
            for match in reversed(matches[1:]):
                start, end = match.span()
                content = content[:start] + content[end:]

            # Write back the fixed content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)

            print(f"  ✅ Fixed {len(matches) - 1} duplicates in: {file_path}")
        else:
            print(f"  ✅ No duplicates found in: {file_path}")

    except Exception as e:
        print(f"❌ Error fixing {file_path}: {str(e)}")

def main():
    print("🔧 Fixing remaining duplicate sections...\n")

    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_duplicates(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")

    print("\n✅ Completed fixing remaining duplicates")

if __name__ == "__main__":
    main()