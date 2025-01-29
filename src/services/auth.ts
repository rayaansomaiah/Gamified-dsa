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
  const { data } = await api.post('/users/login', credentials);
  localStorage.setItem('token', data.token);
  return data;
};

export const register = async (userData: RegisterData) => {
  const { data } = await api.post('/users/register', userData);
  localStorage.setItem('token', data.token);
  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
}