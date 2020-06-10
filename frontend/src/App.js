import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./features/Home/Home";
import SignUp from "./features/SignUp";
import Search from "./features/search";
import Login from "./features/Login";
import Resturantpage from "./features/Resturantpage";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <AuthRoute path={"/login"}>
            <Login />
          </AuthRoute>

          <AuthRoute path={"/signup"}>
            <SignUp />
          </AuthRoute>
          <Route path={"/search"}>
            <Search />
          </Route>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/Resturantpage/:id"}>
            <Resturantpage />
          </Route>

          <Route path="*" render={() => <div>Something Went Wrong</div>} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
