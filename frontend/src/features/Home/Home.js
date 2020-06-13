import React, { useContext } from "react";
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
import { logout } from "../../util/firebaseFunctions";

import { AuthContext } from "../../providers/AuthContext";
import { NavLink } from "react-router-dom";

import "./Home.css";

let num = [img1, img2, img3];

const Home = () => {
  let heroImage = num[Math.floor(Math.random() * 3)];
  console.log(num);

  const { currentUser } = useContext(AuthContext);

  const displayButtons = () => {
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

  return (
    <div>
      <div
        alt="main hero backgorund"
        id="heroImage"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="arrange_unit nowrap"></div>
        <div id="midHero">
          <div>{displayButtons()}</div>
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
