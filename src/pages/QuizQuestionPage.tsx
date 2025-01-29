import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizQuestions {
  [key: string]: Question[];
}

const quizQuestions: QuizQuestions = {
  '1': [
    { question: 'What is the time complexity of accessing an element in an array?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(1)' },
    { question: 'Which method is used to add an element to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], answer: 'push()' },
    // ...more questions...
  ],
  '2': [
    { question: 'What is the time complexity of binary search?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(log n)' },
    { question: 'Which search algorithm checks each element sequentially?', options: ['Binary search', 'Linear search', 'Jump search', 'Interpolation search'], answer: 'Linear search' },
    // ...more questions...
  ],
  '3': [
    { question: 'Which sorting algorithm has the best average case time complexity?', options: ['Bubble sort', 'Selection sort', 'Insertion sort', 'Merge sort'], answer: 'Merge sort' },
    { question: 'Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?', options: ['Bubble sort', 'Selection sort', 'Insertion sort', 'Merge sort'], answer: 'Bubble sort' },
    // ...more questions...
  ],
  // ...other quizzes...
};

const QuizQuestionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const questions: Question[] = id ? quizQuestions[id] || [] : [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {currentQuestionIndex < questions.length ? (
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Quiz: {id === '1' ? 'Array Operations Basics' : id === '2' ? 'Searching Algorithms' : 'Basic Sorting Techniques'}</h1>
          <div className="mb-4">
            <p className="text-lg text-gray-700">{questions[currentQuestionIndex].question}</p>
            <div className="mt-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Quiz Completed</h1>
          <p className="text-lg text-gray-700">Your score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestionPage;
