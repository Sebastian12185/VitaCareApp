import { useState } from 'react';
import logo from '../assets/logo1.webp';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Nasze usługi", href: "#services-section" },
    { label: "Nasz zespół", href: "#team-section" },
    { label: "FAQ", href: "#faq-section" },
    { label: "Opinie", href: "#reviews-section" },
    { label: "Kontakt", href: "#contact-section" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        <a 
          href="#hero-section" 
          className="flex items-center cursor-pointer group shrink-0"
          aria-label="Powrót do strony głównej"
        >
          <img 
            src={logo} 
            alt="VitaCare logo" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className="text-sm font-bold text-brand-dark hover:text-brand-blue transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+48123456789"
            aria-label="Zadzwoń do nas"
            className="p-2 rounded-xl text-brand-dark hover:text-brand-blue hover:bg-sky-50 transition-all duration-200"
            >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"} 
            aria-expanded={isMenuOpen}
            className="p-2.5 rounded-xl text-brand-dark hover:text-brand-blue hover:bg-sky-50 transition-colors md:hidden cursor-pointer"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div 
        className={`absolute left-0 right-0 top-full bg-white border-b border-slate-100 shadow-xl shadow-slate-900/10 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 p-4 bg-white">
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold text-brand-dark hover:text-brand-blue px-4 py-3 rounded-xl hover:bg-slate-50 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}