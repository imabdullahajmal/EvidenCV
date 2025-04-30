const express = require('express');
const router = express.Router();
const { generateResponse } = require('../services/geminiService');

router.post('/', async (req, res) => {
  const { userInput, context } = req.body;

  try {
    const prompt = `Previous info: ${context || 'None'}\nUser: ${userInput}`;
    const reply = await generateResponse(prompt);
    res.json({ message: reply });
  } catch (error) {
    console.error('Gemini error:', error.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

module.exports = router;
