import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

import axios from "axios";
import "./ResturantPage.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";
import Header from "./Header";

const Resturantpage = () => {
  const API = apiURL();
  const history = useHistory();
  let { id } = useParams();
  let search = "seafood";
  let budgetSign = ["$", "$$", "$$$", "$$$$"];
  const [currentRes, setCurrentRes] = useState("");

  useEffect(() => {
    const getbiz = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/businesses/${id}`,
        });

        setCurrentRes(res.data.payload);
        debugger;
      } catch (error) {
        console.log(error);
      }
    };
    getbiz();
  }, []);

  const fetchHours = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <header>
        <div>
          <a href="/">
            <img alt="main logo" id="single_res_logo" src={img}></img>
          </a>
        </div>
      </header> */}
      <body>
        <nav>Nav</nav>
        <div id="respic_div">
          Header
          <div>
            <img
              id={currentRes[0]}
              src={currentRes.images}
              id="currentRes_img"
            ></img>
            <img
              id={currentRes[0]}
              src={currentRes.images}
              className="currentRes_img"
            ></img>
            <img
              id={currentRes[0]}
              src={currentRes.images}
              className="currentRes_img"
            ></img>
            <img
              id={currentRes[0]}
              src={currentRes.images}
              className="currentRes_img"
            ></img>
          </div>
        </div>
        <div id="main">
          <div id="resinfo_div">res info</div>

          <aside>Aside</aside>
        </div>
        <footer>Footer</footer>
      </body>

      {/* <div class="PHOTOS">
        <img
          id={currentRes[0]}
          src={currentRes.images}
          id="currentRes_img"
        ></img>
        <img
          id={currentRes[0]}
          src={currentRes.images}
          className="currentRes_img"
        ></img>
        <img
          id={currentRes[0]}
          src={currentRes.images}
          className="currentRes_img"
        ></img>
        <img
          id={currentRes[0]}
          src={currentRes.images}
          className="currentRes_img"
        ></img>
      </div> */}

      <div class="BIZINFO">
        {currentRes ? (
          <div id="mid_div">
            <div id={currentRes[0]} className="single_currentRes_div">
              <div className="currentRes_image_div">
                {/* <img
                    id={currentRes[0]}
                    src={currentRes.images}
                    className="currentRes_img"
                  ></img> */}
              </div>
              <div className="about">
                <h1>{currentRes.name}</h1>
                <h3>{currentRes.categories}</h3>
                <div className="info">
                  <h3>{currentRes.phone_number}</h3>
                  <h3>{currentRes.address}</h3>
                  <h3>{currentRes.url}</h3>
                  <h3>{budgetSign[Number(currentRes.budget)]}</h3>
                  <div className="rating" data-rating={currentRes.rating}>
                    <i class="star-1">★</i>
                    <i class="star-2">★</i>
                    <i class="star-3">★</i>
                    <i class="star-4">★</i>
                    <i class="star-5">★</i>
                  </div>
                </div>
              </div>
              <button
                id={currentRes.id}
                onClick={(e) => {
                  history.push(`/review/${e.target.id}`);
                }}
              >
                Leave a review
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <div class="INFO-SNIPPIT"></div>
      <div class="FOOTER"></div>

      <br></br>

      <hr></hr>

      <Footer />
    </>
  );
};
export default Resturantpage;
