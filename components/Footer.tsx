import React from 'react';
import { PenTool, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

// Custom X Logo
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// Custom TikTok Logo
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.01 5.24-.02 7.86-.02 2.04-.54 4.14-1.97 5.67-1.52 1.68-3.9 2.4-6.14 2.1-2.02-.27-3.94-1.49-4.9-3.32-1.01-1.92-.93-4.38.21-6.2 1.05-1.68 2.92-2.71 4.91-2.73.19 0 .38 0 .57.02v4.09c-.58-.04-1.18.06-1.69.36-.71.4-1.13 1.19-1.07 2 .06.84.71 1.57 1.54 1.7 1.12.18 2.29-.44 2.67-1.51.13-.37.18-.76.18-1.15V.02z" />
  </svg>
);

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
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors" title="X (Twitter)"><XIcon /></a>
              <a href="#" className="hover:text-white transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors" title="TikTok"><TikTokIcon /></a>
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