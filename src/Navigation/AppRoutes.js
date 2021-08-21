import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/Home/Home";
import Manatee from "../components/Manatee/Manatee";
import Narwhal from "../components/Narwhal/Narwhal";
import Whale from "../components/Whale/Whale";

export default function AppRoutes() {
  console.log("AppRoutes");

  return (
      <Switch>
        <Route path="/Whale"         component={Whale} />
        <Route path="/Manatee"       component={Manatee} />
        <Route exact path="/Narwhal" component={Narwhal} />
        <Route path="/Narwhal/:type" component={Narwhal} />
        <Route exact path="/"        component={Home} />
      </Switch>
  );
}
