import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
