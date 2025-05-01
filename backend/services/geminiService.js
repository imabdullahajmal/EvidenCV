import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateResponse(userInput) {
    const prompt = `
You are a resume assistant. The user will provide a natural language description of their background.

Your job is to extract structured resume data and return it ONLY in the following JSON format:

{
  "name": "",
  "email": "",
  "phone": "",
  "summary": "",
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": ""
    }
  ],
  "skills": [],
  "experience": [],
  "projects": []
}

Now extract the data from this user input and return only JSON:
"${userInput}"
`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: prompt,
    });

    const text = response.text;

    const jsonText = text.replace(/^```json\n|\n```$/g, '').trim();

  try {
    const jsonData = JSON.parse(jsonText);
    return jsonData;
  } catch (err) {
    console.error('Failed to parse JSON:', err.message);
    return null;
  }
}



