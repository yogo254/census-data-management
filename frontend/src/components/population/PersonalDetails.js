import React from "react";
import { connect } from "react-redux";
import { previous, next } from "../../actions/StackPanel";
import { personUpdate } from "../../actions/Person";
import { addAlert } from "../../actions/Alert";
import Alert from "../Alert";
import { Select } from "react-materialize";
import moment from "moment";

const PersonalDetails = ({
  next,
  previous,
  personUpdate,
  person,
  context,
  addAlert
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
    if (moment(obj.dob).isValid()) {
      obj.dob = moment(obj.dob).format("YYYY-MM-DD");
      personUpdate(obj);
      next();
    } else if (moment(obj.dob, "DD-MM-YYYY").isValid()) {
      obj.dob = moment(obj.dob, "DD-MM-YYYY").format("YYYY-MM-DD");
      personUpdate(obj);
      next();
    } else
      addAlert({
        message: `invalid date of birth: ${obj.dob}`,
        type: "danger"
      });
  };

  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        {context === "updateperson" ? (
          <h5 className=" blue-text">Update Personal Details</h5>
        ) : (
          <h5 className=" blue-text">Add Personal Details</h5>
        )}
        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">Firstname:</p>
              <input
                className="black-text"
                type="text"
                id="firstname"
                name="firstname"
                defaultValue={person.firstname}
                placeholder="Firstname"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Surname:</p>
              <input
                className="black-text"
                type="text"
                id="surname"
                name="surname"
                required
                defaultValue={person.surname}
                placeholder="Surname"
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Lastname</p>
              <input
                className="black-text"
                type="text"
                id="lastname"
                name="lastname"
                required
                defaultValue={person.lastname}
                placeholder="Lastname"
              />
            </div>

            <div className="input-field">
              <p className="left blue-text">Fathers ID:</p>
              <input
                className="black-text"
                type="text"
                id="fathersId"
                name="father"
                required
                placeholder="Father's ID"
                defaultValue={person.father}
              />
            </div>

            <div className="input-field">
              <p className="left blue-text">Mother's ID:</p>
              <input
                className="black-text"
                type="text"
                id="mothersId"
                name="mother"
                placeholder="Mother's ID"
                defaultValue={person.mother}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Date of Birth:</p>
              <input
                className="black-text"
                type="text"
                id="dob"
                name="dob"
                defaultValue={new Date(person.dob).toLocaleDateString()}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Place of Birth:</p>
              <input
                className="black-text"
                type="text"
                id="pob"
                name="placeOfBirth"
                defaultValue={person.placeOfBirth}
                placeholder="Place of Birth"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Phone:</p>
              <input
                className="black-text"
                type="text"
                id="phone"
                name="phone"
                defaultValue={person.phone}
                placeholder="Phone"
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Email:</p>
              <input
                className="black-text"
                type="email"
                id="email"
                name="emailAddress"
                placeholder="Email Address"
                defaultValue={person.emailAddress}
              />
            </div>

            <div className="input-field">
              <p className="left blue-text">Spauces:</p>
              <input
                className="black-text"
                type="text"
                id="spauces"
                name="spauces"
                defaultValue={person.spauces}
                placeholder="Spauces"
              />
            </div>
            <div clas="input-field ">
              <p className="left blue-text">Religion:</p>
              <Select s={12} name="religion" defaultValue={person.religion}>
                <option value="christian">Christian</option>

                <option value="protestant">Protestant</option>

                <option value="other">Other</option>
              </Select>
            </div>

            <div clas="input-field ">
              <p className="left blue-text">Gender:</p>
              <Select s={12} name="gender" defaultValue={person.gender}>
                <option value="male">Male</option>

                <option value="female">Female</option>
              </Select>
            </div>
            <div clas="input-field ">
              <p className="left blue-text">Marital Status:</p>
              <Select
                s={12}
                name="maritalStatus"
                defaultValue={person.maritalStatus}
              >
                <option value="single">Single</option>

                <option value="married">Married</option>

                <option value="devorced">Devorced</option>
              </Select>
            </div>

            <div>
              <button
                type="submit"
                className="btn common white-text waves-effect waves-light nav-btn right"
              >
                Next
              </button>
              <button
                onClick={() => previous()}
                type="submit"
                className="btn common white-text waves-effect waves-light nav-btn left"
              >
                Previous
              </button>
            </div>
            <Alert />
          </div>
        </form>
      </div>
    </div>
  );
};
const mapPropsToState = state => ({
  person: state.person,
  context: state.context
});

export default connect(mapPropsToState, {
  next,
  previous,
  personUpdate,
  addAlert
})(PersonalDetails);
