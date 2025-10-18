// components/Footer.tsx
import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-onyx border-t border-dark-gray py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif mb-4">AETHER</h3>
            <p className="text-light-gray text-sm">The future of luxury fashion, delivered.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-light-gray">
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Collections</a></li>
              <li><a href="#" className="hover:text-white">Gifts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-light-gray">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-light-gray hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-light-gray hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-light-gray hover:text-white"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-gray pt-6 text-center text-xs text-light-gray">
          <p>&copy; {new Date().getFullYear()} AETHER. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
