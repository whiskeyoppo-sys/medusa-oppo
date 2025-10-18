'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.scss';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600',
    title: 'ELEVATE YOUR ESSENCE',
    subtitle: 'Where craftsmanship meets the future',
    cta: 'DISCOVER NOW'
  },
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600',
    title: 'THE ART OF INNOVATION',
    subtitle: 'Precision engineered for the extraordinary',
    cta: 'EXPLORE COLLECTION'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.overlay} />
          <div className={styles.content}>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.button
              className={styles.ctaButton}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {slides[currentSlide].cta}
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
