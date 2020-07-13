import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "./resturantSlice";
import { useHistory, useParams } from "react-router-dom";

import "./resturants.css";

const Resturants = () => {
  const Searches = useSelector(selectResturant);
  const dispatch = useDispatch();
  const history = useHistory();
  let { term } = useParams();
  const handleClick = (e) => {
    history.push(`/Resturantpage/${e.target.id}`);
  };

  // useEffect(() => {
  //   const getbiz = async () => {
  //     dispatch(searchBiz(term));
  //   };
  //   getbiz();
  // }, []);

  let displaySearches = Searches.map((rest, i) => {
    debugger;
    return (
      <a
        id="resTag"
        href={`/Resturantpage/${rest.bizid[0]}`}
        key={rest.bizid[0]}
      >
        <div className="single_rest_div" id={rest.id} key={rest.id}>
          <div className="rest_image_div">
            <img
              id={rest.bizid[0]}
              src={rest.images[0]}
              className="rest_img"
            ></img>
          </div>
          <div className="about">
            <h1>
              <bold>
                {i + 1}. {rest.name}
              </bold>
            </h1>
            <h3>{rest.categories[0]}</h3>
            <div className="info">
              <h3>{rest.phone_number[0]}</h3>
              <h3>{rest.address[0]}</h3>
              <h1>REST CARD</h1>
              <div class="rating" data-rating={rest.rating}>
                <i class="star-1">★</i>
                <i class="star-2">★</i>
                <i class="star-3">★</i>
                <i class="star-4">★</i>
                <i class="star-5">★</i>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div className="main_resturant_div">
      {Searches.length ? displaySearches : <p>No Results Found</p>}
    </div>
  );
};
export default Resturants;
