import React from "react";
import Header from "./Header";
import "./SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";
// import SearchBar from "./SearchBar";
import Resturants from "./resturants/Resturants";
import "./search.css";

const Search = () => {
  return (
    <div>
      <div className="search_header_div">
        <Header className="search_header" />
      </div>

      <div id="search_mid_div">
        <Resturants />
      </div>

      <Footer />
    </div>
  );
};
export default Search;
