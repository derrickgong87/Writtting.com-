import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Mastering the Art of AI Humanization: Tips for Better Results",
    excerpt: "Achieving a 100% human score requires more than just synonym swapping. Learn how context, sentence variety, and idiomatic expressions play a crucial role in bypassing detection.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
    tag: "Guides"
  },
  {
    id: 2,
    title: "Understanding How AI Detectors Work in 2024",
    excerpt: "We analyze the underlying mechanisms of Turnitin, GPTZero, and Originality.ai. Discover why perplexity and burstiness are the key metrics you need to understand.",
    author: "Mark Johnson",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    tag: "Tech Analysis"
  },
  {
    id: 3,
    title: "Why Context Matters: Improving AI Text Flow",
    excerpt: "Robotic text often lacks the subtle contextual bridges that human writers use naturally. Here is how Humanizer.help injects logical flow into your AI drafts.",
    author: "Emily Davis",
    date: "March 05, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    tag: "Writing Tips"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Insights on AI & Writing
          </h1>
          <p className="text-lg text-slate-500">
            Expert advice, industry news, and tutorials to help you stay ahead in the age of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                  {article.tag}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                      <User size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{article.author}</span>
                  </div>
                  <span className="text-brand-600 flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="relative z-10 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Subscribe to our newsletter</h3>
                <p className="text-slate-400 mb-8">Get the latest AI writing tips and tricks delivered directly to your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <button className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors">
                        Subscribe
                    </button>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};