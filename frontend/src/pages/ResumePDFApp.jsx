import { useState, useEffect } from 'react';

export default function ResumePDFApp() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSubmit = () => {
    if (text.trim()) {
      setMessages([...messages, { sender: 'user', text }]);
      setIsLoading(true);
      setText(''); // Clear input field

      setTimeout(() => {
        setMessages([...messages, { sender: 'user', text }, { sender: 'bot', text: 'Your resume is ready! You can download it soon.' }]);
        setIsLoading(false);
      }, 1500); // Simulate processing delay
    }
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 space-y-4 flex flex-col">
        <h1 className="text-3xl font-semibold text-center mb-6">Chat with PDF Generator</h1>

        {/* Chat messages container */}
        <div id="chat-container" className="flex flex-col space-y-4 max-h-96 overflow-y-auto flex-1">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-300 text-gray-800'}`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}

          {/* Loading animation */}
          {isLoading && (
            <div className="self-start flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0s]"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              <span className="text-gray-600 ml-2">Processing...</span>
            </div>
          )}
        </div>

        {/* Input and Submit */}
        <div className="flex flex-col space-y-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your resume content here..."
            className="w-full h-20 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
