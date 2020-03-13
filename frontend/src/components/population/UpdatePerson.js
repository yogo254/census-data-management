import React from "react";
import AddPopulation from "./AddPopulation";
import { connect } from "react-redux";
import SearchPerson from "./SearchPerson";

const UpdatePerson = ({ person, context }) => {
  return (
    <div className="portal-component">
      {context === "updateperson" && person.id ? (
        <AddPopulation />
      ) : (
        <SearchPerson />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  person: state.person,
  context: state.context
});

export default connect(mapStateToProps)(UpdatePerson);
