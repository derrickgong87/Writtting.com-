import React, { useState } from 'react';
import { 
  PenTool, 
  Search, 
  History, 
  CreditCard, 
  Gift, 
  User, 
  Globe, 
  Upload, 
  FileText, 
  Clipboard, 
  ChevronDown,
  RotateCw,
  Sparkles,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import { humanizeText } from '../services/ai';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('humanize');
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
    <div className="flex h-screen bg-white font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-100 flex flex-col fixed h-full bg-white z-20">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl font-bold text-brand-600">Writtting AI</span>
          </div>

          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('humanize')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'humanize' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <FileText size={18} /> Humanize
            </button>
            <button 
              onClick={() => setActiveTab('detect')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'detect' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Search size={18} /> AI Detector
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <History size={18} /> History
            </button>
            <button 
              onClick={() => setActiveTab('pricing')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'pricing' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <CreditCard size={18} /> Pricing
            </button>
            <button 
              onClick={() => setActiveTab('invite')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'invite' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Gift size={18} /> Invite Friends
            </button>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-50">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Basic Plan</span>
            <span>50032 / 51000 Words</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-emerald-400 w-[98%] rounded-full"></div>
          </div>
          
          <button className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-slate-900">
            <Globe size={16} /> EN
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-white flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 px-8 flex items-center justify-between border-b border-slate-50 shrink-0">
          <h1 className="text-xl font-bold text-slate-800">
            {activeTab === 'humanize' && 'Decrease AI Rate'}
            {activeTab === 'detect' && 'Check AI Rate'}
            {activeTab === 'history' && 'History'}
            {activeTab === 'pricing' && 'Upgrade Plan'}
            {activeTab === 'invite' && 'Invite Friends'}
          </h1>
          <button className="p-2 rounded-full bg-brand-50 text-brand-600">
            <User size={20} />
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-6 bg-slate-50 overflow-auto">
          {activeTab === 'humanize' && (
            <div className="flex gap-4 h-full">
              {/* Left Panel */}
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col p-6">
                <textarea 
                  className="flex-1 resize-none outline-none text-slate-700 placeholder:text-slate-300 text-lg leading-relaxed"
                  placeholder="Enter text here. The longer the text, the better the result. Please provide at least 400 words."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                
                <div className="mt-6 p-4 bg-brand-50/50 border border-brand-100/50 rounded-xl border-dashed">
                  <p className="text-center text-brand-600 text-sm mb-4">
                    Supported file types: DOC/DOCX/TXT. Max size 10MB.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-700 rounded-lg text-sm font-medium hover:bg-brand-100 transition-colors">
                      <Upload size={16} /> Upload
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                      <FileText size={16} /> Example
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                      <Clipboard size={16} /> Paste
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col p-6 relative">
                 {outputText ? (
                    <>
                      <textarea 
                        readOnly
                        className="flex-1 resize-none outline-none text-slate-800 text-lg leading-relaxed bg-transparent"
                        value={outputText}
                      />
                      <button 
                        onClick={copyToClipboard}
                        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand-600 transition-colors"
                      >
                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                      </button>
                    </>
                 ) : (
                   <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                     <p className="font-medium text-slate-800 mb-2">Your AI processed text will appear here</p>
                     <p className="text-sm text-center max-w-xs">Enter text on the left or upload a file, then click "Humanize" to process.</p>
                   </div>
                 )}
              </div>
            </div>
          )}
          
          {/* Fallback for other tabs (Mock UI) */}
          {activeTab !== 'humanize' && (
             <div className="flex items-center justify-center h-full text-slate-400">
                <p>Module under development</p>
             </div>
          )}
        </div>

        {/* Footer Controls (Humanizer Only) */}
        {activeTab === 'humanize' && (
           <div className="h-20 bg-white border-t border-slate-100 px-8 flex items-center justify-between shrink-0">
             <div className="flex items-center gap-4">
               <span className="text-slate-500 text-sm">Mode:</span>
               <div className="relative group">
                 <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-brand-300">
                   <ShieldCheck size={16} className="text-green-500" /> Balanced Mode <ChevronDown size={14} />
                 </button>
                 {/* Tooltip Description */}
                 <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-slate-200 shadow-xl rounded-xl p-4 hidden group-hover:block">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                       <ShieldCheck size={14} className="text-green-500" /> Balanced Mode
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2">
                       Modifies text moderately while maintaining original meaning. Balances humanization and readability.
                    </p>
                 </div>
               </div>
             </div>

             <button 
                onClick={handleHumanize}
                disabled={loading || !inputText}
                className={`px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-2 ${
                  loading || !inputText 
                    ? 'bg-brand-300 cursor-not-allowed' 
                    : 'bg-brand-500 hover:bg-brand-600 shadow-brand-500/30'
                }`}
             >
                {loading ? <RotateCw size={18} className="animate-spin" /> : <Sparkles size={18} />}
                {loading ? 'Processing...' : 'Humanize Text'}
             </button>
           </div>
        )}
      </main>
      
      {/* Support Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white p-2 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Support" />
            </div>
            <div className="text-xs mr-2">
                <p className="font-bold text-slate-800">Questions?</p>
                <p className="text-slate-500">Contact Support</p>
            </div>
        </div>
      </div>
    </div>
  );
};