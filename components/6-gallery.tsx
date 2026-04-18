"use client";

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/wedding';

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth; 
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ 
        left: targetScroll, 
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    if (isPaused || selectedImage) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, selectedImage]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <section className="glass rounded-[3rem] p-8 md:p-12 overflow-hidden">
      <h2 className="text-4xl font-bold font-serif text-slate-100 mb-8 text-center">Nossos Momentos</h2>
      
      <div className="relative group px-4">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {WEDDING_CONFIG.fotos.map((foto, idx) => (
            <div 
              key={idx}
              className="flex-none w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-start aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setSelectedImage(foto)}
            >
              <img 
                src={foto} 
                alt={`Momento do casal ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button 
          onClick={(e) => { e.stopPropagation(); scroll('left'); }}
          className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/60 backdrop-blur-xl text-white rounded-full hover:bg-purple-500/50 transition-all flex items-center justify-center border border-white/10 shadow-lg z-20"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); scroll('right'); }}
          className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/60 backdrop-blur-xl text-white rounded-full hover:bg-purple-500/50 transition-all flex items-center justify-center border border-white/10 shadow-lg z-20"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Fullscreen Lightbox View - Rendered via Portal to break out of .glass container */}
      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button at the top-right corner of the page */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 p-4 text-white/70 hover:text-white transition-colors z-[10000] cursor-pointer focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X size={48} strokeWidth={1.5} />
          </button>
          
          <div 
            className="w-full h-full flex items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Visualização em tela cheia" 
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
