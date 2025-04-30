require('dotenv').config(); // Load .env variables

<<<<<<< HEAD
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent`;

async function generateResponse(prompt) {
//   const response = await axios.post(
//     `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
//     {
//       contents: [{ parts: [{ text: prompt }] }]
//     }
//   );

//   const message = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    console.log(`${prompt} -  recieved`);
    return `${prompt} -  recieved`;
=======
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini client
const ai = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateResponse(userInput) {
  const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const wrappedPrompt = `
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
>>>>>>> ba96d607cd317da17eae0503c6c43dcb94e99590
}

Now extract the data from this user input and return only JSON:
"${userInput}"
`;

  const result = await model.generateContent(wrappedPrompt);
  const response = await result.response;
  const raw = response.text();

  try {
    const data = JSON.parse(raw);
    return data;
  } catch (err) {
    console.error('JSON parsing error:', err.message);
    throw new Error('Failed to parse JSON. Gemini response may be malformed.');
  }
}


module.exports = { generateResponse };

