import React from "react";
import footer_cityscape from "../../footer_cityscape.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img
        alt="footer city skyline "
        id="footer_img"
        src={footer_cityscape}
      ></img>
    </footer>
  );
};

export default Footer;
