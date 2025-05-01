import BankingPrivacyContent from "@/components/BankingPrivacy";
import { Helmet } from "react-helmet";

const BankingPrivacy = () => {
  return (
    <>
      <Helmet>
        <title>Sigilo Bancário - Glosadores e Associados</title>
        <meta name="description" content="Nosso compromisso com a proteção da sua informação financeira nos Glosadores e Associados." />
      </Helmet>
      
      <BankingPrivacyContent />
    </>
  );
};

export default BankingPrivacy;
