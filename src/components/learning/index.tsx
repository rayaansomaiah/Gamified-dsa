import React from 'react';
import { Link } from 'react-router-dom';
// ...existing code...

const LearningPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Learning Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/learn/infix-postfix">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Infix to Postfix</h2>
            <p className="text-gray-700">Learn how to convert infix expressions to postfix notation.</p>
          </div>
        </Link>
        <Link to="/learn/postfix-infix">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Postfix to Infix</h2>
            <p className="text-gray-700">Learn how to convert postfix expressions to infix notation.</p>
          </div>
        </Link>
        {/* Add more learning modules here */}
      </div>
    </div>
  );
};

export default LearningPage;
