import { mount } from "marketing/MarketingApp";

import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export const MarketingApp = () => {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
