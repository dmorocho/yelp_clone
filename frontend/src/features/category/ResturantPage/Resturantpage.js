import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { apiURL } from "../../../util/apiURL";
import { useSelector } from "react-redux";
import { selectUser } from "../../UserSlice";

import axios from "axios";
import "./ResturantPage.css";
////////import components/////
// import img from "../yelpLogo.png";
import Footer from "../../footer/Footer";
import Header from "../../Header/Header";
import BizReviews from "../../BizReviews/BizReviews";

const Resturantpage = () => {
  const API = apiURL();
  const history = useHistory();
  let { id } = useParams();
  let budgetSign = ["$", "$$", "$$$", "$$$$"];
  const [currentRes, setCurrentRes] = useState("");
  const [currentResHours, setCurrentResHours] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    const getbiz = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/businesses/${id}`,
        });
        debugger;
        let hours = await axios({
          method: "get",
          url: `${API}/api/hours/${id}`,
        });
        debugger;
        setCurrentRes(res.data.payload);
        setCurrentResHours(hours.data.payload[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getbiz();
    debugger;
  }, []);

  const handleReviewBtnClick = (e) => {
    debugger;
    if (user) {
      history.push(`/review/${currentRes.id}`);
    } else {
      history.push(`/review/${currentRes.id}`);
    }
  };
  return (
    <div class="res-page-grid-container">
      <div class="res-page-header">
        <Header />
      </div>
      <div
        class="hero"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "16.667vw",
            width: "25%",
            paddingRight: 5,
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
            src={currentRes.images}
          ></img>
        </div>
        <div style={{ height: "16.667vw", width: "25%", paddingRight: 5 }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
            src={currentRes.images}
          ></img>
        </div>
        <div style={{ height: "16.667vw", width: "25%", paddingRight: 5 }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
            src={currentRes.images}
          ></img>
        </div>
        <div style={{ height: "16.667vw", width: "25%", paddingRight: 5 }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
            src={currentRes.images}
          ></img>
        </div>
      </div>
      <div className="res-page-middle">
        <div class="custom-select" style={{ textAlign: "end" }}>
          {/* <select>
            <option value="0">Order By:</option>
            <option value="distance">oldest</option>
            <option value="distance">newest</option>
          </select> */}
        </div>

        <h1 style={{ margin: "5px", fontSize: "x-large", padding: "2px" }}>
          {currentRes.name}
        </h1>
        <div className="rating" data-rating={currentRes.rating}>
          <i class="star-1">★</i>
          <i class="star-2">★</i>
          <i class="star-3">★</i>
          <i class="star-4">★</i>
          <i class="star-5">★</i>
        </div>
        <div style={{ padding: 10 }}>
          <p>Mon: {currentResHours.monday}</p>
          <p>Tue: {currentResHours.tuesday}</p>
          <p>Wed: {currentResHours.wednesday}</p>
          <p>Thu: {currentResHours.thursday}</p>
          <p>Fri: {currentResHours.friday}</p>
          <p>Sat: {currentResHours.saturday}</p>
          <p>Sun: {currentResHours.sunday}</p>
        </div>
        <button id={currentRes.id} onClick={handleReviewBtnClick}>
          ★ Write a Review
        </button>
        {/* <h3>Amenities</h3> */}
        {/* <Resturants /> */}

        <div>
          <h1>Recommended Reviews</h1>
          <BizReviews id={id} />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div
        class="res-page-right"
        style={{
          width: "350px",
        }}
      >
        <div id="info">
          <h3>{currentRes.phone_number}</h3>
          <h3>{currentRes.address}</h3>
          <h3 style={{ wordBreak: "break-word" }}>{currentRes.url}</h3>
        </div>
      </div>
      <div class="res-page-footer">
        <Footer />
      </div>
    </div>
  );
};
export default Resturantpage;
