import { ADD_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid/v4";

export const addAlert = alert => dispatch => {
  let id = uuid();
  alert.id = id;
  dispatch({ type: ADD_ALERT, payload: alert });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 10000);
};
