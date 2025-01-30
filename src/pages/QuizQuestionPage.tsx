import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

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
  '4': [
    { question: 'What is the time complexity of the push operation in a stack?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(1)' },
    { question: 'Which data structure follows the Last In First Out (LIFO) principle?', options: ['Queue', 'Stack', 'Array', 'Linked List'], answer: 'Stack' },
    { question: 'Which operation removes the top element from a stack?', options: ['push()', 'pop()', 'peek()', 'insert()'], answer: 'pop()' },
    { question: 'What is the time complexity of the pop operation in a stack?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], answer: 'O(1)' },
    { question: 'Which operation returns the top element of a stack without removing it?', options: ['push()', 'pop()', 'peek()', 'insert()'], answer: 'peek()' },
  ],
  // ...other quizzes...
};

const QuizQuestionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const questions: Question[] = id ? quizQuestions[id] || [] : [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = async () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (currentQuestionIndex === questions.length - 1) {
      try {
        await api.post('/users/update-progress', { quizId: id, score });
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {timeLeft > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Quiz: {id === '1' ? 'Array Operations Basics' : id === '2' ? 'Searching Algorithms' : id === '3' ? 'Basic Sorting Techniques' : 'Stack Operations'}</h1>
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
          <div className="mt-4 text-gray-700">
            Time left: {formatTime(timeLeft)}
          </div>
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
