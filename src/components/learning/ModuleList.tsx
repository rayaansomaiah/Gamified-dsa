import React from 'react';
import { Layers, Binary, GitBranch, Database, Network, Calculator } from 'lucide-react';
import LearningModule from './LearningModule';


const modules = [
  {
    title: 'Stack Operations',
    description: 'Learn about stack data structure and its fundamental operations like push, pop, and peek.',
    path: '/learn/stack',
    icon: <Layers className="w-6 h-6 text-indigo-600" />,
    difficulty: 'Beginner'
  },
  {
    title: 'Infix to Postfix',
    description: 'Master expression conversion with an interactive game that teaches operator precedence and stack usage.',
    path: '/learn/infix-postfix',
    icon: <Calculator className="w-6 h-6 text-indigo-600" />,
    difficulty: 'Intermediate'
  },
  {
    title: 'Basic Concepts',
    description: 'Introduction to fundamental data structure concepts, time complexity, and space complexity.',
    path: '/learn/basics',
    icon: <Binary className="w-6 h-6 text-indigo-600" />,
    difficulty: 'Beginner'
  },
  {
    title: 'Arrays',
    description: 'Learn about the basics of Arrays, how to get started with Array, learning, resources, problems.',
    path: '/learn/arrays',
    icon: <Database className="w-6 h-6 text-indigo-600" />,
    difficulty: 'Beginner'
  },
  {
    title: 'Basic Algorithms',
    description: 'Learn about sorting, searching, and basic algorithms.',
    path: '/learn/algorithms',
    icon: <GitBranch className="w-6 h-6 text-indigo-600" />,
    difficulty: 'Advanced'
  }
] as const;

const ModuleList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <LearningModule key={module.path} {...module} />
      ))}
    </div>
  );
};

export default ModuleList;