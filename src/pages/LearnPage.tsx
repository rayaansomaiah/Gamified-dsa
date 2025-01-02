import React from 'react';
import ModuleList from '../components/learning/ModuleList';
import { BookOpen } from 'lucide-react';

const LearnPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <BookOpen className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Modules
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a module to start learning. Each module contains interactive lessons,
          visualizations, and practice exercises.
        </p>
      </div>
      
      <ModuleList />
    </div>
  );
};

export default LearnPage;