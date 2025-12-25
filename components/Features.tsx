import React from 'react';
import { ShieldCheck, Zap, UserCheck, Lock, Globe, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={24} className="text-brand-600" />,
    title: "Undetectable by Turnitin",
    description: "Our advanced model is specifically trained to bypass academic plagiarism checkers and AI detectors."
  },
  {
    icon: <Zap size={24} className="text-brand-600" />,
    title: "Instant Processing",
    description: "Get human-like results in seconds. No waiting queues or slow processing times."
  },
  {
    icon: <UserCheck size={24} className="text-brand-600" />,
    title: "Natural Writing Style",
    description: "We mimic human sentence structures, idioms, and flow to ensure high readability."
  },
  {
    icon: <Lock size={24} className="text-brand-600" />,
    title: "100% Secure",
    description: "Your data is encrypted and processed securely. We never store your inputs."
  },
  {
    icon: <Globe size={24} className="text-brand-600" />,
    title: "Multiple Languages",
    description: "Support for English, Spanish, French, and German with native-level fluency."
  },
  {
    icon: <ThumbsUp size={24} className="text-brand-600" />,
    title: "Grammar Perfect",
    description: "Maintains perfect grammar and syntax while altering the structure to bypass detection."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Writtting?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            The most advanced rewriting technology on the market, designed for students, writers, and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-brand-100 transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};