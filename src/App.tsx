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
