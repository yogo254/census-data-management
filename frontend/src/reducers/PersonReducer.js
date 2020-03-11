import { PERSON_UPDATE, PERSON_CLEAR } from "../actions/types";
const initialState = {};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case PERSON_UPDATE:
      return { ...state, ...payload };
    case PERSON_CLEAR:
      return {};

    default:
      return state;
  }
};
