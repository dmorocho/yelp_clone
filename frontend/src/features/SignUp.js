import React from "react";
import SignUpFrom from "./SignUpForm";
import signup_image from "../signup_image.png";
import "./SignUp.css";
import img from "../yelpLogo.png";

import footer_cityscape from "../footer_cityscape.png";

const SignUp = () => {
  return (
    <div>
      <header>
        <div>
          <img id="logo" src={img}></img>
        </div>
      </header>
      <div id="mid_div">
        <div id="signup_div">
          <h3>Sign Up for Yelp</h3>
          <p>
            Connect with great local businesses By continuing, you agree to
            Yelp’s Terms of Service and acknowledge Yelp’s Privacy Policy.
          </p>
          <SignUpFrom />
        </div>
        <div>
          <img src={signup_image}></img>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div>
        <footer>
          <img id="footer_img" src={footer_cityscape}></img>
        </footer>
      </div>
    </div>
  );
};
export default SignUp;
