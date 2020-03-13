import React from "react";
import { connect } from "react-redux";
import { previous, next } from "../../actions/StackPanel";
import { personUpdate } from "../../actions/Person";

const Ethnicity = ({ previous, next, personUpdate, person, context }) => {
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
        {context === "updateperson" ? (
          <h5 className=" blue-text">Update Ethnicity Details</h5>
        ) : (
          <h5 className=" blue-text">Add Ethnicity Details</h5>
        )}

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <p className="left blue-text">District:</p>
              <input
                className="black-text"
                type="text"
                id="district"
                name="district"
                placeholder="District"
                defaultValue={person.district}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Division:</p>
              <input
                className="black-text"
                type="text"
                id="division"
                name="division"
                required
                placeholder="Divison"
                defaultValue={person.division}
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Location:</p>
              <input
                className="black-text"
                type="text"
                id="location"
                name="location"
                defaultValue={person.location}
                placeholder="Location"
                required
              />
            </div>

            <div className="input-field">
              <p className="left blue-text">SubLocation:</p>
              <input
                className="black-text"
                type="text"
                id="sublocation"
                name="sublocation"
                placeholder="Sub Location"
                defaultValue={person.sublocation}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Village:</p>
              <input
                className="black-text"
                type="text"
                id="village"
                name="village"
                placeholder="Village"
                defaultValue={person.village}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Clan:</p>
              <input
                className="black-text"
                type="text"
                id="clan"
                name="clan"
                defaultValue={person.clan}
                placeholder="Clan"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Family:</p>
              <input
                className="black-text"
                type="text"
                id="family"
                name="family"
                placeholder="Family"
                defaultValue={person.family}
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">County:</p>
              <input
                className="black-text"
                type="text"
                id="county"
                name="county"
                defaultValue={person.county}
                placeholder="County"
                required
              />
            </div>
            <div className="input-field">
              <p className="left blue-text">Nationality:</p>
              <input
                className="black-text"
                type="text"
                id="natinality"
                name="nationality"
                required
                placeholder="Nationality"
                defaultValue={person.nationality}
              />
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

export default connect(mapPropsToState, { next, personUpdate, previous })(
  Ethnicity
);
