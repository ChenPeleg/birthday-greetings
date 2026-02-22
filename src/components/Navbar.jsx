import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Professional CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting2" className={({ isActive }) => isActive ? 'active' : ''}>
            Creative CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting3" className={({ isActive }) => isActive ? 'active' : ''}>
            Minimalist CV
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
