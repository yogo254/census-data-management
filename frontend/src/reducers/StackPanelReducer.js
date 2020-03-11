import { NEXT, PREVIOUS, SEEK } from "../actions/types";
const initialState = 0;

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case NEXT:
      return ++state;

    case PREVIOUS:
      return --state;
    case SEEK:
      return payload;
    default:
      return state;
  }
};
