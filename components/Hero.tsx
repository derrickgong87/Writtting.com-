import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/50 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
          Make AI Text <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-indigo-600">Undetectable</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Humanize AI text for Turnitin, GPTZero, and Originality.ai. Transform your AI-generated content into natural, human-like writing in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={onStart}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/10"
          >
            Start Humanizing Free
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" /> 100% Plagiarism Free
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" /> Preserves Meaning
          </span>
        </div>
      </div>
    </section>
  );
};