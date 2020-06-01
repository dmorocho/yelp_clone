import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to={"/home"}>
        Home
      </NavLink>

      <NavLink to={"/users"}>Show All</NavLink>
      <NavLink to={"/Login"}>Login</NavLink>
      <NavLink to={"/Signup"}>Signup</NavLink>
      <div>
        <NavLink to={"/users"}>login</NavLink>
        <NavLink to={"/users"}>Signup</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
