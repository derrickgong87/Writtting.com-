import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex M.",
    role: "Graduate Student",
    content: "I was terrified when my original work was flagged as AI by Turnitin. Writtting.com completely reworked my phrasing while keeping my arguments intact. It passed with 0% AI detection. A lifesaver!",
    initials: "AM",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Sarah Jenkins",
    role: "Content Marketer",
    content: "We use AI for outlines, but the drafts often sound robotic. This tool adds that human 'spark'—idioms, varied sentence structures, and natural flow. Our SEO rankings have actually improved since switching.",
    initials: "SJ",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "David Chen",
    role: "Freelance Writer",
    content: "Most rewriters just swap synonyms and make the text unreadable. Writtting actually understands context. It doesn't just change words; it improves the writing quality. Highly recommended.",
    initials: "DC",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    name: "Emily R.",
    role: "Research Assistant",
    content: "I've tested this against Originality.ai and GPTZero. It's the only tool that consistently gets a 'Human' score without needing 5 rounds of edits. The academic mode is particularly impressive.",
    initials: "ER",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Michael Torres",
    role: "Blogger",
    content: "The output is virtually indistinguishable from a professional editor's work. It fixed my grammar issues while humanizing the tone. It's now an essential part of my daily workflow.",
    initials: "MT",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    name: "Jessica Wu",
    role: "College Junior",
    content: "Simple, fast, and effective. I don't have to worry about false positives on my essays anymore. It takes seconds and the results are always coherent and natural.",
    initials: "JW",
    color: "bg-pink-100 text-pink-600"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-white rounded-full shadow-sm border border-slate-100">
             <div className="flex -space-x-2 mr-3">
                {[1,2,3].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${
                        i===1 ? 'bg-blue-100 text-blue-600' : i===2 ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'
                    }`}>
                        {i === 1 ? 'A' : i === 2 ? 'S' : 'D'}
                    </div>
                ))}
             </div>
             <span className="text-sm font-medium text-slate-600 pr-2">Trusted by 100,000+ writers</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Loved by Students & <br/>
            <span className="text-brand-600">Professionals Worldwide</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Don't just take our word for it. See what our community has to say about the quality and undetectability of our results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote size={20} className="text-slate-200 group-hover:text-brand-200 transition-colors" />
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};