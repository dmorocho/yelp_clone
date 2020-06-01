import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./features/Home";
import SignUp from "./features/SignUp";
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Home /> */}
      <SignUp />
    </div>
  );
}

export default App;
