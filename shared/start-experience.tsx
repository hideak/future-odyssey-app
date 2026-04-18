"use client";

import { useState, useRef } from 'react';
import { Music } from 'lucide-react';

interface StartExperienceProps {
  onStart: () => void;
}

export default function StartExperience({ onStart }: StartExperienceProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
    onStart();
  };

  return (
    <>
      <audio ref={audioRef} src="/music/audio.mp3" loop />
      {!hasStarted && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1b1c26]/40 backdrop-blur-[2px] transition-all duration-1000">
          <button 
            onClick={startExperience}
            className="group relative flex flex-col items-center gap-12 cursor-pointer"
          >
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 scale-150 blur-xl animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-purple-400/10 scale-200 blur-2xl animate-pulse delay-700" />
              
              {/* Main Button */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/10 group-active:scale-95 transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <Music className="w-10 h-10 md:w-14 md:h-14 text-slate-100 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="text-slate-300 font-light tracking-[0.3em] uppercase text-sm md:text-base text-center">
              <div className="mb-2">Vamos celebrar o amor?</div>
              <div>Toque para iniciar e aumente o volume.</div>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
