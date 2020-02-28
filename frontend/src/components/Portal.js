import React from "react";
import AdminQuickStats from "./dashboards/AdminQuickStats";
import AdminActions from "./dashboards/AdminActions";

const Portal = () => {
  return (
    <div className="dashboard">
      <AdminQuickStats />
      <AdminActions />
    </div>
  );
};

export default Portal;
