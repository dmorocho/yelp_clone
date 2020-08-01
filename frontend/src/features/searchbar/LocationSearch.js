import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import { Typography, ListItem } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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
      setAddress("My Location");
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
          <div id="searchDiv">
            <InputBase
              className={classes.input}
              placeholder="location"
              {...getInputProps({ placeholder: "Type address" })}
              onFocus={handleFocus}
            />

            <div id="searchResultsDiv">
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#068360" : "#fff",
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
