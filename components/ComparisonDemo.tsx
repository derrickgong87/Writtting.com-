import React from 'react';

// This component visually recreates the screenshot provided in the prompt.
// It serves as the "Image replacement" for the top section.
export const ComparisonDemo: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See the Difference</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Our advanced algorithms completely restructure AI text to bypass even the most rigorous detection systems like Turnitin.
          </p>
        </div>

        {/* The Visual Comparison Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
            
            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl border-4 border-slate-50 font-black text-2xl text-slate-300 italic">
                VS
            </div>

            {/* Before Card (Gray/Red Theme) */}
            <div className="flex-1 w-full bg-slate-100 rounded-[2rem] p-3 shadow-lg border border-slate-200">
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-full">
                     {/* Fake Header */}
                    <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-20 h-3 bg-slate-200 rounded"></div>
                        </div>
                        <div className="w-32 h-3 bg-slate-100 rounded"></div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Turnitin-style Alert */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1">
                                <h3 className="text-4xl font-bold text-slate-800 mb-2">100% detected as AI</h3>
                                <p className="text-xs text-slate-500">The percentage indicates the combined amount of likely AI-generated text.</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 p-3 rounded text-[10px] text-blue-700 md:w-48 leading-tight">
                                <strong>Caution: Review required.</strong><br/>It is essential to understand limitations of AI detection before making decisions.
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mb-6 space-y-2">
                             <div className="flex items-center gap-2 text-xs text-slate-600">
                                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[8px]">1</div>
                                <span>AI-generated only <strong>100%</strong></span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-400">
                                <div className="w-4 h-4 rounded-full bg-purple-400 text-white flex items-center justify-center font-bold text-[8px]">2</div>
                                <span>AI-generated text that was AI-paraphrased <strong>0%</strong></span>
                             </div>
                        </div>

                        {/* Content Body - The "AI" text */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-800 font-normal">
                           With the rapid development of big data and computing power, artificial intelligence (AI) has penetrated complex decision-making scenarios such as financial risk management and urban traffic control. This paper explores the application mechanism of deep learning and reinforcement learning in intelligent decision-making systems...
                           <span className="bg-blue-100 text-blue-800 px-1">Experiments show that the fusion of multi-source heterogeneous data can improve accuracy by 15%...</span>
                        </div>
                    </div>
                </div>
                {/* Label */}
                <div className="text-center mt-4 mb-2 font-bold text-slate-400 uppercase tracking-widest text-sm">Before Humanizing</div>
            </div>

            {/* After Card (Blue Theme) */}
             <div className="flex-1 w-full bg-brand-500 rounded-[2rem] p-3 shadow-2xl shadow-brand-500/30">
                <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-full relative">
                    {/* Glow effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-green-400"></div>

                     {/* Fake Header */}
                    <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-20 h-3 bg-slate-200 rounded"></div>
                        </div>
                        <div className="w-32 h-3 bg-slate-100 rounded"></div>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Clean Result Alert */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="flex-1">
                                <h3 className="text-4xl font-bold text-brand-600 mb-2">0% detected as AI</h3>
                                <p className="text-xs text-slate-500">The percentage indicates the combined amount of likely AI-generated text.</p>
                            </div>
                             <div className="bg-green-50 border border-green-100 p-3 rounded text-[10px] text-green-700 md:w-48 leading-tight opacity-50 blur-[1px]">
                                <strong>Great work!</strong><br/>Original content detected. No issues found with this submission.
                            </div>
                        </div>

                         {/* Legend */}
                        <div className="mb-6 space-y-2">
                             <div className="flex items-center gap-2 text-xs text-slate-400">
                                <div className="w-4 h-4 rounded-full bg-blue-500 opacity-50 text-white flex items-center justify-center font-bold text-[8px]">0</div>
                                <span>AI-generated only <strong>0%</strong></span>
                             </div>
                             <div className="flex items-center gap-2 text-xs text-slate-400">
                                <div className="w-4 h-4 rounded-full bg-purple-400 opacity-50 text-white flex items-center justify-center font-bold text-[8px]">0</div>
                                <span>AI-generated text that was AI-paraphrased <strong>0%</strong></span>
                             </div>
                        </div>

                        {/* Content Body - The "Human" text */}
                        <div className="text-sm md:text-base leading-relaxed text-slate-800 font-normal">
                           With the advancement of big data and computing power, artificial intelligence (AI) has begun to penetrate complex decision-making scenarios such as finance risk management and urban traffic control. This paper discusses the application mechanism of deep learning and reinforcement learning in intelligent decision-making systems...
                           <span className="bg-green-100 text-green-900 px-1">Studies indicate that fusing various different sources of data increases the accuracy of the decisions made by AI models...</span>
                        </div>
                    </div>
                </div>
                 {/* Label */}
                <div className="text-center mt-4 mb-2 font-bold text-white/90 uppercase tracking-widest text-sm">After Humanizing</div>
            </div>

        </div>
      </div>
    </section>
  );
};