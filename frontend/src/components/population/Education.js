import React from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { addEducation, removeEducation } from "../../actions/Person";
import { next, previous } from "../../actions/StackPanel";

const Education = ({
  education,
  addEducation,
  removeEducation,
  next,
  previous
}) => {
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Education Details</h5>
        {education.map(e => {
          return (
            <form
              key={uuid()}
              className="form"
              onSubmit={event => {
                event.preventDefault();
                let formData = new FormData(event.target).entries();
                let data = [...[...formData]];
                let obj = {};

                if (e.id === "") obj.id = uuid();
                else obj.id = e.id;

                data.forEach(d => {
                  let name = d[0];
                  let value = d[1];
                  obj[`${name}`] = value;
                });

                addEducation(obj);
              }}
            >
              {e.id === "" ? (
                <h6 className="black-text darken-4">Add New</h6>
              ) : null}
              <div className="row">
                <div className="input-field">
                  <p className="left">Institution:</p>
                  <input
                    className="black-text"
                    type="text"
                    required
                    id="institution"
                    name="institution"
                    defaultValue={e.institution}
                  />
                </div>
                <div className="input-field">
                  <p className="left">Certification:</p>
                  <input
                    className="black-text"
                    type="text"
                    required
                    id="certification"
                    name="certification"
                    defaultValue={e.certification}
                  />
                </div>
                <div className="input-field">
                  <p className="left">Description:</p>
                  <textarea
                    className="black-text materialize-textarea"
                    type="text"
                    id="description"
                    name="description"
                    defaultValue={e.description}
                  />
                </div>

                <div className="input-field">
                  <p className="left">Start Date:</p>
                  <input
                    className="black-text datepicker "
                    type="date"
                    required
                    id="start"
                    name="start"
                    defaultValue={e.start}
                  />
                </div>
                <div className="input-field">
                  <p className="left">End Date:</p>
                  <input
                    className="black-text datepicker"
                    type="date"
                    name="end"
                    required
                    id="end"
                    defaultValue={e.end}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn green white-text waves-effect waves-light nav-btn right"
                  >
                    {e.id === "" ? "add" : "save"}
                  </button>
                  {e.id !== "" ? (
                    <button
                      onClick={c => removeEducation(e.id)}
                      className="btn white  purple-text border-purple waves-effect waves-light nav-btn left"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
            </form>
          );
        })}

        <div>
          <button
            onClick={() => next()}
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
    </div>
  );
};
const mapStateToProps = state => ({
  education: state.person.educations
});

export default connect(mapStateToProps, {
  addEducation,
  removeEducation,
  next,
  previous
})(Education);
