import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Employee');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({ email, password, role });
    if (response.success) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', role);
      navigate('/dashboard');
    } else {
      alert(response.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Select Role:</label>
          <input type="radio" value="Employee" checked={role === 'Employee'} onChange={() => setRole('Employee')} /> Employee
          <input type="radio" value="Manager" checked={role === 'Manager'} onChange={() => setRole('Manager')} /> Manager
          <input type="radio" value="Admin" checked={role === 'Admin'} onChange={() => setRole('Admin')} /> Admin
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default Login;
