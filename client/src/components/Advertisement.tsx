import React from 'react';

const Advertisement = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-[#d4af37]/30">
        <div className="bg-gradient-to-r from-[#113457] to-[#1a4878] p-6 sm:p-10">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#d4af37] text-[#113457] text-xs font-bold tracking-wider uppercase">
            Publicidade
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#f5f5dc]">
                Nova Coleção de Tote Bags Marc Jacobs
              </h3>
              <p className="text-[#f5f5dc]/90 mb-6">
                Descubra o equilíbrio perfeito entre estilo e funcionalidade com a nova 
                coleção de Tote Bags da Marc Jacobs. Elegante, espaçosa e ideal para 
                o dia a dia ou ocasiões especiais.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Material premium de alta durabilidade</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Design atemporal e versátil</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mr-2"></div>
                  <p className="text-[#f5f5dc]/80">Compartimentos para organização perfeita</p>
                </div>
              </div>
              <div className="mt-8"></div>
            </div>
            
            <div className="relative">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-[#d4af37]/30">

                <div className="relative overflow-hidden h-80 flex items-center justify-center rounded-lg border border-[#d4af37]/30 shadow-inner">
                  <img 
                    src="https://i.imgur.com/Do7e1j3h.jpg" 
                    alt="Marc Jacobs Tote Bag" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#113457] to-transparent py-6">
                    <div className="text-center px-4">
                      <p className="text-[#d4af37] text-2xl font-bold">€ 399</p>
                      <p className="text-[#f5f5dc] text-sm font-medium">
                        Luxo e praticidade em uma peça exclusiva
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;