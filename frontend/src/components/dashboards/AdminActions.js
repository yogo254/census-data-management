import React from "react";
import { Link } from "react-router-dom";

const AdminActions = () => {
  return (
    <div className="portal-component">
      <h5>Actions</h5>
      <div className="row">
        <div className="col s12 m6 l2">
          <div class="card medium">
            <div class="card-image">
              <img src="img/img7.jpg" />
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
            <div class="card-action">
              <a href="#">More Actions</a>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l2">
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
            <div class="card-action">
              <a href="#">More Actions</a>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l2">
          <div class="card medium">
            <div class="card-image">
              <img src="img/img7.jpg" />
              <span class="card-title">Population Data</span>
            </div>
            <div class="card-content">
              <ul>
                <li>
                  <Link to="/register" className="blue-text">
                    Add New
                  </Link>
                </li>
                <li>
                  <Link className="blue-text">View Data</Link>
                </li>
                <li>
                  <Link className="blue-text">Update Details</Link>
                </li>
              </ul>
            </div>
            <div class="card-action">
              <a href="#">More Actions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminActions;
