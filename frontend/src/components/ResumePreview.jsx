import React from 'react';

const ResumePreview = ({ data }) => {
  const {
    name,
    email,
    phone,
    summary,
    skills = [],
    education = [],
    experience = [],
    projects = []
  } = data;

  const hasContact = email || phone;

  return (
    <div style={{
      width: '210mm',
      height: '297mm',
      transform: 'scale(0.5)',
      transformOrigin: 'top left',
      border: '1px solid #ccc',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', sans-serif",
      background: '#fff',
      color: '#333',
      padding: '20mm',
      boxSizing: 'border-box',
      textAlign: 'left', // Ensuring all content is left-aligned
    }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{
          width: '30%',
          background: '#f4f4f4',
          padding: '10mm',
          textAlign: 'left',
          boxSizing: 'border-box', // Ensures padding is inside the width
          overflow: 'hidden', // Prevents overflow from the sidebar
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{name}</h1>
          {hasContact && (
            <div style={{
              fontSize: '14px',
              marginBottom: '15px',
              wordWrap: 'break-word', // Ensures text wraps properly
              maxWidth: '100%', // Prevents overflow
            }}>
              {email && <p>Email: {email}</p>}
              {phone && <p>Phone: {phone}</p>}
            </div>
          )}
          {skills.length > 0 && (
            <>
              <h2 style={{ fontSize: '16px', marginTop: '20px', borderBottom: '1px solid #aaa' }}>Skills</h2>
              <ul style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '5px' }}>
                {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
              </ul>
            </>
          )}
        </div>
        <div style={{
          width: '70%',
          padding: '10mm',
          textAlign: 'left',
          boxSizing: 'border-box',
        }}>
          {summary && (
            <>
              <h2 style={{ fontSize: '16px', marginTop: '20px', borderBottom: '1px solid #aaa' }}>Summary</h2>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>{summary}</p>
            </>
          )}

          {experience.length > 0 && (
            <>
              <h2 style={{ fontSize: '16px', marginTop: '20px', borderBottom: '1px solid #aaa' }}>Experience</h2>
              {experience.map((exp, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <p style={{ fontWeight: 'bold' }}>
                    {exp.job_title}, {exp.company} ({exp.year_range})
                  </p>
                  <ul style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '5px' }}>
                    {exp.responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
                    {exp.achievements?.map((a, i) => <li key={`a-${i}`}><em>{a}</em></li>)}
                  </ul>
                </div>
              ))}
            </>
          )}

          {education.length > 0 && (
            <>
              <h2 style={{ fontSize: '16px', marginTop: '20px', borderBottom: '1px solid #aaa' }}>Education</h2>
              {education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  {edu.degree && <p><strong>{edu.degree}</strong></p>}
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>
                    {edu.institution}{edu.year ? `, ${edu.year}` : ''}
                  </p>
                </div>
              ))}
            </>
          )}

          {projects.length > 0 && (
            <>
              <h2 style={{ fontSize: '16px', marginTop: '20px', borderBottom: '1px solid #aaa' }}>Projects</h2>
              {projects.map((proj, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <p><strong>{proj.project_title} {proj.year && `(${proj.year})`}</strong></p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>{proj.description}</p>
                  {proj.technologies && (
                    <p><strong>Technologies:</strong> {proj.technologies.join(', ')}</p>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
