import { NEXT, PREVIOUS, SEEK } from "./types";

export const previous = () => dispatch => {
  dispatch({
    type: PREVIOUS
  });
};

export const next = () => dispatch => {
  dispatch({
    type: NEXT
  });
};
export const seek = index => dispatch => {
  dispatch({
    type: SEEK,
    payload: index
  });
};
