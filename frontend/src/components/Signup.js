import React from "react";
import Showcase from "./Showcase";
import { Select } from "react-materialize";

const Signup = () => {
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
    console.log(obj);
  };
  return (
    <div>
      <Showcase />
      <section class="section section-signup">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <h4>Get a free account</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
              <h4>Download data for free</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
              <h4>Join current projects and research</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus veniam id nisi? Saepe sint ipsum distinctio molestiae,
                recusandae autem sequi?
              </p>
            </div>
            <div class="col s12 m6">
              <div class="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                <form onSubmit={e => submit(e)}>
                  <div class="input-field">
                    <input
                      required
                      type="text"
                      id="first_name"
                      name="firstname"
                      required
                    />
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field">
                    <input
                      required
                      type="text"
                      id="last_name"
                      name="lastname"
                      required
                    />
                    <label for="last_name">Last Name</label>
                  </div>
                  <div class="input-field">
                    <input required type="email" id="email" name="email" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field">
                    <input
                      required
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field">
                    <input
                      required
                      type="password"
                      id="confirm"
                      name="confirmPass"
                      required
                    />
                    <label for="password">Confirm Password</label>
                  </div>

                  <div class="input-field">
                    <input required type="text" id="company" name="company" />
                    <label for="company">Company</label>
                  </div>
                  <div class="input-field">
                    <Select s={12} name="role" defaultValue="Select Role">
                      <option value="professional">
                        Professional Developer
                      </option>
                      <option value="hobbyist">Hobbyist</option>
                      <option value="student">Student</option>
                      <option value="manager">Manager</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>

                  <div class="input-field">
                    <input type="submit" className="btn common" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
