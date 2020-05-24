import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./features/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
