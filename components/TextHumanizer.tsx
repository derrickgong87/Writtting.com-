import React, { useState } from 'react';
import { Sparkles, Copy, RotateCw, Check } from 'lucide-react';
import { humanizeText } from '../services/ai';

export const TextHumanizer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="tool">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try It Yourself</h2>
          <p className="text-slate-500">Paste your AI-generated text below to make it undetectable.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Toolbar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm cursor-pointer hover:border-brand-300">
                        <span className="w-2 h-2 rounded-full bg-brand-500"></span> Standard
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-transparent text-sm font-medium text-slate-400 hover:text-slate-600 cursor-pointer">
                        Academic (Pro)
                    </div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    {inputText.length} chars
                </div>
            </div>

            <div className="flex flex-col md:flex-row h-[500px]">
                {/* Input Area */}
                <div className="flex-1 p-6 relative group">
                    <textarea 
                        className="w-full h-full resize-none outline-none text-slate-700 text-lg leading-relaxed bg-transparent placeholder:text-slate-300"
                        placeholder="Paste your text here to humanize..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    ></textarea>
                    {inputText && (
                         <button 
                            onClick={() => setInputText('')}
                            className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 p-1"
                         >
                            <RotateCw size={16} />
                         </button>
                    )}
                </div>

                {/* Divider / Action Button */}
                <div className="w-full md:w-px bg-slate-100 relative flex items-center justify-center py-4 md:py-0">
                    <button 
                        onClick={handleHumanize}
                        disabled={loading || !inputText}
                        className={`
                            absolute z-10 
                            md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                            flex items-center gap-2 px-6 py-3 rounded-full 
                            font-semibold shadow-xl transition-all
                            ${loading || !inputText 
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:scale-105 hover:shadow-brand-500/25'}
                        `}
                    >
                        {loading ? (
                            <span className="animate-spin mr-1"><RotateCw size={18} /></span>
                        ) : (
                            <Sparkles size={18} />
                        )}
                        {loading ? 'Processing...' : 'Humanize Text'}
                    </button>
                </div>

                {/* Output Area */}
                <div className="flex-1 p-6 bg-slate-50/50 relative">
                    {outputText ? (
                        <textarea 
                            readOnly
                            className="w-full h-full resize-none outline-none text-slate-800 text-lg leading-relaxed bg-transparent"
                            value={outputText}
                        ></textarea>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300 select-none">
                            <Sparkles size={48} className="mb-4 opacity-20" />
                            <p>Humanized text will appear here</p>
                        </div>
                    )}

                    {outputText && (
                        <button 
                            onClick={copyToClipboard}
                            className="absolute bottom-6 right-6 p-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-600 hover:text-brand-600 hover:border-brand-200 transition-all"
                            title="Copy to clipboard"
                        >
                            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                        </button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};