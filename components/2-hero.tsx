"use client";

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [timeStatus, setTimeStatus] = useState<'counting' | 'today' | 'past'>('counting');

  const weddingDate = useMemo(() => new Date(WEDDING_CONFIG.dataCasamento), []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weddingDay = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), weddingDate.getDate());

      if (today > weddingDay) {
        setTimeStatus('past');
      } else if (today.getTime() === weddingDay.getTime()) {
        setTimeStatus('today');
      } else {
        setTimeStatus('counting');
        const distance = weddingDate.getTime() - now.getTime();
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      
      <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-6 text-slate-100 drop-shadow-lg animate-slide-in-top fill-mode-both">
        Através do Universo.
      </h1>
      
      <div className="flex flex-col items-center gap-6 mb-12 animate-zoom-in fill-mode-both">
        <p className="text-sm md:text-base text-slate-400 font-light tracking-widest uppercase">
          Vamos celebrar o amor?
        </p>
        <p className="text-6xl md:text-8xl font-cursive text-purple-200 drop-shadow-[0_0_15px_rgba(216,180,254,0.3)] mt-2">
          Junior <br /> <span className="text-7xl">&</span> <br /> Brenda
        </p>
      </div>

      {timeStatus === 'counting' && (
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl w-full mx-auto animate-slide-in-bottom fill-mode-both">
          {[
            { label: 'Dias', value: timeLeft.dias },
            { label: 'Horas', value: timeLeft.horas },
            { label: 'Minutos', value: timeLeft.minutos },
            { label: 'Segundos', value: timeLeft.segundos }
          ].map((item) => (
            <div key={item.label} className="glass p-4 rounded-2xl">
              <span className="block text-3xl md:text-5xl font-mono font-bold text-purple-300 drop-shadow-md">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 mt-1 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {timeStatus === 'today' && (
        <div className="glass p-8 rounded-3xl max-w-xl mx-auto animate-pulse animate-fade-in fill-mode-both">
          <p className="text-3xl md:text-5xl font-serif text-purple-300">O grande dia chegou!</p>
        </div>
      )}

      {timeStatus === 'past' && (
        <div className="glass p-8 rounded-3xl max-w-xl mx-auto animate-fade-in fill-mode-both">
          <p className="text-3xl md:text-4xl font-serif text-slate-300">O casamento foi finalizado</p>
        </div>
      )}

      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 flex flex-col items-center animate-bounce text-slate-400 hover:text-white transition-colors cursor-pointer animate-fade-in fill-mode-both"
      >
        <span className="text-xs uppercase tracking-widest mb-1 font-semibold opacity-80">Arrasta pra cima</span>
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
