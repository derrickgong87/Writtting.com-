import React from 'react';
import { PenTool, Twitter, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <PenTool size={18} />
              </div>
              <span className="text-xl font-bold">Humanizer.help</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              The #1 AI humanizer tool used by over 100,000 students and professionals worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'dashboard')} className="hover:text-brand-400 transition-colors text-left">AI Humanizer</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'dashboard')} className="hover:text-brand-400 transition-colors text-left">AI Detector</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-brand-400 transition-colors text-left">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-brand-400 transition-colors text-left">Blog</button></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><button onClick={(e) => handleLinkClick(e, 'help')} className="hover:text-brand-400 transition-colors text-left">Help Center</button></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-brand-400 transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-brand-400 transition-colors text-left">Terms of Service</button></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Humanizer.help. All rights reserved.
        </div>
      </div>
    </footer>
  );
};