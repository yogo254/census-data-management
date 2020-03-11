import { combineReducers } from "redux";
import education from "./EducationReducer";
import work from "./WorkReducer";
import stack from "./StackPanelReducer";
import person from "./PersonReducer";

const rootReducer = combineReducers({ education, work, stack, person });

export default rootReducer;
