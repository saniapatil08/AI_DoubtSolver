import React, { useState } from 'react';
// Mocking axiosInstance for now
const axiosInstance = {
  post: async (url, data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: `Mocked answer for: ${data.doubt}` });
      }, 1000); // Simulate a 1-second delay
    });
  },
};
import Loading from './Loading';
import AnswerSection from './AnswerSection';

const HomePage = () => {
  const [doubt, setDoubt] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/solve-doubt', { doubt });
      setAnswer(response.data);
    } catch (error) {
      console.error('Error solving doubt', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Paste your doubt here</h1>
      <textarea
        className="w-full p-4 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your doubt"
        value={doubt}
        onChange={(e) => setDoubt(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleSubmit}
        disabled={loading}
      >
        Submit
      </button>

      {loading && <Loading />}
      {answer && <AnswerSection answer={answer} />}
    </div>
  );
};

export default HomePage;