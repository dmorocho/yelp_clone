import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./features/Home";
import SignUp from "./features/SignUp";
import Login from "./features/Login";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Switch>
        <Route path={"/login"}>
          <Login />
        </Route>

        <Route path={"/signup"}>
          <SignUp />
        </Route>

        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path="*" render={() => <div>Something Went Wrong</div>} />
      </Switch>
    </div>
  );
}

export default App;
