import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import User from './user/pages/Users.js'


import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <User />
      </Route>
      <Redirect to="/" />
    </Router>
  );
};

export default App;
