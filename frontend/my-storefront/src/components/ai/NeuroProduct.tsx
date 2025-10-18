'use client'

import { useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  price: number
  description: string
}

interface NeuroProductProps {
  product: Product
}

interface AIEnhancements {
  price: string
  description: string
  cta: string
  colorScheme: string
}

export default function NeuroProduct({ product }: NeuroProductProps) {
  const [aiEnhancements, setAiEnhancements] = useState<AIEnhancements | null>(null)
  const [customerEmotion, setCustomerEmotion] = useState<string>('neutral')

  // AI pricing algorithms
  const calculateEmotionalPrice = (basePrice: number, emotion: string): string => {
    const multipliers = {
      excited: 1.2,
      curious: 1.1,
      deciding: 0.95,
      interested: 1.0,
      neutral: 1.0
    }
    return (basePrice * (multipliers[emotion as keyof typeof multipliers] || 1.0)).toFixed(2)
  }

  const generateEmotionalDescription = (product: Product, emotion: string): string => {
    const descriptors = {
      excited: `🚀 LIMITED! ${product.name} - Everyone's talking about this! Get it before it's gone!`,
      curious: `🤔 ${product.name} - Discover why this is trending among savvy shoppers...`,
      deciding: `⭐ ${product.name} - Smart choice for smart shoppers. Balanced quality and value.`,
      interested: `👍 ${product.name} - Popular among customers with your taste. Frequently repurchased.`
    }
    return descriptors[emotion as keyof typeof descriptors] || product.description
  }

  const generateEmotionalCTA = (emotion: string): string => {
    const ctas = {
      excited: "🔥 Grab It Now!",
      curious: "🔍 Learn More", 
      deciding: "🤝 Add to Cart",
      interested: "🛒 Buy Now"
    }
    return ctas[emotion as keyof typeof ctas] || "Add to Cart"
  }

  const getColorScheme = (emotion: string): string => emotion

  const getBorderColor = (scheme: string): string => {
    const colors: { [key: string]: string } = {
      excited: '#ff4757',
      curious: '#0984e3',
      deciding: '#00b894',
      interested: '#e17055',
      neutral: '#ddd'
    }
    return colors[scheme] || '#ddd'
  }

  const getBackgroundColor = (scheme: string): string => {
    const colors: { [key: string]: string } = {
      excited: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      curious: 'linear-gradient(135deg, #74b9ff, #0984e3)',
      deciding: 'linear-gradient(135deg, #55efc4, #00b894)',
      interested: 'linear-gradient(135deg, #fdcb6e, #e17055)',
      neutral: '#f8f9fa'
    }
    return colors[scheme] || '#f8f9fa'
  }

  const getTextColor = (scheme: string): string => {
    return ['excited', 'curious', 'deciding', 'interested'].includes(scheme) ? 'white' : '#333'
  }

  const getButtonColor = (scheme: string): string => {
    const colors: { [key: string]: string } = {
      excited: '#ff4757',
      curious: '#0984e3',
      deciding: '#00b894', 
      interested: '#e17055',
      neutral: '#007acc'
    }
    return colors[scheme] || '#007acc'
  }

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
    const interval = setInterval(analyzeCustomer, 10000)
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
          fontWeight: 'bold',
          fontSize: '1.1rem'
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
