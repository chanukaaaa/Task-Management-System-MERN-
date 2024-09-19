import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const addUser = async (user) => {
  await axios.post(`${API_URL}/users`, user);
};
