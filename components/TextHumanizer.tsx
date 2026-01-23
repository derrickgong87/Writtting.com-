import React, { useState } from 'react';
import { Sparkles, Copy, RotateCw, Check } from 'lucide-react';
import { humanizeText } from '../services/ai';

export const TextHumanizer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<'standard' | 'academic'>('standard');

  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    const result = await humanizeText(inputText);
    setOutputText(result);
    setLoading(false);
  };

  const copyToClipboard = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="tool">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          {/* Header matched to Pricing section (text-3xl md:text-5xl font-extrabold) */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Try It Yourself</h2>
          {/* Description matched to Pricing section (text-lg text-slate-500) */}
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">Paste your AI-generated text below to make it undetectable.</p>
        </div>

        {/* Container adjusted for coordinated width (max-w-5xl) */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            {/* Toolbar */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-between">
                <div className="flex gap-3">
                    <button 
                      onClick={() => setMode('standard')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm border ${
                        mode === 'standard' 
                          ? 'bg-white border-brand-300 text-brand-700 ring-2 ring-brand-100' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                        <span className={`w-2.5 h-2.5 rounded-full ${mode === 'standard' ? 'bg-brand-500' : 'bg-slate-300'}`}></span> 
                        Standard
                    </button>
                    <button 
                      onClick={() => setMode('academic')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm border ${
                        mode === 'academic' 
                          ? 'bg-white border-purple-300 text-purple-700 ring-2 ring-purple-100' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                        <span className={`w-2.5 h-2.5 rounded-full ${mode === 'academic' ? 'bg-purple-500' : 'bg-slate-300'}`}></span> 
                        Academic (Pro)
                    </button>
                </div>
                <div className="text-sm text-slate-400 font-mono font-bold">
                    {inputText.length} characters
                </div>
            </div>

            {/* Height maintained at 550px for the scaled-up tool */}
            <div className="flex flex-col md:flex-row h-[550px]">
                {/* Input Area */}
                <div className="flex-1 p-8 relative group">
                    <textarea 
                        className="w-full h-full resize-none outline-none text-slate-700 text-xl leading-relaxed bg-transparent placeholder:text-slate-300"
                        placeholder="Paste your text here to humanize..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    ></textarea>
                    {inputText && (
                         <button 
                            onClick={() => setInputText('')}
                            className="absolute top-6 right-6 text-slate-300 hover:text-slate-500 p-2 bg-slate-50 rounded-lg transition-colors"
                         >
                            <RotateCw size={18} />
                         </button>
                    )}
                </div>

                {/* Divider / Action Button - Button and text scaled up maintained */}
                <div className="w-full md:w-px bg-slate-100 relative flex items-center justify-center py-6 md:py-0">
                    <button 
                        onClick={handleHumanize}
                        disabled={loading || !inputText}
                        className={`
                            absolute z-10 
                            md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                            flex items-center gap-3 px-8 py-4 rounded-full 
                            font-black text-lg shadow-2xl transition-all
                            ${loading || !inputText 
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:scale-105 hover:shadow-brand-500/30'}
                        `}
                    >
                        {loading ? (
                            <span className="animate-spin mr-1"><RotateCw size={22} /></span>
                        ) : (
                            <Sparkles size={22} />
                        )}
                        {loading ? 'Processing...' : 'Humanize Text'}
                    </button>
                </div>

                {/* Output Area */}
                <div className="flex-1 p-8 bg-slate-50/50 relative">
                    {outputText ? (
                        <textarea 
                            readOnly
                            className="w-full h-full resize-none outline-none text-slate-800 text-xl leading-relaxed bg-transparent"
                            value={outputText}
                        ></textarea>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 select-none">
                            <Sparkles size={64} className="mb-6 opacity-20" />
                            <p className="text-lg font-medium">Humanized text will appear here</p>
                        </div>
                    )}

                    {outputText && (
                        <button 
                            onClick={copyToClipboard}
                            className="absolute bottom-8 right-8 p-4 bg-white border border-slate-200 rounded-2xl shadow-lg text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all hover:scale-110"
                            title="Copy to clipboard"
                        >
                            {copied ? <Check size={24} className="text-green-500" /> : <Copy size={24} />}
                        </button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};