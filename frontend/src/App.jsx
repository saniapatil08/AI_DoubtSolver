import { useState } from 'react';
import DoubtForm from './components/DoubtForm';
import ResultDisplay from './components/ResultDisplay';
import LoadingState from './components/LoadingState';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmitDoubt = async (doubt) => {
    setLoading(true);
    setResult(null);
    
    // Simulate API call delay
    try {
      // In a real app, this would be your API call to OpenAI or Hugging Face
      setTimeout(() => {
        // Mock response data
        const mockResponse = {
          answer: "The answer to your question involves understanding the fundamental principles. First, we need to identify the key components...",
          stepByStep: [
            "Step 1: Identify the variables in the problem",
            "Step 2: Apply the relevant formula",
            "Step 3: Calculate the result by substituting the values"
          ],
          keyConcepts: [
            "Concept 1: Basic principles of the subject matter",
            "Concept 2: Important formulas and their applications",
            "Concept 3: Common misconceptions to avoid"
          ],
          relatedTopics: [
            "Related Topic 1: Further exploration",
            "Related Topic 2: Advanced applications",
            "Related Topic 3: Historical context"
          ],
          quiz: [
            {
              question: "Which of the following is correct based on the explanation?",
              options: ["Option A", "Option B", "Option C", "Option D"],
              correctAnswer: 1
            },
            {
              question: "What would happen if we changed the initial conditions?",
              options: ["Result A", "Result B", "Result C", "Result D"],
              correctAnswer: 2
            }
          ]
        };
        
        setResult(mockResponse);
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <main className="max-w-4xl mx-auto">
          <DoubtForm onSubmit={handleSubmitDoubt} />
          
          {loading && <LoadingState />}
          
          {result && <ResultDisplay result={result} />}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;