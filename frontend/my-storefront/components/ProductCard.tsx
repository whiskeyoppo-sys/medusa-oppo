// components/ProductCard.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.slug}`} passHref>
      <motion.div
        className="group relative block overflow-hidden cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-xl font-serif text-white">{product.name}</h3>
          <p className="text-md text-gold mt-1">${product.price.toFixed(2)}</p>
        </div>
      </motion.div>
    </Link>
  );
};
