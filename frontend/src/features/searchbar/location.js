import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";

import { makeStyles } from "@material-ui/core/styles";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { TextField, ListItem, IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LocationSearch = ({ setLatitude, setLongitude }) => {
  const classes = useStyles();

  const [address, setAddress] = useState("");
  const [select, setSelect] = useState(false);

  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleFocus = () => {
    setSelect(true);
  };
  const handleBlur = () => {
    setSelect(false);
  };
  const handleClick = () => {
    debugger;
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setAddress(value);
    setLatitude(latLng.lat);
    setLongitude(latLng.lng);
  };
  console.log(select);
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div id="locationSearchDiv">
            <TextField
              className="searchTerm"
              // placeholder="location"
              id="outlined-basic"
              // label="location"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AddLocationIcon />
                  </InputAdornment>
                ),
              }}
              {...getInputProps({ placeholder: "Type address" })}
              onFocus={handleFocus}
            />

            {/* <input
              {...getInputProps({ placeholder: "Type address" })}
              onFocus={handleFocus}
            /> */}
            <div id="locSearchResults">
              {select === true ? (
                <li onClick={handleClick}>use current location</li>
              ) : null}
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <ListItem
                    // component="small"
                    variant="p"
                    align="center"
                    color="primary"
                    margin="none"
                    id="searchResultItem"
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <LocationOnIcon fontSize="small" />
                    {suggestion.description}
                  </ListItem>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        text="uselocation"
        onClick={handleClick}
      >
        <PersonPinCircleOutlinedIcon />
      </IconButton>
    </>
  );
};

export default LocationSearch;
