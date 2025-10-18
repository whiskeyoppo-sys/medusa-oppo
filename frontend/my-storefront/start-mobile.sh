#!/bin/bash
echo "📱 Starting Mobile-Optimized Store..."

# Set mobile-optimized environment variables
export NODE_OPTIONS="--max-old-space-size=512"
export NEXT_TELEMETRY_DISABLED=1

# Build with mobile optimizations
echo "🔨 Building with mobile optimizations..."
npm run build

# Start with mobile-specific settings
echo "🚀 Starting mobile server..."
npx next start -p 3000 -H 0.0.0.0
