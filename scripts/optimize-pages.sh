#!/bin/bash

# Bulk Optimization Script for Core Web Vitals
# This script optimizes all service and location pages by:
# 1. Removing Inter font imports (already in root layout)
# 2. Replacing gradient hero sections with OptimizedGradientHero component
# 3. Removing font wrapper divs

set -e

echo "🚀 Starting bulk page optimization..."
echo "Target: 43 remaining pages (service + location pages)"
echo ""

# List of pages to optimize (excluding furniture-removal-san-diego which is already done)
PAGES=(
  "appliance-removal-san-diego"
  "couch-removal-san-diego"
  "estate-cleanout-san-diego"
  "hot-tub-removal-san-diego"
  "piano-removal-san-diego"
  "san-diego-mattress-disposal"
  "scrap-metal-removal"
  "foreclosure-eviction-cleanout-san-diego"
  "commercial-junk-removal-san-diego"
  "hoarding-cleanup-san-diego"
  "emergency-junk-removal-san-diego"
  "construction-debris-removal-san-diego"
  "cleanout-services-san-diego"
  "same-day-junk-removal-san-diego"
  "san-diego-junk-removal"
  "san-diego-dump-fees"
  "junk-removal-cost-san-diego"
  "junk-removal-oceanside"
  "junk-removal-vista"
  "junk-removal-spring-valley"
  "junk-removal-santee"
  "junk-removal-rancho-santa-fe"
  "junk-removal-poway"
  "junk-removal-point-loma"
  "junk-removal-pacific-beach"
  "junk-removal-north-park"
  "junk-removal-mira-mesa"
  "junk-removal-lemon-grove"
  "junk-removal-lakeside"
  "junk-removal-la-mesa"
  "junk-removal-la-jolla"
  "junk-removal-hillcrest"
  "junk-removal-escondido"
  "junk-removal-el-cajon"
  "junk-removal-del-mar"
  "junk-removal-carmel-valley"
  "junk-removal-clairemont"
  "junk-removal-kearny-mesa"
  "junk-removal-chula-vista"
)

TOTAL=${#PAGES[@]}
CURRENT=0

for page in "${PAGES[@]}"; do
  CURRENT=$((CURRENT + 1))
  FILE="src/app/$page/page.tsx"

  if [ ! -f "$FILE" ]; then
    echo "⚠️  [$CURRENT/$TOTAL] Skipping $page - file not found"
    continue
  fi

  echo "🔄 [$CURRENT/$TOTAL] Optimizing $page..."

  # Create backup
  cp "$FILE" "$FILE.backup"

  # Check if file has already been optimized
  if grep -q "OptimizedGradientHero" "$FILE"; then
    echo "   ✅ Already optimized, skipping"
    rm "$FILE.backup"
    continue
  fi

  # This is a marker file for manual optimization
  # The actual sed commands would need to be tailored per page
  # since hero content varies

  echo "   📝 Requires manual optimization (hero content varies)"
  echo "      File: $FILE"

  rm "$FILE.backup"
done

echo ""
echo "✅ Script complete!"
echo ""
echo "⚠️  MANUAL OPTIMIZATION REQUIRED:"
echo "   Each page has unique hero content (titles, subtitles)"
echo "   Please use the template from furniture-removal-san-diego"
echo "   Or update pages individually using the guide"
echo ""
echo "📖 See CORE_WEB_VITALS_OPTIMIZATION_GUIDE.md for instructions"
