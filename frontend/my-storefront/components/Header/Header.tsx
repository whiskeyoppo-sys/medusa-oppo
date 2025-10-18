'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiUser } from 'react-icons/fi';
import styles from './Header.module.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>LUXE</span>
          <span className={styles.logoAccent}>NOIR</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/collections">Collections</Link>
          <Link href="/new">New Arrivals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <FiSearch />
          </button>
          <button className={styles.iconBtn} aria-label="Account">
            <FiUser />
          </button>
          <button className={styles.iconBtn} aria-label="Shopping bag">
            <FiShoppingBag />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/collections">Collections</Link>
          <Link href="/new">New Arrivals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
