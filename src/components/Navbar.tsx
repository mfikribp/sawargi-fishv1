import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#produk', label: 'Menu Ikan' },
    { href: '#cara-pesan', label: 'Cara Pesan' },
  ];

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Tunggu 300ms sampai animasi penutupan drawer (collapse) selesai
      // agar posisi koordinat scroll tidak tergeser oleh perubahan tinggi layar
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* LOGO UMKM */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-50 flex items-center justify-center overflow-hidden shadow-sm">
            <img
              src={logoImg}
              alt="Logo SawargiFish"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-extrabold text-xl text-black">
            Sawargi Fish
          </span>
        </div>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-emerald-600 transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA & MOBILE BUTTON */}
        <div className="flex items-center space-x-4">
          <motion.a
            href="#produk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-block bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
          >
            Pesan Sekarang
          </motion.a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-emerald-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#produk"
                  onClick={(e) => handleMobileClick(e, '#produk')}
                  className="block w-full bg-emerald-600 text-white text-center py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/10"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
