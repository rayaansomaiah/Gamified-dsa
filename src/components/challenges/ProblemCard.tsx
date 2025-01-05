import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BarChart2, Clock } from 'lucide-react';

interface ProblemCardProps {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  timeEstimate: string;
  successRate: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  id,
  title,
  difficulty,
  category,
  timeEstimate,
  successRate,
}) => {
  const difficultyColors = {
    Easy: 'text-green-600 border-green-200 bg-green-50',
    Medium: 'text-yellow-600 border-yellow-200 bg-yellow-50',
    Hard: 'text-red-600 border-red-200 bg-red-50',
  };

  return (
    <Link to={`/problems/${id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Code className="w-4 h-4" />
              <span>{category}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{timeEstimate}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4" />
            <span>{successRate}% success rate</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProblemCard;