import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CheckCircle, XCircle } from 'lucide-react';
import QuizTimer from './QuizTimer';
import api from '../../services/api';
import type { RootState } from '../../store';

const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which algorithm is used for finding the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's", "Binary Search"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
    correctAnswer: 2
  }
];

const AlgorithmsQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        handleQuizComplete();
      }
    }, 1000);
  };

  const handleQuizComplete = async () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    setShowResult(true);

    try {
      await api.post('/quiz/result', {
        score,
        totalQuestions: questions.length,
        timeTaken
      });
    } catch (error) {
      console.error('Failed to save quiz result:', error);
    }
  };

  const handleTimeUp = () => {
    handleQuizComplete();
  };

  if (!currentUser) {
    return (
      <div className="text-center py-8">
        <p>Please log in to take the quiz.</p>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Quiz Complete!</h2>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-indigo-600 mb-2">
            {score} / {questions.length}
          </p>
          <p className="text-gray-600">
            {(score / questions.length) * 100}% Correct
          </p>
        </div>
        <button
          onClick={() => navigate('/learn')}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Continue Learning
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <QuizTimer duration={300} onTimeUp={handleTimeUp} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-3 text-left rounded-lg transition-colors ${
                selectedAnswer === null
                  ? 'hover:bg-gray-50 border border-gray-200'
                  : selectedAnswer === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  : index === questions[currentQuestion].correctAnswer
                  ? 'bg-green-50 border-green-500'
                  : 'border border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer !== null && (
                  index === questions[currentQuestion].correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : selectedAnswer === index ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : null
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsQuiz;