"use client";

import React, { useState } from 'react';
import { Heart, CreditCard, QrCode, Copy, Check } from 'lucide-react';

const GiftSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "exemplo@email.com";

  const giftOptions = [
    { label: "Ajuda para a Lua de Mel", value: "R$ 50,00" },
    { label: "Jantar Especial", value: "R$ 100,00" },
    { label: "Passeio Romântico", value: "R$ 200,00" },
    { label: "Presente de Casamento", value: "Valor Livre" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex p-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-pulse">
          <Heart className="w-8 h-8 text-purple-400 fill-purple-400/20" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-100">
          Presenteie o Casal
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Sua presença é o nosso maior presente! Mas, se você desejar nos agraciar com um gesto extra de carinho para o início da nossa vida a dois, ficaremos imensamente gratos. Cada detalhe da nossa jornada é mais especial com o seu apoio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pix Option */}
          <div className="glass p-8 rounded-3xl border-purple-500/30 hover:border-purple-500/50 transition-all group">
            <QrCode className="w-12 h-12 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4 text-slate-100">Pix</h3>
            <p className="text-slate-400 mb-6">Chave Pix (E-mail):</p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-purple-300 break-all mb-4">
              {pixKey}
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 mx-auto px-6 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 rounded-lg border border-purple-500/30 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check size={18} /> Copiado!
                </>
              ) : (
                <>
                  <Copy size={18} /> Copiar Chave Pix
                </>
              )}
            </button>
          </div>

          {/* Card Option */}
          <div className="glass p-8 rounded-3xl border-blue-500/30 hover:border-blue-500/50 transition-all group flex flex-col justify-between">
            <div>
              <CreditCard className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-slate-100">Cartão de Crédito</h3>
              <p className="text-slate-400 mb-8">Prefere presentear via cartão? Clique no botão abaixo para acessar nosso link de pagamento seguro.</p>
            </div>
            <a 
              href="#" 
              target="_blank"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/20"
            >
              Acessar Link de Pagamento
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {giftOptions.map((option) => (
            <div key={option.label} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-colors">
              <span className="font-semibold text-purple-300">{option.value}</span> — {option.label}
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default GiftSection;
