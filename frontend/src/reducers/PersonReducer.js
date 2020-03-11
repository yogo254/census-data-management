import { PERSON_UPDATE } from "../actions/types";
const initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case PERSON_UPDATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
