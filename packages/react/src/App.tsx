import * as React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import Home from "./router/Home";
import Details from "./router/Details";

function App() {
  return (
    <div className="react">
      <BrowserRouter basename="/original">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
