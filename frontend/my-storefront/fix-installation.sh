#!/bin/bash
echo "🔧 FIXING INSTALLATION ISSUES"
echo "=============================="

# Remove problematic node_modules and reinstall
echo "🔄 Cleaning installation..."
rm -rf node_modules
rm -rf .next
rm package-lock.json

# Check current package.json
echo "📋 Current package.json scripts:"
npm run

# Fix package.json if needed
echo "📝 Ensuring build script exists..."
if ! grep -q "\"build\"" package.json; then
  echo "⚠️ No build script found. Adding it..."
  node -e "
  const fs = require('fs');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  pkg.scripts = {
    ...pkg.scripts,
    'dev': 'next dev',
    'build': 'next build',
    'start': 'next start',
    'lint': 'next lint'
  };
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
fi

# Install only working dependencies
echo "📦 Installing stable dependencies..."
npm install next@latest react@latest react-dom@latest

# Install e-commerce dependencies that actually exist
npm install lucide-react axios
npm install @tanstack/react-query

# Try alternative to @medusajs/medusa-react
echo "🔄 Installing Medusa JS alternative..."
npm install medusa-js

# Install UI components that work
npm install class-variance-authority clsx tailwind-merge

# Install performance packages
npm install sharp

echo ""
echo "✅ Installation complete!"
echo ""
echo "🚀 Testing build..."
npm run build

echo ""
echo "🎉 If build succeeds, start your store:"
echo "npm run dev"
