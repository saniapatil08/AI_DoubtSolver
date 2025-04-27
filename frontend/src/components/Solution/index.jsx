// src/components/Solution/index.jsx
import React from 'react';
import './styles.css';

const Solution = ({ solution }) => {
  if (!solution) return null;

  return (
    <div className="solution-container">
      <h2 className="text-2xl font-bold mb-4">Solution</h2>
      <div className="solution-content">
        <div className="explanation">
          <h3 className="text-xl font-semibold mb-2">Explanation</h3>
          <p className="text-gray-700">{solution.explanation}</p>
        </div>
        
        <div className="steps mt-4">
          <h3 className="text-xl font-semibold mb-2">Step-by-Step Solution</h3>
          <ol className="list-decimal list-inside space-y-2">
            {solution.steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Solution;