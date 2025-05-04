import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react"; // send icon
import ResumePreview from "../components/ResumePreview";

let apiData = {
  "name": "Mark Thompson",
  "email": "mark.thompson@example.com",
  "phone": "+1 (555) 789-1234",
  "summary": "Software engineering student with 2 years of experience in frontend development using React and JavaScript. Passionate about building responsive user interfaces and seeking an internship to further develop skills in modern web technologies.",
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "XYZ University",
      "year": "2023"
    }
  ],
  "skills": [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TypeScript",
    "Git",
    "REST APIs"
  ],
  "experience": [
    {
      "job_title": "Frontend Developer Intern",
      "company": "BrightTech Solutions",
      "year_range": "Jun 2022 - Aug 2022",
      "responsibilities": [
        "Developed responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with backend developers to integrate RESTful APIs.",
        "Participated in daily stand-ups and sprint planning meetings."
      ],
      "achievements": [
        "Reduced page load time by 30% through optimized asset delivery.",
        "Refactored components to improve reusability across the codebase."
      ]
    }
  ],
  "projects": [
    {
      "project_title": "Personal Portfolio Website",
      "description": "Created a responsive portfolio to showcase projects and skills, with a custom contact form and interactive animations.",
      "technologies": ["React", "Framer Motion", "Netlify"],
      "year": "2023"
    },
    {
      "project_title": "Task Manager App",
      "description": "Built a full-stack task manager with user authentication, task CRUD operations, and a clean dashboard interface.",
      "technologies": ["React", "Node.js", "Express", "MongoDB"],
      "year": "2022"
    }
  ]
}

const ResumePDFApp = () => {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setSubmitted(true);
    setLoading(true);
    setResponse("");

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setResponse("This is the simulated response from the API.");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!submitted && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: submitted ? 300 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center bg-white p-2 rounded-xl shadow-md w-full max-w-md"
        >
          <input
            type="text"
            className="flex-grow border-none outline-none px-3 py-2"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="text-blue-500 hover:text-blue-600 p-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      {submitted && (
        <div className="fixed bottom-6 w-full max-w-md px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex items-center bg-white p-2 rounded-xl shadow-md"
          >
            <input
              type="text"
              className="flex-grow border-none outline-none px-3 py-2"
              placeholder="Enter your prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="text-blue-500 hover:text-blue-600 p-2"
            >
              <Send className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}

      <div className="mt-6 text-center">
        {loading && (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:.2s]" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:.4s]" />
          </div>
        )}

        {!loading && response && (
          <div className="mt-4 bg-white p-4 rounded-xl shadow-sm max-w-md mx-auto">
            <ResumePreview data={apiData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePDFApp;
