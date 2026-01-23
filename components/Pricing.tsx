import React, { useState } from 'react';
import { Check, X, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onStart: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onStart }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing Logic (40% off for Annual - "6折")
  const plans = [
    {
      name: "Free",
      description: "For testing.",
      price: "Free",
      period: "forever",
      features: [
        { text: "300 words/month", included: true },
        { text: "Basic Mode", included: true },
        { text: "No Advanced Features", included: false },
        { text: "No Bulk Upload", included: false },
      ],
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Basic",
      description: "Light usage.",
      price: isAnnual ? "$5.99" : "$9.99",
      period: "per month",
      billingNote: isAnnual ? "Billed $71.88 yearly" : "Billed monthly",
      features: [
        { text: "5,000 words / month", included: true, bold: true },
        { text: "1,000 words/request", included: true },
        { text: "Standard Mode", included: true },
        { text: "Basic Humanizer", included: true },
      ],
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Advanced",
      description: "Best for students.",
      price: isAnnual ? "$11.99" : "$19.99",
      period: "per month",
      billingNote: isAnnual ? "Billed $143.88 yearly" : "Billed monthly",
      features: [
        { text: "20,000 words / month", included: true, bold: true },
        { text: "2,500 words/request", included: true },
        { text: "All Humanizer Modes", included: true },
        { text: "Humanize for Turnitin", included: true },
        { text: "Plagiarism Scan", included: true },
      ],
      buttonVariant: "solid",
      popular: true
    },
    {
      name: "Unlimited",
      description: "Power users.",
      price: isAnnual ? "$29.99" : "$49.99",
      period: "per month",
      billingNote: isAnnual ? "Billed $359.88 yearly" : "Billed monthly",
      features: [
        { text: "Unlimited words", included: true, bold: true },
        { text: "10,000 words/request", included: true },
        { text: "All Humanizer Modes", included: true },
        { text: "Humanize for Turnitin", included: true },
        { text: "Highest Quality Output", included: true },
        { text: "Priority Support", included: true },
      ],
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Plans for every writer
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 select-none mb-8">
            <span 
                className={`text-sm font-semibold cursor-pointer transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}
                onClick={() => setIsAnnual(false)}
            >
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-slate-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span 
                className={`text-sm font-semibold cursor-pointer transition-colors flex items-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}
                onClick={() => setIsAnnual(true)}
            >
              Yearly <span className="text-brand-600 text-xs bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-full font-bold">SAVE 40%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards - Width reduced to max-w-6xl for coordination */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 cursor-default h-full ${
                plan.popular 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 hover:scale-[1.07] hover:shadow-brand-900/40 ring-1 ring-slate-900' 
                  : 'bg-white border border-slate-200 text-slate-900 hover:border-brand-400 hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <Zap size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-xs ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.price !== 'Free' && (
                     <span className={`text-xs font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/{plan.period}</span>
                  )}
                </div>
                {plan.billingNote && (
                    <p className={`text-[10px] mt-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.billingNote}</p>
                )}
              </div>

              <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-slate-700' : 'bg-slate-100'}`}></div>

              <ul className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs">
                    {feature.included ? (
                      <Check size={14} className={`shrink-0 ${plan.popular ? 'text-brand-400' : 'text-brand-600'}`} />
                    ) : (
                      <X size={14} className="shrink-0 text-slate-300" />
                    )}
                    <span className={`${
                      !feature.included 
                        ? 'text-slate-500 decoration-slate-500/50 line-through decoration-1' 
                        : plan.popular ? 'text-slate-200' : 'text-slate-600'
                    } ${feature.bold ? 'font-bold' : ''}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onStart}
                className={`w-full py-3 rounded-lg font-bold text-sm transition-all ${
                plan.popular
                  ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/50 hover:shadow-brand-900/80'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}>
                {plan.price === 'Free' ? 'Try for Free' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-slate-900 px-6 py-16 text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-transparent to-transparent"></div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                Ready to make your content undetectable?
             </h2>
             <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
                Join thousands of students and professionals who trust Humanizer.help to refine their work. No credit card required for the free plan.
             </p>
             <button 
                onClick={onStart}
                className="relative z-10 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold text-lg shadow-lg shadow-brand-900/50 hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto"
            >
                Try It Now <ArrowRight size={20} />
             </button>
        </div>
      </div>
    </section>
  );
};