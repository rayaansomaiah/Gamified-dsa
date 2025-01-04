import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../store';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProgressStats from '../components/profile/ProgressStats';
import RecentActivity from '../components/profile/RecentActivity';

const ProfilePage = () => {
  const { currentUser, isAuthenticated } = useSelector((state: RootState) => state.user);

  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" />;
  }

  // Mock data for demonstration
  const recentActivities = [
    {
      id: '1',
      type: 'challenge' as 'challenge',
      title: 'Reverse a String using Stack',
      timestamp: '2 hours ago',
      result: 'Completed',
      score: 50,
    },
    {
      id: '2',
      type: 'quiz' as 'quiz',
      title: 'Array Operations Quiz',
      timestamp: '1 day ago',
      score: 80,
    },
    {
      id: '3',
      type: 'module' as 'module',
      title: 'Stack Data Structure',
      timestamp: '2 days ago',
      result: 'In Progress',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProfileHeader user={currentUser} />
      
      <ProgressStats
        completedModules={2}
        totalModules={5}
        completedChallenges={3}
        solvedQuizzes={2}
      />
      
      <RecentActivity activities={recentActivities} />
    </div>
  );
};

export default ProfilePage;