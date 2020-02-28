import { ADD_EDUCATION, REMOVE_EDUCATION } from "../actions/types";
const intianEdu = {
  id: "",
  institution: "",
  certification: "",
  description: "",
  start: "",
  end: ""
};
let initialState = [intianEdu];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_EDUCATION: {
      let old = state.filter(e => e.id !== payload.id);

      let edus = [payload, ...old];

      return edus;
    }

    case REMOVE_EDUCATION:
      return state.filter(s => s.id !== payload);
    default:
      return state;
  }
};
