import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectResturant, searchBiz } from "./resturantSlice";
import { useHistory } from "react-router-dom";
import "./resturants.css";

const Resturants = () => {
  const Searches = useSelector(selectResturant);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    debugger;
    history.push(`/Resturantpage/${e.target.id}`);
  };

  useEffect(() => {
    const getbiz = async () => {
      dispatch(searchBiz());
    };
    getbiz();
  }, []);

  let displaySearches = Searches.map((rest, i) => {
    return (
      <div className="single_rest_div" onClick={handleClick}>
        <div className="rest_image_div">
          <img id={rest.id} src={rest.images} className="rest_img"></img>
        </div>
        <div className="about">
          <h1>
            <bold>
              {i + 1}. {rest.name}
            </bold>
          </h1>
          <h3>{rest.categories}</h3>
          <div className="info">
            <h3>{rest.phone_number}</h3>
            <h3>{rest.address}</h3>
          </div>
        </div>
      </div>
    );
  });

  return <div className="main_resturant_div">{displaySearches}</div>;
};
export default Resturants;
