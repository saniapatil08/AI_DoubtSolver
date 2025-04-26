import React from 'react';

const AnswerSection = ({ answer }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Answer</h2>
      <p>{answer.text}</p>

      <h3 className="text-lg font-semibold mt-4">Step-by-step Breakdown</h3>
      <ul className="list-decimal ml-6">
        {answer.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">Related Concepts</h3>
      <ul className="list-disc ml-6">
        {answer.relatedConcepts.map((concept, index) => (
          <li key={index}>{concept}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">Quiz</h3>
      {answer.quiz.map((question, index) => (
        <div key={index} className="my-2">
          <p>{question.question}</p>
          <ul className="list-disc ml-6">
            {question.options.map((option, idx) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AnswerSection;
