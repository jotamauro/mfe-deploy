import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

export const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
