import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { HERO_DATA, ABOUT_TEXT, SKILLS, PROJECTS, EXPERIENCE_DETAILS, RESUME_EXTRA } from '../constants';

const MODEL_NAME = "gemini-1.5-flash";

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${HERO_DATA.name}'s portfolio website.
Your role is to answer questions about ${HERO_DATA.name}'s skills, experience, projects, and background based on his resume.

Here is the context about ${HERO_DATA.name}:
- Role: ${HERO_DATA.role}
- Tagline: "${HERO_DATA.tagline}"
- About: ${ABOUT_TEXT}
- Skills: ${SKILLS.map(s => s.name).join(', ')}, ${RESUME_EXTRA.otherSkills.join(', ')}
- Strengths: ${RESUME_EXTRA.strengths.join(', ')}
- Work Experience: ${EXPERIENCE_DETAILS.map(e => `${e.role} at ${e.company} (${e.period}). Key Achievements: ${e.description}`).join('; ')}
- Projects: ${PROJECTS.map(p => `${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('; ')}

Tone: Professional, friendly, and enthusiastic (Cybersecurity themed).
Constraints:
- Keep answers concise (under 3 sentences unless asked for detail).
- If asked about something not in the context, politely say you don't know but can help with info about the portfolio.
- Do not make up facts.
`;

export const streamChatResponse = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<AsyncGenerator<string, void, unknown>> => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please set VITE_API_KEY in your .env file.");
    }

    // Initialize the API client lazily to avoid crash on load if key is missing
    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    // Return a generator that yields text chunks
    return (async function* () {
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    })();

  } catch (error) {
    console.error("Gemini API Error:", error);
     return (async function* () {
      yield "Connection interrupted. Please check API configuration.";
    })();
  }
};