import React, { useContext } from "react";
// import img from "../yelpLogo.png";
// import SearchBar from "./SearchBar";
// import "./header.css";
import { logout } from "../util/firebaseFunctions";

// import { AuthContext } from "../providers/AuthContext";
import { AuthContext } from "../providers/AuthContext";
import { NavLink } from "react-router-dom";

const userAuthButtons = () => {
  const { currentUser } = useContext(AuthContext);

  const display = () => {
    if (currentUser) {
      return (
        <button className="logout" onClick={logout}>
          Logout
        </button>
      );
    } else {
      return (
        <>
          <NavLink className="logout" to={"/signup"}>
            <button>Signup</button>
          </NavLink>
          <NavLink className="logout" to={"/login"}>
            <button>Login</button>
          </NavLink>
        </>
      );
    }
  };
  return <>{display()}</>;
};

export default userAuthButtons;
