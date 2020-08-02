import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "../resturants/resturantSlice";
import Resturants from "../resturants/ResturantsCard";

import "./resultsPage.css";

//components
import Header from "../Header/Header";
import Filters from "../Filters/Filter";

const ResultsPage = () => {
  const dispatch = useDispatch();
  let { term } = useParams();

  useEffect(() => {
    const getbiz = async () => {
      dispatch(searchBiz(term));
    };
    getbiz();
  }, []);
  return (
    <div class="grid-container">
      <div class="header">
        <Header />
      </div>

      <div class="left">
        <Filters />
      </div>
      <div class="middle">
        <Resturants />
      </div>
      <div class="right">Column</div>

      <div class="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default ResultsPage;
