import React from "react";
import Identifications from "./Identification";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";

const AddPopulation = () => {
  return (
    <div className="portal-component">
      <Identifications />
      <PersonalDetails />
      <Education />
    </div>
  );
};

export default AddPopulation;
