import React from "react";
import LoginForm from "./LoginForm";
import signup_image from "../signup_image.png";
import "./Signup/SignUp.css";
import img from "../yelpLogo.png";

import footer_cityscape from "../footer_cityscape.png";

const Login = () => {
  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img alt="main logo" id="logo" src={img}></img>
          </a>
        </div>
      </header>
      <div id="mid_div">
        <div style={{ margin: 10, alignItems: "center" }} id="signup_div">
          <h3 style={{ color: "#D32323", fontWeight: "bold", margin: 5 }}>
            Login to Yelp
          </h3>

          <p>
            By logging in, you agree to Yelp’s Terms of Service and Privacy
            Policy.
          </p>
          <LoginForm style={{ padding: 5 }} />
        </div>
        <div>
          <img alt="signup" src={signup_image}></img>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <footer>
          <img
            alt="city landscape"
            id="footer_img"
            src={footer_cityscape}
          ></img>
        </footer>
      </div>
    </div>
  );
};
export default Login;
