import { SET_CONTEXT } from "../actions/types";
const initialState = "default";

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_CONTEXT:
      return payload;

    default:
      return state;
  }
};
