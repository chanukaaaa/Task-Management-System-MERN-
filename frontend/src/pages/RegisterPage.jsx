// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Employee");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { email, password, role });
      navigate("/");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <div>
          <label>
            <input type="radio" value="Admin" checked={role === "Admin"} onChange={() => setRole("Admin")} />
            Admin
          </label>
          <label>
            <input type="radio" value="Manager" checked={role === "Manager"} onChange={() => setRole("Manager")} />
            Manager
          </label>
          <label>
            <input type="radio" value="Employee" checked={role === "Employee"} onChange={() => setRole("Employee")} />
            Employee
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
