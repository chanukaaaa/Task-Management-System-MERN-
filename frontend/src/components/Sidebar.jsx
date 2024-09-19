import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
