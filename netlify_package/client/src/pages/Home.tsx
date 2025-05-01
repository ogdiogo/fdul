import { Helmet } from "react-helmet";
import NewsSection from "../components/NewsSection";
import ImageCarousel from "../components/ImageCarousel";
import Advertisement from "../components/Advertisement";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Glosadores e Associados - Soluções Bancárias Personalizadas</title>
        <meta name="description" content="Glosadores e Associados oferece soluções bancárias personalizadas com segurança e excelência para indivíduos e empresas." />
      </Helmet>
      
      <ImageCarousel />
      <NewsSection />
      <Advertisement />
    </>
  );
};

export default Home;
