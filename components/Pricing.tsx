import React, { useState } from 'react';
import { Check, X, Zap, Info, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for testing the waters.",
      price: "Free",
      period: "forever",
      features: [
        { text: "300 words per request", included: true },
        { text: "Daily Limit: 1,000 words", included: true },
        { text: "Basic Humanizer Mode", included: true },
        { text: "Standard Processing", included: true },
        { text: "Bypass Basic Detectors", included: true },
        { text: "Advanced Formatting", included: false },
        { text: "No Plagiarism Scan", included: false },
      ],
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Unlimited",
      description: "For students & content creators.",
      price: isAnnual ? "$9.99" : "$19.99",
      period: "per month",
      billingNote: isAnnual ? "Billed $119.88 yearly" : "Billed monthly",
      saveBadge: isAnnual ? "SAVE 50%" : null,
      features: [
        { text: "Unlimited Words / Month", included: true, bold: true },
        { text: "2,500 words per request", included: true },
        { text: "Bypass Turnitin & GPTZero", included: true },
        { text: "All Modes (Standard, Academic, Aggressive)", included: true },
        { text: "Built-in Plagiarism Scan", included: true },
        { text: "No Watermark", included: true },
        { text: "Priority Support", included: true },
      ],
      buttonVariant: "solid",
      popular: true
    },
    {
      name: "Business",
      description: "For agencies & heavy volume.",
      price: isAnnual ? "$24.99" : "$49.99",
      period: "per month",
      billingNote: isAnnual ? "Billed $299.88 yearly" : "Billed monthly",
      features: [
        { text: "Unlimited Words / Month", included: true, bold: true },
        { text: "10,000 words per request", included: true },
        { text: "Bulk File Uploads", included: true },
        { text: "API Access", included: true },
        { text: "Team Management (5 Seats)", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Early Access to Beta Models", included: true },
      ],
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Plans that pay for themselves
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Stop worrying about AI detection. Join 100,000+ writers who trust us to humanize their content.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 select-none">
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
              Yearly <span className="text-brand-600 text-xs bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-full font-bold">SAVE 50%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 cursor-default ${
                plan.popular 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 hover:scale-[1.07] hover:shadow-brand-900/40 ring-1 ring-slate-900' 
                  : 'bg-white border border-slate-200 text-slate-900 hover:border-brand-400 hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <Zap size={14} fill="currentColor" /> Most Popular
                </div>
              )}

              {plan.saveBadge && (
                 <div className="absolute top-6 right-6 text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md">
                    {plan.saveBadge}
                 </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.price !== 'Free' && (
                     <span className={`text-sm font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/{plan.period}</span>
                  )}
                </div>
                {plan.billingNote && (
                    <p className={`text-xs mt-2 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.billingNote}</p>
                )}
              </div>

              <div className={`h-px w-full mb-8 ${plan.popular ? 'bg-slate-700' : 'bg-slate-100'}`}></div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check size={18} className={`shrink-0 ${plan.popular ? 'text-brand-400' : 'text-brand-600'}`} />
                    ) : (
                      <X size={18} className="shrink-0 text-slate-300" />
                    )}
                    <span className={`${
                      !feature.included 
                        ? 'text-slate-500 decoration-slate-500/50 line-through decoration-1' 
                        : plan.popular ? 'text-slate-200' : 'text-slate-600'
                    } ${feature.bold ? 'font-bold' : ''}`}>
                      {feature.text}
                    </span>
                    {feature.text.includes("Info") && <Info size={14} className="text-slate-400" />}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.popular
                  ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/50 hover:shadow-brand-900/80'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}>
                {plan.price === 'Free' ? 'Try for Free' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-slate-600 text-sm">
                <ShieldCheck size={18} className="text-green-500" />
                <span><strong>3-Day Money-Back Guarantee.</strong> If it doesn't bypass detection, we'll refund you.</span>
            </div>
            <p className="mt-4 text-xs text-slate-400">
                Secure payment via Stripe. Cancel anytime in your dashboard.
            </p>
        </div>
      </div>
    </section>
  );
};