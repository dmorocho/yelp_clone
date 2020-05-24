import React from "react";
import img from "../yelpLogo.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="heroImage">
        <div id="midHero">
          <div id="logo">
            <img id="logoImg" src={img}></img>
          </div>
          <form>
            <div id="inputs">
              <div class="inputDiv">
                <span>Find</span>
                <input placeholder="accountants, delivery, takeout..." />
              </div>
              <div class="inputDiv">
                <span>Near</span>
                <input id="findInput" placeholder=" Queens,NY" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
