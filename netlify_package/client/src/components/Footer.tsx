import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#113457] text-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">
                SB
              </div>
              <span className="ml-2 font-bold text-xl">Glosadores e Associados</span>
            </div>
            <p className="text-[#f5f5dc]/70 mb-4">
              Soluções bancárias personalizadas com segurança e excelência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/banking-privacy">
                  <a className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Sigilo Bancário</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Serviços</a>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Taxas</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Blog</a>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Central de Ajuda</a>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Comunidade</a>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Webinars</a>
              </li>
              <li>
                <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Parceiros</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mantenha-se Atualizado</h3>
            <p className="text-[#f5f5dc]/70 mb-4">Assine nossa newsletter para receber as últimas atualizações.</p>
            <form className="space-y-2">
              <div>
                <Input 
                  type="email" 
                  placeholder="Seu endereço de email" 
                  className="w-full px-4 py-2 rounded-md bg-[#113457]/80 border border-[#d4af37]/30 text-[#f5f5dc] placeholder-[#f5f5dc]/60 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent"
                />
              </div>
              <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#b8860b] text-[#113457] font-semibold">
                Assinar
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#d4af37]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f5f5dc]/70">© 2023 Glosadores e Associados. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Política de Privacidade</a>
            <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Termos de Serviço</a>
            <a href="#" className="text-[#f5f5dc]/70 hover:text-[#d4af37]">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
