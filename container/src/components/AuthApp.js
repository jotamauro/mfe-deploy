import { mount } from "auth/AuthApp";

import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export const AuthApp = ({ onSignIn }) => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onSignIn,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      // onSignIn: () => {
      //   onSignIn();
      // },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
