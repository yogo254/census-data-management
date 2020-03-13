import React from "react";
import { connect } from "react-redux";
import { addWork, removeWork } from "../../actions/Person";
import { previous, seek } from "../../actions/StackPanel";
import { addNewPerson } from "../../actions/Person";

import uuid from "uuid/v4";
import { useHistory } from "react-router-dom";

const Work = ({
  work,
  addWork,
  removeWork,
  previous,
  seek,
  education,
  person,
  addNewPerson
}) => {
  let history = useHistory();
  const finish = e => {
    person.educations = education.filter(edu => edu.id !== "");
    person.works = work.filter(w => w.id !== "");
    person.spauces = person.spauces.split(",");

    addNewPerson(person);
    seek(0);
    history.push("/portal");
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Work Details</h5>
        {work.map(e => {
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

                addWork(obj);
              }}
            >
              {e.id === "" ? (
                <h6 className="black-text darken-4">Add New</h6>
              ) : null}
              <div className="row">
                <div className="input-field">
                  <p className="left">Company:</p>
                  <input
                    className="black-text"
                    type="text"
                    required
                    id="company"
                    name="company"
                    defaultValue={e.company}
                  />
                </div>
                <div className="input-field">
                  <p className="left">Position:</p>
                  <input
                    className="black-text"
                    type="text"
                    required
                    id="position"
                    name="position"
                    defaultValue={e.position}
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
                      onClick={c => removeWork(e.id)}
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
            onClick={() => previous()}
            className="btn common white-text waves-effect waves-light nav-btn left"
          >
            Previous
          </button>
          <button
            onClick={e => finish(e)}
            className="btn common white-text waves-effect waves-light nav-btn right"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  work: state.person.works,
  education: state.person.educations,
  person: state.person
});

export default connect(mapStateToProps, {
  addWork,
  removeWork,
  previous,
  seek,
  addNewPerson
})(Work);
