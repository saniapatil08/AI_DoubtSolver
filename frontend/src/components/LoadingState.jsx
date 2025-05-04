import { useState, useEffect } from 'react';

const LoadingState = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const educationalQuotes = [
    "Learning is a treasure that will follow its owner everywhere.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is not the filling of a pail, but the lighting of a fire.",
    "The more you learn, the more you realize how much you don't know.",
    "Keep it up! Every question is a step towards mastery.",
    "Curiosity is the engine of achievement.",
    "The expert in anything was once a beginner.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Your questions today lead to your solutions tomorrow.",
    "Great things come from curiosity and persistence."
  ];
  
  // Rotate through quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => 
        prevIndex === educationalQuotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [educationalQuotes.length]);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-pulse">
      <div className="mb-6">
        <div className="inline-block relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 border-solid rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 dark:border-blue-400 border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
        Solving your doubt...
      </h3>
      
      <div className="h-16">
        <p className="text-gray-600 dark:text-gray-400 transition-opacity duration-500">
          {educationalQuotes[quoteIndex]}
        </p>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-500">
        Analyzing concepts, finding solutions, and creating practice questions
      </div>
    </div>
  );
};

export default LoadingState;