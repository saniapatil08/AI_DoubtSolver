import { useState } from 'react';
import DoubtInput from './components/DoubtInput';
import Solution from './components/Solution';
import Quiz from './components/Quiz';
import RelatedTopics from './components/RelatedTopics';

function App() {
  const [doubt, setDoubt] = useState('');
  const [solution, setSolution] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [relatedTopics, setRelatedTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDoubtSubmit = async (doubtText) => {
    setIsLoading(true);
    try {
      // Placeholder for ML model inference
      setDoubt(doubtText);
      setSolution(`Here's how to solve this problem...`);
      setQuiz([
        {
          question: "What is the first step in solving this type of problem?",
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ],
          correctAnswer: 0
        }
      ]);
      setRelatedTopics(["Related Topic 1", "Related Topic 2", "Related Topic 3"]);
    } catch (error) {
      console.error("Error processing doubt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Smart Doubt Solver
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <DoubtInput onSubmit={handleDoubtSubmit} isLoading={isLoading} />
          
          {solution && (
            <div className="space-y-6">
              <Solution solution={solution} />
              <RelatedTopics topics={relatedTopics} />
              <Quiz quiz={quiz} />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Smart Doubt Solver - Your AI-powered learning assistant
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
