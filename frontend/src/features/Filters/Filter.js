import React, { useState } from "react";
import { RadioGroup, FormGroup, Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import "./filter.css";
const Filters = () => {
  const [distance, setDistance] = useState("");
  const [value, setValue] = useState({
    $: false,
    $$: false,
    $$$: false,
  });

  const handleChange = (event) => {
    setDistance(event.target.value);
  };
  const handleValueChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  };
  console.log({ Value: value, distance });

  return (
    <form id="filter_form">
      <h2>Filters</h2>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              // checked={gilad}
              onChange={handleValueChange}
              name="$"
            />
          }
          label="$"
        />
        <FormControlLabel
          control={
            <Checkbox
              //  checked={jason}
              onChange={handleValueChange}
              name="$$"
            />
          }
          label="$$"
        />
        <FormControlLabel
          control={
            <Checkbox
              //   checked={antoine}
              onChange={handleValueChange}
              name="$$$"
            />
          }
          label="$$$"
        />
      </FormGroup>
      <h2>Distance</h2>
      <RadioGroup
        aria-label="Distance"
        name="distance"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="5"
          control={<Radio />}
          label="Driving (5 mi.)"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Biking (2 mi.)"
        />
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="Walking (1 mi.)"
        />
        <FormControlLabel
          value=".25"
          control={<Radio />}
          label="Within 4 blocks"
        />
      </RadioGroup>
    </form>
  );
};
export default Filters;
