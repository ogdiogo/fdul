import AboutSection from "@/components/AboutSection";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Glosadores e Associados</title>
        <meta name="description" content="Conheça a missão e valores dos Glosadores e Associados no setor bancário." />
      </Helmet>
      
      <AboutSection />
    </>
  );
};

export default About;
