import { PERSON_UPDATE } from "./types";

export const personUpdate = person => dispatch => {
  dispatch({
    type: PERSON_UPDATE,
    payload: person
  });
};
