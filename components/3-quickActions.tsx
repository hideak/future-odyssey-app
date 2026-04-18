import React from 'react';
import { Rocket, Music, Camera, Heart } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a 
        href="https://wa.me/16034028611?text=Olá%20Junior!%20Gostaria%20de%20confirmar%20minha%20presença%20no%20seu%20casamento." 
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden p-8 rounded-3xl glass hover:border-purple-400/50 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 text-white">
          <Rocket size={80} />
        </div>
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-slate-100">
          <Music className="w-6 h-6 text-purple-300" /> Confirmar Presença
        </h3>
        <p className="text-slate-300 relative z-10">Junte-se à nossa celebração cósmica. Por favor, confirme sua presença diretamente com o noivo Junior.</p>
        <div className="mt-6 text-purple-300 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 relative z-10">
          Confirmar pelo WhatsApp →
        </div>
      </a>

      <a 
        href="https://photos.app.goo.gl/vkrqFxUqDQgEFk4Y9" 
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden p-8 rounded-3xl glass hover:border-blue-400/50 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 text-white">
          <Camera size={80} />
        </div>
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-slate-100">
          <Heart className="w-6 h-6 text-blue-300" /> Álbum de Fotos
        </h3>
        <p className="text-slate-300 relative z-10">Capture e compartilhe seus momentos favoritos conosco! Clique para ver as fotos e adicionar as suas também.</p>
        <div className="mt-6 text-blue-300 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 relative z-10">
          Ver e compartilhar fotos →
        </div>
      </a>
    </div>
  );
};

export default QuickActions;
