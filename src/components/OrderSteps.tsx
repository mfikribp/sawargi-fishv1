import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: "01",
    title: "Pilih Menu Ikan",
    desc: "Pilih jenis ikan & bumbu marinasi favorit Anda pada katalog produk kami."
  },
  {
    num: "02",
    title: "Hubungi via WhatsApp",
    desc: "Klik tombol 'Pesan' untuk chat langsung dengan kami. Cantumkan jumlah dan alamat."
  },
  {
    num: "03",
    title: "Konfirmasi & Bayar",
    desc: "Kami menghitung total belanja & ongkos kirim. Bayar aman via transfer bank/E-Wallet."
  },
  {
    num: "04",
    title: "Ikan Dikirim Beku",
    desc: "Ikan dikirim menggunakan kurir instan/sameday dengan wadah isolasi agar tetap beku & segar."
  }
];

export const OrderSteps: React.FC = () => {
  return (
    <section id="cara-pesan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Proses Pemesanan Sangat Mudah
          </h2>
          <p className="text-gray-500 mt-4">
            Dari kolam segar langsung siap di penggorengan Anda hanya dengan beberapa langkah sederhana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <span className="text-5xl font-black text-emerald-100 block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
