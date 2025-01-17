import { StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
