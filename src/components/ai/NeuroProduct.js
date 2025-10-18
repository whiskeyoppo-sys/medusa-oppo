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

  if (!aiEnhancements) return <div>Loading AI enhancements...</div>

  return (
    <div className={`neuro-product ${aiEnhancements.colorScheme}`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="ai-badge">🤖 AI Optimized</div>
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="ai-description">{aiEnhancements.description}</p>
        
        <div className="pricing">
          <span className="original-price">${product.price}</span>
          <span className="ai-price">${aiEnhancements.price}</span>
          <span className="emotion-badge">{customerEmotion}</span>
        </div>
        
        <button className={`neuro-button ${aiEnhancements.colorScheme}`}>
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
    excited: `🚀 LIMITED! ${product.name} - Everyone's talking about this!`,
    curious: `🤔 ${product.name} - Discover why this is trending...`,
    deciding: `⭐ ${product.name} - Smart choice for smart shoppers`,
    interested: `👍 ${product.name} - Popular among customers like you`
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
  const schemes = {
    excited: 'scheme-urgent',
    curious: 'scheme-curious', 
    deciding: 'scheme-calm',
    interested: 'scheme-warm'
  }
  return schemes[emotion] || 'scheme-neutral'
}
