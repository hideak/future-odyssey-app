"use client";

import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const [isMarried, setIsMarried] = useState(false);

  const weddingDate = useMemo(() => new Date(WEDDING_CONFIG.dataCasamento), []);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setIsMarried(false);
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsMarried(true);
        const elapsed = Math.abs(difference);
        setTimeLeft({
          dias: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
          horas: Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((elapsed % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

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

      <div className="flex flex-col items-center gap-4 w-full">
        {isMarried && (
          <p className="text-xl md:text-2xl font-serif text-purple-300 animate-fade-in mb-2">
            Casados há:
          </p>
        )}
        
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
      </div>

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
