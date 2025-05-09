import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import geminiRoutes from './routes/gemini.js';
import pdfRoutes from './routes/pdfRoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use('/api/conversation', geminiRoutes);
app.use('/api/pdf', pdfRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

/* 
wflow text->json->html->pdf
*/