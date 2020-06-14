import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../util/firebaseFunctions";
import axios from "axios";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
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
