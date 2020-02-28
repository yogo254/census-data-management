import React from "react";

const Identification = () => {
  const submit = e => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col s10 offset-s1 m8 offset-m2 card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
        <h5 className=" blue-text">Add Identification Details</h5>

        <form className="form" onSubmit={e => submit(e)}>
          <div className="row">
            <div className="input-field">
              <input className="black-text" type="text" id="nationalid" />
              <label className="black-text">Natinal ID</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="passportno" />
              <label className="black-text">Passport NO</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="votersno" />
              <label className="black-text">Voters No</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="nssfno" />
              <label className="black-text">NSSF NO</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" id="nhifno" />
              <label className="black-text">NHIF NO</label>
            </div>
            <div className="input-field">
              <input className="black-text" type="text" required id="birthno" />
              <label className="black-text">Birth Certificate No</label>
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

export default Identification;
