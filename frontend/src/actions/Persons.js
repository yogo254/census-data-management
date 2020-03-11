import { GET_PERSONS } from "./types";
import axios from "axios";
import { serverAddress } from "../config/Config";
export const getAllPersons = () => dispatch => {
  axios
    .get(`${serverAddress}/api/person/all`, {
      headers: { page: 0, size: 50 }
    })
    .then(res => dispatch({ type: GET_PERSONS, payload: res.data }));
};
