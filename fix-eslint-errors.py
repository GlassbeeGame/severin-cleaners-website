#!/usr/bin/env python3
"""
Fix common ESLint errors in the codebase:
1. Remove unused Link imports
2. Fix apostrophes in JSX
3. Fix anchor tag hrefs
"""

import os
import re
import glob

def fix_file(file_path):
    """Fix ESLint errors in a single file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Remove unused Link imports
    if 'import Link from \'next/link\';' in content and 'Link' not in content.replace('import Link from \'next/link\';', ''):
        content = content.replace('import Link from \'next/link\';\n', '')
        content = content.replace('import Link from \'next/link\';', '')

    # Fix anchor tags with /#contact to #contact
    content = re.sub(r'href="/#contact"', 'href="#contact"', content)

    # Fix unescaped apostrophes in JSX text content (but not in attribute values)
    # This is a simplified fix - in production you'd want more sophisticated parsing

    # Fix common patterns like "don't", "can't", "won't", etc.
    jsx_text_patterns = [
        (r"(\>[^<]*)'([^<]*\<)", r"\1&apos;\2"),  # Simple pattern for text between tags
        (r"(\>[^<]*)'s(\s)", r"\1&apos;s\2"),    # Possessive
        (r"(\>[^<]*)'t(\s)", r"\1&apos;t\2"),    # Contractions like don't, can't
        (r"(\>[^<]*)'re(\s)", r"\1&apos;re\2"),  # Contractions like we're
        (r"(\>[^<]*)'ll(\s)", r"\1&apos;ll\2"),  # Contractions like we'll
        (r"(\>[^<]*)'ve(\s)", r"\1&apos;ve\2"),  # Contractions like we've
    ]

    for pattern, replacement in jsx_text_patterns:
        content = re.sub(pattern, replacement, content)

    # Fix quotes in JSX text
    content = re.sub(r'(\>[^<]*)"([^<]*"[^<]*\<)', r'\1&quot;\2', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {file_path}")
        return True

    return False

def main():
    """Main function to process all TypeScript React files"""

    # Find all .tsx files in src/
    tsx_files = glob.glob('src/**/*.tsx', recursive=True)

    fixed_count = 0
    for file_path in tsx_files:
        if fix_file(file_path):
            fixed_count += 1

    print(f"\nFixed {fixed_count} files total")

if __name__ == "__main__":
    main()