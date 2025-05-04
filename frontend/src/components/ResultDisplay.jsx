import { useState } from 'react';

const ResultDisplay = ({ result }) => {
  const [activeTab, setActiveTab] = useState('answer');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleQuizSelection = (quizIndex) => {
    setSelectedQuiz(selectedQuiz === quizIndex ? null : quizIndex);
  };

  const handleAnswerSelection = (questionIndex, optionIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  const getScore = () => {
    let correct = 0;
    result.quiz.forEach((question, index) => {
      if (quizAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div className="result-display">
      {/* Tab Navigation */}
      <div className="tabs border-b border-gray-200 dark:border-gray-700">
        <div className="flex">
          <button
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'answer'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => handleTabChange('answer')}
          >
            Solution
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'stepByStep'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => handleTabChange('stepByStep')}
          >
            Step by Step
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'keyConcepts'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => handleTabChange('keyConcepts')}
          >
            Key Concepts
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'relatedTopics'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => handleTabChange('relatedTopics')}
          >
            Related Topics
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'quiz'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            onClick={() => handleTabChange('quiz')}
          >
            Practice Quiz
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'answer' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Solution</h3>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {result.answer}
            </div>
          </div>
        )}

        {activeTab === 'stepByStep' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Step-by-Step Breakdown</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
              {result.stepByStep.map((step, index) => (
                <li key={index} className="pl-2">
                  <span className="font-medium text-blue-600 dark:text-blue-400">{step.split(':')[0]}:</span>
                  <span>{step.split(':')[1] || ''}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {activeTab === 'keyConcepts' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Concepts</h3>
            <div className="space-y-4">
              {result.keyConcepts.map((concept, index) => (
                <div key={index} className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="font-medium text-blue-700 dark:text-blue-300">{concept.split(':')[0]}:</div>
                  <div className="text-gray-700 dark:text-gray-300 mt-1">{concept.split(':')[1] || ''}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'relatedTopics' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Related Topics to Explore</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.relatedTopics.map((topic, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <div className="font-medium text-gray-800 dark:text-white">{topic.split(':')[0]}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{topic.split(':')[1] || ''}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Practice Quiz</h3>

            {showResults ? (
              <div className="mb-6">
                <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg mb-4">
                  <div className="font-medium text-lg text-blue-700 dark:text-blue-300">
                    Your Score: {getScore()} out of {result.quiz.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">
                    {getScore() === result.quiz.length
                      ? 'Perfect score! Great job!'
                      : 'Keep practicing to improve your understanding.'}
                  </div>
                </div>
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Test your understanding with these practice questions.
                </p>
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(quizAnswers).length !== result.quiz.length}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    Object.keys(quizAnswers).length === result.quiz.length
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answers
                </button>
              </div>
            )}

            <div className="space-y-6">
              {result.quiz.map((quizItem, index) => (
                <div
                  key={index}
                  className={`border ${
                    selectedQuiz === index
                      ? 'border-blue-300 dark:border-blue-500'
                      : 'border-gray-200 dark:border-gray-700'
                  } rounded-lg overflow-hidden transition-all`}
                >
                  <div
                    className="p-4 bg-gray-50 dark:bg-gray-750 cursor-pointer flex justify-between items-center"
                    onClick={() => handleQuizSelection(index)}
                  >
                    <div className="font-medium text-gray-800 dark:text-white">Question {index + 1}</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                        selectedQuiz === index ? 'transform rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {selectedQuiz === index && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-gray-800 dark:text-white mb-4">{quizItem.question}</div>

                      <div className="space-y-2">
                        {quizItem.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            onClick={() => !showResults && handleAnswerSelection(index, optionIndex)}
                            className={`p-2 rounded-lg cursor-pointer ${
                              quizAnswers[index] === optionIndex
                                ? showResults
                                  ? quizItem.correctAnswer === optionIndex
                                    ? 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700'
                                    : 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700'
                                  : 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700'
                                : showResults && quizItem.correctAnswer === optionIndex
                                ? 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-750 border border-gray-200 dark:border-gray-700'
                            }`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`h-4 w-4 mr-2 rounded-full border ${
                                  quizAnswers[index] === optionIndex
                                    ? showResults
                                      ? quizItem.correctAnswer === optionIndex
                                        ? 'border-green-500 bg-green-500'
                                        : 'border-red-500 bg-red-500'
                                      : 'border-blue-500 bg-blue-500'
                                    : 'border-gray-400 dark:border-gray-500'
                                }`}
                              >
                                {quizAnswers[index] === optionIndex && (
                                  <div className="flex items-center justify-center h-full">
                                    <div className="h-2 w-2 rounded-full bg-white"></div>
                                  </div>
                                )}
                              </div>
                              <span
                                className={`${
                                  showResults &&
                                  (quizAnswers[index] === optionIndex || quizItem.correctAnswer === optionIndex)
                                    ? quizItem.correctAnswer === optionIndex
                                      ? 'text-green-700 dark:text-green-300 font-medium'
                                      : 'text-red-700 dark:text-red-300 font-medium'
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}
                              >
                                {option}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {showResults && (
                        <div
                          className={`mt-4 p-3 rounded-lg ${
                            quizAnswers[index] === quizItem.correctAnswer
                              ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                              : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                          }`}
                        >
                          {quizAnswers[index] === quizItem.correctAnswer
                            ? 'Correct! Great job.'
                            : `Incorrect. The correct answer is: ${quizItem.options[quizItem.correctAnswer]}`}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;