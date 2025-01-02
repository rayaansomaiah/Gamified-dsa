export interface User {
  id: string;
  username: string;
  email: string;
  points: number;
  badges: Badge[];
  progress: ModuleProgress[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  score: number;
  lastAttempt: Date;
}

export interface StackOperation {
  type: 'push' | 'pop' | 'peek';
  value?: number;
  timestamp: Date;
}