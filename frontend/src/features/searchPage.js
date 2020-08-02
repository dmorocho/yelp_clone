import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "./resturants/resturantSlice";

import Header from "./Header/Header";
import "./Signup/SignUp.css";
import img from "../yelpLogo.png";
import Footer from "./footer/Footer";
// import SearchBar from "./SearchBar";
import Resturants from "./resturants/ResturantsCard";
import "./search.css";

const Search = () => {
  const dispatch = useDispatch();
  let { term } = useParams();

  useEffect(() => {
    const getbiz = async () => {
      dispatch(searchBiz(term));
    };
    getbiz();
  }, []);
  return (
    <div className="grid-container">
      {/* <div className="search_header_div"> */}
      <Header className="search_header" />
      {/* </div> */}

      <div className="mid_grid-container">
        <div className="results_search_mid_div">
          <Resturants />
        </div>
        <div className="map_results_search_mid_div">
          {/* <iframe
            className="map_div"
            src="https://www.google.com/maps/d/embed?mid=1D5MOsIaiJJLp7VvQSXdb2dPSOrrKc2V9&hl=en"
            width="400"
            height="400"
          ></iframe> */}
        </div>
      </div>
      <div className="footer_div">
        <Footer />
      </div>
    </div>
  );
};
export default Search;
