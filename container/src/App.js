import React, { lazy, Suspense, useEffect, useState } from "react";

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import { createBrowserHistory } from "history";

import { Redirect, Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Progress } from "./components/Progress";

const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardAppLazy />
              </Route>
              <Route path="/" component={MarketingAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
