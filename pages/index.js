import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Home from "./home";
import Login from "./login";
import Detail from "./detail";

import { Guide, Bar, Player } from "Modules";

const RouteSwitch = () => {
  const location = useLocation();

  const guideParams =
    location.pathname != "/login"
      ? {
          bar: <Bar />,
          bottom: <Player />
        }
      : null;

  return (
    <Guide {...guideParams}>
      <>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/detail/:albumId">
          <Detail />
        </Route>
      </>
    </Guide>
  );
};

function App(a) {
  return (
    <Router>
      <RouteSwitch />
    </Router>
  );
}

export default App;
