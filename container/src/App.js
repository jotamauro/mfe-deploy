import React, { lazy, Suspense } from "react";

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Progress } from "./components/Progress";

const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export const App = () => {
  console.log(MarketingAppLazy);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthAppLazy} />
              <Route path="/" component={MarketingAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
