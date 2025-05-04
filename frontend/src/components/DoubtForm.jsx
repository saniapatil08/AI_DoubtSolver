import { useState } from 'react';

const DoubtForm = ({ onSubmit }) => {
  const [doubt, setDoubt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doubt.trim()) {
      onSubmit(doubt);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transition-all">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        What's your doubt today?
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            className="w-full p-4 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none
                      bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                      transition-colors"
            rows="4"
            placeholder="Type or paste your question here. For example: 'What is the difference between mitosis and meiosis?' or 'Solve: 2x² + 5x - 3 = 0'"
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            required
          ></textarea>
          
          <div className="absolute bottom-3 right-3 text-xs text-gray-500 dark:text-gray-400">
            {doubt.length > 0 ? `${doubt.length} characters` : ''}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              type="button"
              onClick={() => setDoubt('')}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <button
            type="submit"
            disabled={!doubt.trim()}
            className={`px-6 py-2 rounded-lg font-medium flex items-center
                      ${doubt.trim() 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'} 
                      transition-colors`}
          >
            <span>Solve</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoubtForm;