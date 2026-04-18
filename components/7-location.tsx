import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Location = () => {
  return (
    <section className="glass rounded-[3rem] p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-medium">
            <MapPin size={14} /> Localização
          </div>
          <h2 className="text-4xl font-bold font-serif text-slate-100">A Base Estelar</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nossa união acontecerá no histórico Deck de Observação, com vista para a cintilante nebulosa da cidade. Um alinhamento perfeito de arquitetura e atmosfera.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl"><Calendar className="text-purple-300" /></div>
              <div>
                <p className="font-bold text-slate-200">Data e Hora</p>
                <p className="text-slate-300">Sábado, 15 de Junho de 2026 às 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl"><MapPin className="text-purple-300" /></div>
              <div>
                <p className="font-bold text-slate-200">Localização</p>
                <p className="text-slate-300">Via Galáctica 123, Distrito Estelar, Universo</p>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-slate-200 text-[#1b1c26] font-bold rounded-2xl hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all cursor-pointer">
            Obter Rotas no Maps
          </button>
        </div>
        <div className="flex-1 w-full aspect-square rounded-3xl overflow-hidden bg-black/40 border border-white/10 relative group">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/30 via-transparent to-transparent group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-60" />
              <MapPin className="relative z-10 w-12 h-12 text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
            <div className="mt-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-xs text-slate-300 border border-white/10 font-mono shadow-lg">
              CARREGANDO MAPA...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
