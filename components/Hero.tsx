
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
  onPricing: () => void;
}

// Simulated logos for detectors
const DetectorLogo = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
    <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-500">{name[0]}</div>
    <span className="font-bold text-slate-400 tracking-tighter text-sm">{name}</span>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onStart, onPricing }) => {
  return (
    <section className="relative pt-48 pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent -z-10" />
      
      {/* Floating Elements for "Completeness" */}
      <div className="absolute top-1/4 left-10 hidden xl:block animate-bounce duration-[3000ms]">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={20} />
              </div>
              <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Detection Result</div>
                  <div className="text-sm font-black text-slate-900">0% AI Detected</div>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-5xl relative">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
          Make AI Text <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-600">Undetectable</span>
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Humanize AI text for Turnitin, GPTZero, and Originality.ai. Transform <br className="hidden md:block" />
          your AI-generated content into natural, human-like writing in seconds.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
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

        {/* Feature Tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm font-medium text-slate-500 tracking-tight mb-20">
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

        {/* Detector Logo Cloud - "The Missing Image" */}
        <div className="pt-10 border-t border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Bypasses the World's most advanced AI Detectors</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <DetectorLogo name="Turnitin" />
                <DetectorLogo name="GPTZero" />
                <DetectorLogo name="Originality.ai" />
                <DetectorLogo name="Copyleaks" />
                <DetectorLogo name="ZeroGPT" />
            </div>
        </div>
      </div>
    </section>
  );
};
