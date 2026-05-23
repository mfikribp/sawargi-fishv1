import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 flex items-center bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-12">
        
        {/* Kiri: Teks Promosi */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Segar & Praktis
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Nikmati Ikan Marinasi <br />
            <span className="text-emerald-600">Siap Masak</span> Kaya Rempah!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Solusi praktis makan sehat dan enak setiap hari. Ikan dibersihkan higienis, dibumbui dengan rempah alami pilihan meresap sempurna, tinggal goreng atau bakar tanpa ribet!
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#produk" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-600/30 transition-all text-center"
            >
              Lihat Varian Ikan
            </a>
            <a 
              href="#keunggulan" 
              className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-xl transition-all text-center"
            >
              Mengapa Kami?
            </a>
          </div>
        </motion.div>

        {/* Kanan: Visual & Placeholder Gambar Utama */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Dekorasi Latar Belakang Lingkaran */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-100/70 -z-10 blur-xl animate-pulse" />

          {/* Kotak Gambar Utama (Placeholder) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-1 shadow-2xl"
          >
            <div className="w-full h-full bg-slate-900/10 backdrop-blur-[2px] rounded-[22px] border-4 border-dashed border-white/40 flex flex-col items-center justify-center text-white p-6 text-center">
              {/* Image tag kosong untuk produk utama / banner */}
              <img 
                src="" 
                alt="Banner Utama Ikan Marinasi" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover rounded-xl mb-3"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-bold text-lg">Foto Produk Unggulan UMKM</p>
              <p className="text-xs opacity-75 mt-1">Ganti dengan foto ikan bumbu kuning/pedas yang menggiurkan (400x300 px)</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
