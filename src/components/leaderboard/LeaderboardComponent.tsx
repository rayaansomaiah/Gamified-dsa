import React, { useEffect, useState } from 'react';
import { getLeaderboard, LeaderboardEntry } from '../../services/leaderboardService';

const LeaderboardComponent: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    setLeaderboard(getLeaderboard());
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index}>
            {entry.username}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardComponent;
