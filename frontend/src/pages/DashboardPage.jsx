// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from "react";
import api from "../api";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/auth/me");
        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };

    fetchUserData();
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Tasks:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
        </ul>
        {role === "Admin" && (
          <div>
            <h2>Admin Panel</h2>
            {/* Admin-specific features here */}
          </div>
        )}
        {role === "Manager" && (
          <div>
            <h2>Manager Panel</h2>
            {/* Manager-specific features here */}
          </div>
        )}
      </div>
    );
  };
  
  export default DashboardPage;
  
