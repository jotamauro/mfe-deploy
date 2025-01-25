import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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
