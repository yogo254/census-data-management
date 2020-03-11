import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div>
      {type === "danger" ? (
        <div className="row">
          <div className="col s10 offset-s1 m6 offset-m3 card-panel red lighten-4 z-depth-0"></div>
          <h5 className="white-text">{message}</h5>
        </div>
      ) : (
        <div className="row">
          <div className="col s10 offset-s1 m6 offset-m3 card-panel green  z-depth-0"></div>
          <h5 className="white-text">{message}</h5>
        </div>
      )}
    </div>
  );
};

export default Alert;
