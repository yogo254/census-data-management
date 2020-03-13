import { combineReducers } from "redux";

import stack from "./StackPanelReducer";
import person from "./PersonReducer";
import alerts from "./Alert";
import persons from "./PersonsReducer";
import context from "./ContextReducer";

const rootReducer = combineReducers({
  context,
  stack,
  person,
  alerts,
  persons
});

export default rootReducer;
