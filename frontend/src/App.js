import React from "react";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./features/Home/Home";
import SignUp from "./features//Signup/SignUp";
import ResultsPage from "./features/Results/ResultsPage";
import Login from "./features/Login";
import Resturantpage from "./features/category/ResturantPage/Resturantpage";
import Reviewpage from "./features/review/ReviewPage";

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
          <Route path={"/search/:term"}>
            <ResultsPage />
          </Route>
          <Route exact path={"/"}>
            {/* <AuthRoute exact path={"/"}> */}
            <Home />
            {/* </AuthRoute> */}
          </Route>
          <Route exact path={"/Resturantpage/:id"}>
            <Resturantpage />
          </Route>
          <Route exact path={"/Review/:id"}>
            <Reviewpage />
          </Route>
          <Route path="*" render={() => <div>Something Went Wrong</div>} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
