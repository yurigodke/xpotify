import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Detail from "./detail";

import { Guide, Bar, Player } from "Modules";

function App() {
  const barElm = <Bar />;
  const barPlayer = <Player />;
  return (
    <Router>
      <>
        <Route exact path="/">
          <Guide bar={barElm} bottom={barPlayer}>
            <Home />
          </Guide>
        </Route>
        <Route path="/login">
          <Guide>
            <Login />
          </Guide>
        </Route>
        <Route path="/detail/:albumId">
          <Guide bar={barElm} bottom={barPlayer}>
            <Detail />
          </Guide>
        </Route>
      </>
    </Router>
  );
}

export default App;
