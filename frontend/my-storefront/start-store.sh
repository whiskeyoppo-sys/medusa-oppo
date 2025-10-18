#!/bin/bash
echo "🏪 STARTING AI E-COMMERCE STORE"
echo "================================"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Check if build exists, if not build it
if [ ! -d ".next" ]; then
  echo "🔨 Building application..."
  npm run build
fi

echo "🚀 Starting development server..."
echo ""
echo "📱 Store will be available at: http://localhost:3000"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

npm run dev
