import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Glosadores e Associados Lança Novo Programa de Investimentos Sustentáveis",
    date: "15 de Abril, 2025",
    description: "Conheça nosso novo programa de investimentos focado em empresas com práticas ambientais e sociais responsáveis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Investimentos Sustentáveis"
  },
  {
    id: 2,
    title: "Novas Medidas de Segurança para Transações Online",
    date: "02 de Abril, 2025",
    description: "Implementamos novas tecnologias de autenticação em duas etapas para garantir a segurança de suas operações bancárias online.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Segurança Digital"
  },
  {
    id: 3,
    title: "Glosadores e Associados Expande Rede de Agências no Interior",
    date: "18 de Março, 2025",
    description: "Inauguramos cinco novas agências no interior do país para estar mais próximos de nossos clientes em áreas em crescimento.",
    image: "https://i.imgur.com/VH0Odhoh.jpg",
    alt: "Novas Agências"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#081b33] mb-4">Notícias e Atualizações</h2>
            <div className="w-32 h-0.5 bg-gradient-gold mx-auto"></div>
            <div className="w-20 h-0.5 bg-gradient-gold mx-auto mt-1"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg hover:border-amber-500/50 transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="h-52 w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-[#b8860b] mb-3">
                  <CalendarClock className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#081b33]">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <a href="#" className="text-[#b8860b] font-medium hover:text-[#d4af37] inline-flex items-center font-serif">
                  Leia mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
