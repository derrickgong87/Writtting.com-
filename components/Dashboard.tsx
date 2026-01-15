import React, { useState, useEffect, useRef } from 'react';
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
  ShieldCheck,
  Zap,
  Gauge,
  PackagePlus,
  Trash2,
  Edit,
  X,
  Link,
  Users,
  GraduationCap,
  HelpCircle,
  Settings,
  Cpu,
  Loader2,
  Mail
} from 'lucide-react';
import { humanizeText, evaluatePaper } from '../services/ai';

interface DashboardProps {
  isLoggedIn: boolean;
  onShowAuth: () => void;
}

// --- Sub-Components (Views) ---

const DetectorView = () => {
  const [algorithm, setAlgorithm] = useState('GPTZero');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const algorithms = ['GPTZero', 'Turnitin', 'Originality.ai'];

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-slate-900">Check AI Rate</h2>
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-medium">
          Tip: Detection consumes words at a 3:1 ratio. 200 quota = 600 words checked.
        </span>
      </div>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left Input */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col p-6">
          <textarea 
            className="flex-1 resize-none outline-none text-slate-700 placeholder:text-slate-400 text-base leading-relaxed"
            placeholder="Enter the text you want to check for AI detection..."
          />
          <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                <FileText size={16} /> Sample
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                <Clipboard size={16} /> Paste
             </button>
          </div>
        </div>

        {/* Right Result */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
               <Search size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">AI Detection Results</h3>
            <p className="text-sm text-slate-500">Enter text on the left and click "Start Check" below.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex items-center gap-4">
         <span className="text-sm font-medium text-slate-500">Algorithm:</span>
         
         {/* Custom Dropdown matched to Humanizer Mode UI */}
         <div className="relative group">
             <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-brand-300 min-w-[180px] justify-between transition-colors focus:outline-none"
             >
                 <div className="flex items-center gap-2">
                    <Cpu size={16} className="text-brand-600" />
                    <span>{algorithm}</span>
                 </div>
                 <ChevronDown size={14} className="text-slate-400" />
             </button>
             
             {isDropdownOpen && (
                 <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                    <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-20 animate-in fade-in slide-in-from-bottom-2 duration-150">
                        {algorithms.map(algo => (
                            <button
                                key={algo}
                                onClick={() => { setAlgorithm(algo); setIsDropdownOpen(false); }}
                                className="w-full px-4 py-3 text-left hover:bg-slate-50 text-sm text-slate-700 flex items-center gap-3 transition-colors"
                            >
                                <Cpu size={16} className={algorithm === algo ? "text-brand-600" : "text-slate-400"} />
                                <span className="flex-1">{algo}</span>
                                {algorithm === algo && <Check size={14} className="text-brand-600" />}
                            </button>
                        ))}
                    </div>
                 </>
             )}
         </div>

         <div className="flex-1"></div>

         <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-brand-500/20 transition-all flex items-center gap-2">
             <Search size={16} /> Start Check
         </button>
      </div>
    </div>
  );
};

const PaperReviewView = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async () => {
      if (!text.trim()) return;
      setLoading(true);
      const res = await evaluatePaper(text);
      setResult(res);
      setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Title removed per request to eliminate whitespace */}
      
      <div className="flex flex-1 gap-6 min-h-0">
        {/* Left Input */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col p-6">
          <textarea 
            className="flex-1 resize-none outline-none text-slate-700 placeholder:text-slate-400 text-base leading-relaxed"
            placeholder="Paste your essay or research paper here for a comprehensive review..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
             <button className="flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-lg text-sm font-medium hover:bg-brand-100 transition-colors">
                <Upload size={16} /> Upload Doc
             </button>
             <button 
                onClick={() => navigator.clipboard.readText().then(t => setText(prev => prev + t))}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
             >
                <Clipboard size={16} /> Paste
             </button>
          </div>
        </div>

        {/* Right Result */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col p-6 relative overflow-hidden">
            {loading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-500 font-medium animate-pulse">Analyzing structure and arguments...</p>
                </div>
            ) : result ? (
                 <div className="h-full overflow-y-auto pr-2">
                     <div className="prose prose-sm prose-slate max-w-none">
                         <div className="whitespace-pre-wrap">{result}</div>
                     </div>
                 </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                        <GraduationCap size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Get Instant Feedback</h3>
                    <p className="text-sm text-slate-500 max-w-xs">Upload your paper to receive a score and detailed suggestions for improvement.</p>
                </div>
            )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex justify-end">
         <button 
            onClick={handleEvaluate}
            disabled={loading || !text}
            className={`px-8 py-2.5 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-2 ${
                loading || !text 
                ? 'bg-slate-300 cursor-not-allowed' 
                : 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/20'
            }`}
         >
             <Sparkles size={16} /> Review Paper
         </button>
      </div>
    </div>
  );
};

const HistoryView = () => {
    // Mock Data
    const historyItems = [
        { id: 1, original: "When I was young, asthma presented the world...", processed: "My condition of asthma during childhood made...", date: "01/06/2026, 05:51 PM" },
        { id: 2, original: "Artificial Intelligence has transformed...", processed: "AI has revolutionized the way we work...", date: "01/06/2026, 05:51 PM" },
        { id: 3, original: "The climate crisis is an urgent global...", processed: "Urgent global action is needed for climate...", date: "01/06/2026, 05:43 PM" },
        { id: 4, original: "Blockchain technology ensures secure...", processed: "Secure transactions are ensured by blockchain...", date: "01/06/2026, 03:08 PM" },
        { id: 5, original: "Quantum computing utilizes qubits...", processed: "Qubits are utilized in quantum computing...", date: "01/06/2026, 03:06 PM" },
        { id: 6, original: "Photosynthesis is the process by which...", processed: "Plants use photosynthesis to convert light...", date: "01/06/2026, 03:06 PM" },
    ];

    return (
        <div className="h-full flex flex-col">
            {/* Title removed per request */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex-1 overflow-hidden flex flex-col">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-100 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-4">Original Content</div>
                    <div className="col-span-4">Processed Content</div>
                    <div className="col-span-3">Created Time</div>
                    <div className="col-span-1 text-right">Actions</div>
                </div>
                
                {/* Table Body */}
                <div className="overflow-y-auto flex-1">
                    {historyItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors items-center text-sm">
                             <div className="col-span-4 text-slate-700 truncate font-medium">{item.original}</div>
                             <div className="col-span-4 text-slate-600 truncate">{item.processed}</div>
                             <div className="col-span-3 text-slate-400 text-xs font-mono">{item.date}</div>
                             <div className="col-span-1 flex justify-end gap-2">
                                 <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded transition-colors"><Edit size={14}/></button>
                                 <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 size={14}/></button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AccountSettingsView = ({ onNavigateToPricing }: { onNavigateToPricing: () => void }) => {
  const [showCancelModal, setShowCancelModal] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-12">
       {/* UPDATED: Changed from Subscription Plan to Your Plan */}
       <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Plan</h2>

       {/* 1. Subscription Plan Card */}
       <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-12">
             <div className="flex-1">
                <div className="mb-8">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Plan Tier</label>
                   <div className="text-sm font-medium text-slate-900">Free Plan (300 words/month)</div>
                   <div className="h-1.5 w-full bg-slate-100 rounded-full mt-3 overflow-hidden">
                      <div className="h-full bg-brand-500 w-[0%] rounded-full"></div>
                   </div>
                   <div className="text-xs text-slate-400 mt-2">0 / 300 words used</div>
                </div>

                <div className="mb-8">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Plan Status</label>
                   <div className="text-emerald-600 font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      Active
                   </div>
                </div>
                
                <div className="border-t border-slate-100 pt-6">
                    <button 
                        onClick={onNavigateToPricing}
                        className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-500/20 transition-all"
                    >
                        Upgrade Plan
                    </button>
                </div>
             </div>

             {/* Divider */}
             <div className="hidden md:block w-px bg-slate-100"></div>

             <div className="flex-1 space-y-8">
                <div className="border-b border-slate-100 pb-6">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Next usage reset</label>
                   <div className="text-slate-700 font-medium">January 18, 2026</div>
                </div>
                <div className="border-b border-slate-100 pb-6">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Next payment</label>
                   <div className="text-slate-700 font-medium">--</div>
                </div>
                <div>
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Renewal period</label>
                   <div className="text-slate-700 font-medium">Monthly</div>
                </div>
             </div>
          </div>
       </div>

       {/* 2. Manage Plan */}
       <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Manage Plan</h3>
          <div className="flex flex-wrap items-center gap-4">
             {/* Removed 'Pause Subscription' button as requested */}
             <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm">
                Change Plan
             </button>
             <span className="text-slate-300 font-light text-xl">|</span>
             <button 
                onClick={() => setShowCancelModal(true)}
                className="px-6 py-3 text-slate-500 hover:text-red-600 font-medium text-sm transition-colors"
             >
                Cancel Plan
             </button>
          </div>
       </div>

       {/* 3. Billing Info - UPDATED with styled faint buttons */}
       <div className="mb-16 border-t border-slate-200 pt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Billing Info</h3>
          <div className="flex flex-wrap gap-4">
             <button className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
                 Change Payment Method
             </button>
             <button className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
                 Update Billing Address
             </button>
             <button className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors">
                 See Payment History
             </button>
          </div>
       </div>

       {/* 4. Account Management */}
       <div className="mb-8 border-t border-slate-200 pt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Account management</h3>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-500/20 transition-all">
             Delete my account
          </button>
       </div>

       {/* Cancel Modal */}
       {showCancelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowCancelModal(false)}></div>
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center animate-in fade-in zoom-in-95 duration-200">
                 <button 
                    onClick={() => setShowCancelModal(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-full p-1"
                 >
                    <X size={20} />
                 </button>
                 
                 <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <Mail size={32} />
                 </div>
                 
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Cancel Subscription</h3>
                 
                 <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                    To cancel your subscription, please email us at <a href="mailto:humanizer.help@gmail.com" className="text-brand-600 font-semibold hover:underline">humanizer.help@gmail.com</a>. 
                    <br/><br/>
                    Kindly include the reason for your cancellation, and we will process your request promptly.
                 </p>
                 
                 <button 
                    onClick={() => setShowCancelModal(false)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                 >
                    Okay, I understand
                 </button>
            </div>
        </div>
       )}
    </div>
  )
}

// --- Invite Modal ---
const InviteModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             {/* Backdrop */}
             <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
             
             <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-br from-brand-500 to-indigo-600 p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-8 -mb-8 blur-xl"></div>
                    
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 rounded-full p-1 transition-colors">
                        <X size={20} />
                    </button>

                    <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4 text-brand-600 transform rotate-3">
                        <Gift size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Invite Friends</h2>
                    <p className="text-brand-50 font-medium">Give 400 words, Get 400 words</p>
                </div>

                <div className="p-8">
                    <div className="mb-6">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Your Invite Link</label>
                        <div className="flex gap-2">
                            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 font-mono truncate flex items-center gap-2">
                                <Link size={14} className="text-slate-400 shrink-0" />
                                https://humanizer.help/invite/u/839201
                            </div>
                            <button className="bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                Copy
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 text-center">
                            <div className="text-3xl font-extrabold text-brand-600 mb-1">0</div>
                            <div className="text-xs font-bold text-brand-400 uppercase tracking-wide flex items-center justify-center gap-1">
                                <Users size={12} /> Friends Invited
                            </div>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                            <div className="text-3xl font-extrabold text-emerald-600 mb-1">0</div>
                            <div className="text-xs font-bold text-emerald-500 uppercase tracking-wide flex items-center justify-center gap-1">
                                <Zap size={12} /> Words Earned
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
                        Rewards are credited automatically when your friend signs up.
                    </div>
                </div>
             </div>
        </div>
    )
}

// --- Main Dashboard Component ---

// Modes Configuration
const HUMANIZER_MODES = {
  balanced: {
    id: 'balanced',
    name: 'Balanced Mode',
    icon: ShieldCheck,
    color: 'text-green-500',
    title: 'Balanced Mode',
    description: 'Modifies text moderately while maintaining original meaning. Balances humanization and readability.',
    points: ['Moderate restructuring', 'Preserves key terms', 'Standard flow']
  },
  aggressive: {
    id: 'aggressive',
    name: 'Aggressive Mode',
    icon: Zap,
    color: 'text-orange-500',
    title: 'Aggressive Mode',
    description: 'Make drastic changes to bypass advanced detection tools.',
    points: ['Completely reconstruct sentence structure', 'Use more synonym replacements', 'Change paragraph organization']
  },
  fast: {
    id: 'fast',
    name: 'Fast Mode',
    icon: Gauge,
    color: 'text-blue-500',
    title: 'Fast Mode',
    description: 'Make minimal changes to maintain original style and structure.',
    points: ['Slightly adjust wording', 'Maintain original structure', 'Fast processing']
  }
};

export const Dashboard: React.FC<DashboardProps> = ({ isLoggedIn, onShowAuth }) => {
  const [activeTab, setActiveTab] = useState('humanize');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [humanizerMode, setHumanizerMode] = useState<keyof typeof HUMANIZER_MODES>('balanced');
  const [isModeDropdownOpen, setIsModeDropdownOpen] = useState(false);
  const [processingStep, setProcessingStep] = useState('Analyzing text structure...');
  
  // Dashboard Pricing State
  const [isAnnual, setIsAnnual] = useState(true);

  // Update processing step based on progress
  useEffect(() => {
    if (progress < 25) setProcessingStep("Analyzing syntax & structure...");
    else if (progress < 50) setProcessingStep("Identifying AI patterns...");
    else if (progress < 75) setProcessingStep("Restructuring sentences...");
    else if (progress < 90) setProcessingStep("Infusing natural human tone...");
    else setProcessingStep("Polishing final output...");
  }, [progress]);

  // Handle invite click
  const handleInviteClick = () => {
      setShowInviteModal(true);
  }

  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    setProgress(0);
    setOutputText('');
    setProcessingStep('Analyzing syntax & structure...');

    if (!isLoggedIn) {
        // Guest Flow: Animate to 96% then prompt auth
        let currentP = 0;
        const interval = setInterval(() => {
            currentP += 1;
            // Simple linear progress for smoothness
            if (currentP >= 96) {
                clearInterval(interval);
                setProgress(96);
                setTimeout(() => {
                   setIsProcessing(false);
                   onShowAuth();
                   setProgress(0);
                }, 500);
            } else {
                setProgress(currentP);
            }
        }, 25); // Approx 2.5 seconds to 96%
    } else {
        // Logged In Flow: Animate and Call API
        const startTime = Date.now();
        const minDuration = 2000; // Minimum animation time of 2 seconds
        
        const apiPromise = humanizeText(inputText);

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            // Calculate theoretical progress up to 90% based on time
            // This ensures smooth animation at least for the first part
            const timeProgress = Math.min(90, Math.floor((elapsed / minDuration) * 90));
            
            setProgress(prev => {
                // Never go backwards, but advance if time allows
                if (prev < timeProgress) return timeProgress;
                return prev;
            });
        }, 50);

        try {
            const result = await apiPromise;
            
            // Ensure we reached near 90% and waited minDuration before snapping to 100
            clearInterval(interval);
            setProgress(100);
            
            setTimeout(() => {
                setOutputText(result);
                setIsProcessing(false);
                setProgress(0);
            }, 500);
        } catch (e) {
            clearInterval(interval);
            setIsProcessing(false);
            setProgress(0);
            console.error(e);
        }
    }
  };

  const copyToClipboard = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentMode = HUMANIZER_MODES[humanizerMode];

  // Pricing Data
  const plans = [
    {
      name: "Free",
      price: "Free",
      period: "forever",
      features: ["300 words/month", "Basic Mode", "No Advanced Features"],
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Basic",
      price: isAnnual ? "$5.99" : "$9.99",
      period: "per month",
      features: ["5,000 words / month", "1,000 words/request", "Standard Mode"],
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Advanced",
      price: isAnnual ? "$11.99" : "$19.99",
      period: "per month",
      features: ["20,000 words / month", "2,500 words/request", "All Humanizer Modes"],
      buttonVariant: "solid",
      popular: true
    },
    {
      name: "Unlimited",
      price: isAnnual ? "$29.99" : "$49.99",
      period: "per month",
      features: ["Unlimited words", "10,000 words/request", "Priority Support"],
      buttonVariant: "outline",
      popular: false
    }
  ];

  const wordPacks = [
    { name: "Mini Pack", words: "2,500 Words", price: "$10.00", description: "Great for a single essay." },
    { name: "Standard Pack", words: "5,000 Words", price: "$15.00", description: "Best value for small projects." },
    { name: "Large Pack", words: "10,000 Words", price: "$25.00", description: "For thesis or extensive research." }
  ];

  return (
    <div className="flex h-screen bg-white font-sans text-slate-900">
      
      {/* Invite Modal Overlay */}
      {showInviteModal && <InviteModal onClose={() => setShowInviteModal(false)} />}

      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-100 flex flex-col fixed h-full bg-white z-20">
        <div className="p-6">
          {/* Minimalist Logo */}
          <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => window.location.href='/'}>
            <div className="relative">
                <div className="absolute inset-0 bg-brand-200 blur rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <PenTool className="text-brand-600 relative z-10 transform -rotate-12" size={24} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight">
                Humanizer.help
            </span>
          </div>

          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('humanize')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'humanize' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <FileText size={18} className="shrink-0" />
              AI Humanizer
            </button>
            <button 
              onClick={() => setActiveTab('detect')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'detect' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Search size={18} className="shrink-0" />
              AI Detector
            </button>
             {/* Updated Paper Review Item - Standardized padding and gap */}
             <button 
              onClick={() => setActiveTab('evaluate')}
              className={`w-full flex items-center gap-3 pl-4 pr-2 py-3 rounded-xl text-sm font-medium transition-colors group whitespace-nowrap ${activeTab === 'evaluate' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <GraduationCap size={18} className="shrink-0" /> 
              <span>Paper Review</span>
              <span className="ml-auto text-[10px] leading-none font-bold text-white bg-brand-500 px-1.5 py-0.5 rounded shadow-sm shrink-0">FREE</span>
            </button>

            <button 
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'history' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <History size={18} className="shrink-0" /> History
            </button>
            <button 
              onClick={() => setActiveTab('pricing')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'pricing' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <CreditCard size={18} className="shrink-0" /> Subscription Plan
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Settings size={18} className="shrink-0" /> Account Setting
            </button>
            <button 
              onClick={handleInviteClick}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${showInviteModal ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Gift size={18} className="shrink-0" /> Invite Friends
            </button>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-50">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Free Plan</span>
            <span className="font-semibold">0 / 300 Words</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-emerald-400 w-[0%] rounded-full"></div>
          </div>
          
          <button className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-slate-900">
            <Globe size={16} /> EN
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-white flex flex-col h-full overflow-hidden">
        
        {/* Top Header - Hidden for specific tabs (detect, evaluate, history) to remove title and whitespace */}
        {!['detect', 'evaluate', 'history'].includes(activeTab) && (
          <header className="h-16 px-8 flex items-center justify-between border-b border-slate-50 shrink-0">
            <h1 className="text-xl font-bold text-slate-800">
              {activeTab === 'humanize' && 'Decrease AI Rate'}
              {activeTab === 'pricing' && 'Subscription Plan'}
              {activeTab === 'settings' && 'Account Settings'}
            </h1>
            <button 
              onClick={!isLoggedIn ? onShowAuth : () => setActiveTab('settings')}
              className="flex items-center gap-3 hover:bg-slate-50 p-1.5 pr-4 rounded-full transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center overflow-hidden">
                  {isLoggedIn ? (
                      <img src="https://api.dicebear.com/7.x/notionists/svg?seed=User" alt="User" className="w-full h-full object-cover" />
                  ) : (
                      <User size={18} />
                  )}
              </div>
              <span className="text-sm font-medium text-slate-700">
                  {isLoggedIn ? 'My Account' : 'Log In'}
              </span>
            </button>
          </header>
        )}

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
                 {isProcessing ? (
                     <div className="flex-1 flex flex-col items-center justify-center relative animate-in fade-in duration-300">
                        <div className="w-full max-w-sm">
                            <div className="flex justify-between text-sm font-bold text-slate-700 mb-3">
                                <span className="flex items-center gap-2"><Sparkles size={16} className="text-brand-500"/> Humanizing...</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                <div 
                                    className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full transition-all duration-100 ease-out relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                            <p className="text-center text-slate-400 text-xs mt-4 font-medium animate-pulse">
                                {processingStep}
                            </p>
                        </div>
                     </div>
                 ) : outputText ? (
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

          {activeTab === 'detect' && <DetectorView />}
          {activeTab === 'evaluate' && <PaperReviewView />}
          {activeTab === 'history' && <HistoryView />}
          {activeTab === 'settings' && <AccountSettingsView onNavigateToPricing={() => setActiveTab('pricing')} />}

          {activeTab === 'pricing' && (
            <div className="max-w-6xl mx-auto space-y-12 pb-12">
                {/* Billing Cycle Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex items-start gap-3">
                   <div className="p-1 bg-yellow-100 rounded-full text-yellow-600 mt-0.5">
                      <Sparkles size={14} />
                   </div>
                   <div>
                       <h4 className="font-bold text-yellow-800 text-sm mb-1">Important: Word Credits Expiration</h4>
                       <p className="text-xs text-yellow-700 leading-relaxed">
                           Monthly subscription credits expire at the end of each billing cycle and <strong>do not roll over</strong> to the next month. 
                           Please ensure you utilize your quota within the active period.
                       </p>
                   </div>
                </div>

                {/* Subscription Plans Section */}
                <div>
                     <div className="flex items-center justify-between mb-6">
                         <h2 className="text-2xl font-bold text-slate-900">Subscription Plans</h2>
                         {/* Billing Toggle */}
                          <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-slate-200">
                            <button 
                                onClick={() => setIsAnnual(false)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Monthly
                            </button>
                            <button 
                                onClick={() => setIsAnnual(true)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isAnnual ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Yearly <span className="text-[10px] bg-emerald-400 text-slate-900 px-1.5 rounded font-bold">-40%</span>
                            </button>
                          </div>
                     </div>

                     <div className="grid grid-cols-4 gap-4">
                        {plans.map((plan, idx) => (
                            <div key={idx} className={`bg-white rounded-xl p-5 border shadow-sm flex flex-col ${plan.popular ? 'border-brand-500 ring-1 ring-brand-100' : 'border-slate-200'}`}>
                                {plan.popular && <div className="text-xs font-bold text-brand-600 mb-2 flex items-center gap-1"><Zap size={12} fill="currentColor"/> Recommended</div>}
                                <h3 className="font-bold text-lg text-slate-900">{plan.name}</h3>
                                <div className="mt-2 mb-4">
                                    <span className="text-2xl font-bold">{plan.price}</span>
                                    {plan.price !== 'Free' && <span className="text-xs text-slate-500">/{plan.period}</span>}
                                </div>
                                <ul className="space-y-2 mb-6 flex-1">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                            <Check size={14} className="text-brand-500 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-2 rounded-lg text-sm font-bold transition-colors ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                     </div>
                </div>

                {/* Add-on Word Packs Section */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Add-on Word Packs</h2>
                    <p className="text-slate-500 mb-6 text-sm">Need more words this month? Add a word pack to your existing plan.</p>
                    
                    <div className="grid grid-cols-3 gap-6">
                        {wordPacks.map((pack, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <PackagePlus size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-900">{pack.price}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{pack.name}</h3>
                                <p className="text-2xl font-bold text-indigo-600 mb-2">{pack.words}</p>
                                <p className="text-xs text-slate-500 mb-6">{pack.description}</p>
                                <button className="w-full py-2.5 rounded-lg border border-indigo-200 text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}
        </div>

        {/* Footer Controls (Humanizer Only) */}
        {activeTab === 'humanize' && (
           <div className="h-28 bg-white border-t border-slate-100 px-8 flex items-center justify-between shrink-0">
             <div className="flex items-center gap-4">
               <span className="text-slate-500 text-sm">Mode:</span>
               
               {/* Mode Selector Dropdown */}
               <div className="relative group">
                 <button 
                    onClick={() => setIsModeDropdownOpen(!isModeDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-brand-300 min-w-[180px] justify-between transition-colors"
                 >
                   <div className="flex items-center gap-2">
                     <currentMode.icon size={16} className={currentMode.color} /> 
                     {currentMode.name}
                   </div>
                   <ChevronDown size={14} className="text-slate-400" />
                 </button>

                 {/* Dropdown Menu */}
                 {isModeDropdownOpen && (
                   <>
                     <div className="fixed inset-0 z-10" onClick={() => setIsModeDropdownOpen(false)}></div>
                     <div className="absolute bottom-full left-0 mb-2 w-56 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden z-20 animate-in fade-in slide-in-from-bottom-2 duration-150">
                       {Object.values(HUMANIZER_MODES).map((mode) => (
                         <button
                           key={mode.id}
                           onClick={() => {
                             setHumanizerMode(mode.id as any);
                             setIsModeDropdownOpen(false);
                           }}
                           className="w-full px-4 py-3 text-left hover:bg-slate-50 flex items-center gap-3 transition-colors group/item relative"
                         >
                           <mode.icon size={16} className={mode.color} />
                           <span className="text-sm font-medium text-slate-700">{mode.name}</span>
                           {humanizerMode === mode.id && <Check size={14} className="ml-auto text-brand-600" />}
                         </button>
                       ))}
                     </div>
                   </>
                 )}

                 {/* Tooltip Description (Hover over the main button) */}
                 <div className={`absolute bottom-full left-0 mb-3 w-72 bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 z-30 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200 ${isModeDropdownOpen ? 'hidden' : 'hidden group-hover:block'}`}>
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-2">
                       <currentMode.icon size={16} className={currentMode.color} /> {currentMode.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                       {currentMode.description}
                    </p>
                    <ul className="space-y-1.5">
                        {currentMode.points.map((p, i) => (
                            <li key={i} className="text-[10px] text-slate-600 flex items-start gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0"></div>
                                {p}
                            </li>
                        ))}
                    </ul>
                 </div>
               </div>
             </div>

             <button 
                onClick={handleHumanize}
                disabled={isProcessing || !inputText}
                className={`px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-2 ${
                  isProcessing || !inputText 
                    ? 'bg-brand-300 cursor-not-allowed' 
                    : 'bg-brand-500 hover:bg-brand-600 shadow-brand-500/30'
                }`}
             >
                {isProcessing ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                {isProcessing ? 'Processing...' : 'Humanize Text'}
             </button>
           </div>
        )}
      </main>
      
      {/* Support Widget - Only visible in Account Settings */}
      {activeTab === 'settings' && (
        <div className="fixed bottom-36 right-6 z-50">
            <a 
            href="mailto:humanizer.help@gmail.com"
            className="bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="Support" className="w-full h-full object-cover" />
                </div>
                <div className="text-xs mr-2">
                    <p className="font-bold text-slate-800 mb-0.5">Questions?</p>
                    <p className="text-brand-600 font-medium group-hover:underline">Contact Support</p>
                </div>
            </a>
        </div>
      )}
    </div>
  );
};