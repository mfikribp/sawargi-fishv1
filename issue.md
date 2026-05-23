# SPESIFIKASI TEKNIS: Pembuatan Landing Page UMKM Ikan Marinasi ("SawargiFish")

Dokumen ini berisi instruksi tingkat rendah (low-level) dan sangat detail untuk membuat halaman landing page usaha mikro, kecil, dan menengah (UMKM) penjualan Ikan Marinasi Siap Masak menggunakan **React**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**. 

---

## 🛠️ TEKNOLOGI STACK
1. **Framework**: React (Functional Components dengan Hooks)
2. **Bahasa**: TypeScript (wajib tipe data eksplisit)
3. **Styling**: Tailwind CSS (desain modern, responsif, dark/light harmonious)
4. **Animasi**: Framer Motion (transisi smooth, hover effects, dan scroll-triggered animations)

---

## 📂 STRUKTUR FOLDER YANG DIREKOMENDASIKAN
```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── ProductCard.tsx
│   ├── ProductList.tsx
│   ├── OrderSteps.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── App.tsx
└── main.tsx
```

---

## 📋 INSTRUKSI IMPLEMENTASI DETIL (LOW-LEVEL PROMPT)

### 1. Data Model (`src/data/products.ts`)
Buat tipe data dan list produk statis dengan struktur data berikut:
```typescript
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string; // contoh: "500g" atau "1 Ekor"
  imagePlaceholder: string; // warna latar untuk kotak gambar placeholder (misal: "bg-amber-100")
  spiciness: 1 | 2 | 3; // level pedas marinasi
  tags: string[]; // contoh: ["Paling Laris", "Bumbu Kuning", "Pedas Manis"]
}

export const MARINATED_FISH_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Nila Marinasi Bumbu Kuning",
    description: "Ikan Nila segar pilihan yang dimarinasi dengan kunyit asli, bawang putih, ketumbar, dan rempah alami khas Sunda. Siap goreng atau bakar.",
    price: 35000,
    weight: "500g (Isi 2-3 Ekor)",
    imagePlaceholder: "from-amber-200 to-orange-100",
    spiciness: 1,
    tags: ["Bestseller", "Bumbu Kuning"]
  },
  {
    id: "prod-2",
    name: "Lele Marinasi Pedas Gurih",
    description: "Ikan Lele bersih tanpa kepala yang dimarinasi dengan bumbu pedas meresap hingga ke dalam daging. Sangat gurih dan garing saat digoreng.",
    price: 28000,
    weight: "500g (Isi 4-5 Ekor)",
    imagePlaceholder: "from-red-200 to-orange-100",
    spiciness: 3,
    tags: ["Pedas", "Siap Goreng"]
  },
  {
    id: "prod-3",
    name: "Gurame Marinasi Saus Madu",
    description: "Ikan Gurame porsi besar dengan marinasi bumbu manis gurih madu dan bawang bombay. Cocok untuk hidangan spesial keluarga.",
    price: 55000,
    weight: "600g - 700g (Isi 1 Ekor)",
    imagePlaceholder: "from-yellow-200 to-amber-100",
    spiciness: 1,
    tags: ["Premium", "Manis Gurih"]
  },
  {
    id: "prod-4",
    name: "Patin Fillet Marinasi Kemangi",
    description: "Daging fillet ikan Patin tanpa duri yang dimarinasi dengan perasan jeruk nipis dan daun kemangi segar, menghasilkan aroma khas anti-amis.",
    price: 42000,
    weight: "400g (Fillet)",
    imagePlaceholder: "from-emerald-200 to-teal-100",
    spiciness: 2,
    tags: ["Bebas Duri", "Wangi Kemangi"]
  }
];
```

---

### 2. Komponen Navbar (`src/components/Navbar.tsx`)
Implementasikan komponen navigasi atas dengan kriteria berikut:
* **Logo Placeholder**: Buat elemen kotak bergaris putus-putus (`border-dashed`) dengan logo teks sementara agar pengguna dapat menggantinya dengan mudah nanti.
* **Sticky & Blur**: Tambahkan efek backdrop-blur pada navbar saat halaman di-scroll.
* **HTML & Tailwind Code Structure**:
  ```tsx
  import React, { useState, useEffect } from 'react';
  import { motion } from 'framer-motion';

  export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* LOGO UMKM PLACEHOLDER */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-50 flex items-center justify-center overflow-hidden" title="Tempat Logo UMKM (64x64 px)">
              {/* Image tag kosong untuk logo */}
              <img 
                src="" 
                alt="Logo SawargiFish" 
                onError={(e) => {
                  // Fallback jika src kosong agar tetap terlihat rapi
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
              <span className="text-[10px] text-emerald-600 font-bold text-center leading-none">LOGO</span>
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              SawargiFish
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">Beranda</a>
            <a href="#keunggulan" className="hover:text-emerald-600 transition-colors">Keunggulan</a>
            <a href="#produk" className="hover:text-emerald-600 transition-colors">Menu Ikan</a>
            <a href="#cara-pesan" className="hover:text-emerald-600 transition-colors">Cara Pesan</a>
          </div>

          {/* CTA BUTTON */}
          <div>
            <motion.a
              href="#produk"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
            >
              Pesan Sekarang
            </motion.a>
          </div>
        </div>
      </nav>
    );
  };
  ```

---

### 3. Komponen Hero (`src/components/Hero.tsx`)
Gunakan kombinasi layout flexbox/grid yang modern dengan ilustrasi di sebelah kanan (menggunakan placeholder animasi) dan teks persuasi di sebelah kiri.
* **Animasi Framer Motion**:
  * Teks judul masuk dengan efek memudar ke atas (`opacity: 0, y: 30` ke `opacity: 1, y: 0`).
  * Elemen visual berputar secara halus atau naik turun (`animate={{ y: [0, -12, 0] }}`) untuk memberi kesan dinamis.
* **HTML & Tailwind Code Structure**:
  ```tsx
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
  ```

---

### 4. Komponen Keunggulan (`src/components/Features.tsx`)
Menampilkan nilai jual unik dari ikan marinasi ini. Gunakan grid 3 kolom.
* **Spesifikasi Keunggulan**:
  1. **Higienis & Bersih**: Ikan disiangi, dibuang sisik & kotorannya, dicuci bersih dengan air steril.
  2. **Rempah Alami 100%**: Tanpa pengawet buatan dan pewarna kimia. Menggunakan racikan kunyit, jahe, bawang, dan cabai asli.
  3. **Praktis (Tinggal Masak)**: Menghemat waktu dapur. Cukup keluarkan dari freezer, diamkan sebentar, lalu langsung masak.
* **HTML & Tailwind Code Structure**:
  ```tsx
  import React from 'react';
  import { motion } from 'framer-motion';

  const FEATURES = [
    {
      icon: "✨",
      title: "Bersih & Higienis",
      desc: "Ikan dicuci bersih, dibuang isi perut & insangnya. Anda tinggal langsung mengolah tanpa perlu repot membersihkannya lagi."
    },
    {
      icon: "🌱",
      title: "Bumbu Rempah Alami",
      desc: "Menggunakan resep rahasia keluarga dengan bahan 100% alami asli Indonesia tanpa pengawet atau penyedap berlebih."
    },
    {
      icon: "⚡",
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
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  ```

---

### 5. Komponen Card Produk (`src/components/ProductCard.tsx`)
Card interaktif dengan animasi hover, menampilkan detail produk serta tombol order WhatsApp otomatis.
* **Animasi Framer Motion**: `whileHover={{ y: -8, scale: 1.02 }}`.
* **Integrasi WhatsApp**: Membuat URL yang otomatis mengisi pesan chat saat diklik.
* **HTML & Tailwind Code Structure**:
  ```tsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import { Product } from '../data/products';

  interface ProductCardProps {
    product: Product;
  }

  export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    // Membuat link whatsapp order otomatis
    const waNumber = "6281234567890"; // Ganti dengan nomor WhatsApp UMKM yang asli
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
            <span className="text-xs text-gray-600 font-medium">Foto ${product.name}</span>
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

          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <span>⚖️ {product.weight}</span>
            <span>•</span>
            <span>🌶️ Pedas: {Array(product.spiciness).fill("🔥").join("")}</span>
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
  ```

---

### 6. Komponen List Produk & Filter (`src/components/ProductList.tsx`)
Menampilkan katalog produk dengan fitur filter kategori interaktif agar dinamis.
* **HTML & Tailwind Code Structure**:
  ```tsx
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
  ```

---

### 7. Komponen Cara Pesan (`src/components/OrderSteps.tsx`)
Langkah-langkah pemesanan yang sederhana menggunakan visual list.
* **HTML & Tailwind Code Structure**:
  ```tsx
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
  ```

---

### 8. Komponen Footer & Info Kontak (`src/components/Footer.tsx`)
Footer lengkap dengan link kontak sosial media, info outlet fisik, dan placeholder untuk logo.
* **HTML & Tailwind Code Structure**:
  ```tsx
  import React from 'react';

  export const Footer: React.FC = () => {
    return (
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          
          {/* Kolom 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-emerald-400 bg-slate-800 flex items-center justify-center overflow-hidden" title="Tempat Logo UMKM (Footer)">
                <img 
                  src="" 
                  alt="Logo SawargiFish" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="w-full h-full object-cover"
                />
                <span className="text-[10px] text-emerald-400 font-bold leading-none">LOGO</span>
              </div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                SawargiFish
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Penyedia ikan marinasi siap masak paling lezat, higienis, dan praktis. Membantu menghadirkan hidangan istimewa di rumah Anda dengan mudah.
            </p>
          </div>

          {/* Kolom 2: Jam Operasional & Alamat */}
          <div className="space-y-4">
            <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Hubungi & Kunjungi</h4>
            <ul className="text-slate-400 text-xs space-y-2 leading-relaxed">
              <li>📍 Gang H. Kodir, RT 03/04, Coblong, Kota Bandung</li>
              <li>📞 WhatsApp: +62 812-3456-7890</li>
              <li>🕒 Jam Operasional: Setiap Hari (08.00 - 18.00 WIB)</li>
            </ul>
          </div>

          {/* Kolom 3: Sosial Media */}
          <div className="space-y-4">
            <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Ikuti Sosial Media</h4>
            <p className="text-slate-400 text-xs">Dapatkan info promo menarik dan tips memasak praktis lewat media sosial kami:</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-xs">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-xs">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-xs">
                WA
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SawargiFish. Seluruh hak cipta dilindungi.</p>
          <p className="mt-2 sm:mt-0">Dibuat dengan ❤️ untuk UMKM Ikan Marinasi</p>
        </div>
      </footer>
    );
  };
  ```

---

### 9. Root Component (`src/App.tsx`)
Satukan semua bagian ke dalam komponen utama `App.tsx` dengan transisi global.
* **HTML & Tailwind Code Structure**:
  ```tsx
  import React from 'react';
  import { Navbar } from './components/Navbar';
  import { Hero } from './components/Hero';
  import { Features } from './components/Features';
  import { ProductList } from './components/ProductList';
  import { OrderSteps } from './components/OrderSteps';
  import { Footer } from './components/Footer';

  const App: React.FC = () => {
    return (
      <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-900 scroll-smooth">
        {/* Navigasi Utama */}
        <Navbar />

        {/* Bagian Hero Banner */}
        <Hero />

        {/* Bagian USP / Keunggulan */}
        <Features />

        {/* Bagian Katalog Produk & Filter */}
        <ProductList />

        {/* Bagian Cara Memesan */}
        <OrderSteps />

        {/* Bagian Kaki Halaman & Kontak */}
        <Footer />
      </div>
    );
  };

  export default App;
  ```

---

## 💡 CATATAN PENTING UNTUK PROSES INTEGRASI (PERLU DIATUR OLEH MODEL):
1. **Logo Image Placeholder**: Pastikan seluruh tag `<img src="" />` untuk logo ditaruh di dalam wadah (container) dengan ukuran tetap (fixed size) dan mempunyai backup UI (seperti teks "LOGO" atau ikon SVG) agar tidak rusak ketika URL gambar kosong.
2. **WhatsApp API Integration**: Pastikan nomor handphone dan struktur pesan di-encode menggunakan `encodeURIComponent()` untuk menghindari kegagalan URL saat diarahkan ke browser/aplikasi WhatsApp.
3. **Responsive Web Design**: Gunakan modifier `md:` dan `sm:` di Tailwind CSS untuk memastikan layout grid berpindah dari satu kolom di mobile ke empat kolom di layar besar.
4. **Framer Motion Viewport-Trigger**: Gunakan atribut `whileInView` dan `viewport={{ once: true }}` pada Framer Motion agar animasi hanya berputar/terpicu sekali saat di-scroll ke bawah oleh pengguna.
