import React, { useState, useContext, useEffect } from "react";
import searchimg from "../../search.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../secrets";
import { selectResturant, searchBiz } from "../resturants/resturantSlice";
import { apiURL } from "../../util/apiURL";
//google api
import PlacesAutocomplete, {
  geocodebyAddress,
  getLatLng,
} from "react-places-autocomplete";

import "./SearchBar.css";

const SearchBar = () => {
  const API = apiURL();
  const history = useHistory();
  const dispatch = useDispatch();
  const [find, setfind] = useState("");
  const [inputNear, setinputNear] = useState("");
  const [address, setAddress] = useState("");
  const [showNear, setshowNear] = useState("none");
  const [location, setlocation] = useState("");
  const [latitude, setlatitude] = useState("none");
  const [longitude, setlongitude] = useState("none");
  const [liveSearchRes, setliveSeachRes] = useState("");

  // const dispatch = useDispatch();
  // useEffect(() => {
  const searchbiz = async () => {
    dispatch(searchBiz(find));
  };
  // searchbiz();
  // }, []);

  const getAddress = async () => {
    setshowNear("none");
    await navigator.geolocation;

    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        setlatitude(await position.coords.latitude);
        // await position.coords.latitude;
        setlongitude(await position.coords.longitude);
        //await position.coords.longitude;
        // setinputNear("Current Location");

        let res = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
        );
        setinputNear("Current Location");

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
    dispatch(searchBiz(find));
    history.push(`/search/${find}`);
  };

  const handleNearInput = () => {
    showNear === "none" ? setshowNear("block") : setshowNear("none");
    if (inputNear === "Current Location") setinputNear("");
  };

  const liveSearch = async () => {
    let res = await axios.get(`${API}/api/businesses/search/${find}`);
    setliveSeachRes(res.data.payload);
  };
  const handleSelect = () => {};

  return (
    <form onSubmit={handleSubmit}>
      {/* <span>{loc}</span> */}
      {/* id="findInput_div" */}
      <div id="inputs">
        <div className="inputDiv" id="nearInputDiv">
          <span id="findSpan"> Find</span>
          <input
            value={find}
            id="findInput"
            placeholder="accountants, delivery, takeout..."
            onChange={(e) => setfind(e.target.value)}
            onKeyUp={liveSearch}
          />
          {/* </div> */}
          <div className="dropdown-content">
            <ul>
              {liveSearchRes
                ? liveSearchRes.map((biz) => {
                    return (
                      <a href={`/Resturantpage/${biz.id}`}>
                        <li role="option" id={biz.id} key={biz.id}>
                          {biz.name}
                        </li>
                      </a>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
        <div>
          <div className="inputDiv" id="nearInputDiv">
            <span>| </span>
            <span>Near</span>
            {/* <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div> */}
            {/* <p>Latitude: {coordinates.lat}</p>
                  <p>Longitude: {coordinates.lng}</p> */}
            {/* 
                  <input {...getInputProps({ placeholder: "Type address" })} />

                  <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete> */}
            <input
              value={inputNear}
              id="nearInput"
              placeholder=" Queens,NY"
              onChange={(e) => setinputNear(e.target.value)}
              onClick={handleNearInput}
              // onClick={getAddress}
            />
            <div className="dropdown-content" style={{ display: showNear }}>
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
