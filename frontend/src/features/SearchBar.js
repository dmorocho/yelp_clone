import React, { useState, useContext } from "react";
import searchimg from "../search.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_KEY } from "../secrets";
import "./SearchBar.css";

const SearchBar = () => {
  const history = useHistory();
  const [find, setfind] = useState("");
  const [inputNear, setinputNear] = useState("");
  const [showNear, setshowNear] = useState("none");
  const [location, setlocation] = useState("");
  const [latitude, setlatitude] = useState("none");
  const [longitude, setlongitude] = useState("none");

  const dispatch = useDispatch();

  const getAddress = async () => {
    setinputNear("Current Location");
    setshowNear("none");
    await navigator.geolocation;
    debugger;
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        setlatitude(await position.coords.latitude);
        // await position.coords.latitude;
        setlongitude(await position.coords.longitude);
        //await position.coords.longitude;

        let res = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
        );
        debugger;
        let data = res.data.results;
        let location = data[5].formatted_address.split(",");
        let loc = "" + location[0] + "," + location[1];
        setlocation(loc);
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

  const handleNearInput = () => {
    showNear === "none" ? setshowNear("block") : setshowNear("none");
    if (inputNear === "Current Location") setinputNear("");
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
        <div>
          <div className="inputDiv" id="nearInputDiv">
            <span>| </span>
            <span>Near</span>
            <input
              value={inputNear}
              id="nearInput"
              placeholder=" Queens,NY"
              onChange={(e) => setinputNear(e.target.value)}
              onClick={handleNearInput}
              // onClick={getAddress}
            />
            {/* </div> */}
            <div class="dropdown-content" style={{ display: showNear }}>
              <ul>
                <li role="option" onClick={getAddress}>
                  Current Location
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button id="submit" type="submit" value="">
          <img id="searchImg" src={searchimg} alt="search"></img>
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
