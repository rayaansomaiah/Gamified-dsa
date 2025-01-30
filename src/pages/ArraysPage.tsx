import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArraysPage = () => {
  const navigate = useNavigate();

  const handleSolveProblemsClick = () => {
    navigate('/problems');
  };

 
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Arrays</h1>
      <p className="text-gray-700 mb-4">
        Arrays are a fundamental data structure used to store a collection of elements. They are used in various algorithms and data structures.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Features of Arrays</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Fixed size</li>
        <li>Random access</li>
        <li>Efficient indexing</li>
        <li>Efficient iteration</li>
        <li>Memory locality</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Array Operations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traversal</li>
        <li>Insertion</li>
        <li>Deletion</li>
        <li>Searching</li>
        <li>Sorting</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz</h2>
      <p className="text-gray-700 mb-4">
        Test your knowledge about arrays by taking the quiz.
      </p>
      <a href="/quiz/arrays" className="text-indigo-600 hover:underline">Take the Quiz</a>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Problems</h2>
      <p className="text-gray-700 mb-4">
        Practice solving problems related to arrays.
      </p>
      <button
        onClick={handleSolveProblemsClick}
        className="text-indigo-600 hover:underline"
      >
        Solve Problems
      </button>
    </div>
  );
};

export default ArraysPage;
