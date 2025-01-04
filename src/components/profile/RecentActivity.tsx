import React from 'react';
import { Clock } from 'lucide-react';

interface Activity {
  id: string;
  type: 'challenge' | 'quiz' | 'module';
  title: string;
  timestamp: string;
  result?: string;
  score?: number;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Clock className="w-5 h-5 text-gray-400" />
            <div>
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <p className="text-sm text-gray-600">
                {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)} • {activity.timestamp}
              </p>
            </div>
            {activity.score && (
              <div className="ml-auto">
                <span className="font-medium text-indigo-600">{activity.score} points</span>
              </div>
            )}
            {activity.result && (
              <div className="ml-auto">
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                  activity.result === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.result}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentActivity;