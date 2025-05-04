import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas'; // For image preview
import jsPDF from 'jspdf'; // For generating the PDF

const ResumePreviewAndDownload = ({ data }) => {
  const resumeRef = useRef(null); // Ref to the resume container
  const [imageUrl, setImageUrl] = useState(null); // State for storing image URL

  const {
    name,
    email,
    phone,
    summary,
    skills = [],
    education = [],
    experience = [],
    projects = [],
  } = data;

  const generateImagePreview = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      setImageUrl(canvas.toDataURL('image/png')); // Store the canvas image as a URL
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Set up the document with text and styles, similar to how the HTML is structured
    doc.setFont("Helvetica");
    doc.text(name, 10, 10); // Adding Name

    if (email || phone) {
      doc.text(`Email: ${email || 'N/A'}`, 10, 20);
      doc.text(`Phone: ${phone || 'N/A'}`, 10, 30);
    }

    if (skills.length > 0) {
      doc.text('Skills:', 10, 40);
      skills.forEach((skill, idx) => doc.text(`${skill}`, 10, 50 + idx * 10));
    }

    if (summary) {
      doc.text('Summary:', 10, 60);
      doc.text(summary, 10, 70);
    }

    // Add Experience, Education, and Projects similarly
    // For simplicity, I am just adding titles and sample data here.

    doc.save('resume.pdf');
  };

  return (
    <div>
      {/* This is the container for the HTML that will be rendered into an image */}
      <div ref={resumeRef} style={{ width: '210mm', height: '297mm', padding: '10mm', border: '1px solid #ccc' }}>
        <h1>{name}</h1>
        {email && <p>Email: {email}</p>}
        {phone && <p>Phone: {phone}</p>}
        {skills.length > 0 && (
          <>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </>
        )}
        {summary && (
          <>
            <h2>Summary</h2>
            <p>{summary}</p>
          </>
        )}
        {/* Render other sections similarly (Experience, Education, Projects) */}
      </div>

      {/* Image Preview of the HTML */}
      {imageUrl && <img src={imageUrl} alt="Resume Preview" />}

      {/* Buttons */}
      <button onClick={generateImagePreview}>Generate Image Preview</button>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default ResumePreviewAndDownload;
