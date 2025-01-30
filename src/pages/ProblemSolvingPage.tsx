import React from 'react';
import { Filter, Search } from 'lucide-react';

const problems = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays',
    timeEstimate: '15 mins',
    successRate: 75,
  },
  {
    id: '2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    timeEstimate: '20 mins',
    successRate: 68,
  },
  {
    id: '3',
    title: 'Merge Sorted Arrays',
    difficulty: 'Medium',
    category: 'Arrays',
    timeEstimate: '25 mins',
    successRate: 55,
  },
  {
    id: '4',
    title: 'Binary Search',
    difficulty: 'Easy',
    category: 'Algorithms',
    timeEstimate: '15 mins',
    successRate: 72,
  },
] as const;

interface ProblemCardProps {
  id: string;
  title: string;
  difficulty: string;
  category: string;
  timeEstimate: string;
  successRate: number;
  onClick: () => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ id, title, difficulty, category, timeEstimate, successRate, onClick }) => {
  return (
    <div
      className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-gray-100"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600">{category}</p>
      <p className="text-gray-600">Difficulty: {difficulty}</p>
      <p className="text-gray-600">Time Estimate: {timeEstimate}</p>
      <p className="text-gray-600">Success Rate: {successRate}%</p>
    </div>
  );
};

const ProblemSolvingPage = () => {
  const handleProblemClick = (problemId: '1' | '2' | '3' | '4') => {
    // Define the URLs for each problem
    const problemUrls: { [key in '1' | '2' | '3' | '4']: string } = {
      '1': 'https://leetcode.com/problems/two-sum/description/',
      '2': 'https://leetcode.com/problems/valid-parentheses/description/',
      '3': 'https://leetcode.com/problems/merge-sorted-array/description/',
      '4': 'https://leetcode.com/problems/binary-search/description/',
    };

    // Redirect to the corresponding URL
    window.location.href = problemUrls[problemId];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Problems</h1>
          <p className="text-gray-600">Solve coding challenges to improve your skills</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search problems..."
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
        {problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            {...problem}
            onClick={() => handleProblemClick(problem.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemSolvingPage;