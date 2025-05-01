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
    src: "https://i.imgur.com/coH60Nbh.jpg",
    alt: "Glosadores e Associados"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Colóquio de negócios e planejamento financeiro"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Arquitetura clássica de interiores bancários"
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
              className={`w-full h-full object-cover ${image.id === 1 ? 'object-top' : 'object-center'}`}
            />
            {/* Overlay with gradient and classic pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#113457]/40 to-[#113457]/80"></div>
            
            {/* Classic banking ornament overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMTBtLTEgMGEgMSAxIDAgMCAxIDIgMGExIDEgMCAwIDEgLTIgMCIgc3Ryb2tlPSIjZDRhZjM3IiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30"></div>
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