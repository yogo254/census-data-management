import React from "react";

const AdminQuickStats = () => {
  return (
    <div className="portal-component">
      <h5>Current Admin Statistics</h5>
      <div className="row">
        <div className="col s12 m6 l2">
          <div class="card-panel common  white-text center">
            <h6>Current Users Count</h6>
            <h6>555252</h6>
          </div>
        </div>
        <div className="col s12 m6 l2">
          <div class="card-panel common  white-text center">
            <h6>Failed Login Count</h6>
            <h6>55520</h6>
          </div>
        </div>
      </div>
      <button className="btn purple darken-2  right pane-btn">see more</button>
    </div>
  );
};

export default AdminQuickStats;
