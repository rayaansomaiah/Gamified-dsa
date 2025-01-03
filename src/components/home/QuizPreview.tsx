import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuizPreviewProps {
  title: string;
  questionCount: number;
  category: string;
  path: string;
}

const QuizPreview: React.FC<QuizPreviewProps> = ({ title, questionCount, category, path }) => {
  return (
    <Link to={path} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <HelpCircle className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium text-purple-600">{category}</span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{questionCount} questions</span>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}

export default QuizPreview;