import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
// import AddLocationIcon from "@material-ui/icons/AddLocation";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

const LocationSearch = ({ setLatitude, setLongitude }) => {
  //   const classes = useStyles();

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
          <div>
            <TextField
              className="searchTerm"
              placeholder="location"
              id="outlined-basic"
              label="location"
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
            <div>
              {select === true ? (
                <li onClick={handleClick}>use current location</li>
              ) : null}
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <li {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </li>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default LocationSearch;
