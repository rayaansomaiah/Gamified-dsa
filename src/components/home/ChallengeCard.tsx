import React from 'react';
import { Trophy, Clock, Code } from 'lucide-react';

interface ChallengeProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: string;
  points: number;
}

const ChallengeCard: React.FC<ChallengeProps> = ({ title, difficulty, timeLimit, points }) => {
  const difficultyColors = {
    Easy: 'text-green-600 bg-green-50',
    Medium: 'text-yellow-600 bg-yellow-50',
    Hard: 'text-red-600 bg-red-50'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{timeLimit}</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span>{points} points</span>
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;