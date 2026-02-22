import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `text-white no-underline font-bold block md:inline p-2 md:p-0 ${isActive ? 'text-[#646cff] border-b-2 border-[#646cff]' : ''}`;

  return (
    <nav className="bg-[#333] p-4">
      <ul className="list-none p-0 m-0 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
        <li>
          <NavLink to="/" end className={linkClass}>
            Professional CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting2" className={linkClass}>
            Creative CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/greeting3" className={linkClass}>
            Minimalist CV
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
