'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <motion.div
        className={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
        />
        {isHovered && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.quickAdd}>QUICK ADD</button>
          </motion.div>
        )}
      </motion.div>
      
      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
