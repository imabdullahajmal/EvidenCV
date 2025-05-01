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


example output:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1 (555) 123-4567",
  "summary": "Results-driven Digital Marketing Manager with 6+ years of experience in developing data-driven strategies to boost brand visibility and drive growth...",
  "education": [
    {
      "degree": "Bachelor of Science in Marketing",
      "institution": "University of California, Los Angeles (UCLA)",
      "year": "2017"
    }
  ],
  "skills": [
    "SEO",
  ],
  "experience": [
    {
      "job_title": "Digital Marketing Manager",
      "company": "Tech Innovations Inc.",
      "year_range": "2020 - Present",
      "responsibilities": [
        "Develop and implement SEO strategies to improve search engine rankings.",
      ],
      "achievements": [
        "Increased organic traffic by 40% in the first year.",
        "Managed a team of 5 digital marketers, achieving a 20% increase in lead generation."
      ]
    },

  ],
  "projects": [
    {
      "project_title": "E-commerce Website Redesign",
      "description": "Led the SEO and digital marketing strategy for a major e-commerce website redesign, improving both user experience and search engine visibility.",
      "technologies": ["WordPress", "Google Analytics", "SEO Tools"],
      "year": "2021"
    },
  ]
}


Here the Summary should be a brief introduction of user.
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



