#!/bin/bash
# Clean dev server startup script
# Prevents common Next.js dev server issues

echo "🧹 Cleaning up old processes and cache..."

# Kill any existing Next.js dev servers (multiple attempts)
pkill -9 -f "next dev" 2>/dev/null
pkill -9 -f "npm run dev" 2>/dev/null
sleep 2

# Force-kill anything on port 3000
if lsof -ti:3000 > /dev/null 2>&1; then
  echo "⚠️  Port 3000 in use, forcing cleanup..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null
  sleep 2
fi

# Verify port is actually free
PORT_CHECK=$(lsof -ti:3000 2>/dev/null | wc -l)
if [ "$PORT_CHECK" -gt 0 ]; then
  echo "❌ ERROR: Could not free port 3000"
  echo "Run: sudo lsof -ti:3000 | xargs kill -9"
  exit 1
fi

# Clear Next.js cache (fixes JSON parse errors)
echo "🗑️  Clearing Next.js cache..."
rm -rf .next/cache
rm -rf .next/*.json 2>/dev/null

# Clear TypeScript build cache (prevents tsbuildinfo corruption)
echo "🗑️  Clearing TypeScript cache..."
rm -rf *.tsbuildinfo 2>/dev/null
rm -rf src/**/*.tsbuildinfo 2>/dev/null

# Clear node module cache (if needed)
if [ "$1" = "--deep" ]; then
  echo "🗑️  Deep clean: Clearing node_modules/.cache..."
  rm -rf node_modules/.cache 2>/dev/null
fi

# Optional: Full rebuild (uncomment if issues persist)
# rm -rf .next

echo "✅ Cleanup complete!"
echo "🚀 Starting dev server..."
npm run dev
