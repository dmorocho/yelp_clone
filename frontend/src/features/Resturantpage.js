import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";
import "./SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";

const Resturantpage = () => {
  let { id } = useParams();
  let search = "seafood";
  let budgetSign = ["$", "$$", "$$$", "$$$$"];
  const [currentRes, setCurrentRes] = useState("");
  useEffect(() => {
    const getbiz = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `http://localhost:3001/api/businesses/${id}`,
        });

        setCurrentRes(res.data.payload);
        debugger;
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
                src={currentRes.images}
                className="currentRes_img"
              ></img>
            </div>
            <div className="about">
              <h1>{currentRes.name}</h1>
              <h3>{currentRes.categories}</h3>
              <div className="info">
                <h3>{currentRes.phone_number}</h3>
                <h3>{currentRes.address}</h3>
                <h3>{currentRes.url}</h3>
                <h3>{budgetSign[Number(currentRes.budget)]}</h3>
                <div class="rating" data-rating={currentRes.rating}>
                  <i class="star-1">★</i>
                  <i class="star-2">★</i>
                  <i class="star-3">★</i>
                  <i class="star-4">★</i>
                  <i class="star-5">★</i>
                </div>
              </div>
            </div>
            <button onClick={`/Resturantpage/${2}`}>Leave a review</button>
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
