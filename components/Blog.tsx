import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, ChevronLeft, Share2, Bookmark, GraduationCap, ShieldAlert, Zap, BookOpen, Globe, TrendingUp } from 'lucide-react';

// --- Custom Visual Component for the AI Policy Post ---
const UniversityPolicyVisual = () => (
  <div className="my-12 p-6 md:p-10 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white border border-slate-800">
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
    
    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
      {/* Left: Global Trend Chart */}
      <div className="flex-1 w-full">
        <h4 className="text-xs font-black text-brand-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <TrendingUp size={14} /> 2023 - 2026 Global AI Policy Shift
        </h4>
        <div className="space-y-6">
            <div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                    <span>Integration (Co-existence)</span>
                    <span className="text-emerald-400">65%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                    <span>Active Detection (Bans)</span>
                    <span className="text-red-400">20%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[20%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                    <span>Analog Methods (Oral/Paper)</span>
                    <span className="text-blue-400">15%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[15%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
            </div>
        </div>
      </div>

      {/* Right: The Two Models Visualized */}
      <div className="flex-1 grid grid-cols-2 gap-4 w-full">
         <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-3">
                <Zap size={20} />
            </div>
            <div className="text-xs font-bold text-white mb-1 leading-tight">Integrationist Model</div>
            <div className="text-[10px] text-slate-400 mb-2">Stanford, MIT, ETH Zurich</div>
            <div className="flex gap-1">
                <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
                <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
                <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
            </div>
         </div>
         <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
            <div className="w-10 h-10 bg-red-500/20 text-red-400 rounded-xl flex items-center justify-center mb-3">
                <ShieldAlert size={20} />
            </div>
            <div className="text-xs font-bold text-white mb-1 leading-tight">Preservationist Model</div>
            <div className="text-[10px] text-slate-400 mb-2">Oxford, Sorbonne, Cambridge</div>
            <div className="flex gap-1">
                <div className="w-4 h-1 bg-red-500 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
);

// Extended Article Data with Full Content for SEO
const articles = [
  {
    id: 9,
    title: "The Shifting Landscape: A Comparative Look at University AI Policies in 2026",
    excerpt: "From complete bans to full integration, we analyze how the world's top academic institutions are responding to the AI writing revolution.",
    author: "Prof. Robert Vance",
    date: "January 20, 2026",
    readTime: "8 min read",
    avatarSeed: "Robert",
    tag: "Education",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          Entering 2026, the academic world has largely moved past the initial panic of 2023. However, the resulting policies are far from uniform. Some institutions have embraced a "Silicon Valley" approach, while others have retreated into "Analog Islands."
        </p>

        <UniversityPolicyVisual />

        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="text-emerald-500" /> The 'Integrationist' Model (MIT, Stanford)
        </h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Top-tier technical universities have largely pivoted toward teaching "AI Literacy." In these institutions, using AI for brainstorming, coding, and structural outlining is not just permitted—it is encouraged as a prerequisite for the modern workforce. The policy here focuses on <strong>disclosure</strong> rather than prohibition. Students must provide an "AI Contribution Statement" with every assignment, detailing which models were used and for what purpose.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldAlert className="text-red-500" /> The 'Preservationist' Model (Oxford, Sorbonne)
        </h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Traditional liberal arts powerhouses have taken a different path. Many European institutions have returned to a heavy emphasis on <strong>invigilated, handwritten examinations</strong> and oral vivas (exams by voice). The goal is to ensure the "sanctity of the individual mind." In these environments, any detected AI involvement in a remote submission is treated as a Tier 1 disciplinary offense, equivalent to buying a paper from a ghostwriter.
        </p>

        <div className="bg-slate-100 p-8 rounded-[2rem] border border-slate-200 my-10">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-brand-600" /> 2026 Policy Comparison Matrix
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-3">Ivy League / Tech Schools</div>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex gap-2"><span>✅</span> <span>AI for brainstorming allowed</span></li>
                        <li className="flex gap-2"><span>✅</span> <span>AI for coding allowed (with logs)</span></li>
                        <li className="flex gap-2"><span>❌</span> <span>Raw AI output submission (Ban)</span></li>
                        <li className="flex gap-2"><span>⚠️</span> <span>Mandatory AI usage disclosure</span></li>
                    </ul>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <div className="text-red-600 font-black text-xs uppercase tracking-widest mb-3">Traditional Liberal Arts</div>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex gap-2"><span>❌</span> <span>AI for ideation (Restricted)</span></li>
                        <li className="flex gap-2"><span>❌</span> <span>Any AI text generation (Ban)</span></li>
                        <li className="flex gap-2"><span>✅</span> <span>Oral examinations (Mandatory)</span></li>
                        <li className="flex gap-2"><span>✅</span> <span>Handwritten in-class essays</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Globe className="text-blue-500" /> The Global Grey Area
        </h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           The biggest challenge exists in mid-tier institutions where faculty-to-student ratios are high. Without the resources for oral exams, these schools rely heavily on <strong>AI Detectors</strong>. Unfortunately, this has led to a surge in false positives, especially among non-native English speakers who write in more formal, "formulaic" patterns.
        </p>

        <p className="text-slate-600 leading-relaxed bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-2xl italic font-medium">
            As a student, the most important step is to read the <strong>syllabus</strong> for every single course. Policies now vary not just by school, but by individual department. When in doubt, ensuring your text has the hallmarks of human variance using tools like <strong>Humanizer.help</strong> provides a necessary layer of protection against algorithmic bias.
        </p>
      </>
    )
  },
  {
    id: 1,
    title: "The State of AI Detection in 2026: Why Static Prompting Fails",
    excerpt: "As we enter 2026, simple prompt engineering is no longer enough. We analyze why dynamic structural changes are the only way to bypass modern detection layers.",
    author: "Dr. Sarah Chen",
    date: "January 14, 2026",
    readTime: "7 min read",
    avatarSeed: "Sarah",
    tag: "Industry Analysis",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          If 2024 was the year of the "cat and mouse" game between AI writers and detectors, 2026 is the year the game changed entirely. Modern detection algorithms have evolved beyond simple statistical analysis into semantic mapping.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Death of "Prompt Engineering" for Evasion</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           For years, users relied on complex prompts to bypass Turnitin or GPTZero. In 2026, this approach has hit a ceiling. Detectors now look for the probabilistic backbone of LLM outputs rather than just surface-level vocabulary.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Structural Humanization: The New Standard</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           The only method currently showing a 99%+ success rate against 2026-era detectors is <strong>post-processing structural humanization</strong>.
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2 border-l-4 border-brand-200 pl-4">
            <li><strong>Syntactic Disruption:</strong> Intentionally breaking perfect grammar rules in ways that enhance conversational flow.</li>
            <li><strong>Contextual Bridges:</strong> Adding transitional phrases that rely on cultural context.</li>
            <li><strong>Asymmetrical Pacing:</strong> Humans write with irregular rhythm. AI seeks equilibrium.</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "Semantic SEO: Why Google Loves Humanized Content",
    excerpt: "Google's 2025 Core Updates punished 'soulless' content. Here is how humanizing your AI drafts improves rankings and dwell time.",
    author: "Mark Johnson",
    date: "January 08, 2026",
    readTime: "6 min read",
    avatarSeed: "Mark",
    tag: "SEO Strategy",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           There is a misconception that Google penalizes AI content. Google has explicitly stated they penalize <em>low-quality</em> content. Raw AI output is almost always "average" quality by definition.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Helpful Content" Signal</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Google's algorithms heavily weight "Experience, Expertise, Authoritativeness, and Trustworthiness" (E-E-A-T). AI struggles immensely with the first "E": Experience.
        </p>

        <p className="text-slate-600 leading-relaxed">
            By humanizing your content, you increase the time users spend on the page. Google tracks this. Higher dwell time = higher rankings.
        </p>
      </>
    )
  }
];

export const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostId]);

  const activePost = articles.find(a => a.id === selectedPostId);

  if (selectedPostId && activePost) {
      return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
             <div className="container mx-auto px-6 max-w-4xl">
                <button 
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-8 font-medium"
                >
                    <ChevronLeft size={20} /> Back to Blog
                </button>

                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                         <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full uppercase tracking-wider">
                            {activePost.tag}
                         </span>
                         <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar size={14} /> {activePost.date}
                         </span>
                         <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Clock size={14} /> {activePost.readTime}
                         </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                        {activePost.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-200 py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                <img 
                                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${activePost.avatarSeed}`} 
                                    alt={activePost.author} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">{activePost.author}</div>
                                <div className="text-xs text-slate-500">Editor in Chief</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors">
                                <Share2 size={20} />
                             </button>
                             <button className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-colors">
                                <Bookmark size={20} />
                             </button>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    {activePost.content}
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                     <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to humanize your content?</h3>
                     <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                        Don't let AI detection hold you back. Use our tool to make your writing undetectable and SEO-friendly.
                     </p>
                     <button 
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-all relative z-10"
                     >
                        Start Humanizing Free
                     </button>
                </div>
             </div>
        </div>
      );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto pt-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Insights on AI & Writing
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
                key={article.id} 
                onClick={() => setSelectedPostId(article.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                  <span className="text-brand-600">{article.tag}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-6 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <img 
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${article.avatarSeed}`} 
                        alt={article.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700 leading-none mb-1">{article.author}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{article.date}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};