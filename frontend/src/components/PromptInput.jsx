import { useState } from 'react';

export default function PromptInput({ onGenerate }) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = () => {
    if (prompt.trim()) onGenerate(prompt);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4">Enter your resume prompt</h2>
      <textarea
        className="flex-1 p-3 border rounded-md resize-none"
        placeholder="Describe your work experience, education, skills..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Generate Resume
      </button>
    </div>
  );
}
