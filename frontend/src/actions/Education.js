import { ADD_EDUCATION, REMOVE_EDUCATION } from "./types";

export const addEducation = education => dispatch => {
  dispatch({
    type: ADD_EDUCATION,
    payload: education
  });
};

export const removeEducation = id => dispatch => {
  dispatch({
    type: REMOVE_EDUCATION,
    payload: id
  });
};
