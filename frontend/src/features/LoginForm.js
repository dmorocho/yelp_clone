import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../util/firebaseFunctions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./UserSlice";
import { apiURL } from "../util/apiURL";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const API = apiURL();

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
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        id="email_input"
        type="email"
        placeholder=" Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
        id="password_input"
        type="password"
        placeholder=" Password"
      />
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      <input id="login_btn" type="submit" value="login" />
    </form>
  );
};
export default LoginForm;
