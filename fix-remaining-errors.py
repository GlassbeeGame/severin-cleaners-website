#!/usr/bin/env python3
"""
Fix the remaining syntax errors in components
"""

import os
import re

def fix_file(file_path):
    """Fix specific syntax errors in a file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Fix specific patterns
    fixes = [
        # Fix &apos; that should be '
        (r"&apos;", "'"),
        # Fix &quot; that should be "
        (r"&quot;", '"'),
    ]

    for pattern, replacement in fixes:
        content = re.sub(pattern, replacement, content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed: {file_path}")
        return True

    return False

def main():
    """Fix all component files"""
    component_files = [
        'src/components/Contact.tsx',
        'src/components/Header.tsx',
        'src/components/Hero.tsx',
        'src/components/PWAInstaller.tsx',
        'src/components/Services.tsx'
    ]

    fixed_count = 0
    for file_path in component_files:
        if os.path.exists(file_path) and fix_file(file_path):
            fixed_count += 1

    print(f"\nFixed {fixed_count} component files")

if __name__ == "__main__":
    main()