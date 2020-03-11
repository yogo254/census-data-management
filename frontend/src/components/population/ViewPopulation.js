import React from "react";
import { connect } from "react-redux";

const ViewPopulation = ({ persons }) => {
  return (
    <div className="portal-component">
      <table className="responsive-table striped highlight">
        <thead>
          <tr>
            <th className="blue-text" data-field="id">
              Id
            </th>
            <th className="blue-text" data-field="firstname">
              Firstname
            </th>
            <th className="blue-text" data-field="surname">
              Surname
            </th>
            <th className="blue-text" data-field="lastname">
              Lastname
            </th>
            <th className="blue-text" data-field="gender">
              Gender
            </th>
            <th className="blue-text" data-field="placeOfBirth">
              Place Of Birth
            </th>
            <th className="blue-text" data-field="county">
              County
            </th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => {
            return (
              <tr>
                <td>{p.id}</td>
                <td>{p.firstname}</td>
                <td>{p.surname}</td>
                <td>{p.lastname}</td>
                <td>{p.gender}</td>
                <td>{p.placeOfBirth}</td>
                <td>{p.county}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => ({
  persons: state.persons.content
});

export default connect(mapStateToProps)(ViewPopulation);
