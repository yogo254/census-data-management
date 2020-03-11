import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllPersons } from "../../actions/Persons";

const AdminActions = ({ getAllPersons }) => {
  return (
    <div className="portal-component">
      <h5>Actions</h5>
      <div className="row">
        <div className="col s12 m6 ">
          <div class="card medium">
            <div class="card-image">
              <img src="img/population2.jpg" />
              <span class="card-title">Manage Users</span>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <Link className="blue-text">Add Users</Link>
                </li>
                <li>
                  <Link className="blue-text">View Users</Link>
                </li>
                <li>
                  <Link className="blue-text">User Permisions</Link>
                </li>
                <li>
                  <Link className="blue-text">User Roles</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col s12 m6 ">
          <div class="card medium">
            <div class="card-image">
              <img src="img/img7.jpg" />
              <span class="card-title">Security</span>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <Link className="blue-text"> Roles</Link>
                </li>
                <li>
                  <Link className="blue-text">Permissions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col s12 m6 ">
          <div class="card medium">
            <div class="card-image">
              <img src="img/population.jpg" />
              <span class="card-title">Population Data</span>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <Link to="/population/add" className="blue-text">
                    Add New
                  </Link>
                </li>
                <li>
                  <Link
                    to="/population/view"
                    onClick={() => getAllPersons()}
                    className="blue-text"
                  >
                    View Data
                  </Link>
                </li>
                <li>
                  <Link className="blue-text">Update Details</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col s12 m6 ">
          <div class="card medium">
            <div class="card-image">
              <img src="img/analytics.jpg" />
              <span class="card-title">Population Analytics</span>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <Link className="blue-text">View Current</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getAllPersons })(AdminActions);
