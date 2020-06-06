import React from "react";

import "./SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";

const Resturantpage = () => {
  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img alt="main logo" id="logo" src={img}></img>
          </a>
        </div>
      </header>
      <div id="mid_div"></div>
      <br></br>
      <hr></hr>
      <Footer />
    </div>
  );
};
export default Resturantpage;
