import { combineReducers } from "redux";
import education from "./EducationReducer";
import work from "./WorkReducer";
import stack from "./StackPanelReducer";
import person from "./PersonReducer";
import alerts from "./Alert";
import persons from "./PersonsReducer";
import context from "./ContextReducer";

const rootReducer = combineReducers({
  context,
  education,
  work,
  stack,
  person,
  alerts,
  persons
});

export default rootReducer;
