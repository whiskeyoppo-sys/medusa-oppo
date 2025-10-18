import { Product } from './types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Quantum Timepiece',
    description: 'Swiss-engineered precision meets futuristic design. Crafted from aerospace-grade titanium with sapphire crystal.',
    price: 4999.00,
    category: 'Watches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1495856458515-0637185db551?w=800'
    ]
  },
  {
    id: '2',
    name: 'Aurora Wireless Speaker',
    description: 'Immersive 360° sound with AI-powered acoustics. Hand-polished aluminum housing.',
    price: 899.00,
    category: 'Audio',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800'
    ]
  },
  {
    id: '3',
    name: 'Nebula Smart Glasses',
    description: 'AR-enhanced vision with titanium frames. Crystal-clear displays merge reality and digital.',
    price: 2499.00,
    category: 'Wearables',
    images: [
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800'
    ]
  },
  {
    id: '4',
    name: 'Zephyr Minimalist Bag',
    description: 'Carbon fiber construction with magnetic closures. Water-resistant Italian leather trim.',
    price: 1299.00,
    category: 'Accessories',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800'
    ],
    colors: ['Black', 'Charcoal', 'Navy']
  }
];
