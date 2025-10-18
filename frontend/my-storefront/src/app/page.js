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
