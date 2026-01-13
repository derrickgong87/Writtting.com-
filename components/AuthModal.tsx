import React, { useState, useRef, useEffect } from 'react';
import { X, Mail, Lock, ArrowRight, User, ChevronLeft } from 'lucide-react';

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
            
            <div className="p-8 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-8">
                {/* 1. Privacy & General (Least sensitive) */}
                <section>
                    <h3 className="font-bold text-slate-900 mb-2 text-base">1. User Privacy & Data Protection</h3>
                    <p className="mb-2">We value your privacy and are committed to protecting your personal data.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Data Security:</strong> All submitted texts are encrypted during processing. We do not sell or share your original or processed content with third parties for advertising purposes.</li>
                        <li><strong>Account Safety:</strong> You are responsible for maintaining the confidentiality of your account credentials.</li>
                    </ul>
                </section>

                {/* 2. User Obligations */}
                <section>
                    <h3 className="font-bold text-slate-900 mb-2 text-base">2. User Obligations</h3>
                    <p className="mb-2">By using Humanizer.help, you agree to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Academic Integrity:</strong> Use this tool responsibly. You are obligated to ensure that your use of our services complies with your institution's academic integrity policies and guidelines regarding AI assistance.</li>
                        <li><strong>Lawful Use:</strong> Do not use the service to generate content that is illegal, harmful, or violates the intellectual property rights of others.</li>
                    </ul>
                </section>

                {/* 3. Service Limitations (The "AI Disclaimer" - Softened) */}
                <section>
                    <h3 className="font-bold text-slate-900 mb-2 text-base">3. Service Limitations</h3>
                    <p className="mb-2">We employ industry-leading algorithms to refine AI-generated text. However, due to the rapidly evolving nature of AI detection technology, we wish to clarify the following:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Detection Probability:</strong> While we aim for the highest standards, current technology cannot guarantee that content will be 100% undetectable by all third-party software (e.g., Turnitin, GPTZero) at all times.</li>
                        <li><strong>Detector Accuracy:</strong> Please note that AI detection tools themselves are not infallible and may produce false positives or inconsistent results.</li>
                        <li><strong>Evolving Models:</strong> Detection models update frequently. A text that passes verification today may be evaluated differently by future versions of detection software.</li>
                        <li><strong>Liability:</strong> Humanizer.help provides this tool as a writing aid. We do not assume legal liability for the specific context in which the text is used or any consequential outcomes.</li>
                    </ul>
                </section>

                {/* 4. Refunds & Subscriptions (Most sensitive/Strict) */}
                <section>
                    <h3 className="font-bold text-slate-900 mb-2 text-base">4. Refund & Subscription Policy</h3>
                    <p className="mb-2">Please review our refund and subscription terms carefully:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Refund Eligibility:</strong> Refunds are generally not provided if you have utilized more than <strong>200 words</strong> of your paid subscription plan. This threshold applies after your initial free quota is exhausted.</li>
                        <li><strong>Plan Downgrades:</strong> Direct switching from a higher-value plan to a lower-value plan (with a prorated refund) is not supported. To switch to a lower plan, please cancel your current subscription; the change will take effect after your current billing cycle ends.</li>
                        <li><strong>Word Credits:</strong> Monthly word credits reset at the start of each billing cycle and do not roll over to the next month.</li>
                    </ul>
                </section>
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