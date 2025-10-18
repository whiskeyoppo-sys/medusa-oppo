'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  const [filter, setFilter] = useState('all')
  
  const filteredProducts = useMemo(() => {
    if (filter === 'all') return products
    return products.filter(product => product.category === filter)
  }, [products, filter])

  return (
    <div className="container mx-auto px-4">
      {/* Filter controls */}
      <div className="flex gap-4 mb-6 overflow-x-auto py-2">
        {['all', 'clothing', 'electronics', 'accessories'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              filter === category 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
