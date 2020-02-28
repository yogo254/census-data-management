import React from "react";
import Showcase from "./Showcase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const submit = e => {
    e.preventDefault();
    history.push("/portal");
  };
  return (
    <div>
      <Showcase />

      <div className="row">
        <div className="col s10 offset-s1 m6 offset-m3 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
          <h5 className=" blue-text">ACCOUNT LOGIN</h5>
          <p className=" black-text">Login to access your account dashboard</p>
          <form className="form" onSubmit={e => submit(e)}>
            <div className="row">
              <div className="input-field">
                <input
                  className="black-text"
                  type="email"
                  id="email"
                  required
                />
                <label className="black-text">
                  <i className="fa fa-lock"></i> Email
                </label>
              </div>
              <div className="input-field">
                <input
                  className="black-text"
                  type="password"
                  required
                  id="password"
                />
                <label className="black-text">
                  <i className="fa fa-key"></i> Password
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn common white-text waves-effect waves-light nav-btn"
                >
                  <i className="fa fa-unlock"></i> Login
                </button>
                <button className="btn pink white-text waves-effect waves-light modal-action modal-close  nav-btn ">
                  <i className="fa fa-sync"></i> Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
