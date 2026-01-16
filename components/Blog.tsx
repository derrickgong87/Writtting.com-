import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, ChevronLeft, Share2, Bookmark } from 'lucide-react';

// Extended Article Data with Full Content for SEO
// Sorted: 2026 articles first, then 2025.
const articles = [
  {
    id: 1,
    title: "The State of AI Detection in 2026: Why Static Prompting Fails",
    excerpt: "As we enter 2026, simple prompt engineering is no longer enough. We analyze why dynamic structural changes are the only way to bypass modern detection layers.",
    author: "Dr. Sarah Chen",
    date: "January 14, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Sarah", // Notion-style
    tag: "Industry Analysis",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          If 2024 was the year of the "cat and mouse" game between AI writers and detectors, 2026 is the year the game changed entirely. The days of simply asking ChatGPT to "write like a human" or "add perplexity" are effectively over. Modern detection algorithms have evolved beyond simple statistical analysis into semantic mapping.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Death of "Prompt Engineering" for Evasion</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           For years, users relied on complex prompts to bypass Turnitin or GPTZero. They would instruct the LLM to "use varied sentence lengths" or "avoid common AI words." In 2026, this approach has hit a ceiling. Why? Because the <em>underlying logic</em> of LLMs remains deterministic. No matter how much you prompt it, an LLM chooses tokens based on probability. Detectors now look for this probabilistic backbone rather than just surface-level vocabulary.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Structural Humanization: The New Standard</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           The only method currently showing a 99%+ success rate against 2026-era detectors is <strong>post-processing structural humanization</strong>. This involves taking the AI output and breaking its logical chain.
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2 border-l-4 border-brand-200 pl-4">
            <li><strong>Syntactic Disruption:</strong> Intentionally breaking perfect grammar rules in ways that enhance conversational flow (e.g., starting sentences with "And" or "But").</li>
            <li><strong>Contextual Bridges:</strong> Adding transitional phrases that rely on cultural context an AI training set might statistically underweight.</li>
            <li><strong>Asymmetrical Pacing:</strong> Humans write with irregular rhythm. We might write a 40-word sentence followed by a 3-word sentence. AI seeks equilibrium.</li>
        </ul>

        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
            <h3 className="font-bold text-brand-800 mb-2">2026 Prediction</h3>
            <p className="text-brand-700 text-sm">
                We predict that by the end of this year, "watermarking" will be standard in all major LLMs. However, tools like <strong>Humanizer.help</strong> which reconstruct text at the token level will remain effective because they destroy the watermark during the rewriting process.
            </p>
        </div>
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
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Mark",
    tag: "SEO Strategy",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           There is a misconception that Google penalizes AI content. Google has explicitly stated they penalize <em>low-quality</em> content, regardless of who (or what) wrote it. The problem? Raw AI output is almost always "average" quality by definition. It aggregates existing knowledge without adding new insight.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Helpful Content" Signal</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Google's algorithms heavily weight "Experience, Expertise, Authoritativeness, and Trustworthiness" (E-E-A-T). AI struggles immensely with the first "E": Experience. An AI cannot test a product, visit a location, or feel an emotion. When you use <strong>Humanizer.help</strong>, you aren't just bypassing a detector; you are injecting the nuance that signals "Experience."
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Dwell Time and Bounce Rate</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Robotic text is boring. It flows too perfectly, lacking the friction and hook that keeps a human reader engaged.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
             <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-red-500 mb-2">High Bounce Rate (AI)</h4>
                <p className="text-sm text-slate-500">"SEO is vital for marketing. It drives traffic. You need keywords to rank high." (Boring, repetitive structure).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-green-500 mb-2">High Engagement (Humanized)</h4>
                <p className="text-sm text-slate-500">"Think of SEO as the heartbeat of your marketing; without it, traffic flatlines. It's not just about keywords—it's about survival." (Metaphor, emotion, urgency).</p>
            </div>
        </div>

        <p className="text-slate-600 leading-relaxed">
            By humanizing your content, you increase the time users spend on the page. Google tracks this. Higher dwell time = higher rankings. It is that simple.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "Academic Integrity in the Age of AI: A Student's Guide",
    excerpt: "How to use AI tools ethically for research and outlining without crossing the line into plagiarism or academic dishonesty.",
    author: "Emily Davis",
    date: "January 02, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Emily",
    tag: "Education",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           Universities are adopting stricter policies regarding AI. But blanket bans are ineffective. The smart student knows that AI is a tool for <em>ideation</em>, not <em>creation</em>. The danger lies in submitting raw AI output, which is often factually hallucinatory and stylistically identifiable.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Hybrid" Approach</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           The most successful students in 2026 use a hybrid workflow:
        </p>
        <ol className="list-decimal list-inside mb-8 text-slate-600 space-y-3">
            <li><strong>Research & Outline (AI Allowed):</strong> Use AI to find sources (verify them!) and structure your arguments.</li>
            <li><strong>Drafting (Human/Hybrid):</strong> Write the core arguments yourself. Use AI to expand on bullet points.</li>
            <li><strong>Humanization (The Safety Net):</strong> Run your final draft through <strong>Humanizer.help</strong>. Why? Because even if you wrote it yourself, using Grammarly or spell-checkers can sometimes trigger false positives in Turnitin.</li>
        </ol>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">False Positives are Real</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           We have seen countless cases where students writing 100% original work get flagged because their writing style is "too formal." Academic writing is naturally robotic. Our "Academic Mode" is specifically designed to retain formal tone while introducing the statistical variance needed to prove human authorship.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "Beyond Synonyms: What 'Perplexity' Actually Means",
    excerpt: "A deep dive into the math behind AI detection. Why swapping words doesn't work, and why sentence complexity is the key variable.",
    author: "David Kim",
    date: "December 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "David",
    tag: "Technical Deep Dive",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           If you hang around AI forums, you hear the word "perplexity" thrown around constantly. But what is it? In Natural Language Processing (NLP), perplexity is a measurement of how well a probability model predicts a sample.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Low Perplexity = Robot</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Imagine playing "fill in the blank."
           <br />
           <em>"The cat sat on the ____."</em>
           <br />
           An AI (and most humans) will guess "mat." This is <strong>low perplexity</strong>. It is predictable.
           <br />
           A creative writer might say: <em>"The cat sat on the existential dread of a Tuesday afternoon."</em>
           <br />
           This is <strong>high perplexity</strong>. An AI would assign a very low probability to "existential dread" following "sat on the."
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Burstiness: The Time Dimension</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Burstiness is perplexity over time. AI writes with a metronome: tick, tick, tick. Sentence lengths average out. Humans write with jazz: a flurry of notes, then silence. Long, winding sentences followed by a fragment.
        </p>

        <p className="text-slate-600 leading-relaxed">
            <strong>Humanizer.help</strong> works by injecting high-perplexity tokens and enforcing high-burstiness sentence structures. It forces the text off the "path of least resistance" that LLMs naturally follow.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "Case Study: From 0 to 100k Views using Hybrid Writing",
    excerpt: "How one content creator scaled their blog using AI for volume and Humanizer.help for quality/SEO.",
    author: "Jessica Wu",
    date: "December 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Jessica",
    tag: "Case Study",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           Scaling a blog in 2025 is hard. The volume of content required to compete is massive. This is the story of "TechTrek," a niche tech blog that used our tools to dominate their niche.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem: The "Grey Goo" of AI</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           TechTrek started by posting 5 articles a day using raw GPT-4 output. For the first month, traffic grew. Then, the October 2025 Core Update hit. Their traffic crashed by 80%. Google had identified their content as "unhelpful programmatic SEO spam."
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Solution: The Humanization Layer</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           They didn't stop using AI. They just changed the workflow.
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2">
            <li><strong>Step 1:</strong> Generate draft with Claude 3.5.</li>
            <li><strong>Step 2:</strong> Process through <strong>Humanizer.help (Aggressive Mode)</strong>.</li>
            <li><strong>Step 3:</strong> Manually add 2 screenshots and 1 personal opinion per post.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Results</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Within 3 months, traffic not only recovered but doubled. Why? Because the humanized text broke the "spam patterns" Google looks for. The text had idiom, flow, and variance. It read like a tech enthusiast wrote it, not a database.
        </p>
      </>
    )
  },
  {
    id: 6,
    title: "10 Writing Habits That Trigger False Positives",
    excerpt: "You wrote it yourself, but it's flagged as AI. Why? We explore the common writing styles that confuse detectors.",
    author: "Alex Morgan",
    date: "November 22, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Alex",
    tag: "Writing Tips",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           It is the nightmare of every modern student and freelancer: You spend hours writing an essay from scratch, submit it, and get a 60% AI score. Are the detectors broken? Yes, but your writing style might be "robotic" by accident.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overusing "In Conclusion"</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           AI loves transition words like "Furthermore," "Moreover," and "In conclusion." If you use these at the start of every paragraph, you mimic the training data of GPT-4.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Consistent Paragraph Length</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           If every paragraph you write is exactly 4 sentences long, you are statistically an anomaly for a human. Humans ramble. We write one-sentence paragraphs for emphasis. We write walls of text when passionate.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Lack of "Fluff"</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Teachers taught you to be concise. Unfortunately, extreme conciseness is an AI trait. AI is efficient. Humans are messy. Adding a little bit of "fluff"—adjectives, side thoughts, rhetorical questions—actually helps prove you are human.
        </p>
      </>
    )
  },
  {
    id: 7,
    title: "The Ethics of AI Rewriting: Where Do We Draw the Line?",
    excerpt: "Is humanizing AI text cheating? A philosophical look at the purpose of writing tools in the modern workflow.",
    author: "Prof. James Wilson",
    date: "November 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "James",
    tag: "Opinion",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           As the creator of an AI humanization tool, I am often asked: "Aren't you just helping people cheat?" It is a valid question that deserves a nuanced answer. We believe that the definition of authorship is changing.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Spellcheck vs. AI Humanization</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           In the 1990s, educators feared that spellcheck would ruin literacy. In the 2000s, it was Wikipedia. In the 2010s, Grammarly. AI humanization is the next evolution. If you have the idea, and you use AI to articulate it, and then use a humanizer to refine the style—is the idea any less yours?
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Bias Against Non-Native Speakers</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           AI detectors disproportionately flag non-native English speakers. Their writing tends to be more formulaic and use simpler vocabulary—traits that detectors associate with AI. Tools like <strong>Humanizer.help</strong> level the playing field, allowing ESL students to produce text that flows as naturally as that of a native speaker, without being unfairly penalized by biased algorithms.
        </p>
      </>
    )
  },
  {
    id: 8,
    title: "Technical Update: Handling 'Hallucinations' in Rewriting",
    excerpt: "How our latest model update ensures that facts remain 100% accurate while changing the sentence structure.",
    author: "Dev Team",
    date: "October 30, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Dev",
    tag: "Product Update",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           One of the biggest risks in paraphrasing (whether manual or AI) is the accidental changing of facts. If the original text says "The revenue grew by 5%," and the rewriter changes it to "The revenue grew significantly," information is lost.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Fact-Lock" Algorithm</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           In our latest update (v4.2), we introduced "Fact-Lock." This layer of the model identifies proper nouns, dates, statistics, and quotes before the humanization process begins.
        </p>

        <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm mb-6">
            <span className="text-blue-400">INPUT:</span> "Apple released the iPhone in 2007."<br/><br/>
            <span className="text-red-400">BAD REWRITE:</span> "The tech giant launched its phone recently." (Fact lost)<br/><br/>
            <span className="text-green-400">HUMANIZER.HELP:</span> "Back in 2007, the mobile landscape changed forever when Apple dropped the first iPhone." (Fact preserved, style changed).
        </div>

        <p className="text-slate-600 leading-relaxed">
            This ensures that you can use our tool for technical papers, medical journals, and financial reports without fear of data corruption.
        </p>
      </>
    )
  }
];

export const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostId]);

  const activePost = articles.find(a => a.id === selectedPostId);

  // --- SINGLE POST VIEW ---
  if (selectedPostId && activePost) {
      return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
             <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Button */}
                <button 
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-8 font-medium"
                >
                    <ChevronLeft size={20} /> Back to Blog
                </button>

                {/* Article Header */}
                <div className="mb-8">
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
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                        {activePost.title}
                    </h1>

                    {/* Author Block */}
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

                {/* Featured Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg mb-12 h-[300px] md:h-[400px]">
                    <img 
                        src={activePost.image} 
                        alt={activePost.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Body */}
                <div className="prose prose-lg prose-slate max-w-none mb-16">
                    {activePost.content}
                </div>

                {/* Bottom CTA */}
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

  // --- LIST VIEW ---
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
            <article 
                key={article.id} 
                onClick={() => setSelectedPostId(article.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                  {article.tag}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                      <img 
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${article.avatarSeed}`} 
                        alt={article.author}
                        className="w-full h-full object-cover"
                      />
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