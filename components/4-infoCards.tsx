import React from 'react';
import { Calendar, Camera, MapPin, Car } from 'lucide-react';

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1: Calendar */}
      <div className="p-8 rounded-3xl glass text-center hover:-translate-y-2 transition-all duration-300 group">
          <Calendar className="w-10 h-10 mx-auto text-yellow-400 mb-4 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-xl mb-3 text-slate-100">Reserve a Data</h4>
          <p className="text-sm text-slate-300 mb-6">Não perca o início desta nossa jornada espacial. Adicione ao seu calendário.</p>
          <a 
            href="/event/convite.ics" 
            download="convite.ics"
            className="inline-block px-6 py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 border border-yellow-400/50 rounded-full text-sm font-semibold transition-colors"
          >
            Save the Date
          </a>
      </div>

      {/* Card 2: Instagram */}
      <div className="p-8 rounded-3xl glass text-center hover:-translate-y-2 transition-all duration-300 group">
          <Camera className="w-10 h-10 mx-auto text-pink-400 mb-4 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)] group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-xl mb-3 text-slate-100">Siga o Casal</h4>
          <p className="text-sm text-slate-300 mb-6">Acompanhe os preparativos e nossa jornada em casal no Instagram.</p>
          <div className="flex flex-col gap-2">
            <a 
              href="https://instagram.com/eu_juniorluna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
            >
              @eu_juniorluna
            </a>
            <a 
              href="https://instagram.com/eu_brendaluna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
            >
              @eu_brendaluna
            </a>
          </div>
      </div>

      {/* Card 3: Location / Uber */}
      <div className="p-8 rounded-3xl glass text-center hover:-translate-y-2 transition-all duration-300 group">
          <MapPin className="w-10 h-10 mx-auto text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)] group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-xl mb-3 text-slate-100">Como Chegar</h4>
          <p className="text-sm text-slate-300 mb-6">Trace sua rota até o local do nosso casamento ou peça um transporte via aplicativo da Uber.</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-400/20 hover:bg-blue-400/30 text-blue-400 border border-blue-400/50 rounded-full text-sm font-semibold transition-colors"
              title="Google Maps"
            >
              <MapPin size={16} /> Maps
            </a>
            <a 
              href="https://m.uber.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-100/10 hover:bg-slate-100/20 text-slate-100 border border-slate-100/30 rounded-full text-sm font-semibold transition-colors"
              title="Chamar Uber"
            >
              <Car size={16} /> Uber
            </a>
          </div>
      </div>
    </div>
  );
};

export default InfoCards;
