import { ADD_WORK, REMOVE_WORK } from "./types";

export const addWork = work => dispatch => {
  dispatch({
    type: ADD_WORK,
    payload: work
  });
};

export const removeWork = id => dispatch => {
  dispatch({
    type: REMOVE_WORK,
    payload: id
  });
};
