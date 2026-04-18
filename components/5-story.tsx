"use client";

import React from 'react';
import { MessageCircle, MapPin, Heart, Globe } from 'lucide-react';

const Story = () => {
  return (
    <section className="relative overflow-hidden glass rounded-[3rem] p-8 md:p-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Heart className="w-16 h-16 text-pink-500 fill-pink-500/20 animate-pulse" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-serif text-center text-slate-100 mb-12">
          Um Amor Além das Fronteiras
        </h2>

        <div className="space-y-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              Nossa jornada começou em pontos distantes do mapa, separados por <span className="text-purple-300 font-bold">~6.583 km</span>. 
              De um lado, o calor do <span className="text-emerald-400 font-medium">Brasil</span>; do outro, a frio dos <span className="text-blue-400 font-medium">Estados Unidos</span>.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              O que para muitos parecia um abismo, para nós foi apenas o espaço necessário para o nosso amor florescer. 
              Aprendemos que a conexão verdadeira não depende de coordenadas geográficas, mas da sintonia entre dois corações que decidiram bater no mesmo ritmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center p-6 glass rounded-2xl hover:bg-white/10 transition-colors">
              <MessageCircle className="w-10 h-10 text-emerald-400 mb-4" />
              <span className="text-3xl font-bold text-slate-100">110.433</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Mensagens trocadas</span>
            </div>

            <div className="flex flex-col items-center p-6 glass rounded-2xl hover:bg-white/10 transition-colors">
              <Heart className="w-10 h-10 text-purple-400 mb-4 fill-purple-400/20" />
              <span className="text-3xl font-bold text-slate-100">3 anos e 5 meses</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">de Namoro</span>
            </div>

            <div className="flex flex-col items-center p-6 glass rounded-2xl hover:bg-white/10 transition-colors">
              <div className="relative mb-4">
                <MapPin className="w-10 h-10 text-blue-400" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              </div>
              <span className="text-3xl font-bold text-slate-100">Infinitas</span>
              <span className="text-sm text-slate-400 uppercase tracking-widest mt-2">Memórias</span>
            </div>
          </div>

          <p className="text-xl text-purple-200 font-serif italic pt-8">
            "Após quilômetros de saudade e oceanos de conversas, decidimos que nosso destino final é um só: o nós."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
