import { useEffect, useState } from 'react';

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
    "Great things come from curiosity and persistence.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % educationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [educationalQuotes.length]);

  return (
    <div className="loading-state">
      <div className="spinner"></div>
      <h3 className="mt-4">{educationalQuotes[quoteIndex]}</h3>
    </div>
  );
};

export default LoadingState;