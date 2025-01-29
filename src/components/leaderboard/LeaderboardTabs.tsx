import React from 'react';
import { Trophy, Target, HelpCircle } from 'lucide-react';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const LeaderboardTabs: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overall', label: 'Overall', icon: <Trophy className="w-5 h-5" /> },
    { id: 'challenges', label: 'Challenges', icon: <Target className="w-5 h-5" /> },
    { id: 'quizzes', label: 'Quizzes', icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${
            activeTab === tab.id
              ? 'bg-green-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LeaderboardTabs;