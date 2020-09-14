import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import img from "../../yelpLogo.png";
import img1 from "../../heroimg1.jpg";
import img2 from "../../heroimg2.jpg";
import img3 from "../../heroimg3.jpg";
import deliveryIcon from "../../deliveryIcon.png";

import SearchBar from "../searchbar/SearchBar";
import Footer from "../footer/Footer.js";
import Category from "../category/Category";
import UserAuthBtns from "../UserAuthBtns/UserAuthBtns";

import { AuthContext } from "../../providers/AuthContext";

import "./Home.css";
import { NavLink } from "react-router-dom";

let num = [img1, img2, img3];

const Home = () => {
  let heroImage = num[Math.floor(Math.random() * 3)];
  console.log(num);

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div
        alt="main hero backgorund"
        id="heroImage"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="arrange_unit nowrap"></div>
        <div id="midHero">
          {/* <div>{displayButtons()}</div> */}

          <UserAuthBtns />

          <div id="logo">
            <a href="/">
              <img alt="main logo" id="logoImg" src={img}></img>
            </a>
          </div>
          <SearchBar />

          <ul id="sub">
            <NavLink to={"/search/cafe"}>
              <li>
                <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
                Cafe
              </li>
            </NavLink>
            <NavLink to={"/search/Resturant"}>
              <li>
                <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
                Resturants
              </li>
            </NavLink>
            <NavLink to={"/search/Burger"}>
              <li>
                <img alt="deliver " id="deliveryIcon" src={deliveryIcon}></img>
                Bars
              </li>
            </NavLink>
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
