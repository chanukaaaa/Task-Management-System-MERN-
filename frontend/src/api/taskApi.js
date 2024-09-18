// taskApi.js
import axios from 'axios';

export const getTasks = async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
};

export const createTask = async (data) => {
  const response = await axios.post('/api/tasks', data);
  return response.data;
};

export const updateTask = async (data) => {
  const response = await axios.put(`/api/tasks/${data.id}`, data);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`/api/tasks/${id}`);
  return response.data;
};