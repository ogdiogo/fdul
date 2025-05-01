const BankingPrivacy = () => {
  return (
    <section id="privacy" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#081b33]">Sigilo Bancário</h2>
        </div>
        
        {/* Imagem em destaque */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="https://i.imgur.com/eMn0mCOh.jpg" 
            alt="Sigilo Bancário" 
            className="w-full h-[400px] object-cover" 
          />
        </div>
        
        {/* Conteúdo principal com texto corrido */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-[#d4af37]/10">
          <div className="prose max-w-none text-[#081b33]/90">
            <p>
              Glosadores e Associados trata a sua privacidade e a segurança da sua informação financeira com extrema seriedade. Aderimos aos mais altos padrões de proteção de dados e leis de sigilo bancário para garantir que suas informações permaneçam confidenciais.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">What is Banking Secrecy?</h3>
            <p>
              Banking secrecy refers to the legal principle that banks must keep their clients' personal and financial information confidential. This includes account information, transaction details, and any other financial data associated with our services.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Our Commitment</h3>
            <p>
              Ao utilizar os serviços dos Glosadores e Associados, seus dados financeiros são protegidos por múltiplas camadas de segurança:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>End-to-end encryption for all financial transactions</li>
              <li>PCI DSS compliance for payment processing</li>
              <li>Restricted access to financial data, even within our organization</li>
              <li>Regular security audits and penetration testing</li>
              <li>No storage of complete credit card information on our servers</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Data Processing Practices</h3>
            <p>
              We only collect and process financial information that is absolutely necessary for providing our services. This data is processed in compliance with GDPR, CCPA, and other applicable data protection regulations.
            </p>
            
            <p className="mt-4">
              When you make a payment on our platform:
            </p>
            
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>Your payment details are encrypted and securely transmitted to our payment processor</li>
              <li>We receive only a transaction confirmation with minimal necessary details</li>
              <li>Your billing information is stored securely and separately from your learning data</li>
              <li>We maintain detailed access logs for any system that handles financial information</li>
            </ol>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Third-Party Services</h3>
            <p>
              While we partner with reputable payment processors to handle transactions, we carefully select these partners based on their security standards and compliance with international banking regulations. Our partners include:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Stripe (for credit card processing)</li>
              <li>PayPal (for alternative payment methods)</li>
              <li>Apple Pay and Google Pay (for mobile payments)</li>
            </ul>
            
            <p className="mt-4">
              Each of these providers maintains their own stringent security protocols and banking secrecy standards.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Your Rights</h3>
            <p>
              Under various financial privacy laws, you have specific rights regarding your banking information:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>The right to know what financial information we collect and store</li>
              <li>The right to access your financial transaction history with us</li>
              <li>The right to request deletion of your payment information</li>
              <li>The right to be informed of any data breaches that might affect your financial information</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Contact Information</h3>
            <p>
              If you have any questions or concerns about how we handle your financial information, please contact our dedicated privacy team at:
            </p>
            
            <p className="mt-4 font-medium">
              Email: glosadoresassociados@gmail.com<br />
              Phone: (+351) 210 000 000<br />
              Endereço: Av. da Liberdade 110, 1269-046 Lisboa, Portugal
            </p>
            
            <p className="mt-6 text-sm">
              Last updated: June 1, 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPrivacy;
