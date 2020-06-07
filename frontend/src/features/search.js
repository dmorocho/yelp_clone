import React from "react";
import Header from "./Header";
import "./SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";
import SearchBar from "./SearchBar";

// import footer_cityscape from "../footer_cityscape.png";

const Search = () => {
  return (
    <div>
      {/* <header>
        <div>
          <a href="/">
            <img alt="main logo" id="logo" src={img}></img>
          </a>
        </div>
        <SearchBar />
      </header> */}
      <Header />

      <div id="mid_div"></div>
      <br></br>

      <Footer />
    </div>
  );
};
export default Search;
