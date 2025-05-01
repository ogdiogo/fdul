import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

// Para personalizar com suas próprias imagens:
// 1. Faça upload das imagens para a pasta 'client/public/images/'
// 2. Altere os caminhos 'src' abaixo para algo como '/images/sua-imagem-1.jpg'
// Por exemplo: src: "/images/banner-1.jpg"

const images: CarouselImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Crédito Pessoal com Taxa Fixa"
  },
  {
    id: 2,
    src: "https://i.imgur.com/coH60Nbh.jpg",
    alt: "Glosadores e Associados"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "APP Glosadores e Associados - Uma app com tudo para todos"
  },
  {
    id: 4,
    src: "https://i.imgur.com/mw1BlBx.jpg",
    alt: "Glosadores e Associados - Interior de agência"
  }
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };
  
  return (
    <section className="relative bg-[#113457] overflow-hidden border-b-4 border-[#b8860b]/30">
      
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover ${image.id === 1 ? 'object-center' : 'object-center'}`}
            />
            {/* Overlay with gradient and classic pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#113457]/40 to-[#113457]/80"></div>
            
            {/* Classic banking ornament overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBtLTEgMGEgMSAxIDAgMCAxIDIgMGExIDEgMCAwIDEgLTIgMCIgc3Ryb2tlPSIjZDRhZjM3IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
            
            {/* Texto promocional para o primeiro slide - Crédito */}
            {image.id === 1 && (
              <div className="absolute inset-0 flex items-center px-6 md:px-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Lado esquerdo - Texto */}
                  <div className="flex flex-col justify-center text-left">
                    <div className="bg-[#113457]/80 p-6 md:p-8 rounded-xl border border-[#d4af37]/30 backdrop-blur-sm">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d4af37]">
                        Crédito Pessoal com Taxa Fixa
                      </h2>
                      <p className="text-xl md:text-2xl text-[#f5f5dc] mb-2">
                        TAEG desde 13,2%
                      </p>
                      <p className="text-xl md:text-2xl text-[#f5f5dc] mb-3">
                        Está na hora de começar os seus projetos
                      </p>
                      <p className="text-lg md:text-xl font-medium text-[#d4af37] mb-6">
                        Glosadores e Associados - É para Avançar!
                      </p>
                      
                      {/* Ícones representativos em linha */}
                      <div className="flex space-x-4 mb-6">
                        <div className="bg-[#113457]/80 p-3 rounded-full border border-[#d4af37]/30">
                          <svg className="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="bg-[#113457]/80 p-3 rounded-full border border-[#d4af37]/30">
                          <svg className="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <div className="bg-[#113457]/80 p-3 rounded-full border border-[#d4af37]/30">
                          <svg className="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div>
                        <button className="bg-[#d4af37] hover:bg-[#b8860b] text-[#113457] font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg shadow-lg border border-[#f5f5dc]/20">
                          Saiba Mais
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lado direito - Imagem do casal */}
                  <div className="hidden md:block">
                    <div className="relative h-full flex items-center justify-center">
                      <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl border-2 border-[#d4af37]/30">
                        <img 
                          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                          alt="Instituição de crédito" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#113457]/70 to-transparent"></div>
                        
                        {/* Moldura decorativa */}
                        <div className="absolute inset-0 border-4 border-[#d4af37]/10 m-3 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Texto promocional para o terceiro slide - APP */}
            {image.id === 3 && (
              <div className="absolute inset-0 flex items-center px-6 md:px-20">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Lado esquerdo - Texto */}
                  <div className="flex flex-col justify-center text-left">
                    <div className="bg-[#113457]/80 p-6 md:p-8 rounded-xl border border-[#d4af37]/30 backdrop-blur-sm">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#d4af37]">
                        APP Glosadores e Associados
                      </h2>
                      <p className="text-xl md:text-2xl text-[#f5f5dc] mb-4">
                        Uma app com tudo para todos
                      </p>
                      <p className="text-lg text-[#f5f5dc] mb-6">
                        Aceda às suas contas, faça transferências, consulte os seus investimentos e muito mais. 
                        Tudo na palma da sua mão com total segurança.
                      </p>
                      
                      {/* Ícones de recursos do app */}
                      <div className="flex space-x-4 mb-6">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#113457]/90 p-3 rounded-full border border-[#d4af37]/50 mb-2">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="text-sm text-[#f5f5dc]">Compras</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-[#113457]/90 p-3 rounded-full border border-[#d4af37]/50 mb-2">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="text-sm text-[#f5f5dc]">Transferências</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="bg-[#113457]/90 p-3 rounded-full border border-[#d4af37]/50 mb-2">
                            <svg className="w-7 h-7 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="text-sm text-[#f5f5dc]">Investimentos</span>
                        </div>
                      </div>
                      
                      <div>
                        <button className="bg-[#d4af37] hover:bg-[#b8860b] text-[#113457] font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg border border-[#f5f5dc]/20">
                          Baixar App
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lado direito - Imagem do smartphone */}
                  <div className="hidden md:block">
                    <div className="relative h-full flex items-center justify-center">
                      <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl border-2 border-[#d4af37]/30">
                        <img 
                          src="https://i.imgur.com/T5nzTNt.jpg" 
                          alt="APP Glosadores e Associados em smartphone" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#113457]/70 to-transparent"></div>
                        
                        {/* Moldura decorativa */}
                        <div className="absolute inset-0 border-4 border-[#d4af37]/10 m-3 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Ornamental side borders */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#113457]/80 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#113457]/80 to-transparent pointer-events-none"></div>
        
        <div className="absolute inset-0 flex items-center justify-between px-10">
          <button 
            onClick={goToPrevious}
            className="bg-[#113457]/60 text-[#d4af37] p-3 rounded-full hover:bg-[#1a4878] transition-colors border border-[#b8860b]/40 shadow-lg z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="bg-[#113457]/60 text-[#d4af37] p-3 rounded-full hover:bg-[#1a4878] transition-colors border border-[#b8860b]/40 shadow-lg z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 border ${index === currentImageIndex ? 'bg-[#d4af37] border-[#b8860b]' : 'bg-transparent border-[#d4af37]'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ImageCarousel;