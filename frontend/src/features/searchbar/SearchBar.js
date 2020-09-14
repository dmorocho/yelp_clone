// import React, { useState, useContext, useEffect } from "react";
// import searchimg from "../../search.png";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { API_KEY } from "../../secrets";
// import { selectResturant, searchBiz } from "../resturants/resturantSlice";
// import { apiURL } from "../../util/apiURL";
// import LocationSearch from "./Location";
// //google api
// import PlacesAutocomplete, {
//   geocodebyAddress,
//   getLatLng,
// } from "react-places-autocomplete";
// //material UI
// import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";

// //styling
// import "./SearchBar.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//     width: 600,
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }));

// const SearchBar = () => {
//   const classes = useStyles();
//   const API = apiURL();
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [term, setTerm] = useState("");
//   const [inputNear, setinputNear] = useState("");
//   const [address, setAddress] = useState("");
//   const [showNear, setshowNear] = useState("none");
//   const [location, setLocation] = useState("");
//   const [latitude, setLatitude] = useState("none");
//   const [longitude, setLongitude] = useState("none");
//   const [liveSearchRes, setliveSeachRes] = useState("");

//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   const searchbiz = async () => {
//     dispatch(searchBiz(term));
//   };
//   // searchbiz();
//   // }, []);

//   const getAddress = async () => {
//     setshowNear("none");
//     await navigator.geolocation;

//     await navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         setLatitude(await position.coords.latitude);
//         // await position.coords.latitude;
//         setLongitude(await position.coords.longitude);
//         //await position.coords.longitude;
//         // setinputNear("Current Location");

//         let res = await axios.get(
//           `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
//         );
//         setinputNear("Current Location");

//         let data = res.data.results;
//         let location = data[5].formatted_address.split(",");
//         let loc = "" + location[0] + "," + location[1];
//         setLocation(loc);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //action dispatch(search())
//     dispatch(searchBiz(term));
//     history.push(`/search/${term}`);
//   };

//   const handleNearInput = () => {
//     showNear === "none" ? setshowNear("block") : setshowNear("none");
//     if (inputNear === "Current Location") setinputNear("");
//   };

//   const liveSearch = async () => {
//     let res = await axios.get(`${API}/api/businesses/search/${term}`);
//     setliveSeachRes(res.data.payload);
//   };
//   const handleSelect = () => {};

//   return (
// <form onSubmit={handleSubmit}>
//   {/* <span>{loc}</span> */}
//   {/* id="findInput_div" */}
//   <div id="inputs">
//     <div className="inputDiv" id="nearInputDiv">
//       <span id="findSpan"> Find</span>
//       <input
//         value={find}
//         id="findInput"
//         placeholder="accountants, delivery, takeout..."
//         onChange={(e) => setfind(e.target.value)}
//         onKeyUp={liveSearch}
//       />
//       {/* </div> */}
//       <div className="dropdown-content">
//         <ul>
//           {liveSearchRes
//             ? liveSearchRes.map((biz) => {
//                 return (
//                   <a href={`/Resturantpage/${biz.id}`}>
//                     <li role="option" id={biz.id} key={biz.id}>
//                       {biz.name}
//                     </li>
//                   </a>
//                 );
//               })
//             : null}
//         </ul>
//       </div>
//     </div>
//     <div>
//       <div className="inputDiv" id="nearInputDiv">
//         <span>| </span>
//         <span>Near</span>

//         {/* <PlacesAutocomplete
//           value={address}
//           onChange={setAddress}
//           onSelect={handleSelect}
//         >
//           {({
//             getInputProps,
//             suggestions,
//             getSuggestionItemProps,
//             loading,
//           }) => (
//             <div> */}
//         {/* <p>Latitude: {coordinates.lat}</p>
//               <p>Longitude: {coordinates.lng}</p> */}
//         {/*
//               <input {...getInputProps({ placeholder: "Type address" })} />

//               <div>
//                 {loading ? <div>...loading</div> : null}

//                 {suggestions.map((suggestion) => {
//                   const style = {
//                     backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
//                   };

//                   return (
//                     <div {...getSuggestionItemProps(suggestion, { style })}>
//                       {suggestion.description}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete> */}
//         <LocationSearch />
//         {/* <input
//           value={inputNear}
//           id="nearInput"
//           placeholder=" Queens,NY"
//           onChange={(e) => setinputNear(e.target.value)}
//           onClick={handleNearInput}
//           // onClick={getAddress}
//         /> */}
//         {/* <div className="dropdown-content" style={{ display: showNear }}>
//           <ul>
//             <li role="option" onClick={getAddress}>
//               Current Location
//             </li>
//           </ul>
//         </div> */}
//       </div>
//     </div>
//     <button id="submit" type="submit" value="">
//       <img id="searchImg" src={searchimg} alt="search"></img>
//     </button>
//   </div>
// </form>
//     <>
//       <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
//         <InputBase
//           onChange={(e) => setTerm(e.currentTarget.value)}
//           value={term}
//           className={classes.input}
//           placeholder="Search term"
//           variant="outlined"
//           // fullWidth="false"
//           autoFocus="true"
//         />
//         <Divider className={classes.divider} orientation="vertical" />
//         <LocationSearch setLatitude={setLatitude} setLongitude={setLongitude} />
//         <Divider className={classes.divider} orientation="vertical" />

//         <IconButton
//           color="primary"
//           className={classes.iconButton}
//           aria-label="directions"
//           onClick={handleSubmit}
//         >
//           <SearchIcon />
//           <Typography
//             component="small"
//             variant="small"
//             align="baseline"
//             color="primary"
//             margin="none"
//           >
//             Search
//           </Typography>
//         </IconButton>
//       </Paper>
//     </>
//   );
// };
// export default SearchBar;

////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LocationSearch from "./LocationSearch";
import { apiURL } from "../../util/apiURL";
import { searchBiz } from "../resturants/resturantSlice";
// import { receiveSearch } from "../SearchBar/SearchBarSlice";
import "./SearchBar.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

// const API_KEY = process.env.REACT_APP_API_KEY;

const SearchBar = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("");
  const [term, setTerm] = useState("");
  const [liveSearchRes, setliveSeachRes] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const API = apiURL();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchBiz(term));
    history.push(`/search/${term}`);
  };
  const liveSearch = async () => {
    let res = await axios.get(`${API}/api/businesses/search/${term}`);
    setliveSeachRes(res.data.payload);
  };
  return (
    <>
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <Typography
          component="small"
          variant="small"
          align="baseline"
          color="primary"
          margin="none"
        >
          Find
        </Typography>
        <InputBase
          onChange={(e) => setTerm(e.currentTarget.value)}
          value={term}
          className={classes.input}
          placeholder="Search term"
          variant="outlined"
          // fullWidth="false"
          autoFocus="true"
          onKeyUp={liveSearch}
        />
        {/* <div className="dropdown-content">
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
        </div> */}
        <Divider className={classes.divider} orientation="vertical" />
        <Typography
          component="small"
          variant="small"
          align="baseline"
          color="primary"
          margin="none"
        >
          Near
        </Typography>
        <LocationSearch setLatitude={setLatitude} setLongitude={setLongitude} />
        <Divider className={classes.divider} orientation="vertical" />

        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
