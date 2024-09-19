import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

const App = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigate('/dashboard');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/add-user" element={<AddUserForm />} />
    </Routes>
  );
};

export default App;
