import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Detail from "./detail";
import CodeProcessor from "./codeProcessor";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/getToken">
          <CodeProcessor />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </>
    </Router>
  );
}

export default App;
