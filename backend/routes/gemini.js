import express from 'express';
import { generateResponse } from '../services/geminiService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userInput = req.body.message;
    const result = await generateResponse(userInput);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
