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

def fix_syntax_errors(file_path):
    """Fix syntax errors in the final CTA sections"""

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        print(f"Fixing syntax in: {file_path}")

        # Remove any duplicate ending sections that got duplicated
        # Pattern: multiple </div> followed by </div> and text sections
        duplicate_pattern = r'(\s*</div>\s*</div>\s*<p className="text-sm mt-4">[^<]*</p>\s*</div>)'

        # Find all matches and keep only the first occurrence
        matches = list(re.finditer(duplicate_pattern, content, flags=re.DOTALL))

        if len(matches) > 1:
            # Remove all but the first match
            for match in reversed(matches[1:]):  # reverse to maintain positions
                start, end = match.span()
                content = content[:start] + content[end:]
            print(f"  ✅ Removed {len(matches) - 1} duplicate sections")

        # Also check for malformed JSX structures and clean them up
        # Look for any text that got accidentally placed outside JSX
        content = re.sub(r'\s*,->.*?`->\s*', '', content, flags=re.DOTALL)

        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"✅ Fixed syntax in: {file_path}")

    except Exception as e:
        print(f"❌ Error fixing {file_path}: {str(e)}")

def main():
    print("🔧 Fixing syntax errors across all neighborhood pages...\n")

    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_syntax_errors(file_path)
        else:
            print(f"⚠️  File not found: {file_path}")

    print("\n✅ Completed syntax fixes")
    print("\n🧪 Testing build to verify fixes...")

if __name__ == "__main__":
    main()