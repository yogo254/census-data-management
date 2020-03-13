import React from "react";
import { connect } from "react-redux";
import { personUpdate, clearPerson } from "../../actions/Person";
import { serverAddress } from "../../config/Config";
import { setContext } from "../../actions/Context";
import { addWork } from "../../actions/Work";
import { addEducation } from "../../actions/Education";
import axios from "axios";

const SearchPerson = ({
  person,
  clearPerson,
  setContext,
  addWork,
  addEducation
}) => {
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

    if (!person.id) {
      if (obj.nationalId)
        axios
          .get(`${serverAddress}/api/person/details/national`, {
            headers: { id: obj.nationalId }
          })
          .then(res => {
            if (res.data !== "") {
              res.data.works.forEach(w => addWork(w));
              res.data.educations.forEach(e => addEducation(e));
              personUpdate(res.data);
            }
          });

      if (obj.passportNo)
        axios
          .get(`${serverAddress}/api/person/details/passport`, {
            headers: { id: obj.passportNo }
          })
          .then(res => {
            if (res.data !== "") {
              res.data.works.forEach(w => addWork(w));
              res.data.educations.forEach(e => addEducation(e));
              personUpdate(res.data);
            }
          });

      if (obj.birthNo)
        axios
          .get(`${serverAddress}/api/person/details/birth`, {
            headers: { id: obj.birthNo }
          })
          .then(res => {
            if (res.data !== "") {
              res.data.works.forEach(w => addWork(w));
              res.data.educations.forEach(e => addEducation(e));
              personUpdate(res.data);
            }
          });
    }
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text"> Search Person</h5>
        <button
          onClick={() => clearPerson()}
          className="btn white blue-text waves-effect waves-light nav-btn right"
        >
          Clear
        </button>

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
              <p className="left blue-text">Birth CERT NO:</p>
              <input
                className="black-text"
                type="text"
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
                Search
              </button>
            </div>
            <div className="update-search">
              <h5>Search Result:</h5>
              {person.id && person.id !== "" ? (
                <div
                  className="card horizontal"
                  onClick={() => setContext("updateperson")}
                >
                  <div className="card-image">
                    <img className="responsive-img" src="img/person3.jpg" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span className="card-title">{`${person.firstname +
                        " "} ${person.lastname} `}</span>
                      <ul>
                        <li>Place of Birth:{person.placeOfBirth}</li>
                        <li>County:{person.county}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <h5 className="red-text">No Result Found</h5>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  person: state.person,
  context: state.context
});

export default connect(mapStateToProps, {
  personUpdate,
  clearPerson,
  setContext,
  addWork,
  addEducation
})(SearchPerson);
