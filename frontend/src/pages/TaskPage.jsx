// src/pages/TaskPage.jsx
import React, { useState, useEffect } from "react";
import api from "../api";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      await api.post("/tasks", { name: newTask });
      setNewTask("");
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div>
      <h1>Task Management</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
