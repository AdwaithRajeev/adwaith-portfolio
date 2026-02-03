import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const apiCalls = [
  {
    method: 'GET',
    endpoint: '/api/skills',
    status: '200 OK',
    response: '{ "status": "success", "data": [...] }',
  },
  {
    method: 'GET',
    endpoint: '/api/projects',
    status: '200 OK',
    response: '{ "status": "success", "count": 5 }',
  },
  {
    method: 'POST',
    endpoint: '/api/contact',
    status: '201 Created',
    response: '{ "status": "created", "id": 123 }',
  },
  {
    method: 'GET',
    endpoint: '/api/portfolio',
    status: '200 OK',
    response: '{ "status": "success", "version": "1.0.0" }',
  },
];

const ApiAnimation = () => {
  const [currentApiCall, setCurrentApiCall] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const cycleApiCalls = () => {
      const apiCall = apiCalls[currentApiCall];
      
      // Reset states
      setDisplayText('');
      setShowLoading(false);
      setShowResponse(false);

      // Type the API call
      let textIndex = 0;
      const fullCommand = `${apiCall.method} ${apiCall.endpoint}`;
      
      const typingInterval = setInterval(() => {
        if (textIndex < fullCommand.length) {
          setDisplayText(fullCommand.slice(0, textIndex + 1));
          textIndex++;
        } else {
          clearInterval(typingInterval);
          setShowLoading(true);
          
          // Show loading dots
          setTimeout(() => {
            setShowLoading(false);
            setShowResponse(true);
            
            // Hide response and move to next API call
            setTimeout(() => {
              setShowResponse(false);
              setCurrentApiCall((prev) => (prev + 1) % apiCalls.length);
            }, 2000);
          }, 1500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    };

    const timeout = setTimeout(cycleApiCalls, 1000);
    return () => clearTimeout(timeout);
  }, [currentApiCall]);

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 opacity-30 hover:opacity-60 transition-opacity duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 0.3, x: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="bg-dark-surface border border-neon-green/50 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm max-w-[200px] sm:max-w-[250px] shadow-lg shadow-neon-green/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          <span className="text-neon-green/80">API</span>
        </div>
        
        <div className="space-y-1">
          <div className="text-neon-green">
            <span className="text-gray-400">$</span> {displayText}
            {showLoading && (
              <span className="inline-block ml-1 animate-pulse">...</span>
            )}
          </div>
          
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-[10px] sm:text-xs"
            >
              <div className="text-neon-green">
                {apiCalls[currentApiCall].status}
              </div>
              <div className="text-gray-500 mt-1 font-mono">
                {apiCalls[currentApiCall].response}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ApiAnimation;

