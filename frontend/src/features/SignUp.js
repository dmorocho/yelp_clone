import React from "react";
import SignUpFrom from "./SignUpForm";
import signup_image from "../signup_image.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <header>header</header>
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
      <footer>footer</footer>
    </div>
  );
};
export default SignUp;
