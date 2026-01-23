import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onPricing }) => {
  return (
    <section className="relative pt-56 pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/30 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Main Headline - Shifted slightly upwards via padding adjustment */}
        <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
          Make AI Text <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-600">Undetectable</span>
        </h1>
        
        {/* Description - Adjusted width for better coordination */}
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Humanize AI text for Turnitin, GPTZero, and Originality.ai. Transform <br className="hidden md:block" />
          your AI-generated content into natural, human-like writing in seconds.
        </p>
        
        {/* CTA Buttons - Pill-shaped designs maintained */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-5 bg-[#0f172a] text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-slate-900/20 group"
          >
            Start Humanizing Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onPricing}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border border-slate-100 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            View Pricing
          </button>
        </div>

        {/* Features Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm font-medium text-slate-500 tracking-tight">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" /> 100% Plagiarism Free
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" /> High Perplexity
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" /> Context Aware
          </span>
        </div>
      </div>
    </section>
  );
};