import { combineReducers } from "redux";
import education from "./EducationReducer";
import work from "./WorkReducer";
import stack from "./StackPanelReducer";
import person from "./PersonReducer";
import alerts from "./Alert";
import persons from "./PersonsReducer";

const rootReducer = combineReducers({
  education,
  work,
  stack,
  person,
  alerts,
  persons
});

export default rootReducer;
