#!/bin/bash
echo "🧪 TESTING AI INTEGRATION"
echo "=========================="

# Check if components were created
echo "📁 Checking created files..."
if [ -f "src/components/ai/NeuroProduct.js" ]; then
    echo "✅ NeuroProduct component created"
else
    echo "❌ NeuroProduct component missing"
fi

# Check if page was updated
if [ -d "src/app" ] && [ -f "src/app/page.js" ]; then
    echo "✅ App Router page updated"
elif [ -d "pages" ] && [ -f "pages/index.js" ]; then
    echo "✅ Pages directory index updated" 
else
    echo "❌ Could not find updated page file"
    find . -name "page.js" -o -name "index.js" | head -5
fi

echo ""
echo "🚀 Starting development server to test..."
echo "💡 The page should automatically reload with AI features!"
echo "📱 Open: http://localhost:3000"
