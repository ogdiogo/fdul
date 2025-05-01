import { CreditCard, Building, Lock, Users, Landmark, LineChart } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconBgColor 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <CreditCard className="h-7 w-7 text-primary" />,
      title: "Contas Bancárias Personalizadas",
      description: "Soluções de conta corrente e poupança adaptadas às suas necessidades financeiras com taxas competitivas.",
      iconBgColor: "bg-blue-50"
    },
    {
      icon: <Building className="h-7 w-7 text-primary" />,
      title: "Crédito Imobiliário",
      description: "Financiamento imobiliário com as melhores taxas do mercado e condições flexiveis para realizar o sonho da casa própria.",
      iconBgColor: "bg-blue-50"
    },
    {
      icon: <Lock className="h-7 w-7 text-primary" />,
      title: "Segurança Garantida",
      description: "Proteção de dados e transacões com os mais avançados sistemas de segurança e criptografia do mercado.",
      iconBgColor: "bg-blue-50"
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Atendimento Premium",
      description: "Equipe especializada disponível para oferecer atendimento personalizado e soluções sob medida para você.",
      iconBgColor: "bg-blue-50"
    },
    {
      icon: <Landmark className="h-7 w-7 text-primary" />,
      title: "Investimentos Estratégicos",
      description: "Diversifique seu portfólio com opções de investimentos que se alinham aos seus objetivos financeiros de curto e longo prazo.",
      iconBgColor: "bg-blue-50"
    },
    {
      icon: <LineChart className="h-7 w-7 text-primary" />,
      title: "Gestão Patrimonial",
      description: "Assessoria financeira completa para maximizar seu patrimônio e planejar sua saúde financeira com segurança.",
      iconBgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços Bancários</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Oferecemos uma ampla gama de serviços financeiros para atender às suas necessidades pessoais e empresariais com excelência e dedicação.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgColor={feature.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
