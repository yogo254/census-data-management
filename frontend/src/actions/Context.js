import { SET_CONTEXT } from "./types";

export const setContext = context => dispatch => {
  dispatch({ type: SET_CONTEXT, payload: context });
};
