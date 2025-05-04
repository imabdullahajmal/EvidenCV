import React from 'react'
import ResumePDFApp from './pages/ResumePDFApp'
import ResumePreview from './components/ResumePreview';




function App() {
  return (
    <div className="p-4">
      {/* <ResumePreview data={apiData} /> */}
      <ResumePDFApp />
    </div>
  );
}


export default App;