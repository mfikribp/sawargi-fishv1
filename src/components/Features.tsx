import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Bersih & Higienis",
    desc: "Ikan dicuci bersih, dibuang isi perut & insangnya. Anda tinggal langsung mengolah tanpa perlu repot membersihkannya lagi."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22V12m0 0c-2.5-3.5-7-3-7-3s0 4 7 3zm0 0c2.5-3.5 7-3 7-3s0 4-7 3z" />
      </svg>
    ),
    title: "Bumbu Rempah Alami",
    desc: "Menggunakan resep rahasia keluarga dengan bahan 100% alami asli Indonesia tanpa pengawet atau penyedap berlebih."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Praktis & Hemat Waktu",
    desc: "Sangat cocok untuk ibu rumah tangga dan anak kos yang sibuk. Dari freezer langsung ke wajan dalam hitungan menit!"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mengapa Memilih Ikan Marinasi Kami?
          </h2>
          <p className="text-gray-500 mt-4">
            Kami berkomitmen menyajikan kelezatan instan berstandar tinggi untuk meja makan keluarga Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
