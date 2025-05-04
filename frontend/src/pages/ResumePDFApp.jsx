import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react"; // send icon

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
            {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePDFApp;
