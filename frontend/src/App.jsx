import React from 'react'
import ResumePDFApp from './pages/ResumePDFApp'
import ResumePreview from './components/ResumePreview';

const htmlAndCss = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resume</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
  <style>
    @page {
      size: A4;
      margin: 0;
    }
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: 'Lato', sans-serif;
    }
    .container {
      width: 210mm;
      height: 297mm;
      padding: 25mm 20mm;
      box-sizing: border-box;
      color: #333;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .full-name {
      font-size: 28px;
      font-weight: 700;
    }
    .contact-info, .about {
      font-size: 14px;
      margin-top: 5px;
    }
    .position {
      font-weight: 600;
    }
    .desc {
      display: block;
      margin-top: 4px;
    }
    .section {
      margin-top: 20px;
    }
    .section__title {
      font-size: 18px;
      font-weight: 700;
      border-bottom: 1px solid #aaa;
      margin-bottom: 6px;
    }
    .section__list-item {
      margin-bottom: 10px;
    }
    .section__list-item .name {
      font-weight: 600;
    }
    ul {
      margin: 0;
      padding-left: 18px;
    }
    p {
      margin: 4px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="full-name">
        <span class="first-name">John</span>
        <span class="last-name">Doe</span>
      </div>
      <div class="contact-info">
        <span>Email: john.doe@example.com</span> | 
        <span>Phone: +1 (555) 123-4567</span>
      </div>
      <div class="about">
        <span class="position">Digital Marketing Manager</span>
        <span class="desc">Results-driven Digital Marketing Manager with 6+ years of experience in developing data-driven strategies to boost brand visibility and drive growth...</span>
      </div>
    </div>

    <div class="details">
      <div class="section">
        <div class="section__title">Experience</div>
        <div class="section__list-item">
          <div class="name">Digital Marketing Manager</div>
          <div class="desc">Tech Innovations Inc. (2020 - Present)</div>
          <ul>
            <li>Develop and implement SEO strategies to improve search engine rankings.</li>
            <li><em>Increased organic traffic by 40% in the first year.</em></li>
            <li><em>Managed a team of 5 digital marketers, achieving a 20% increase in lead generation.</em></li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section__title">Education</div>
        <div class="section__list-item">
          <div class="name">Bachelor of Science in Marketing</div>
          <div class="desc">University of California, Los Angeles (UCLA), 2017</div>
        </div>
      </div>

      <div class="section">
        <div class="section__title">Skills</div>
        <ul>
          <li>SEO</li>
        </ul>
      </div>

      <div class="section">
        <div class="section__title">Projects</div>
        <div class="section__list-item">
          <div class="name">E-commerce Website Redesign (2021)</div>
          <div class="desc">Led the SEO and digital marketing strategy for a major e-commerce website redesign, improving both user experience and search engine visibility.</div>
          <div><strong>Technologies:</strong> WordPress, Google Analytics, SEO Tools</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

`;

function App() {
  return (
    <div className="p-4">
      <ResumePreview htmlAndCss={htmlAndCss} />
    </div>
  );
}


export default App;