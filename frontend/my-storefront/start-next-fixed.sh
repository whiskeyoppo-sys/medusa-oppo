#!/bin/bash
echo "🚀 STARTING NEXT.JS WITH TERMUX FIX"
echo "==================================="

# Set Node.js options for Termux
export NODE_OPTIONS="--max-old-space-size=512 --no-warnings"

# Clear any port conflicts
pkill -f "node.*3000" 2>/dev/null || true
sleep 2

# Start Next.js directly without npm
echo "🔧 Starting Next.js development server..."
./node_modules/.bin/next dev -p 3000 -H 0.0.0.0
