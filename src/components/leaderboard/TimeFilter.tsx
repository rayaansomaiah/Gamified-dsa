import React from 'react';
import { Calendar } from 'lucide-react';

interface TimeFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'weekly', label: 'This Week' },
    { id: 'monthly', label: 'This Month' },
    { id: 'allTime', label: 'All Time' },
  ];

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
      <Calendar className="w-5 h-5 text-gray-400" />
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-3 py-1 rounded-md text-sm ${
            activeFilter === filter.id
              ? 'bg-indigo-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;