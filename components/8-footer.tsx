import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-20 text-center border-t border-white/10 bg-black/20 backdrop-blur-[2px]">
      <div className="max-w-xs mx-auto mb-8 h-px bg-linear-to-r from-transparent via-purple-400/50 to-transparent" />
      <p className="text-slate-300 text-sm uppercase tracking-[0.5em] mb-4">Vamos celebrar o amor?</p>
      <p className="text-purple-200 font-cursive text-5xl">Junior & Brenda</p>
      <div className="mt-8 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-xs text-slate-400">❤️ 2026 Junior e Brenda</p>
      </div>
    </footer>
  );
};

export default Footer;
