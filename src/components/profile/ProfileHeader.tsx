import React from 'react';
import { User, Award, Star } from 'lucide-react';
import type { User as UserType } from '../../types';

interface ProfileHeaderProps {
  user: UserType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-6">
        <div className="p-4 bg-indigo-100 rounded-full">
          <User className="w-12 h-12 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="ml-auto flex gap-4">
          <div className="text-center">
            <div className="flex items-center gap-1 text-yellow-500">
              <Award className="w-5 h-5" />
              <span className="font-bold text-xl">{user.points}</span>
            </div>
            <span className="text-sm text-gray-600">Points Earned</span>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 text-purple-500">
              <Star className="w-5 h-5" />
              <span className="font-bold text-xl">{user.badges?.length || 0}</span>
            </div>
            <span className="text-sm text-gray-600">Badges</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;