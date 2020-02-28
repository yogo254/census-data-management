import React from "react";

const PersonalDetails = () => {
  const submit = e => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Personal Details</h5>

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <input className="black-text" type="text" id="firstname" />
              <label className="black-text">Firstname</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="surname" />
              <label className="black-text">Surname</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="lastname" />
              <label className="black-text">Lastname</label>
            </div>

            <div className="input-field">
              <input className="black-text" type="text" id="fathersId" />
              <label className="black-text">Father's ID</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="mothersId" />
              <label className="black-text">Mother's ID</label>
            </div>

            <div>
              <button
                type="submit"
                className="btn common white-text waves-effect waves-light nav-btn right"
              >
                Next
              </button>
              <button
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

export default PersonalDetails;
