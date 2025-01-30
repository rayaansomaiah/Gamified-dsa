import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Clock, Trophy } from 'lucide-react';

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimit: string;
  points: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  id,
  title,
  description,
  questionCount,
  timeLimit,
  points,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <HelpCircle className="w-5 h-5 text-purple-500" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{timeLimit}</span>
          </div>
          <span>{questionCount} questions</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span>{points} points</span>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;