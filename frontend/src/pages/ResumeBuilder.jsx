import React, { useState } from 'react';
import ResumePreview from '../components/ResumePreview';

const ResumeBuilder = () => {
  const [inputText, setInputText] = useState('');
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResumeData(null); // Reset resume data before fetching

    try {
      const response = await fetch('/api/generate-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: inputText }),
      });

      const result = await response.json();
      setResumeData(result); // Set the response data to be passed to ResumePreview
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setIsLoading(false); // Stop the loading spinner once data is fetched
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="w-full md:w-1/2">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full h-64 p-4 border border-gray-300 rounded resize-none"
          placeholder="Enter your resume prompt..."
        />
        <button
          onClick={handleGenerate}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Generate Resume
        </button>
      </div>

      <div className="w-full md:w-1/2">
        <ResumePreview data={resumeData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
