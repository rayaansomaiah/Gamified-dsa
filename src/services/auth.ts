import api from './api';
import { User } from '../types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  username: string;
}

export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/users/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const register = async (userData: RegisterData) => {
  const response = await api.post('/users/register', userData);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
}