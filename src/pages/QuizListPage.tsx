import React from 'react';
import { HelpCircle, Filter, Search } from 'lucide-react';
import QuizCard from '../components/quiz/QuizCard';

const quizzes = [
  {
    id: '1',
    title: 'Array Operations Basics',
    description: 'Test your knowledge of fundamental array operations and manipulations.',
    questionCount: 10,
    timeLimit: '15 mins',
    points: 100,
  },
  {
    id: '2',
    title: 'Searching Algorithms',
    description: 'Questions about linear search, binary search, and their applications.',
    questionCount: 8,
    timeLimit: '12 mins',
    points: 80,
  },
  {
    id: '3',
    title: 'Basic Sorting Techniques',
    description: 'Test your understanding of bubble sort, selection sort, and insertion sort.',
    questionCount: 12,
    timeLimit: '20 mins',
    points: 120,
  },
] as const;

const QuizListPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Quizzes</h1>
          <p className="text-gray-600">Test your knowledge with interactive quizzes</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search quizzes..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  );
}

export default QuizListPage;