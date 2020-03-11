import { GET_PERSONS } from "../actions/types";
const initialState = { content: [] };

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PERSONS:
      return payload;

    default:
      return state;
  }
};
