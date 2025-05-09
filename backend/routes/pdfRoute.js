const router = express.Router();
import express from 'express';
import { generatePDF } from '../services/pdfService.js';


// POST /api/generate
router.post('/generate', async (req, res) => {
  const { html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'HTML content is required' });
  }

  try {
    const pdfResult = await generatePDF(html);
    res.status(200).json(pdfResult);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
});

export default router;
