import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Cards } from "../Cards";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Cards />
      </Route>
    </Switch>
  )
}

export default Routes;