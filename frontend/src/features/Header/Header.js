import React from "react";
// import { useContext } from "react";
import img from "../../yelpLogo.png";
import SearchBar from "../searchbar/SearchBar";
import "./header.css";
import UserAuthButtons from "../UserAuthBtns/UserAuthBtns";
// import { logout } from "../util/firebaseFunctions";

// import { AuthContext } from "../providers/AuthContext";
// import { NavLink } from "react-router-dom";

const Header = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <header className="header">
      {/* <div className="NavBtn">{displayButtons()}</div> */}
      <UserAuthButtons />
      <div className="header_logo_div">
        <a href="/">
          <img alt="main logo" id="header_logo_img" src={img}></img>
        </a>
      </div>
      <div className="header_search_div">
        <SearchBar className="header_search" />
      </div>
      {/* <div className="NavBtn">{displayButtons()}</div> */}
    </header>
  );
};
export default Header;
