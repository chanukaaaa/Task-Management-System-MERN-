import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskApi';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/TaskTable';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const role = localStorage.getItem('role');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response);
  };

  const handleCreateTask = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const handleUpdateTask = async (task) => {
    await updateTask(task);
    fetchTasks();
    setEditingTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {role === 'Admin' || role === 'Manager' ? (
        <TaskForm onSubmit={editingTask ? handleUpdateTask : handleCreateTask} editingTask={editingTask} />
      ) : null}
      <TaskTable
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDeleteTask}
        role={role}
      />
    </div>
  );
};

export default Dashboard;
