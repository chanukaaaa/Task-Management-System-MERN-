import React from 'react';
import Sidebar from './Sidebar';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
