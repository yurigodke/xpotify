import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Home from "./home";
import Login from "./login";
import Detail from "./detail";

import { Guide, Bar, Player } from "Modules";

import actions from "Actions";

function App() {
  return (
    <Guide bar={<Bar />} bottom={<Player />}>
      <Router>
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
      </Router>
    </Guide>
  );
}

export default App;
