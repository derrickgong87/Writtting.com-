import React from 'react';

// This component visually recreates the screenshot provided in the prompt.
// It serves as the "Image replacement" for the top section.
export const ComparisonDemo: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          {/* Header matched to TextHumanizer (text-3xl md:text-5xl font-extrabold) */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">See the Difference</h2>
          {/* Description matched to TextHumanizer (text-lg text-slate-500) */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our advanced algorithms completely restructure AI text to bypass even the most rigorous detection systems like Turnitin.
          </p>
        </div>

        {/* The Visual Comparison Container - Width reduced for better proportions */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
            
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl border-4 border-slate-50 font-black text-2xl text-slate-300 italic">
                VS
            </div>

            {/* Before Card (RED Theme) */}
            <div className="flex-1 w-full bg-red-50/50 rounded-[2rem] p-3 shadow-lg border border-red-100">
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-full ring-1 ring-red-100">
                     {/* Fake Header */}
                    <div className="h-12 border-b border-red-50 flex items-center px-4 justify-between bg-red-50/30">
                        <div className="flex items-center gap-2">
                            <div className="w-20 h-3 bg-red-100 rounded"></div>
                        </div>
                        <div className="w-32 h-3 bg-red-50 rounded"></div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Turnitin-style Alert - RED */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1">
                                <h3 className="text-4xl font-black text-red-600 mb-2">
                                  100% detected as AI
                                </h3>
                                <p className="text-xs text-red-400 font-medium">The percentage indicates the combined amount of likely AI-generated text.</p>
                            </div>
                            <div className="bg-red-50 border border-red-100 p-3 rounded text-[10px] text-red-700 md:w-48 leading-tight">
                                <strong>Caution: Review required.</strong><br/>It is essential to understand limitations of AI detection before making decisions.
                            </div>
                        </div>

                        {/* Legend - RED */}
                        <div className="mb-6 space-y-2">
                             <div className="flex items-center gap-2 text-xs text-red-700 font-medium">
                                <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[8px]">1</div>
                                <span>AI-generated only <strong>100%</strong></span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-red-400/80">
                                <div className="w-4 h-4 rounded-full bg-red-300 text-white flex items-center justify-center font-bold text-[8px]">2</div>
                                <span>AI-generated text that was AI-paraphrased <strong>0%</strong></span>
                             </div>
                        </div>

                        {/* Content Body - The "AI" text - RED Highlights */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-700 font-normal">
                           With the rapid development of big data and computing power, <span className="text-red-600 font-medium">artificial intelligence (AI)</span> has penetrated complex decision-making scenarios such as financial risk management and urban traffic control. This paper explores the application mechanism of deep learning and reinforcement learning in intelligent decision-making systems...
                           <span className="bg-red-100 text-red-800 px-1 decoration-red-200 underline decoration-2 underline-offset-2">Experiments show that the fusion of multi-source heterogeneous data can improve accuracy by 15%...</span>
                        </div>
                    </div>
                </div>
                {/* Label */}
                <div className="text-center mt-4 mb-2 font-bold text-red-400 uppercase tracking-widest text-sm">Before Humanizing</div>
            </div>

            {/* After Card (GREEN Theme) */}
             <div className="flex-1 w-full bg-emerald-50/50 rounded-[2rem] p-3 shadow-lg border border-emerald-100">
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-full ring-1 ring-emerald-100 relative">
                    {/* Fake Header */}
                    <div className="h-12 border-b border-emerald-50 flex items-center px-4 justify-between bg-emerald-50/30">
                         <div className="flex items-center gap-2">
                            <div className="w-20 h-3 bg-emerald-100 rounded"></div>
                        </div>
                        <div className="w-32 h-3 bg-emerald-50 rounded"></div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Clean Result Alert - GREEN */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1">
                                <h3 className="text-4xl font-black text-emerald-500 mb-2">
                                  0% detected as AI
                                </h3>
                                <p className="text-xs text-emerald-600/70 font-medium">The percentage indicates the combined amount of likely AI-generated text.</p>
                            </div>
                             <div className="bg-emerald-50 border border-emerald-100 p-3 rounded text-[10px] text-emerald-700 md:w-48 leading-tight">
                                <strong>Great work!</strong><br/>Original content detected. No issues found with this submission.
                            </div>
                        </div>

                         {/* Legend - GREEN */}
                        <div className="mb-6 space-y-2">
                             <div className="flex items-center gap-2 text-xs text-emerald-600/50">
                                <div className="w-4 h-4 rounded-full bg-emerald-500 opacity-50 text-white flex items-center justify-center font-bold text-[8px]">0</div>
                                <span>AI-generated only <strong>0%</strong></span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-emerald-600/50">
                                <div className="w-4 h-4 rounded-full bg-emerald-300 opacity-50 text-white flex items-center justify-center font-bold text-[8px]">0</div>
                                <span>AI-generated text that was AI-paraphrased <strong>0%</strong></span>
                             </div>
                        </div>

                        {/* Content Body - The "Human" text - GREEN Highlights */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-700 font-normal">
                           With the advancement of big data and computing power, <span className="text-emerald-600 font-medium">artificial intelligence (AI)</span> has begun to penetrate complex decision-making scenarios such as finance risk management and urban traffic control. This paper discusses the application mechanism of deep learning and reinforcement learning in intelligent decision-making systems...
                           <span className="bg-emerald-100 text-emerald-800 px-1 decoration-emerald-200 underline decoration-2 underline-offset-2">Studies indicate that fusing various different sources of data increases the accuracy of the decisions made by AI models...</span>
                        </div>
                    </div>
                </div>
                 {/* Label */}
                <div className="text-center mt-4 mb-2 font-bold text-emerald-500 uppercase tracking-widest text-sm">After Humanizing</div>
            </div>

        </div>
      </div>
    </section>
  );
};