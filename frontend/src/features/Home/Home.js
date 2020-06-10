import React from "react";
import { useDispatch } from "react-redux";
import img from "../../yelpLogo.png";
import img1 from "../../heroimg1.jpg";
import img2 from "../../heroimg2.jpg";
import img3 from "../../heroimg3.jpg";
import deliveryIcon from "../../deliveryIcon.png";
import Resturants from "../resturants/Resturants";
import SearchBar from "../SearchBar";
import Footer from "../footer/Footer.js";
import Category from "../category/Category";
// import searchimg from "../../search.png";
import "./Home.css";

let num = [img1, img2, img3];

const Home = () => {
  let heroImage = num[Math.floor(Math.random() * 3)];
  console.log(num);

  return (
    <div>
      <div
        alt="main hero backgorund"
        id="heroImage"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="arrange_unit nowrap">
          <ul className="header_ul">
            <li className="header-id" id="header-log-in">
              <a className="header_a_link" href="/login">
                Log In
              </a>
            </li>
            <li id="signup_link">
              <a href="/signup" className="header_a_link">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div id="midHero">
          <div></div>
          <div id="logo">
            <a href="/">
              <img alt="main logo" id="logoImg" src={img}></img>
            </a>
          </div>
          <SearchBar />

          <ul id="sub">
            <li>
              <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
              Delivery
            </li>
            <li>
              <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
              Resturants
            </li>
            <li>
              <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
              Bars
            </li>
          </ul>
        </div>
      </div>

      <Category />
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Home;
