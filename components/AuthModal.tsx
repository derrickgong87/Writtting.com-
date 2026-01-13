import React, { useState, useRef, useEffect } from 'react';
import { X, Mail, Lock, ArrowRight, User, ChevronLeft } from 'lucide-react';
import { TermsOfServiceText } from './LegalDocs';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Email Autocomplete state
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'edu.com'];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setEmail(val);

      if (val.includes('@')) {
          const [prefix, suffix] = val.split('@');
          if (suffix !== undefined) {
             const filtered = commonDomains.filter(d => d.startsWith(suffix));
             setSuggestions(filtered.map(d => `${prefix}@${d}`));
          } else {
             setSuggestions([]); 
          }
      } else {
          setSuggestions([]);
      }
  };

  const selectSuggestion = (s: string) => {
      setEmail(s);
      setSuggestions([]);
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  // --- Terms of Service View ---
  if (showTerms) {
      return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="h-20 bg-slate-900 p-6 flex items-center gap-4 shrink-0">
                <button onClick={() => setShowTerms(false)} className="text-white/70 hover:text-white transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <h2 className="text-xl font-bold text-white">Terms of Service</h2>
            </div>
            
            <div className="p-8 overflow-y-auto">
                <TermsOfServiceText />
            </div>
          </div>
        </div>
      );
  }

  // --- Main Auth View ---
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-visible animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image/Pattern */}
        <div className="h-32 bg-gradient-to-r from-brand-600 to-indigo-600 p-6 flex justify-end items-start rounded-t-3xl">
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="px-8 pb-8 -mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
             <h2 className="text-2xl font-bold text-slate-900 text-center mb-1">
               {isLogin ? 'Welcome Back' : 'Create Account'}
             </h2>
             <p className="text-slate-500 text-center text-sm mb-6">
               {isLogin ? 'Enter your details to access your account' : 'Start humanizing your content today'}
             </p>

             <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                   <div className="space-y-1">
                     <label className="text-xs font-semibold text-slate-700 ml-1">Full Name</label>
                     <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
                        />
                     </div>
                   </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 ml-1">Email Address</label>
                  <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input 
                       type="email" 
                       value={email}
                       onChange={handleEmailChange}
                       placeholder="you@example.com"
                       className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
                       required
                       autoComplete="off"
                     />
                     {/* Email Suggestions Dropdown */}
                     {suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-xl z-20 overflow-hidden">
                            {suggestions.map((s, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => selectSuggestion(s)}
                                    className="px-4 py-2 hover:bg-slate-50 cursor-pointer text-sm text-slate-700 flex items-center gap-2"
                                >
                                    <span className="text-slate-400">@</span> {s.split('@')[1]}
                                </div>
                            ))}
                        </div>
                     )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 ml-1">Password</label>
                  <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input 
                       type="password" 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="••••••••"
                       className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm"
                       required
                     />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {isLogin ? 'Log In' : 'Sign Up Free'}
                  <ArrowRight size={18} />
                </button>
             </form>

             <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="flex justify-center text-sm">
                 <span className="text-slate-500">
                   {isLogin ? "Don't have an account?" : "Already have an account?"}
                 </span>
                 <button 
                   onClick={() => setIsLogin(!isLogin)}
                   className="ml-2 font-bold text-brand-600 hover:text-brand-700"
                 >
                   {isLogin ? 'Sign up' : 'Log in'}
                 </button>
               </div>
             </div>
          </div>
          
          <p className="text-center text-xs text-slate-400">
            By continuing, you agree to our{' '}
            <button onClick={() => setShowTerms(true)} className="underline hover:text-slate-600">Terms of Service</button>
            {' '}and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};