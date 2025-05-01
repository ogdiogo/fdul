const CreditAdvertisement = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Card principal */}
            <div className="bg-gradient-to-br from-[#113457] to-[#0c2641] rounded-xl shadow-lg p-6 border border-[#d4af37]/20 flex flex-col md:flex-row">
              {/* Logo */}
              <div className="flex flex-col items-center mr-8 mb-6 md:mb-0">
                <div className="relative">
                  <div className="p-1 bg-gradient-to-b from-[#d4af37]/20 to-[#d4af37]/5 rounded-lg border border-[#d4af37]/30 shadow-md">
                    <img 
                      src="https://i.imgur.com/YjJtEwQh.jpg" 
                      alt="Logo Glosadores e Associados" 
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#d4af37] mt-4 border-b border-[#d4af37] pb-2 text-center">Soluções de Crédito</h3>
              </div>
              
              {/* Opções de crédito */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Opção de crédito 1 */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Habitação</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Taxa de juro a partir de 2,5% e financiamento até 90%.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">2,5% - 3,8%</span>
                  </div>
                </div>
                
                {/* Opção de crédito 2 */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Pessoal</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Aprovação rápida e prestações mensais fixas.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">4,9% - 8,7%</span>
                  </div>
                </div>
                
                {/* Opção de crédito 3 */}
                <div className="bg-[#081b33]/30 rounded-lg p-4 border-l-2 border-[#d4af37]">
                  <h4 className="text-[#d4af37] font-semibold text-base">Crédito Automóvel</h4>
                  <p className="text-[#f5f5dc] text-sm mt-2">Financiamento até 100% para veículos novos e usados.</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-[#f5f5dc] font-bold mr-1 text-xs">TAN:</span>
                    <span className="text-[#d4af37] text-xs">3,8% - 6,5%</span>
                  </div>
                </div>
              </div>
              
              {/* Botão de ação */}
              <div className="mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
                <div className="bg-[#d4af37] hover:bg-[#c09c33] transition-colors duration-300 text-[#113457] font-bold text-center py-3 px-4 rounded-lg cursor-pointer whitespace-nowrap">
                  Solicitar Simulação
                </div>
                <p className="text-[#f5f5dc]/70 text-xs mt-2 text-center">Sujeito a análise e aprovação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditAdvertisement;