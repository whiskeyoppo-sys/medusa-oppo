// components/Header.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, ShoppingBag, Menu } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-onyx/90 backdrop-blur-sm border-b border-dark-gray' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-serif tracking-wider">
            AETHER
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/new" className="hover:text-gold transition-colors">New Arrivals</Link>
            <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <Link href="/journal" className="hover:text-gold transition-colors">Journal</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gold transition-colors"><Search size={20} /></button>
          <Link href="/cart" className="hover:text-gold transition-colors"><ShoppingBag size={20} /></Link>
          <button className="md:hidden"><Menu size={24} /></button>
        </div>
      </div>
    </motion.header>
  );
};
