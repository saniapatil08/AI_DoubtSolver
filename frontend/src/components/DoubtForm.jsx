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
    <div className="doubt-form">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        What's your doubt today?
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows="4"
          placeholder="Type your question here..."
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          disabled={!doubt.trim()}
          className={`px-6 py-2 rounded-lg font-medium ${
            doubt.trim()
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Solve
        </button>
      </form>
    </div>
  );
};

export default DoubtForm;