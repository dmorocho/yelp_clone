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
    </nav>
  );
};

export default NavBar;
