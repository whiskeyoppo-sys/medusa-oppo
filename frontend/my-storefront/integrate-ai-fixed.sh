#!/bin/bash
echo "🧠 FIXED AI INTEGRATION FOR YOUR EXACT PROJECT"
echo "=============================================="

# Determine the correct pages directory
if [ -d "src/app" ]; then
    PAGES_DIR="src/app"
    PAGE_FILE="page.js"
elif [ -d "pages" ]; then
    PAGES_DIR="pages" 
    PAGE_FILE="index.js"
else
    echo "❌ Could not find pages directory. Creating src/app..."
    mkdir -p src/app
    PAGES_DIR="src/app"
    PAGE_FILE="page.js"
fi

echo "📁 Using directory: $PAGES_DIR/$PAGE_FILE"

# Create AI components directory
mkdir -p src/components/ai

# Create Neuro Product Component
cat > src/components/ai/NeuroProduct.js <<'COMPONENT_EOF'
'use client'

import { useState, useEffect } from 'react'

export default function NeuroProduct({ product }) {
  const [aiEnhancements, setAiEnhancements] = useState(null)
  const [customerEmotion, setCustomerEmotion] = useState('neutral')

  // Simulate AI analysis
  useEffect(() => {
    const analyzeCustomer = () => {
      const emotions = ['excited', 'curious', 'deciding', 'interested']
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
      
      setCustomerEmotion(randomEmotion)
      
      // AI-generated enhancements based on emotion
      setAiEnhancements({
        price: calculateEmotionalPrice(product.price, randomEmotion),
        description: generateEmotionalDescription(product, randomEmotion),
        cta: generateEmotionalCTA(randomEmotion),
        colorScheme: getColorScheme(randomEmotion)
      })
    }

    analyzeCustomer()
    const interval = setInterval(analyzeCustomer, 10000) // Update every 10s
    return () => clearInterval(interval)
  }, [product])

  if (!aiEnhancements) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', background: '#f5f5f5' }}>
        <div>Loading AI enhancements for {product.name}...</div>
      </div>
    )
  }

  return (
    <div style={{
      border: `2px solid ${getBorderColor(aiEnhancements.colorScheme)}`,
      borderRadius: '12px',
      padding: '1rem',
      margin: '1rem 0',
      background: getBackgroundColor(aiEnhancements.colorScheme),
      color: getTextColor(aiEnhancements.colorScheme),
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <div style={{
          width: '100%',
          height: '200px',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          {product.name}
        </div>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '0.7rem',
          fontWeight: 'bold'
        }}>
          🤖 AI Optimized
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{product.name}</h3>
        <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>{aiEnhancements.description}</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0', flexWrap: 'wrap' }}>
          <span style={{ textDecoration: 'line-through', opacity: 0.7, fontSize: '0.9rem' }}>
            ${product.price}
          </span>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
            ${aiEnhancements.price}
          </span>
          <span style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '2px 8px', 
            borderRadius: '8px', 
            fontSize: '0.7rem',
            textTransform: 'uppercase'
          }}>
            {customerEmotion}
          </span>
        </div>
        
        <button style={{
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          width: '100%',
          background: getButtonColor(aiEnhancements.colorScheme),
          color: 'white'
        }}>
          {aiEnhancements.cta}
        </button>
      </div>
    </div>
  )
}

// AI pricing algorithms
function calculateEmotionalPrice(basePrice, emotion) {
  const multipliers = {
    excited: 1.2,
    curious: 1.1,
    deciding: 0.95,
    interested: 1.0,
    neutral: 1.0
  }
  return (basePrice * multipliers[emotion]).toFixed(2)
}

function generateEmotionalDescription(product, emotion) {
  const descriptors = {
    excited: `🚀 LIMITED! ${product.name} - Everyone's talking about this! Get it before it's gone!`,
    curious: `🤔 ${product.name} - Discover why this is trending among savvy shoppers...`,
    deciding: `⭐ ${product.name} - Smart choice for smart shoppers. Balanced quality and value.`,
    interested: `👍 ${product.name} - Popular among customers with your taste. Frequently repurchased.`
  }
  return descriptors[emotion] || product.description
}

function generateEmotionalCTA(emotion) {
  const ctas = {
    excited: "🔥 Grab It Now!",
    curious: "🔍 Learn More", 
    deciding: "🤝 Add to Cart",
    interested: "🛒 Buy Now"
  }
  return ctas[emotion] || "Add to Cart"
}

function getColorScheme(emotion) {
  return emotion
}

function getBorderColor(scheme) {
  const colors = {
    excited: '#ff4757',
    curious: '#0984e3',
    deciding: '#00b894',
    interested: '#e17055',
    neutral: '#ddd'
  }
  return colors[scheme] || '#ddd'
}

function getBackgroundColor(scheme) {
  const colors = {
    excited: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
    curious: 'linear-gradient(135deg, #74b9ff, #0984e3)',
    deciding: 'linear-gradient(135deg, #55efc4, #00b894)',
    interested: 'linear-gradient(135deg, #fdcb6e, #e17055)',
    neutral: '#f8f9fa'
  }
  return colors[scheme] || '#f8f9fa'
}

function getTextColor(scheme) {
  return ['excited', 'curious', 'deciding', 'interested'].includes(scheme) ? 'white' : '#333'
}

function getButtonColor(scheme) {
  const colors = {
    excited: '#ff4757',
    curious: '#0984e3',
    deciding: '#00b894', 
    interested: '#e17055',
    neutral: '#007acc'
  }
  return colors[scheme] || '#007acc'
}
COMPONENT_EOF

# Create the main page with AI products
cat > $PAGES_DIR/$PAGE_FILE <<'PAGE_EOF'
import NeuroProduct from '@/components/ai/NeuroProduct'

export default function Home() {
  const products = [
    { 
      id: 1, 
      name: 'AI-Powered Smartwatch', 
      price: 299, 
      description: 'Monitors your health with advanced AI algorithms and emotional intelligence sensors.'
    },
    { 
      id: 2, 
      name: 'Quantum Headphones', 
      price: 199, 
      description: 'Noise cancellation with neural processing that adapts to your brain waves.'
    },
    { 
      id: 3, 
      name: 'Neuro Glasses', 
      price: 399, 
      description: 'AR glasses with emotional intelligence that respond to your mood and intentions.'
    },
    { 
      id: 4, 
      name: 'Holographic Display', 
      price: 599, 
      description: '3D projections with gesture control powered by quantum computing.'
    },
    { 
      id: 5, 
      name: 'Mindful Meditation Orb', 
      price: 159, 
      description: 'A calming sphere that syncs with your brainwaves to enhance meditation and focus.'
    },
    { 
      id: 6, 
      name: 'Quantum Laptop', 
      price: 1299, 
      description: 'Next-generation computing with AI co-processor that learns your work patterns.'
    }
  ]

  return (
    <main style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ 
        background: 'rgba(255,255,255,0.95)', 
        borderRadius: '20px', 
        padding: '2rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🧠 Neuro-Merchant AI Store
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.8,
            marginBottom: '1rem'
          }}>
            Welcome to the future of shopping - where prices adapt in real-time based on emotional engagement
          </p>
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            🚀 LIVE AI PRICING ACTIVE
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gap: '2rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' 
        }}>
          {products.map(product => (
            <NeuroProduct key={product.id} product={product} />
          ))}
        </div>

        <div style={{ 
          marginTop: '4rem', 
          padding: '2rem', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖 AI-Powered Features Active</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <h3>Emotional Pricing</h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Prices adapt based on engagement level</p>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3>Dynamic Descriptions</h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Product text changes in real-time</p>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💫</div>
              <h3>Adaptive CTAs</h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Buttons change based on customer mood</p>
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔮</div>
              <h3>Real-time Optimization</h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Everything updates every 10 seconds</p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1rem',
          background: '#f8f9fa',
          borderRadius: '12px',
          border: '2px dashed #ddd'
        }}>
          <p style={{ margin: 0, opacity: 0.7 }}>
            💡 <strong>Watch the magic happen!</strong> Prices, colors, and text will change automatically based on simulated customer emotions.
          </p>
        </div>
      </div>
    </main>
  )
}
PAGE_EOF

echo ""
echo "🎉 FIXED AI INTEGRATION COMPLETE!"
echo "=================================="
echo "🤖 Neuro-Merchant AI Features Added to: $PAGES_DIR/$PAGE_FILE"
echo ""
echo "✅ Emotional Response Pricing"
echo "✅ Dynamic Product Descriptions" 
echo "✅ Adaptive Call-to-Actions"
echo "✅ Real-time Customer Emotion Detection"
echo "✅ AI-Generated Color Schemes"
echo ""
echo "🚀 Your store will automatically reload with AI features!"
echo "📱 Visit: http://localhost:3000"
echo ""
echo "💡 Watch how prices and text change based on simulated emotions!"
echo "   Each product updates every 10 seconds with new emotions and pricing!"
