#!/bin/bash
# Clean dev server startup script
# Prevents common Next.js dev server issues

echo "🧹 Cleaning up old processes and cache..."

# Kill any existing Next.js dev servers
pkill -f "next dev" 2>/dev/null
sleep 1

# Verify port 3000 is free
if lsof -ti:3000 > /dev/null 2>&1; then
  echo "⚠️  Port 3000 still in use, forcing cleanup..."
  lsof -ti:3000 | xargs kill -9 2>/dev/null
  sleep 1
fi

# Clear Next.js cache (fixes JSON parse errors)
echo "🗑️  Clearing Next.js cache..."
rm -rf .next/cache
rm -rf .next/*.json 2>/dev/null

# Optional: Full rebuild (uncomment if issues persist)
# rm -rf .next

echo "✅ Cleanup complete!"
echo "🚀 Starting dev server..."
npm run dev
