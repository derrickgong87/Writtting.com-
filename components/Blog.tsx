import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, ChevronLeft, Share2, Bookmark } from 'lucide-react';

// Extended Article Data with Full Content for SEO
const articles = [
  {
    id: 1,
    title: "Mastering the Art of AI Humanization: Tips for Better Results",
    excerpt: "Achieving a 100% human score requires more than just synonym swapping. Learn how context, sentence variety, and idiomatic phrasing play a crucial role.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Sarah",
    tag: "Guides",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
          In the rapidly evolving landscape of academic and professional writing, the line between human and machine-generated text is becoming increasingly blurred. However, detection algorithms are catching up. Simply asking an LLM to "rewrite" text is no longer sufficient to bypass advanced detectors like Turnitin or GPTZero. To truly humanize AI text, one must understand the linguistic fingerprints that AI leaves behind.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Synonym Trap"</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
          Many amateur writers attempt to bypass AI detection by simply swapping synonyms. For example, changing "utilize" to "use" or "happy" to "joyful." Detectors are trained to spot this. AI models predict the next word in a sequence based on probability. If you only change individual words without altering the <strong>syntactic structure</strong>, the underlying mathematical probability of the sentence remains largely detectable.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Role of Perplexity and Burstiness</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
          To master AI humanization, you need to optimize for two key metrics:
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2 pl-4 border-l-4 border-brand-100">
          <li><strong>Perplexity:</strong> This measures how "surprised" a model is by your text. AI text has low perplexity (it's predictable). Human text is chaotic and has high perplexity.</li>
          <li><strong>Burstiness:</strong> This measures the variation in sentence structure and length. AI tends to write sentences of average length with a consistent rhythm. Humans write short, punchy sentences followed by long, complex, winding explanations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Tips for "Human" Writing</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
          When using tools like <strong>Humanizer.help</strong>, we automate this process, but understanding the theory helps you refine the output:
        </p>
        <ol className="list-decimal list-inside mb-8 text-slate-600 space-y-3">
            <li><strong>Break the pattern:</strong> Intentionally interrupt long explanations with a short question or statement.</li>
            <li><strong>Use Idioms:</strong> AI struggles with culturally specific idioms because they often defy literal logic.</li>
            <li><strong>Personal Anecdotes:</strong> Even in academic writing, a unique perspective or specific, non-generic example can drastically lower detection scores.</li>
        </ol>

        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 my-8">
            <h3 className="font-bold text-brand-800 mb-2">Key Takeaway</h3>
            <p className="text-brand-700 text-sm">
                True humanization isn't about deception; it's about elevating the quality of the writing to include nuance, variability, and specific intent that statistical models simply cannot replicate on their own.
            </p>
        </div>
      </>
    )
  },
  {
    id: 2,
    title: "Understanding How AI Detectors Work in 2024",
    excerpt: "We analyze the underlying mechanisms of Turnitin, GPTZero, and Originality.ai. Discover why perplexity and burstiness are the key metrics.",
    author: "Mark Johnson",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Mark",
    tag: "Tech Analysis",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           It is an arms race. As Large Language Models (LLMs) like GPT-4 and Claude 3 become more sophisticated, the tools designed to detect them—Turnitin, Originality.ai, and GPTZero—are evolving just as fast. Understanding the mechanics of detection is the first step to ensuring your content remains flagged as original.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Watermarking Hypothesis</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Some researchers propose "watermarking" AI output—embedding a secret statistical pattern into the word choice that only a computer can see. While OpenAI has experimented with this, most current detection tools do not rely on watermarks. Instead, they rely on <strong>probability analysis</strong>.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">How Turnitin Detects AI</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Turnitin’s AI writing detection capability is trained on a massive dataset of academic papers. It looks for text segments that look "too average."
        </p>
        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-700 my-6 py-2 bg-slate-50 rounded-r-lg">
            "If an LLM can predict your next word with 99% accuracy, it is likely that an LLM wrote it."
        </blockquote>
        <p className="mb-6 text-slate-600 leading-relaxed">
           This is why highly technical or formal writing often triggers false positives. Academic writing is naturally structured and predictable, overlapping significantly with how AI is trained to write.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Bypassing Detection with Structure</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           To avoid false flags, you must introduce "entropy" or randomness into your writing.
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2">
            <li><strong>Sentence Length Variation:</strong> Never write three sentences of the same length in a row.</li>
            <li><strong>Active vs. Passive Voice:</strong> AI loves passive voice ("It was decided that..."). Humans prefer active voice ("We decided...").</li>
            <li><strong>Sub-clauses:</strong> Use complex sentence structures that combine ideas in novel ways, rather than simple subject-verb-object chains.</li>
        </ul>

        <p className="text-slate-600 leading-relaxed">
            Our tool, <strong>Humanizer.help</strong>, automates this structural reshuffling, ensuring that even if the content is similar, the statistical footprint is fundamentally human.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "Why Context Matters: Improving AI Text Flow",
    excerpt: "Robotic text often lacks the subtle contextual bridges that human writers use naturally. Here is how Humanizer.help injects logical flow.",
    author: "Emily Davis",
    date: "March 05, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    avatarSeed: "Emily",
    tag: "Writing Tips",
    content: (
      <>
        <p className="lead text-xl text-slate-600 mb-8">
           Have you ever read a paragraph that felt... disjointed? The facts were correct, the grammar was perfect, but it felt like a list of statements rather than a cohesive narrative. This is the hallmark of AI generation. AI understands words, but it often struggles with the <em>connective tissue</em> of language known as context flow.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Listicle" Problem</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           AI models tend to treat sentences as isolated units of information. They often stack facts: "The sky is blue. Rayleigh scattering causes this. It happens during the day." A human writer weaves these together: "Because of a phenomenon called Rayleigh scattering, we perceive the daytime sky as blue."
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Injecting Logical Bridges</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           To improve SEO and readability, you must use logical bridges (transition words) effectively. These signals tell the reader (and the search engine) how ideas relate to one another.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-red-500 mb-2">AI Style (Robotic)</h4>
                <p className="text-sm text-slate-500">"SEO is important. It helps you rank. You should use keywords."</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-green-500 mb-2">Human Style (Flowing)</h4>
                <p className="text-sm text-slate-500">"Since SEO is critical for ranking, it is essential that you strategically utilize keywords."</p>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Semantic SEO and Humanization</h2>
        <p className="mb-6 text-slate-600 leading-relaxed">
           Google's helpful content update specifically penalizes content that lacks depth or feels automated. By humanizing your text, you aren't just bypassing detectors; you are actually optimizing for Google's algorithms. Google wants to see:
        </p>
        <ul className="list-disc list-inside mb-6 text-slate-600 space-y-2">
            <li><strong>Expertise:</strong> Demonstrated through deep, connected insights.</li>
            <li><strong>Experience:</strong> Demonstrated through unique tone and voice.</li>
        </ul>

        <p className="text-slate-600 leading-relaxed">
            By focusing on the flow between sentences—the "why" and "how" rather than just the "what"—you create content that resonates with human readers and search engines alike.
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