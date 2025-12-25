import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const humanizeText = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert editor and writer. Your task is to rewrite the following text to make it sound more natural, human-like, and less detectable as AI-generated. 
      
      Instructions:
      1. Vary sentence length and structure significantly.
      2. Use more colloquial or idiomatic phrasing where appropriate for the context.
      3. Maintain the original meaning and core information.
      4. Avoid repetitive patterns common in LLM outputs.
      5. Do not add conversational filler like "Here is the rewritten text". Just return the text.

      Original Text:
      "${text}"`,
    });

    return response.text || "Could not generate text.";
  } catch (error) {
    console.error("Error humanizing text:", error);
    return "Error: Unable to process text at this time. Please try again.";
  }
};