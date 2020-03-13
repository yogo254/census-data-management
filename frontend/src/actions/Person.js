import {
  ADD_WORK,
  REMOVE_WORK,
  PERSON_UPDATE,
  ADD_ALERT,
  PERSON_CLEAR,
  ADD_EMPTY_EDUCATION,
  ADD_EMPTY_WORK,
  ADD_EDUCATION,
  REMOVE_EDUCATION
} from "./types";
import { serverAddress } from "../config/Config";

import axios from "axios";

export const addEmptyWork = () => dispatch => {
  dispatch({ type: ADD_EMPTY_WORK });
};

export const addEmptyEducation = () => dispatch => {
  dispatch({ type: ADD_EMPTY_EDUCATION });
};

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

export const personUpdate = person => dispatch => {
  dispatch({
    type: PERSON_UPDATE,
    payload: person
  });
};

export const addNewPerson = person => dispatch => {
  console.log(person);
  axios
    .post(`${serverAddress}/api/person/register`, person)
    .then(res => dispatch({ type: ADD_ALERT, payload: res.data }));
};

export const clearPerson = () => dispatch => {
  dispatch({ type: PERSON_CLEAR });
};
