import React, { useState, useEffect } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

interface HeaderProps {
  onLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
            <PenTool size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Writtting</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Features</a>
          <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Blog</a>
          <button onClick={onLogin} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Log in</button>
          <button 
            onClick={onLogin}
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-500/20"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-lg">
          <a href="#features" className="text-slate-600 font-medium">Features</a>
          <a href="#pricing" className="text-slate-600 font-medium">Pricing</a>
          <a href="#" className="text-slate-600 font-medium">Blog</a>
          <button onClick={onLogin} className="text-slate-600 font-medium text-left">Log in</button>
          <button onClick={onLogin} className="bg-brand-600 text-white px-5 py-3 rounded-xl font-medium w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};