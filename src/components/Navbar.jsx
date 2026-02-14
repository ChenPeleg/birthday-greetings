import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Greeting 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting2" className={({ isActive }) => isActive ? 'active' : ''}>
            2 Greeting
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting3" className={({ isActive }) => isActive ? 'active' : ''}>
            Greeting 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
