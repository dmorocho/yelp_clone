import React from "react";

const LoginForm = () => {
  return (
    <form>
      <input required id="email_input" type="email" placeholder=" Email" />
      <input
        required
        id="password_input"
        type="password"
        placeholder=" Password"
      />
    </form>
  );
};
export default LoginForm;
