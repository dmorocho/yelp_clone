import React, { useState } from "react";
import searchimg from "../search.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../secrets.js";

const SearchBar = () => {
  const history = useHistory();
  const [find, setfind] = useState("");
  const [near, setnear] = useState("");
  const dispatch = useDispatch();

  const getAddress = async () => {
    await navigator.geolocation;
    debugger;
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = await position.coords.latitude;
        // await position.coords.latitude;
        let long = await position.coords.longitude;
        //await position.coords.longitude;
        debugger;
        let res = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`
        );
        debugger;
        let data = res.data.results;
        let location = data[5].formatted_address.split(",");
        let loc = "" + location[0] + "," + location[1];
        setnear(loc);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //action dispatch(search())
    history.push(`/search/`);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <span>{loc}</span> */}

      <div id="inputs">
        <div className="inputDiv" id="findInput_div">
          <span id="findSpan"> Find</span>
          <input
            value={find}
            id="findInput"
            placeholder="accountants, delivery, takeout..."
            onChange={(e) => setfind(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <span>| </span>
          <span>Near</span>
          <input
            value={near}
            id="nearInput"
            placeholder=" Queens,NY"
            onClick={getAddress}
            onChange={(e) => setnear(e.target.value)}
          />
        </div>

        <button id="submit" type="submit" value="">
          <img id="searchImg" src={searchimg} alt="search"></img>
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
