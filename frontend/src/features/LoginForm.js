import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { login } from "../util/firebaseFunctions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./UserSlice";
import { apiURL } from "../util/apiURL";

//styling
import { makeStyles, Grid, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const API = apiURL();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(email, password);
      let user = await axios({
        method: "get",
        url: `${API}/api/users/${res.user.uid}`,
      });

      dispatch(addUser(user.data.users[0]));
      debugger;
      history.push("/");
    } catch (error) {
      setError(error.code.split("/")[1].replace("-", " ").replace("-", " "));
    }
  };

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        style={{ borderColor: "#D32323" }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ backgroundColor: "#D32323", color: "#ffff" }}
        className={classes.submit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <NavLink to="/signup" variant="body2">
            {"Don't have an account? Sign Up"}
          </NavLink>
        </Grid>
      </Grid>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </form>
  );
};
export default LoginForm;
