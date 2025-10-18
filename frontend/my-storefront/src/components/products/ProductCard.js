'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="group relative bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-muted">
        <Image
          src={product.images[currentImage] || '/placeholder.jpg'}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-105 transition-transform duration-500`}
          onLoad={() => setImageLoaded(true)}
          priority={currentImage === 0}
        />
        
        {/* Image loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-xs line-clamp-2 mb-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${product.price}</span>
          <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
  )
}
