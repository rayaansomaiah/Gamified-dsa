import React from 'react';
import { Lightbulb } from 'lucide-react';

interface DsaFactProps {
  fact: string;
  category: string;
}

const DsaFact: React.FC<DsaFactProps> = ({ fact, category }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        <span className="text-sm font-medium text-indigo-600">{category}</span>
      </div>
      <p className="text-gray-700">{fact}</p>
    </div>
  );
}

export default DsaFact;