export interface LeaderboardEntry {
  username: string;
  score: number;
}

let leaderboard: LeaderboardEntry[] = [];

export const updateLeaderboard = (entry: LeaderboardEntry) => {
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score);
};

export const getLeaderboard = () => {
  return leaderboard;
};
