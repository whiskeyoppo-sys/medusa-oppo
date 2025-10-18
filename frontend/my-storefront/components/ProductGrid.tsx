// components/ProductGrid.tsx
import { ProductCard } from './ProductCard';

const sampleProducts = [
  { id: '1', name: 'Void Trench Coat', price: 750, image: '/images/product-1.jpg', slug: 'void-trench-coat' },
  { id: '2', name: 'Chrono Watch', price: 1200, image: '/images/product-2.jpg', slug: 'chrono-watch' },
  { id: '3', name: 'Apex Leather Boots', price: 550, image: '/images/product-3.jpg', slug: 'apex-leather-boots' },
  { id: '4', name: 'Origin Silk Scarf', price: 250, image: '/images/product-4.jpg', slug: 'origin-silk-scarf' },
];

export const ProductGrid = () => {
  return (
    <div className="bg-onyx py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">Featured Pieces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
