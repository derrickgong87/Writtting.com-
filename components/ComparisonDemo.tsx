
import React from 'react';

// This component visually recreates the "Undetectable" evidence from the landing page.
// It uses pure Tailwind to simulate a high-fidelity screenshot of a detection report.
export const ComparisonDemo: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Proven Results</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our technology doesn't just shuffle words. It reconstructs the linguistic DNA of your text to satisfy even the most advanced AI classifiers.
          </p>
        </div>

        {/* The Visual Comparison Container */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative">
            
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-[0_0_50px_rgba(0,0,0,0.1)] border-[6px] border-slate-50">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xl font-black text-white italic tracking-tighter shadow-inner">
                    VS
                </div>
            </div>

            {/* Before Card (AI Content - 100% Detected) */}
            <div className="flex-1 w-full bg-red-50/40 rounded-[2.5rem] p-4 shadow-xl border border-red-100 flex flex-col">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex-1 ring-1 ring-red-100 flex flex-col">
                     {/* Turnitin UI Header */}
                    <div className="h-14 border-b border-red-50 flex items-center px-6 justify-between bg-red-50/20">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-24 h-2.5 bg-red-100 rounded-full"></div>
                        </div>
                        <div className="text-[10px] font-bold text-red-300 font-mono">SUBMISSION_ID: 9821034</div>
                    </div>

                    <div className="p-8 md:p-10 flex-1">
                        {/* Turnitin-style Alert */}
                        <div className="flex flex-col md:flex-row gap-6 mb-10 items-start">
                            <div className="flex-1">
                                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">AI Detection Score</div>
                                <h3 className="text-5xl font-black text-red-600 mb-2 tabular-nums">
                                  100%
                                </h3>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
                                    <div className="h-full bg-red-600 w-full transition-all duration-1000"></div>
                                </div>
                            </div>
                            <div className="bg-red-50/80 border border-red-100 p-4 rounded-xl text-[10px] text-red-800 md:w-52 leading-relaxed backdrop-blur-sm">
                                <strong className="block mb-1">System Warning</strong>
                                High probability of automated generation detected. Content lacks significant human linguistic variance and burstiness markers.
                            </div>
                        </div>

                        {/* Text Body with Red Highlights */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-800 font-normal space-y-4">
                           <p>
                             The integration of <span className="text-red-600 font-semibold underline decoration-red-200 decoration-2 underline-offset-4">artificial intelligence into supply chain management</span> has fundamentally altered the paradigm of logistics and inventory control. By leveraging massive datasets, machine learning models can predict market fluctuations with a high degree of accuracy.
                           </p>
                           <p className="bg-red-50 text-red-900 px-1 py-0.5 rounded border-b border-red-200">
                             Recent research indicates that organizations adopting these technologies see a 20% reduction in waste. The scalability of such solutions makes them indispensable for global trade. However, the complexity of implementation remains a significant barrier for smaller enterprises.
                           </p>
                           <p>
                             In conclusion, the <span className="text-red-600 font-semibold underline decoration-red-200 decoration-2 underline-offset-4">future of logistics is inextricably linked</span> to the continuous improvement of AI-driven optimization algorithms.
                           </p>
                        </div>
                    </div>
                </div>
                {/* Label */}
                <div className="text-center mt-6 mb-2">
                    <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-200">Raw AI Draft</span>
                </div>
            </div>

            {/* After Card (Humanized Content - 0% Detected) */}
             <div className="flex-1 w-full bg-emerald-50/40 rounded-[2.5rem] p-4 shadow-xl border border-emerald-100 flex flex-col">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex-1 ring-1 ring-emerald-100 relative flex flex-col">
                    {/* Turnitin UI Header */}
                    <div className="h-14 border-b border-emerald-50 flex items-center px-6 justify-between bg-emerald-50/20">
                         <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            <div className="w-24 h-2.5 bg-emerald-100 rounded-full"></div>
                        </div>
                        <div className="text-[10px] font-bold text-emerald-300 font-mono">SUBMISSION_ID: 9821035</div>
                    </div>

                    <div className="p-8 md:p-10 flex-1">
                        {/* Clean Result Alert */}
                        <div className="flex flex-col md:flex-row gap-6 mb-10 items-start">
                            <div className="flex-1">
                                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">AI Detection Score</div>
                                <h3 className="text-5xl font-black text-emerald-500 mb-2 tabular-nums">
                                  0%
                                </h3>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
                                    <div className="h-full bg-emerald-500 w-[2%] transition-all duration-1000"></div>
                                </div>
                            </div>
                             <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-xl text-[10px] text-emerald-800 md:w-52 leading-relaxed backdrop-blur-sm">
                                <strong className="block mb-1">Analysis Report</strong>
                                Natural linguistic patterns identified. Text exhibits authentic semantic complexity, varied syntax, and irregular rhythmic pacing typical of human authors.
                            </div>
                        </div>

                        {/* Text Body with Green Highlights */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-800 font-normal space-y-4">
                           <p>
                             The way we handle logistics has shifted dramatically now that <span className="text-emerald-600 font-semibold underline decoration-emerald-200 decoration-2 underline-offset-4">AI is becoming a staple in supply chain strategy.</span> It's no longer just about moving goods; it's about interpreting massive data streams to foresee market shifts before they even happen.
                           </p>
                           <p className="bg-emerald-50 text-emerald-900 px-1 py-0.5 rounded border-b border-emerald-200">
                             Studies show a notable 20% drop in operational waste among early adopters. While these solutions are powerful for global players, smaller firms still struggle with the steep learning curve and initial costs.
                           </p>
                           <p>
                             Ultimately, the <span className="text-emerald-600 font-semibold underline decoration-emerald-200 decoration-2 underline-offset-4">future of efficient global trade</span> rests on how effectively we can bake these intelligent algorithms into our existing logistics framework.
                           </p>
                        </div>
                    </div>
                </div>
                 {/* Label */}
                <div className="text-center mt-6 mb-2">
                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200">Humanizer.help Result</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
