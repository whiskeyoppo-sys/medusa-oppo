import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import { sampleProducts } from '@/lib/sampleData';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductGrid 
        products={sampleProducts}
        title="CURATED SELECTION"
        subtitle="Where innovation meets impeccable taste"
      />
    </main>
  );
}
