#!/bin/bash
echo "🏪 Starting Production E-Commerce Store..."

# Build the application
echo "🔨 Building Next.js application..."
npm run build

# Start the production server
echo "🚀 Starting production server..."
npm start

echo ""
echo "🎉 Store is running at: http://localhost:3000"
echo "📊 Performance monitoring enabled"
echo "🛍️ E-commerce features active"
