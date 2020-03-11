import React from "react";

const ViewPopulation = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ViewPopulation;
