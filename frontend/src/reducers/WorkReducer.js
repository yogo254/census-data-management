import { ADD_WORK, REMOVE_WORK } from "../actions/types";
const initialWork = {
  id: "",
  company: "",
  position: "",
  description: "",
  start: "",
  end: ""
};
let initialState = [initialWork];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_WORK: {
      let old = state.filter(e => e.id !== payload.id);

      return [payload, ...old];
    }

    case REMOVE_WORK:
      return state.filter(s => s.id !== payload);
    default:
      return state;
  }
};
