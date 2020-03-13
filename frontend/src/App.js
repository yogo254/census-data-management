import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import store from "./store";

import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Showcase from "./components/Showcase";
import Login from "./components/Login";
import ViewPopulation from "./components/population/ViewPopulation";
import Portal from "./components/Portal";
import AddPopulation from "./components/population/AddPopulation";
import UpdatePerson from "./components/population/UpdatePerson";

import "./App.css";

function App() {
  let options = {
    format: "dd-mm-yyyy"
  };
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);
  });

  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, options);
  });
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, options);
  });

  return (
    <Provider store={store.store}>
      <Router basename={"app"} hashType={"noslash"}>
        <Fragment>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Showcase} />

            <Switch>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/population/add" component={AddPopulation} />
              <Route exact path="/portal" component={Portal} />
              <Route exact path="/population/view" component={ViewPopulation} />
              <Route exact path="/population/update" component={UpdatePerson} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
