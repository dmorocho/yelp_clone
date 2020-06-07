import React from "react";
import img from "../yelpLogo.png";
import SearchBar from "./SearchBar";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo_div">
        <a href="/">
          <img alt="main logo" id="header_logo_img" src={img}></img>
        </a>
      </div>
      <div className="header_search_div">
        <SearchBar className="header_search" />
      </div>
    </header>
  );
};
export default Header;
