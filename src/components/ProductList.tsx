import React, { useState } from 'react';
import { MARINATED_FISH_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Bumbu Kuning', 'Pedas', 'Premium'];

  const filteredProducts = MARINATED_FISH_PRODUCTS.filter(prod => {
    if (selectedCategory === 'Semua') return true;
    return prod.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
  });

  return (
    <section id="produk" className="py-20 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Varian Ikan Marinasi Siap Masak
          </h2>
          <p className="text-gray-500 mt-4">
            Pilih ikan kesukaan Anda. Semua dibumbui higienis & langsung dibekukan untuk menjaga kesegaran rasa rempahnya.
          </p>
        </div>

        {/* FILTER KATEGORI BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-white text-gray-600 border border-gray-150 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
