import axios from 'axios';

const PDF_API_URL = 'https://api.pdfendpoint.com/v1/convert';
const PDF_API_KEY = process.env.PDF_API_KEY;

export async function generatePDF(htmlContent) {
  try {
    const response = await axios.post(
      PDF_API_URL,
      {
        html: htmlContent,
        margin_top: '1cm',
        margin_bottom: '1cm',
        margin_right: '1cm',
        margin_left: '1cm',
        no_backgrounds: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${PDF_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
}
