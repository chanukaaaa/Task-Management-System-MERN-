import React, { useState } from 'react';
import '../styles/login.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.toLowerCase() === 'admin' && password === 'admin123') {
      onLogin(role);
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="radio-group">
          <label>
            <input type="radio" value="admin" checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} />
            Admin
          </label>
          <label>
            <input type="radio" value="manager" onChange={(e) => setRole(e.target.value)} />
            Manager
          </label>
          <label>
            <input type="radio" value="employee" onChange={(e) => setRole(e.target.value)} />
            Employee
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
