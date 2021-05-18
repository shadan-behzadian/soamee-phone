import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import CreatePhone from "./CreatePhone";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/createphone" component={CreatePhone} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

export default Router;
