// AdminPanel.jsx
import React from 'react';
import TaskTable from '../components/TaskTable';
import TaskForm from '../components/TaskForm';

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <TaskForm role="Admin" fetchTasks={() => {}} />
      <TaskTable role="Admin" />
    </div>
  );
};

export default AdminPanel;
