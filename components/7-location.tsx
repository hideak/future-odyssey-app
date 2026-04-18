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
          <h2 className="text-4xl font-bold font-serif text-slate-100">Igreja Bom Jardim 2</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nossa união acontecerá na Igreja do Bairro Bom Jardim 2, com a celebração da cerimônia junto ao Pastor Ronaldo.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl"><Calendar className="text-purple-300" /></div>
              <div>
                <p className="font-bold text-slate-200">Data e Hora</p>
                <p className="text-slate-300">Sábado, 12 de Junho de 2026 às 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl"><MapPin className="text-purple-300" /></div>
              <div>
                <p className="font-bold text-slate-200">Localização</p>
                <p className="text-slate-300">R. Oscár Gonçalves, 322 - Bom Jardim, Ipatinga - MG</p>
              </div>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/ezYQExTbgH8i8gFx8" target="_blank">
            <button className="w-full md:w-auto px-8 py-4 bg-slate-200 text-[#1b1c26] font-bold rounded-2xl hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all cursor-pointer">
              Obter Rotas no Maps
            </button>
          </a>
        </div>
        <div className="flex-1 w-full aspect-square rounded-3xl overflow-hidden bg-black/40 border border-white/10 relative group">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/30 via-transparent to-transparent group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.9511506568658!2d-42.58120664749376!3d-19.475745598535156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafff8577cc4711%3A0xb9584c1e69ce55ba!2sIgreja%20Assembleia%20de%20Deus%20Bom%20Jardim%202!5e0!3m2!1spt-BR!2sbr!4v1776542485415!5m2!1spt-BR!2sbr" width="400" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
