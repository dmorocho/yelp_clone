import React from "react";
import searchimg from "../search.png";

const SearchBar = () => {
  const getAddress = async () => {
    await navigator.geolocation;
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = await position.coords.latitude;
        let long = await position.coords.longitude;
        debugger;
        // setLocation({ lat, long });
        // await getWeatherByLatLong(lat, long);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div>
      {" "}
      <form>
        <div id="inputs">
          <div className="inputDiv">
            <span id="findSpan"> Find</span>
            <input
              id="findInput"
              placeholder="accountants, delivery, takeout..."
            />
          </div>
          <div className="inputDiv">
            <span>| </span>
            <span>Near</span>
            <input
              id="nearInput"
              placeholder=" Queens,NY"
              onClick={getAddress}
            />
          </div>

          <button id="submit" type="submit" value="">
            <img id="searchImg" src={searchimg}></img>
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
