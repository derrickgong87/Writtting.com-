import React from 'react';
import { HelpCircle, Database, Cpu, Shield, Search } from 'lucide-react';

export const HelpCenter: React.FC = () => {
  const faqs = [
    {
      id: 'privacy',
      question: "How do we use your data?",
      answer: "We take your data privacy seriously. Any text you submit for processing is encrypted during transmission and processing. We strictly adhere to a policy of non-retention for original submissions; we do not store your text after the session ends, nor do we sell, share, or lease your data to third-party advertisers or data brokers.",
      icon: <Database size={20} className="text-blue-500" />
    },
    {
      id: 'model',
      question: "How does our model work?",
      answer: "Our AI model is continuously iterated and trained against the latest versions of major AI detection systems (such as Turnitin, GPTZero, and Originality.ai). By analyzing the patterns these detectors look for—such as perplexity and burstiness—we fine-tune our output to minimize these signals while retaining the natural flow and logic of human writing.",
      icon: <Cpu size={20} className="text-purple-500" />
    },
    {
      id: 'tech',
      question: "What is the technology behind the software?",
      answer: "We utilize a proprietary adversarial training framework. This involves two competing neural networks: one that generates human-like text and another that attempts to detect it as AI. Through millions of training cycles, the generator learns to produce output that bypasses the detector, resulting in high-fidelity, undetectable content.",
      icon: <Shield size={20} className="text-emerald-500" />
    },
    {
      id: 'guarantee',
      question: "Do you guarantee 100% undetectability?",
      answer: "While we strive for perfection and our users typically see success rates over 98%, no tool can strictly guarantee 100% undetectability against all future updates of detection software. AI detection is an evolving field, but we update our models weekly to stay ahead of the curve.",
      icon: <HelpCircle size={20} className="text-orange-500" />
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Help Center</h1>
          <p className="text-lg text-slate-500 mb-8">
            Everything you need to know about Humanizer.help, our technology, and your privacy.
          </p>
          
          <div className="relative max-w-xl mx-auto">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <input 
                type="text" 
                placeholder="Search for answers..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
             />
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} id={faq.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center">
                  {faq.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-brand-600 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-brand-100 mb-8">Can't find the answer you're looking for? Our support team is here to help.</p>
            <button className="px-8 py-3 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-colors">
                Contact Support
            </button>
        </div>
      </div>
    </div>
  );
};