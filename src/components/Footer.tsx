import React from 'react';
import logoImg from '../assets/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

        {/* Kolom 1: Logo & Tagline */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src={logoImg}
                alt="Logo SawargiFish"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Sawargi Fish
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Penyedia ikan marinasi siap masak paling lezat, higienis, dan praktis. Membantu menghadirkan hidangan istimewa di rumah Anda dengan mudah.
          </p>
        </div>

        {/* Kolom 2: Jam Operasional & Alamat */}
        <div className="space-y-4">
          <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Hubungi & Kunjungi</h4>
          <ul className="text-slate-400 text-xs space-y-3.5 leading-relaxed">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>JALAN JEMBUT NO. 99</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>WhatsApp: +62 895-3512-30947</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Jam Operasional: Setiap Hari 25 JAM/7</span>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Sosial Media */}
        <div className="space-y-4">
          <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Ikuti Sosial Media</h4>
          <p className="text-slate-400 text-xs">Dapatkan info promo menarik dan tips memasak praktis lewat media sosial kami:</p>
          <div className="flex space-x-3.5 pt-2">
            <a
              href="https://www.instagram.com/sawargi_fish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-slate-300 hover:text-white"
              title="Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.358-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SawargiFish.</p>
        <p className="mt-2 sm:mt-0">Dibuat dengan ❤️</p>
      </div>
    </footer>
  );
};
