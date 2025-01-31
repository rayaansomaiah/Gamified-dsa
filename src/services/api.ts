import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL || 'http://localhost:5000/api';

interface CustomAxiosInstance extends AxiosInstance {
  getUserProgress: (userId: string) => Promise<any>;
  updateUserProgress: (data: { quizId: string; score: number }) => Promise<any>;
}

const api: CustomAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}) as CustomAxiosInstance;

// Add auth token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add an endpoint to fetch user progress
api.getUserProgress = (userId: string) => {
  return api.get(`/users/${userId}/progress`);
};

// Add an endpoint to update user progress
api.updateUserProgress = (data: { quizId: string; score: number }) => {
  return api.post('/users/update-progress', data);
};

export default api;