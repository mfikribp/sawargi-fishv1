import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Membuat link whatsapp order otomatis
  const waNumber = "62895351230947";
  const message = encodeURIComponent(
    `Halo SawargiFish, saya mau pesan:\n` +
    `- ${product.name} (${product.weight})\n\n` +
    `Tolong kirimkan detail total harga dan ongkos kirim ya!`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl flex flex-col h-full"
    >

      {/* GAMBAR PRODUK PLACEHOLDER */}
      <div className={`relative aspect-[4/3] w-full bg-gradient-to-tr ${product.imagePlaceholder} p-1 flex items-center justify-center`}>
        <div className="w-[90%] h-[90%] bg-white/40 backdrop-blur-[1px] rounded-2xl border-2 border-dashed border-gray-600/20 flex flex-col items-center justify-center p-4 text-center">
          {/* Image tag kosong untuk foto produk asli */}
          <img
            src=""
            alt={product.name}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
            className="w-full h-full object-cover rounded-xl mb-2"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500/60 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-gray-600 font-medium">Foto {product.name}</span>
          <span className="text-[9px] text-gray-500 opacity-75">(Rekomendasi ukuran: 300x225 px)</span>
        </div>

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1">
          {product.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* DETAIL INFO */}
      <div className="p-6 flex flex-col flex-grow space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
          {/* Berat Ikan */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7h3.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5H6" />
            </svg>
            <span>{product.weight}</span>
          </div>

          <span className="text-gray-300">•</span>

          {/* Tingkat Pedas */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-500 mr-0.5">Pedas:</span>
            <div className="flex space-x-0.5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <svg
                  key={idx}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-3.5 w-3.5 ${idx < product.spiciness ? 'text-orange-500 fill-orange-500' : 'text-gray-200'
                    }`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Harga Bersih</span>
            <span className="text-lg font-extrabold text-emerald-600">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          </div>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center space-x-1.5 transition-colors shadow-md shadow-emerald-600/10"
          >
            <span>Pesan (WA)</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>

    </motion.div>
  );
};
