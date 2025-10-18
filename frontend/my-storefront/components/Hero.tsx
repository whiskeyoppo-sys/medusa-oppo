// components/Hero.tsx
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="h-screen relative flex items-center justify-center text-white text-center overflow-hidden">
      {/* High-resolution background image or video */}
      <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-down-view-of-a-person-in-black-walking-on-a-black-sand-41536-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <motion.div
        className="relative z-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4">Ethereal Forms</h1>
        <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto mb-8">
          Explore our latest collection where minimalist design meets timeless elegance.
        </p>
        <motion.button
          className="bg-transparent border border-gold text-gold font-bold py-3 px-10 hover:bg-gold hover:text-onyx transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Collection
        </motion.button>
      </motion.div>
    </div>
  );
};
