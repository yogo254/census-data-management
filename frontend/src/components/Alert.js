import React from "react";

import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    <div>
      {alerts.map(alert => {
        return alert.type === "danger" ? (
          <div key={alert.id} className="row">
            <div className="col s10 offset-s1 m6 offset-m3 card-panel red darken-3 z-depth-0">
              <p className="white-text">{alert.message}</p>
            </div>
          </div>
        ) : (
          <div key={alert.id} className="row">
            <div className="col s10 offset-s1 m6 offset-m3 card-panel green  z-depth-0">
              <p className="white-text">{alert.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapPropsToState = state => ({
  alerts: state.alerts
});

export default connect(mapPropsToState)(Alert);
