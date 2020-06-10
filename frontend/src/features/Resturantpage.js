import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";

const Resturantpage = () => {
  let search = "seafood";
  const [currentRes, setCurrentRes] = useState("");
  useEffect(() => {
    const getbiz = async () => {
      try {
        debugger;
        let res = await axios({
          method: "post",
          url: "http://localhost:3001/api/businesses/search/",
          data: {
            search: "seafood",
          },
        });
        debugger;
        setCurrentRes(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getbiz();
  }, []);

  return (
    <div>
      <header>
        <div>
          <a href="/">
            <img alt="main logo" id="single_res_logo" src={img}></img>
          </a>
        </div>
      </header>

      {currentRes ? (
        <div id="mid_div">
          <div id={currentRes[0]} className="single_currentRes_div">
            <div className="currentRes_image_div">
              <img
                id={currentRes[0]}
                src={currentRes[0].images}
                className="currentRes_img"
              ></img>
            </div>
            <div className="about">
              <h1>{currentRes.name}</h1>
              <h3>{currentRes.categories}</h3>
              <div className="info">
                <h3>{currentRes.phone_number}</h3>
                <h3>{currentRes.address}</h3>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <br></br>
      <hr></hr>
      <Footer />
    </div>
  );
};
export default Resturantpage;
