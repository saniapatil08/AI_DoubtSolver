import React, { useState } from 'react';
import './styles.css';

const DoubtInput = ({ onSubmit, isLoading }) => {
  const [doubt, setDoubt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doubt.trim()) {
      onSubmit(doubt);
    }
  };

  return (
    <div className="doubt-input-container">
      <h2 className="text-2xl font-bold mb-4">Ask Your Doubt</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          placeholder="Type your doubt here... (e.g., How do I solve quadratic equations?)"
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[150px]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !doubt.trim()}
          className={`w-full py-3 px-6 rounded-lg text-white font-medium
            ${isLoading || !doubt.trim() 
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isLoading ? 'Processing...' : 'Get Solution'}
        </button>
      </form>
    </div>
  );
};

export default DoubtInput;
