import { PERSON_UPDATE, ADD_ALERT, PERSON_CLEAR } from "./types";
import { serverAddress } from "../config/Config";

import axios from "axios";

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
