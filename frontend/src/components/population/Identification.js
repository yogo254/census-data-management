import React from "react";
import { connect } from "react-redux";
import { next } from "../../actions/StackPanel";
import { personUpdate, clearPerson } from "../../actions/Person";
import { Link } from "react-router-dom";

const Identification = ({ next, personUpdate, person, clearPerson }) => {
  const submit = e => {
    e.preventDefault();

    let formData = new FormData(e.target).entries();
    let data = [...[...formData]];
    let obj = {};

    data.forEach(d => {
      let name = d[0];
      let value = d[1];
      obj[`${name}`] = value;
    });

    personUpdate(obj);
    next();
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Identification Details</h5>
        <Link onClick={() => clearPerson()} className="right">
          clear
        </Link>
        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">National ID:</p>
              <input
                className="black-text"
                type="text"
                id="nationalid"
                name="nationalId"
                placeholder="National ID"
                defaultValue={person.nationalId}
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Passport NO:</p>
              <input
                className="black-text"
                type="text"
                id="passportno"
                name="passportNo"
                placeholder="Passport No"
                defaultValue={person.passportNo}
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Voter ID:</p>
              <input
                className="black-text"
                type="text"
                id="votersno"
                name="voterId"
                placeholder="Voters ID"
                defaultValue={person.voterId}
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">NSSF NO:</p>
              <input
                className="black-text"
                type="text"
                id="nssfno"
                name="nssfNo"
                placeholder="NSSF NO"
                defaultValue={person.nssfNo}
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">NHIF NO:</p>
              <input
                className="black-text"
                type="text"
                id="nhifno"
                name="nhifNo"
                defaultValue={person.nhifNo}
                placeholder="NHIF NO"
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Birth CERT NO:</p>
              <input
                className="black-text"
                type="text"
                required
                id="birthno"
                name="birthNo"
                placeholder="birthNo"
                defaultValue={person.birthNo}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn common white-text waves-effect waves-light nav-btn right"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  person: state.person
});

export default connect(mapStateToProps, { next, personUpdate, clearPerson })(
  Identification
);
