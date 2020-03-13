import {
  PERSON_UPDATE,
  PERSON_CLEAR,
  ADD_EDUCATION,
  REMOVE_EDUCATION,
  ADD_EMPTY_EDUCATION,
  ADD_EMPTY_WORK,
  ADD_WORK,
  REMOVE_WORK
} from "../actions/types";

const intianEdu = {
  id: "",
  institution: "",
  certification: "",
  description: "",
  start: "",
  end: ""
};
const initialWork = {
  id: "",
  company: "",
  position: "",
  description: "",
  start: "",
  end: ""
};

const initialState = { educations: [intianEdu], works: [initialWork] };

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_WORK: {
      let old = state.works.filter(e => e.id !== payload.id);

      return { ...state, ...{ works: [payload, ...old] } };
    }
    case ADD_EMPTY_WORK: {
      let old = state.works.filter(e => e.id !== "");

      return { ...state, ...{ works: [...old, initialWork] } };
    }

    case REMOVE_WORK: {
      let work = state.works.filter(s => s.id !== payload);
      return { ...state, ...{ works: [...work] } };
    }

    case ADD_EMPTY_EDUCATION: {
      let old = state.educations.filter(e => e.id !== "");

      let edus = [...old, intianEdu];

      return { ...state, ...{ educations: edus } };
    }

    case ADD_EDUCATION: {
      let old = state.educations.filter(e => e.id !== payload.id);

      let edus = [payload, ...old];

      return { ...state, ...{ educations: edus } };
    }
    case REMOVE_EDUCATION: {
      let edus = state.educations.filter(s => s.id !== payload);
      return { ...state, ...{ educations: [...edus] } };
    }

    case PERSON_UPDATE:
      return { ...state, ...payload };
    case PERSON_CLEAR:
      return initialState;

    default:
      return state;
  }
};
