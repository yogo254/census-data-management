import React from "react";
import Identifications from "./Identification";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Ethnicity from "./Ethnicity";
import Work from "./Work";
import { connect } from "react-redux";

const AddPopulation = ({ stack }) => {
  return (
    <div className="portal-component">
      {stack === 0 ? <Identifications /> : null}
      {stack === 1 ? <PersonalDetails /> : null}
      {stack === 2 ? <Ethnicity /> : null}

      {stack === 3 ? <Education /> : null}
      {stack === 4 ? <Work /> : null}
    </div>
  );
};

const mapStateToProps = state => ({ stack: state.stack });

export default connect(mapStateToProps)(AddPopulation);
