import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';

interface ProgressStatsProps {
  completedModules: number;
  totalModules: number;
  completedChallenges: number;
  solvedQuizzes: number;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  completedModules,
  totalModules,
  completedChallenges,
  solvedQuizzes,
}) => {
  const stats = [
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      value: `${completedModules}/${totalModules}`,
      label: 'Modules Completed',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      value: completedChallenges,
      label: 'Challenges Solved',
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      value: solvedQuizzes,
      label: 'Quizzes Completed',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            {stat.icon}
            <div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProgressStats;