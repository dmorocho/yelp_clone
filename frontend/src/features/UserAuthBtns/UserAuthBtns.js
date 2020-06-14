import React from "react";
import { useContext } from "react";

import { logout } from "../../util/firebaseFunctions";

import { AuthContext } from "../../providers/AuthContext";
import { NavLink } from "react-router-dom";
import mystyle from "./UserAuthBtns.css";

const UserAuthBtns = () => {
  const { currentUser } = useContext(AuthContext);

  const displayButtons = () => {
    if (currentUser) {
      return (
        <button className="auth-btn" id="logout-btn" onClick={logout}>
          Logout
        </button>
      );
    } else {
      return (
        <>
          <NavLink className="auth-btn" to={"/login"}>
            <button className="auth-btn" id="login-btn">
              Login
            </button>
          </NavLink>
          <NavLink className="auth-btn" to={"/signup"}>
            <button className="auth-btn" id="signup-btn">
              Signup
            </button>
          </NavLink>
        </>
      );
    }
  };
  return (
    <div style={mystyle} className="userAuthBtns-div">
      {displayButtons()}
    </div>
  );
};

export default UserAuthBtns;
