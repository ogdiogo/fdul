interface TeamMember {
  id: number;
  name: string;
  title: string;
  content: string[];
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Beatriz Abrantes",
    title: "Presidente & Fundadora",
    content: [
      "Beatriz Abrantes tem mais de 30 anos de experiência no sector financeiro internacional. Formada em Economia pela Universidade de Lisboa e com doutoramento em Finanças pela London School of Economics.",
      "Antes de fundar os Glosadores e Associados em 2005, ocupou cargos de direção em diversas instituições bancárias na Europa e América Latina. É reconhecida pela sua visão estratégica e compromisso com a excelência."
    ],
    image: "",
    alt: "Beatriz Abrantes"
  },
  {
    id: 2,
    name: "Gustavo Cordeiro",
    title: "Diretor de Operações Financeiras",
    content: [
      "Gustavo Cordeiro juntou-se à nossa equipa em 2010, trazendo consigo uma vasta experiência em operações bancárias e gestão de riscos. Formado em Gestão pelo ISCTE com MBA pela INSEAD.",
      "Sob a sua liderança, implementámos sistemas financeiros inovadores que melhoraram significativamente a segurança e eficiência das nossas operações, sempre mantendo o foco na satisfação dos nossos clientes."
    ],
    image: "",
    alt: "Gustavo Cordeiro"
  },
  {
    id: 3,
    name: "Gabriel Asseiceiro",
    title: "Diretor de Investimentos",
    content: [
      "Gabriel Asseiceiro é responsável pela estratégia de investimentos do banco desde 2012. Com formação em Matemática Aplicada pela Universidade do Porto e especialização em Mercados Financeiros pela Universidade de Chicago.",
      "A sua análise criteriosa e abordagem equilibrada entre risco e retorno tem permitido oferecer aos nossos clientes oportunidades de investimento consistentes e de qualidade superior, mesmo em períodos de volatilidade nos mercados."
    ],
    image: "",
    alt: "Gabriel Asseiceiro"
  },
  {
    id: 4,
    name: "Priscila Cunha",
    title: "Diretora de Relações Internacionais",
    content: [
      "Priscila Cunha coordena as nossas relações com instituições financeiras internacionais e clientes corporativos globais. Formada em Relações Internacionais pela Universidade Nova de Lisboa e com mestrado em Economia Internacional pela Sciences Po Paris.",
      "Com experiência prévia no Banco Mundial e em consultoria estratégica, a sua visão global e rede de contactos tem sido fundamental para a expansão internacional dos Glosadores e Associados."
    ],
    image: "",
    alt: "Priscila Cunha"
  },
  {
    id: 5,
    name: "Rodrigo Chaparro",
    title: "Diretor de Inovação e Tecnologia",
    content: [
      "Rodrigo Chaparro lidera a nossa transformação digital e iniciativas de inovação bancária. Formado em Engenharia Informática pelo Instituto Superior Técnico e com MBA pelo MIT.",
      "A sua experiência em fintech e banca digital tem sido essencial para desenvolver soluções tecnológicas seguras que mantêm os Glosadores e Associados na vanguarda do sector bancário, combinando tradição com inovação responsável."
    ],
    image: "",
    alt: "Rodrigo Chaparro"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081b33]">Sobre Nós</h2>
          <p className="mt-4 text-lg text-[#081b33]/70">Conheça mais sobre quem somos e nossa missão</p>
        </div>
        
        <div className="space-y-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 border border-[#d4af37]/10"
            >
              {/* Imagem sempre à esquerda */}
              <div className="md:w-1/2">
                <div className="bg-[#081b33]/5 rounded-lg overflow-hidden shadow-md border border-[#d4af37]/20 h-[400px] flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.alt} 
                      className="w-full h-full object-cover" 
                      width="600" 
                      height="400"
                    />
                  ) : (
                    <div className="text-center p-6">
                      <div className="mb-4 text-[#d4af37]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-[#081b33]/50 text-sm italic">Foto a ser adicionada</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Texto sempre à direita */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2 text-[#081b33]">{member.name}</h3>
                <p className="text-[#d4af37] font-medium mb-4">{member.title}</p>
                {member.content.map((paragraph, index) => (
                  <p key={index} className="text-[#081b33]/80 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
