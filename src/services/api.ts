import axios from 'axios';

const API_URL = import.meta.env.REACT_APP_BACKEND_URL || 'https://gamified-dsa-backend-production.up.railway.app';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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