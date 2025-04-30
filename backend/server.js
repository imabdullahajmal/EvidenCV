require('dotenv').config();
const express = require('express');
const cors = require('cors');
const geminiRoutes = require('./routes/gemini');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/conversation', geminiRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
