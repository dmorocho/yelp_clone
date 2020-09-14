import React, { useState, useEffect } from "react";
import BizReviewCards from "./BizReviewCards";
import { apiURL } from "../../util/apiURL";
import axios from "axios";
export default function UserReviews({ id }) {
  const API = apiURL();
  const [reviews, SetReviews] = useState([]);

  useEffect(() => {
    const getbiz = async () => {
      try {
        let resReviews = await axios({
          method: "get",
          url: `${API}/api/businesses/${id}/reviews`,
        });
        debugger;
        SetReviews(resReviews.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    getbiz();
  }, []);

  let displaySearches = reviews.map((review, i) => {
    return (
      <BizReviewCards
        body={review.body}
        rating={review.rating}
        userid={review.userid}
      />
    );
  });

  return <div>{displaySearches}</div>;
}
