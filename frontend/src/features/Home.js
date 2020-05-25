import React from "react";
import img from "../yelpLogo.png";
import img1 from "../heroimg1.jpg";
import img2 from "../heroimg2.jpg";
import img3 from "../heroimg3.jpg";
import deliveryIcon from "../deliveryIcon.png";
import searchimg from "../search.png";
import "./Home.css";
let num = [img1, img2, img3];

const Home = () => {
  let heroImage = num[Math.floor(Math.random() * 3)];
  console.log(num);
  return (
    <div>
      <div id="heroImage" style={{ backgroundImage: `url(${heroImage})` }}>
        <div id="midHero">
          <div id="logo">
            <img id="logoImg" src={img}></img>
          </div>
          <form>
            <div id="inputs">
              <div className="inputDiv">
                <span id="findSpan"> Find</span>
                <input
                  id="findInput"
                  placeholder="accountants, delivery, takeout..."
                />
              </div>
              <div className="inputDiv">
                <span>| </span>
                <span>Near</span>
                <input id="nearInput" placeholder=" Queens,NY" />
              </div>

              <button id="submit" type="submit" value="">
                <img id="searchImg" src={searchimg}></img>
              </button>
            </div>
          </form>
          <ul id="sub">
            <li>
              <img id="deliveryIcon" src={deliveryIcon}></img>Delivery
            </li>
            <li>Resturants</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
