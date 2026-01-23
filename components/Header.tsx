import React, { useState } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

interface HeaderProps {
  onLogin: () => void;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogin, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-8 bg-transparent">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white transition-colors group-hover:bg-brand-500 shadow-lg shadow-brand-500/20">
            <PenTool size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900">Humanizer.help</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('features')} className="text-slate-600 hover:text-brand-600 font-medium text-base transition-colors uppercase tracking-widest">Features</button>
          <button onClick={() => handleNavClick('pricing')} className="text-slate-600 hover:text-brand-600 font-medium text-base transition-colors uppercase tracking-widest">Pricing</button>
          <button onClick={() => handleNavClick('blog')} className="text-slate-600 hover:text-brand-600 font-medium text-base transition-colors uppercase tracking-widest">Blog</button>
          
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          
          <button onClick={onLogin} className="text-slate-900 hover:text-brand-600 font-medium text-base transition-colors uppercase tracking-widest">Login</button>
          
          <button 
            onClick={() => handleNavClick('dashboard')}
            className="bg-brand-600 hover:bg-brand-500 text-white px-7 py-3 rounded-xl font-bold text-base transition-all shadow-xl shadow-brand-500/20 tracking-wider"
          >
            GET STARTED
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 bg-slate-100 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <button onClick={() => handleNavClick('features')} className="text-slate-900 font-medium text-left text-lg uppercase tracking-wide">Features</button>
          <button onClick={() => handleNavClick('pricing')} className="text-slate-900 font-medium text-left text-lg uppercase tracking-wide">Pricing</button>
          <button onClick={() => handleNavClick('blog')} className="text-slate-900 font-medium text-left text-lg uppercase tracking-wide">Blog</button>
          
          <div className="h-px bg-slate-100"></div>
          
          <button onClick={() => handleNavClick('dashboard')} className="bg-brand-600 text-white px-6 py-4 rounded-2xl font-bold w-full shadow-lg tracking-widest">
            GET STARTED
          </button>
        </div>
      )}
    </header>
  );
};