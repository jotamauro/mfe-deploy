import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
      console.log("Container just navigated");
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
