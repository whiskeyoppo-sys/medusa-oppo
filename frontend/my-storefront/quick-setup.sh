#!/bin/bash
echo "⚡ LIGHTNING FAST NEXT.JS + MEDUSA SETUP"
echo "========================================"

# Clean existing issues
rm -rf node_modules .next 2>/dev/null

# Create essential structure
mkdir -p app components lib hooks styles

# Create minimal package.json
cat > package.json <<'PKG_EOF'
{
  "name": "neuro-store",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.263.1",
    "axios": "^1.5.0"
  }
}
PKG_EOF

# Create essential Next.js config
cat > next.config.js <<'CONFIG_EOF'
/** @type {import('next').NextConfig} */
module.exports = {
  images: { unoptimized: true },
  experimental: { appDir: true }
}
CONFIG_EOF

# Create AI-powered store in ONE FILE
cat > app/page.js <<'PAGE_EOF'
export default function Home() {
  const products = [
    { id: 1, name: 'AI Smartwatch', price: 299, image: '/api/placeholder/300/200' },
    { id: 2, name: 'Quantum Headphones', price: 199, image: '/api/placeholder/300/200' },
    { id: 3, name: 'Neuro Glasses', price: 399, image: '/api/placeholder/300/200' }
  ]

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🚀 AI Store - Ready in 60s!</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ height: '200px', background: '#f0f0f0', borderRadius: '4px', marginBottom: '1rem' }}></div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button style={{ background: '#007acc', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', width: '100%' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
PAGE_EOF

# Create layout
cat > app/layout.js <<'LAYOUT_EOF'
export const metadata = {
  title: 'AI Store - Ready!',
  description: 'Lightning fast setup'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>
        <nav style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
          <h2>🛍️ Neuro Merchant</h2>
        </nav>
        {children}
      </body>
    </html>
  )
}
LAYOUT_EOF

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🎉 SETUP COMPLETE! Starting your store..."
echo "🌐 Your store will open at: http://localhost:3000"
echo ""

npm run dev
