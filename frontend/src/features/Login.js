import React from "react";
import LoginForm from "./LoginForm";
import signup_image from "../signup_image.png";
import "./SignUp.css";
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
        <div id="signup_div">
          <h3>Sign in to Yelp</h3>
          <p>
            New to Yelp? Sign up By logging in, you agree to Yelp’s Terms of
            Service and Privacy Policy.
          </p>
          <LoginForm />
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
