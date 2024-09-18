// authApi.js
import axios from 'axios';

export const loginUser = async (data) => {
  const response = await axios.post('/api/login', data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post('/api/register', data);
  return response.data;
};