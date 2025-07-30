import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/data" className={({ isActive }) => isActive ? 'active' : ''}>Data</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

