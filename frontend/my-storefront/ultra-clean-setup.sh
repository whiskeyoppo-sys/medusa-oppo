#!/bin/bash
echo "🧹 ULTRA-CLEAN SETUP - NO WARNINGS"
echo "=================================="

# Nuclear cleanup
rm -rf node_modules .next package-lock.json

# Create minimal package.json with exact versions
cat > package.json <<'PKG_EOF'
{
  "name": "neuro-store",
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
PKG_EOF

echo "📦 Installing clean dependencies..."
npm install --silent

echo ""
echo "🎉 CLEAN INSTALL COMPLETE!"
echo "🚀 Starting store..."
npm run dev
