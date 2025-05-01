import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-gradient-banking text-[#f5f5dc] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Us Section - Top Right */}
        <div className="flex justify-end py-3">
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <h3 className="text-[#d4af37] text-lg font-bold uppercase tracking-wider">Contacte-nos</h3>
              <div className="flex items-center mt-1 space-x-3">
                <div className="flex items-center text-sm text-[#f5f5dc]">
                  <Phone className="h-4 w-4 mr-1 text-[#d4af37]" />
                  <span>(+351) 210 000 000</span>
                </div>
                <div className="flex items-center text-sm text-[#f5f5dc]">
                  <Mail className="h-4 w-4 mr-1 text-[#d4af37]" />
                  <span>glosadoresassociados@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Logo centered */}
        <div className="flex justify-center py-8">
          <div className="relative">
            <div className="p-2 bg-gradient-to-b from-[#d4af37]/20 to-[#d4af37]/5 rounded-lg border-2 border-[#d4af37]/30 shadow-lg">
              <div className="p-1 border border-[#d4af37]/10">
                <img 
                  src="https://i.imgur.com/YjJtEwQh.jpg" 
                  alt="Logo" 
                  className="w-56 h-56 object-contain"
                />
              </div>
              <div className="absolute -inset-1 border border-[#d4af37]/10 rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation - Centered below logo */}
        <nav className="hidden md:flex justify-center py-4 border-t border-[#b8860b]/30">
          <div className="flex space-x-16 items-center">
            <Link href="/" className={`nav-link text-base font-medium uppercase tracking-wider ${isActive('/') ? 'text-[#f5f5dc] font-semibold border-b border-[#f5f5dc]/80' : 'text-[#f5f5dc] hover:text-[#f5f5dc]/80'}`}>
              Home
            </Link>
            <Link href="/banking-privacy" className={`nav-link text-2xl font-bold uppercase tracking-wider px-4 py-1 ${isActive('/banking-privacy') ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-[#d4af37]/90 hover:text-[#d4af37] hover:border-b-2 hover:border-[#d4af37]/60'}`}>
              Sigilo Bancário
            </Link>
            <Link href="/about" className={`nav-link text-base font-medium uppercase tracking-wider ${isActive('/about') ? 'text-[#f5f5dc] font-semibold border-b border-[#f5f5dc]/80' : 'text-[#f5f5dc] hover:text-[#f5f5dc]/80'}`}>
              Sobre Nós
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-3">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-[#f5f5dc] hover:text-[#d4af37] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-[#113457] border-t border-[#b8860b]/30 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 py-3 space-y-4">
          <Link 
            href="/" 
            className={`nav-link block px-3 py-2 text-base font-medium text-center uppercase ${
              isActive('/') 
                ? 'text-[#f5f5dc] font-semibold border-b border-[#f5f5dc]/80 mx-auto w-4/5' 
                : 'text-[#f5f5dc] hover:text-[#f5f5dc]/80 mx-auto w-4/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/banking-privacy" 
            className={`nav-link block px-3 py-2 mb-1 text-2xl font-bold text-center uppercase ${
              isActive('/banking-privacy') 
                ? 'text-[#d4af37] border-b-2 border-[#d4af37] mx-auto w-4/5' 
                : 'text-[#d4af37]/90 hover:text-[#d4af37] mx-auto w-4/5 hover:border-b-2 hover:border-[#d4af37]/60'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sigilo Bancário
          </Link>
          <Link 
            href="/about" 
            className={`nav-link block px-3 py-2 text-base font-medium text-center uppercase ${
              isActive('/about') 
                ? 'text-[#f5f5dc] font-semibold border-b border-[#f5f5dc]/80 mx-auto w-4/5' 
                : 'text-[#f5f5dc] hover:text-[#f5f5dc]/80 mx-auto w-4/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
          
          {/* Contact mobile */}
          <div className="mt-4 pt-4 border-t border-[#b8860b]/30 text-center">
            <h4 className="text-[#d4af37] text-lg font-bold uppercase tracking-wider mb-2">Contacte-nos</h4>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center text-sm text-[#f5f5dc]">
                <Phone className="h-4 w-4 mr-1 text-[#d4af37]" />
                <span>(+351) 210 000 000</span>
              </div>
              <div className="flex items-center text-sm text-[#f5f5dc]">
                <Mail className="h-4 w-4 mr-1 text-[#d4af37]" />
                <span>glosadoresassociados@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
